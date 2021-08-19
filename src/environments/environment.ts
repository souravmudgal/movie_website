// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  movie_db_base_url: 'https://api.themoviedb.org/3/movie/now_playing',
  api_key: '5f9bfd5ab4dce1dd61c8ed83e1680d4e',
  firebaseConfig: {
    apiKey: 'AIzaSyBIiw39RHxiOrNMNh0z7kwMRCHPAe_blRw',
    authDomain: 'movie-bbff3.firebaseapp.com',
    projectId: 'movie-bbff3',
    storageBucket: 'movie-bbff3.appspot.com',
    messagingSenderId: '117161792381',
    appId: '1:117161792381:web:ab8e262e1e4eea20b8f214',
    measurementId: 'G-3JS2N2S2D7',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
