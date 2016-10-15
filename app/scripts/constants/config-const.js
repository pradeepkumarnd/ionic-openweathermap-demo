'use strict';
angular.module('ioConfig', [])
  .constant('Config', {

    // gulp environment: injects environment vars
    ENV: {
      /*inject-env*/
      'SERVER_URL': 'http://localhost:9000/',
    'SOME_OTHER_URL': 'http://api.openweathermap.org/data/2.5/',
    'APP_ID': 'dc3745573bd3d5227ad4e141d6faeab7'
      /*endinject*/
    },

    // gulp build-vars: injects build vars
    BUILD: {
      /*inject-build*/
      /*endinject*/
    }

  });
