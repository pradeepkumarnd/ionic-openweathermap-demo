(function () {
  'use strict';

  angular.module('ioBase', [])
    .factory('BaseDataService', function () {

      function BaseDataService (resource) {
        this.resource = resource;
      }

      BaseDataService.prototype = {
        constructor: BaseDataService,

        fetchAll: function (queryParams) {
          return this.resource.findAll(queryParams);
        },

        fetchAllWithParamAndOptions: function (params, options) {
          return this.resource.findAll(params, options);
        },

        fetch: function (id) {
          return this.resource.find(id);
        },

        ejectAll: function () {
          return this.resource.ejectAll();
        },

        getAll: function () {
          return this.resource.getAll();
        },

        get: function (id) {
          var resource = this.resource;
          if (resource.idAttribute === 'id') {
            return resource.get(id);
          } else {
            /*var result = */
          }
        },

        getWithFilter: function (query) {
          return this.resource.filter(query);
        },

        create: function (entity, options) {
          return this.resource.create(entity, options);
        },

        update: function (entity) {
          return this.resource.update(entity[this.resource.idAttribute], entity);
        },

        delete: function (entity) {
          return this.resource.destroy(entity[this.resource.idAttribute]);
        }

      };

      return BaseDataService;

    });
})();
