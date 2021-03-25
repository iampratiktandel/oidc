import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /** UserManager ref */
  public _userManager: UserManager;

  /** Whole User data */
  public _currentUser!: User;

  public _userLoaded: boolean;

  public _currentUserData: BehaviorSubject<object> = new BehaviorSubject<object>({});

  constructor(private _router: Router) { 
    this._userLoaded = false;
    const settings: UserManagerSettings = {
      authority: environment.authority,
      client_id: environment.client_id,
      redirect_uri: environment.redirect_uri,
      post_logout_redirect_uri: environment.post_logout_redirect_uri,
      response_type: 'id_token token',
      scope: 'openid email roles',
    
      silent_redirect_uri: `${environment.redirect_uri}/silent-renew.html`,
      automaticSilentRenew: true,
      accessTokenExpiringNotificationTime: 4,
      // silentRequestTimeout:10000,
    
      filterProtocolClaims: true,
      loadUserInfo: true
    };

    this._userManager = new UserManager(settings);
    this._userManager.events.addUserLoaded((user: User) => {
      this._userManager.clearStaleState().then(() => {})
      this._currentUser = user;
      this._currentUserData.next(this._currentUser.profile);
    })
  }

  /** method are used to get user detail for user manager */
  public async getUser(): Promise<User>  {
    const user: User = await this._userManager.getUser();
    this.setUserData(user);
    return user;
  }

  /** Set User Data */
  public setUserData(user: User): void {
    if (user) {
      this._currentUser = user;
      this._currentUserData.next(user.profile)
    }
  }

  /** Start calling Auth Callback to check authentication */
  public login(): Promise<void> {
    return this._userManager.signinRedirect();
  }

  public logout(): Promise<void> {
    return this._userManager.signoutRedirect();
  }


  /** Set user token if successfully authenticated in auth callback component */
  public completeAuthentication(): Promise<void> {
    return this._userManager.signinRedirectCallback()
      .then((user: User) => {
        this._currentUser = user;
        this._router.navigate(['/'])
      })
      .catch((err) => {
        console.log('After Login', err);
        setTimeout(() => {
          this._router.navigate(['/'])
        }, 3000);
      });
  }

  /** Get User Data */
  public getUserData(): Observable<Object> {
    return this._currentUserData.asObservable();
  }

  /** Get Authorization Header String
   * Contains token_type, access_token
   */
  public getAuthorizationHeaderValue(): string {
    return `${this._currentUser.token_type} ${this._currentUser.access_token}`;
  }

  /** Clear User session */
  private clearUserSession(): void {
    this._currentUser = null;
    this._userManager.removeUser();
    this._userLoaded = false;
  }
}
