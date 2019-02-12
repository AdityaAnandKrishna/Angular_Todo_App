// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAvBiA5CNnkiKj-ezi6znbsVe8GxiN8j6E",
    authDomain: "todolistapp-e4ff4.firebaseapp.com",
    databaseURL: "https://todolistapp-e4ff4.firebaseio.com",
    projectId: "todolistapp-e4ff4",
    storageBucket: "todolistapp-e4ff4.appspot.com",
    messagingSenderId: "1042818667563"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
