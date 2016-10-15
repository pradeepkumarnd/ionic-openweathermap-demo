(function () {
  'use strict';

  angular.module('ioWeather')
    .controller('WeatherController',
      function (weatherService, $ionicPopup, $ionicLoading, $timeout) {
        var c = this;
        c.isPermission = false;
        c.isWeatherFetched = false;
        c.isPermissionReached = false;
        c.isGeolocationData = false;
        c.cityName = '';
        c.weatherData = {};

        // Get current location
        c.getCurrentLocation = function () {
          $ionicLoading.show({ template: 'Searching Location...' });
          navigator.geolocation.getCurrentPosition(c.onWeatherSuccess, c.onWeatherError, { enableHighAccuracy: true, timeout: 5000 });
        };

        // Get weather by using coordinates
        c.getWeatherByCoords = function (lat, lon) {
          $ionicLoading.show({ template: 'Fetching Weather...' });
          weatherService.ejectAll();
          weatherService.getWeatherByCoords(lat, lon)
            .then(function (response) { c.weatherData = response; c.isWeatherFetched = true; c.hidePopup(); })
            .catch(function (response) { $ionicPopup.alert({ title: 'Weather Fetching Failed!', template: response.data.message }); c.isWeatherFetched = false; })
            .finally(function () { $ionicLoading.hide(); });
        };

        // Get weather by using city name
        c.getWeatherByCity = function () {
          $ionicLoading.show({ template: 'Fetching Weather...' });
          weatherService.ejectAll();
          weatherService.getWeatherByCity(c.cityName)
            .then(function (response) { c.weatherData = response; c.isWeatherFetched = true; })
            .catch(function (response) { $ionicPopup.alert({ title: 'Weather Fetching Failed!', template: response.data.message }); c.isWeatherFetched = false; })
            .finally(function () { $ionicLoading.hide(); });
        };

        c.onWeatherSuccess = function (position) {
          c.isPermission = true;
          c.isPermissionReached = true;
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;
          //var acc = position.coords.accuracy;
          c.getWeatherByCoords(lat, lon);
        };

        c.onWeatherError = function (error) {
          c.permission = false;
          c.isPermissionReached = true;
          if (error.code === 1) { $ionicPopup.alert({ title: 'Geolocation DENIED', template: 'Fetch Weather By City Name..!' }); }
          else if (error.code === 2) {  $ionicPopup.alert({ title: 'POSITION_UNAVAILABLE' }); }
          else if (error.code === 3) {  $ionicPopup.alert({ title: 'Geolocation TIMEOUT', template: 'Fetch Weather By City Name..!' }); }

          $ionicLoading.hide();
        };

        c.hidePopup = function () {
          $timeout(function () { c.isGeolocationData = true; }, 2000);
          $timeout(function () { c.isGeolocationData = false; }, 7000);
        };

        c.getCurrentLocation();
      });
})();
