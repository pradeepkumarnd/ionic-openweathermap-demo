(function () {
  'use strict';

  angular.module('ioWeather')
    .service('weatherService', function (Weather, BaseDataService, Config) {
      var service = new BaseDataService(Weather);

      service.getWeatherByZip = function (zip) {
        return service.fetchAllWithParamAndOptions(null, {endpoint: Weather.endpoint + '?id=' + zip + '&appid=' + Config.ENV.APP_ID + '&units=imperial' });
      };
      service.getWeatherByCity = function (city) {
        return service.fetchAllWithParamAndOptions(null, {endpoint: Weather.endpoint + '?q=' + city + '&appid=' + Config.ENV.APP_ID + '&units=imperial' });
      };
      service.getWeatherByCoords = function (lat, lon) {
        return service.fetchAllWithParamAndOptions(null, {endpoint: Weather.endpoint + '?lat=' + lat + '&lon=' + lon + '&appid=' + Config.ENV.APP_ID + '&units=imperial' });
      };

      return service;
    });

})();
