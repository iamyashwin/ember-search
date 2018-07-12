"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ember-search/app', ['exports', 'ember', 'ember-search/resolver', 'ember-load-initializers', 'ember-search/config/environment'], function (exports, _ember, _emberSearchResolver, _emberLoadInitializers, _emberSearchConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberSearchConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberSearchConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberSearchResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberSearchConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("ember-search/components/home-page", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    recentSearches: [{ id: 1, value: "Eiffel Tower" }, { id: 2, value: "Trigonometry" }, { id: 3, value: "Why Mars?" }, { id: 4, value: "Iron and Wine" }, { id: 5, value: "Time Travel" }, { id: 6, value: "Show all" }]
  });
});
define('ember-search/components/nav-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("ember-search/components/topic-view", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    tags: ["General", "History", "Literature", "Politics", "Arts"]
  });
});
define('ember-search/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('ember-search/helpers/app-version', ['exports', 'ember', 'ember-search/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _emberSearchConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _emberSearchConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('ember-search/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ember-search/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ember-search/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-search/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberSearchConfigEnvironment) {
  var _config$APP = _emberSearchConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ember-search/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-search/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-search/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ember-search/initializers/export-application-global', ['exports', 'ember', 'ember-search/config/environment'], function (exports, _ember, _emberSearchConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberSearchConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _emberSearchConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberSearchConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-search/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-search/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-search/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ember-search/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _emberDataInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInitializeStoreService["default"]
  };
});
define('ember-search/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ember-search/router', ['exports', 'ember', 'ember-search/config/environment'], function (exports, _ember, _emberSearchConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberSearchConfigEnvironment['default'].locationType,
    rootURL: _emberSearchConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/' });
    this.route('topic', { path: '/topic/:id' });
  });

  exports['default'] = Router;
});
define('ember-search/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-search/routes/topic', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-search/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("ember-search/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LTc7WCDx", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-search/templates/application.hbs" } });
});
define("ember-search/templates/components/home-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3fpHXI6B", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"image-background\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"nav-header\"]],false],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"bottom-page\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"text\"],[\"static-attr\",\"name\",\"search\"],[\"static-attr\",\"placeholder\",\"Search..\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"next-logo\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/images/ic-next.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"filter-logo\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/images/ic-filters.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"recent-searches\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-1 font14px\"],[\"flush-element\"],[\"text\",\"Recent Searches\"],[\"close-element\"],[\"block\",[\"each\"],[[\"get\",[\"recentSearches\"]]],null,1],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"item\",\"value\"]],false]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"topic\",[\"get\",[\"item\",\"id\"]]],null,0],[\"close-element\"]],\"locals\":[\"item\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search/templates/components/home-page.hbs" } });
});
define("ember-search/templates/components/nav-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "BHDp4pFD", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"nav-header\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-6\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"search-logo\"],[\"flush-element\"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"close-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-1\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hyper-link\"],[\"flush-element\"],[\"text\",\"Suggest Topics\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-1\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hyper-link\"],[\"flush-element\"],[\"text\",\"Favorites\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-1\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hyper-link\"],[\"flush-element\"],[\"text\",\"Bookmarks\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-1\"],[\"flush-element\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"rounded-button\"],[\"flush-element\"],[\"text\",\"Editor's Picks\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"search-icon\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search/templates/components/nav-header.hbs" } });
});
define("ember-search/templates/components/topic-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uXwLdfu6", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"topic-view\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"nav-header\"]],false],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-5 left-logo\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/images/img-01.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-5 right-column\"],[\"flush-element\"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"main-heading\"],[\"flush-element\"],[\"text\",\"Eiffel Tower\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"font14px\"],[\"flush-element\"],[\"text\",\"Tour Eiffel · Since 1887\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"tags\"],[\"flush-element\"],[\"block\",[\"each\"],[[\"get\",[\"tags\"]]],null,0],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"para\"],[\"flush-element\"],[\"text\",\"The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars inParis, France. It is named after the engineer Gustave Eiffel, whose companydesigned and built the tower.\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/images/img-map.png\"],[\"static-attr\",\"class\",\"map-image\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"location-image\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/images/ic-location.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"para\"],[\"flush-element\"],[\"text\",\"Constructed from 1887–89 as the entrance to the 1889 World's Fair,it was initially criticized by some of France's leading artists andintellectuals for its design, but it has become a global cultural iconof France and one of the most recognisable structures in the world.[3]The Eiffel Tower is the most-visited paid monument in the world; 6.91 millionpeople ascended it in 2015.\"],[\"close-element\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"para\"],[\"flush-element\"],[\"text\",\"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building,and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallestman-made structure in the world, a title it held for 41 years until the Chrysler Building in New York Citywas finished in 1930. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is nowtaller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the secondtallest structure in France after the Millau Viaduct.\"],[\"close-element\"],[\"close-element\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"tag\"],[\"flush-element\"],[\"append\",[\"get\",[\"tag\"]],false],[\"close-element\"]],\"locals\":[\"tag\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search/templates/components/topic-view.hbs" } });
});
define("ember-search/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/s3UhBCn", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"home-page\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-search/templates/index.hbs" } });
});
define("ember-search/templates/topic", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "DEwJS8UU", "block": "{\"statements\":[[\"append\",[\"helper\",[\"topic-view\"],null,[[\"topic\"],[[\"get\",[\"model\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-search/templates/topic.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ember-search/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-search';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ember-search/app")["default"].create({"name":"ember-search","version":"0.0.0+ae3ad342"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-search.map
