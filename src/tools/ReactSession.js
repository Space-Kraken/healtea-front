Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ReactSession = (function () {
  var SESSION_OBJECT_NAME = "__react_session__";
  var COOKIE_EXPIRATION_DAYS = 7; // TODO: Make this a prop?

  var SessionWriter = null;
  var sessionData = {};

  var get = function get(key) {
    return SessionWriter.get(key);
  };

  var set = function set(key, value) {
    SessionWriter.set(key, value);
  };

  var remove = function remove(key) {
    SessionWriter.remove(key);
  };

  var setStoreType = function setStoreType(storeType) {
    if (
      !["memory", "cookie", "localstorage", "sessionstorage"].includes(
        storeType.toLowerCase()
      )
    ) {
      throw "Unknown store type";
    }

    SessionWriter = getSessionWriter(storeType);
  };

  var getSessionWriter = function getSessionWriter(storeType) {
    switch (storeType.toLowerCase()) {
      case "memory":
        return MemoryWriter;

      case "cookie":
        return CookieWriter;

      case "localstorage":
        return LocalStorageWriter;

      case "sessionstorage":
        return SessionStorageWriter;

      default:
        return MemoryWriter;
    }
  };

  var MemoryWriter = {
    set: function set(key, value) {
      sessionData[key] = value;
    },
    get: function get(key) {
      return sessionData[key];
    },
    remove: function remove(key) {
      if (sessionData.hasOwnProperty(key)) {
        delete sessionData[key];
      }
    },
  };
  var LocalStorageWriter = {
    set: function set(key, value) {
      setItem(localStorage, key, value);
    },
    get: function get(key) {
      return getItem(localStorage, key);
    },
    remove: function remove(key) {
      removeItem(localStorage, key);
    },
  };
  var SessionStorageWriter = {
    set: function set(key, value) {
      setItem(sessionStorage, key, value);
    },
    get: function get(key) {
      return getItem(sessionStorage, key);
    },
    remove: function remove(key) {
      removeItem(sessionStorage, key);
    },
  };
  var CookieWriter = {
    set: function set(key, value) {
      setCookieParam(key, value, COOKIE_EXPIRATION_DAYS);
    },
    get: function get(key) {
      return getCookieParam(key);
    },
    remove: function remove(key) {
      deleteCookieParam(key);
    },
  };
  SessionWriter = MemoryWriter;

  var setItem = function setItem(storageObject, key, value) {
    var item = getStorageItem(storageObject);
    item[key] = value;
    setStorageItem(storageObject, item);
  };

  var getItem = function getItem(storageObject, key) {
    var item = getStorageItem(storageObject);
    return item[key];
  };

  var removeItem = function removeItem(storageObject, key) {
    var item = getStorageItem(storageObject);
    delete item[key];
    setStorageItem(storageObject, item);
  };

  var getStorageItem = function getStorageItem(storageObject) {
    var item = storageObject.getItem(SESSION_OBJECT_NAME);
    return item ? JSON.parse(item) : {};
  };

  var setStorageItem = function setStorageItem(storageObject, item) {
    storageObject.setItem(SESSION_OBJECT_NAME, JSON.stringify(item));
  };

  var getUpdatedTime = function getUpdatedTime(numDays) {
    var now = new Date();
    now.setTime(now.getTime() + numDays * 24 * 60 * 60 * 1000);
    return now.toUTCString();
  };

  var setCookieParam = function setCookieParam(key, value, numDays) {
    var expires = "expires=" + getUpdatedTime(COOKIE_EXPIRATION_DAYS);
    var existingCookie = getCookie(SESSION_OBJECT_NAME);
    var cookieJson = {};

    if (existingCookie) {
      cookieJson = JSON.parse(existingCookie);
    }

    cookieJson[key] = value;
    var cookieStr =
      SESSION_OBJECT_NAME + "=" + JSON.stringify(cookieJson) + ";";
    cookieStr += expires + ";path=/";
    document.cookie = cookieStr;
  };

  var getCookieParam = function getCookieParam(key) {
    var cookieParam = JSON.parse(getCookie(SESSION_OBJECT_NAME));
    return cookieParam[key];
  };

  var getCookie = function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookies = decodedCookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];

      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1);
      }

      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }

    return "";
  };

  var deleteCookieParam = function deleteCookieParam(key) {
    var expires = "expires=" + getUpdatedTime(COOKIE_EXPIRATION_DAYS);
    var existingCookie = getCookie(SESSION_OBJECT_NAME);
    var cookieJson = {};

    if (existingCookie) {
      cookieJson = JSON.parse(existingCookie);
      delete cookieJson[key];
    }

    var cookieStr =
      SESSION_OBJECT_NAME + "=" + JSON.stringify(cookieJson) + ";";
    cookieStr += expires + ";path=/";
    document.cookie = cookieStr;
  };

  return {
    getCookie: getCookie,
    setStoreType: setStoreType,
    remove: remove,
    get: get,
    set: set,
  };
})();

var _default = ReactSession;
exports["default"] = _default;
