import { Injectable } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /** UserManager ref */
  public _userManager: UserManager;

  /** Whole User data */
  /** Whole User data */

  public _currentUser!: User;

  public _currentUserData: BehaviorSubject<object> = new BehaviorSubject<object>({});

  constructor() { 
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
}
