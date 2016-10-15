(function () {
  'use strict';

  angular.module('ioWeather', [])
    .config(function ($stateProvider) {
      $stateProvider
        .state('weather', {
          url: '/weather',
          templateUrl: 'scripts/weather/weather.html',
          controller: 'WeatherController',
          controllerAs: 'c'
        });
    });

})();
