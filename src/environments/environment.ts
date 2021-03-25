// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Provided by organization.
  client_id: 'UppDG9Ma46Q9LVJNNejKFbTRWHCHnNbz',
  // client_id: 'QqxqMJ3rF7oTFTfr2XZuBRkkrnfdLszq',

  // openid profile
  scope: 'openid email roles',
  response_type: 'id_token token',
  authority: 'https://dev-1auth.1rivet.com/',
  redirect_uri: 'http://localhost:4200/dashboard',
  post_logout_redirect_uri: 'http://localhost:4200/',

  // authority: 'https://iampratiktandel.us.auth0.com/u/login',
  // redirect_uri: 'https://iampratiktandel.us.auth0.com/u/login?state=g6Fo2SAxTlB0OHdVbWlJRjlvRGlYU2pUQ3hMVjlJdlY5RWJBeaN0aWTZIDAtM3ktc01zZ0lxdDBRczN0OW5yanJIZ191MDE0ZVRSo2NpZNkgUXF4cU1KM3JGN29URlRmcjJYWnVCUmtrcm5mZExzenE',
  
  // Policy server config
  // silent_redirect_uri: 'http://localhost:4200/silent-renew.html',
  // automaticSilentRenew: true,
  // accessTokenExpiringNotificationTime: 4,
  // silentRequestTimeout:10000,

  // filterProtocolClaims: true,
  // loadUserInfo: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
