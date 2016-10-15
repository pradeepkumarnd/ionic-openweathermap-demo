(function () {
  'use strict';

  angular.module('ioResources').factory('Weather', function (DS, Config) {

    return DS.defineResource({
      name: 'weather',
      endpoint: Config.ENV.SOME_OTHER_URL + 'weather'
    });
  });
})();
