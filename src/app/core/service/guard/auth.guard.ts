import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  /** Route Gaurd for Authentication */
  public canActivate(): Promise<boolean> {
    return this.getUser();
  }

  public async getUser(): Promise<boolean>  {
    let loggedIn: boolean = false;
    const user: any = await this.authService.getUser();
    if (user) {
      loggedIn = true;
    } else {
      loggedIn = false;
      this.authService.login();
    }
    return loggedIn;
  } 
  
}
