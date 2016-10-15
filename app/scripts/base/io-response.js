(function () {
  'use strict';

  var IOObj = {};

  IOObj.Response = function (httpResponse) {

    this._status = httpResponse.status;
    this._success = (this._status >= 200) && (this._status < 300);

    var responseData = httpResponse.data;
    if (responseData) {

      if (responseData.errors || responseData.payload) {
        this._errors = responseData.errors;
        this._payload = responseData.payload;
      } else {
        this._payload = responseData;
      }
    }

    if (this._errors && this._errors[0]) {
      this._singleErrorMessage = responseData.errors[0].messageText;
    } else if (httpResponse.statusText) {
      this._singleErrorMessage = httpResponse.statusText;
    } else {
      this._singleErrorMessage = '';
    }

  };

  IOObj.Response.prototype = {

    isSuccess: function () {
      return this._success;
    },

    isError: function () {
      return !this._success;
    },

    isAuthenticationError: function () {
      return this._status === 401 || this._status === 419;
    },

    getStatus: function () {
      return this._status;
    },

    getPayload: function () {
      return this._payload;
    },

    getErrors: function () {
      return this._errors;
    },

    getRequestMethod: function () {
      return this._requestMethod;
    },

    getRequestUrl: function () {
      return this._requestUrl;
    },

    getErrorsForField: function (fieldId) {
      if (!this._errors) {
        return null;
      }

      return this._errors[fieldId];
    },

    getCustomApiErrorMessage: function () {
      if (this.getErrorsForField('apiError')) {
        return this.getErrorsForField('apiError') && this.getErrorsForField('apiError')[0];
      }
    },

    getErrorMessage: function (fieldId) {

      var errors;
      var message = this._singleErrorMessage;

      if (fieldId) {
        errors = this.getErrorsForField(fieldId);
        if (errors && errors.length > 0) {
          message = errors[0];
        }
      }

      return message;
    },

    setPayload: function (payload) {
      this._payload = payload;
    }
  };
})();
