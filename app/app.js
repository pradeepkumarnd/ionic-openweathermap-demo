angular.module('ionicMobileBase', [
  // load your modules here
  'ui.router',
  'ionic',
  'ngCordova',
  'js-data',
  'ioResources',
  'ioBase',
  'ioConfig',
  'ioWeather'
])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/weather');
  })
  .run(function ($ionicPlatform, $cordovaDevice, DeviceInfo) {
    DeviceInfo.ejectAll();
    if (window.cordova) {
      // Phone
      $ionicPlatform.ready(function () {
        var deviceInfo = { id: $cordovaDevice.getUUID() };
        DeviceInfo.inject(deviceInfo);
      });
    } else {
      // Browser
      var deviceInfo = { id: '1234567890' };
      DeviceInfo.inject(deviceInfo);
    }

  });
