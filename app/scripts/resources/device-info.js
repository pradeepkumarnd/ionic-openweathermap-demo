(function () {
  'use strict';

  angular.module('ioResources').factory('DeviceInfo', function (DS) { // DS is the result of `new JSData.DS()`
    return DS.defineResource({
      name: 'deviceInfo'
    });
  });

})();
