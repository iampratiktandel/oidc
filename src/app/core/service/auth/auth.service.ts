import { Injectable } from '@angular/core';
import { UserManagerSettings } from 'oidc-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    const settings: UserManagerSettings = {
      authority: environment.authority,
      client_id: environment.client_id,
      redirect_uri: environment.redirect_uri,
      post_logout_redirect_uri: environment.post_logout_redirect_uri,
      response_type: 'id_token token',
      scope: 'openid email roles',
    
      silent_redirect_uri: environment.silent_redirect_uri,
      automaticSilentRenew: true,
      accessTokenExpiringNotificationTime: 4,
      // silentRequestTimeout:10000,
    
      filterProtocolClaims: true,
      loadUserInfo: true
    };
  }
}
