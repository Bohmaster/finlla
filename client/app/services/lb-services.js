(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.AccessToken
 * @header lbServices.AccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccessToken",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/AccessTokens/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$__get__user
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "prototype$__get__user": {
          url: urlBase + "/AccessTokens/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#create
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#createMany
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#upsert
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/AccessTokens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#exists
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/AccessTokens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/AccessTokens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#find
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findOne
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/AccessTokens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateAll
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/AccessTokens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#deleteById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/AccessTokens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#count
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/AccessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$updateAttributes
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/AccessTokens/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#createChangeStream
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/AccessTokens/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.findById() instead.
        "::findById::ExtendedUser::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.destroyById() instead.
        "::destroyById::ExtendedUser::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.updateById() instead.
        "::updateById::ExtendedUser::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.accessTokens() instead.
        "::get::ExtendedUser::accessTokens": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.create() instead.
        "::create::ExtendedUser::accessTokens": {
          url: urlBase + "/ExtendedUsers/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.createMany() instead.
        "::createMany::ExtendedUser::accessTokens": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.destroyAll() instead.
        "::delete::ExtendedUser::accessTokens": {
          url: urlBase + "/ExtendedUsers/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.count() instead.
        "::count::ExtendedUser::accessTokens": {
          url: urlBase + "/ExtendedUsers/:id/accessTokens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateOrCreate
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#update
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#destroyById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#removeById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.AccessToken#modelName
    * @propertyOf lbServices.AccessToken
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AccessToken`.
    */
    R.modelName = "AccessToken";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ExtendedUserCredential
 * @header lbServices.ExtendedUserCredential
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ExtendedUserCredential` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ExtendedUserCredential",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ExtendedUserCredentials/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ExtendedUserCredential.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/ExtendedUserCredentials/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#create
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ExtendedUserCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#createMany
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ExtendedUserCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#upsert
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ExtendedUserCredentials",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#exists
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ExtendedUserCredentials/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#findById
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ExtendedUserCredentials/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#find
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ExtendedUserCredentials",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#findOne
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ExtendedUserCredentials/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#updateAll
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ExtendedUserCredentials/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#deleteById
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ExtendedUserCredentials/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#count
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ExtendedUserCredentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#prototype$updateAttributes
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ExtendedUserCredentials/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#createChangeStream
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ExtendedUserCredentials/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.credentials.findById() instead.
        "::findById::ExtendedUser::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/credentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.credentials.destroyById() instead.
        "::destroyById::ExtendedUser::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/credentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.credentials.updateById() instead.
        "::updateById::ExtendedUser::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/credentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.credentials() instead.
        "::get::ExtendedUser::credentials": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/credentials",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.credentials.create() instead.
        "::create::ExtendedUser::credentials": {
          url: urlBase + "/ExtendedUsers/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.credentials.createMany() instead.
        "::createMany::ExtendedUser::credentials": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.credentials.destroyAll() instead.
        "::delete::ExtendedUser::credentials": {
          url: urlBase + "/ExtendedUsers/:id/credentials",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.credentials.count() instead.
        "::count::ExtendedUser::credentials": {
          url: urlBase + "/ExtendedUsers/:id/credentials/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#updateOrCreate
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#update
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#destroyById
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#removeById
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ExtendedUserCredential#modelName
    * @propertyOf lbServices.ExtendedUserCredential
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ExtendedUserCredential`.
    */
    R.modelName = "ExtendedUserCredential";


        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserCredential#user
         * @methodOf lbServices.ExtendedUserCredential
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::get::ExtendedUserCredential::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ExtendedUserIdentity
 * @header lbServices.ExtendedUserIdentity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ExtendedUserIdentity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ExtendedUserIdentity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/UserIdentities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ExtendedUserIdentity.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/UserIdentities/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#create
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/UserIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#createMany
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/UserIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#upsert
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/UserIdentities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#exists
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/UserIdentities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#findById
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/UserIdentities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#find
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/UserIdentities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#findOne
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/UserIdentities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#updateAll
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/UserIdentities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#deleteById
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/UserIdentities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#count
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/UserIdentities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#prototype$updateAttributes
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/UserIdentities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#createChangeStream
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/UserIdentities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.identities.findById() instead.
        "::findById::ExtendedUser::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/identities/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.identities.destroyById() instead.
        "::destroyById::ExtendedUser::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/identities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.identities.updateById() instead.
        "::updateById::ExtendedUser::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/identities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.identities() instead.
        "::get::ExtendedUser::identities": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/identities",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.identities.create() instead.
        "::create::ExtendedUser::identities": {
          url: urlBase + "/ExtendedUsers/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.identities.createMany() instead.
        "::createMany::ExtendedUser::identities": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.identities.destroyAll() instead.
        "::delete::ExtendedUser::identities": {
          url: urlBase + "/ExtendedUsers/:id/identities",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.identities.count() instead.
        "::count::ExtendedUser::identities": {
          url: urlBase + "/ExtendedUsers/:id/identities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#updateOrCreate
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#update
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#destroyById
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#removeById
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ExtendedUserIdentity#modelName
    * @propertyOf lbServices.ExtendedUserIdentity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ExtendedUserIdentity`.
    */
    R.modelName = "ExtendedUserIdentity";


        /**
         * @ngdoc method
         * @name lbServices.ExtendedUserIdentity#user
         * @methodOf lbServices.ExtendedUserIdentity
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::get::ExtendedUserIdentity::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Proyect
 * @header lbServices.Proyect
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Proyect` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Proyect",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Proyects/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Proyect.tasks.findById() instead.
        "prototype$__findById__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/tasks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Proyect.tasks.destroyById() instead.
        "prototype$__destroyById__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/tasks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.tasks.updateById() instead.
        "prototype$__updateById__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/tasks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proyect.extendedUsers.findById() instead.
        "prototype$__findById__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Proyect.extendedUsers.destroyById() instead.
        "prototype$__destroyById__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.extendedUsers.updateById() instead.
        "prototype$__updateById__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proyect.extendedUsers.link() instead.
        "prototype$__link__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proyect.extendedUsers.unlink() instead.
        "prototype$__unlink__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.extendedUsers.exists() instead.
        "prototype$__exists__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Proyect.tasks() instead.
        "prototype$__get__tasks": {
          isArray: true,
          url: urlBase + "/Proyects/:id/tasks",
          method: "GET"
        },

        // INTERNAL. Use Proyect.tasks.create() instead.
        "prototype$__create__tasks": {
          url: urlBase + "/Proyects/:id/tasks",
          method: "POST"
        },

        // INTERNAL. Use Proyect.tasks.destroyAll() instead.
        "prototype$__delete__tasks": {
          url: urlBase + "/Proyects/:id/tasks",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.tasks.count() instead.
        "prototype$__count__tasks": {
          url: urlBase + "/Proyects/:id/tasks/count",
          method: "GET"
        },

        // INTERNAL. Use Proyect.extendedUsers() instead.
        "prototype$__get__extendedUsers": {
          isArray: true,
          url: urlBase + "/Proyects/:id/extendedUsers",
          method: "GET"
        },

        // INTERNAL. Use Proyect.extendedUsers.create() instead.
        "prototype$__create__extendedUsers": {
          url: urlBase + "/Proyects/:id/extendedUsers",
          method: "POST"
        },

        // INTERNAL. Use Proyect.extendedUsers.destroyAll() instead.
        "prototype$__delete__extendedUsers": {
          url: urlBase + "/Proyects/:id/extendedUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.extendedUsers.count() instead.
        "prototype$__count__extendedUsers": {
          url: urlBase + "/Proyects/:id/extendedUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#create
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Proyects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#createMany
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Proyects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#upsert
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Proyects",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#exists
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Proyects/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#findById
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Proyects/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#find
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Proyects",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#findOne
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Proyects/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#updateAll
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Proyects/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#deleteById
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Proyects/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#count
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Proyects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#prototype$updateAttributes
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Proyects/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Proyect#createChangeStream
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Proyects/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Task.proyect() instead.
        "::get::Task::proyect": {
          url: urlBase + "/Tasks/:id/proyect",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.proyects.findById() instead.
        "::findById::ExtendedUser::proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.proyects.destroyById() instead.
        "::destroyById::ExtendedUser::proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.proyects.updateById() instead.
        "::updateById::ExtendedUser::proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.proyects.link() instead.
        "::link::ExtendedUser::proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.proyects.unlink() instead.
        "::unlink::ExtendedUser::proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.proyects.exists() instead.
        "::exists::ExtendedUser::proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use ExtendedUser.proyects() instead.
        "::get::ExtendedUser::proyects": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/proyects",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.proyects.create() instead.
        "::create::ExtendedUser::proyects": {
          url: urlBase + "/ExtendedUsers/:id/proyects",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.proyects.createMany() instead.
        "::createMany::ExtendedUser::proyects": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/proyects",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.proyects.destroyAll() instead.
        "::delete::ExtendedUser::proyects": {
          url: urlBase + "/ExtendedUsers/:id/proyects",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.proyects.count() instead.
        "::count::ExtendedUser::proyects": {
          url: urlBase + "/ExtendedUsers/:id/proyects/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Proyect#updateOrCreate
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Proyect#update
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Proyect#destroyById
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Proyect#removeById
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Proyect#modelName
    * @propertyOf lbServices.Proyect
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Proyect`.
    */
    R.modelName = "Proyect";

    /**
     * @ngdoc object
     * @name lbServices.Proyect.tasks
     * @header lbServices.Proyect.tasks
     * @object
     * @description
     *
     * The object `Proyect.tasks` groups methods
     * manipulating `Task` instances related to `Proyect`.
     *
     * Call {@link lbServices.Proyect#tasks Proyect.tasks()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Proyect#tasks
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Queries tasks of Proyect.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::get::Proyect::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.tasks#count
         * @methodOf lbServices.Proyect.tasks
         *
         * @description
         *
         * Counts tasks of Proyect.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tasks.count = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::count::Proyect::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.tasks#create
         * @methodOf lbServices.Proyect.tasks
         *
         * @description
         *
         * Creates a new instance in tasks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.create = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::create::Proyect::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.tasks#createMany
         * @methodOf lbServices.Proyect.tasks
         *
         * @description
         *
         * Creates a new instance in tasks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.createMany = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::createMany::Proyect::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.tasks#destroyAll
         * @methodOf lbServices.Proyect.tasks
         *
         * @description
         *
         * Deletes all tasks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tasks.destroyAll = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::delete::Proyect::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.tasks#destroyById
         * @methodOf lbServices.Proyect.tasks
         *
         * @description
         *
         * Delete a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tasks.destroyById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::destroyById::Proyect::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.tasks#findById
         * @methodOf lbServices.Proyect.tasks
         *
         * @description
         *
         * Find a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.findById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::findById::Proyect::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.tasks#updateById
         * @methodOf lbServices.Proyect.tasks
         *
         * @description
         *
         * Update a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.updateById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::updateById::Proyect::tasks"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Proyect.extendedUsers
     * @header lbServices.Proyect.extendedUsers
     * @object
     * @description
     *
     * The object `Proyect.extendedUsers` groups methods
     * manipulating `ExtendedUser` instances related to `Proyect`.
     *
     * Call {@link lbServices.Proyect#extendedUsers Proyect.extendedUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Proyect#extendedUsers
         * @methodOf lbServices.Proyect
         *
         * @description
         *
         * Queries extendedUsers of Proyect.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::get::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#count
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Counts extendedUsers of Proyect.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.extendedUsers.count = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::count::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#create
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Creates a new instance in extendedUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.create = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::create::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#createMany
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Creates a new instance in extendedUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.createMany = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::createMany::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#destroyAll
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Deletes all extendedUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.extendedUsers.destroyAll = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::delete::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#destroyById
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Delete a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.extendedUsers.destroyById = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::destroyById::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#exists
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Check the existence of extendedUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.exists = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::exists::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#findById
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Find a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.findById = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::findById::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#link
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Add a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.link = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::link::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#unlink
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Remove the extendedUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.extendedUsers.unlink = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::unlink::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Proyect.extendedUsers#updateById
         * @methodOf lbServices.Proyect.extendedUsers
         *
         * @description
         *
         * Update a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.updateById = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::updateById::Proyect::extendedUsers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Task
 * @header lbServices.Task
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Task` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Task",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Tasks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Task.proyect() instead.
        "prototype$__get__proyect": {
          url: urlBase + "/Tasks/:id/proyect",
          method: "GET"
        },

        // INTERNAL. Use Task.tasks.findById() instead.
        "prototype$__findById__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/tasks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Task.tasks.destroyById() instead.
        "prototype$__destroyById__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/tasks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Task.tasks.updateById() instead.
        "prototype$__updateById__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/tasks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Task.extendedUsers.findById() instead.
        "prototype$__findById__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Task.extendedUsers.destroyById() instead.
        "prototype$__destroyById__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Task.extendedUsers.updateById() instead.
        "prototype$__updateById__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Task.extendedUsers.link() instead.
        "prototype$__link__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Task.extendedUsers.unlink() instead.
        "prototype$__unlink__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Task.extendedUsers.exists() instead.
        "prototype$__exists__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Task.tasks() instead.
        "prototype$__get__tasks": {
          isArray: true,
          url: urlBase + "/Tasks/:id/tasks",
          method: "GET"
        },

        // INTERNAL. Use Task.tasks.create() instead.
        "prototype$__create__tasks": {
          url: urlBase + "/Tasks/:id/tasks",
          method: "POST"
        },

        // INTERNAL. Use Task.tasks.destroyAll() instead.
        "prototype$__delete__tasks": {
          url: urlBase + "/Tasks/:id/tasks",
          method: "DELETE"
        },

        // INTERNAL. Use Task.tasks.count() instead.
        "prototype$__count__tasks": {
          url: urlBase + "/Tasks/:id/tasks/count",
          method: "GET"
        },

        // INTERNAL. Use Task.extendedUsers() instead.
        "prototype$__get__extendedUsers": {
          isArray: true,
          url: urlBase + "/Tasks/:id/extendedUsers",
          method: "GET"
        },

        // INTERNAL. Use Task.extendedUsers.create() instead.
        "prototype$__create__extendedUsers": {
          url: urlBase + "/Tasks/:id/extendedUsers",
          method: "POST"
        },

        // INTERNAL. Use Task.extendedUsers.destroyAll() instead.
        "prototype$__delete__extendedUsers": {
          url: urlBase + "/Tasks/:id/extendedUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Task.extendedUsers.count() instead.
        "prototype$__count__extendedUsers": {
          url: urlBase + "/Tasks/:id/extendedUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#create
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Tasks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#createMany
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Tasks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#upsert
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Tasks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#exists
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Tasks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#findById
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Tasks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#find
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Tasks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#findOne
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Tasks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#updateAll
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Tasks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#deleteById
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Tasks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#count
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Tasks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#prototype$updateAttributes
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Tasks/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Task#createChangeStream
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Tasks/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Proyect.tasks.findById() instead.
        "::findById::Proyect::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/tasks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Proyect.tasks.destroyById() instead.
        "::destroyById::Proyect::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/tasks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.tasks.updateById() instead.
        "::updateById::Proyect::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/tasks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proyect.tasks() instead.
        "::get::Proyect::tasks": {
          isArray: true,
          url: urlBase + "/Proyects/:id/tasks",
          method: "GET"
        },

        // INTERNAL. Use Proyect.tasks.create() instead.
        "::create::Proyect::tasks": {
          url: urlBase + "/Proyects/:id/tasks",
          method: "POST"
        },

        // INTERNAL. Use Proyect.tasks.createMany() instead.
        "::createMany::Proyect::tasks": {
          isArray: true,
          url: urlBase + "/Proyects/:id/tasks",
          method: "POST"
        },

        // INTERNAL. Use Proyect.tasks.destroyAll() instead.
        "::delete::Proyect::tasks": {
          url: urlBase + "/Proyects/:id/tasks",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.tasks.count() instead.
        "::count::Proyect::tasks": {
          url: urlBase + "/Proyects/:id/tasks/count",
          method: "GET"
        },

        // INTERNAL. Use Task.tasks.findById() instead.
        "::findById::Task::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/tasks/:fk",
          method: "GET"
        },

        // INTERNAL. Use Task.tasks.destroyById() instead.
        "::destroyById::Task::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/tasks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Task.tasks.updateById() instead.
        "::updateById::Task::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/tasks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Task.tasks() instead.
        "::get::Task::tasks": {
          isArray: true,
          url: urlBase + "/Tasks/:id/tasks",
          method: "GET"
        },

        // INTERNAL. Use Task.tasks.create() instead.
        "::create::Task::tasks": {
          url: urlBase + "/Tasks/:id/tasks",
          method: "POST"
        },

        // INTERNAL. Use Task.tasks.createMany() instead.
        "::createMany::Task::tasks": {
          isArray: true,
          url: urlBase + "/Tasks/:id/tasks",
          method: "POST"
        },

        // INTERNAL. Use Task.tasks.destroyAll() instead.
        "::delete::Task::tasks": {
          url: urlBase + "/Tasks/:id/tasks",
          method: "DELETE"
        },

        // INTERNAL. Use Task.tasks.count() instead.
        "::count::Task::tasks": {
          url: urlBase + "/Tasks/:id/tasks/count",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.tasks.findById() instead.
        "::findById::ExtendedUser::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.tasks.destroyById() instead.
        "::destroyById::ExtendedUser::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.tasks.updateById() instead.
        "::updateById::ExtendedUser::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.tasks.link() instead.
        "::link::ExtendedUser::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.tasks.unlink() instead.
        "::unlink::ExtendedUser::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.tasks.exists() instead.
        "::exists::ExtendedUser::tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use ExtendedUser.tasks() instead.
        "::get::ExtendedUser::tasks": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/tasks",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.tasks.create() instead.
        "::create::ExtendedUser::tasks": {
          url: urlBase + "/ExtendedUsers/:id/tasks",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.tasks.createMany() instead.
        "::createMany::ExtendedUser::tasks": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/tasks",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.tasks.destroyAll() instead.
        "::delete::ExtendedUser::tasks": {
          url: urlBase + "/ExtendedUsers/:id/tasks",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.tasks.count() instead.
        "::count::ExtendedUser::tasks": {
          url: urlBase + "/ExtendedUsers/:id/tasks/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Task#updateOrCreate
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Task#update
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Task#destroyById
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Task#removeById
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Task#modelName
    * @propertyOf lbServices.Task
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Task`.
    */
    R.modelName = "Task";


        /**
         * @ngdoc method
         * @name lbServices.Task#proyect
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Fetches belongsTo relation proyect.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R.proyect = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::get::Task::proyect"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Task.tasks
     * @header lbServices.Task.tasks
     * @object
     * @description
     *
     * The object `Task.tasks` groups methods
     * manipulating `Task` instances related to `Task`.
     *
     * Call {@link lbServices.Task#tasks Task.tasks()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Task#tasks
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Queries tasks of Task.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::get::Task::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.tasks#count
         * @methodOf lbServices.Task.tasks
         *
         * @description
         *
         * Counts tasks of Task.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tasks.count = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::count::Task::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.tasks#create
         * @methodOf lbServices.Task.tasks
         *
         * @description
         *
         * Creates a new instance in tasks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.create = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::create::Task::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.tasks#createMany
         * @methodOf lbServices.Task.tasks
         *
         * @description
         *
         * Creates a new instance in tasks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.createMany = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::createMany::Task::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.tasks#destroyAll
         * @methodOf lbServices.Task.tasks
         *
         * @description
         *
         * Deletes all tasks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tasks.destroyAll = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::delete::Task::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.tasks#destroyById
         * @methodOf lbServices.Task.tasks
         *
         * @description
         *
         * Delete a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tasks.destroyById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::destroyById::Task::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.tasks#findById
         * @methodOf lbServices.Task.tasks
         *
         * @description
         *
         * Find a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.findById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::findById::Task::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.tasks#updateById
         * @methodOf lbServices.Task.tasks
         *
         * @description
         *
         * Update a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.updateById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::updateById::Task::tasks"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Task.extendedUsers
     * @header lbServices.Task.extendedUsers
     * @object
     * @description
     *
     * The object `Task.extendedUsers` groups methods
     * manipulating `ExtendedUser` instances related to `Task`.
     *
     * Call {@link lbServices.Task#extendedUsers Task.extendedUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Task#extendedUsers
         * @methodOf lbServices.Task
         *
         * @description
         *
         * Queries extendedUsers of Task.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::get::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#count
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Counts extendedUsers of Task.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.extendedUsers.count = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::count::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#create
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Creates a new instance in extendedUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.create = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::create::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#createMany
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Creates a new instance in extendedUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.createMany = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::createMany::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#destroyAll
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Deletes all extendedUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.extendedUsers.destroyAll = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::delete::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#destroyById
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Delete a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.extendedUsers.destroyById = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::destroyById::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#exists
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Check the existence of extendedUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.exists = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::exists::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#findById
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Find a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.findById = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::findById::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#link
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Add a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.link = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::link::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#unlink
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Remove the extendedUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.extendedUsers.unlink = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::unlink::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Task.extendedUsers#updateById
         * @methodOf lbServices.Task.extendedUsers
         *
         * @description
         *
         * Update a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.updateById = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::updateById::Task::extendedUsers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Group
 * @header lbServices.Group
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Group` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Group",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Groups/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Group.extendedUsers.findById() instead.
        "prototype$__findById__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.extendedUsers.destroyById() instead.
        "prototype$__destroyById__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.extendedUsers.updateById() instead.
        "prototype$__updateById__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.extendedUsers.link() instead.
        "prototype$__link__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.extendedUsers.unlink() instead.
        "prototype$__unlink__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.extendedUsers.exists() instead.
        "prototype$__exists__extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Group.extendedUsers() instead.
        "prototype$__get__extendedUsers": {
          isArray: true,
          url: urlBase + "/Groups/:id/extendedUsers",
          method: "GET"
        },

        // INTERNAL. Use Group.extendedUsers.create() instead.
        "prototype$__create__extendedUsers": {
          url: urlBase + "/Groups/:id/extendedUsers",
          method: "POST"
        },

        // INTERNAL. Use Group.extendedUsers.destroyAll() instead.
        "prototype$__delete__extendedUsers": {
          url: urlBase + "/Groups/:id/extendedUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Group.extendedUsers.count() instead.
        "prototype$__count__extendedUsers": {
          url: urlBase + "/Groups/:id/extendedUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#create
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#createMany
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#upsert
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Groups",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#exists
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Groups/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#findById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Groups/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#find
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Groups",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#findOne
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Groups/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#updateAll
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Groups/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#deleteById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Groups/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#count
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Groups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#prototype$updateAttributes
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Groups/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#createChangeStream
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Groups/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.groups.findById() instead.
        "::findById::ExtendedUser::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.groups.destroyById() instead.
        "::destroyById::ExtendedUser::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.groups.updateById() instead.
        "::updateById::ExtendedUser::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.groups.link() instead.
        "::link::ExtendedUser::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.groups.unlink() instead.
        "::unlink::ExtendedUser::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.groups.exists() instead.
        "::exists::ExtendedUser::groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use ExtendedUser.groups() instead.
        "::get::ExtendedUser::groups": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/groups",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.groups.create() instead.
        "::create::ExtendedUser::groups": {
          url: urlBase + "/ExtendedUsers/:id/groups",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.groups.createMany() instead.
        "::createMany::ExtendedUser::groups": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/groups",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.groups.destroyAll() instead.
        "::delete::ExtendedUser::groups": {
          url: urlBase + "/ExtendedUsers/:id/groups",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.groups.count() instead.
        "::count::ExtendedUser::groups": {
          url: urlBase + "/ExtendedUsers/:id/groups/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Group#updateOrCreate
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Group#update
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Group#destroyById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Group#removeById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Group#modelName
    * @propertyOf lbServices.Group
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Group`.
    */
    R.modelName = "Group";

    /**
     * @ngdoc object
     * @name lbServices.Group.extendedUsers
     * @header lbServices.Group.extendedUsers
     * @object
     * @description
     *
     * The object `Group.extendedUsers` groups methods
     * manipulating `ExtendedUser` instances related to `Group`.
     *
     * Call {@link lbServices.Group#extendedUsers Group.extendedUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Group#extendedUsers
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Queries extendedUsers of Group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::get::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#count
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Counts extendedUsers of Group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.extendedUsers.count = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::count::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#create
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Creates a new instance in extendedUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.create = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::create::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#createMany
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Creates a new instance in extendedUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.createMany = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::createMany::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#destroyAll
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Deletes all extendedUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.extendedUsers.destroyAll = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::delete::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#destroyById
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Delete a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.extendedUsers.destroyById = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::destroyById::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#exists
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Check the existence of extendedUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.exists = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::exists::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#findById
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Find a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.findById = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::findById::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#link
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Add a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.link = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::link::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#unlink
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Remove the extendedUsers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.extendedUsers.unlink = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::unlink::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.extendedUsers#updateById
         * @methodOf lbServices.Group.extendedUsers
         *
         * @description
         *
         * Update a related item by id for extendedUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for extendedUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R.extendedUsers.updateById = function() {
          var TargetResource = $injector.get("ExtendedUser");
          var action = TargetResource["::updateById::Group::extendedUsers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ExtendedUser
 * @header lbServices.ExtendedUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ExtendedUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ExtendedUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ExtendedUsers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ExtendedUser.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.groups.findById() instead.
        "prototype$__findById__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.groups.destroyById() instead.
        "prototype$__destroyById__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.groups.updateById() instead.
        "prototype$__updateById__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.groups.link() instead.
        "prototype$__link__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.groups.unlink() instead.
        "prototype$__unlink__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.groups.exists() instead.
        "prototype$__exists__groups": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/groups/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use ExtendedUser.proyects.findById() instead.
        "prototype$__findById__proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.proyects.destroyById() instead.
        "prototype$__destroyById__proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.proyects.updateById() instead.
        "prototype$__updateById__proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.proyects.link() instead.
        "prototype$__link__proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.proyects.unlink() instead.
        "prototype$__unlink__proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.proyects.exists() instead.
        "prototype$__exists__proyects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/proyects/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use ExtendedUser.tasks.findById() instead.
        "prototype$__findById__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.tasks.destroyById() instead.
        "prototype$__destroyById__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.tasks.updateById() instead.
        "prototype$__updateById__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.tasks.link() instead.
        "prototype$__link__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.tasks.unlink() instead.
        "prototype$__unlink__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.tasks.exists() instead.
        "prototype$__exists__tasks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/tasks/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use ExtendedUser.identities.findById() instead.
        "prototype$__findById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/identities/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.identities.destroyById() instead.
        "prototype$__destroyById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/identities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.identities.updateById() instead.
        "prototype$__updateById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/identities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.credentials.findById() instead.
        "prototype$__findById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/credentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.credentials.destroyById() instead.
        "prototype$__destroyById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/credentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.credentials.updateById() instead.
        "prototype$__updateById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ExtendedUsers/:id/credentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ExtendedUser.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/ExtendedUsers/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/ExtendedUsers/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/ExtendedUsers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.groups() instead.
        "prototype$__get__groups": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/groups",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.groups.create() instead.
        "prototype$__create__groups": {
          url: urlBase + "/ExtendedUsers/:id/groups",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.groups.destroyAll() instead.
        "prototype$__delete__groups": {
          url: urlBase + "/ExtendedUsers/:id/groups",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.groups.count() instead.
        "prototype$__count__groups": {
          url: urlBase + "/ExtendedUsers/:id/groups/count",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.proyects() instead.
        "prototype$__get__proyects": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/proyects",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.proyects.create() instead.
        "prototype$__create__proyects": {
          url: urlBase + "/ExtendedUsers/:id/proyects",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.proyects.destroyAll() instead.
        "prototype$__delete__proyects": {
          url: urlBase + "/ExtendedUsers/:id/proyects",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.proyects.count() instead.
        "prototype$__count__proyects": {
          url: urlBase + "/ExtendedUsers/:id/proyects/count",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.tasks() instead.
        "prototype$__get__tasks": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/tasks",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.tasks.create() instead.
        "prototype$__create__tasks": {
          url: urlBase + "/ExtendedUsers/:id/tasks",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.tasks.destroyAll() instead.
        "prototype$__delete__tasks": {
          url: urlBase + "/ExtendedUsers/:id/tasks",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.tasks.count() instead.
        "prototype$__count__tasks": {
          url: urlBase + "/ExtendedUsers/:id/tasks/count",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.identities() instead.
        "prototype$__get__identities": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/identities",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.identities.create() instead.
        "prototype$__create__identities": {
          url: urlBase + "/ExtendedUsers/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.identities.destroyAll() instead.
        "prototype$__delete__identities": {
          url: urlBase + "/ExtendedUsers/:id/identities",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.identities.count() instead.
        "prototype$__count__identities": {
          url: urlBase + "/ExtendedUsers/:id/identities/count",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.credentials() instead.
        "prototype$__get__credentials": {
          isArray: true,
          url: urlBase + "/ExtendedUsers/:id/credentials",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUser.credentials.create() instead.
        "prototype$__create__credentials": {
          url: urlBase + "/ExtendedUsers/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUser.credentials.destroyAll() instead.
        "prototype$__delete__credentials": {
          url: urlBase + "/ExtendedUsers/:id/credentials",
          method: "DELETE"
        },

        // INTERNAL. Use ExtendedUser.credentials.count() instead.
        "prototype$__count__credentials": {
          url: urlBase + "/ExtendedUsers/:id/credentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#create
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ExtendedUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#createMany
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ExtendedUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#upsert
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ExtendedUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#exists
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ExtendedUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#findById
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ExtendedUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#find
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ExtendedUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#findOne
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ExtendedUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#updateAll
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ExtendedUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#deleteById
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ExtendedUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#count
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ExtendedUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#prototype$updateAttributes
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ExtendedUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#createChangeStream
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ExtendedUsers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#login
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/ExtendedUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#logout
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/ExtendedUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#confirm
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/ExtendedUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#resetPassword
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/ExtendedUsers/reset",
          method: "POST"
        },

        // INTERNAL. Use ExtendedUserCredential.user() instead.
        "::get::ExtendedUserCredential::user": {
          url: urlBase + "/ExtendedUserCredentials/:id/user",
          method: "GET"
        },

        // INTERNAL. Use ExtendedUserIdentity.user() instead.
        "::get::ExtendedUserIdentity::user": {
          url: urlBase + "/UserIdentities/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Proyect.extendedUsers.findById() instead.
        "::findById::Proyect::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Proyect.extendedUsers.destroyById() instead.
        "::destroyById::Proyect::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.extendedUsers.updateById() instead.
        "::updateById::Proyect::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proyect.extendedUsers.link() instead.
        "::link::Proyect::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Proyect.extendedUsers.unlink() instead.
        "::unlink::Proyect::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.extendedUsers.exists() instead.
        "::exists::Proyect::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Proyects/:id/extendedUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Proyect.extendedUsers() instead.
        "::get::Proyect::extendedUsers": {
          isArray: true,
          url: urlBase + "/Proyects/:id/extendedUsers",
          method: "GET"
        },

        // INTERNAL. Use Proyect.extendedUsers.create() instead.
        "::create::Proyect::extendedUsers": {
          url: urlBase + "/Proyects/:id/extendedUsers",
          method: "POST"
        },

        // INTERNAL. Use Proyect.extendedUsers.createMany() instead.
        "::createMany::Proyect::extendedUsers": {
          isArray: true,
          url: urlBase + "/Proyects/:id/extendedUsers",
          method: "POST"
        },

        // INTERNAL. Use Proyect.extendedUsers.destroyAll() instead.
        "::delete::Proyect::extendedUsers": {
          url: urlBase + "/Proyects/:id/extendedUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Proyect.extendedUsers.count() instead.
        "::count::Proyect::extendedUsers": {
          url: urlBase + "/Proyects/:id/extendedUsers/count",
          method: "GET"
        },

        // INTERNAL. Use Task.extendedUsers.findById() instead.
        "::findById::Task::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Task.extendedUsers.destroyById() instead.
        "::destroyById::Task::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Task.extendedUsers.updateById() instead.
        "::updateById::Task::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Task.extendedUsers.link() instead.
        "::link::Task::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Task.extendedUsers.unlink() instead.
        "::unlink::Task::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Task.extendedUsers.exists() instead.
        "::exists::Task::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Tasks/:id/extendedUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Task.extendedUsers() instead.
        "::get::Task::extendedUsers": {
          isArray: true,
          url: urlBase + "/Tasks/:id/extendedUsers",
          method: "GET"
        },

        // INTERNAL. Use Task.extendedUsers.create() instead.
        "::create::Task::extendedUsers": {
          url: urlBase + "/Tasks/:id/extendedUsers",
          method: "POST"
        },

        // INTERNAL. Use Task.extendedUsers.createMany() instead.
        "::createMany::Task::extendedUsers": {
          isArray: true,
          url: urlBase + "/Tasks/:id/extendedUsers",
          method: "POST"
        },

        // INTERNAL. Use Task.extendedUsers.destroyAll() instead.
        "::delete::Task::extendedUsers": {
          url: urlBase + "/Tasks/:id/extendedUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Task.extendedUsers.count() instead.
        "::count::Task::extendedUsers": {
          url: urlBase + "/Tasks/:id/extendedUsers/count",
          method: "GET"
        },

        // INTERNAL. Use Group.extendedUsers.findById() instead.
        "::findById::Group::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.extendedUsers.destroyById() instead.
        "::destroyById::Group::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.extendedUsers.updateById() instead.
        "::updateById::Group::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.extendedUsers.link() instead.
        "::link::Group::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.extendedUsers.unlink() instead.
        "::unlink::Group::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.extendedUsers.exists() instead.
        "::exists::Group::extendedUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/extendedUsers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Group.extendedUsers() instead.
        "::get::Group::extendedUsers": {
          isArray: true,
          url: urlBase + "/Groups/:id/extendedUsers",
          method: "GET"
        },

        // INTERNAL. Use Group.extendedUsers.create() instead.
        "::create::Group::extendedUsers": {
          url: urlBase + "/Groups/:id/extendedUsers",
          method: "POST"
        },

        // INTERNAL. Use Group.extendedUsers.createMany() instead.
        "::createMany::Group::extendedUsers": {
          isArray: true,
          url: urlBase + "/Groups/:id/extendedUsers",
          method: "POST"
        },

        // INTERNAL. Use Group.extendedUsers.destroyAll() instead.
        "::delete::Group::extendedUsers": {
          url: urlBase + "/Groups/:id/extendedUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Group.extendedUsers.count() instead.
        "::count::Group::extendedUsers": {
          url: urlBase + "/Groups/:id/extendedUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#getCurrent
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/ExtendedUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#updateOrCreate
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#update
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#destroyById
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#removeById
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUser` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#getCachedCurrent
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.ExtendedUser#login} or
         * {@link lbServices.ExtendedUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A ExtendedUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#isAuthenticated
         * @methodOf lbServices.ExtendedUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#getCurrentId
         * @methodOf lbServices.ExtendedUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.ExtendedUser#modelName
    * @propertyOf lbServices.ExtendedUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ExtendedUser`.
    */
    R.modelName = "ExtendedUser";

    /**
     * @ngdoc object
     * @name lbServices.ExtendedUser.accessTokens
     * @header lbServices.ExtendedUser.accessTokens
     * @object
     * @description
     *
     * The object `ExtendedUser.accessTokens` groups methods
     * manipulating `AccessToken` instances related to `ExtendedUser`.
     *
     * Call {@link lbServices.ExtendedUser#accessTokens ExtendedUser.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#accessTokens
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Queries accessTokens of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::get::ExtendedUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.accessTokens#count
         * @methodOf lbServices.ExtendedUser.accessTokens
         *
         * @description
         *
         * Counts accessTokens of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::count::ExtendedUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.accessTokens#create
         * @methodOf lbServices.ExtendedUser.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::create::ExtendedUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.accessTokens#createMany
         * @methodOf lbServices.ExtendedUser.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.createMany = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::createMany::ExtendedUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.accessTokens#destroyAll
         * @methodOf lbServices.ExtendedUser.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::delete::ExtendedUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.accessTokens#destroyById
         * @methodOf lbServices.ExtendedUser.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::destroyById::ExtendedUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.accessTokens#findById
         * @methodOf lbServices.ExtendedUser.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::findById::ExtendedUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.accessTokens#updateById
         * @methodOf lbServices.ExtendedUser.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::updateById::ExtendedUser::accessTokens"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ExtendedUser.groups
     * @header lbServices.ExtendedUser.groups
     * @object
     * @description
     *
     * The object `ExtendedUser.groups` groups methods
     * manipulating `Group` instances related to `ExtendedUser`.
     *
     * Call {@link lbServices.ExtendedUser#groups ExtendedUser.groups()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#groups
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Queries groups of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#count
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Counts groups of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.groups.count = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::count::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#create
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Creates a new instance in groups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.create = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::create::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#createMany
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Creates a new instance in groups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.createMany = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::createMany::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#destroyAll
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Deletes all groups of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.groups.destroyAll = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::delete::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#destroyById
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Delete a related item by id for groups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.groups.destroyById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::destroyById::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#exists
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Check the existence of groups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.exists = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::exists::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#findById
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Find a related item by id for groups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.findById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::findById::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#link
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Add a related item by id for groups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.link = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::link::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#unlink
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Remove the groups relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.groups.unlink = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::unlink::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.groups#updateById
         * @methodOf lbServices.ExtendedUser.groups
         *
         * @description
         *
         * Update a related item by id for groups.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for groups
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.groups.updateById = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::updateById::ExtendedUser::groups"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ExtendedUser.proyects
     * @header lbServices.ExtendedUser.proyects
     * @object
     * @description
     *
     * The object `ExtendedUser.proyects` groups methods
     * manipulating `Proyect` instances related to `ExtendedUser`.
     *
     * Call {@link lbServices.ExtendedUser#proyects ExtendedUser.proyects()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#proyects
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Queries proyects of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R.proyects = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::get::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#count
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Counts proyects of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.proyects.count = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::count::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#create
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Creates a new instance in proyects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R.proyects.create = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::create::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#createMany
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Creates a new instance in proyects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R.proyects.createMany = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::createMany::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#destroyAll
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Deletes all proyects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.proyects.destroyAll = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::delete::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#destroyById
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Delete a related item by id for proyects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for proyects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.proyects.destroyById = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::destroyById::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#exists
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Check the existence of proyects relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for proyects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R.proyects.exists = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::exists::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#findById
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Find a related item by id for proyects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for proyects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R.proyects.findById = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::findById::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#link
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Add a related item by id for proyects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for proyects
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R.proyects.link = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::link::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#unlink
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Remove the proyects relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for proyects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.proyects.unlink = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::unlink::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.proyects#updateById
         * @methodOf lbServices.ExtendedUser.proyects
         *
         * @description
         *
         * Update a related item by id for proyects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for proyects
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Proyect` object.)
         * </em>
         */
        R.proyects.updateById = function() {
          var TargetResource = $injector.get("Proyect");
          var action = TargetResource["::updateById::ExtendedUser::proyects"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ExtendedUser.tasks
     * @header lbServices.ExtendedUser.tasks
     * @object
     * @description
     *
     * The object `ExtendedUser.tasks` groups methods
     * manipulating `Task` instances related to `ExtendedUser`.
     *
     * Call {@link lbServices.ExtendedUser#tasks ExtendedUser.tasks()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#tasks
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Queries tasks of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::get::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#count
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Counts tasks of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tasks.count = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::count::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#create
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Creates a new instance in tasks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.create = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::create::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#createMany
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Creates a new instance in tasks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.createMany = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::createMany::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#destroyAll
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Deletes all tasks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tasks.destroyAll = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::delete::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#destroyById
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Delete a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tasks.destroyById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::destroyById::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#exists
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Check the existence of tasks relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.exists = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::exists::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#findById
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Find a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.findById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::findById::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#link
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Add a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.link = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::link::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#unlink
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Remove the tasks relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tasks.unlink = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::unlink::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.tasks#updateById
         * @methodOf lbServices.ExtendedUser.tasks
         *
         * @description
         *
         * Update a related item by id for tasks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for tasks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Task` object.)
         * </em>
         */
        R.tasks.updateById = function() {
          var TargetResource = $injector.get("Task");
          var action = TargetResource["::updateById::ExtendedUser::tasks"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ExtendedUser.identities
     * @header lbServices.ExtendedUser.identities
     * @object
     * @description
     *
     * The object `ExtendedUser.identities` groups methods
     * manipulating `ExtendedUserIdentity` instances related to `ExtendedUser`.
     *
     * Call {@link lbServices.ExtendedUser#identities ExtendedUser.identities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#identities
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Queries identities of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        R.identities = function() {
          var TargetResource = $injector.get("ExtendedUserIdentity");
          var action = TargetResource["::get::ExtendedUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.identities#count
         * @methodOf lbServices.ExtendedUser.identities
         *
         * @description
         *
         * Counts identities of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.identities.count = function() {
          var TargetResource = $injector.get("ExtendedUserIdentity");
          var action = TargetResource["::count::ExtendedUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.identities#create
         * @methodOf lbServices.ExtendedUser.identities
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        R.identities.create = function() {
          var TargetResource = $injector.get("ExtendedUserIdentity");
          var action = TargetResource["::create::ExtendedUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.identities#createMany
         * @methodOf lbServices.ExtendedUser.identities
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        R.identities.createMany = function() {
          var TargetResource = $injector.get("ExtendedUserIdentity");
          var action = TargetResource["::createMany::ExtendedUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.identities#destroyAll
         * @methodOf lbServices.ExtendedUser.identities
         *
         * @description
         *
         * Deletes all identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.identities.destroyAll = function() {
          var TargetResource = $injector.get("ExtendedUserIdentity");
          var action = TargetResource["::delete::ExtendedUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.identities#destroyById
         * @methodOf lbServices.ExtendedUser.identities
         *
         * @description
         *
         * Delete a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.identities.destroyById = function() {
          var TargetResource = $injector.get("ExtendedUserIdentity");
          var action = TargetResource["::destroyById::ExtendedUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.identities#findById
         * @methodOf lbServices.ExtendedUser.identities
         *
         * @description
         *
         * Find a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        R.identities.findById = function() {
          var TargetResource = $injector.get("ExtendedUserIdentity");
          var action = TargetResource["::findById::ExtendedUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.identities#updateById
         * @methodOf lbServices.ExtendedUser.identities
         *
         * @description
         *
         * Update a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserIdentity` object.)
         * </em>
         */
        R.identities.updateById = function() {
          var TargetResource = $injector.get("ExtendedUserIdentity");
          var action = TargetResource["::updateById::ExtendedUser::identities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ExtendedUser.credentials
     * @header lbServices.ExtendedUser.credentials
     * @object
     * @description
     *
     * The object `ExtendedUser.credentials` groups methods
     * manipulating `ExtendedUserCredential` instances related to `ExtendedUser`.
     *
     * Call {@link lbServices.ExtendedUser#credentials ExtendedUser.credentials()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser#credentials
         * @methodOf lbServices.ExtendedUser
         *
         * @description
         *
         * Queries credentials of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        R.credentials = function() {
          var TargetResource = $injector.get("ExtendedUserCredential");
          var action = TargetResource["::get::ExtendedUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.credentials#count
         * @methodOf lbServices.ExtendedUser.credentials
         *
         * @description
         *
         * Counts credentials of ExtendedUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.credentials.count = function() {
          var TargetResource = $injector.get("ExtendedUserCredential");
          var action = TargetResource["::count::ExtendedUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.credentials#create
         * @methodOf lbServices.ExtendedUser.credentials
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        R.credentials.create = function() {
          var TargetResource = $injector.get("ExtendedUserCredential");
          var action = TargetResource["::create::ExtendedUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.credentials#createMany
         * @methodOf lbServices.ExtendedUser.credentials
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        R.credentials.createMany = function() {
          var TargetResource = $injector.get("ExtendedUserCredential");
          var action = TargetResource["::createMany::ExtendedUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.credentials#destroyAll
         * @methodOf lbServices.ExtendedUser.credentials
         *
         * @description
         *
         * Deletes all credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.credentials.destroyAll = function() {
          var TargetResource = $injector.get("ExtendedUserCredential");
          var action = TargetResource["::delete::ExtendedUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.credentials#destroyById
         * @methodOf lbServices.ExtendedUser.credentials
         *
         * @description
         *
         * Delete a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.credentials.destroyById = function() {
          var TargetResource = $injector.get("ExtendedUserCredential");
          var action = TargetResource["::destroyById::ExtendedUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.credentials#findById
         * @methodOf lbServices.ExtendedUser.credentials
         *
         * @description
         *
         * Find a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        R.credentials.findById = function() {
          var TargetResource = $injector.get("ExtendedUserCredential");
          var action = TargetResource["::findById::ExtendedUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ExtendedUser.credentials#updateById
         * @methodOf lbServices.ExtendedUser.credentials
         *
         * @description
         *
         * Update a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ExtendedUserCredential` object.)
         * </em>
         */
        R.credentials.updateById = function() {
          var TargetResource = $injector.get("ExtendedUserCredential");
          var action = TargetResource["::updateById::ExtendedUser::credentials"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
