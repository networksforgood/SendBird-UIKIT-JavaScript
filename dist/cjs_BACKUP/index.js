var index = (function (exports, React__default, PropTypes, Sb, cssVars, reactDom) {
  'use strict';

  var React__default__default = 'default' in React__default ? React__default['default'] : React__default;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  Sb = Sb && Sb.hasOwnProperty('default') ? Sb['default'] : Sb;
  cssVars = cssVars && cssVars.hasOwnProperty('default') ? cssVars['default'] : cssVars;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var SendbirdSdkContext = /*#__PURE__*/React__default__default.createContext();

  var withSendbirdContext = function withSendbirdContext(OriginalComponent, mapStoreToProps) {
    var ContextAwareComponent = function ContextAwareComponent(props) {
      return /*#__PURE__*/React__default__default.createElement(SendbirdSdkContext.Consumer, null, function (context) {
        if (mapStoreToProps && typeof mapStoreToProps !== 'function') {
          // eslint-disable-next-line no-console
          console.warn('Second parameter to withSendbirdContext must be a pure function');
        }

        var mergedProps = mapStoreToProps && typeof mapStoreToProps === 'function' ? _objectSpread2(_objectSpread2({}, mapStoreToProps(context)), props) : _objectSpread2(_objectSpread2({}, context), props); // eslint-disable-next-line react/jsx-props-no-spreading

        return /*#__PURE__*/React__default__default.createElement(OriginalComponent, mergedProps);
      });
    };

    var componentName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
    ContextAwareComponent.displayName = "SendbirdAware".concat(componentName);
    return ContextAwareComponent;
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
          }
      }
      return to.concat(ar || from);
  }

  /* eslint-disable no-bitwise */

  /* eslint-disable eqeqeq */

  /* eslint-disable no-mixed-operators */
  // https://stackoverflow.com/a/2117523
  // used mainly for dom key generation
  var uuidv4 = function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };

  var getStringSet = function getStringSet() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
    var stringSet = {
      en: {
        OPEN_CHANNEL_SETTINGS__OPERATOR_TITLE: 'Channel Information',
        OPEN_CHANNEL_SETTINGS__OPERATOR_URL: 'URL',
        OPEN_CHANNEL_SETTINGS__PARTICIPANTS_ACCORDION_TITLE: 'Participants',
        OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL: 'Delete channel',
        OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_TITLE: 'Delete this channel',
        OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_SUBMIT: 'Delete',
        OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE: 'Participants',
        OPEN_CHANNEL_SETTINGS__EMPTY_LIST: 'No participants yet',
        OPEN_CHANNEL_SETTINGS__SEE_ALL: 'See all participants',
        OPEN_CHANNEL_SETTINGS__ALL_PARTICIPANTS_TITLE: 'All participants',
        OPEN_CHANNEL_SETTINGS__NO_TITLE: '(No title)',
        OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS: 'participants',
        TRYING_TO_CONNECT: 'Trying to connect…',
        USER_PROFILE__MESSAGE: 'Message',
        USER_PROFILE__USER_ID: 'User ID',
        EDIT_PROFILE__TITLE: 'My profile',
        EDIT_PROFILE__IMAGE_LABEL: 'Profile image',
        EDIT_PROFILE__IMAGE_UPLOAD: 'Upload',
        EDIT_PROFILE__NICKNAME_LABEL: 'Nickname',
        EDIT_PROFILE__NICKNAME_PLACEHOLDER: 'Enter your nickname',
        EDIT_PROFILE__USERID_LABEL: 'User ID',
        EDIT_PROFILE__THEME_LABEL: 'Dark theme',
        CHANNEL_LIST__TITLE: 'Channels',
        CHANNEL__MESSAGE_INPUT__PLACE_HOLDER: 'Enter message',
        CHANNEL__MESSAGE_INPUT__PLACE_HOLDER__DISABLED: 'Chat is unavailable in this channel',
        CHANNEL__MESSAGE_INPUT__PLACE_HOLDER__MUTED: 'Chat is unavailable because you are being muted',
        CHANNEL__MESSAGE_LIST__NOTIFICATION__NEW_MESSAGE: 'new message(s) since',
        CHANNEL__MESSAGE_LIST__NOTIFICATION__ON: 'on',
        CHANNEL_SETTING__HEADER__TITLE: 'Channel information',
        CHANNEL_SETTING__PROFILE__EDIT: 'Edit',
        CHANNEL_SETTING__MEMBERS__TITLE: 'Members',
        CHANNEL_SETTING__MEMBERS__SEE_ALL_MEMBERS: 'All members',
        CHANNEL_SETTING__MEMBERS__INVITE_MEMBER: 'Invite users',
        CHANNEL_SETTING__LEAVE_CHANNEL__TITLE: 'Leave channel',
        CHANNEL_SETTING__OPERATORS__TITLE: 'Operators',
        CHANNEL_SETTING__OPERATORS__TITLE_ALL: 'All operators',
        CHANNEL_SETTING__OPERATORS__TITLE_ADD: 'Add operator',
        CHANNEL_SETTING__OPERATORS__PROMOTE: 'Promote to operator',
        CHANNEL_SETTING__OPERATORS__DEMOTE: 'Demote operator',
        CHANNEL_SETTING__MUTED_MEMBERS__TITLE: 'Muted members',
        CHANNEL_SETTING__MUTED_MEMBERS__TITLE_ALL: 'All muted members',
        CHANNEL_SETTING__BANNED_MEMBERS__TITLE: 'Banned members',
        CHANNEL_SETTING__BANNED_MEMBERS__TITLE_ALL: 'All banned members',
        CHANNEL_SETTING__FREEZE_CHANNEL: 'Freeze Channel',
        BUTTON__CANCEL: 'Cancel',
        BUTTON__DELETE: 'Delete',
        BUTTON__SAVE: 'Save',
        BUTTON__CREATE: 'Create',
        BUTTON__INVITE: 'Invite',
        BUTTON__CLOSE: 'Close',
        BADGE__OVER: '+',
        MODAL__DELETE_MESSAGE__TITLE: 'Delete this message?',
        MODAL__CHANNEL_INFORMATION__TITLE: 'Edit channel information',
        MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE: 'Channel image',
        MODAL__CHANNEL_INFORMATION__UPLOAD: 'Upload',
        MODAL__CHANNEL_INFORMATION__CHANNEL_NAME: 'Channel name',
        MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER: 'Enter name',
        MODAL__INVITE_MEMBER__TITLE: 'Invite member',
        MODAL__INVITE_MEMBER__SELECTEC: 'selected',
        MODAL__CREATE_CHANNEL__TITLE: 'New channel',
        MODAL__CREATE_CHANNEL__SELECTED: 'selected',
        MODAL__USER_LIST__TITLE: 'members',
        TYPING_INDICATOR__IS_TYPING: 'is typing...',
        TYPING_INDICATOR__AND: 'and',
        TYPING_INDICATOR__ARE_TYPING: 'are typing...',
        TYPING_INDICATOR__MULTIPLE_TYPING: 'Several people are typing...',
        MESSAGE_STATUS__SENDING_FAILED: 'Couldn\'t send message.',
        MESSAGE_STATUS__TRY_AGAIN: 'Try again',
        MESSAGE_STATUS__OR: 'or',
        MESSAGE_STATUS__DELETE: 'delete',
        CHANNEL_FROZEN: 'Channel frozen',
        MUTED_PL: 'Channel frozen',
        PLACE_HOLDER__NO_CHANNEL: 'No channels',
        PLACE_HOLDER__WRONG: 'Something went wrong',
        PLACE_HOLDER__RETRY_TO_CONNECT: 'Retry',
        PLACE_HOLDER__NO_MESSAGES: 'No messages',
        NO_TITLE: 'No title',
        NO_NAME: '(No name)',
        NO_MEMBERS: '(No members)',
        TOOLTIP__AND_YOU: ', and you',
        TOOLTIP__YOU: 'you',
        YOU: ' (You)',
        TOOLTIP__UNKOWN_USER: '(no name)',
        UNKNOWN__UNKNOWN_MESSAGE_TYPE: '(Unknown message type)',
        UNKNOWN__CANNOT_READ_MESSAGE: 'Cannot read this message.',
        MESSAGE_EDITED: '(edited)',
        CONTEXT_MENU_DROPDOWN__COPY: 'Copy',
        CONTEXT_MENU_DROPDOWN__EDIT: 'Edit',
        CONTEXT_MENU_DROPDOWN__RESEND: 'Resend',
        CONTEXT_MENU_DROPDOWN__DELETE: 'Delete',
        SEARCH: 'Search',
        SEARCH_IN_CHANNEL: 'Search in channel',
        SEARCH_IN: 'Search in',
        SEARCHING: 'Searching for messages...',
        NO_SEARCHED_MESSAGE: 'No results found.'
      }
    };
    return stringSet[lang];
  };

  var LocalizationContext = /*#__PURE__*/React__default__default.createContext({
    stringSet: getStringSet('en')
  });

  var LocalizationProvider = function LocalizationProvider(props) {
    var children = props.children;
    return /*#__PURE__*/React__default__default.createElement(LocalizationContext.Provider, {
      value: props
    }, children);
  };

  var INIT_USER = 'INIT_USER';
  var RESET_USER = 'RESET_USER';
  var UPDATE_USER_INFO = 'UPDATE_USER_INFO';

  var INIT_SDK = 'INIT_SDK';
  var SET_SDK_LOADING = 'SET_SDK_LOADING';
  var RESET_SDK = 'RESET_SDK';
  var SDK_ERROR = 'SDK_ERROR';

  var APP_VERSION_STRING = '2.3.2';
  var disconnectSdk = function disconnectSdk(_ref) {
    var sdkDispatcher = _ref.sdkDispatcher,
        userDispatcher = _ref.userDispatcher,
        sdk = _ref.sdk,
        onDisconnect = _ref.onDisconnect;
    sdkDispatcher({
      type: SET_SDK_LOADING,
      payload: true
    });

    if (sdk && sdk.disconnect) {
      sdk.disconnect().then(function () {
        sdkDispatcher({
          type: RESET_SDK
        });
        userDispatcher({
          type: RESET_USER
        });
      }).finally(function () {
        onDisconnect();
      });
    } else {
      onDisconnect();
    }
  };
  var handleConnection = function handleConnection(_ref2, dispatchers) {
    var userId = _ref2.userId,
        appId = _ref2.appId,
        nickname = _ref2.nickname,
        profileUrl = _ref2.profileUrl,
        accessToken = _ref2.accessToken,
        sdk = _ref2.sdk,
        logger = _ref2.logger;
    var sdkDispatcher = dispatchers.sdkDispatcher,
        userDispatcher = dispatchers.userDispatcher;
    disconnectSdk({
      sdkDispatcher: sdkDispatcher,
      userDispatcher: userDispatcher,
      sdk: sdk,
      logger: logger,
      onDisconnect: function onDisconnect() {
        logger.info('Setup connection');
        sdkDispatcher({
          type: SET_SDK_LOADING,
          payload: true
        });

        if (userId && appId) {
          var newSdk = new Sb({
            appId: appId
          }); // to check if code is released version from rollup and *not from storybook*
          // see rollup config file

          {
            newSdk.addExtension('sb_uikit', APP_VERSION_STRING);
          }

          var connectCbSucess = function connectCbSucess(user) {
            sdkDispatcher({
              type: INIT_SDK,
              payload: newSdk
            });
            userDispatcher({
              type: INIT_USER,
              payload: user
            }); // use nickname/profileUrl if provided
            // or set userID as nickname

            var newNickName = nickname || user.nickname;
            var newProfileUrl = profileUrl || user.profileUrl;
            newSdk.updateCurrentUserInfo(newNickName, newProfileUrl).then(function (namedUser) {
              userDispatcher({
                type: UPDATE_USER_INFO,
                payload: namedUser
              });
            });
          };

          var connectCbError = function connectCbError(e) {
            logger.error('Connection failed', "".concat(e));
            sdkDispatcher({
              type: RESET_SDK
            });
            sdkDispatcher({
              type: RESET_USER
            });
            sdkDispatcher({
              type: SDK_ERROR
            });
          };

          if (accessToken) {
            newSdk.connect(userId, accessToken).then(function (res) {
              return connectCbSucess(res);
            }).catch(function (err) {
              return connectCbError(err);
            });
          } else {
            newSdk.connect(userId).then(function (res) {
              return connectCbSucess(res);
            }).catch(function (err) {
              return connectCbError(err);
            });
          }
        } else {
          sdkDispatcher({
            type: SDK_ERROR
          });
          logger.warning('Connection failed', 'UserId or appId missing');
        }
      }
    });
  };

  var isEmpty = function isEmpty(obj) {
    if (obj === null || obj === undefined) {
      return true;
    }

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  };

  var useTheme = function useTheme(overrides) {
    React__default.useLayoutEffect(function () {
      if (!isEmpty(overrides)) {
        cssVars({
          variables: __assign({
            '--sendbird-dark-primary-500': '#4d2aa6',
            '--sendbird-dark-primary-400': '#6440C4',
            '--sendbird-dark-primary-300': '#7B53EF',
            '--sendbird-dark-primary-200': '#9E8CF5',
            '--sendbird-dark-primary-100': '#E2DFFF',
            '--sendbird-dark-secondary-500': '#007A7A',
            '--sendbird-dark-secondary-400': '#189A8D',
            '--sendbird-dark-secondary-300': '#2EBA9F',
            '--sendbird-dark-secondary-200': '#6FD6BE',
            '--sendbird-dark-secondary-100': '#AEF2DC',
            '--sendbird-dark-information-100': '#b2d9ff',
            '--sendbird-dark-error-500': '#A30E2D',
            '--sendbird-dark-error-400': '#C11F41',
            '--sendbird-dark-error-300': '#E53157',
            '--sendbird-dark-error-200': '#FF6183',
            '--sendbird-dark-error-100': '#FFABBD',
            '--sendbird-dark-background-700': '#000000',
            '--sendbird-dark-background-600': '#161616',
            '--sendbird-dark-background-500': '#2C2C2C',
            '--sendbird-dark-background-400': '#393939',
            '--sendbird-dark-background-300': '#A8A8A8',
            '--sendbird-dark-background-200': '#D9D9D9',
            '--sendbird-dark-background-100': '#F0F0F0',
            '--sendbird-dark-background-50': '#FFFFFF',
            '--sendbird-dark-overlay': 'rgba(0, 0, 0, 0.32)',
            '--sendbird-dark-onlight-01': 'rgba(0, 0, 0, 0.88)',
            '--sendbird-dark-onlight-02': 'rgba(0, 0, 0, 0.50)',
            '--sendbird-dark-onlight-03': 'rgba(0, 0, 0, 0.38)',
            '--sendbird-dark-onlight-04': 'rgba(0, 0, 0, 0.12)',
            '--sendbird-dark-ondark-01': 'rgba(255, 255, 255, 0.88)',
            '--sendbird-dark-ondark-02': 'rgba(255, 255, 255, 0.50)',
            '--sendbird-dark-ondark-03': 'rgba(255, 255, 255, 0.38)',
            '--sendbird-dark-ondark-04': 'rgba(255, 255, 255, 0.12)',
            '--sendbird-dark-shadow-01': '0 1px 5px 0 rgba(33, 34, 66, 0.04), 0 0 3px 0 rgba(0, 0, 0, 0.08), 0 2px 1px 0 rgba(0, 0, 0, 0.12)',
            '--sendbird-dark-shadow-02': '0 3px 5px -3px rgba(33, 34, 66, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.08), 0 8px 10px 1px rgba(0, 0, 0, 0.12)',
            '--sendbird-dark-shadow-03': '0 6px 10px -5px rgba(0, 0, 0, 0.04), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 16px 24px 2px rgba(0, 0, 0, 0.12)',
            '--sendbird-dark-shadow-04': '0 9px 15px -7px rgba(0, 0, 0, 0.04), 0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 24px 38px 3px rgba(0, 0, 0, 0.12)',
            '--sendbird-dark-shadow-message-input': '0 1px 5px 0 rgba(33, 34, 66, 0.12), 0 0 1px 0 rgba(33, 34, 66, 0.16), 0 2px 1px 0 rgba(33, 34, 66, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
            '--sendbird-light-primary-500': '#4d2aa6',
            '--sendbird-light-primary-400': '#6440C4',
            '--sendbird-light-primary-300': '#7B53EF',
            '--sendbird-light-primary-200': '#9E8CF5',
            '--sendbird-light-primary-100': '#E2DFFF',
            '--sendbird-light-secondary-500': '#007A7A',
            '--sendbird-light-secondary-400': '#189A8D',
            '--sendbird-light-secondary-300': '#2EBA9F',
            '--sendbird-light-secondary-200': '#6FD6BE',
            '--sendbird-light-secondary-100': '#AEF2DC',
            '--sendbird-light-information-100': '#b2d9ff',
            '--sendbird-light-error-500': '#A30E2D',
            '--sendbird-light-error-400': '#C11F41',
            '--sendbird-light-error-300': '#E53157',
            '--sendbird-light-error-200': '#FF6183',
            '--sendbird-light-error-100': '#FFABBD',
            '--sendbird-light-background-700': '#000000',
            '--sendbird-light-background-600': '#161616',
            '--sendbird-light-background-500': '#2C2C2C',
            '--sendbird-light-background-400': '#393939',
            '--sendbird-light-background-300': '#A8A8A8',
            '--sendbird-light-background-200': '#D9D9D9',
            '--sendbird-light-background-100': '#F0F0F0',
            '--sendbird-light-background-50': ' #FFFFFF',
            '--sendbird-light-overlay': 'rgba(0, 0, 0, 0.32)',
            '--sendbird-light-onlight-01': 'rgba(0, 0, 0, 0.88)',
            '--sendbird-light-onlight-02': 'rgba(0, 0, 0, 0.50)',
            '--sendbird-light-onlight-03': 'rgba(0, 0, 0, 0.38)',
            '--sendbird-light-onlight-04': 'rgba(0, 0, 0, 0.12)',
            '--sendbird-light-ondark-01': 'rgba(255, 255, 255, 0.88)',
            '--sendbird-light-ondark-02': 'rgba(255, 255, 255, 0.50)',
            '--sendbird-light-ondark-03': 'rgba(255, 255, 255, 0.38)',
            '--sendbird-light-ondark-04': 'rgba(255, 255, 255, 0.12)',
            '--sendbird-light-shadow-01': '0 1px 5px 0 rgba(33, 34, 66, 0.04), 0 0 3px 0 rgba(0, 0, 0, 0.08), 0 2px 1px 0 rgba(0, 0, 0, 0.12)',
            '--sendbird-light-shadow-02': '0 3px 5px -3px rgba(33, 34, 66, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.08), 0 8px 10px 1px rgba(0, 0, 0, 0.12)',
            '--sendbird-light-shadow-03': '0 6px 10px -5px rgba(0, 0, 0, 0.04), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 16px 24px 2px rgba(0, 0, 0, 0.12)',
            '--sendbird-light-shadow-04': '0 9px 15px -7px rgba(0, 0, 0, 0.04), 0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 24px 38px 3px rgba(0, 0, 0, 0.12)',
            '--sendbird-light-shadow-message-input': '0 1px 5px 0 rgba(33, 34, 66, 0.12), 0 0 1px 0 rgba(33, 34, 66, 0.16), 0 2px 1px 0 rgba(33, 34, 66, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
          }, overrides)
        });
      }
    }, [overrides]);
  };

  var sdkInitialState = {
    initialized: false,
    loading: false,
    sdk: {},
    error: false
  };

  function reducer$1(state, action) {
    switch (action.type) {
      case SET_SDK_LOADING:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          initialized: false,
          loading: action.payload
        });

      case SDK_ERROR:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          initialized: false,
          loading: false,
          error: true
        });

      case INIT_SDK:
        return {
          sdk: action.payload,
          initialized: true,
          loading: false,
          error: false
        };

      case RESET_SDK:
        return sdkInitialState;

      default:
        return state;
    }
  }

  var userInitialState = {
    initialized: false,
    loading: false,
    user: {}
  };

  function reducer(state, action) {
    switch (action.type) {
      case INIT_USER:
        return {
          initialized: true,
          loading: false,
          user: action.payload
        };

      case RESET_USER:
        return userInitialState;

      case UPDATE_USER_INFO:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          user: action.payload
        });

      default:
        return state;
    }
  }

  function useConnectionStatus(sdk, logger) {
    var _useState = React__default.useState(true),
        _useState2 = _slicedToArray(_useState, 2),
        isOnline = _useState2[0],
        setIsOnline = _useState2[1];

    React__default.useEffect(function () {
      var uniqueHandlerId = uuidv4();
      logger.warning('sdk changed', uniqueHandlerId);
      var handler;

      if (sdk && sdk.ConnectionHandler) {
        handler = new sdk.ConnectionHandler();

        handler.onReconnectStarted = function () {
          setIsOnline(false);
          logger.warning('onReconnectStarted', {
            isOnline: isOnline
          });
        };

        handler.onReconnectSucceeded = function () {
          setIsOnline(true);
          logger.warning('onReconnectSucceeded', {
            isOnline: isOnline
          });
        };

        handler.onReconnectFailed = function () {
          sdk.reconnect();
          logger.warning('onReconnectFailed');
        };

        logger.info('Added ConnectionHandler', uniqueHandlerId);
        sdk.addConnectionHandler(uniqueHandlerId, handler);
      }

      return function () {
        try {
          sdk.removeConnectionHandler(uniqueHandlerId);
          logger.info('Removed ConnectionHandler', uniqueHandlerId);
        } catch (_unused) {//
        }
      };
    }, [sdk]);
    React__default.useEffect(function () {
      var tryReconnect = function tryReconnect() {
        try {
          logger.warning('Try reconnecting SDK');

          if (sdk.getConnectionState() !== 'OPEN') {
            // connection is not broken yet
            sdk.reconnect();
          }
        } catch (_unused2) {//
        }
      }; // addEventListener version


      window.addEventListener('online', tryReconnect);
      return function () {
        window.removeEventListener('online', tryReconnect);
      };
    }, [sdk]); // add offline-class to body

    React__default.useEffect(function () {
      var body = document.querySelector('body');

      if (!isOnline) {
        try {
          body.classList.add('sendbird__offline');
          logger.info('Added class sendbird__offline to body');
        } catch (e) {//
        }
      } else {
        try {
          body.classList.remove('sendbird__offline');
          logger.info('Removed class sendbird__offline from body');
        } catch (e) {//
        }
      }
    }, [isOnline]);
    return isOnline;
  }

  // Logger, pretty much explains it
  // in SendbirdProvider
  // const [logger, setLogger] = useState(LoggerFactory(logLevel));
  var LOG_LEVELS = {
    DEBUG: 'debug',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info',
    ALL: 'all'
  };

  var colorLog = function colorLog(level) {
    switch (level) {
      case LOG_LEVELS.WARNING:
        return 'color: Orange';

      case LOG_LEVELS.ERROR:
        return 'color: Red';

      default:
        return 'color: Gray';
    }
  };

  var printLog = function printLog(_ref) {
    var level = _ref.level,
        title = _ref.title,
        _ref$description = _ref.description,
        description = _ref$description === void 0 ? '' : _ref$description;
    // eslint-disable-next-line no-console
    console.log("%c SendbirdUIKit | ".concat(level, " | ").concat(new Date().toISOString(), " | ").concat(title, " ").concat(description && '|'), colorLog(level), description);
  };
  var getDefaultLogger = function getDefaultLogger() {
    return {
      info: function info() {},
      error: function error() {},
      warning: function warning() {}
    };
  };
  var LoggerFactory = function LoggerFactory(lvl, customInterface) {
    var logInterface = customInterface || printLog;
    var lvlArray = Array.isArray(lvl) ? lvl : [lvl];

    var applyLog = function applyLog(lgLvl) {
      return function (title, description) {
        return logInterface({
          level: lgLvl,
          title: title,
          description: description
        });
      };
    };

    var logger = lvlArray.reduce(function (accumulator, currentLvl) {
      if (currentLvl === LOG_LEVELS.DEBUG || currentLvl === LOG_LEVELS.ALL) {
        return _objectSpread2(_objectSpread2({}, accumulator), {}, {
          info: applyLog(LOG_LEVELS.INFO),
          error: applyLog(LOG_LEVELS.ERROR),
          warning: applyLog(LOG_LEVELS.WARNING)
        });
      }

      if (currentLvl === LOG_LEVELS.INFO) {
        return _objectSpread2(_objectSpread2({}, accumulator), {}, {
          info: applyLog(LOG_LEVELS.INFO)
        });
      }

      if (currentLvl === LOG_LEVELS.ERROR) {
        return _objectSpread2(_objectSpread2({}, accumulator), {}, {
          error: applyLog(LOG_LEVELS.ERROR)
        });
      }

      if (currentLvl === LOG_LEVELS.WARNING) {
        return _objectSpread2(_objectSpread2({}, accumulator), {}, {
          warning: applyLog(LOG_LEVELS.WARNING)
        });
      }

      return _objectSpread2({}, accumulator);
    }, getDefaultLogger());
    return logger;
  };

  // https://davidwalsh.name/pubsub-javascript
  // we use pubsub to sync events between multiple components(example - ChannelList, Channel)
  // for example, if customer sends a message from their custom component
  // without pubsub,we would not be able to listen to it
  // in our ChannelList or Conversation
  var pubSubFactory = (function () {
    var topics = {};
    var hOP = topics.hasOwnProperty;
    return {
      __getTopics: function __getTopics() {
        return topics;
      },
      subscribe: function subscribe(topic, listener) {
        // Create the topic's object if not yet created
        if (!hOP.call(topics, topic)) {
          topics[topic] = [];
        } // Add the listener to queue


        var index = topics[topic].push(listener) - 1; // Provide handle back for removal of topic

        return {
          remove: function remove() {
            delete topics[topic][index];
          }
        };
      },
      publish: function publish(topic, info) {
        // If the topic doesn't exist, or there's no listeners in queue, just leave
        if (!hOP.call(topics, topic)) {
          return;
        } // Cycle through topics queue, fire!


        topics[topic].forEach(function (item) {
          item(info !== undefined ? info : {});
        });
      }
    };
  });

  function useAppendDomNode() {
    var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var rootSelector = arguments.length > 1 ? arguments[1] : undefined;
    React__default.useEffect(function () {
      var root = document.querySelector(rootSelector);
      ids.forEach(function (id) {
        var elem = document.createElement('div');
        elem.setAttribute('id', id);
        root.appendChild(elem);
      });
      return function () {
        ids.forEach(function (id) {
          var target = document.getElementById(id);

          if (target) {
            root.removeChild(target);
          }
        });
      };
    }, []);
  }

  function Sendbird(props) {
    var userId = props.userId,
        appId = props.appId,
        accessToken = props.accessToken,
        children = props.children,
        disableUserProfile = props.disableUserProfile,
        renderUserProfile = props.renderUserProfile,
        allowProfileEdit = props.allowProfileEdit,
        theme = props.theme,
        nickname = props.nickname,
        profileUrl = props.profileUrl,
        userListQuery = props.userListQuery,
        _props$config = props.config,
        config = _props$config === void 0 ? {} : _props$config,
        colorSet = props.colorSet,
        stringSet = props.stringSet,
        imageCompression = props.imageCompression;
    var _config$logLevel = config.logLevel,
        logLevel = _config$logLevel === void 0 ? '' : _config$logLevel;

    var _useState = React__default.useState(LoggerFactory(logLevel)),
        _useState2 = _slicedToArray(_useState, 2),
        logger = _useState2[0],
        setLogger = _useState2[1];

    var _useState3 = React__default.useState(),
        _useState4 = _slicedToArray(_useState3, 2),
        pubSub = _useState4[0],
        setPubSub = _useState4[1];

    var _useReducer = React__default.useReducer(reducer$1, sdkInitialState),
        _useReducer2 = _slicedToArray(_useReducer, 2),
        sdkStore = _useReducer2[0],
        sdkDispatcher = _useReducer2[1];

    var _useReducer3 = React__default.useReducer(reducer, userInitialState),
        _useReducer4 = _slicedToArray(_useReducer3, 2),
        userStore = _useReducer4[0],
        userDispatcher = _useReducer4[1];

    useTheme(colorSet);
    React__default.useEffect(function () {
      setPubSub(pubSubFactory());
    }, []);
    React__default.useEffect(function () {
      logger.info('App Init'); // dispatch action

      handleConnection({
        userId: userId,
        appId: appId,
        accessToken: accessToken,
        sdkStore: sdkStore,
        nickname: nickname,
        profileUrl: profileUrl,
        sdk: sdkStore.sdk,
        logger: logger
      }, {
        sdkDispatcher: sdkDispatcher,
        userDispatcher: userDispatcher
      });
    }, [userId, appId, accessToken]); // to create a pubsub to communicate between parent and child

    React__default.useEffect(function () {
      setLogger(LoggerFactory(logLevel));
    }, [logLevel]);
    useAppendDomNode(['sendbird-modal-root', 'sendbird-dropdown-portal', 'sendbird-emoji-list-portal'], 'body'); // should move to reducer

    var _useState5 = React__default.useState(theme),
        _useState6 = _slicedToArray(_useState5, 2),
        currenttheme = _useState6[0],
        setCurrenttheme = _useState6[1];

    React__default.useEffect(function () {
      setCurrenttheme(theme);
    }, [theme]); // add-remove theme from body

    React__default.useEffect(function () {
      logger.info('Setup theme', "Theme: ".concat(currenttheme));

      try {
        var body = document.querySelector('body');
        body.classList.remove('sendbird-theme--light');
        body.classList.remove('sendbird-theme--dark');
        body.classList.add("sendbird-theme--".concat(currenttheme || 'light'));
        logger.info('Finish setup theme'); // eslint-disable-next-line no-empty
      } catch (e) {
        logger.warning('Setup theme failed', "".concat(e));
      }

      return function () {
        try {
          var _body = document.querySelector('body');

          _body.classList.remove('sendbird-theme--light');

          _body.classList.remove('sendbird-theme--dark'); // eslint-disable-next-line no-empty

        } catch (_unused) {}
      };
    }, [currenttheme]);
    var isOnline = useConnectionStatus(sdkStore.sdk, logger);
    var localeStringSet = React__default__default.useMemo(function () {
      if (!stringSet) {
        return getStringSet('en');
      }

      return _objectSpread2(_objectSpread2({}, getStringSet('en')), stringSet);
    }, [stringSet]);
    return /*#__PURE__*/React__default__default.createElement(SendbirdSdkContext.Provider, {
      value: {
        stores: {
          sdkStore: sdkStore,
          userStore: userStore
        },
        dispatchers: {
          sdkDispatcher: sdkDispatcher,
          userDispatcher: userDispatcher,
          reconnect: function reconnect() {
            handleConnection({
              userId: userId,
              appId: appId,
              accessToken: accessToken,
              sdkStore: sdkStore,
              nickname: nickname,
              profileUrl: profileUrl,
              logger: logger,
              sdk: sdkStore.sdk
            }, {
              sdkDispatcher: sdkDispatcher,
              userDispatcher: userDispatcher
            });
          }
        },
        config: {
          disableUserProfile: disableUserProfile,
          renderUserProfile: renderUserProfile,
          allowProfileEdit: allowProfileEdit,
          isOnline: isOnline,
          userId: userId,
          appId: appId,
          accessToken: accessToken,
          theme: currenttheme,
          setCurrenttheme: setCurrenttheme,
          userListQuery: userListQuery,
          logger: logger,
          pubSub: pubSub,
          imageCompression: imageCompression
        }
      }
    }, /*#__PURE__*/React__default__default.createElement(LocalizationProvider, {
      stringSet: localeStringSet
    }, children));
  }
  Sendbird.propTypes = {
    userId: PropTypes.string.isRequired,
    appId: PropTypes.string.isRequired,
    accessToken: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.any]).isRequired,
    theme: PropTypes.string,
    nickname: PropTypes.string,
    profileUrl: PropTypes.string,
    disableUserProfile: PropTypes.bool,
    renderUserProfile: PropTypes.func,
    allowProfileEdit: PropTypes.bool,
    userListQuery: PropTypes.func,
    config: PropTypes.shape({
      // None Error Warning Info 'All/Debug'
      logLevel: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
      pubSub: PropTypes.shape({
        subscribe: PropTypes.func,
        publish: PropTypes.func
      })
    }),
    stringSet: PropTypes.objectOf(PropTypes.string),
    colorSet: PropTypes.objectOf(PropTypes.string),
    imageCompression: PropTypes.shape({
      compressionRate: PropTypes.number,
      resizingWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      resizingHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  };
  Sendbird.defaultProps = {
    accessToken: '',
    theme: 'light',
    nickname: '',
    profileUrl: '',
    disableUserProfile: false,
    renderUserProfile: null,
    allowProfileEdit: false,
    userListQuery: null,
    config: {},
    stringSet: null,
    colorSet: null,
    imageCompression: {}
  };

  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
  }

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   *
   * @param {Date|Number} argument - the value to convert
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Clone the date:
   * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert the timestamp to date:
   * const result = toDate(1392098430000)
   * //=> Tue Feb 11 2014 11:30:30
   */

  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date

    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
      return new Date(argument);
    } else {
      if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

        console.warn(new Error().stack);
      }

      return new Date(NaN);
    }
  }

  /**
   * @name isValid
   * @category Common Helpers
   * @summary Is the given date valid?
   *
   * @description
   * Returns false if argument is Invalid Date and true otherwise.
   * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
   * Invalid Date is a Date, whose time value is NaN.
   *
   * Time value of Date: http://es5.github.io/#x15.9.1.1
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * - Now `isValid` doesn't throw an exception
   *   if the first argument is not an instance of Date.
   *   Instead, argument is converted beforehand using `toDate`.
   *
   *   Examples:
   *
   *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
   *   |---------------------------|---------------|---------------|
   *   | `new Date()`              | `true`        | `true`        |
   *   | `new Date('2016-01-01')`  | `true`        | `true`        |
   *   | `new Date('')`            | `false`       | `false`       |
   *   | `new Date(1488370835081)` | `true`        | `true`        |
   *   | `new Date(NaN)`           | `false`       | `false`       |
   *   | `'2016-01-01'`            | `TypeError`   | `false`       |
   *   | `''`                      | `TypeError`   | `false`       |
   *   | `1488370835081`           | `TypeError`   | `true`        |
   *   | `NaN`                     | `TypeError`   | `false`       |
   *
   *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
   *   that try to coerce arguments to the expected type
   *   (which is also the case with other *date-fns* functions).
   *
   * @param {*} date - the date to check
   * @returns {Boolean} the date is valid
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // For the valid date:
   * var result = isValid(new Date(2014, 1, 31))
   * //=> true
   *
   * @example
   * // For the value, convertable into a date:
   * var result = isValid(1393804800000)
   * //=> true
   *
   * @example
   * // For the invalid date:
   * var result = isValid(new Date(''))
   * //=> false
   */

  function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    return !isNaN(date);
  }

  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },
    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },
    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },
    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },
    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },
    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },
    aboutXWeeks: {
      one: 'about 1 week',
      other: 'about {{count}} weeks'
    },
    xWeeks: {
      one: '1 week',
      other: '{{count}} weeks'
    },
    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },
    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },
    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },
    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },
    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },
    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  };
  function formatDistance(token, count, options) {
    options = options || {};
    var result;

    if (typeof formatDistanceLocale[token] === 'string') {
      result = formatDistanceLocale[token];
    } else if (count === 1) {
      result = formatDistanceLocale[token].one;
    } else {
      result = formatDistanceLocale[token].other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result;
      } else {
        return result + ' ago';
      }
    }

    return result;
  }

  function buildFormatLongFn(args) {
    return function (dirtyOptions) {
      var options = dirtyOptions || {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
  };
  var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: 'full'
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: 'full'
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: 'full'
    })
  };

  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
  };
  function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  }

  function buildLocalizeFn(args) {
    return function (dirtyIndex, dirtyOptions) {
      var options = dirtyOptions || {};
      var context = options.context ? String(options.context) : 'standalone';
      var valuesArray;

      if (context === 'formatting' && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;

        var _width = options.width ? String(options.width) : args.defaultWidth;

        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }

      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index];
    };
  }

  var eraValues = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini']
  };
  var quarterValues = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
    // If you are making a new locale based on this one, check if the same is true for the language you're working on.
    // Generally, formatted dates should look like they are in the middle of a sentence,
    // e.g. in Spanish language the weekdays and months should be in the lowercase.

  };
  var monthValues = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  var dayValues = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  var dayPeriodValues = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    }
  };

  function ordinalNumber(dirtyNumber, _dirtyOptions) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`:
    //
    //   var options = dirtyOptions || {}
    //   var unit = String(options.unit)
    //
    // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'

    var rem100 = number % 100;

    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + 'st';

        case 2:
          return number + 'nd';

        case 3:
          return number + 'rd';
      }
    }

    return number + 'th';
  }

  var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: 'wide'
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: 'wide',
      argumentCallback: function (quarter) {
        return Number(quarter) - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: 'wide'
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: 'wide'
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: 'wide',
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: 'wide'
    })
  };

  function buildMatchPatternFn(args) {
    return function (dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var matchResult = string.match(args.matchPattern);

      if (!matchResult) {
        return null;
      }

      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);

      if (!parseResult) {
        return null;
      }

      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value: value,
        rest: string.slice(matchedString.length)
      };
    };
  }

  function buildMatchFn(args) {
    return function (dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);

      if (!matchResult) {
        return null;
      }

      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var value;

      if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
        value = findIndex(parsePatterns, function (pattern) {
          return pattern.test(matchedString);
        });
      } else {
        value = findKey(parsePatterns, function (pattern) {
          return pattern.test(matchedString);
        });
      }

      value = args.valueCallback ? args.valueCallback(value) : value;
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value: value,
        rest: string.slice(matchedString.length)
      };
    };
  }

  function findKey(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
  }

  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
  }

  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function (value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseEraPatterns,
      defaultParseWidth: 'any'
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: 'any',
      valueCallback: function (index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: 'any'
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseDayPatterns,
      defaultParseWidth: 'any'
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: 'any',
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: 'any'
    })
  };

  /**
   * @type {Locale}
   * @category Locales
   * @summary English locale (United States).
   * @language English
   * @iso-639-2 eng
   * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
   * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
   */

  var locale = {
    code: 'en-US',
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
      weekStartsOn: 0
      /* Sunday */
      ,
      firstWeekContainsDate: 1
    }
  };

  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }

    var number = Number(dirtyNumber);

    if (isNaN(number)) {
      return number;
    }

    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  /**
   * @name addMilliseconds
   * @category Millisecond Helpers
   * @summary Add the specified number of milliseconds to the given date.
   *
   * @description
   * Add the specified number of milliseconds to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the milliseconds added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
   * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:30.750
   */

  function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
  }

  /**
   * @name subMilliseconds
   * @category Millisecond Helpers
   * @summary Subtract the specified number of milliseconds from the given date.
   *
   * @description
   * Subtract the specified number of milliseconds from the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the milliseconds subtracted
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
   * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:29.250
   */

  function subMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
  }

  function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? '-' : '';
    var output = Math.abs(number).toString();

    while (output.length < targetLength) {
      output = '0' + output;
    }

    return sign + output;
  }

  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* |                                |
   * |  d  | Day of month                   |  D  |                                |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  m  | Minute                         |  M  | Month                          |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  y  | Year (abs)                     |  Y  |                                |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   */

  var formatters$1 = {
    // Year
    y: function (date, token) {
      // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
      // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
      // |----------|-------|----|-------|-------|-------|
      // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
      // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
      // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
      // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
      // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
    },
    // Month
    M: function (date, token) {
      var month = date.getUTCMonth();
      return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function (date, token) {
      return addLeadingZeros(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function (date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

      switch (token) {
        case 'a':
        case 'aa':
          return dayPeriodEnumValue.toUpperCase();

        case 'aaa':
          return dayPeriodEnumValue;

        case 'aaaaa':
          return dayPeriodEnumValue[0];

        case 'aaaa':
        default:
          return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    // Hour [1-12]
    h: function (date, token) {
      return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function (date, token) {
      return addLeadingZeros(date.getUTCHours(), token.length);
    },
    // Minute
    m: function (date, token) {
      return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function (date, token) {
      return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function (date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return addLeadingZeros(fractionalSeconds, token.length);
    }
  };

  var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCDayOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
  }

  var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate, dirtyOptions);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    var year = getUTCWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, dirtyOptions);
    return date;
  }

  var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }

  var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
    /*
     * |     | Unit                           |     | Unit                           |
     * |-----|--------------------------------|-----|--------------------------------|
     * |  a  | AM, PM                         |  A* | Milliseconds in day            |
     * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
     * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
     * |  d  | Day of month                   |  D  | Day of year                    |
     * |  e  | Local day of week              |  E  | Day of week                    |
     * |  f  |                                |  F* | Day of week in month           |
     * |  g* | Modified Julian day            |  G  | Era                            |
     * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
     * |  i! | ISO day of week                |  I! | ISO week of year               |
     * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
     * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
     * |  l* | (deprecated)                   |  L  | Stand-alone month              |
     * |  m  | Minute                         |  M  | Month                          |
     * |  n  |                                |  N  |                                |
     * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
     * |  p! | Long localized time            |  P! | Long localized date            |
     * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
     * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
     * |  s  | Second                         |  S  | Fraction of second             |
     * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
     * |  u  | Extended year                  |  U* | Cyclic year                    |
     * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
     * |  w  | Local week of year             |  W* | Week of month                  |
     * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
     * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
     * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
     *
     * Letters marked by * are not implemented but reserved by Unicode standard.
     *
     * Letters marked by ! are non-standard, but implemented by date-fns:
     * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
     * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
     *   i.e. 7 for Sunday, 1 for Monday, etc.
     * - `I` is ISO week of year, as opposed to `w` which is local week of year.
     * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
     *   `R` is supposed to be used in conjunction with `I` and `i`
     *   for universal ISO week-numbering date, whereas
     *   `Y` is supposed to be used in conjunction with `w` and `e`
     *   for week-numbering date specific to the locale.
     * - `P` is long localized date format
     * - `p` is long localized time format
     */

  };
  var formatters = {
    // Era
    G: function (date, token, localize) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;

      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return localize.era(era, {
            width: 'abbreviated'
          });
        // A, B

        case 'GGGGG':
          return localize.era(era, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return localize.era(era, {
            width: 'wide'
          });
      }
    },
    // Year
    y: function (date, token, localize) {
      // Ordinal number
      if (token === 'yo') {
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize.ordinalNumber(year, {
          unit: 'year'
        });
      }

      return formatters$1.y(date, token);
    },
    // Local week-numbering year
    Y: function (date, token, localize, options) {
      var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

      if (token === 'YY') {
        var twoDigitYear = weekYear % 100;
        return addLeadingZeros(twoDigitYear, 2);
      } // Ordinal number


      if (token === 'Yo') {
        return localize.ordinalNumber(weekYear, {
          unit: 'year'
        });
      } // Padding


      return addLeadingZeros(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function (date, token) {
      var isoWeekYear = getUTCISOWeekYear(date); // Padding

      return addLeadingZeros(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function (date, token) {
      var year = date.getUTCFullYear();
      return addLeadingZeros(year, token.length);
    },
    // Quarter
    Q: function (date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
          return String(quarter);
        // 01, 02, 03, 04

        case 'QQ':
          return addLeadingZeros(quarter, 2);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return localize.ordinalNumber(quarter, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return localize.quarter(quarter, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return localize.quarter(quarter, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return localize.quarter(quarter, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone quarter
    q: function (date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

      switch (token) {
        // 1, 2, 3, 4
        case 'q':
          return String(quarter);
        // 01, 02, 03, 04

        case 'qq':
          return addLeadingZeros(quarter, 2);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return localize.ordinalNumber(quarter, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return localize.quarter(quarter, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return localize.quarter(quarter, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return localize.quarter(quarter, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // Month
    M: function (date, token, localize) {
      var month = date.getUTCMonth();

      switch (token) {
        case 'M':
        case 'MM':
          return formatters$1.M(date, token);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return localize.ordinalNumber(month + 1, {
            unit: 'month'
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return localize.month(month, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return localize.month(month, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return localize.month(month, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone month
    L: function (date, token, localize) {
      var month = date.getUTCMonth();

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return String(month + 1);
        // 01, 02, ..., 12

        case 'LL':
          return addLeadingZeros(month + 1, 2);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return localize.ordinalNumber(month + 1, {
            unit: 'month'
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return localize.month(month, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return localize.month(month, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return localize.month(month, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // Local week of year
    w: function (date, token, localize, options) {
      var week = getUTCWeek(date, options);

      if (token === 'wo') {
        return localize.ordinalNumber(week, {
          unit: 'week'
        });
      }

      return addLeadingZeros(week, token.length);
    },
    // ISO week of year
    I: function (date, token, localize) {
      var isoWeek = getUTCISOWeek(date);

      if (token === 'Io') {
        return localize.ordinalNumber(isoWeek, {
          unit: 'week'
        });
      }

      return addLeadingZeros(isoWeek, token.length);
    },
    // Day of the month
    d: function (date, token, localize) {
      if (token === 'do') {
        return localize.ordinalNumber(date.getUTCDate(), {
          unit: 'date'
        });
      }

      return formatters$1.d(date, token);
    },
    // Day of year
    D: function (date, token, localize) {
      var dayOfYear = getUTCDayOfYear(date);

      if (token === 'Do') {
        return localize.ordinalNumber(dayOfYear, {
          unit: 'dayOfYear'
        });
      }

      return addLeadingZeros(dayOfYear, token.length);
    },
    // Day of week
    E: function (date, token, localize) {
      var dayOfWeek = date.getUTCDay();

      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Local day of week
    e: function (date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

      switch (token) {
        // Numerical value (Nth day of week with current locale or weekStartsOn)
        case 'e':
          return String(localDayOfWeek);
        // Padded numerical value

        case 'ee':
          return addLeadingZeros(localDayOfWeek, 2);
        // 1st, 2nd, ..., 7th

        case 'eo':
          return localize.ordinalNumber(localDayOfWeek, {
            unit: 'day'
          });

        case 'eee':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone local day of week
    c: function (date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

      switch (token) {
        // Numerical value (same as in `e`)
        case 'c':
          return String(localDayOfWeek);
        // Padded numerical value

        case 'cc':
          return addLeadingZeros(localDayOfWeek, token.length);
        // 1st, 2nd, ..., 7th

        case 'co':
          return localize.ordinalNumber(localDayOfWeek, {
            unit: 'day'
          });

        case 'ccc':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // ISO day of week
    i: function (date, token, localize) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

      switch (token) {
        // 2
        case 'i':
          return String(isoDayOfWeek);
        // 02

        case 'ii':
          return addLeadingZeros(isoDayOfWeek, token.length);
        // 2nd

        case 'io':
          return localize.ordinalNumber(isoDayOfWeek, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T

        case 'iiiii':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'iiiiii':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday

        case 'iiii':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // AM or PM
    a: function (date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

      switch (token) {
        case 'a':
        case 'aa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });

        case 'aaa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          }).toLowerCase();

        case 'aaaaa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // AM, PM, midnight, noon
    b: function (date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;

      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
      }

      switch (token) {
        case 'b':
        case 'bb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });

        case 'bbb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          }).toLowerCase();

        case 'bbbbb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function (date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;

      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum.night;
      }

      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });

        case 'BBBBB':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Hour [1-12]
    h: function (date, token, localize) {
      if (token === 'ho') {
        var hours = date.getUTCHours() % 12;
        if (hours === 0) hours = 12;
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }

      return formatters$1.h(date, token);
    },
    // Hour [0-23]
    H: function (date, token, localize) {
      if (token === 'Ho') {
        return localize.ordinalNumber(date.getUTCHours(), {
          unit: 'hour'
        });
      }

      return formatters$1.H(date, token);
    },
    // Hour [0-11]
    K: function (date, token, localize) {
      var hours = date.getUTCHours() % 12;

      if (token === 'Ko') {
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }

      return addLeadingZeros(hours, token.length);
    },
    // Hour [1-24]
    k: function (date, token, localize) {
      var hours = date.getUTCHours();
      if (hours === 0) hours = 24;

      if (token === 'ko') {
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }

      return addLeadingZeros(hours, token.length);
    },
    // Minute
    m: function (date, token, localize) {
      if (token === 'mo') {
        return localize.ordinalNumber(date.getUTCMinutes(), {
          unit: 'minute'
        });
      }

      return formatters$1.m(date, token);
    },
    // Second
    s: function (date, token, localize) {
      if (token === 'so') {
        return localize.ordinalNumber(date.getUTCSeconds(), {
          unit: 'second'
        });
      }

      return formatters$1.s(date, token);
    },
    // Fraction of second
    S: function (date, token) {
      return formatters$1.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      if (timezoneOffset === 0) {
        return 'Z';
      }

      switch (token) {
        // Hours and optional minutes
        case 'X':
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XX`

        case 'XXXX':
        case 'XX':
          // Hours and minutes without `:` delimiter
          return formatTimezone(timezoneOffset);
        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XXX`

        case 'XXXXX':
        case 'XXX': // Hours and minutes with `:` delimiter

        default:
          return formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      switch (token) {
        // Hours and optional minutes
        case 'x':
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xx`

        case 'xxxx':
        case 'xx':
          // Hours and minutes without `:` delimiter
          return formatTimezone(timezoneOffset);
        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xxx`

        case 'xxxxx':
        case 'xxx': // Hours and minutes with `:` delimiter

        default:
          return formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (GMT)
    O: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      switch (token) {
        // Short
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
        // Long

        case 'OOOO':
        default:
          return 'GMT' + formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (specific non-location)
    z: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      switch (token) {
        // Short
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
        // Long

        case 'zzzz':
        default:
          return 'GMT' + formatTimezone(timezoneOffset, ':');
      }
    },
    // Seconds timestamp
    t: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1000);
      return addLeadingZeros(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return addLeadingZeros(timestamp, token.length);
    }
  };

  function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;

    if (minutes === 0) {
      return sign + String(hours);
    }

    var delimiter = dirtyDelimiter || '';
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
  }

  function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? '-' : '+';
      return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }

    return formatTimezone(offset, dirtyDelimiter);
  }

  function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }

  function dateLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case 'P':
        return formatLong.date({
          width: 'short'
        });

      case 'PP':
        return formatLong.date({
          width: 'medium'
        });

      case 'PPP':
        return formatLong.date({
          width: 'long'
        });

      case 'PPPP':
      default:
        return formatLong.date({
          width: 'full'
        });
    }
  }

  function timeLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case 'p':
        return formatLong.time({
          width: 'short'
        });

      case 'pp':
        return formatLong.time({
          width: 'medium'
        });

      case 'ppp':
        return formatLong.time({
          width: 'long'
        });

      case 'pppp':
      default:
        return formatLong.time({
          width: 'full'
        });
    }
  }

  function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/);
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];

    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong);
    }

    var dateTimeFormat;

    switch (datePattern) {
      case 'P':
        dateTimeFormat = formatLong.dateTime({
          width: 'short'
        });
        break;

      case 'PP':
        dateTimeFormat = formatLong.dateTime({
          width: 'medium'
        });
        break;

      case 'PPP':
        dateTimeFormat = formatLong.dateTime({
          width: 'long'
        });
        break;

      case 'PPPP':
      default:
        dateTimeFormat = formatLong.dateTime({
          width: 'full'
        });
        break;
    }

    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
  }

  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };

  /**
   * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
   * They usually appear for dates that denote time before the timezones were introduced
   * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
   * and GMT+01:00:00 after that date)
   *
   * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
   * which would lead to incorrect calculations.
   *
   * This function returns the timezone offset in milliseconds that takes seconds in account.
   */
  function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }

  var protectedDayOfYearTokens = ['D', 'DD'];
  var protectedWeekYearTokens = ['YY', 'YYYY'];
  function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
  }
  function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
  }
  function throwProtectedError(token, format, input) {
    if (token === 'YYYY') {
      throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === 'YY') {
      throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === 'D') {
      throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === 'DD') {
      throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    }
  }

  // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
  //   (one of the certain letters followed by `o`)
  // - (\w)\1* matches any sequences of the same letter
  // - '' matches two quote characters in a row
  // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
  //   except a single quote symbol, which ends the sequence.
  //   Two quote characters do not end the sequence.
  //   If there is no matching single quote
  //   then the sequence will continue until the end of the string.
  // - . matches any single character unmatched by previous parts of the RegExps

  var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
  // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

  var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp = /^'([^]*?)'?$/;
  var doubleQuoteRegExp = /''/g;
  var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
  /**
   * @name format
   * @category Common Helpers
   * @summary Format the date.
   *
   * @description
   * Return the formatted date string in the given format. The result may vary by locale.
   *
   * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
   * > See: https://git.io/fxCyr
   *
   * The characters wrapped between two single quotes characters (') are escaped.
   * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
   * (see the last example)
   *
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * with a few additions (see note 7 below the table).
   *
   * Accepted patterns:
   * | Unit                            | Pattern | Result examples                   | Notes |
   * |---------------------------------|---------|-----------------------------------|-------|
   * | Era                             | G..GGG  | AD, BC                            |       |
   * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
   * |                                 | GGGGG   | A, B                              |       |
   * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
   * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
   * |                                 | yy      | 44, 01, 00, 17                    | 5     |
   * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
   * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
   * |                                 | yyyyy   | ...                               | 3,5   |
   * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
   * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
   * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
   * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
   * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
   * |                                 | YYYYY   | ...                               | 3,5   |
   * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
   * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
   * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
   * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
   * |                                 | RRRRR   | ...                               | 3,5,7 |
   * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
   * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
   * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
   * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
   * |                                 | uuuuu   | ...                               | 3,5   |
   * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
   * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
   * |                                 | QQ      | 01, 02, 03, 04                    |       |
   * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
   * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
   * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
   * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
   * |                                 | qq      | 01, 02, 03, 04                    |       |
   * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
   * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
   * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
   * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
   * |                                 | MM      | 01, 02, ..., 12                   |       |
   * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
   * |                                 | MMMM    | January, February, ..., December  | 2     |
   * |                                 | MMMMM   | J, F, ..., D                      |       |
   * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
   * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
   * |                                 | LL      | 01, 02, ..., 12                   |       |
   * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
   * |                                 | LLLL    | January, February, ..., December  | 2     |
   * |                                 | LLLLL   | J, F, ..., D                      |       |
   * | Local week of year              | w       | 1, 2, ..., 53                     |       |
   * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
   * |                                 | ww      | 01, 02, ..., 53                   |       |
   * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
   * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
   * |                                 | II      | 01, 02, ..., 53                   | 7     |
   * | Day of month                    | d       | 1, 2, ..., 31                     |       |
   * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
   * |                                 | dd      | 01, 02, ..., 31                   |       |
   * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
   * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
   * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
   * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
   * |                                 | DDDD    | ...                               | 3     |
   * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
   * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
   * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
   * |                                 | ii      | 01, 02, ..., 07                   | 7     |
   * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
   * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
   * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
   * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
   * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
   * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
   * |                                 | ee      | 02, 03, ..., 01                   |       |
   * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
   * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
   * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
   * |                                 | cc      | 02, 03, ..., 01                   |       |
   * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
   * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | AM, PM                          | a..aa   | AM, PM                            |       |
   * |                                 | aaa     | am, pm                            |       |
   * |                                 | aaaa    | a.m., p.m.                        | 2     |
   * |                                 | aaaaa   | a, p                              |       |
   * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
   * |                                 | bbb     | am, pm, noon, midnight            |       |
   * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
   * |                                 | bbbbb   | a, p, n, mi                       |       |
   * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
   * |                                 | BBBB    | at night, in the morning, ...     | 2     |
   * |                                 | BBBBB   | at night, in the morning, ...     |       |
   * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
   * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
   * |                                 | hh      | 01, 02, ..., 11, 12               |       |
   * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
   * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
   * |                                 | HH      | 00, 01, 02, ..., 23               |       |
   * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
   * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
   * |                                 | KK      | 01, 02, ..., 11, 00               |       |
   * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
   * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
   * |                                 | kk      | 24, 01, 02, ..., 23               |       |
   * | Minute                          | m       | 0, 1, ..., 59                     |       |
   * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
   * |                                 | mm      | 00, 01, ..., 59                   |       |
   * | Second                          | s       | 0, 1, ..., 59                     |       |
   * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
   * |                                 | ss      | 00, 01, ..., 59                   |       |
   * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
   * |                                 | SS      | 00, 01, ..., 99                   |       |
   * |                                 | SSS     | 000, 001, ..., 999                |       |
   * |                                 | SSSS    | ...                               | 3     |
   * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
   * |                                 | XX      | -0800, +0530, Z                   |       |
   * |                                 | XXX     | -08:00, +05:30, Z                 |       |
   * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
   * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
   * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
   * |                                 | xx      | -0800, +0530, +0000               |       |
   * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
   * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
   * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
   * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
   * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
   * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
   * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
   * | Seconds timestamp               | t       | 512969520                         | 7     |
   * |                                 | tt      | ...                               | 3,7   |
   * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
   * |                                 | TT      | ...                               | 3,7   |
   * | Long localized date             | P       | 04/29/1453                        | 7     |
   * |                                 | PP      | Apr 29, 1453                      | 7     |
   * |                                 | PPP     | April 29th, 1453                  | 7     |
   * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
   * | Long localized time             | p       | 12:00 AM                          | 7     |
   * |                                 | pp      | 12:00:00 AM                       | 7     |
   * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
   * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
   * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
   * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
   * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
   * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
   * Notes:
   * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
   *    are the same as "stand-alone" units, but are different in some languages.
   *    "Formatting" units are declined according to the rules of the language
   *    in the context of a date. "Stand-alone" units are always nominative singular:
   *
   *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
   *
   *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
   *
   * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
   *    the single quote characters (see below).
   *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
   *    the output will be the same as default pattern for this unit, usually
   *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
   *    are marked with "2" in the last column of the table.
   *
   *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
   *
   * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
   *    The output will be padded with zeros to match the length of the pattern.
   *
   *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
   *
   * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
   *    These tokens represent the shortest form of the quarter.
   *
   * 5. The main difference between `y` and `u` patterns are B.C. years:
   *
   *    | Year | `y` | `u` |
   *    |------|-----|-----|
   *    | AC 1 |   1 |   1 |
   *    | BC 1 |   1 |   0 |
   *    | BC 2 |   2 |  -1 |
   *
   *    Also `yy` always returns the last two digits of a year,
   *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
   *
   *    | Year | `yy` | `uu` |
   *    |------|------|------|
   *    | 1    |   01 |   01 |
   *    | 14   |   14 |   14 |
   *    | 376  |   76 |  376 |
   *    | 1453 |   53 | 1453 |
   *
   *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
   *    except local week-numbering years are dependent on `options.weekStartsOn`
   *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
   *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
   *
   * 6. Specific non-location timezones are currently unavailable in `date-fns`,
   *    so right now these tokens fall back to GMT timezones.
   *
   * 7. These patterns are not in the Unicode Technical Standard #35:
   *    - `i`: ISO day of week
   *    - `I`: ISO week of year
   *    - `R`: ISO week-numbering year
   *    - `t`: seconds timestamp
   *    - `T`: milliseconds timestamp
   *    - `o`: ordinal number modifier
   *    - `P`: long localized date
   *    - `p`: long localized time
   *
   * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
   *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
   *
   * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
   *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * - The second argument is now required for the sake of explicitness.
   *
   *   ```javascript
   *   // Before v2.0.0
   *   format(new Date(2016, 0, 1))
   *
   *   // v2.0.0 onward
   *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
   *   ```
   *
   * - New format string API for `format` function
   *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
   *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
   *
   * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
   *
   * @param {Date|Number} date - the original date
   * @param {String} format - the string of tokens
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
   * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
   *   see: https://git.io/fxCyr
   * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
   *   see: https://git.io/fxCyr
   * @returns {String} the formatted date string
   * @throws {TypeError} 2 arguments required
   * @throws {RangeError} `date` must not be Invalid Date
   * @throws {RangeError} `options.locale` must contain `localize` property
   * @throws {RangeError} `options.locale` must contain `formatLong` property
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} format string contains an unescaped latin alphabet character
   *
   * @example
   * // Represent 11 February 2014 in middle-endian format:
   * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
   * //=> '02/11/2014'
   *
   * @example
   * // Represent 2 July 2014 in Esperanto:
   * import { eoLocale } from 'date-fns/locale/eo'
   * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
   *   locale: eoLocale
   * })
   * //=> '2-a de julio 2014'
   *
   * @example
   * // Escape string by single quote characters:
   * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
   * //=> "3 o'clock"
   */

  function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    requiredArgs(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale$1 = options.locale || locale;
    var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    if (!locale$1.localize) {
      throw new RangeError('locale must contain localize property');
    }

    if (!locale$1.formatLong) {
      throw new RangeError('locale must contain formatLong property');
    }

    var originalDate = toDate(dirtyDate);

    if (!isValid(originalDate)) {
      throw new RangeError('Invalid time value');
    } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate: firstWeekContainsDate,
      weekStartsOn: weekStartsOn,
      locale: locale$1,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
      var firstCharacter = substring[0];

      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale$1.formatLong, formatterOptions);
      }

      return substring;
    }).join('').match(formattingTokensRegExp).map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'";
      }

      var firstCharacter = substring[0];

      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }

      var formatter = formatters[firstCharacter];

      if (formatter) {
        if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }

        if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }

        return formatter(utcDate, substring, locale$1.localize, formatterOptions);
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      }

      return substring;
    }).join('');
    return result;
  }

  function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
  }

  /*
    ImageRenderer displays image with url or source
    it checks if the source exist with img tag first
    if it exists onLoad is called, if not onError is called
    and those properties switch img tag to real purposing element
  */

  function ImageRenderer(_ref) {
    var className = _ref.className,
        url = _ref.url,
        alt = _ref.alt,
        width = _ref.width,
        height = _ref.height,
        defaultComponent = _ref.defaultComponent,
        circle = _ref.circle,
        placeHolder = _ref.placeHolder;

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showDefaultComponent = _useState2[0],
        setShowDefaultComponent = _useState2[1];

    var _useState3 = React__default.useState(true),
        _useState4 = _slicedToArray(_useState3, 2),
        showPlaceHolder = _useState4[0],
        setShowPlaceHolder = _useState4[1];

    var DefaultComponent = React__default.useMemo(function () {
      if (typeof defaultComponent === 'function') {
        return defaultComponent();
      }

      return defaultComponent;
    }, [defaultComponent]);
    var PlaceHolder = React__default.useMemo(function () {
      if (placeHolder && typeof placeHolder === 'function') {
        return placeHolder({
          style: {
            width: width,
            height: height,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        });
      }

      return null;
    }, [placeHolder]);
    var HiddenImageLoader = React__default.useMemo(function () {
      setShowDefaultComponent(false); // reset the state when url is changed

      return /*#__PURE__*/React__default__default.createElement("img", {
        className: "sendbird-image-renderer__hidden-image-loader",
        src: url,
        alt: alt,
        onLoad: function onLoad() {
          return setShowPlaceHolder(false);
        },
        onError: function onError() {
          return setShowDefaultComponent(true);
        }
      });
    }, [url]);
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-image-renderer']).join(' '),
      style: {
        width: width,
        height: height
      }
    }, showPlaceHolder && PlaceHolder, showDefaultComponent ? DefaultComponent : /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-image-renderer__image",
      style: {
        width: width,
        height: height,
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: "url(".concat(url, ")"),
        borderRadius: circle ? '50%' : null
      }
    }), HiddenImageLoader);
  }
  ImageRenderer.propTypes = {
    className: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    placeHolder: PropTypes.func,
    circle: PropTypes.bool
  };
  ImageRenderer.defaultProps = {
    className: '',
    defaultComponent: null,
    placeHolder: null,
    alt: '',
    width: null,
    height: null,
    circle: false
  };

  var Type = {
    ADD: 'ADD',
    ARROW_LEFT: 'ARROW_LEFT',
    ATTACH: 'ATTACH',
    BAN: 'BAN',
    BROADCAST: 'BROADCAST',
    CAMERA: 'CAMERA',
    CHANNELS: 'CHANNELS',
    CHAT: 'CHAT',
    CHAT_FILLED: 'CHAT_FILLED',
    CHEVRON_DOWN: 'CHEVRON_DOWN',
    CHEVRON_RIGHT: 'CHEVRON_RIGHT',
    CLOSE: 'CLOSE',
    COLLAPSE: 'COLLAPSE',
    COPY: 'COPY',
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    DISCONNECTED: 'DISCONNECTED',
    DOCUMENT: 'DOCUMENT',
    DONE: 'DONE',
    DONE_ALL: 'DONE_ALL',
    DOWNLOAD: 'DOWNLOAD',
    EDIT: 'EDIT',
    EMOJI_MORE: 'EMOJI_MORE',
    ERROR: 'ERROR',
    EXPAND: 'EXPAND',
    FILE_AUDIO: 'FILE_AUDIO',
    FILE_DOCUMENT: 'FILE_DOCUMENT',
    FREEZE: 'FREEZE',
    GIF: 'GIF',
    INFO: 'INFO',
    LEAVE: 'LEAVE',
    MEMBERS: 'MEMBERS',
    MESSAGE: 'MESSAGE',
    MODERATIONS: 'MODERATIONS',
    MORE: 'MORE',
    MUTE: 'MUTE',
    NOTIFICATIONS: 'NOTIFICATIONS',
    NOTIFICATIONS_OFF_FILLED: 'NOTIFICATIONS_OFF_FILLED',
    OPERATOR: 'OPERATOR',
    PHOTO: 'PHOTO',
    PLAY: 'PLAY',
    PLUS: 'PLUS',
    QUESTION: 'QUESTION',
    REFRESH: 'REFRESH',
    REMOVE: 'REMOVE',
    SEARCH: 'SEARCH',
    SEND: 'SEND',
    SETTINGS_FILLED: 'SETTINGS_FILLED',
    SPINNER: 'SPINNER',
    SUPERGROUP: 'SUPERGROUP',
    THUMBNAIL_NONE: 'THUMBNAIL_NONE',
    TOGGLE_OFF: 'TOGGLE_OFF',
    TOGGLE_ON: 'TOGGLE_ON',
    USER: 'USER'
  };

  var _path$P;

  function _extends$R() { _extends$R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$R.apply(this, arguments); }

  function SvgIconAdd(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$R({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$P || (_path$P = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-add_svg__fill",
      d: "M50.667 5.333a8 8 0 018 8v37.334a8 8 0 01-8 8H13.333a8 8 0 01-8-8V13.333a8 8 0 018-8zm0 5.334H13.333a2.667 2.667 0 00-2.666 2.666v37.334a2.667 2.667 0 002.666 2.666h37.334a2.667 2.667 0 002.666-2.666V13.333a2.667 2.667 0 00-2.666-2.666zm-18.667 8a2.667 2.667 0 012.649 2.355l.018.311v8h8a2.667 2.667 0 01.311 5.316l-.311.018h-8v8a2.667 2.667 0 01-5.316.311l-.018-.311v-8h-8a2.667 2.667 0 01-.311-5.316l.311-.018h8v-8A2.667 2.667 0 0132 18.667z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$O;

  function _extends$Q() { _extends$Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Q.apply(this, arguments); }

  function SvgIconArrowLeft(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$Q({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$O || (_path$O = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-arrow-left_svg__fill",
      d: "M33.886 8.781a2.668 2.668 0 01.221 3.52l-.221.251-16.78 16.781H56a2.667 2.667 0 01.311 5.316l-.311.018-38.895-.001 16.78 16.782a2.666 2.666 0 01.222 3.52l-.221.251a2.668 2.668 0 01-3.52.222l-.252-.222L8.781 33.886a2.668 2.668 0 01-.222-3.52l.222-.252L30.114 8.781a2.668 2.668 0 013.772 0z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$N;

  function _extends$P() { _extends$P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$P.apply(this, arguments); }

  function SvgIconAttach(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$P({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$N || (_path$N = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-attach_svg__fill",
      d: "M55.334 28.926l-24.506 23.34c-5.222 4.973-13.74 4.973-18.962 0-5.149-4.903-5.149-12.797 0-17.7l24.506-23.34c3.138-2.988 8.278-2.988 11.416 0 3.064 2.919 3.064 7.594 0 10.513L23.255 45.077c-1.055 1.005-2.815 1.005-3.87.001-.98-.933-.98-2.39 0-3.325l22.64-21.535a2.667 2.667 0 00-3.676-3.864L15.709 37.89a7.578 7.578 0 00-.001 11.05c3.113 2.966 8.11 2.966 11.224 0l24.533-23.338c5.272-5.021 5.272-13.217 0-18.238-5.197-4.95-13.573-4.95-18.77 0L8.187 30.704c-7.356 7.005-7.356 18.419 0 25.424 7.281 6.935 19.036 6.935 26.318 0l24.506-23.34a2.666 2.666 0 10-3.678-3.862z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$M;

  function _extends$O() { _extends$O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$O.apply(this, arguments); }

  function SvgIconBan(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$O({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$M || (_path$M = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-ban_svg__fill",
      d: "M32 2.667C48.2 2.667 61.333 15.8 61.333 32S48.2 61.333 32 61.333 2.667 48.2 2.667 32 15.8 2.667 32 2.667zM32 8C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zm12.333 21.333a1 1 0 011 1v3.334a1 1 0 01-1 1H19.667a1 1 0 01-1-1v-3.334a1 1 0 011-1h24.666z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$L;

  function _extends$N() { _extends$N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$N.apply(this, arguments); }

  function SvgIconBroadcast(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$N({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$L || (_path$L = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-broadcast_svg__fill",
      d: "M58.545 5.498c.08.258.122.526.122.796v46.079a2.666 2.666 0 01-3.462 2.546l-17.951-5.61c-.645 5.273-5.14 9.358-10.587 9.358C20.776 58.667 16 53.89 16 48v-5.334h-5.333a8 8 0 01-7.997-7.75l-.003-.25V24a8 8 0 018-8H16L55.205 3.749a2.665 2.665 0 013.34 1.75zM21.333 44.587V48a5.333 5.333 0 0010.652.398L32 47.92l-10.667-3.333zm32-34.667l-32 9.997v18.83l32 9.997V9.92zM16 21.333h-5.333a2.67 2.67 0 00-2.65 2.356L8 24v10.667a2.667 2.667 0 002.667 2.666H16v-16z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$K;

  function _extends$M() { _extends$M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$M.apply(this, arguments); }

  function SvgIconCamera(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$M({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$K || (_path$K = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-camera_svg__fill",
      d: "M40 5.333c.892 0 1.724.446 2.219 1.188l4.541 6.812H56a8 8 0 017.986 7.53l.014.47v29.334a8 8 0 01-8 8H8a8 8 0 01-8-8V21.333a8 8 0 018-8h9.237l4.544-6.812a2.665 2.665 0 011.888-1.167l.331-.02zm-1.43 5.334H25.428l-4.542 6.812a2.66 2.66 0 01-1.887 1.167l-.331.02H8a2.668 2.668 0 00-2.667 2.667v29.334A2.667 2.667 0 008 53.333h48a2.667 2.667 0 002.667-2.666V21.333A2.667 2.667 0 0056 18.667H45.333a2.665 2.665 0 01-2.218-1.188l-4.544-6.812zM32 21.333c7.364 0 13.333 5.97 13.333 13.334C45.333 42.03 39.363 48 32 48c-7.364 0-13.333-5.97-13.333-13.333 0-7.364 5.97-13.334 13.333-13.334zm0 5.334a8 8 0 100 16 8 8 0 000-16z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$J;

  function _extends$L() { _extends$L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$L.apply(this, arguments); }

  function SvgIconChannels(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$L({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$J || (_path$J = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-channels_svg__fill",
      d: "M42.65 5.333l.311.017a2.666 2.666 0 012.373 2.633l-.017.311-1.45 13.04h9.466a2.667 2.667 0 01.311 5.315l-.31.018H43.271l-1.184 10.666h11.245a2.667 2.667 0 01.312 5.316l-.31.018H41.495l-1.512 13.627a2.667 2.667 0 01-5.318-.277l.017-.311 1.448-13.04H25.496l-1.512 13.628a2.667 2.667 0 01-5.318-.277l.017-.311 1.448-13.04h-9.464a2.667 2.667 0 01-.311-5.315l.31-.018h10.057l1.186-10.667H10.667a2.667 2.667 0 01-.311-5.315l.31-.018h11.835l1.515-13.627a2.668 2.668 0 012.634-2.373l.311.017a2.666 2.666 0 012.373 2.633l-.017.311-1.45 13.04H38.5l1.515-13.628a2.668 2.668 0 012.634-2.373zm-5.927 32l1.186-10.667H27.272l-1.184 10.667h10.635z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$I;

  function _extends$K() { _extends$K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$K.apply(this, arguments); }

  function SvgIconChat(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$K({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$I || (_path$I = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-chat_svg__fill",
      d: "M32 2.667C48.2 2.667 61.333 15.8 61.333 32S48.2 61.333 32 61.333c-4.455 0-8.679-.993-12.461-2.77l-1.753.58c-5.965 1.912-10.133 2.572-12.504 1.981-2.799-.698-3.351-1.919-1.657-3.663 1.171-1.396 2.147-3.14 2.928-5.234.622-1.668.377-4.001-.737-7A29.15 29.15 0 012.666 32C2.667 15.8 15.8 2.667 32 2.667zM32 8C18.745 8 8 18.745 8 32c0 3.5.747 6.88 2.168 9.978l.405.837.137.271.106.285c1.517 4.085 1.89 7.622.734 10.72l-.382.972-.192.433.235-.05a62.067 62.067 0 004.886-1.363l1.721-.568 2.04-.696 1.95.917A23.882 23.882 0 0032 56c13.255 0 24-10.745 24-24S45.255 8 32 8z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$H;

  function _extends$J() { _extends$J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$J.apply(this, arguments); }

  function SvgIconChatFilled(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$J({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$H || (_path$H = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-chat-filled_svg__fill",
      d: "M32 2.667C48.2 2.667 61.333 15.8 61.333 32S48.2 61.333 32 61.333c-4.455 0-8.679-.993-12.461-2.77l-1.753.58c-5.965 1.912-10.133 2.572-12.504 1.981-2.799-.698-3.351-1.919-1.657-3.663 1.171-1.396 2.147-3.14 2.928-5.234.622-1.668.377-4.001-.737-7A29.15 29.15 0 012.666 32C2.667 15.8 15.8 2.667 32 2.667z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$G;

  function _extends$I() { _extends$I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$I.apply(this, arguments); }

  function SvgIconChevronDown(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$I({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$G || (_path$G = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-chevron-down_svg__fill",
      d: "M16.121 21.879a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18 18a2.998 2.998 0 004.242 0l18-18a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L32 37.757 16.121 21.88z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$F;

  function _extends$H() { _extends$H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$H.apply(this, arguments); }

  function SvgIconChevronRight(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$H({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$F || (_path$F = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-chevron-right_svg__fill",
      d: "M22.114 46.114a2.668 2.668 0 003.772 3.772l16-16a2.668 2.668 0 000-3.772l-16-16a2.668 2.668 0 00-3.772 3.772L36.23 32 22.114 46.114z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$E;

  function _extends$G() { _extends$G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$G.apply(this, arguments); }

  function SvgIconClose(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$G({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$E || (_path$E = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-close_svg__fill",
      d: "M52.552 11.448a2.666 2.666 0 01.222 3.52l-.222.251-16.781 16.78 16.781 16.782a2.665 2.665 0 010 3.771 2.666 2.666 0 01-3.52.222l-.251-.222L32 35.771 15.219 52.552a2.665 2.665 0 01-3.771 0 2.666 2.666 0 01-.222-3.52l.222-.251L28.228 32l-16.78-16.781a2.665 2.665 0 010-3.771 2.666 2.666 0 013.52-.222l.251.222 16.78 16.78 16.782-16.78a2.665 2.665 0 013.771 0z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$D;

  function _extends$F() { _extends$F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$F.apply(this, arguments); }

  function SvgIconCollapse(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$F({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$D || (_path$D = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-collapse_svg__fill",
      d: "M16 8a2.667 2.667 0 00-2.649 2.356l-.018.31v42.667a2.667 2.667 0 005.316.311l.018-.31V34.666h25.56l-6.113 6.114a2.668 2.668 0 00-.221 3.52l.221.251a2.666 2.666 0 003.52.222l.252-.222 10.666-10.666a2.666 2.666 0 00.222-3.52l-.222-.252-10.666-10.666a2.666 2.666 0 00-3.993 3.52l.221.251 6.113 6.114h-25.56V10.667A2.667 2.667 0 0016 8z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$C;

  function _extends$E() { _extends$E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$E.apply(this, arguments); }

  function SvgIconCopy(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$E({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$C || (_path$C = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-copy_svg__fill",
      d: "M53.333 21.333a8 8 0 018 8v24a8 8 0 01-8 8h-24a8 8 0 01-8-8v-24a8 8 0 018-8zm0 5.334h-24a2.667 2.667 0 00-2.666 2.666v24A2.667 2.667 0 0029.333 56h24A2.667 2.667 0 0056 53.333v-24a2.667 2.667 0 00-2.667-2.666zm-18.666-24a8 8 0 017.986 7.53l.014.47v2.666a2.667 2.667 0 01-5.316.311l-.018-.31v-2.667a2.67 2.67 0 00-2.355-2.65L34.667 8h-24a2.67 2.67 0 00-2.65 2.356l-.017.31v24a2.67 2.67 0 002.356 2.65l.31.017h2.667a2.667 2.667 0 01.311 5.316l-.31.018h-2.667a8.001 8.001 0 01-7.987-7.53l-.013-.47v-24c0-4.26 3.33-7.743 7.53-7.987l.47-.013h24z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$B;

  function _extends$D() { _extends$D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$D.apply(this, arguments); }

  function SvgIconCreate(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$D({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$B || (_path$B = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-create_svg__fill",
      d: "M32 2.667C48.2 2.667 61.333 15.8 61.333 32S48.2 61.333 32 61.333c-4.455 0-8.679-.993-12.461-2.77l-1.753.58c-5.965 1.912-10.133 2.572-12.504 1.981-2.799-.698-3.351-1.919-1.657-3.663 1.171-1.396 2.147-3.14 2.928-5.234.622-1.668.377-4.001-.737-7A29.15 29.15 0 012.666 32C2.667 15.8 15.8 2.667 32 2.667zM32 8C18.745 8 8 18.745 8 32c0 3.5.747 6.88 2.168 9.978l.405.837.137.271.106.285c1.517 4.085 1.89 7.622.734 10.72l-.382.972-.192.433.235-.05a62.067 62.067 0 004.886-1.363l1.721-.568 2.04-.696 1.95.917A23.882 23.882 0 0032 56c13.255 0 24-10.745 24-24S45.255 8 32 8zm2.667 16v5.333H40c3.556 0 3.556 5.334 0 5.334h-5.333V40c0 3.556-5.334 3.556-5.334 0v-5.333H24c-3.556 0-3.556-5.334 0-5.334h5.333V24c0-3.556 5.334-3.556 5.334 0z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$A;

  function _extends$C() { _extends$C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$C.apply(this, arguments); }

  function SvgIconDelete(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$C({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$A || (_path$A = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-delete_svg__fill",
      d: "M37.333 2.667c4.26 0 7.743 3.33 7.987 7.53l.013.47v2.666H56a2.667 2.667 0 01.311 5.316l-.311.018h-2.668l.001 34.666c0 4.26-3.33 7.743-7.53 7.987l-.47.013H18.667a8.001 8.001 0 01-7.987-7.53l-.013-.47V18.667H8a2.667 2.667 0 01-.311-5.316L8 13.333h10.666v-2.666a8.002 8.002 0 017.53-7.987l.47-.013h10.667zm10.666 16H16v34.666a2.67 2.67 0 002.356 2.65l.31.017h26.667a2.67 2.67 0 002.65-2.356l.017-.31V18.666zm-21.332 8a2.667 2.667 0 012.648 2.355l.018.311v16a2.667 2.667 0 01-5.316.311l-.017-.31v-16a2.667 2.667 0 012.667-2.667zm10.666 0a2.67 2.67 0 012.65 2.355l.017.311v16a2.667 2.667 0 01-5.315.311l-.018-.31v-16a2.667 2.667 0 012.666-2.667zm0-18.667H26.667a2.67 2.67 0 00-2.65 2.356l-.017.31v2.667h16v-2.666a2.67 2.67 0 00-2.356-2.65L37.334 8z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$z;

  function _extends$B() { _extends$B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$B.apply(this, arguments); }

  function SvgIconDisconnected(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$B({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$z || (_path$z = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-disconnected_svg__fill",
      d: "M54.534 6.069l-.248.217-9.736 9.735-.04.04-9.573 9.573c-.15.118-.286.254-.405.404L6.286 54.286a2.423 2.423 0 003.18 3.645l.248-.217 13.374-13.373a2.419 2.419 0 001.88-.401 12.119 12.119 0 0114.04 0 2.424 2.424 0 102.808-3.952 16.951 16.951 0 00-11.303-3.072l6.743-6.744a24.105 24.105 0 0110.159 5.021 2.424 2.424 0 003.11-3.719 28.945 28.945 0 00-9.34-5.23l5.633-5.634a36.153 36.153 0 019.225 5.934 2.425 2.425 0 003.211-3.633 40.972 40.972 0 00-8.796-5.941l7.256-7.256a2.423 2.423 0 00-3.18-3.645zm-35.04 21.474a28.936 28.936 0 00-6.032 3.942 2.424 2.424 0 003.137 3.697 24.018 24.018 0 015.022-3.282 2.425 2.425 0 00-2.127-4.357zM4.748 22.909a2.424 2.424 0 003.207 3.636 36.363 36.363 0 0126.978-8.977 2.424 2.424 0 00.389-4.832A41.204 41.204 0 004.748 22.909z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$y;

  function _extends$A() { _extends$A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$A.apply(this, arguments); }

  function SvgIconDocument(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$A({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$y || (_path$y = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-document_svg__fill",
      d: "M37.333 2.667a3.305 3.305 0 01.274.014l.085.01.058.008c.047.007.094.016.141.026l.029.007c.05.01.098.023.146.037l.034.01c.237.07.46.173.663.303l.034.022c.036.023.07.047.104.072l.057.043a2.646 2.646 0 01.261.228l-.126-.117c.05.043.097.088.143.135L55.21 19.438c.047.046.091.094.134.143l.035.04c.026.032.052.063.076.096l.04.054.07.1.024.038c.16.253.279.535.347.836l.01.048c.009.043.017.086.024.13l.006.048.007.051.004.041c.01.09.014.18.014.27v32a8 8 0 01-8 8H16a8 8 0 01-8-8V10.667a8 8 0 018-8h21.333zM34.666 8H16a2.667 2.667 0 00-2.667 2.667v42.666A2.667 2.667 0 0016 56h32a2.667 2.667 0 002.667-2.667L50.666 24H37.333a2.667 2.667 0 01-2.648-2.356l-.018-.31L34.666 8zm12.227 10.667l-6.894-6.894.001 6.894h6.893z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$x;

  function _extends$z() { _extends$z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$z.apply(this, arguments); }

  function SvgIconDone(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$z({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$x || (_path$x = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-done_svg__fill",
      d: "M12.552 31.448a2.665 2.665 0 10-3.771 3.771l13.333 13.333a2.666 2.666 0 003.772 0L55.219 19.22a2.667 2.667 0 00-3.771-3.771L24 42.895 12.552 31.448z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$w;

  function _extends$y() { _extends$y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$y.apply(this, arguments); }

  function SvgIconDoneAll(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$y({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$w || (_path$w = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-done-all_svg__fill",
      d: "M5.886 31.448L19.219 44.78a2.667 2.667 0 01-3.771 3.771L2.114 35.22a2.667 2.667 0 013.772-3.771zm52.228-16a2.666 2.666 0 113.772 3.771L32.552 48.552a2.665 2.665 0 01-3.771 0L15.448 35.22a2.665 2.665 0 010-3.771 2.665 2.665 0 013.771 0l11.448 11.447zm-9.562 0a2.665 2.665 0 010 3.771L32.556 35.215a2.665 2.665 0 01-3.771 0 2.664 2.664 0 010-3.77L44.78 15.447a2.665 2.665 0 013.771 0z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$v;

  function _extends$x() { _extends$x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$x.apply(this, arguments); }

  function SvgIconDownload(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$x({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$v || (_path$v = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-download_svg__fill",
      d: "M56 42.667a2.667 2.667 0 012.649 2.355l.018.311v8c0 4.26-3.33 7.743-7.53 7.987l-.47.013H13.333a8 8 0 01-7.986-7.53l-.014-.47v-8a2.667 2.667 0 015.316-.311l.018.311v8a2.67 2.67 0 002.355 2.65l.311.017h37.334a2.667 2.667 0 002.648-2.356l.018-.31v-8A2.667 2.667 0 0156 42.667zm-36.552-8.781a2.666 2.666 0 013.52-3.993l.251.221 6.114 6.114V5.333a2.667 2.667 0 015.316-.311l.018.311v30.894l6.114-6.113a2.668 2.668 0 013.52-.221l.251.221a2.666 2.666 0 01.222 3.52l-.222.252-10.658 10.657a2.341 2.341 0 01-.135.128l.127-.119a2.67 2.67 0 01-.195.176l-.056.045a1.74 1.74 0 01-.086.064l-.056.04-.086.056-.06.036-.081.046-.079.04a2.528 2.528 0 01-.14.065l-.09.036c-.023.01-.045.017-.067.025l-.09.03-.063.019c-.043.012-.086.024-.13.034l-.013.003a3.06 3.06 0 01-.144.028l-.064.01c-.03.005-.061.009-.092.012l-.084.008a1.727 1.727 0 01-.103.006l-.069.002h-.095c-.028 0-.055-.002-.082-.003l.139.003c-.084 0-.167-.004-.249-.011l-.061-.007a1.359 1.359 0 01-.092-.012l-.09-.015a2.242 2.242 0 01-.118-.025l-.04-.01a2.644 2.644 0 01-.34-.11l-.015-.006c-.05-.02-.097-.04-.145-.063l-.042-.02L30.71 45a1.16 1.16 0 01-.067-.039c-.03-.018-.059-.035-.087-.054l-.062-.041c-.03-.02-.06-.042-.088-.063l-.04-.03-.008-.007a2.796 2.796 0 01-.251-.223L19.448 33.886z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$u;

  function _extends$w() { _extends$w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }

  function SvgIconEdit(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$w({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 65 65"
    }, props), _path$u || (_path$u = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-edit_svg__fill",
      d: "M56 56a2.667 2.667 0 01.311 5.315l-.311.018H8a2.667 2.667 0 01-.311-5.316L8 56h48zM35.448 3.448a2.665 2.665 0 013.771 0l10.667 10.666a2.668 2.668 0 010 3.772L20.552 47.219c-.5.5-1.178.781-1.885.781H8a2.667 2.667 0 01-2.667-2.667V34.667c0-.708.281-1.386.781-1.886zm1.885 5.659L10.667 35.77v6.896h6.89L44.227 16l-6.894-6.893z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$t;

  function _extends$v() { _extends$v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }

  function SvgIconEmojiMore(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$v({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$t || (_path$t = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-emoji-more_svg__fill",
      d: "M32.097 3.22c2.65 0 5.255.357 7.763 1.054a2.134 2.134 0 01-1.144 4.111 24.669 24.669 0 00-6.619-.899c-13.603 0-24.63 11.027-24.63 24.63s11.027 24.63 24.63 24.63 24.63-11.027 24.63-24.63c0-2.227-.295-4.413-.87-6.518a2.13 2.13 0 011.494-2.62 2.13 2.13 0 012.62 1.494 28.895 28.895 0 011.023 7.644c0 15.96-12.938 28.897-28.897 28.897-15.96 0-28.897-12.937-28.897-28.897C3.2 16.157 16.138 3.22 32.097 3.22zm10.705 34.792a2.133 2.133 0 012.024 2.808c-1.873 5.623-6.937 9.488-12.729 9.488-5.792 0-10.856-3.865-12.73-9.488a2.134 2.134 0 011.875-2.803l.15-.005h21.41zm-3.477 4.266H24.867l.294.382c1.539 1.887 3.718 3.113 6.115 3.342l.314.024.507.015c2.617 0 5.037-1.188 6.743-3.151l.193-.23.292-.382zM21.392 21.954c1.087 0 1.985.814 2.116 1.866l.017.267v5.353a2.133 2.133 0 01-4.25.268l-.017-.268v-5.353c0-1.178.955-2.133 2.134-2.133zm21.41 0c1.088 0 1.985.814 2.117 1.866l.017.267v5.353a2.133 2.133 0 01-4.25.268l-.017-.268v-5.353c0-1.178.955-2.133 2.133-2.133zM54.853 0a.8.8 0 01.8.8v7.786h7.76a.8.8 0 01.8.8v2.667a.8.8 0 01-.8.8h-7.76v7.758a.8.8 0 01-.8.8h-2.666a.8.8 0 01-.8-.8v-7.758h-7.785a.8.8 0 01-.8-.8V9.387a.8.8 0 01.8-.8l7.784-.001V.8a.8.8 0 01.8-.8h2.667z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$s;

  function _extends$u() { _extends$u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }

  function SvgIconError(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$u({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$s || (_path$s = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-error_svg__fill",
      d: "M32 5.06a8 8 0 016.561 3.424l.287.439 22.608 37.744a8 8 0 01.022 7.962 8.005 8.005 0 01-6.356 4.014l-.535.024H9.384a8.002 8.002 0 01-6.862-4.038 8.008 8.008 0 01-.226-7.493l.27-.506L25.16 8.91A8.001 8.001 0 0132 5.06zm0 5.333c-.816 0-1.58.372-2.076.99l-.196.28-22.565 37.67a2.669 2.669 0 001.909 3.973l.341.027h45.144a2.67 2.67 0 002.45-3.659l-.148-.304L34.28 11.676A2.666 2.666 0 0032 10.393zm0 32.274A2.667 2.667 0 1132 48a2.667 2.667 0 010-5.333zm0-21.334a2.667 2.667 0 012.649 2.356l.018.311v10.667a2.667 2.667 0 01-5.316.311l-.018-.311V24A2.667 2.667 0 0132 21.333z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$r;

  function _extends$t() { _extends$t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }

  function SvgIconExpand(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$t({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$r || (_path$r = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-expand_svg__fill",
      d: "M48 8a2.667 2.667 0 012.649 2.356l.018.31V32l-.001.027v21.306a2.667 2.667 0 01-5.315.311l-.018-.31V34.665H19.772l6.114 6.115a2.668 2.668 0 01.221 3.52l-.221.251a2.666 2.666 0 01-3.52.222l-.252-.222-10.666-10.666a2.666 2.666 0 01-.222-3.52l.222-.252 10.666-10.666a2.666 2.666 0 013.993 3.52l-.221.251-6.113 6.114h25.56V10.667A2.667 2.667 0 0148 8z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$q;

  function _extends$s() { _extends$s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }

  function SvgIconFileAudio(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$s({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$q || (_path$q = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-file-audio_svg__fill",
      d: "M30.52 12.51c1.685-1.226 4.139-.103 4.139 1.893v35.194c0 1.996-2.454 3.119-4.138 1.893l-12.45-9.909H7.898c-1.416 0-2.564-1.074-2.564-2.399V24.818c0-1.325 1.148-2.4 2.564-2.4h10.175zm20.427.163c10.293 10.667 10.293 27.987 0 38.654a2.137 2.137 0 01-3.156-.047c-.86-.942-.84-2.448.044-3.364 8.49-8.799 8.49-23.033 0-31.832-.884-.916-.904-2.422-.044-3.364a2.137 2.137 0 013.156-.047zm-8.492 8.799c5.597 5.8 5.597 15.231 0 21.031a2.136 2.136 0 01-3.156-.046c-.86-.942-.84-2.448.044-3.364 3.794-3.932 3.794-10.279 0-14.211-.884-.916-.904-2.422-.044-3.363a2.136 2.136 0 013.156-.047z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$p;

  function _extends$r() { _extends$r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }

  function SvgIconFileDocument(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$r({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$p || (_path$p = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-file-document_svg__fill",
      d: "M39.414 6.4a2.41 2.41 0 011.71.701l12.642 12.75c.407.41.634.953.634 1.516v29.765c0 3.542-4.342 6.468-8 6.468H16.16c-3.658 0-6.4-2.926-6.4-6.468L9.6 12.868c0-3.542 2.902-6.468 6.56-6.468zm3.331 35.173l-21.49.027-.147.005c-1.066.08-1.908 1.014-1.908 2.155 0 1.193.92 2.16 2.055 2.16l21.49-.027.147-.005c1.066-.08 1.908-1.014 1.908-2.155 0-1.193-.92-2.16-2.055-2.16zm0-8.533l-21.49.027-.147.005c-1.066.08-1.908 1.014-1.908 2.155 0 1.193.92 2.16 2.055 2.16l21.49-.027.147-.005c1.066-.08 1.908-1.014 1.908-2.155 0-1.193-.92-2.16-2.055-2.16zm-11.807-8.507h-9.6l-.153.006a2.15 2.15 0 00-1.985 2.154c0 1.193.957 2.16 2.138 2.16h9.6l.152-.005a2.152 2.152 0 001.985-2.155c0-1.193-.957-2.16-2.137-2.16z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$o;

  function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

  function SvgIconFreeze(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$q({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$o || (_path$o = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-freeze_svg__fill",
      d: "M41.636 3.226l.251.222a2.668 2.668 0 01.222 3.52l-.222.251-7.219 7.218V27.38l11.209-6.472 2.643-9.86a2.667 2.667 0 015.218 1.051l-.067.329-2.237 8.35 8.352 2.24a2.668 2.668 0 011.952 2.938l-.067.328a2.667 2.667 0 01-2.937 1.952l-.329-.066-9.861-2.643L37.334 32l11.209 6.47 9.862-2.64.329-.067a2.667 2.667 0 012.937 1.952l.067.328a2.669 2.669 0 01-1.952 2.938l-8.353 2.237 2.238 8.353.067.329a2.666 2.666 0 01-5.218 1.052l-2.643-9.861-11.209-6.472v12.944l7.219 7.218a2.667 2.667 0 01-3.52 3.993l-.251-.222L32 54.437l-6.114 6.115a2.666 2.666 0 01-3.52.222l-.251-.222a2.666 2.666 0 01-.222-3.52l.222-.251 7.218-7.22V36.62l-11.209 6.47-2.642 9.863a2.666 2.666 0 01-5.218-1.052l.067-.329 2.236-8.351-8.35-2.24a2.665 2.665 0 01-1.953-2.937l.067-.328a2.665 2.665 0 012.937-1.952l.329.066 9.861 2.642L26.667 32l-11.209-6.472-9.86 2.643-.329.066a2.665 2.665 0 01-2.937-1.952l-.067-.328a2.668 2.668 0 011.952-2.938l8.35-2.239-2.235-8.351-.067-.329a2.667 2.667 0 015.218-1.052l2.642 9.862 11.209 6.47V14.439L22.116 7.22a2.665 2.665 0 010-3.771 2.666 2.666 0 013.52-.222l.251.222 6.114 6.112 6.115-6.112a2.666 2.666 0 013.52-.222z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$n;

  function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

  function SvgIconGif(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$p({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$n || (_path$n = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-gif_svg__fill",
      d: "M16.664 45.333c2.155 0 4.119-.318 5.89-.953 1.772-.636 3.143-1.53 4.113-2.683V31.34h-10.29v3.94h4.902v4.474c-.861.856-2.304 1.283-4.327 1.283-2.011 0-3.538-.695-4.58-2.085-1.04-1.39-1.562-3.446-1.562-6.168v-1.657c.012-2.698.497-4.73 1.455-6.097.958-1.366 2.352-2.05 4.184-2.05 1.437 0 2.565.345 3.385 1.034.82.69 1.35 1.777 1.59 3.262h5.243c-.324-2.804-1.36-4.94-3.107-6.408-1.748-1.468-4.172-2.201-7.273-2.201-2.226 0-4.169.502-5.827 1.506-1.658 1.004-2.927 2.454-3.807 4.35-.88 1.895-1.32 4.138-1.32 6.728v1.765c.024 2.52.5 4.712 1.428 6.578.928 1.865 2.245 3.288 3.95 4.269 1.707.98 3.69 1.47 5.953 1.47zm20.67 0V18.667H32v26.666h5.333zm10.396 0V34.436h9.721v-4.432H47.73v-6.887h10.937v-4.45h-16v26.666h5.063z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$m;

  function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

  function SvgIconInfo(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$o({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$m || (_path$m = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-info_svg__fill",
      d: "M32 2.667C48.2 2.667 61.333 15.8 61.333 32S48.2 61.333 32 61.333 2.667 48.2 2.667 32 15.8 2.667 32 2.667zM32 8C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zm1.667 21.333a1 1 0 011 1v14a1 1 0 01-1 1h-3.334a1 1 0 01-1-1v-14a1 1 0 011-1h3.334zm-1.667-8a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$l;

  function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

  function SvgIconLeave(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$n({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$l || (_path$l = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-leave_svg__fill",
      d: "M32 5.333a2.667 2.667 0 01.311 5.316l-.311.018H10.667a2.67 2.67 0 00-2.65 2.355L8 13.333v37.334a2.667 2.667 0 002.356 2.648l.31.018H32a2.667 2.667 0 01.311 5.316l-.311.018H10.667a8.001 8.001 0 01-7.987-7.53l-.013-.47V13.333a8 8 0 017.53-7.986l.47-.014H32zm17.634 13.893l.252.222 10.666 10.666a2.666 2.666 0 01.222 3.52l-.222.252-10.666 10.666a2.666 2.666 0 01-3.993-3.52l.221-.251 4.78-4.782L20 36a2.667 2.667 0 01-.311-5.315l.311-.018h33.56l-7.446-7.448a2.668 2.668 0 01-.221-3.52l.221-.251a2.666 2.666 0 013.52-.222z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$k;

  function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

  function SvgIconMembers(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$m({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$k || (_path$k = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-members_svg__fill",
      d: "M34.667 37.333c7.17 0 13.018 5.66 13.32 12.755l.013.579V56a2.667 2.667 0 01-5.315.311L42.667 56v-5.333c0-4.26-3.33-7.743-7.53-7.987l-.47-.013H13.333a8 8 0 00-7.986 7.53l-.014.47V56a2.667 2.667 0 01-5.316.311L0 56v-5.333c0-7.17 5.66-13.019 12.755-13.321l.578-.013h21.334zM54 37.765a13.333 13.333 0 019.986 12.297l.014.605V56a2.667 2.667 0 01-5.315.311L58.667 56v-5.331a8 8 0 00-6-7.74A2.667 2.667 0 1154 37.765zM24 5.333c7.364 0 13.333 5.97 13.333 13.334C37.333 26.03 31.363 32 24 32c-7.364 0-13.333-5.97-13.333-13.333 0-7.364 5.97-13.334 13.333-13.334zm19.328.43a13.333 13.333 0 010 25.834 2.667 2.667 0 11-1.323-5.167 8 8 0 000-15.5 2.667 2.667 0 111.323-5.167zM24 10.667a8 8 0 100 16 8 8 0 000-16z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$j;

  function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

  function SvgIconMessage(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$l({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$j || (_path$j = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-message_svg__fill",
      d: "M32 2.667C48.2 2.667 61.333 15.8 61.333 32S48.2 61.333 32 61.333c-4.455 0-8.679-.993-12.461-2.77l-1.753.58c-5.965 1.912-10.133 2.572-12.504 1.981-2.799-.698-3.351-1.919-1.657-3.663 1.171-1.396 2.147-3.14 2.928-5.234.622-1.668.377-4.001-.737-7A29.15 29.15 0 012.666 32C2.667 15.8 15.8 2.667 32 2.667zM32 8C18.745 8 8 18.745 8 32c0 3.5.747 6.88 2.168 9.978l.405.837.137.271.106.285c1.517 4.085 1.89 7.622.734 10.72l-.382.972-.192.433.235-.05a62.067 62.067 0 004.886-1.363l1.721-.568 2.04-.696 1.95.917A23.882 23.882 0 0032 56c13.255 0 24-10.745 24-24S45.255 8 32 8zM18.667 29.333a2.667 2.667 0 11-.001 5.333 2.667 2.667 0 01.001-5.333zm13.333 0a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334zm13.333 0a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$i;

  function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

  function SvgIconModerations(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$k({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$i || (_path$i = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-moderations_svg__fill",
      d: "M18.667 34.667a2.667 2.667 0 01.311 5.316l-.311.017h-5.334v16a2.667 2.667 0 01-5.316.311L8 56V40H2.667a2.667 2.667 0 01-.311-5.315l.31-.018h16zM32 29.333a2.667 2.667 0 012.649 2.356l.018.311v24a2.667 2.667 0 01-5.316.311L29.333 56V32A2.667 2.667 0 0132 29.333zM61.333 40a2.667 2.667 0 01.311 5.315l-.31.018h-5.335L56 56a2.667 2.667 0 01-5.315.311L50.667 56l-.001-10.668-5.333.001a2.667 2.667 0 01-.311-5.316l.311-.017h16zm-8-34.667a2.67 2.67 0 012.65 2.356L56 8v24a2.667 2.667 0 01-5.315.311L50.667 32V8a2.667 2.667 0 012.666-2.667zm-42.666 0a2.667 2.667 0 012.648 2.356l.018.311v18.667a2.667 2.667 0 01-5.316.311L8 26.667V8a2.667 2.667 0 012.667-2.667zm21.333 0a2.667 2.667 0 012.649 2.356l.018.311-.001 10.666H40a2.668 2.668 0 01.311 5.317L40 24H24a2.667 2.667 0 01-.311-5.315l.311-.018h5.333V8A2.667 2.667 0 0132 5.333z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$h;

  function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

  function SvgIconMore(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$j({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$h || (_path$h = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-more_svg__fill",
      d: "M32 45.333a5.333 5.333 0 110 10.666 5.333 5.333 0 010-10.666zM32 28a5.333 5.333 0 110 10.668A5.333 5.333 0 0132 28zm0-17.333c2.946 0 5.333 2.387 5.333 5.333S34.946 21.333 32 21.333 26.667 18.946 26.667 16s2.387-5.333 5.333-5.333z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$g;

  function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

  function SvgIconMute(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$i({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$g || (_path$g = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-mute_svg__fill",
      d: "M55.62 19.616l.067.123A26.552 26.552 0 0158.667 32c0 4.326-1.03 8.41-2.864 12.025-1.012 2.726-1.235 4.847-.67 6.363.71 1.903 1.598 3.49 2.662 4.758 1.54 1.586 1.039 2.696-1.506 3.33-2.09.521-5.716-.027-10.879-1.646l-.488-.155-1.594-.527A26.56 26.56 0 0132 58.667a26.55 26.55 0 01-12.326-3.014l-.059-.03 4-4A21.24 21.24 0 0032 53.333c2.993 0 5.89-.614 8.562-1.786l.498-.226 1.925-.905 3.613 1.196.695.219c.728.225 1.414.423 2.054.595l.472.125.485.121-.167-.42-.2-.594c-.814-2.685-.484-5.681.713-9.065l.154-.425.106-.284.528-1.084a21.188 21.188 0 001.895-8.8 21.24 21.24 0 00-1.71-8.385l3.997-3.999zm2.266-13.502a2.668 2.668 0 01.221 3.52l-.221.252-48 48a2.668 2.668 0 01-3.993-3.52l.221-.252 5.238-5.237a26.563 26.563 0 01-6.015-16.412L5.333 32C5.333 17.272 17.273 5.333 32 5.333a26.55 26.55 0 0116.877 6.02l5.237-5.239a2.668 2.668 0 013.772 0zM32 10.667c-11.782 0-21.333 9.55-21.333 21.333 0 4.836 1.614 9.401 4.48 13.084l29.936-29.938A21.248 21.248 0 0032 10.666z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$f;

  function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

  function SvgIconNotifications(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$h({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$f || (_path$f = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-notifications_svg__fill",
      d: "M36.613 53.333c2.056 0 3.338 2.227 2.307 4.005a8 8 0 01-13.84 0c-.98-1.689.129-3.783 2.004-3.988l.303-.017h9.226zM32 2.667c11.56 0 20.972 9.194 21.323 20.669l.01.664v13.333a5.334 5.334 0 004.936 5.319l.753.033c2.963.318 3.077 4.616.342 5.24l-.342.056-.355.019H5.333l-.355-.019c-3.082-.33-3.082-4.965 0-5.296l.753-.033a5.335 5.335 0 004.92-4.9l.016-.419V24c0-11.782 9.55-21.333 21.333-21.333zM32 8c-8.636 0-15.674 6.842-15.989 15.4L16 24v13.333c0 1.562-.336 3.046-.939 4.383l-.275.564-.218.387h34.861l-.215-.387a10.583 10.583 0 01-1.146-3.74l-.055-.674-.013-.533V24c0-8.837-7.163-16-16-16z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$e;

  function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

  function SvgIconNotificationsOffFilled(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$g({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$e || (_path$e = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-notifications-off-filled_svg__fill",
      d: "M36.613 53.333c2.056 0 3.338 2.227 2.307 4.005a8 8 0 01-13.84 0c-.98-1.689.129-3.783 2.004-3.988l.303-.017h9.226zM32 2.667c7.173 0 13.52 3.54 17.387 8.97l5.686-5.687a2.105 2.105 0 012.85-.117l.127.117a2.105 2.105 0 010 2.977L8.927 58.05c-.78.781-2.023.82-2.85.117l-.127-.117a2.105 2.105 0 010-2.977L13.023 48h-7.69l-.355-.019c-3.082-.33-3.082-4.965 0-5.296l.753-.033a5.335 5.335 0 004.92-4.9l.016-.419V24c0-11.782 9.55-21.333 21.333-21.333zm20.85 16.795c.271 1.253.433 2.548.473 3.874l.01.664v13.333a5.334 5.334 0 004.936 5.319l.753.033c2.963.318 3.077 4.616.342 5.24l-.342.056-.355.019H24.31l28.54-28.538z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$d;

  function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

  function SvgIconOperator(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$f({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$d || (_path$d = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-operator_svg__fill",
      d: "M29.83 6.45a2.667 2.667 0 014.34 0l11.697 16.374L57 13.918c1.88-1.504 4.573.054 4.32 2.35l-.047.29-8 37.334A2.666 2.666 0 0150.666 56H13.333a2.666 2.666 0 01-2.607-2.108l-8-37.333c-.525-2.452 2.315-4.207 4.273-2.641l11.132 8.906zM32 12.587l-11.163 15.63a2.667 2.667 0 01-3.836.532l-7.497-5.997 5.984 27.915h33.021l5.984-27.915L47 28.749a2.667 2.667 0 01-3.632-.281l-.204-.251L32 12.587zM32 32a5.333 5.333 0 110 10.668A5.333 5.333 0 0132 32z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$c;

  function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

  function SvgIconPhoto(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$e({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$c || (_path$c = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-photo_svg__fill",
      d: "M50.667 5.333a8 8 0 018 8v37.334a8 8 0 01-8 8H13.333a8 8 0 01-8-8V13.333a8 8 0 018-8zm-8 25.107L19.77 53.332l30.896.001a2.667 2.667 0 002.661-2.498l.005-.168v-9.564L42.666 30.44zm8-19.773H13.333a2.667 2.667 0 00-2.666 2.666v37.334c0 1.143.72 2.119 1.731 2.498L40.781 24.78a2.668 2.668 0 013.52-.222l.251.222 8.78 8.78.001-20.228a2.667 2.667 0 00-2.498-2.661l-.168-.005zm-28 5.333a6.666 6.666 0 110 13.333 6.666 6.666 0 010-13.333zm0 5.333a1.334 1.334 0 100 2.667 1.334 1.334 0 000-2.667z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$b;

  function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

  function SvgIconPlay(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$d({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$b || (_path$b = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-play_svg__fill",
      d: "M51.908 34.75c1.9-1.233 1.896-3.26.013-4.514L19.376 8.577c-1.893-1.26-3.404-.391-3.376 1.968l.522 42.888c.028 2.347 1.596 3.247 3.493 2.016L51.908 34.75z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$a;

  function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

  function SvgIconPlus(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$c({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$a || (_path$a = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-plus_svg__fill",
      d: "M34.667 29.333h18.666c3.556 0 3.556 5.334 0 5.334H34.667v18.666c0 3.556-5.334 3.556-5.334 0V34.667H10.667c-3.556 0-3.556-5.334 0-5.334h18.666V10.667c0-3.556 5.334-3.556 5.334 0v18.666z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$9;

  function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

  function SvgIconQuestion(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$b({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$9 || (_path$9 = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-question_svg__fill",
      d: "M32 61.333C15.8 61.333 2.667 48.2 2.667 32S15.8 2.667 32 2.667 61.333 15.8 61.333 32 48.2 61.333 32 61.333zM32 56c13.255 0 24-10.745 24-24S45.255 8 32 8 8 18.745 8 32s10.745 24 24 24zm2.213-18.63a2.667 2.667 0 11-5.333 0v-2.69c0-1.148.734-2.168 1.823-2.53.173-.058.532-.195 1.01-.407.809-.36 1.616-.79 2.354-1.282 1.835-1.223 2.813-2.528 2.813-3.786a5.333 5.333 0 00-10.364-1.777 2.667 2.667 0 01-5.032-1.77 10.668 10.668 0 0120.729 3.551c0 3.413-2.022 6.109-5.187 8.22a21.268 21.268 0 01-2.813 1.578v.893zm-5.333 7.523a2.667 2.667 0 115.333 0v.44a2.667 2.667 0 11-5.333 0v-.44z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$8;

  function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

  function SvgIconRefresh(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$a({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$8 || (_path$8 = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-refresh_svg__fill",
      d: "M46.14 14.43l.562.537 6.631 6.167v-7.8a2.67 2.67 0 012.356-2.65l.311-.017a2.667 2.667 0 012.649 2.355l.018.311v16a2.67 2.67 0 01-2.356 2.65L56 32H40a2.667 2.667 0 01-.311-5.315l.311-.018h11.452l-8.44-7.85c-5.964-5.893-15.168-7.182-22.563-3.156-7.38 4.018-11.172 12.357-9.314 20.455 1.859 8.107 8.935 14.032 17.362 14.518 8.43.487 16.162-4.585 18.967-12.426a2.667 2.667 0 015.022 1.797C48.88 50.082 38.973 56.582 28.19 55.959c-10.785-.623-19.862-8.222-22.254-18.65C3.542 26.872 8.426 16.135 17.9 10.977c9.227-5.024 20.65-3.579 28.241 3.453z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$7;

  function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

  function SvgIconRemove(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$9({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$7 || (_path$7 = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-remove_svg__fill",
      d: "M32 2.667C48.2 2.667 61.333 15.8 61.333 32S48.2 61.333 32 61.333 2.667 48.2 2.667 32 15.8 2.667 32 2.667zm9.886 19.447a2.668 2.668 0 00-3.772 0L32 28.23l-6.114-6.115-.134-.124a2.667 2.667 0 00-3.638.124l-.124.134a2.667 2.667 0 00.124 3.638L28.23 32l-6.115 6.114-.124.134a2.667 2.667 0 00.124 3.638l.134.124a2.667 2.667 0 003.638-.124L32 35.77l6.114 6.115.134.124a2.667 2.667 0 003.638-.124l.124-.134a2.667 2.667 0 00-.124-3.638L35.77 32l6.115-6.114.124-.134a2.667 2.667 0 00-.124-3.638z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$6;

  function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

  function SvgIconSearch(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$8({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$6 || (_path$6 = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-search_svg__fill",
      d: "M26.667 48C14.885 48 5.333 38.449 5.333 26.667c0-11.782 9.552-21.334 21.334-21.334S48 14.885 48 26.667c0 4.93-1.672 9.469-4.48 13.081l13.67 13.67a2.668 2.668 0 01-3.772 3.772l-13.67-13.67A21.239 21.239 0 0126.667 48zm0-5.333c8.836 0 16-7.164 16-16 0-8.837-7.164-16-16-16-8.837 0-16 7.163-16 16 0 8.836 7.163 16 16 16z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$5;

  function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

  function SvgIconSend(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$7({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$5 || (_path$5 = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-send_svg__fill",
      d: "M59.795 29.43L7.329 2.979C4.691 1.802 1.76 4.153 2.932 6.798l6.925 18.609a2 2 0 001.544 1.275l32.273 5.394L11.4 37.47a1.998 1.998 0 00-1.544 1.275L2.932 57.353c-.879 2.645 1.76 4.997 4.397 3.527l52.466-26.453c2.051-.882 2.051-3.82 0-4.996z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$4;

  function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

  function SvgIconSettingsFilled(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$6({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$4 || (_path$4 = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-settings-filled_svg__fill",
      d: "M32 2.667A5.332 5.332 0 0137.333 8v.24A4.4 4.4 0 0040 12.267a4.4 4.4 0 004.853-.88l.16-.16a5.332 5.332 0 017.547 0 5.333 5.333 0 010 7.546l-.16.16a4.401 4.401 0 00-.88 4.854V24a4.4 4.4 0 004.027 2.667H56c2.946 0 5.333 2.387 5.333 5.333S58.946 37.333 56 37.333h-.24A4.4 4.4 0 0051.733 40a4.4 4.4 0 00.88 4.853l.16.16a5.332 5.332 0 010 7.547 5.333 5.333 0 01-7.546 0l-.16-.16a4.401 4.401 0 00-4.854-.88 4.397 4.397 0 00-2.666 4.027V56a5.333 5.333 0 01-10.667 0v-.24A4.4 4.4 0 0024 51.733a4.4 4.4 0 00-4.853.88l-.16.16a5.332 5.332 0 01-7.547 0 5.333 5.333 0 010-7.546l.16-.16a4.401 4.401 0 00.88-4.854 4.397 4.397 0 00-4.027-2.666H8A5.333 5.333 0 018 26.88h.24A4.4 4.4 0 0012.267 24a4.4 4.4 0 00-.88-4.853l-.16-.16a5.332 5.332 0 010-7.547 5.333 5.333 0 017.546 0l.16.16a4.401 4.401 0 004.854.88H24a4.4 4.4 0 002.667-4.027V8A5.332 5.332 0 0132 2.667zM32 24a8 8 0 100 16 8 8 0 000-16z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$3;

  function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

  function SvgIconSpinner(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$5({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$3 || (_path$3 = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-spinner_svg__fill",
      d: "M32 61.333C48.2 61.333 61.333 48.2 61.333 32S48.2 2.667 32 2.667 2.667 15.8 2.667 32a2.838 2.838 0 105.678 0C8.344 18.935 18.934 8.344 32 8.344c13.065 0 23.656 10.591 23.656 23.656S45.065 55.656 32 55.656a2.838 2.838 0 100 5.677z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$2;

  function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

  function SvgIconSupergroup(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$4({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$2 || (_path$2 = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-supergroup_svg__fill",
      d: "M36.889 43.013c6.608 0 12.121 4.685 12.43 10.734l.014.537V58a2.667 2.667 0 01-5.316.311L44 58v-3.716c0-3.07-2.87-5.718-6.636-5.925l-.475-.013H27.11c-3.838 0-6.86 2.525-7.096 5.557l-.015.381V58a2.667 2.667 0 01-5.315.311L14.667 58v-3.716c0-6.126 5.324-10.986 11.864-11.26l.58-.011h9.778zm18.578-17.291c.266 0 .53.04.784.118 4.632 1.426 7.518 4.801 7.736 9.688l.013.594v12.8a2.667 2.667 0 01-5.315.311l-.018-.311V36.124c-.002-2.595-1.163-4.171-3.528-5.034l-.104-.037-2.502.002a2.667 2.667 0 01-2.648-2.356l-.018-.31a2.67 2.67 0 012.355-2.65l.311-.017h2.934zm-44 0l.31.018a2.666 2.666 0 012.356 2.648l-.018.311a2.666 2.666 0 01-2.648 2.356l-2.51-.002-.119.042c-2.246.85-3.503 2.574-3.505 5.147v12.68l-.018.31A2.666 2.666 0 010 48.922V36.24l.014-.591c.225-4.874 3.203-8.415 7.712-9.809.255-.078.52-.118.788-.118h2.953zM32 19.958c5.512 0 10 4.409 10 9.871 0 5.463-4.488 9.872-10 9.872s-10-4.41-10-9.872 4.488-9.871 10-9.871zm0 5.333c-2.588 0-4.667 2.043-4.667 4.538 0 2.496 2.08 4.538 4.667 4.538 2.588 0 4.667-2.042 4.667-4.538 0-2.495-2.08-4.538-4.667-4.538zM17.333 2.667c5.513 0 10 4.409 10 9.871 0 5.462-4.487 9.871-10 9.871-5.512 0-10-4.409-10-9.871 0-5.462 4.488-9.871 10-9.871zm29.334 0c5.512 0 10 4.409 10 9.871 0 5.462-4.488 9.871-10 9.871-5.513 0-10-4.409-10-9.871 0-5.462 4.487-9.871 10-9.871zM17.333 8c-2.587 0-4.666 2.042-4.666 4.538 0 2.496 2.079 4.538 4.666 4.538 2.588 0 4.667-2.042 4.667-4.538C22 10.042 19.921 8 17.333 8zm29.334 0C44.079 8 42 10.042 42 12.538c0 2.496 2.079 4.538 4.667 4.538 2.587 0 4.666-2.042 4.666-4.538 0-2.496-2.079-4.538-4.666-4.538z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _path$1;

  function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

  function SvgIconThumbnailNone(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$3({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path$1 || (_path$1 = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-thumbnail-none_svg__fill",
      d: "M34.667 5.333a2.667 2.667 0 010 5.334H13.333a2.667 2.667 0 00-2.666 2.666v37.334c0 1.143.72 2.118 1.73 2.497l28.384-28.383a2.667 2.667 0 013.771 0l8.781 8.78v-4.228a2.667 2.667 0 012.498-2.661l.169-.005a2.667 2.667 0 012.667 2.666v21.334a8 8 0 01-8 8H13.33a8 8 0 01-7.998-8V13.333a8 8 0 018-8zm8 25.105L19.77 53.333h30.897a2.667 2.667 0 002.661-2.498l.005-.168v-9.563L42.667 30.438zM22.667 16a6.666 6.666 0 110 13.333 6.666 6.666 0 010-13.333zm0 5.333a1.334 1.334 0 100 2.667 1.334 1.334 0 000-2.667zM56.78 3.448a2.665 2.665 0 013.771 0 2.665 2.665 0 010 3.771l-4.782 4.78 4.782 4.782c.998.998 1.04 2.59.125 3.638l-.125.133a2.665 2.665 0 01-3.771 0l-4.782-4.781-4.78 4.781a2.667 2.667 0 01-3.638.125l-.133-.125a2.665 2.665 0 010-3.771L48.228 12l-4.78-4.781a2.667 2.667 0 01-.125-3.638l.125-.133a2.665 2.665 0 013.771 0l4.78 4.78z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var _g$1;

  function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

  function SvgIconToggleoff(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$2({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 88 48"
    }, props), _g$1 || (_g$1 = /*#__PURE__*/React__default.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React__default.createElement("rect", {
      className: "icon-toggleoff_svg__fill",
      width: 80,
      height: 40,
      x: 4,
      y: 4,
      fill: "#000",
      rx: 20
    }), /*#__PURE__*/React__default.createElement("circle", {
      cx: 24,
      cy: 24,
      r: 12,
      fill: "#FFF"
    }), /*#__PURE__*/React__default.createElement("path", {
      fill: "#FFF",
      d: "M64 4c11.046 0 20 8.954 20 20s-8.954 20-20 20H24C12.954 44 4 35.046 4 24S12.954 4 24 4h40zm0 2H24C14.059 6 6 14.059 6 24c0 9.764 7.774 17.712 17.47 17.992L24 42h40c9.941 0 18-8.059 18-18 0-9.764-7.774-17.712-17.47-17.992L64 6z"
    }), /*#__PURE__*/React__default.createElement("path", {
      className: "icon-toggleoff_svg__fill",
      fill: "#000",
      d: "M64 0H24C10.745 0 0 10.745 0 24s10.745 24 24 24h40c13.255 0 24-10.745 24-24S77.255 0 64 0zm0 4c11.046 0 20 8.954 20 20s-8.954 20-20 20H24C12.954 44 4 35.046 4 24S12.954 4 24 4h40z"
    }))));
  }

  var _g;

  function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

  function SvgIconToggleon(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends$1({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 88 48"
    }, props), _g || (_g = /*#__PURE__*/React__default.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React__default.createElement("rect", {
      className: "icon-toggleon_svg__fill",
      width: 80,
      height: 40,
      x: 4,
      y: 4,
      fill: "#000",
      rx: 20
    }), /*#__PURE__*/React__default.createElement("circle", {
      cx: 64,
      cy: 24,
      r: 12,
      fill: "#FFF"
    }), /*#__PURE__*/React__default.createElement("path", {
      fill: "#FFF",
      d: "M64 4c11.046 0 20 8.954 20 20s-8.954 20-20 20H24C12.954 44 4 35.046 4 24S12.954 4 24 4h40zm0 2H24C14.059 6 6 14.059 6 24c0 9.764 7.774 17.712 17.47 17.992L24 42h40c9.941 0 18-8.059 18-18 0-9.764-7.774-17.712-17.47-17.992L64 6z"
    }), /*#__PURE__*/React__default.createElement("path", {
      className: "icon-toggleon_svg__fill",
      fill: "#000",
      d: "M64 0H24C10.745 0 0 10.745 0 24s10.745 24 24 24h40c13.255 0 24-10.745 24-24S77.255 0 64 0zm0 4c11.046 0 20 8.954 20 20s-8.954 20-20 20H24C12.954 44 4 35.046 4 24S12.954 4 24 4h40z"
    }))));
  }

  var _path;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function SvgIconUser(props) {
    return /*#__PURE__*/React__default.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 64 64"
    }, props), _path || (_path = /*#__PURE__*/React__default.createElement("path", {
      className: "icon-user_svg__fill",
      d: "M42.667 37.333c7.17 0 13.018 5.66 13.32 12.755l.013.579V56a2.667 2.667 0 01-5.315.311L50.667 56v-5.333c0-4.26-3.33-7.743-7.53-7.987l-.47-.013H21.333a8 8 0 00-7.986 7.53l-.014.47V56a2.667 2.667 0 01-5.316.311L8 56v-5.333c0-7.17 5.66-13.019 12.755-13.321l.578-.013h21.334zM32 5.333c7.364 0 13.333 5.97 13.333 13.334C45.333 26.03 39.363 32 32 32c-7.364 0-13.333-5.97-13.333-13.333 0-7.364 5.97-13.334 13.333-13.334zm0 5.334a8 8 0 100 16 8 8 0 000-16z",
      fill: "#000",
      fillRule: "evenodd"
    })));
  }

  var Colors$1 = {
    DEFAULT: 'DEFAULT',
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    CONTENT: 'CONTENT',
    CONTENT_INVERSE: 'CONTENT_INVERSE',
    WHITE: 'WHITE',
    SENT: 'SENT',
    READ: 'READ',
    ON_BACKGROUND_1: 'ON_BACKGROUND_1',
    ON_BACKGROUND_2: 'ON_BACKGROUND_2',
    ON_BACKGROUND_3: 'ON_BACKGROUND_3',
    BACKGROUND_3: 'BACKGROUND_3',
    ERROR: 'ERROR'
  };

  function changeColorToClassName$1(color) {
    switch (color) {
      case Colors$1.PRIMARY:
        return 'sendbird-icon-color--primary';

      case Colors$1.SECONDARY:
        return 'sendbird-icon-color--secondary';

      case Colors$1.CONTENT:
        return 'sendbird-icon-color--content';

      case Colors$1.CONTENT_INVERSE:
        return 'sendbird-icon-color--content-inverse';

      case Colors$1.WHITE:
        return 'sendbird-icon-color--white';

      case Colors$1.SENT:
        return 'sendbird-icon-color--sent';

      case Colors$1.READ:
        return 'sendbird-icon-color--read';

      case Colors$1.ON_BACKGROUND_1:
        return 'sendbird-icon-color--on-background-1';

      case Colors$1.ON_BACKGROUND_2:
        return 'sendbird-icon-color--on-background-2';

      case Colors$1.ON_BACKGROUND_3:
        return 'sendbird-icon-color--on-background-3';

      case Colors$1.BACKGROUND_3:
        return 'sendbird-icon-color--background-3';

      case Colors$1.ERROR:
        return 'sendbird-icon-color--error';

      default:
        return '';
    }
  }

  function changeTypeToIconComponent(type) {
    switch (type) {
      case Type.ADD:
        return /*#__PURE__*/React__default__default.createElement(SvgIconAdd, null);

      case Type.ARROW_LEFT:
        return /*#__PURE__*/React__default__default.createElement(SvgIconArrowLeft, null);

      case Type.ATTACH:
        return /*#__PURE__*/React__default__default.createElement(SvgIconAttach, null);

      case Type.BAN:
        return /*#__PURE__*/React__default__default.createElement(SvgIconBan, null);

      case Type.BROADCAST:
        return /*#__PURE__*/React__default__default.createElement(SvgIconBroadcast, null);

      case Type.CAMERA:
        return /*#__PURE__*/React__default__default.createElement(SvgIconCamera, null);

      case Type.CHANNELS:
        return /*#__PURE__*/React__default__default.createElement(SvgIconChannels, null);

      case Type.CHAT:
        return /*#__PURE__*/React__default__default.createElement(SvgIconChat, null);

      case Type.CHAT_FILLED:
        return /*#__PURE__*/React__default__default.createElement(SvgIconChatFilled, null);

      case Type.CHEVRON_DOWN:
        return /*#__PURE__*/React__default__default.createElement(SvgIconChevronDown, null);

      case Type.CHEVRON_RIGHT:
        return /*#__PURE__*/React__default__default.createElement(SvgIconChevronRight, null);

      case Type.CLOSE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconClose, null);

      case Type.COLLAPSE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconCollapse, null);

      case Type.COPY:
        return /*#__PURE__*/React__default__default.createElement(SvgIconCopy, null);

      case Type.CREATE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconCreate, null);

      case Type.DELETE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconDelete, null);

      case Type.DISCONNECTED:
        return /*#__PURE__*/React__default__default.createElement(SvgIconDisconnected, null);

      case Type.DOCUMENT:
        return /*#__PURE__*/React__default__default.createElement(SvgIconDocument, null);

      case Type.DONE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconDone, null);

      case Type.DONE_ALL:
        return /*#__PURE__*/React__default__default.createElement(SvgIconDoneAll, null);

      case Type.DOWNLOAD:
        return /*#__PURE__*/React__default__default.createElement(SvgIconDownload, null);

      case Type.EDIT:
        return /*#__PURE__*/React__default__default.createElement(SvgIconEdit, null);

      case Type.EMOJI_MORE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconEmojiMore, null);

      case Type.ERROR:
        return /*#__PURE__*/React__default__default.createElement(SvgIconError, null);

      case Type.EXPAND:
        return /*#__PURE__*/React__default__default.createElement(SvgIconExpand, null);

      case Type.FILE_AUDIO:
        return /*#__PURE__*/React__default__default.createElement(SvgIconFileAudio, null);

      case Type.FILE_DOCUMENT:
        return /*#__PURE__*/React__default__default.createElement(SvgIconFileDocument, null);

      case Type.FREEZE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconFreeze, null);

      case Type.GIF:
        return /*#__PURE__*/React__default__default.createElement(SvgIconGif, null);

      case Type.INFO:
        return /*#__PURE__*/React__default__default.createElement(SvgIconInfo, null);

      case Type.LEAVE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconLeave, null);

      case Type.MEMBERS:
        return /*#__PURE__*/React__default__default.createElement(SvgIconMembers, null);

      case Type.MESSAGE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconMessage, null);

      case Type.MODERATIONS:
        return /*#__PURE__*/React__default__default.createElement(SvgIconModerations, null);

      case Type.MORE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconMore, null);

      case Type.MUTE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconMute, null);

      case Type.NOTIFICATIONS:
        return /*#__PURE__*/React__default__default.createElement(SvgIconNotifications, null);

      case Type.NOTIFICATIONS_OFF_FILLED:
        return /*#__PURE__*/React__default__default.createElement(SvgIconNotificationsOffFilled, null);

      case Type.OPERATOR:
        return /*#__PURE__*/React__default__default.createElement(SvgIconOperator, null);

      case Type.PHOTO:
        return /*#__PURE__*/React__default__default.createElement(SvgIconPhoto, null);

      case Type.PLAY:
        return /*#__PURE__*/React__default__default.createElement(SvgIconPlay, null);

      case Type.PLUS:
        return /*#__PURE__*/React__default__default.createElement(SvgIconPlus, null);

      case Type.QUESTION:
        return /*#__PURE__*/React__default__default.createElement(SvgIconQuestion, null);

      case Type.REFRESH:
        return /*#__PURE__*/React__default__default.createElement(SvgIconRefresh, null);

      case Type.REMOVE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconRemove, null);

      case Type.SEARCH:
        return /*#__PURE__*/React__default__default.createElement(SvgIconSearch, null);

      case Type.SEND:
        return /*#__PURE__*/React__default__default.createElement(SvgIconSend, null);

      case Type.SETTINGS_FILLED:
        return /*#__PURE__*/React__default__default.createElement(SvgIconSettingsFilled, null);

      case Type.SPINNER:
        return /*#__PURE__*/React__default__default.createElement(SvgIconSpinner, null);

      case Type.SUPERGROUP:
        return /*#__PURE__*/React__default__default.createElement(SvgIconSupergroup, null);

      case Type.THUMBNAIL_NONE:
        return /*#__PURE__*/React__default__default.createElement(SvgIconThumbnailNone, null);

      case Type.TOGGLE_OFF:
        return /*#__PURE__*/React__default__default.createElement(SvgIconToggleoff, null);

      case Type.TOGGLE_ON:
        return /*#__PURE__*/React__default__default.createElement(SvgIconToggleon, null);

      case Type.USER:
        return /*#__PURE__*/React__default__default.createElement(SvgIconUser, null);

      default:
        return 'icon';
      // If you see this text 'icon' replace icon for it
    }
  }

  function Icon(_ref) {
    var className = _ref.className,
        type = _ref.type,
        fillColor = _ref.fillColor,
        width = _ref.width,
        height = _ref.height,
        onClick = _ref.onClick,
        children = _ref.children;
    var iconStyle = {
      width: typeof width === 'string' ? width : "".concat(width, "px"),
      minWidth: typeof width === 'string' ? width : "".concat(width, "px"),
      height: typeof height === 'string' ? height : "".concat(height, "px"),
      minHeight: typeof height === 'string' ? height : "".concat(height, "px")
    };
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-icon', changeColorToClassName$1(fillColor)]).join(' '),
      role: "button",
      onClick: onClick,
      onKeyDown: onClick,
      tabIndex: "0",
      style: iconStyle
    }, children || changeTypeToIconComponent(type));
  }
  Icon.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    type: PropTypes.oneOfType([PropTypes.oneOf(Object.keys(Type)), PropTypes.string]).isRequired,
    fillColor: PropTypes.oneOf(Object.keys(Colors$1)),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
    children: PropTypes.element
  };
  Icon.defaultProps = {
    className: '',
    fillColor: Colors$1.DEFAULT,
    width: 26,
    height: 26,
    onClick: function onClick() {},
    children: null
  };
  var IconTypes = Type;
  var IconColors = Colors$1;

  var pxToNumber = (function (px) {
    if (typeof px === 'number') {
      return px;
    }

    if (typeof px === 'string') {
      var parsed = Number.parseFloat(px);

      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }

    return null;
  });

  var imageRendererClassName = 'sendbird-avatar-img';

  var DefaultComponent = function DefaultComponent(width, height) {
    var iconWidth = pxToNumber(width);
    var iconHeight = pxToNumber(height);

    if (typeof iconWidth === 'number') {
      iconWidth *= 0.575;
    }

    if (typeof iconHeight === 'number') {
      iconHeight *= 0.575;
    }

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-avatar-img--default",
      style: {
        width: width,
        height: height
      }
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.USER,
      fillColor: IconColors.CONTENT,
      width: iconWidth,
      height: iconHeight
    }));
  };

  var _defaultComponent = function _defaultComponent(_a) {
    var width = _a.width,
        height = _a.height;
    return /*#__PURE__*/React__default__default.createElement(DefaultComponent, {
      width: width,
      height: height
    });
  };

  var AvatarInner = function AvatarInner(_a) {
    var _b = _a.src,
        src = _b === void 0 ? '' : _b,
        _c = _a.alt,
        alt = _c === void 0 ? '' : _c,
        height = _a.height,
        width = _a.width,
        customDefaultComponent = _a.customDefaultComponent;

    var defaultComponent = function defaultComponent() {
      return customDefaultComponent ? customDefaultComponent({
        width: width,
        height: height
      }) : _defaultComponent({
        width: width,
        height: height
      });
    };

    if (typeof src === 'string') {
      return /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
        className: imageRendererClassName,
        url: src,
        height: height,
        width: width,
        alt: alt,
        defaultComponent: defaultComponent
      });
    }

    if (src && src.length) {
      if (src.length === 1) {
        return /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
          className: imageRendererClassName,
          url: src[0],
          height: height,
          width: width,
          alt: alt,
          defaultComponent: defaultComponent
        });
      }

      if (src.length === 2) {
        return /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-avatar--inner__two-child"
        }, /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
          className: imageRendererClassName,
          url: src[0],
          height: height,
          width: width,
          alt: alt,
          defaultComponent: defaultComponent
        }), /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
          className: imageRendererClassName,
          url: src[1],
          height: height,
          width: width,
          alt: alt,
          defaultComponent: defaultComponent
        }));
      }

      if (src.length === 3) {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-avatar--inner__three-child--upper"
        }, /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
          className: imageRendererClassName,
          url: src[0],
          height: height,
          width: width,
          alt: alt,
          defaultComponent: defaultComponent
        })), /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-avatar--inner__three-child--lower"
        }, /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
          className: imageRendererClassName,
          url: src[1],
          height: height,
          width: width,
          alt: alt,
          defaultComponent: defaultComponent
        }), /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
          className: imageRendererClassName,
          url: src[2],
          height: height,
          width: width,
          alt: alt,
          defaultComponent: defaultComponent
        })));
      }

      return /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-avatar--inner__four-child"
      }, src.slice(0, 4).map(function (i) {
        return /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
          className: imageRendererClassName,
          url: i,
          height: height,
          width: width,
          alt: alt,
          key: uuidv4(),
          defaultComponent: defaultComponent
        });
      }));
    } // default img


    return /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      className: imageRendererClassName,
      url: "",
      height: height,
      width: width,
      alt: alt,
      defaultComponent: defaultComponent
    });
  };

  function Avatar(_a, ref) {
    var _b = _a.className,
        className = _b === void 0 ? '' : _b,
        _c = _a.src,
        src = _c === void 0 ? '' : _c,
        _d = _a.alt,
        alt = _d === void 0 ? '' : _d,
        _e = _a.width,
        width = _e === void 0 ? '56px' : _e,
        _f = _a.height,
        height = _f === void 0 ? '56px' : _f,
        onClick = _a.onClick,
        customDefaultComponent = _a.customDefaultComponent;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className]), ['sendbird-avatar']).join(' '),
      role: "button",
      ref: ref,
      style: {
        height: height,
        width: width
      },
      onClick: onClick,
      onKeyDown: onClick,
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement(AvatarInner, {
      src: src,
      width: width,
      height: height,
      alt: alt,
      customDefaultComponent: customDefaultComponent
    }));
  }

  var Avatar$1 = /*#__PURE__*/React__default__default.forwardRef(Avatar);

  var Typography = {
    H_1: 'H_1',
    H_2: 'H_2',
    SUBTITLE_1: 'SUBTITLE_1',
    SUBTITLE_2: 'SUBTITLE_2',
    BODY_1: 'BODY_1',
    BODY_2: 'BODY_2',
    BUTTON_1: 'BUTTON_1',
    BUTTON_2: 'BUTTON_2',
    CAPTION_1: 'CAPTION_1',
    CAPTION_2: 'CAPTION_2',
    CAPTION_3: 'CAPTION_3'
  };
  var Colors = {
    ONBACKGROUND_1: 'ONBACKGROUND_1',
    ONBACKGROUND_2: 'ONBACKGROUND_2',
    ONBACKGROUND_3: 'ONBACKGROUND_3',
    ONCONTENT_1: 'ONCONTENT_1',
    ONCONTENT_2: 'ONCONTENT_2',
    PRIMARY: 'PRIMARY',
    ERROR: 'ERROR',
    SECONDARY_3: 'SECONDARY_3'
  };

  function changeTypographyToClassName(type) {
    switch (type) {
      case Typography.H_1:
        return 'sendbird-label--h-1';

      case Typography.H_2:
        return 'sendbird-label--h-2';

      case Typography.SUBTITLE_1:
        return 'sendbird-label--subtitle-1';

      case Typography.SUBTITLE_2:
        return 'sendbird-label--subtitle-2';

      case Typography.BODY_1:
        return 'sendbird-label--body-1';

      case Typography.BODY_2:
        return 'sendbird-label--body-2';

      case Typography.BUTTON_1:
        return 'sendbird-label--button-1';

      case Typography.BUTTON_2:
        return 'sendbird-label--button-2';

      case Typography.CAPTION_1:
        return 'sendbird-label--caption-1';

      case Typography.CAPTION_2:
        return 'sendbird-label--caption-2';

      case Typography.CAPTION_3:
        return 'sendbird-label--caption-3';

      default:
        return null;
    }
  }
  function changeColorToClassName(color) {
    switch (color) {
      case Colors.ONBACKGROUND_1:
        return 'sendbird-label--color-onbackground-1';

      case Colors.ONBACKGROUND_2:
        return 'sendbird-label--color-onbackground-2';

      case Colors.ONBACKGROUND_3:
        return 'sendbird-label--color-onbackground-3';

      case Colors.ONCONTENT_1:
        return 'sendbird-label--color-oncontent-1';

      case Colors.ONCONTENT_2:
        return 'sendbird-label--color-oncontent-2';

      case Colors.PRIMARY:
        return 'sendbird-label--color-primary';
      // should be Primary-3 fix me

      case Colors.ERROR:
        return 'sendbird-label--color-error';

      case Colors.SECONDARY_3:
        return 'sendbird-label--color-secondary-3';

      default:
        return null;
    }
  }

  function Label(_ref) {
    var className = _ref.className,
        type = _ref.type,
        color = _ref.color,
        children = _ref.children;
    return /*#__PURE__*/React__default__default.createElement("span", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-label', type ? changeTypographyToClassName(type) : '', color ? changeColorToClassName(color) : '']).join(' ')
    }, children);
  }
  Label.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    type: PropTypes.oneOf([].concat(_toConsumableArray(Object.keys(Typography)), [''])),
    color: PropTypes.oneOf([].concat(_toConsumableArray(Object.keys(Colors)), [''])),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.any])
  };
  Label.defaultProps = {
    className: [],
    type: '',
    color: '',
    children: null
  };
  var LabelTypography = Typography;
  var LabelColors = Colors;
  var LabelStringSet = getStringSet('en');

  function Types() {
    return {
      LOADING: 'LOADING',
      NO_CHANNELS: 'NO_CHANNELS',
      NO_MESSAGES: 'NO_MESSAGES',
      WRONG: 'WRONG',
      SEARCH_IN: 'SEARCH_IN',
      SEARCHING: 'SEARCHING',
      NO_RESULTS: 'NO_RESULTS'
    };
  }
  var PlaceHolderTypes$1 = Types();

  function Loader(_ref) {
    var className = _ref.className,
        width = _ref.width,
        height = _ref.height,
        children = _ref.children;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-loader']).join(' '),
      style: {
        width: typeof width === 'string' ? width : "".concat(width, "px"),
        height: typeof height === 'string' ? height : "".concat(height, "px")
      }
    }, children);
  }
  Loader.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.element
  };
  Loader.defaultProps = {
    className: '',
    width: '26px',
    height: '26px',
    children: /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.SPINNER,
      width: "26px",
      height: "26px"
    })
  };

  var PlaceHolderTypes = PlaceHolderTypes$1;
  function PlaceHolder(_ref) {
    var className = _ref.className,
        type = _ref.type,
        retryToConnect = _ref.retryToConnect,
        searchInString = _ref.searchInString;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-place-holder']).join(' ')
    }, type === PlaceHolderTypes.LOADING && /*#__PURE__*/React__default__default.createElement(Loader, {
      width: "48px",
      height: "48px"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.SPINNER,
      fillColor: IconColors.PRIMARY,
      width: "48px",
      height: "48px"
    })), (type === PlaceHolderTypes.NO_CHANNELS || type === PlaceHolderTypes.NO_MESSAGES || type === PlaceHolderTypes.WRONG) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-place-holder__body"
    }, type === PlaceHolderTypes.NO_CHANNELS && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-place-holder__body__icon",
      type: IconTypes.CHAT,
      fillColor: IconColors.ON_BACKGROUND_3,
      width: "64px",
      height: "64px"
    }), type === PlaceHolderTypes.WRONG && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-place-holder__body__icon",
      type: IconTypes.ERROR,
      fillColor: IconColors.ON_BACKGROUND_3,
      width: "64px",
      height: "64px"
    }), type === PlaceHolderTypes.NO_MESSAGES && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-place-holder__body__icon",
      type: IconTypes.MESSAGE,
      fillColor: IconColors.ON_BACKGROUND_3,
      width: "64px",
      height: "64px"
    }), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-place-holder__body__text",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_2
    }, type === PlaceHolderTypes.NO_CHANNELS && stringSet.PLACE_HOLDER__NO_CHANNEL, type === PlaceHolderTypes.WRONG && stringSet.PLACE_HOLDER__WRONG, type === PlaceHolderTypes.NO_MESSAGES && stringSet.PLACE_HOLDER__NO_MESSAGES), retryToConnect && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-place-holder__body__reconnect",
      role: "button",
      onClick: retryToConnect,
      onKeyPress: retryToConnect,
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-place-holder__body__reconnect__icon",
      type: IconTypes.REFRESH,
      fillColor: IconColors.PRIMARY,
      width: "20px",
      height: "20px"
    }), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-place-holder__body__reconnect__text",
      type: LabelTypography.BUTTON_1,
      color: LabelColors.PRIMARY
    }, stringSet.PLACE_HOLDER__RETRY_TO_CONNECT))), (type === PlaceHolderTypes.NO_RESULTS || type === PlaceHolderTypes.SEARCH_IN || type === PlaceHolderTypes.SEARCHING) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-place-holder__body--align-top"
    }, type === PlaceHolderTypes.SEARCH_IN && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-place-holder__body--align-top__text"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-place-holder__body--align-top__text__search-in",
      type: LabelTypography.BUTTON_2,
      color: LabelColors.ONBACKGROUND_2
    }, stringSet.SEARCH_IN), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-place-holder__body--align-top__text__channel-name",
      type: LabelTypography.BUTTON_2,
      color: LabelColors.PRIMARY
    }, "'".concat(searchInString)), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-place-holder__body--align-top__text__quote",
      type: LabelTypography.BUTTON_2,
      color: LabelColors.PRIMARY
    }, '\'')), type === PlaceHolderTypes.SEARCHING && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-place-hlder__body--align-top__searching",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_2
    }, stringSet.SEARCHING), type === PlaceHolderTypes.NO_RESULTS && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-place-hlder__body--align-top__no-result",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_2
    }, stringSet.NO_SEARCHED_MESSAGE)));
  }
  PlaceHolder.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    type: PropTypes.oneOfType([PropTypes.oneOf(Object.keys(PlaceHolderTypes)), PropTypes.string]).isRequired,
    retryToConnect: PropTypes.func,
    searchInString: PropTypes.string
  };
  PlaceHolder.defaultProps = {
    className: '',
    retryToConnect: null,
    searchInString: ''
  };

  /**
   * user profile goes deep inside the component tree
   * use this context as a short circuit to send in values
   */

  var UserProfileContext = /*#__PURE__*/React__default__default.createContext({
    disableUserProfile: true,
    isOpenChannel: false,
    renderUserProfile: null
  });

  var UserProfileProvider = function UserProfileProvider(props) {
    var children = props.children,
        className = props.className;
    return /*#__PURE__*/React__default__default.createElement(UserProfileContext.Provider, {
      value: props
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: className
    }, children));
  };

  UserProfileProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.any]).isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    isOpenChannel: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    disableUserProfile: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    renderUserProfile: PropTypes.func,
    className: PropTypes.string
  };
  UserProfileProvider.defaultProps = {
    className: null,
    isOpenChannel: false,
    disableUserProfile: false,
    renderUserProfile: null
  };

  var IconButton = /*#__PURE__*/React__default__default.forwardRef(function (props, ref) {
    var className = props.className,
        children = props.children,
        disabled = props.disabled,
        width = props.width,
        height = props.height,
        type = props.type,
        _onClick = props.onClick,
        _onBlur = props.onBlur,
        style = props.style;

    var _useState = React__default.useState(''),
        _useState2 = _slicedToArray(_useState, 2),
        pressed = _useState2[0],
        setPressed = _useState2[1];

    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/button-has-type
      React__default__default.createElement("button", {
        className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-iconbutton', pressed]).join(' '),
        disabled: disabled,
        ref: ref,
        type: type // eslint-disable-line react/button-has-type
        ,
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          height: height,
          width: width
        }),
        onClick: function onClick(e) {
          if (disabled) {
            return;
          }

          setPressed('sendbird-iconbutton--pressed');

          _onClick(e);
        },
        onBlur: function onBlur(e) {
          setPressed('');

          _onBlur(e);
        }
      }, /*#__PURE__*/React__default__default.createElement("span", {
        className: "sendbird-iconbutton__inner"
      }, children))
    );
  });
  IconButton.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.any]).isRequired,
    disabled: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    style: PropTypes.shape({})
  };
  IconButton.defaultProps = {
    className: '',
    disabled: false,
    width: '56px',
    height: '56px',
    type: 'button',
    onClick: function onClick() {},
    onBlur: function onBlur() {},
    style: {}
  };

  // simple component to be used as modal root
  var MODAL_ROOT = 'sendbird-modal-root';

  var Type$1 = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    DANGER: 'DANGER',
    DISABLED: 'DISABLED'
  };
  var Size = {
    BIG: 'BIG',
    SMALL: 'SMALL'
  };

  function changeTypeToClassName(type) {
    switch (type) {
      case Type$1.PRIMARY:
        return 'sendbird-button--primary';

      case Type$1.SECONDARY:
        return 'sendbird-button--secondary';

      case Type$1.DANGER:
        return 'sendbird-button--danger';

      case Type$1.DISABLED:
        return 'sendbird-button--disabled';

      default:
        return null;
    }
  }
  function changeSizeToClassName(size) {
    switch (size) {
      case Size.BIG:
        return 'sendbird-button--big';

      case Size.SMALL:
        return 'sendbird-button--small';

      default:
        return null;
    }
  }

  function Button(_ref) {
    var className = _ref.className,
        type = _ref.type,
        size = _ref.size,
        children = _ref.children,
        disabled = _ref.disabled,
        onClick = _ref.onClick;
    var injectingClassNames = [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-button', disabled ? 'sendbird-button__disabled' : '', changeTypeToClassName(type), changeSizeToClassName(size)]).join(' ');
    return /*#__PURE__*/React__default__default.createElement("button", {
      className: injectingClassNames,
      type: "button",
      onClick: onClick,
      disabled: disabled
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-button__text",
      type: LabelTypography.BUTTON_1,
      color: LabelColors.ONCONTENT_1
    }, children));
  }
  var ButtonTypes = Type$1;
  var ButtonSizes = Size;
  Button.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    type: PropTypes.oneOf(Object.keys(Type$1)),
    size: PropTypes.oneOf(Object.keys(Size)),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };
  Button.defaultProps = {
    className: '',
    type: Type$1.PRIMARY,
    size: Size.BIG,
    children: 'Button',
    disabled: false,
    onClick: function onClick() {}
  };

  var ModalHeader = function ModalHeader(_ref) {
    var titleText = _ref.titleText;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-modal__header"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.H_1,
      color: LabelColors.ONBACKGROUND_1
    }, titleText));
  };
  ModalHeader.propTypes = {
    titleText: PropTypes.string.isRequired
  };
  var ModalBody = function ModalBody(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-modal__body"
    }, children);
  };
  ModalBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired)])
  };
  ModalBody.defaultProps = {
    children: null
  };
  var ModalFooter = function ModalFooter(_ref3) {
    var onSubmit = _ref3.onSubmit,
        onCancel = _ref3.onCancel,
        _ref3$disabled = _ref3.disabled,
        disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
        submitText = _ref3.submitText,
        type = _ref3.type;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-modal__footer"
    }, /*#__PURE__*/React__default__default.createElement(Button, {
      type: ButtonTypes.SECONDARY,
      onClick: onCancel
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.BUTTON_1,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.BUTTON__CANCEL)), /*#__PURE__*/React__default__default.createElement(Button, {
      type: type,
      disabled: disabled,
      onClick: onSubmit
    }, submitText));
  };
  ModalFooter.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitText: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string
  };
  ModalFooter.defaultProps = {
    disabled: false,
    type: ButtonTypes.DANGER
  };

  function Modal(props) {
    var children = props.children,
        onCancel = props.onCancel,
        onSubmit = props.onSubmit,
        disabled = props.disabled,
        submitText = props.submitText,
        titleText = props.titleText,
        hideFooter = props.hideFooter,
        type = props.type;
    return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-modal"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-modal__content"
    }, /*#__PURE__*/React__default__default.createElement(ModalHeader, {
      titleText: titleText
    }), /*#__PURE__*/React__default__default.createElement(ModalBody, null, children), !hideFooter && /*#__PURE__*/React__default__default.createElement(ModalFooter, {
      disabled: disabled,
      onCancel: onCancel,
      onSubmit: onSubmit,
      submitText: submitText,
      type: type
    }), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-modal__close"
    }, /*#__PURE__*/React__default__default.createElement(IconButton, {
      width: "32px",
      height: "32px",
      onClick: onCancel
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.CLOSE,
      fillColor: IconColors.DEFAULT,
      width: "24px",
      height: "24px"
    })))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-modal__backdrop"
    })), document.getElementById(MODAL_ROOT));
  }

  Modal.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    hideFooter: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.string
  };
  Modal.defaultProps = {
    children: null,
    hideFooter: false,
    disabled: false,
    type: ButtonTypes.DANGER
  };

  var Colors$2 = {
    ONBACKGROUND_1: 'ONBACKGROUND_1',
    ONBACKGROUND_2: 'ONBACKGROUND_2',
    ONBACKGROUND_3: 'ONBACKGROUND_3',
    ONBACKGROUND_4: 'ONBACKGROUND_4',
    ONCONTENT_1: 'ONCONTENT_1',
    PRIMARY: 'PRIMARY',
    ERROR: 'ERROR'
  };
  function changeColorToClassName$2(color) {
    switch (color) {
      case Colors$2.ONBACKGROUND_1:
        return 'sendbird-color--onbackground-1';

      case Colors$2.ONBACKGROUND_2:
        return 'sendbird-color--onbackground-2';

      case Colors$2.ONBACKGROUND_3:
        return 'sendbird-color--onbackground-3';

      case Colors$2.ONBACKGROUND_4:
        return 'sendbird-color--onbackground-4';

      case Colors$2.ONCONTENT_1:
        return 'sendbird-color--oncontent-1';

      case Colors$2.PRIMARY:
        return 'sendbird-color--primary';

      case Colors$2.ERROR:
        return 'sendbird-color--error';

      default:
        return null;
    }
  }

  function TextButton(_ref) {
    var className = _ref.className,
        color = _ref.color,
        disabled = _ref.disabled,
        notUnderline = _ref.notUnderline,
        onClick = _ref.onClick,
        children = _ref.children;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), [changeColorToClassName$2(color), notUnderline ? 'sendbird-textbutton--not-underline' : 'sendbird-textbutton', disabled ? 'sendbird-textbutton--disabled' : '']).join(' '),
      role: "button",
      tabIndex: 0,
      onClick: onClick,
      onKeyPress: onClick
    }, children);
  }
  TextButton.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    color: PropTypes.string,
    disabled: PropTypes.bool,
    notUnderline: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
  };
  TextButton.defaultProps = {
    className: '',
    color: Colors$2.ONBACKGROUND_1,
    disabled: false,
    notUnderline: false,
    onClick: function onClick() {}
  };

  var SEND_MESSAGE_START = 'SEND_MESSAGE_START';
  var SEND_USER_MESSAGE = 'SEND_USER_MESSAGE';
  var SEND_FILE_MESSAGE = 'SEND_FILE_MESSAGE';
  var UPDATE_USER_MESSAGE = 'UPDATE_USER_MESSAGE';
  var DELETE_MESSAGE = 'DELETE_MESSAGE';
  var LEAVE_CHANNEL = 'LEAVE_CHANNEL';
  var CREATE_CHANNEL = 'CREATE_CHANNEL';

  var getSdk = function getSdk(store) {
    var _store$stores = store.stores,
        stores = _store$stores === void 0 ? {} : _store$stores;
    var _stores$sdkStore = stores.sdkStore,
        sdkStore = _stores$sdkStore === void 0 ? {} : _stores$sdkStore;
    var sdk = sdkStore.sdk;
    return sdk;
  };
  var getPubSub = function getPubSub(store) {
    var _store$config = store.config,
        config = _store$config === void 0 ? {} : _store$config;
    var pubSub = config.pubSub;
    return pubSub;
  }; // SendBird disconnect. Invalidates currentUser
  // eslint-disable-next-line max-len

  var getConnect = function getConnect(store) {
    return function (userId, accessToken) {
      return new Promise(function (resolve, reject) {
        var sdk = getSdk(store);

        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        if (!accessToken) {
          sdk.connect(userId).then(function (res) {
            return resolve(res);
          }).catch(function (err) {
            return reject(err);
          });
        } else {
          sdk.connect(userId, accessToken).then(function (res) {
            return resolve(res);
          }).catch(function (err) {
            return reject(err);
          });
        }
      });
    };
  }; // SendBird disconnect. Invalidates currentUser

  var getDisconnect = function getDisconnect(store) {
    return function () {
      return new Promise(function (resolve, reject) {
        var sdk = getSdk(store);

        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.disconnect().then(function (res) {
          return resolve(res);
        }).catch(function (err) {
          return reject(err);
        });
      });
    };
  }; // Using the updateCurrentUserInfo() method
  // you can update a user's nickname and profile image with a URL
  // eslint-disable-next-line max-len

  var getUpdateUserInfo = function getUpdateUserInfo(store) {
    return function (nickName, profileUrl) {
      return new Promise(function (resolve, reject) {
        var sdk = getSdk(store);

        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.updateCurrentUserInfo(nickName, profileUrl).then(function (res) {
          return resolve(res);
        }).catch(function (err) {
          return reject(err);
        });
      });
    };
  };
  var getSendUserMessage = function getSendUserMessage(store) {
    return function (channelUrl, userMessageParams) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          var promisify = function promisify() {
            var pendingMsg = null;
            var pendingPromise = new Promise(function (resolve_, reject_) {
              pendingMsg = channel.sendUserMessage(userMessageParams, function (res, err) {
                var swapParams = sdk.getErrorFirstCallback();
                var message = res;
                var error = err;

                if (swapParams) {
                  message = err;
                  error = res;
                }

                if (error) {
                  reject_(error);
                  return;
                }

                resolve_(message);
                pubsub.publish(SEND_USER_MESSAGE, {
                  message: message,
                  channel: channel
                });
              });
              pubsub.publish(SEND_MESSAGE_START, {
                message: pendingMsg,
                channel: channel
              });
            });

            pendingPromise.get = function () {
              return pendingMsg;
            };

            return pendingPromise;
          };

          resolve(promisify());
        }).catch(reject);
      });
    };
  };
  var getSendFileMessage = function getSendFileMessage(store) {
    return function (channelUrl, fileMessageParams) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          var promisify = function promisify() {
            var pendingMsg = null;
            var pendingPromise = new Promise(function (resolve_, reject_) {
              pendingMsg = channel.sendFileMessage(fileMessageParams, function (res, err) {
                var swapParams = sdk.getErrorFirstCallback();
                var message = res;
                var error = err;

                if (swapParams) {
                  message = err;
                  error = res;
                }

                if (error) {
                  reject_(error);
                  return;
                }

                resolve_(message);
                pubsub.publish(SEND_FILE_MESSAGE, {
                  message: message,
                  channel: channel
                });
              });
            });

            if (fileMessageParams.file) {
              // keep the file's local version in pendingMsg.localUrl
              // because promise doesnt allow overriding of pendingMsg.url
              // eslint-disable-next-line no-param-reassign
              pendingMsg.localUrl = URL.createObjectURL(fileMessageParams.file);
            }

            if (fileMessageParams.fileUrl) {
              // eslint-disable-next-line no-param-reassign
              pendingMsg.localUrl = fileMessageParams.fileUrl;
            } // eslint-disable-next-line no-param-reassign


            pendingMsg.requestState = 'pending';
            pubsub.publish(SEND_MESSAGE_START, {
              message: pendingMsg,
              channel: channel
            });

            pendingPromise.get = function () {
              return pendingMsg;
            };

            return pendingPromise;
          };

          resolve(promisify());
        }).catch(reject);
      });
    };
  };
  var getUpdateUserMessage = function getUpdateUserMessage(store) {
    return function (channelUrl, messageId, params) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          channel.updateUserMessage(messageId, params, function (res, err) {
            var swapParams = sdk.getErrorFirstCallback();
            var message = res;
            var error = err;

            if (swapParams) {
              message = err;
              error = res;
            }

            if (error) {
              reject(error);
              return;
            }

            resolve(message);
            pubsub.publish(UPDATE_USER_MESSAGE, {
              message: message,
              channel: channel,
              // workaround for updating channelPreview on message-edit
              // https://sendbird.atlassian.net/browse/UIKIT-268
              fromSelector: true
            });
          });
        }).catch(reject);
      });
    };
  };
  var getDeleteMessage = function getDeleteMessage(store) {
    return function (channelUrl, message) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          var messageId = message.messageId;
          channel.deleteMessage(message, function (res, err) {
            var swapParams = sdk.getErrorFirstCallback();
            var error = err;

            if (swapParams) {
              error = res;
            }

            if (error) {
              reject(error);
              return;
            }

            resolve(message);
            pubsub.publish(DELETE_MESSAGE, {
              messageId: messageId,
              channel: channel
            });
          });
        }).catch(reject);
      });
    };
  };
  var getResendUserMessage = function getResendUserMessage(store) {
    return function (channelUrl, failedMessage) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          channel.resendUserMessage(failedMessage).then(function (message) {
            resolve(message);
            pubsub.publish(SEND_USER_MESSAGE, {
              message: message,
              channel: channel
            });
          }).catch(reject);
        }).catch(reject);
      });
    };
  };
  var getResendFileMessage = function getResendFileMessage(store) {
    return function (channelUrl, failedMessage) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          channel.resendFileMessage(failedMessage).then(function (message) {
            resolve(message);
            pubsub.publish(SEND_FILE_MESSAGE, {
              message: message,
              channel: channel
            });
          }).catch(reject);
        }).catch(reject);
      });
    };
  };
  var getCreateChannel = function getCreateChannel(store) {
    return function (params) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.createChannel(params).then(function (channel) {
          resolve(channel);
          pubsub.publish(CREATE_CHANNEL, {
            channel: channel
          });
        }).catch(reject);
      });
    };
  };
  var getLeaveChannel = function getLeaveChannel(store) {
    return function (channelUrl) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          channel.leave().then(function () {
            resolve(channel);
            pubsub.publish(LEAVE_CHANNEL, {
              channel: channel
            });
          }).catch(reject);
        }).catch(reject);
      });
    };
  };
  var getFreezeChannel = function getFreezeChannel(store) {
    return function (channelUrl) {
      var sdk = getSdk(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          channel.freeze().then(function () {
            // do not need pubsub here - event listener works
            resolve(channel);
          }).catch(reject);
        }).catch(reject);
      });
    };
  };
  var getUnFreezeChannel = function getUnFreezeChannel(store) {
    return function (channelUrl) {
      var sdk = getSdk(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          channel.unfreeze().then(function () {
            // do not need pubsub here - event listener works
            resolve(channel);
          }).catch(reject);
        }).catch(reject);
      });
    };
  };
  var getCreateOpenChannel = function getCreateOpenChannel(store) {
    return function (params) {
      var sdk = getSdk(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.OpenChannel.createChannel(params).then(function (channel) {
          resolve(channel);
        }).catch(reject);
      });
    };
  };
  var enterOpenChannel = function enterOpenChannel(store) {
    return function (channelUrl) {
      var sdk = getSdk(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.OpenChannel.getChannel(channelUrl, function (openChannel, error) {
          if (error) {
            reject(new Error(error));
            return;
          }

          openChannel.enter(function (response, enterError) {
            if (error) {
              reject(new Error(enterError));
              return;
            }

            resolve(response);
          });
        });
      });
    };
  };
  var exitOpenChannel = function exitOpenChannel(store) {
    return function (channelUrl) {
      var sdk = getSdk(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.OpenChannel.getChannel(channelUrl, function (openChannel, error) {
          if (error) {
            reject(new Error(error));
            return;
          }

          openChannel.exit(function (response, exitError) {
            if (error) {
              reject(new Error(exitError));
              return;
            }

            resolve(response);
          });
        });
      });
    };
  };
  var getOpenChannelSendUserMessage = function getOpenChannelSendUserMessage(store) {
    return function (channelUrl, userMessageParams) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
          var promisify = function promisify() {
            var pendingMsg = null;
            var pendingPromise = new Promise(function (resolve_, reject_) {
              pendingMsg = channel.sendUserMessage(userMessageParams, function (res, err) {
                var swapParams = sdk.getErrorFirstCallback();
                var message = res;
                var error = err;

                if (swapParams) {
                  message = err;
                  error = res;
                }

                if (error) {
                  reject_(error);
                  return;
                }

                resolve_(message);
                pubsub.publish(SEND_USER_MESSAGE, {
                  message: message,
                  channel: channel
                });
              });
              pubsub.publish(SEND_MESSAGE_START, {
                message: pendingMsg,
                channel: channel
              });
            });

            pendingPromise.get = function () {
              return pendingMsg;
            };

            return pendingPromise;
          };

          resolve(promisify());
        }).catch(reject);
      });
    };
  };
  var getOpenChannelSendFileMessage = function getOpenChannelSendFileMessage(store) {
    return function (channelUrl, fileMessageParams) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
          var promisify = function promisify() {
            var pendingMsg = null;
            var pendingPromise = new Promise(function (resolve_, reject_) {
              pendingMsg = channel.sendFileMessage(fileMessageParams, function (res, err) {
                var swapParams = sdk.getErrorFirstCallback();
                var message = res;
                var error = err;

                if (swapParams) {
                  message = err;
                  error = res;
                }

                if (error) {
                  reject_(error);
                  return;
                }

                resolve_(message);
                pubsub.publish(SEND_FILE_MESSAGE, {
                  message: message,
                  channel: channel
                });
              });
            });

            if (fileMessageParams.file) {
              // keep the file's local version in pendingMsg.localUrl
              // because promise doesnt allow overriding of pendingMsg.url
              // eslint-disable-next-line no-param-reassign
              pendingMsg.localUrl = URL.createObjectURL(fileMessageParams.file);
            }

            if (fileMessageParams.fileUrl) {
              // eslint-disable-next-line no-param-reassign
              pendingMsg.localUrl = fileMessageParams.fileUrl;
            } // eslint-disable-next-line no-param-reassign


            pendingMsg.requestState = 'pending';
            pubsub.publish(SEND_MESSAGE_START, {
              message: pendingMsg,
              channel: channel
            });

            pendingPromise.get = function () {
              return pendingMsg;
            };

            return pendingPromise;
          };

          resolve(promisify());
        }).catch(reject);
      });
    };
  };
  var getOpenChannelUpdateUserMessage = function getOpenChannelUpdateUserMessage(store) {
    return function (channelUrl, messageId, params) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
          channel.updateUserMessage(messageId, params, function (res, err) {
            var swapParams = sdk.getErrorFirstCallback();
            var message = res;
            var error = err;

            if (swapParams) {
              message = err;
              error = res;
            }

            if (error) {
              reject(error);
              return;
            }

            resolve(message);
            pubsub.publish(UPDATE_USER_MESSAGE, {
              message: message,
              channel: channel,
              // workaround for updating channelPreview on message-edit
              // https://sendbird.atlassian.net/browse/UIKIT-268
              fromSelector: true
            });
          });
        }).catch(reject);
      });
    };
  };
  var getOpenChannelDeleteMessage = function getOpenChannelDeleteMessage(store) {
    return function (channelUrl, message) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
          var messageId = message.messageId;
          channel.deleteMessage(message, function (res, err) {
            var swapParams = sdk.getErrorFirstCallback();
            var error = err;

            if (swapParams) {
              error = res;
            }

            if (error) {
              reject(error);
              return;
            }

            resolve(message);
            pubsub.publish(DELETE_MESSAGE, {
              messageId: messageId,
              channel: channel
            });
          });
        }).catch(reject);
      });
    };
  };
  var getOpenChannelResendUserMessage = function getOpenChannelResendUserMessage(store) {
    return function (channelUrl, failedMessage) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
          channel.resendUserMessage(failedMessage).then(function (message) {
            resolve(message);
            pubsub.publish(SEND_USER_MESSAGE, {
              message: message,
              channel: channel
            });
          }).catch(reject);
        }).catch(reject);
      });
    };
  };
  var getOpenChannelResendFileMessage = function getOpenChannelResendFileMessage(store) {
    return function (channelUrl, failedMessage) {
      var sdk = getSdk(store);
      var pubsub = getPubSub(store);
      return new Promise(function (resolve, reject) {
        if (!sdk) {
          reject(new Error('Sdk not found'));
        }

        sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
          channel.resendFileMessage(failedMessage).then(function (message) {
            resolve(message);
            pubsub.publish(SEND_FILE_MESSAGE, {
              message: message,
              channel: channel
            });
          }).catch(reject);
        }).catch(reject);
      });
    };
  };
  var selectors = {
    getSdk: getSdk,
    getConnect: getConnect,
    getDisconnect: getDisconnect,
    getUpdateUserInfo: getUpdateUserInfo,
    getSendUserMessage: getSendUserMessage,
    getSendFileMessage: getSendFileMessage,
    getUpdateUserMessage: getUpdateUserMessage,
    getDeleteMessage: getDeleteMessage,
    getResendUserMessage: getResendUserMessage,
    getResendFileMessage: getResendFileMessage,
    getFreezeChannel: getFreezeChannel,
    getUnFreezeChannel: getUnFreezeChannel,
    getCreateChannel: getCreateChannel,
    getLeaveChannel: getLeaveChannel,
    getCreateOpenChannel: getCreateOpenChannel,
    getEnterOpenChannel: enterOpenChannel,
    getExitOpenChannel: exitOpenChannel,
    getOpenChannelSendUserMessage: getOpenChannelSendUserMessage,
    getOpenChannelSendFileMessage: getOpenChannelSendFileMessage,
    getOpenChannelUpdateUserMessage: getOpenChannelUpdateUserMessage,
    getOpenChannelDeleteMessage: getOpenChannelDeleteMessage,
    getOpenChannelResendUserMessage: getOpenChannelResendUserMessage,
    getOpenChannelResendFileMessage: getOpenChannelResendFileMessage
  };

  function UserProfile(_a) {
    var user = _a.user,
        currentUserId = _a.currentUserId,
        sdk = _a.sdk,
        logger = _a.logger,
        _b = _a.disableMessaging,
        disableMessaging = _b === void 0 ? false : _b,
        createChannel = _a.createChannel,
        onSuccess = _a.onSuccess;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird__user-profile"
    }, /*#__PURE__*/React__default__default.createElement("section", {
      className: "sendbird__user-profile-avatar"
    }, /*#__PURE__*/React__default__default.createElement(Avatar$1, {
      height: "80px",
      width: "80px",
      src: user.profileUrl
    })), /*#__PURE__*/React__default__default.createElement("section", {
      className: "sendbird__user-profile-name"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, user.nickname || stringSet.NO_NAME)), user.userId !== currentUserId && !disableMessaging && /*#__PURE__*/React__default__default.createElement("section", {
      className: "sendbird__user-profile-message"
    }, /*#__PURE__*/React__default__default.createElement(Button, {
      type: ButtonTypes.SECONDARY,
      onClick: function onClick() {
        var params = new sdk.GroupChannelParams();
        params.isDistinct = true;
        params.addUserIds([user.userId]);
        onSuccess();
        createChannel(params).then(function (groupChannel) {
          logger.info('UserProfile, channel create', groupChannel);
        });
      }
    }, stringSet.USER_PROFILE__MESSAGE)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird__user-profile-seperator"
    }), /*#__PURE__*/React__default__default.createElement("section", {
      className: "sendbird__user-profile-userId"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird__user-profile-userId--label",
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, stringSet.USER_PROFILE__USER_ID), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird__user-profile-userId--value",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_1
    }, user.userId)));
  }

  var mapStoreToProps = function mapStoreToProps(store) {
    return {
      sdk: getSdk(store),
      createChannel: getCreateChannel(store),
      logger: store.config.logger,
      pubsub: store.config.pubSub
    };
  };

  var ConnectedUserProfile = withSendbirdContext(UserProfile, mapStoreToProps);

  var MenuItems$1 = /*#__PURE__*/function (_Component) {
    _inherits(MenuItems, _Component);

    var _super = _createSuper(MenuItems);

    function MenuItems(props) {
      var _this;

      _classCallCheck(this, MenuItems);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "showParent", function () {
        var _this$props$parentCon = _this.props.parentContainRef,
            parentContainRef = _this$props$parentCon === void 0 ? {} : _this$props$parentCon;
        var current = parentContainRef.current;

        if (parentContainRef && current) {
          current.classList.add('sendbird-icon--pressed');
        }
      });

      _defineProperty(_assertThisInitialized(_this), "hideParent", function () {
        var _this$props$parentCon2 = _this.props.parentContainRef,
            parentContainRef = _this$props$parentCon2 === void 0 ? {} : _this$props$parentCon2;
        var current = parentContainRef.current;

        if (parentContainRef && current) {
          current.classList.remove('sendbird-icon--pressed');
        }
      });

      _defineProperty(_assertThisInitialized(_this), "setupEvents", function () {
        var closeDropdown = _this.props.closeDropdown;

        var _assertThisInitialize = _assertThisInitialized(_this),
            menuRef = _assertThisInitialize.menuRef;

        var handleClickOutside = function handleClickOutside(event) {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeDropdown();
          }
        };

        _this.setState({
          handleClickOutside: handleClickOutside
        });

        document.addEventListener('mousedown', handleClickOutside);
      });

      _defineProperty(_assertThisInitialized(_this), "cleanUpEvents", function () {
        var handleClickOutside = _this.state.handleClickOutside;
        document.removeEventListener('mousedown', handleClickOutside);
      });

      _defineProperty(_assertThisInitialized(_this), "getMenuPosition", function () {
        var _this$props = _this.props,
            parentRef = _this$props.parentRef,
            openLeft = _this$props.openLeft;
        var parentRect = parentRef.current.getBoundingClientRect();
        var x = parentRect.x || parentRect.left;
        var y = parentRect.y || parentRect.top;
        var menuStyle = {
          top: y,
          left: x
        };
        if (!_this.menuRef.current) return menuStyle;
        var _window = window,
            innerWidth = _window.innerWidth,
            innerHeight = _window.innerHeight;

        var rect = _this.menuRef.current.getBoundingClientRect();

        if (y + rect.height > innerHeight) {
          menuStyle.top -= rect.height;
        }

        if (x + rect.width > innerWidth && !openLeft) {
          menuStyle.left -= rect.width;
        }

        if (menuStyle.top < 0) {
          menuStyle.top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
        }

        if (menuStyle.left < 0) {
          menuStyle.left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
        }

        menuStyle.top += 32;

        if (openLeft) {
          var padding = Number.isNaN(rect.width - 30) ? 108 // default
          : rect.width - 30;
          menuStyle.left -= padding;
        }

        return _this.setState({
          menuStyle: menuStyle
        });
      });

      _this.menuRef = /*#__PURE__*/React__default__default.createRef();
      _this.state = {
        menuStyle: {},
        handleClickOutside: function handleClickOutside() {}
      };
      return _this;
    }

    _createClass(MenuItems, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setupEvents();
        this.getMenuPosition();
        this.showParent();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.cleanUpEvents();
        this.hideParent();
      }
    }, {
      key: "render",
      value: function render() {
        var menuStyle = this.state.menuStyle;
        var _this$props2 = this.props,
            children = _this$props2.children,
            style = _this$props2.style;
        return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-dropdown__menu-backdrop"
        }), /*#__PURE__*/React__default__default.createElement("ul", {
          className: "sendbird-dropdown__menu",
          ref: this.menuRef,
          style: _objectSpread2({
            display: 'inline-block',
            position: 'fixed',
            left: "".concat(Math.round(menuStyle.left), "px"),
            top: "".concat(Math.round(menuStyle.top), "px")
          }, style)
        }, children)), document.getElementById('sendbird-dropdown-portal'));
      }
    }]);

    return MenuItems;
  }(React__default.Component);
  MenuItems$1.propTypes = {
    closeDropdown: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
    style: PropTypes.shape({}),
    // https://stackoverflow.com/a/51127130
    parentRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })]).isRequired,
    parentContainRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })]).isRequired,
    openLeft: PropTypes.bool
  };
  MenuItems$1.defaultProps = {
    style: {},
    openLeft: false
  };

  var componentClassName = 'sendbird-sort-by-row';
  function SortByRow(_ref) {
    var className = _ref.className,
        maxItemCount = _ref.maxItemCount,
        itemWidth = _ref.itemWidth,
        itemHeight = _ref.itemHeight,
        children = _ref.children;

    if (children.length > maxItemCount) {
      var result = [];

      for (var i = 0; i < children.length; i += maxItemCount) {
        result.push( /*#__PURE__*/React__default__default.createElement("div", {
          className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), [componentClassName]).join(' '),
          key: className + i,
          style: {
            width: itemWidth * maxItemCount,
            height: itemHeight
          }
        }, children.slice(i, i + maxItemCount)));
      }

      return result;
    }

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), [componentClassName]).join(' '),
      style: {
        width: itemWidth * children.length,
        height: itemHeight
      }
    }, children);
  }
  SortByRow.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    maxItemCount: PropTypes.number.isRequired,
    itemWidth: PropTypes.number.isRequired,
    itemHeight: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired
  };
  SortByRow.defaultProps = {
    className: ''
  };

  var EmojiListItems$1 = /*#__PURE__*/function (_Component) {
    _inherits(EmojiListItems, _Component);

    var _super = _createSuper(EmojiListItems);

    function EmojiListItems(props) {
      var _this;

      _classCallCheck(this, EmojiListItems);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "showParent", function () {
        var _this$props$parentCon = _this.props.parentContainRef,
            parentContainRef = _this$props$parentCon === void 0 ? {} : _this$props$parentCon;
        var current = parentContainRef.current;

        if (parentContainRef && current) {
          current.classList.add('sendbird-reactions--pressed');
        }
      });

      _defineProperty(_assertThisInitialized(_this), "hideParent", function () {
        var _this$props$parentCon2 = _this.props.parentContainRef,
            parentContainRef = _this$props$parentCon2 === void 0 ? {} : _this$props$parentCon2;
        var current = parentContainRef.current;

        if (parentContainRef && current) {
          current.classList.remove('sendbird-reactions--pressed');
        }
      });

      _defineProperty(_assertThisInitialized(_this), "setupEvents", function () {
        var closeDropdown = _this.props.closeDropdown;

        var _assertThisInitialize = _assertThisInitialized(_this),
            reactionRef = _assertThisInitialize.reactionRef;

        var handleClickOutside = function handleClickOutside(event) {
          if (reactionRef.current && !reactionRef.current.contains(event.target)) {
            closeDropdown();
          }
        };

        _this.setState({
          handleClickOutside: handleClickOutside
        });

        document.addEventListener('mousedown', handleClickOutside);
      });

      _defineProperty(_assertThisInitialized(_this), "cleanUpEvents", function () {
        var handleClickOutside = _this.state.handleClickOutside;
        document.removeEventListener('mousedown', handleClickOutside);
      });

      _defineProperty(_assertThisInitialized(_this), "getBarPosition", function () {
        // calculate the location that the context menu should be
        var _this$props = _this.props,
            parentRef = _this$props.parentRef,
            spaceFromTrigger = _this$props.spaceFromTrigger;
        var spaceFromTriggerX = spaceFromTrigger.x || 0;
        var spaceFromTriggerY = spaceFromTrigger.y || 0;
        var parentRect = parentRef.current.getBoundingClientRect();
        var x = parentRect.x || parentRect.left;
        var y = parentRect.y || parentRect.top;
        var reactionStyle = {
          top: y,
          left: x
        };
        if (!_this.reactionRef.current) return reactionStyle;

        var rect = _this.reactionRef.current.getBoundingClientRect();

        if (reactionStyle.top < rect.height) {
          reactionStyle.top += parentRect.height;
          reactionStyle.top += spaceFromTriggerY;
        } else {
          reactionStyle.top -= rect.height;
          reactionStyle.top -= spaceFromTriggerY;
        }

        reactionStyle.left -= rect.width / 2;
        reactionStyle.left += parentRect.height / 2 - 2;
        reactionStyle.left += spaceFromTriggerX;
        var maximumLeft = window.innerWidth - rect.width;

        if (maximumLeft < reactionStyle.left) {
          reactionStyle.left = maximumLeft;
        }

        if (reactionStyle.left < 0) {
          reactionStyle.left = 0;
        }

        return _this.setState({
          reactionStyle: reactionStyle
        });
      });

      _this.reactionRef = /*#__PURE__*/React__default__default.createRef();
      _this.state = {
        reactionStyle: {},
        handleClickOutside: function handleClickOutside() {}
      };
      return _this;
    }

    _createClass(EmojiListItems, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setupEvents();
        this.getBarPosition();
        this.showParent();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.cleanUpEvents();
        this.hideParent();
      }
    }, {
      key: "render",
      value: function render() {
        var reactionStyle = this.state.reactionStyle;
        var children = this.props.children;
        return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-dropdown__menu-backdrop"
        }), /*#__PURE__*/React__default__default.createElement("ul", {
          className: "sendbird-dropdown__reaction-bar",
          ref: this.reactionRef,
          style: {
            display: 'inline-block',
            position: 'fixed',
            left: "".concat(Math.round(reactionStyle.left), "px"),
            top: "".concat(Math.round(reactionStyle.top), "px")
          }
        }, /*#__PURE__*/React__default__default.createElement(SortByRow, {
          className: "sendbird-dropdown__reaction-bar__row",
          maxItemCount: 8,
          itemWidth: 44,
          itemHeight: 40
        }, children))), document.getElementById('sendbird-emoji-list-portal'));
      }
    }]);

    return EmojiListItems;
  }(React__default.Component);
  EmojiListItems$1.propTypes = {
    closeDropdown: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
    parentRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })]).isRequired,
    parentContainRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })]).isRequired,
    spaceFromTrigger: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  };
  EmojiListItems$1.defaultProps = {
    spaceFromTrigger: {}
  };

  var ENTER = 13;
  var MenuItems = MenuItems$1;
  var EmojiListItems = EmojiListItems$1;
  var MenuItem = function MenuItem(_ref) {
    var className = _ref.className,
        children = _ref.children,
        onClick = _ref.onClick;
    return /*#__PURE__*/React__default__default.createElement("li", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-dropdown__menu-item']).join(' '),
      role: "menuitem",
      onClick: onClick,
      onKeyPress: function onKeyPress(e) {
        if (e.keyCode === ENTER) {
          onClick(e);
        }
      },
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-dropdown__menu-item__text",
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_1
    }, children));
  };
  MenuItem.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    onClick: PropTypes.func.isRequired
  };
  MenuItem.defaultProps = {
    className: ''
  }; // Root components should be appended before ContextMenu is rendered
  function ContextMenu(_ref2) {
    var menuTrigger = _ref2.menuTrigger,
        menuItems = _ref2.menuItems;

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showMenu = _useState2[0],
        setShowMenu = _useState2[1];

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-context-menu",
      style: {
        display: 'inline'
      }
    }, menuTrigger(function () {
      return setShowMenu(!showMenu);
    }), showMenu && menuItems(function () {
      return setShowMenu(false);
    }));
  }
  ContextMenu.propTypes = {
    menuTrigger: PropTypes.func.isRequired,
    menuItems: PropTypes.func.isRequired
  };

  var MessageStatusType = {
    PENDING: 'PENDING',
    SENT: 'SENT',
    DELIVERED: 'DELIVERED',
    READ: 'READ',
    FAILED: 'FAILED'
  };

  var hasSameMembers = function hasSameMembers(a, b) {
    if (a === b) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    var sortedA = __spreadArray([], a).sort();

    var sortedB = __spreadArray([], b).sort();

    for (var i = 0; i < sortedA.length; ++i) {
      if (sortedA[i] !== sortedB[i]) {
        return false;
      }
    }

    return true;
  };
  var isFriend = function isFriend(user) {
    return !!(user.friendDiscoveryKey || user.friendName);
  };
  var filterMessageListParams = function filterMessageListParams(params, message) {
    var _a, _b, _c;

    if ((params === null || params === void 0 ? void 0 : params.messageType) && params.messageType !== message.messageType) {
      return false;
    }

    if (((_a = params === null || params === void 0 ? void 0 : params.customTypes) === null || _a === void 0 ? void 0 : _a.length) > 0 && !params.customTypes.includes(message.customType)) {
      return false;
    }

    if (((_b = params === null || params === void 0 ? void 0 : params.senderUserIds) === null || _b === void 0 ? void 0 : _b.length) > 0) {
      if ((message === null || message === void 0 ? void 0 : message.isUserMessage()) || message.isFileMessage()) {
        if (!((_c = params === null || params === void 0 ? void 0 : params.senderUserIds) === null || _c === void 0 ? void 0 : _c.includes(message.sender.userId))) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  };
  var filterChannelListParams = function filterChannelListParams(params, channel, currentUserId) {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    if (!(params === null || params === void 0 ? void 0 : params.includeEmpty) && (channel === null || channel === void 0 ? void 0 : channel.lastMessage) && channel.lastMessage === null) {
      return false;
    }

    if (((_a = params === null || params === void 0 ? void 0 : params._searchFilter) === null || _a === void 0 ? void 0 : _a.search_query) && ((_b = params._searchFilter.search_fields) === null || _b === void 0 ? void 0 : _b.length) > 0) {
      var searchFilter = params._searchFilter;
      var searchQuery_1 = searchFilter.search_query;
      var searchFields = searchFilter.search_fields;

      if (searchQuery_1 && searchFields && searchFields.length > 0) {
        if (!searchFields.some(function (searchField) {
          switch (searchField) {
            case 'channel_name':
              {
                return channel.name.toLowerCase().includes(searchQuery_1.toLowerCase());
              }

            case 'member_nickname':
              {
                return channel.members.some(function (member) {
                  return member.nickname.toLowerCase().includes(searchQuery_1.toLowerCase());
                });
              }

            default:
              {
                return true;
              }
          }
        })) {
          return false;
        }
      }
    }

    if (((_d = (_c = params === null || params === void 0 ? void 0 : params._userIdsFilter) === null || _c === void 0 ? void 0 : _c.userIds) === null || _d === void 0 ? void 0 : _d.length) > 0) {
      var userIdsFilter = params._userIdsFilter;
      var includeMode = userIdsFilter.includeMode,
          queryType = userIdsFilter.queryType;
      var userIds = userIdsFilter.userIds;
      var memberIds_1 = channel.members.map(function (member) {
        return member.userId;
      });

      if (!includeMode) {
        // exact match
        if (!userIds.includes(currentUserId)) {
          userIds.push(currentUserId); // add the caller's userId if not added already.
        }

        if (channel.members.length > userIds.length) {
          return false; // userIds may contain one or more non-member(s).
        }

        if (!hasSameMembers(userIds, memberIds_1)) {
          return false;
        }
      } else if (userIds.length > 0) {
        // inclusive
        switch (queryType) {
          case 'AND':
            if (userIds.some(function (userId) {
              return !memberIds_1.includes(userId);
            })) {
              return false;
            }

            break;

          case 'OR':
            if (userIds.every(function (userId) {
              return !memberIds_1.includes(userId);
            })) {
              return false;
            }

            break;
        }
      }
    }

    if ((params === null || params === void 0 ? void 0 : params.includeEmpty) === false && (channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null) {
      return false;
    }

    if ((params === null || params === void 0 ? void 0 : params.includeFrozen) === false && (channel === null || channel === void 0 ? void 0 : channel.isFrozen) === true) {
      return false;
    }

    if (((_e = params === null || params === void 0 ? void 0 : params.customTypesFilter) === null || _e === void 0 ? void 0 : _e.length) > 0 && !params.customTypesFilter.includes(channel === null || channel === void 0 ? void 0 : channel.customType)) {
      return false;
    }

    if ((params === null || params === void 0 ? void 0 : params.customTypeStartsWithFilter) && !new RegExp("^" + params.customTypeStartsWithFilter).test(channel === null || channel === void 0 ? void 0 : channel.customType)) {
      return false;
    }

    if ((params === null || params === void 0 ? void 0 : params.channelNameContainsFilter) && !((_f = channel === null || channel === void 0 ? void 0 : channel.name) === null || _f === void 0 ? void 0 : _f.toLowerCase().includes(params.channelNameContainsFilter.toLowerCase()))) {
      return false;
    }

    if (params === null || params === void 0 ? void 0 : params.nicknameContainsFilter) {
      var lowerCasedSubString_1 = params.nicknameContainsFilter.toLowerCase();

      if ((_g = channel === null || channel === void 0 ? void 0 : channel.members) === null || _g === void 0 ? void 0 : _g.every(function (member) {
        return !member.nickname.toLowerCase().includes(lowerCasedSubString_1);
      })) {
        return false;
      }
    }

    if (((_h = params === null || params === void 0 ? void 0 : params.channelUrlsFilter) === null || _h === void 0 ? void 0 : _h.length) > 0 && !params.channelUrlsFilter.includes(channel === null || channel === void 0 ? void 0 : channel.url)) {
      return false;
    }

    if (params === null || params === void 0 ? void 0 : params.memberStateFilter) {
      switch (params.memberStateFilter) {
        case 'joined_only':
          if ((channel === null || channel === void 0 ? void 0 : channel.myMemberState) !== 'joined') {
            return false;
          }

          break;

        case 'invited_only':
          if ((channel === null || channel === void 0 ? void 0 : channel.myMemberState) !== 'invited') {
            return false;
          }

          break;

        case 'invited_by_friend':
          if ((channel === null || channel === void 0 ? void 0 : channel.myMemberState) !== 'invited' || !isFriend(channel.inviter)) {
            return false;
          }

          break;

        case 'invited_by_non_friend':
          if ((channel === null || channel === void 0 ? void 0 : channel.myMemberState) !== 'invited' || isFriend(channel.inviter)) {
            return false;
          }

          break;
      }
    }

    if (params === null || params === void 0 ? void 0 : params.hiddenChannelFilter) {
      switch (params.hiddenChannelFilter) {
        case 'unhidden_only':
          if ((channel === null || channel === void 0 ? void 0 : channel.isHidden) || (channel === null || channel === void 0 ? void 0 : channel.hiddenState) !== 'unhidden') {
            return false;
          }

          break;

        case 'hidden_only':
          if (!(channel === null || channel === void 0 ? void 0 : channel.isHidden)) {
            return false;
          }

          break;

        case 'hidden_allow_auto_unhide':
          if (!(channel === null || channel === void 0 ? void 0 : channel.isHidden) || (channel === null || channel === void 0 ? void 0 : channel.hiddenState) !== 'hidden_allow_auto_unhide') {
            return false;
          }

          break;

        case 'hidden_prevent_auto_unhide':
          if (!(channel === null || channel === void 0 ? void 0 : channel.isHidden) || (channel === null || channel === void 0 ? void 0 : channel.hiddenState) !== 'hidden_prevent_auto_unhide') {
            return false;
          }

          break;
      }
    }

    if (params === null || params === void 0 ? void 0 : params.unreadChannelFilter) {
      switch (params.unreadChannelFilter) {
        case 'unread_message':
          if ((channel === null || channel === void 0 ? void 0 : channel.unreadMessageCount) === 0) {
            return false;
          }

          break;
      }
    }

    if (params === null || params === void 0 ? void 0 : params.publicChannelFilter) {
      switch (params.publicChannelFilter) {
        case 'public':
          if (!(channel === null || channel === void 0 ? void 0 : channel.isPublic)) {
            return false;
          }

          break;

        case 'private':
          if (channel === null || channel === void 0 ? void 0 : channel.isPublic) {
            return false;
          }

          break;
      }
    }

    if (params === null || params === void 0 ? void 0 : params.superChannelFilter) {
      switch (params.superChannelFilter) {
        case 'super':
          if (!(channel === null || channel === void 0 ? void 0 : channel.isSuper)) {
            return false;
          }

          break;

        case 'nonsuper':
          if (channel === null || channel === void 0 ? void 0 : channel.isSuper) {
            return false;
          }

          break;
      }
    }

    return true;
  };

  var binarySearch = function binarySearch(list, number) {
    var pivot = Math.floor(list.length / 2);

    if (list[pivot] === number) {
      return pivot;
    }

    var leftList = list.slice(0, pivot);
    var rightList = list.slice(pivot + 1, list.length);

    if (list[pivot] > number) {
      if (rightList.length === 0) {
        return pivot + 1;
      }

      return pivot + binarySearch(rightList, number);
    } else {
      if (leftList.length === 0) {
        return pivot;
      }

      return binarySearch(leftList, number);
    }
  }; // This is required when channel is displayed on channel list by filter


  var getChannelsWithUpsertedChannel = function getChannelsWithUpsertedChannel(channels, channel) {
    var _a;

    if (channels.some(function (ch) {
      return ch.url === channel.url;
    })) {
      return channels.map(function (ch) {
        return ch.url === channel.url ? channel : ch;
      });
    }

    var targetIndex = binarySearch(channels.map(function (channel) {
      var _a;

      return (_a = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _a === void 0 ? void 0 : _a.createdAt;
    }), (_a = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _a === void 0 ? void 0 : _a.createdAt);
    return __spreadArray(__spreadArray(__spreadArray([], channels.slice(0, targetIndex + 1)), [channel]), channels.slice(targetIndex + 1, channels.length));
  };

  var truncate = function truncate(fullStr, strLen) {
    if (fullStr === null || fullStr === undefined) return '';
    if (fullStr.length <= strLen) return fullStr;
    var separator = '...';
    var sepLen = separator.length;
    var charsToShow = strLen - sepLen;
    var frontChars = Math.ceil(charsToShow / 2);
    var backChars = Math.floor(charsToShow / 2);
    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
  };
  var getIsSentFromStatus = function getIsSentFromStatus(status) {
    return status === MessageStatusType.SENT || status === MessageStatusType.DELIVERED || status === MessageStatusType.READ;
  };
  var getIsSentFromSendingStatus = function getIsSentFromSendingStatus() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (message.sendingStatus && typeof message.sendingStatus === 'string') {
      return message.sendingStatus === 'none' || message.sendingStatus === 'succeeded';
    }

    return false;
  };

  var DEFAULT_URL_PREFIX = 'https://static.sendbird.com/sample/cover/cover_';
  var getOpenChannelAvatar = function getOpenChannelAvatar(channel) {
    if (channel && channel.coverUrl) {
      return channel.coverUrl;
    }
  };
  var getChannelAvatarSource = function getChannelAvatarSource(channel, currentUserId) {
    if (channel && channel.coverUrl) {
      if (!new RegExp("^" + DEFAULT_URL_PREFIX).test(channel.coverUrl)) {
        return channel.coverUrl;
      }
    }

    return channel && channel.members ? channel.members.filter(function (member) {
      return member.userId !== currentUserId;
    }).map(function (_a) {
      var profileUrl = _a.profileUrl;
      return profileUrl;
    }) : [];
  };
  var useDefaultAvatar = function useDefaultAvatar(channel) {
    if (channel && channel.coverUrl) {
      if (new RegExp("^" + DEFAULT_URL_PREFIX).test(channel.coverUrl)) {
        return true;
      }

      return false;
    }

    return true;
  };

  var noop = function noop() {};
  var getMessageCreatedAt = function getMessageCreatedAt(message) {
    return format(message.createdAt, 'p');
  };
  var getSenderName = function getSenderName(message) {
    return message.sender && (message.sender.friendName || message.sender.nickname || message.sender.userId);
  };
  var getSenderProfileUrl = function getSenderProfileUrl(message) {
    return message.sender && message.sender.profileUrl;
  };

  function ChannelAvatar(_a) {
    var channel = _a.channel,
        userId = _a.userId,
        theme = _a.theme,
        _b = _a.width,
        width = _b === void 0 ? 56 : _b,
        _c = _a.height,
        height = _c === void 0 ? 56 : _c;
    var isBroadcast = channel.isBroadcast;
    var memoizedAvatar = React__default.useMemo(function () {
      return isBroadcast ? useDefaultAvatar(channel) ? /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-chat-header--default-avatar",
        style: {
          width: width,
          height: height,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.BROADCAST,
        fillColor: IconColors.CONTENT,
        width: width * 0.575,
        height: height * 0.575
      })) : /*#__PURE__*/React__default__default.createElement(Avatar$1, {
        className: "sendbird-chat-header--avatar--broadcast-channel",
        src: getChannelAvatarSource(channel, userId),
        width: width,
        height: height,
        alt: channel.name
      }) : /*#__PURE__*/React__default__default.createElement(Avatar$1, {
        className: "sendbird-chat-header--avatar--group-channel",
        src: getChannelAvatarSource(channel, userId),
        width: width + "px",
        height: height + "px",
        alt: channel.name
      });
    }, [channel.members, channel.coverUrl, theme]);
    return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, memoizedAvatar);
  }

  var InputLabel = function InputLabel(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-input-label",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_1
    }, children);
  };
  InputLabel.propTypes = {
    children: PropTypes.string.isRequired
  }; // future: add validations? onChange? more props etc etc

  var Input = /*#__PURE__*/React__default__default.forwardRef(function (props, ref) {
    var name = props.name,
        required = props.required,
        disabled = props.disabled,
        placeHolder = props.placeHolder,
        value = props.value;

    var _useState = React__default.useState(value),
        _useState2 = _slicedToArray(_useState, 2),
        inputValue = _useState2[0],
        setInputValue = _useState2[1];

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-input"
    }, /*#__PURE__*/React__default__default.createElement("input", {
      className: "sendbird-input__input",
      ref: ref,
      name: name,
      required: required,
      disabled: disabled,
      value: inputValue,
      onChange: function onChange(e) {
        setInputValue(e.target.value);
      }
    }), placeHolder && !inputValue && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-input__placeholder",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_3
    }, placeHolder));
  });
  Input.propTypes = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    placeHolder: PropTypes.string,
    value: PropTypes.string
  };
  Input.defaultProps = {
    required: false,
    disabled: false,
    placeHolder: '',
    value: ''
  };

  function MutedAvatarOverlay(props) {
    var _a = props.height,
        height = _a === void 0 ? 24 : _a,
        _b = props.width,
        width = _b === void 0 ? 24 : _b;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-muted-avatar",
      style: {
        height: height + "px",
        width: width + "px"
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-muted-avatar__icon"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-muted-avatar__bg",
      style: {
        height: height + "px",
        width: width + "px"
      }
    }), /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.MUTE,
      fillColor: IconColors.WHITE,
      width: height - 8 + "px",
      height: width - 8 + "px"
    })));
  }

  function Checkbox(_ref) {
    var id = _ref.id,
        checked = _ref.checked,
        onChange = _ref.onChange;

    var _useState = React__default.useState(checked),
        _useState2 = _slicedToArray(_useState, 2),
        isChecked = _useState2[0],
        setCheck = _useState2[1];

    return /*#__PURE__*/React__default__default.createElement("label", {
      className: "sendbird-checkbox",
      htmlFor: id
    }, /*#__PURE__*/React__default__default.createElement("input", {
      id: id,
      type: "checkbox",
      checked: isChecked,
      onClick: function onClick() {
        return setCheck(!isChecked);
      },
      onChange: onChange
    }), /*#__PURE__*/React__default__default.createElement("span", {
      className: "sendbird-checkbox--checkmark"
    }));
  }
  Checkbox.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };
  Checkbox.defaultProps = {
    id: 'sendbird-checkbox-input',
    checked: false,
    onChange: function onChange() {}
  };

  function UserListItem(_ref) {
    var className = _ref.className,
        user = _ref.user,
        checkBox = _ref.checkBox,
        disableMessaging = _ref.disableMessaging,
        currentUser = _ref.currentUser,
        checked = _ref.checked,
        _onChange = _ref.onChange,
        action = _ref.action;
    var uniqueKey = user.userId;
    var actionRef = React__default__default.useRef(null);
    var parentRef = React__default__default.useRef(null);
    var avatarRef = React__default__default.useRef(null);

    var _useContext = React__default.useContext(UserProfileContext),
        disableUserProfile = _useContext.disableUserProfile,
        renderUserProfile = _useContext.renderUserProfile;

    var _useContext2 = React__default.useContext(LocalizationContext),
        stringSet = _useContext2.stringSet;

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-user-list-item']).join(' '),
      ref: parentRef
    }, user.isMuted && /*#__PURE__*/React__default__default.createElement(MutedAvatarOverlay, {
      height: 40,
      width: 40
    }), /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          className: "sendbird-user-list-item__avatar",
          ref: avatarRef,
          src: user.profileUrl,
          width: "40px",
          height: "40px",
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          }
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          openLeft: true,
          parentRef: avatarRef // for catching location(x, y) of MenuItems
          ,
          parentContainRef: avatarRef // for toggling more options(menus & reactions)
          ,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: user,
          currentUserId: currentUser,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          disableMessaging: disableMessaging,
          user: user,
          currentUserId: currentUser,
          onSuccess: closeDropdown
        }));
      }
    }), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-user-list-item__title",
      type: LabelTypography.SUBTITLE_1,
      color: LabelColors.ONBACKGROUND_1
    }, user.nickname || stringSet.NO_NAME, currentUser === user.userId && ' (You)'), // if there is now nickname, display userId
    !user.nickname && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-user-list-item__subtitle",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, user.userId), checkBox &&
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React__default__default.createElement("label", {
      className: "sendbird-user-list-item__checkbox",
      htmlFor: uniqueKey
    }, /*#__PURE__*/React__default__default.createElement(Checkbox, {
      id: uniqueKey,
      checked: checked,
      onChange: function onChange(event) {
        return _onChange(event);
      }
    })), user.role === 'operator' && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-user-list-item__operator",
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_2
    }, "Operator"), action && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-list-item__action",
      ref: actionRef
    }, action({
      actionRef: actionRef,
      parentRef: parentRef
    })));
  }
  UserListItem.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    user: PropTypes.shape({
      userId: PropTypes.string,
      role: PropTypes.string,
      isMuted: PropTypes.bool,
      nickname: PropTypes.string,
      profileUrl: PropTypes.string
    }).isRequired,
    disableMessaging: PropTypes.bool,
    currentUser: PropTypes.string,
    action: PropTypes.element,
    checkBox: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };
  UserListItem.defaultProps = {
    className: '',
    currentUser: '',
    checkBox: false,
    disableMessaging: false,
    checked: false,
    action: null,
    onChange: function onChange() {}
  };

  function Badge(_ref) {
    var count = _ref.count,
        maxLevel = _ref.maxLevel,
        className = _ref.className;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var maximumNumber = parseInt('9'.repeat(maxLevel > 6 ? 6 : maxLevel), 10);
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-badge']).join(' ')
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-badge__text"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONCONTENT_1
    }, count > maximumNumber ? "".concat(maximumNumber).concat(stringSet.BADGE__OVER) : count)));
  }
  Badge.propTypes = {
    count: PropTypes.number.isRequired,
    maxLevel: PropTypes.number,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  };
  Badge.defaultProps = {
    maxLevel: 2,
    className: []
  };

  var filterUser = function filterUser(idsToFilter) {
    return function (currentId) {
      return idsToFilter.includes(currentId);
    };
  };

  var InviteMembers = function InviteMembers(props) {
    var userQueryCreator = props.userQueryCreator,
        closeModal = props.closeModal,
        _onSubmit = props.onSubmit,
        submitText = props.submitText,
        titleText = props.titleText,
        idsToFilter = props.idsToFilter,
        swapParams = props.swapParams;

    var _useState = React__default.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        users = _useState2[0],
        setUsers = _useState2[1];

    var _useState3 = React__default.useState({}),
        _useState4 = _slicedToArray(_useState3, 2),
        selectedUsers = _useState4[0],
        setSelectedUsers = _useState4[1];

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var _useState5 = React__default.useState({}),
        _useState6 = _slicedToArray(_useState5, 2),
        usersDataSource = _useState6[0],
        setUsersDataSource = _useState6[1];

    var selectedCount = Object.keys(selectedUsers).length;
    React__default.useEffect(function () {
      var applicationUserListQuery = userQueryCreator();
      setUsersDataSource(applicationUserListQuery);
      applicationUserListQuery.next(function (res, err) {
        // eslint-disable-next-line no-underscore-dangle
        var users_ = res;
        var error = err;

        if (swapParams) {
          users_ = err;
          error = users_;
        }

        if (error) {
          return;
        }

        setUsers(users_);
      });
    }, []);
    return /*#__PURE__*/React__default__default.createElement(Modal, {
      titleText: titleText,
      submitText: submitText,
      type: Type$1.PRIMARY,
      onCancel: closeModal,
      onSubmit: function onSubmit() {
        var selectedUserList = Object.keys(selectedUsers);

        if (selectedUserList.length > 0) {
          _onSubmit(selectedUserList);

          closeModal();
        }
      }
    }, /*#__PURE__*/React__default__default.createElement("div", null, /*#__PURE__*/React__default__default.createElement(Label, {
      color: selectedCount > 0 ? LabelColors.PRIMARY : LabelColors.ONBACKGROUND_3,
      type: LabelTypography.CAPTION_1
    }, "".concat(selectedCount, " ").concat(stringSet.MODAL__INVITE_MEMBER__SELECTEC)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-create-channel--scroll",
      onScroll: function onScroll(e) {
        var hasNext = usersDataSource.hasNext;
        var fetchMore = e.target.clientHeight + e.target.scrollTop === e.target.scrollHeight;

        if (hasNext && fetchMore) {
          usersDataSource.next(function (usersBatch, error) {
            if (error) {
              return;
            }

            setUsers([].concat(_toConsumableArray(users), _toConsumableArray(usersBatch)));
          });
        }
      }
    }, users.map(function (user) {
      return !filterUser(idsToFilter)(user.userId) && /*#__PURE__*/React__default__default.createElement(UserListItem, {
        key: user.userId,
        user: user,
        checkBox: true,
        checked: selectedUsers[user.userId],
        onChange: function onChange(event) {
          var modifiedSelectedUsers = _objectSpread2(_objectSpread2({}, selectedUsers), {}, _defineProperty({}, event.target.id, event.target.checked));

          if (!event.target.checked) {
            delete modifiedSelectedUsers[event.target.id];
          }

          setSelectedUsers(modifiedSelectedUsers);
        }
      });
    }))));
  };

  InviteMembers.propTypes = {
    idsToFilter: PropTypes.arrayOf(PropTypes.string),
    swapParams: PropTypes.bool,
    userQueryCreator: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitText: PropTypes.string,
    titleText: PropTypes.string
  };
  InviteMembers.defaultProps = {
    swapParams: false,
    submitText: 'create',
    titleText: 'Create new channel',
    idsToFilter: []
  };

  var createDefaultUserListQuery = function createDefaultUserListQuery(_ref) {
    var sdk = _ref.sdk,
        _ref$userFilledApplic = _ref.userFilledApplicationUserListQuery,
        userFilledApplicationUserListQuery = _ref$userFilledApplic === void 0 ? {} : _ref$userFilledApplic;
    var params = sdk.createApplicationUserListQuery();

    if (userFilledApplicationUserListQuery) {
      Object.keys(userFilledApplicationUserListQuery).forEach(function (key) {
        params[key] = userFilledApplicationUserListQuery[key];
      });
    }

    return params;
  };

  var getApplicationAttributes = function getApplicationAttributes() {
    var sdk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _sdk$appInfo = sdk.appInfo,
        appInfo = _sdk$appInfo === void 0 ? {} : _sdk$appInfo;
    var _appInfo$applicationA = appInfo.applicationAttributes,
        applicationAttributes = _appInfo$applicationA === void 0 ? [] : _appInfo$applicationA;
    return applicationAttributes;
  };

  var isBroadcastChannelEnabled = function isBroadcastChannelEnabled() {
    var sdk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ALLOW_BROADCAST_CHANNEL = 'allow_broadcast_channel';
    var applicationAttributes = getApplicationAttributes(sdk);

    if (Array.isArray(applicationAttributes)) {
      return applicationAttributes.includes(ALLOW_BROADCAST_CHANNEL);
    }

    return false;
  };
  var isSuperGroupChannelEnabled = function isSuperGroupChannelEnabled() {
    var sdk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ALLOW_SUPER_GROUP_CHANNEL = 'allow_super_group_channel';
    var applicationAttributes = getApplicationAttributes(sdk);

    if (Array.isArray(applicationAttributes)) {
      return applicationAttributes.includes(ALLOW_SUPER_GROUP_CHANNEL);
    }

    return false;
  };
  var setChannelType = function setChannelType(params, type) {
    if (type === 'broadcast') {
      // eslint-disable-next-line no-param-reassign
      params.isBroadcast = true;
    }

    if (type === 'supergroup') {
      // eslint-disable-next-line no-param-reassign
      params.isSuper = true;
    }

    return params;
  };
  var createChannel = function createChannel(sdk, selectedUsers, onBeforeCreateChannel, userId) {
    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'group';
    return new Promise(function (resolve, reject) {
      // have custom params
      if (onBeforeCreateChannel) {
        var _params = onBeforeCreateChannel(selectedUsers);

        setChannelType(_params, type);
        sdk.GroupChannel.createChannel(_params, function (response, error) {
          var swapParams = sdk.getErrorFirstCallback();
          var groupChannel = response;
          var err = error;

          if (swapParams) {
            groupChannel = error;
            err = response;
          }

          if (err) {
            reject(err);
          }

          resolve(groupChannel);
        });
        return;
      }

      var params = new sdk.GroupChannelParams();
      params.addUserIds(selectedUsers);
      params.isDistinct = false;

      if (userId) {
        params.operatorUserIds = [userId];
      }

      setChannelType(params, type); // do not have custom params

      sdk.GroupChannel.createChannel(params, function (response, error) {
        var swapParams = sdk.getErrorFirstCallback();
        var groupChannel = response;
        var err = error;

        if (swapParams) {
          groupChannel = error;
          err = response;
        }

        if (err) {
          reject(err);
        }

        resolve(groupChannel);
      });
    });
  };

  var LeaveChannel = function LeaveChannel(props) {
    var onCloseModal = props.onCloseModal,
        onLeaveChannel = props.onLeaveChannel;
    return /*#__PURE__*/React__default__default.createElement(Modal, {
      onCancel: onCloseModal,
      onSubmit: onLeaveChannel,
      submitText: "Delete",
      titleText: "Delete this conversation?"
    });
  };

  LeaveChannel.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    onLeaveChannel: PropTypes.func.isRequired
  };

  /**
   * @name startOfDay
   * @category Day Helpers
   * @summary Return the start of a day for the given date.
   *
   * @description
   * Return the start of a day for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the start of a day
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The start of a day for 2 September 2014 11:55:00:
   * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 02 2014 00:00:00
   */

  function startOfDay(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  /**
   * @name isSameDay
   * @category Day Helpers
   * @summary Are the given dates in the same day?
   *
   * @description
   * Are the given dates in the same day?
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the first date to check
   * @param {Date|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same day
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
   * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
   * //=> true
   */

  function isSameDay(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
    var dateRightStartOfDay = startOfDay(dirtyDateRight);
    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
  }

  /**
   * @name isToday
   * @category Day Helpers
   * @summary Is the given date today?
   * @pure false
   *
   * @description
   * Is the given date today?
   *
   * > ⚠️ Please note that this function is not present in the FP submodule as
   * > it uses `Date.now()` internally hence impure and can't be safely curried.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to check
   * @returns {Boolean} the date is today
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // If today is 6 October 2014, is 6 October 14:00:00 today?
   * var result = isToday(new Date(2014, 9, 6, 14, 0))
   * //=> true
   */

  function isToday(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameDay(dirtyDate, Date.now());
  }

  /**
   * @name addDays
   * @category Day Helpers
   * @summary Add the specified number of days to the given date.
   *
   * @description
   * Add the specified number of days to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} - the new date with the days added
   * @throws {TypeError} - 2 arguments required
   *
   * @example
   * // Add 10 days to 1 September 2014:
   * const result = addDays(new Date(2014, 8, 1), 10)
   * //=> Thu Sep 11 2014 00:00:00
   */

  function addDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);

    if (isNaN(amount)) {
      return new Date(NaN);
    }

    if (!amount) {
      // If 0 days, no-op to avoid changing times in the hour before end of DST
      return date;
    }

    date.setDate(date.getDate() + amount);
    return date;
  }

  /**
   * @name subDays
   * @category Day Helpers
   * @summary Subtract the specified number of days from the given date.
   *
   * @description
   * Subtract the specified number of days from the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the days subtracted
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Subtract 10 days from 1 September 2014:
   * const result = subDays(new Date(2014, 8, 1), 10)
   * //=> Fri Aug 22 2014 00:00:00
   */

  function subDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addDays(dirtyDate, -amount);
  }

  /**
   * @name isYesterday
   * @category Day Helpers
   * @summary Is the given date yesterday?
   * @pure false
   *
   * @description
   * Is the given date yesterday?
   *
   * > ⚠️ Please note that this function is not present in the FP submodule as
   * > it uses `Date.now()` internally hence impure and can't be safely curried.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to check
   * @returns {Boolean} the date is yesterday
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
   * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
   * //=> true
   */

  function isYesterday(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameDay(dirtyDate, subDays(Date.now(), 1));
  }

  var RESET_CHANNEL_LIST = "RESET_CHANNEL_LIST";
  var CREATE_CHANNEL$1 = "CREATE_CHANNEL";
  var LEAVE_CHANNEL_SUCCESS = "LEAVE_CHANNEL_SUCCESS";
  var SET_CURRENT_CHANNEL = "SET_CURRENT_CHANNEL";
  var SHOW_CHANNEL_SETTINGS = "SHOW_CHANNEL_SETTINGS";
  var HIDE_CHANNEL_SETTINGS = "HIDE_CHANNEL_SETTINGS";
  var FETCH_CHANNELS_START = "FETCH_CHANNELS_START";
  var FETCH_CHANNELS_SUCCESS = "FETCH_CHANNELS_SUCCESS";
  var FETCH_CHANNELS_FAILURE = "FETCH_CHANNELS_FAILURE";
  var INIT_CHANNELS_START = "INIT_CHANNELS_START";
  var INIT_CHANNELS_SUCCESS = "INIT_CHANNELS_SUCCESS";
  var INIT_CHANNELS_FAILURE = "INIT_CHANNELS_FAILURE";
  var ON_USER_JOINED = "ON_USER_JOINED";
  var ON_CHANNEL_DELETED = "ON_CHANNEL_DELETED";
  var ON_LAST_MESSAGE_UPDATED = "ON_LAST_MESSAGE_UPDATED";
  var ON_USER_LEFT = "ON_USER_LEFT";
  var ON_CHANNEL_CHANGED = "ON_CHANNEL_CHANGED";
  var ON_CHANNEL_ARCHIVED = "ON_CHANNEL_ARCHIVED";
  var ON_CHANNEL_FROZEN = "ON_CHANNEL_FROZEN";
  var ON_CHANNEL_UNFROZEN = "ON_CHANNEL_UNFROZEN";
  var ON_READ_RECEIPT_UPDATED = "ON_READ_RECEIPT_UPDATED";
  var ON_DELIVERY_RECEIPT_UPDATED = "ON_DELIVERY_RECEIPT_UPDATED";
  var CHANNEL_REPLACED_TO_TOP = "CHANNEL_REPLACED_TO_TOP";
  var CHANNEL_LIST_PARAMS_UPDATED = "CHANNEL_LIST_PARAMS_UPDATED";

  var channelListInitialState = {
    // we might not need this initialized state -> should remove
    initialized: false,
    loading: false,
    allChannels: [],
    currentChannel: null,
    showSettings: false,
    channelListQuery: null,
    currentUserId: "",
  };

  function reducer$2(state, action) {
    switch (action.type) {
      case INIT_CHANNELS_START:
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            loading: true,
          }
        );

      case RESET_CHANNEL_LIST:
        return channelListInitialState;

      case INIT_CHANNELS_SUCCESS:
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            initialized: true,
            loading: false,
            allChannels: action.payload,
            currentChannel:
              action.payload && action.payload.length && action.payload.length > 0
                ? action.payload[0].url
                : null,
          }
        );

      case FETCH_CHANNELS_SUCCESS: {
        var currentChannels = state.allChannels.map(function(c) {
          return c.url;
        });
        var filteredChannels = action.payload.filter(function(_ref) {
          var url = _ref.url;
          return !currentChannels.find(function(c) {
            return c === url;
          });
        });
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            allChannels: [].concat(
              _toConsumableArray(state.allChannels),
              _toConsumableArray(filteredChannels)
            ),
          }
        );
      }

      case CREATE_CHANNEL$1: {
        var channel = action.payload;

        if (state.channelListQuery) {
          if (
            filterChannelListParams(
              state.channelListQuery,
              channel,
              state.currentUserId
            )
          ) {
            return _objectSpread2(
              _objectSpread2({}, state),
              getChannelsWithUpsertedChannel(state.allChannels, channel)
            );
          }

          return _objectSpread2(
            _objectSpread2({}, state),
            {},
            {
              currentChannel: channel.url,
            }
          );
        }

        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            currentChannel: channel.url,
            allChannels: [channel].concat(
              _toConsumableArray(
                state.allChannels.filter(function(ch) {
                  return ch.url !== channel.url;
                })
              )
            ),
          }
        );
      }

      case ON_CHANNEL_ARCHIVED: {
        var _channel = action.payload;

        if (state.channelListQuery) {
          if (
            filterChannelListParams(
              state.channelListQuery,
              _channel,
              state.currentUserId
            )
          ) {
            return _objectSpread2(
              _objectSpread2({}, state),
              {},
              {
                allChannels: getChannelsWithUpsertedChannel(
                  state.allChannels,
                  _channel
                ),
              }
            );
          }
        }

        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            currentChannel:
              _channel.url === state.currentChannel
                ? state.allChannels[
                    state.allChannels[0].url === _channel.url ? 1 : 0
                  ].url
                : state.currentChannel,
            allChannels: state.allChannels.filter(function(_ref2) {
              var url = _ref2.url;
              return url !== _channel.url;
            }),
          }
        );
      }

      case LEAVE_CHANNEL_SUCCESS:
      case ON_CHANNEL_DELETED: {
        var channelUrl = action.payload;
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            currentChannel:
              channelUrl === state.currentChannel
                ? state.allChannels[0].url
                : state.currentChannel,
            allChannels: state.allChannels.filter(function(_ref3) {
              var url = _ref3.url;
              return url !== channelUrl;
            }),
          }
        );
      }

      case ON_USER_LEFT: {
        console.log("ON_USER_LEFT");
        var _action$payload = action.payload,
          _channel2 = _action$payload.channel,
          isMe = _action$payload.isMe;

        if (state.channelListQuery) {
          if (
            filterChannelListParams(
              state.channelListQuery,
              _channel2,
              state.currentUserId
            )
          ) {
            var _filteredChannels2 = getChannelsWithUpsertedChannel(
              state.allChannels,
              _channel2
            );

            return _objectSpread2(
              _objectSpread2({}, state),
              {},
              {
                currentChannel:
                  isMe && _channel2.url === state.currentChannel
                    ? _filteredChannels2[0].url
                    : state.currentChannel,
                allChannels: _filteredChannels2,
              }
            );
          }
          return _objectSpread2(
            _objectSpread2({}, state),
            {},
            {
              currentChannel:
                _channel2.url === state.currentChannel
                  ? state.allChannels[0].url
                  : state.currentChannel,
              allChannels: state.allChannels.filter(function(_ref4) {
                var url = _ref4.url;
                return url !== _channel2.url;
              }),
            }
          );
        }

        var _filteredChannels = state.allChannels.filter(function(c) {
          return c.url !== _channel2.url;
        });

        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            currentChannel:
              isMe && _channel2.url === state.currentChannel
                ? _filteredChannels[0].url
                : state.currentChannel,
            allChannels: _filteredChannels,
          }
        );
      }

      case ON_USER_JOINED:
      case ON_CHANNEL_CHANGED:
      case ON_READ_RECEIPT_UPDATED:
      case ON_DELIVERY_RECEIPT_UPDATED: {
        var _state$allChannels = state.allChannels,
          allChannels = _state$allChannels === void 0 ? [] : _state$allChannels;
        var _channel3 = action.payload;
        var unreadMessageCount = _channel3.unreadMessageCount;
        if (!_channel3.lastMessage) return state;

        if (state.channelListQuery) {
          if (
            filterChannelListParams(
              state.channelListQuery,
              _channel3,
              state.currentUserId
            )
          ) {
            // if its only an unread message count change, dont push to top
            if (unreadMessageCount === 0) {
              var currentChannel = allChannels.find(function(_ref5) {
                var url = _ref5.url;
                return url === _channel3.url;
              });
              var currentUnreadCount =
                currentChannel && currentChannel.unreadMessageCount;

              if (currentUnreadCount === 0) {
                return _objectSpread2(
                  _objectSpread2({}, state),
                  {},
                  {
                    allChannels: getChannelsWithUpsertedChannel(
                      allChannels,
                      _channel3
                    ),
                  }
                );
              }
            }
          }

          return _objectSpread2(
            _objectSpread2({}, state),
            {},
            {
              currentChannel:
                _channel3.url === state.currentChannel
                  ? state.allChannels[
                      state.allChannels[0].url === _channel3.url ? 1 : 0
                    ].url // if coming channel is first of channel list, current channel will be the next one
                  : state.currentChannel,
              allChannels: state.allChannels.filter(function(_ref6) {
                var url = _ref6.url;
                return url !== _channel3.url;
              }),
            }
          );
        } // if its only an unread message count change, dont push to top

        if (unreadMessageCount === 0) {
          var _currentChannel = allChannels.find(function(_ref7) {
            var url = _ref7.url;
            return url === _channel3.url;
          });

          var _currentUnreadCount =
            _currentChannel && _currentChannel.unreadMessageCount;

          if (_currentUnreadCount === 0) {
            return _objectSpread2(
              _objectSpread2({}, state),
              {},
              {
                allChannels: state.allChannels.map(function(ch) {
                  return ch.url === _channel3.url ? _channel3 : ch;
                }),
              }
            );
          }
        }

        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            allChannels: [_channel3].concat(
              _toConsumableArray(
                state.allChannels.filter(function(_ref8) {
                  var url = _ref8.url;
                  return url !== action.payload.url;
                })
              )
            ),
          }
        );
      }

      case SET_CURRENT_CHANNEL:
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            currentChannel: action.payload,
          }
        );

      case SHOW_CHANNEL_SETTINGS:
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            showSettings: true,
          }
        );

      case HIDE_CHANNEL_SETTINGS:
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            showSettings: false,
          }
        );

      case ON_LAST_MESSAGE_UPDATED:
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            allChannels: state.allChannels.map(function(channel) {
              return channel.url === action.payload.url
                ? action.payload
                : channel;
            }),
          }
        );

      case ON_CHANNEL_FROZEN: {
        var _channel4 = action.payload;

        if (state.channelListQuery) {
          if (
            filterChannelListParams(
              state.channelListQuery,
              _channel4,
              state.currentUserId
            )
          ) {
            return _objectSpread2(
              _objectSpread2({}, state),
              {},
              {
                allChannels: getChannelsWithUpsertedChannel(
                  state.allChannels,
                  _channel4
                ),
              }
            );
          }

          return _objectSpread2(
            _objectSpread2({}, state),
            {},
            {
              currentChannel:
                _channel4.url === state.currentChannel
                  ? state.allChannels[
                      state.allChannels[0].url === _channel4.url ? 1 : 0
                    ].url // if coming channel is first of channel list, current channel will be the next one
                  : state.currentChannel,
              allChannels: state.allChannels.filter(function(_ref9) {
                var url = _ref9.url;
                return url !== _channel4.url;
              }),
            }
          );
        }

        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            allChannels: state.allChannels.map(function(ch) {
              if (ch.url === _channel4.url) {
                // eslint-disable-next-line no-param-reassign
                ch.isFrozen = true;
                return ch;
              }

              return ch;
            }),
          }
        );
      }

      case ON_CHANNEL_UNFROZEN: {
        var _channel5 = action.payload;

        if (state.channelListQuery) {
          if (
            filterChannelListParams(
              state.channelListQuery,
              _channel5,
              state.currentUserId
            )
          ) {
            return _objectSpread2(
              _objectSpread2({}, state),
              {},
              {
                allChannels: getChannelsWithUpsertedChannel(
                  state.allChannels,
                  _channel5
                ),
              }
            );
          }

          return _objectSpread2(
            _objectSpread2({}, state),
            {},
            {
              currentChannel:
                _channel5.url === state.currentChannel
                  ? state.allChannels[
                      state.allChannels[0].url === _channel5.url ? 1 : 0
                    ].url // if coming channel is first of channel list, current channel will be the next one
                  : state.currentChannel,
              allChannels: state.allChannels.filter(function(_ref10) {
                var url = _ref10.url;
                return url !== _channel5.url;
              }),
            }
          );
        }

        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            allChannels: state.allChannels.map(function(ch) {
              if (ch.url === _channel5.url) {
                // eslint-disable-next-line no-param-reassign
                ch.isFrozen = false;
                return ch;
              }

              return ch;
            }),
          }
        );
      }

      case CHANNEL_REPLACED_TO_TOP: {
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            allChannels: [action.payload].concat(
              _toConsumableArray(
                state.allChannels.filter(function(channel) {
                  return channel.url !== action.payload.url;
                })
              )
            ),
          }
        );
      }

      case CHANNEL_LIST_PARAMS_UPDATED:
        return _objectSpread2(
          _objectSpread2({}, state),
          {},
          {
            currentUserId: action.payload.currentUserId,
            channelListQuery: action.payload.channelListQuery,
          }
        );

      default:
        return state;
    }
  }

  var getChannelTitle = function getChannelTitle() {
    var channel =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var currentUserId = arguments.length > 1 ? arguments[1] : undefined;
    var stringSet =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : LabelStringSet;

    if (!channel || (!channel.name && !channel.members)) {
      return stringSet.NO_TITLE;
    }

    if (channel.name && channel.name !== "Group Channel") {
      return channel.name;
    }

    if (channel.members.length === 1) {
      return stringSet.NO_MEMBERS;
    }

    return channel.members
      .filter(function(_ref) {
        var userId = _ref.userId;
        return userId !== currentUserId;
      })
      .map(function(_ref2) {
        var nickname = _ref2.nickname;
        return nickname || stringSet.NO_NAME;
      })
      .join(", ");
  };
  var getLastMessageCreatedAt = function getLastMessageCreatedAt(channel) {
    if (!channel || !channel.lastMessage) {
      return "";
    }

    var date = channel.lastMessage.createdAt;

    if (isToday(date)) {
      return format(date, "p");
    }

    if (isYesterday(date)) {
      return "Yesterday";
    }

    return format(date, "MMM dd");
  };
  var getTotalMembers = function getTotalMembers(channel) {
    return channel && channel.memberCount ? channel.memberCount : 0;
  };

  var getPrettyLastMessage = function getPrettyLastMessage() {
    var message =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var MAXLEN = 30;
    var messageType = message.messageType,
      name = message.name;

    if (messageType === "file") {
      return truncate(name, MAXLEN);
    }

    return message.message;
  };

  var getLastMessage = function getLastMessage(channel) {
    return channel && channel.lastMessage
      ? getPrettyLastMessage(channel.lastMessage)
      : "";
  };
  var getChannelUnreadMessageCount = function getChannelUnreadMessageCount(
    channel
  ) {
    return channel && channel.unreadMessageCount ? channel.unreadMessageCount : 0;
  };

  function ChannelPreview(_ref) {
    var channel = _ref.channel,
      currentUser = _ref.currentUser,
      isActive = _ref.isActive,
      ChannelAction = _ref.ChannelAction,
      theme = _ref.theme,
      onClick = _ref.onClick,
      tabIndex = _ref.tabIndex;
    var userId = currentUser.userId;
    var isBroadcast = channel.isBroadcast,
      isFrozen = channel.isFrozen;

    var _useContext = React__default.useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

    return /*#__PURE__*/ React__default__default.createElement(
      "div",
      {
        className: [
          "sendbird-channel-preview",
          isActive ? "sendbird-channel-preview--active" : "",
        ].join(" "),
        role: "link",
        onClick: onClick,
        onKeyPress: onClick,
        tabIndex: tabIndex,
      },
      /*#__PURE__*/ React__default__default.createElement(
        "div",
        {
          className: "sendbird-channel-preview__avatar",
        },
        /*#__PURE__*/ React__default__default.createElement(ChannelAvatar, {
          channel: channel,
          userId: userId,
          theme: theme,
        })
      ),
      /*#__PURE__*/ React__default__default.createElement(
        "div",
        {
          className: "sendbird-channel-preview__content",
        },
        /*#__PURE__*/ React__default__default.createElement(
          "div",
          {
            className: "sendbird-channel-preview__content__upper",
          },
          /*#__PURE__*/ React__default__default.createElement(
            "div",
            {
              className: "sendbird-channel-preview__content__upper__header",
            },
            isBroadcast &&
              /*#__PURE__*/ React__default__default.createElement(
                "div",
                {
                  className:
                    "sendbird-channel-preview__content__upper__header__broadcast-icon",
                },
                /*#__PURE__*/ React__default__default.createElement(Icon, {
                  type: IconTypes.BROADCAST,
                  fillColor: IconColors.SECONDARY,
                  height: "16px",
                  width: "16px",
                })
              ),
            /*#__PURE__*/ React__default__default.createElement(
              Label,
              {
                className:
                  "sendbird-channel-preview__content__upper__header__channel-name",
                type: LabelTypography.SUBTITLE_2,
                color: LabelColors.ONBACKGROUND_1,
              },
              getChannelTitle(channel, userId, stringSet)
            ),
            /*#__PURE__*/ React__default__default.createElement(
              Label,
              {
                className:
                  "sendbird-channel-preview__content__upper__header__total-members",
                type: LabelTypography.CAPTION_2,
                color: LabelColors.ONBACKGROUND_2,
              },
              getTotalMembers(channel)
            ),
            isFrozen &&
              /*#__PURE__*/ React__default__default.createElement(
                "div",
                {
                  title: "Frozen",
                  className:
                    "sendbird-channel-preview__content__upper__header__frozen-icon",
                },
                /*#__PURE__*/ React__default__default.createElement(Icon, {
                  type: IconTypes.FREEZE,
                  fillColor: IconColors.PRIMARY,
                  height: 12,
                  width: 12,
                })
              )
          ),
          /*#__PURE__*/ React__default__default.createElement(
            Label,
            {
              className:
                "sendbird-channel-preview__content__upper__last-message-at",
              type: LabelTypography.CAPTION_3,
              color: LabelColors.ONBACKGROUND_2,
            },
            getLastMessageCreatedAt(channel)
          )
        ),
        /*#__PURE__*/ React__default__default.createElement(
          "div",
          {
            className: "sendbird-channel-preview__content__lower",
          },
          /*#__PURE__*/ React__default__default.createElement(
            Label,
            {
              className: "sendbird-channel-preview__content__lower__last-message",
              type: LabelTypography.BODY_2,
              color: LabelColors.ONBACKGROUND_3,
            },
            getLastMessage(channel)
          ),
          /*#__PURE__*/ React__default__default.createElement(
            "div",
            {
              className:
                "sendbird-channel-preview__content__lower__unread-message-count",
            },
            getChannelUnreadMessageCount(channel) // return number
              ? /*#__PURE__*/
                React__default__default.createElement(Badge, {
                  count: getChannelUnreadMessageCount(channel),
                })
              : null
          )
        )
      ),
      /*#__PURE__*/ React__default__default.createElement(
        "div",
        {
          className: "sendbird-channel-preview__action",
        },
        ChannelAction
      )
    );
  }
  ChannelPreview.propTypes = {
    channel: PropTypes.shape({
      members: PropTypes.arrayOf(PropTypes.shape({})),
      coverUrl: PropTypes.string,
      isBroadcast: PropTypes.bool,
      isFrozen: PropTypes.bool,
    }),
    currentUser: PropTypes.shape({
      userId: PropTypes.string,
    }),
    isActive: PropTypes.bool,
    ChannelAction: PropTypes.element.isRequired,
    theme: PropTypes.string,
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
  };
  ChannelPreview.defaultProps = {
    channel: {},
    currentUser: {},
    isActive: false,
    theme: "light",
    onClick: function onClick() {},
    tabIndex: 0,
  };

  function ChannelHeader(_ref) {
    var user = _ref.user,
      renderHeader = _ref.renderHeader,
      iconButton = _ref.iconButton,
      onEdit = _ref.onEdit,
      allowProfileEdit = _ref.allowProfileEdit;

    var _useContext = React__default.useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

    return /*#__PURE__*/ React__default__default.createElement(
      "div",
      {
        className: [
          "sendbird-channel-header",
          allowProfileEdit ? "sendbird-channel-header--allow-edit" : "",
        ].join(" "),
      },
      renderHeader
        ? renderHeader()
        : /*#__PURE__*/ React__default__default.createElement(
            "div",
            {
              className: "sendbird-channel-header__title",
              role: "button",
              onClick: onEdit,
              onKeyDown: onEdit,
              tabIndex: "0",
            },
            /*#__PURE__*/ React__default__default.createElement(
              "div",
              {
                className: "sendbird-channel-header__title__left",
              },
              /*#__PURE__*/ React__default__default.createElement(Avatar$1, {
                width: "32px",
                height: "32px",
                src: user.profileUrl,
                alt: user.nickname,
              })
            ),
            /*#__PURE__*/ React__default__default.createElement(
              "div",
              {
                className: "sendbird-channel-header__title__right",
              },
              /*#__PURE__*/ React__default__default.createElement(
                Label,
                {
                  className: "sendbird-channel-header__title__right__name",
                  type: LabelTypography.SUBTITLE_2,
                  color: LabelColors.ONBACKGROUND_1,
                },
                user.nickname || stringSet.NO_NAME
              ),
              /*#__PURE__*/ React__default__default.createElement(
                Label,
                {
                  className: "sendbird-channel-header__title__right__user-id",
                  type: LabelTypography.BODY_2,
                  color: LabelColors.ONBACKGROUND_2,
                },
                user.userId
              )
            )
          ),
      /*#__PURE__*/ React__default__default.createElement(
        "div",
        {
          className: "sendbird-channel-header__right-icon",
        },
        iconButton
      )
    );
  }
  ChannelHeader.propTypes = {
    user: PropTypes.shape({
      profileUrl: PropTypes.string,
      nickname: PropTypes.string,
      userId: PropTypes.string,
    }),
    renderHeader: PropTypes.func,
    iconButton: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.instanceOf(IconButton),
    ]),
    onEdit: PropTypes.func.isRequired,
    allowProfileEdit: PropTypes.bool,
  };
  ChannelHeader.defaultProps = {
    user: {},
    renderHeader: null,
    iconButton: null,
    allowProfileEdit: false,
  };

  function EditUserProfile(_a) {
    var user = _a.user,
      _b = _a.theme,
      theme = _b === void 0 ? "light" : _b,
      onCancel = _a.onCancel,
      _onSubmit = _a.onSubmit,
      _c = _a.changeTheme,
      changeTheme = _c === void 0 ? noop : _c,
      _d = _a.onThemeChange,
      onThemeChange = _d === void 0 ? null : _d;
    var hiddenInputRef = React__default.useRef(null);
    var inputRef = React__default.useRef(null);
    var formRef = React__default.useRef(null);
    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var _e = React__default.useState(null),
      currentImg = _e[0],
      setCurrentImg = _e[1];

    var _f = React__default.useState(null),
      newFile = _f[0],
      setNewFile = _f[1];

    return /*#__PURE__*/ React__default__default.createElement(
      Modal,
      {
        titleText: stringSet.EDIT_PROFILE__TITLE,
        submitText: stringSet.BUTTON__SAVE,
        type: Type$1.PRIMARY,
        onCancel: onCancel,
        onSubmit: function onSubmit() {
          if (user.nickname !== "" && !inputRef.current.value) {
            if (formRef.current.reportValidity) {
              // might not work in explorer
              formRef.current.reportValidity();
            }

            return;
          }

          _onSubmit(inputRef.current.value, newFile);

          onCancel();
        },
      },
      /*#__PURE__*/ React__default__default.createElement(
        "form",
        {
          className: "sendbird-edit-user-profile",
          ref: formRef,
          onSubmit: function onSubmit(e) {
            e.preventDefault();
          },
        },
        /*#__PURE__*/ React__default__default.createElement(
          "section",
          {
            className: "sendbird-edit-user-profile__img",
          },
          /*#__PURE__*/ React__default__default.createElement(
            InputLabel,
            null,
            stringSet.EDIT_PROFILE__IMAGE_LABEL
          ),
          /*#__PURE__*/ React__default__default.createElement(
            "div",
            {
              className: "sendbird-edit-user-profile__img__avatar",
            },
            /*#__PURE__*/ React__default__default.createElement(Avatar$1, {
              width: "80px",
              height: "80px",
              src: currentImg || user.profileUrl,
            })
          ),
          /*#__PURE__*/ React__default__default.createElement("input", {
            ref: hiddenInputRef,
            type: "file",
            accept: "image/gif, image/jpeg, image/png",
            style: {
              display: "none",
            },
            onChange: function onChange(e) {
              setCurrentImg(URL.createObjectURL(e.target.files[0]));
              setNewFile(e.target.files[0]);
              hiddenInputRef.current.value = "";
            },
          }),
          /*#__PURE__*/ React__default__default.createElement(
            TextButton,
            {
              className: "sendbird-edit-user-profile__img__avatar-button",
              notUnderline: true,
              onClick: function onClick() {
                return hiddenInputRef.current.click();
              },
            },
            /*#__PURE__*/ React__default__default.createElement(
              Label,
              {
                type: LabelTypography.BUTTON_1,
                color: LabelColors.PRIMARY,
              },
              stringSet.EDIT_PROFILE__IMAGE_UPLOAD
            )
          )
        ),
        /*#__PURE__*/ React__default__default.createElement(
          "section",
          {
            className: "sendbird-edit-user-profile__name",
          },
          /*#__PURE__*/ React__default__default.createElement(
            InputLabel,
            null,
            stringSet.EDIT_PROFILE__NICKNAME_LABEL
          ),
          /*#__PURE__*/ React__default__default.createElement(Input, {
            required: user.nickname !== "",
            name: "sendbird-edit-user-profile__name__input",
            ref: inputRef,
            value: user.nickname,
            placeHolder: stringSet.EDIT_PROFILE__NICKNAME_PLACEHOLDER,
          })
        ),
        /*#__PURE__*/ React__default__default.createElement(
          "section",
          {
            className: "sendbird-edit-user-profile__userid",
          },
          /*#__PURE__*/ React__default__default.createElement(
            InputLabel,
            null,
            stringSet.EDIT_PROFILE__USERID_LABEL
          ),
          /*#__PURE__*/ React__default__default.createElement(Input, {
            disabled: true,
            name: "sendbird-edit-user-profile__userid__input",
            value: user.userId,
          })
        ),
        /*#__PURE__*/ React__default__default.createElement(
          "section",
          {
            className: "sendbird-edit-user-profile__theme",
          },
          /*#__PURE__*/ React__default__default.createElement(
            InputLabel,
            null,
            stringSet.EDIT_PROFILE__THEME_LABEL
          ),
          /*#__PURE__*/ React__default__default.createElement(
            "div",
            {
              className: "sendbird-edit-user-profile__theme__theme-icon",
            },
            theme === "dark"
              ? /*#__PURE__*/ React__default__default.createElement(Icon, {
                  onClick: function onClick() {
                    changeTheme("light");

                    if (onThemeChange && typeof onThemeChange === "function") {
                      onThemeChange("light");
                    }
                  },
                  type: IconTypes.TOGGLE_ON,
                  width: 44,
                  height: 24,
                })
              : /*#__PURE__*/ React__default__default.createElement(Icon, {
                  onClick: function onClick() {
                    changeTheme("dark");

                    if (onThemeChange && typeof onThemeChange === "function") {
                      onThemeChange("dark");
                    }
                  },
                  type: IconTypes.TOGGLE_OFF,
                  width: 44,
                  height: 24,
                })
          )
        )
      )
    );
  }

  var mapStoreToProps$1 = function mapStoreToProps(store) {
    return {
      theme: store.config.theme,
      changeTheme: store.config.setCurrenttheme,
    };
  };

  var ConnectedEditUserProfile = withSendbirdContext(
    EditUserProfile,
    mapStoreToProps$1
  );

  function AddChannel(_ref) {
    var sdk = _ref.sdk,
      disabled = _ref.disabled,
      channelListDispatcher = _ref.channelListDispatcher,
      onBeforeCreateChannel = _ref.onBeforeCreateChannel,
      userId = _ref.userId,
      userFilledApplicationUserListQuery =
        _ref.userFilledApplicationUserListQuery,
      userListQuery = _ref.userListQuery;

    var _useState = React__default.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

    var _useState3 = React__default.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      step = _useState4[0],
      setStep = _useState4[1];

    var _useState5 = React__default.useState("group"),
      _useState6 = _slicedToArray(_useState5, 2),
      type = _useState6[0],
      setType = _useState6[1];

    var _useContext = React__default.useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

    if (!sdk || !sdk.createApplicationUserListQuery) {
      return null;
    }

    var isBroadcastAvailable = isBroadcastChannelEnabled(sdk);
    var isSupergroupAvailable = isSuperGroupChannelEnabled(sdk);
    return /*#__PURE__*/ React__default__default.createElement(
      React__default__default.Fragment,
      null,
      /*#__PURE__*/ React__default__default.createElement(
        IconButton,
        {
          height: "32px",
          width: "32px",
          onClick: function onClick() {
            setShowModal(true);
          },
          disabled: disabled,
        },
        /*#__PURE__*/ React__default__default.createElement(Icon, {
          type: IconTypes.CREATE,
          fillColor: IconColors.PRIMARY,
          width: "24px",
          height: "24px",
        })
      ),
      showModal &&
        step === 0 &&
        /*#__PURE__*/ React__default__default.createElement(InviteMembers, {
          swapParams:
            sdk && sdk.getErrorFirstCallback && sdk.getErrorFirstCallback(),
          titleText: stringSet.MODAL__CREATE_CHANNEL__TITLE,
          submitText: stringSet.BUTTON__CREATE,
          closeModal: function closeModal() {
            setStep(0);
            setShowModal(false);
          },
          idsToFilter: [userId],
          userQueryCreator: function userQueryCreator() {
            return userListQuery && typeof userListQuery === "function"
              ? userListQuery()
              : createDefaultUserListQuery({
                  sdk: sdk,
                  userFilledApplicationUserListQuery: userFilledApplicationUserListQuery,
                });
          },
          onSubmit: function onSubmit(selectedUsers) {
            return createChannel(
              sdk,
              selectedUsers,
              onBeforeCreateChannel,
              userId,
              type
            ).then(function(channel) {
              // maybe - do this in event listener
              channelListDispatcher({
                type: CREATE_CHANNEL$1,
                payload: channel,
              });
            });
          },
        })
    );
  }
  AddChannel.propTypes = {
    sdk: PropTypes.shape({
      getErrorFirstCallback: PropTypes.func,
      createApplicationUserListQuery: PropTypes.func,
    }).isRequired,
    disabled: PropTypes.bool,
    channelListDispatcher: PropTypes.func.isRequired,
    userFilledApplicationUserListQuery: PropTypes.shape({}),
    onBeforeCreateChannel: PropTypes.func,
    userId: PropTypes.string.isRequired,
    userListQuery: PropTypes.func,
  };
  AddChannel.defaultProps = {
    disabled: false,
    userFilledApplicationUserListQuery: {},
    onBeforeCreateChannel: null,
    userListQuery: null,
  };

  function ChannelPreviewAction(_ref) {
    var disabled = _ref.disabled,
      onLeaveChannel = _ref.onLeaveChannel;
    var parentRef = React__default.useRef(null);

    var _useState = React__default.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

    var _useContext = React__default.useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

    return /*#__PURE__*/ React__default__default.createElement(
      "div",
      {
        role: "button",
        style: {
          display: "inline-block",
        },
        onKeyDown: function onKeyDown(e) {
          e.stopPropagation();
        },
        tabIndex: 0,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
      },
      /*#__PURE__*/ React__default__default.createElement(ContextMenu, {
        menuTrigger: function menuTrigger(toggleDropdown) {
          return /*#__PURE__*/ React__default__default.createElement(
            IconButton,
            {
              ref: parentRef,
              onClick: toggleDropdown,
              height: "32px",
              width: "32px",
            },
            /*#__PURE__*/ React__default__default.createElement(Icon, {
              type: IconTypes.MORE,
              fillColor: IconColors.PRIMARY,
              width: "24px",
              height: "24px",
            })
          );
        },
        menuItems: function menuItems(closeDropdown) {
          return /*#__PURE__*/ React__default__default.createElement(
            MenuItems,
            {
              parentRef: parentRef,
              parentContainRef: parentRef,
              closeDropdown: closeDropdown,
            },
            /*#__PURE__*/ React__default__default.createElement(
              MenuItem,
              {
                onClick: function onClick() {
                  if (disabled) {
                    return;
                  }

                  setShowModal(true);
                  closeDropdown();
                },
              },
              stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE
            )
          );
        },
      }),
      showModal &&
        /*#__PURE__*/ React__default__default.createElement(LeaveChannel, {
          onCloseModal: function onCloseModal() {
            return setShowModal(false);
          },
          onLeaveChannel: onLeaveChannel,
        })
    );
  }
  ChannelPreviewAction.propTypes = {
    disabled: PropTypes.bool,
    onLeaveChannel: PropTypes.func.isRequired,
  };
  ChannelPreviewAction.defaultProps = {
    disabled: false,
  };

  function ChannelsPlaceholder(_ref) {
    var type = _ref.type;
    return /*#__PURE__*/ React__default__default.createElement(
      "div",
      {
        className: "sendbird-channel-list",
      },
      /*#__PURE__*/ React__default__default.createElement(PlaceHolder, {
        type: type,
      })
    );
  }
  ChannelsPlaceholder.propTypes = {
    type: PropTypes.string.isRequired,
  };

  var createEventHandler = function createEventHandler(_ref) {
    var sdk = _ref.sdk,
      sdkChannelHandlerId = _ref.sdkChannelHandlerId,
      channelListDispatcher = _ref.channelListDispatcher,
      logger = _ref.logger;
    var ChannelHandler = new sdk.ChannelHandler();

    ChannelHandler.onChannelChanged = function(channel) {
      logger.info("ChannelList: onChannelChanged", channel);
      channelListDispatcher({
        type: ON_CHANNEL_CHANGED,
        payload: channel,
      });
    };

    ChannelHandler.onChannelDeleted = function(channelUrl) {
      logger.info("ChannelList: onChannelDeleted", channelUrl);
      channelListDispatcher({
        type: ON_CHANNEL_DELETED,
        payload: channelUrl,
      });
    };

    ChannelHandler.onUserJoined = function(channel) {
      logger.info("ChannelList: onUserJoined", channel);

      if (channel.lastMessage) {
        channelListDispatcher({
          type: ON_USER_JOINED,
          payload: channel,
        });
      }
    };

    ChannelHandler.onUserBanned = function(channel, user) {
      var currentUser = sdk.currentUser;
      logger.info("Channel | useHandleChannelEvents: onUserBanned", channel);

      if (user.userId === currentUser.userId) {
        channelListDispatcher({
          type: ON_USER_LEFT,
          payload: {
            channel: channel,
            isMe: true,
          },
        });
      } else {
        channelListDispatcher({
          type: ON_USER_LEFT,
          payload: {
            channel: channel,
            isMe: false,
          },
        });
      }
    };

    ChannelHandler.onUserLeft = function(channel, leftUser) {
      var currentUser = sdk.currentUser;
      var isMe = currentUser.userId === leftUser.userId;
      logger.info("ChannelList: onUserLeft", channel);
      channelListDispatcher({
        type: ON_USER_LEFT,
        payload: {
          channel: channel,
          isMe: isMe,
        },
      });
    };

    ChannelHandler.onReadStatus = function(channel) {
      logger.info("ChannelList: onReadStatus", channel);
      channelListDispatcher({
        type: ON_READ_RECEIPT_UPDATED,
        payload: channel,
      });
    };

    ChannelHandler.onDeliveryReceiptUpdated = function(channel) {
      logger.info("ChannelList: onDeliveryReceiptUpdated", channel);

      if (channel.lastMessage) {
        channelListDispatcher({
          type: ON_DELIVERY_RECEIPT_UPDATED,
          payload: channel,
        });
      }
    };

    ChannelHandler.onMessageUpdated = function(channel, message) {
      if (channel.lastMessage.isEqual(message)) {
        logger.info("ChannelList: onMessageUpdated", channel);
        channelListDispatcher({
          type: ON_LAST_MESSAGE_UPDATED,
          payload: channel,
        });
      }
    };

    ChannelHandler.onChannelHidden = function(channel) {
      logger.info("ChannelList: onChannelHidden", channel);
      channelListDispatcher({
        type: ON_CHANNEL_ARCHIVED,
        payload: channel,
      });
    };

    ChannelHandler.onChannelFrozen = function(channel) {
      logger.info("ChannelList: onChannelFrozen", channel);
      channelListDispatcher({
        type: ON_CHANNEL_FROZEN,
        payload: channel,
      });
    };

    ChannelHandler.onChannelUnfrozen = function(channel) {
      logger.info("ChannelList: onChannelUnfrozen", channel);
      channelListDispatcher({
        type: ON_CHANNEL_UNFROZEN,
        payload: channel,
      });
    };

    logger.info("ChannelList: Added channelHandler");
    sdk.addChannelHandler(sdkChannelHandlerId, ChannelHandler);
  };

  var createChannelListQuery = function createChannelListQuery(_ref2) {
    var sdk = _ref2.sdk,
      _ref2$userFilledChann = _ref2.userFilledChannelListQuery,
      userFilledChannelListQuery =
        _ref2$userFilledChann === void 0 ? {} : _ref2$userFilledChann;
    var channelListQuery = sdk.GroupChannel.createMyGroupChannelListQuery();
    channelListQuery.includeEmpty = false;
    channelListQuery.order = "latest_last_message"; // 'chronological', 'latest_last_message', 'channel_name_alphabetical', and 'metadata_value_alphabetical'

    channelListQuery.limit = 20; // The value of pagination limit could be set up to 100.

    if (userFilledChannelListQuery) {
      Object.keys(userFilledChannelListQuery).forEach(function(key) {
        channelListQuery[key] = userFilledChannelListQuery[key];
      });
    }

    return channelListQuery;
  };
  /**
   * Setup event listener
   * create channel source query
   * addloading screen
   */

  function setupChannelList(_ref3) {
    var sdk = _ref3.sdk,
      sdkChannelHandlerId = _ref3.sdkChannelHandlerId,
      channelListDispatcher = _ref3.channelListDispatcher,
      setChannelSource = _ref3.setChannelSource,
      onChannelSelect = _ref3.onChannelSelect,
      userFilledChannelListQuery = _ref3.userFilledChannelListQuery,
      logger = _ref3.logger,
      sortChannelList = _ref3.sortChannelList;
    createEventHandler({
      sdk: sdk,
      channelListDispatcher: channelListDispatcher,
      sdkChannelHandlerId: sdkChannelHandlerId,
      logger: logger,
    });
    logger.info("ChannelList - creating query", {
      userFilledChannelListQuery: userFilledChannelListQuery,
    });
    var channelListQuery = createChannelListQuery({
      sdk: sdk,
      userFilledChannelListQuery: userFilledChannelListQuery,
    });
    logger.info("ChannelList - created query", channelListQuery);
    setChannelSource(channelListQuery);
    channelListDispatcher({
      type: INIT_CHANNELS_START,
    });

    if (userFilledChannelListQuery) {
      logger.info("ChannelList - setting up channelListQuery", channelListQuery);
      channelListDispatcher({
        type: CHANNEL_LIST_PARAMS_UPDATED,
        payload: {
          channelListQuery: channelListQuery,
          currentUserId: sdk && sdk.currentUser && sdk.currentUser.userId,
        },
      });
    }

    logger.info("ChannelList - fetching channels");

    if (channelListQuery.hasNext) {
      channelListQuery.next(function(response, error) {
        var swapParams = sdk.getErrorFirstCallback();
        var channelList = response;
        var err = error;

        if (swapParams) {
          channelList = error;
          err = response;
        }

        logger.info("ChannelList - fetched channels", channelList);

        if (err) {
          logger.error("ChannelList - couldnt fetch channels", err);
          channelListDispatcher({
            type: INIT_CHANNELS_FAILURE,
          });
          return;
        } // select first channel

        logger.info("ChannelList - highlight channel", channelList[0]);
        var sorted = channelList;

        if (sortChannelList && typeof sortChannelList === "function") {
          sorted = sortChannelList(channelList);
          logger.info("ChannelList - channel list sorted", sorted);
        }

        onChannelSelect(sorted[0]);
        channelListDispatcher({
          type: INIT_CHANNELS_SUCCESS,
          payload: sorted,
        });

        if (channelList && typeof channelList.forEach === "function") {
          logger.info("ChannelList - mark all channels as delivered");
          channelList.forEach(function(c) {
            return c.markAsDelivered();
          });
        }
      });
    } else {
      logger.warning("ChannelList - there are no more channels");
    }
  }

  var pubSubHandleRemover = function pubSubHandleRemover(subscriber) {
    subscriber.forEach(function(s) {
      try {
        s.remove();
      } catch (_unused) {
        //
      }
    });
  };
  var pubSubHandler = function pubSubHandler(pubSub, channelListDispatcher) {
    var subScriber = new Map();
    if (!pubSub) return subScriber;
    subScriber.set(
      CREATE_CHANNEL,
      pubSub.subscribe(CREATE_CHANNEL, function(msg) {
        var channel = msg.channel;
        channelListDispatcher({
          type: "CREATE_CHANNEL",
          payload: channel,
        });
      })
    );
    subScriber.set(
      UPDATE_USER_MESSAGE,
      pubSub.subscribe(UPDATE_USER_MESSAGE, function(msg) {
        var channel = msg.channel,
          message = msg.message;
        var updatedChannel = channel;
        updatedChannel.lastMessage = message;

        if (channel) {
          channelListDispatcher({
            type: ON_LAST_MESSAGE_UPDATED,
            payload: updatedChannel,
          });
        }
      })
    );
    subScriber.set(
      LEAVE_CHANNEL,
      pubSub.subscribe(LEAVE_CHANNEL, function(msg) {
        var channel = msg.channel;
        channelListDispatcher({
          type: LEAVE_CHANNEL_SUCCESS,
          payload: channel.url,
        });
      })
    );
    subScriber.set(
      SEND_MESSAGE_START,
      pubSub.subscribe(SEND_MESSAGE_START, function(msg) {
        var channel = msg.channel;
        channelListDispatcher({
          type: CHANNEL_REPLACED_TO_TOP,
          payload: channel,
        });
      })
    );
    return subScriber;
  };

  var noop$1 = function noop() {};

  function ChannelList(props) {
    var _props$stores = props.stores,
      _props$stores$sdkStor = _props$stores.sdkStore,
      sdkStore = _props$stores$sdkStor === void 0 ? {} : _props$stores$sdkStor,
      _props$stores$userSto = _props$stores.userStore,
      userStore = _props$stores$userSto === void 0 ? {} : _props$stores$userSto,
      _props$config = props.config,
      userId = _props$config.userId,
      isOnline = _props$config.isOnline,
      userListQuery = _props$config.userListQuery,
      logger = _props$config.logger,
      pubSub = _props$config.pubSub,
      theme = _props$config.theme,
      userDispatcher = props.dispatchers.userDispatcher,
      _props$queries = props.queries,
      queries = _props$queries === void 0 ? {} : _props$queries,
      renderChannelPreview = props.renderChannelPreview,
      renderHeader = props.renderHeader,
      renderUserProfile = props.renderUserProfile,
      disableUserProfile = props.disableUserProfile,
      allowProfileEdit = props.allowProfileEdit,
      sortChannelList = props.sortChannelList,
      onProfileEditSuccess = props.onProfileEditSuccess,
      onThemeChange = props.onThemeChange,
      onBeforeCreateChannel = props.onBeforeCreateChannel,
      onChannelSelect = props.onChannelSelect;
    var _props$config2 = props.config,
      config = _props$config2 === void 0 ? {} : _props$config2; // enable if it is true atleast once(both are flase by default)

    var enableEditProfile = allowProfileEdit || config.allowProfileEdit;
    var userDefinedDisableUserProfile =
      disableUserProfile || config.disableUserProfile;
    var userDefinedRenderProfile = renderUserProfile || config.renderUserProfile;
    var _sdkStore$sdk = sdkStore.sdk,
      sdk = _sdkStore$sdk === void 0 ? {} : _sdkStore$sdk;
    var userFilledChannelListQuery = queries.channelListQuery;
    var userFilledApplicationUserListQuery = queries.applicationUserListQuery;
    var sdkError = sdkStore.error;
    var sdkIntialized = sdkStore.initialized;

    var _useReducer = React__default.useReducer(reducer$2, channelListInitialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      channelListStore = _useReducer2[0],
      channelListDispatcher = _useReducer2[1];

    var _useState = React__default.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

    var _useState3 = React__default.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      channelSource = _useState4[0],
      setChannelSource = _useState4[1];

    var _useState5 = React__default.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showProfileEdit = _useState6[0],
      setShowProfileEdit = _useState6[1];

    var _useState7 = React__default.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      sdkChannelHandlerId = _useState8[0],
      setSdkChannelHandlerId = _useState8[1];

    var loading = channelListStore.loading,
      currentChannel = channelListStore.currentChannel;
    React__default.useEffect(
      function() {
        setUser(userStore.user);
      },
      [userStore.user]
    );
    React__default.useEffect(
      function() {
        var subscriber = pubSubHandler(pubSub, channelListDispatcher);
        return function() {
          pubSubHandleRemover(subscriber);
        };
      },
      [sdkIntialized]
    );
    React__default.useEffect(
      function() {
        setSdkChannelHandlerId(uuidv4);

        if (sdkIntialized) {
          logger.info("ChannelList: Setup channelHandlers");
          setupChannelList({
            sdk: sdk,
            sdkChannelHandlerId: sdkChannelHandlerId,
            channelListDispatcher: channelListDispatcher,
            setChannelSource: setChannelSource,
            onChannelSelect: onChannelSelect,
            userFilledChannelListQuery: userFilledChannelListQuery,
            logger: logger,
            sortChannelList: sortChannelList,
          });
        } else {
          logger.info("ChannelList: Removing channelHandlers"); // remove previous channelHandlers

          if (sdk && sdk.removeChannelHandler) {
            sdk.removeChannelHandler(sdkChannelHandlerId);
          } // remove channelSource

          setChannelSource({}); // cleanup

          channelListDispatcher({
            type: RESET_CHANNEL_LIST,
          });
        }

        return function() {
          logger.info("ChannelList: Removing channelHandlers");

          if (sdk && sdk.removeChannelHandler) {
            sdk.removeChannelHandler(sdkChannelHandlerId);
          }
        };
      },
      [sdkIntialized, userFilledChannelListQuery, sortChannelList]
    );
    var allChannels = channelListStore.allChannels;
    var sortedChannels =
      sortChannelList && typeof sortChannelList === "function"
        ? sortChannelList(allChannels)
        : allChannels;

    if (sortedChannels.length !== allChannels.length) {
      var warning =
        "ChannelList: You have removed/added extra channels on sortChannelList\n      this could cause unexpected problems"; // eslint-disable-next-line no-console

      console.warn(warning, {
        before: allChannels,
        after: sortedChannels,
      });
      logger.warning(warning, {
        before: allChannels,
        after: sortedChannels,
      });
    }

    React__default.useEffect(
      function() {
        if (!sdk || !sdk.GroupChannel) {
          return;
        }

        sdk.GroupChannel.getChannel(currentChannel, function(groupChannel) {
          if (groupChannel) {
            onChannelSelect(groupChannel);
          } else {
            onChannelSelect(null);
          }
        });
      },
      [currentChannel]
    );
    return /*#__PURE__*/ React__default__default.createElement(
      UserProfileProvider,
      {
        className: "sendbird-channel-list",
        disableUserProfile: userDefinedDisableUserProfile,
        renderUserProfile: userDefinedRenderProfile,
      },
      /*#__PURE__*/ React__default__default.createElement(
        "div",
        {
          className: "sendbird-channel-list__header",
        },
        /*#__PURE__*/ React__default__default.createElement(ChannelHeader, {
          renderHeader: renderHeader,
          user: user,
          onEdit: function onEdit() {
            if (enableEditProfile) {
              setShowProfileEdit(true);
            }
          },
          allowProfileEdit: enableEditProfile,
          iconButton: /*#__PURE__*/ React__default__default.createElement(AddChannel, {
            disabled: !isOnline,
            userListQuery: userListQuery,
            sdk: sdk,
            channelListDispatcher: channelListDispatcher,
            userId: userId,
            userFilledApplicationUserListQuery: userFilledApplicationUserListQuery,
            onBeforeCreateChannel: onBeforeCreateChannel,
          }),
        })
      ),
      showProfileEdit &&
        /*#__PURE__*/ React__default__default.createElement(ConnectedEditUserProfile, {
          onThemeChange: onThemeChange,
          user: user,
          onCancel: function onCancel() {
            setShowProfileEdit(false);
          },
          onSubmit: function onSubmit(newName, newFile) {
            sdk.updateCurrentUserInfoWithProfileImage(newName, newFile, function(
              updatedUser
            ) {
              userDispatcher({
                type: UPDATE_USER_INFO,
                payload: updatedUser,
              });

              if (
                onProfileEditSuccess &&
                typeof onProfileEditSuccess === "function"
              ) {
                onProfileEditSuccess(updatedUser);
              }
            });
          },
        }),
      /*#__PURE__*/ React__default__default.createElement(
        "div",
        {
          className: "sendbird-channel-list__body",
          onScroll: function onScroll(e) {
            var fetchMore =
              e.target.clientHeight + e.target.scrollTop ===
              e.target.scrollHeight;

            if (fetchMore && channelSource.hasNext) {
              logger.info("ChannelList: Fetching more channels");
              channelListDispatcher({
                type: FETCH_CHANNELS_START,
              });
              channelSource.next(function(response, error) {
                var swapParams = sdk.getErrorFirstCallback();
                var channelList = response;
                var err = error;

                if (swapParams) {
                  channelList = error;
                  err = response;
                }

                if (err) {
                  logger.info("ChannelList: Fetching channels failed", err);
                  channelListDispatcher({
                    type: FETCH_CHANNELS_FAILURE,
                    payload: channelList,
                  });
                  return;
                }

                logger.info(
                  "ChannelList: Fetching channels successful",
                  channelList
                );
                channelListDispatcher({
                  type: FETCH_CHANNELS_SUCCESS,
                  payload: channelList,
                });

                if (channelList && typeof channelList.forEach === "function") {
                  logger.info("ChannelList: Marking all channels as read");
                  channelList.forEach(function(c) {
                    return c.markAsDelivered();
                  });
                }
              });
            }
          },
        },
        sdkError &&
          /*#__PURE__*/ React__default__default.createElement(ChannelsPlaceholder, {
            type: PlaceHolderTypes$1.WRONG,
          }),
        /*#__PURE__*/ React__default__default.createElement(
          "div",
          null,
          sortedChannels &&
            sortedChannels.map(function(channel, idx) {
              var _onLeaveChannel = function onLeaveChannel(c, cb) {
                logger.info("ChannelList: Leaving channel", c);
                c.leave()
                  .then(function(res) {
                    logger.info("ChannelList: Leaving channel success", res);

                    if (cb && typeof cb === "function") {
                      cb(res, null);
                    }

                    channelListDispatcher({
                      type: LEAVE_CHANNEL_SUCCESS,
                      payload: channel.url,
                    });
                  })
                  .catch(function(err) {
                    logger.error("ChannelList: Leaving channel failed", err);

                    if (cb && typeof cb === "function") {
                      cb(null, err);
                    }
                  });
              };

              var onClick = function onClick() {
                if (!isOnline) {
                  return;
                }

                logger.info("ChannelList: Clicked on channel:", channel);
                channelListDispatcher({
                  type: SET_CURRENT_CHANNEL,
                  payload: channel.url,
                });
              };

              return renderChannelPreview
                ? /*#__PURE__*/
                  // eslint-disable-next-line
                  React__default__default.createElement(
                    "div",
                    {
                      key: channel.url,
                      onClick: onClick,
                    },
                    renderChannelPreview({
                      channel: channel,
                      onLeaveChannel: _onLeaveChannel,
                    })
                  )
                : /*#__PURE__*/ React__default__default.createElement(ChannelPreview, {
                    key: channel.url,
                    tabIndex: idx,
                    onClick: onClick,
                    channel: channel,
                    currentUser: user,
                    theme: theme,
                    isActive: channel.url === currentChannel, // todo - potential performance hit refactor
                    ChannelAction: /*#__PURE__*/ React__default__default.createElement(
                      ChannelPreviewAction,
                      {
                        disabled: !isOnline,
                        onLeaveChannel: function onLeaveChannel() {
                          return _onLeaveChannel(channel);
                        },
                      }
                    ),
                  });
            })
        ),
        (!sdkIntialized || loading) &&
          /*#__PURE__*/ React__default__default.createElement(ChannelsPlaceholder, {
            type: PlaceHolderTypes$1.LOADING,
          }), //  placeholder
        (!allChannels || allChannels.length === 0) &&
          /*#__PURE__*/ React__default__default.createElement(ChannelsPlaceholder, {
            type: PlaceHolderTypes$1.NO_CHANNELS,
          })
      )
    );
  }

  ChannelList.propTypes = {
    stores: PropTypes.shape({
      sdkStore: PropTypes.shape({
        initialized: PropTypes.bool,
      }),
      userStore: PropTypes.shape({
        user: PropTypes.shape({}),
      }),
    }).isRequired,
    dispatchers: PropTypes.shape({
      userDispatcher: PropTypes.func,
    }).isRequired,
    config: PropTypes.shape({
      userId: PropTypes.string.isRequired,
      userListQuery: PropTypes.func,
      theme: PropTypes.string,
      isOnline: PropTypes.bool,
      logger: PropTypes.shape({
        info: PropTypes.func,
        error: PropTypes.func,
        warning: PropTypes.func,
      }),
      pubSub: PropTypes.shape({
        subscribe: PropTypes.func,
        publish: PropTypes.func,
      }),
    }).isRequired,
    queries: PropTypes.shape({
      channelListQuery: PropTypes.shape({
        channelNameContainsFilter: PropTypes.string,
        channelUrlsFilter: PropTypes.arrayOf(PropTypes.string),
        customTypesFilter: PropTypes.arrayOf(PropTypes.string),
        customTypeStartsWithFilter: PropTypes.string,
        hiddenChannelFilter: PropTypes.string,
        includeEmpty: PropTypes.bool,
        limit: PropTypes.number,
        memberStateFilter: PropTypes.string,
        metadataOrderKeyFilter: PropTypes.string,
        nicknameContainsFilter: PropTypes.string,
        order: PropTypes.string,
        publicChannelFilter: PropTypes.string,
        superChannelFilter: PropTypes.string,
        unreadChannelFilter: PropTypes.string,
        userIdsExactFilter: PropTypes.arrayOf(PropTypes.string),
        userIdsIncludeFilter: PropTypes.arrayOf(PropTypes.string),
        userIdsIncludeFilterQueryType: PropTypes.string,
      }),
      applicationUserListQuery: PropTypes.shape({
        limit: PropTypes.number,
        userIdsFilter: PropTypes.arrayOf(PropTypes.string),
        metaDataKeyFilter: PropTypes.string,
        metaDataValuesFilter: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
    onBeforeCreateChannel: PropTypes.func,
    renderChannelPreview: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    disableUserProfile: PropTypes.bool,
    renderUserProfile: PropTypes.func,
    allowProfileEdit: PropTypes.bool,
    sortChannelList: PropTypes.func,
    onThemeChange: PropTypes.func,
    onProfileEditSuccess: PropTypes.func,
    renderHeader: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    onChannelSelect: PropTypes.func,
  };
  ChannelList.defaultProps = {
    onBeforeCreateChannel: null,
    renderChannelPreview: null,
    renderHeader: null,
    disableUserProfile: false,
    renderUserProfile: null,
    allowProfileEdit: false,
    onThemeChange: null,
    sortChannelList: null,
    onProfileEditSuccess: null,
    queries: {},
    onChannelSelect: noop$1,
  };
  var ChannelList$1 = withSendbirdContext(ChannelList);

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
  var SUPPORTED_MIMES = {
    IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp' // not supported in IE
    ],
    VIDEO: ['video/mpeg', 'video/ogg', 'video/webm', 'video/mp4']
  };
  var isImage = function isImage(type) {
    return SUPPORTED_MIMES.IMAGE.indexOf(type) >= 0;
  };
  var isVideo = function isVideo(type) {
    return SUPPORTED_MIMES.VIDEO.indexOf(type) >= 0;
  };
  var isGif = function isGif(type) {
    return type === 'image/gif';
  };
  var unSupported = function unSupported(type) {
    return !(isImage(type) || isVideo(type));
  };

  var isEmpty$1 = function isEmpty(val) {
    return val === null || val === undefined;
  }; // Some Ids return string and number inconsistently
  // only use to comapre IDs


  function compareIds (a, b) {
    if (isEmpty$1(a) || isEmpty$1(b)) {
      return false;
    }

    var aString = a.toString();
    var bString = b.toString();
    return aString === bString;
  }

  function DateSeparator(_ref) {
    var className = _ref.className,
        children = _ref.children,
        separatorColor = _ref.separatorColor;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-separator']).join(' ')
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: ['sendbird-separator__left', "".concat(changeColorToClassName$2(separatorColor), "--background-color")].join(' ')
    }), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-separator__text"
    }, children), /*#__PURE__*/React__default__default.createElement("div", {
      className: ['sendbird-separator__right', "".concat(changeColorToClassName$2(separatorColor), "--background-color")].join(' ')
    }));
  }
  DateSeparator.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.element]),
    separatorColor: PropTypes.string
  };
  DateSeparator.defaultProps = {
    className: '',
    children: /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, "Date Separator"),
    separatorColor: Colors$2.ONBACKGROUND_4
  };

  // import IconAttach from '../../svgs/icon-attach.svg';

  var LINE_HEIGHT = 76;

  var noop$2 = function noop() {};

  var KeyCode = {
    SHIFT: 16,
    ENTER: 13
  };

  var handleUploadFile = function handleUploadFile(callback) {
    return function (event) {
      if (event.target.files && event.target.files[0]) {
        callback(event.target.files[0]);
      } // eslint-disable-next-line no-param-reassign


      event.target.value = '';
    };
  };

  var MessageInput = /*#__PURE__*/React__default__default.forwardRef(function (props, ref) {
    var isEdit = props.isEdit,
        disabled = props.disabled,
        value = props.value,
        name = props.name,
        placeholder = props.placeholder,
        maxLength = props.maxLength,
        onFileUpload = props.onFileUpload,
        onSendMessage = props.onSendMessage,
        onCancelEdit = props.onCancelEdit,
        onStartTyping = props.onStartTyping;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var fileInputRef = React__default.useRef(null);

    var _useState = React__default.useState(value),
        _useState2 = _slicedToArray(_useState, 2),
        inputValue = _useState2[0],
        setInputValue = _useState2[1];

    var _useState3 = React__default.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isShiftPressed = _useState4[0],
        setIsShiftPressed = _useState4[1];

    var setHeight = function setHeight() {
      try {
        var elem = ref.current;
        var MAX_HEIGHT = window.document.body.offsetHeight * 0.6;

        if (elem && elem.scrollHeight >= LINE_HEIGHT) {
          if (MAX_HEIGHT < elem.scrollHeight) {
            elem.style.height = 'auto';
            elem.style.height = "".concat(MAX_HEIGHT, "px");
          } else {
            elem.style.height = 'auto';
            elem.style.height = "".concat(elem.scrollHeight, "px");
          }
        } else {
          elem.style.height = '';
        }
      } catch (error) {// error
      }
    }; // after setHeight called twice, the textarea goes to the initialized


    React__default.useEffect(function () {
      setHeight();
      return setHeight;
    }, [inputValue]);

    var sendMessage = function sendMessage() {
      if (inputValue && inputValue.trim().length > 0) {
        var trimmedInputValue = inputValue.trim();

        if (isEdit) {
          onSendMessage(name, trimmedInputValue, function () {
            onCancelEdit();
          });
        } else {
          onSendMessage(trimmedInputValue);
          setInputValue('');
        }
      }
    };

    return /*#__PURE__*/React__default__default.createElement("form", {
      className: [isEdit ? 'sendbird-message-input__edit' : '', disabled ? 'sendbird-message-input-form__disabled' : ''].join(' ')
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: ['sendbird-message-input', disabled ? 'sendbird-message-input__disabled' : ''].join(' ')
    }, /*#__PURE__*/React__default__default.createElement("textarea", {
      className: "sendbird-message-input--textarea",
      disabled: disabled,
      ref: ref,
      name: name,
      value: inputValue,
      maxLength: maxLength,
      onChange: function onChange(e) {
        setInputValue(e.target.value);
        onStartTyping();
      },
      onKeyDown: function onKeyDown(e) {
        if (e.keyCode === KeyCode.SHIFT) {
          setIsShiftPressed(true);
        }

        if (!isShiftPressed && e.keyCode === KeyCode.ENTER) {
          e.preventDefault();
          sendMessage();
        }
      },
      onKeyUp: function onKeyUp(e) {
        if (e.keyCode === KeyCode.SHIFT) {
          setIsShiftPressed(false);
        }
      }
    }), !inputValue && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-message-input--placeholder",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_3
    }, placeholder || stringSet.CHANNEL__MESSAGE_INPUT__PLACE_HOLDER), !isEdit && inputValue && inputValue.trim().length > 0 && /*#__PURE__*/React__default__default.createElement(IconButton, {
      className: "sendbird-message-input--send",
      height: "32px",
      width: "32px",
      onClick: sendMessage
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.SEND,
      fillColor: IconColors.PRIMARY,
      width: "20px",
      height: "20px"
    })), !isEdit && (!inputValue || !(inputValue.trim().length > 0)) && /*#__PURE__*/React__default__default.createElement(IconButton, {
      className: "sendbird-message-input--attach",
      height: "32px",
      width: "32px",
      onClick: function onClick() {
        // todo: clear previous input
        fileInputRef.current.click();
      }
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.ATTACH,
      fillColor: IconColors.CONTENT_INVERSE,
      width: "20px",
      height: "20px"
    }), /*#__PURE__*/React__default__default.createElement("input", {
      className: "sendbird-message-input--attach-input",
      type: "file",
      ref: fileInputRef,
      onChange: handleUploadFile(onFileUpload)
    }))), isEdit && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-message-input--edit-action"
    }, /*#__PURE__*/React__default__default.createElement(Button, {
      className: "sendbird-message-input--edit-action__cancel",
      type: ButtonTypes.SECONDARY,
      size: ButtonSizes.SMALL,
      onClick: onCancelEdit
    }, stringSet.BUTTON__CANCEL), /*#__PURE__*/React__default__default.createElement(Button, {
      className: "sendbird-message-input--edit-action__save",
      type: ButtonTypes.PRIMARY,
      size: ButtonSizes.SMALL,
      onClick: function onClick() {
        if (inputValue) {
          var trimmedInputValue = inputValue.trim();
          onSendMessage(name, trimmedInputValue, function () {
            onCancelEdit();
          });
        }
      }
    }, stringSet.BUTTON__SAVE)));
  });
  MessageInput.propTypes = {
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    isEdit: PropTypes.bool,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.string,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    onFileUpload: PropTypes.func,
    onSendMessage: PropTypes.func,
    onStartTyping: PropTypes.func,
    onCancelEdit: PropTypes.func
  };
  MessageInput.defaultProps = {
    value: '',
    onSendMessage: noop$2,
    name: 'sendbird-message-input',
    isEdit: false,
    disabled: false,
    placeholder: '',
    maxLength: 5000,
    onFileUpload: noop$2,
    onCancelEdit: noop$2,
    onStartTyping: noop$2
  };

  var FileViewerComponent = function FileViewerComponent(_ref) {
    var profileUrl = _ref.profileUrl,
        nickname = _ref.nickname,
        name = _ref.name,
        type = _ref.type,
        url = _ref.url,
        isByMe = _ref.isByMe,
        onClose = _ref.onClose,
        onDelete = _ref.onDelete;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer__header"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer__header__left"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer__header__left__avatar"
    }, /*#__PURE__*/React__default__default.createElement(Avatar$1, {
      height: "32px",
      width: "32px",
      src: profileUrl
    })), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-fileviewer__header__left__filename",
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, name), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-fileviewer__header__left__sender-name",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_2
    }, nickname)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer__header__right"
    }, !unSupported(type) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer__header__right__actions"
    }, /*#__PURE__*/React__default__default.createElement("a", {
      className: "sendbird-fileviewer__header__right__actions__download",
      rel: "noopener noreferrer",
      href: url,
      target: "_blank"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.DOWNLOAD,
      height: "24px",
      width: "24px"
    })), onDelete && isByMe && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer__header__right__actions__delete"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.DELETE,
      height: "24px",
      width: "24px",
      onClick: onDelete
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer__header__right__actions__close"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.CLOSE,
      height: "24px",
      width: "24px",
      onClick: onClose
    })))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer__content"
    }, isVideo(type) &&
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/media-has-caption
    React__default__default.createElement("video", {
      controls: true,
      className: "sendbird-fileviewer__content__video"
    }, /*#__PURE__*/React__default__default.createElement("source", {
      src: url,
      type: type
    })), isImage(type) && /*#__PURE__*/React__default__default.createElement("img", {
      src: url,
      alt: name,
      className: "sendbird-fileviewer__content__img"
    }), unSupported(type) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-fileviewer__content__unsupported"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.H_1,
      color: LabelColors.ONBACKGROUND_1
    }, "Unsupoprted message"))));
  };
  FileViewerComponent.propTypes = {
    profileUrl: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isByMe: PropTypes.bool
  };
  FileViewerComponent.defaultProps = {
    isByMe: true
  };
  function FileViewer(props) {
    var message = props.message,
        isByMe = props.isByMe,
        onClose = props.onClose,
        onDelete = props.onDelete;
    var sender = message.sender,
        type = message.type,
        url = message.url,
        _message$name = message.name,
        name = _message$name === void 0 ? '' : _message$name;
    var profileUrl = sender.profileUrl,
        _sender$nickname = sender.nickname,
        nickname = _sender$nickname === void 0 ? '' : _sender$nickname;
    return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default__default.createElement(FileViewerComponent, {
      profileUrl: profileUrl,
      nickname: nickname,
      type: type,
      url: url,
      name: name,
      onClose: onClose,
      onDelete: onDelete,
      isByMe: isByMe
    }), document.getElementById(MODAL_ROOT));
  }
  FileViewer.propTypes = {
    message: PropTypes.shape({
      sender: PropTypes.shape({
        profileUrl: PropTypes.string,
        nickname: PropTypes.string
      }),
      type: PropTypes.string,
      url: PropTypes.string,
      name: PropTypes.string
    }).isRequired,
    isByMe: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };
  FileViewer.defaultProps = {
    isByMe: true
  };

  var http = /https?:\/\//;
  function LinkLabel(_ref) {
    var className = _ref.className,
        src = _ref.src,
        type = _ref.type,
        color = _ref.color,
        children = _ref.children;
    var url = http.test(src) ? src : "http://".concat(src);
    return /*#__PURE__*/React__default__default.createElement("a", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-link-label', color ? changeColorToClassName(color) : '']).join(' '),
      href: url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-link-label__label",
      type: type,
      color: color
    }, children));
  }
  LinkLabel.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(LabelTypography)).isRequired,
    color: PropTypes.oneOf(Object.keys(LabelColors)).isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.element)]).isRequired
  };
  LinkLabel.defaultProps = {
    className: ''
  };

  var copyToClipboard = function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData('Text', text);
    }

    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      var textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.

      document.body.appendChild(textarea);
      textarea.select();

      try {
        return document.execCommand('copy'); // Security exception may be thrown by some browsers.
      } catch (ex) {
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }

    return false;
  };
  var getMessageCreatedAt$1 = function getMessageCreatedAt(message) {
    return format(message.createdAt || 0, 'p');
  };
  var getSenderName$1 = function getSenderName(message) {
    return message.sender && (message.sender.friendName || message.sender.nickname || message.sender.userId);
  };
  var getSenderProfileUrl$1 = function getSenderProfileUrl(message) {
    return message.sender && message.sender.profileUrl;
  };
  var getIsSentFromStatus$1 = function getIsSentFromStatus(status) {
    return status === MessageStatusType.SENT || status === MessageStatusType.DELIVERED || status === MessageStatusType.READ;
  };
  var getIsSentFromSendingStatus$1 = function getIsSentFromSendingStatus() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (message.sendingStatus && typeof message.sendingStatus === 'string') {
      return message.sendingStatus === 'none' || message.sendingStatus === 'succeeded';
    }

    return false;
  };

  var RESET_MESSAGES = 'RESET_MESSAGES';
  var RESET_STATE = 'RESET_STATE';
  var CLEAR_SENT_MESSAGES = 'CLEAR_SENT_MESSAGES';
  var GET_PREV_MESSAGES_START = 'GET_PREV_MESSAGES_START';
  var GET_PREV_MESSAGES_SUCESS = 'GET_PREV_MESSAGES_SUCESS';
  var GET_NEXT_MESSAGES_SUCESS = 'GET_NEXT_MESSAGES_SUCESS';
  var GET_NEXT_MESSAGES_FAILURE = 'GET_NEXT_MESSAGES_FAILURE';
  var SEND_MESSAGEGE_START = 'SEND_MESSAGEGE_START';
  var SEND_MESSAGEGE_SUCESS = 'SEND_MESSAGEGE_SUCESS';
  var SEND_MESSAGEGE_FAILURE = 'SEND_MESSAGEGE_FAILURE';
  var RESEND_MESSAGEGE_START = 'RESEND_MESSAGEGE_START';
  var ON_MESSAGE_RECEIVED = 'ON_MESSAGE_RECEIVED';
  var UPDATE_UNREAD_COUNT = 'UPDATE_UNREAD_COUNT';
  var ON_MESSAGE_UPDATED = 'ON_MESSAGE_UPDATED';
  var ON_MESSAGE_DELETED = 'ON_MESSAGE_DELETED';
  var ON_MESSAGE_DELETED_BY_REQ_ID = 'ON_MESSAGE_DELETED_BY_REQ_ID';
  var SET_CURRENT_CHANNEL$1 = 'SET_CURRENT_CHANNEL';
  var SET_CHANNEL_INVALID = 'SET_CHANNEL_INVALID';
  var MARK_AS_READ = 'MARK_AS_READ';
  var ON_REACTION_UPDATED = 'ON_REACTION_UPDATED';
  var SET_EMOJI_CONTAINER = 'SET_EMOJI_CONTAINER';
  var SET_READ_STATUS = 'SET_READ_STATUS';
  var MESSAGE_LIST_PARAMS_CHANGED = 'MESSAGE_LIST_PARAMS_CHANGED';

  var MessageTypes = {
    ADMIN: 'ADMIN',
    USER: 'USER',
    FILE: 'FILE',
    THUMBNAIL: 'THUMBNAIL',
    OG: 'OG'
  };
  var SendingMessageStatus = {
    NONE: 'none',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed',
    PENDING: 'pending'
  };
  var getMessageType = function getMessageType(message) {
    if (message.isUserMessage && message.isUserMessage() || message.messageType === 'user') {
      return message.ogMetaData ? MessageTypes.OG : MessageTypes.USER;
    }

    if (message.isAdminMessage && message.isAdminMessage()) {
      return MessageTypes.ADMIN;
    }

    if (message.isFileMessage && message.isFileMessage() || message.messageType === 'file') {
      return isImage(message.type) || isVideo(message.type) ? MessageTypes.THUMBNAIL : MessageTypes.FILE;
    }

    return '';
  };

  var UNDEFINED = 'undefined';
  var SUCCEEDED$1 = SendingMessageStatus.SUCCEEDED,
      FAILED$1 = SendingMessageStatus.FAILED,
      PENDING$1 = SendingMessageStatus.PENDING;
  var scrollIntoLast = function scrollIntoLast() {
    var intialTry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var MAX_TRIES = 10;
    var currentTry = intialTry;

    if (currentTry > MAX_TRIES) {
      return;
    }

    try {
      var scrollDOM = document.querySelector('.sendbird-conversation__scroll-container'); // eslint-disable-next-line no-multi-assign

      scrollDOM.scrollTop = scrollDOM.scrollHeight;
    } catch (error) {
      setTimeout(function () {
        scrollIntoLast(currentTry + 1);
      }, 500 * currentTry);
    }
  };
  var pubSubHandleRemover$1 = function pubSubHandleRemover(subscriber) {
    subscriber.forEach(function (s) {
      try {
        s.remove();
      } catch (_unused) {//
      }
    });
  };
  var pubSubHandler$1 = function pubSubHandler(channelUrl, pubSub, dispatcher) {
    var subscriber = new Map();
    if (!pubSub || !pubSub.subscribe) return subscriber;
    subscriber.set(SEND_USER_MESSAGE, pubSub.subscribe(SEND_USER_MESSAGE, function (msg) {
      var channel = msg.channel,
          message = msg.message;
      scrollIntoLast();

      if (channel && channelUrl === channel.url) {
        dispatcher({
          type: SEND_MESSAGEGE_SUCESS,
          payload: message
        });
      }
    }));
    subscriber.set(SEND_MESSAGE_START, pubSub.subscribe(SEND_MESSAGE_START, function (msg) {
      var channel = msg.channel,
          message = msg.message;

      if (channel && channelUrl === channel.url) {
        dispatcher({
          type: SEND_MESSAGEGE_START,
          payload: message
        });
      }
    }));
    subscriber.set(SEND_FILE_MESSAGE, pubSub.subscribe(SEND_FILE_MESSAGE, function (msg) {
      var channel = msg.channel,
          message = msg.message;
      scrollIntoLast();

      if (channel && channelUrl === channel.url) {
        dispatcher({
          type: SEND_MESSAGEGE_SUCESS,
          payload: message
        });
      }
    }));
    subscriber.set(UPDATE_USER_MESSAGE, pubSub.subscribe(UPDATE_USER_MESSAGE, function (msg) {
      var channel = msg.channel,
          message = msg.message,
          fromSelector = msg.fromSelector;

      if (fromSelector && channel && channelUrl === channel.url) {
        dispatcher({
          type: ON_MESSAGE_UPDATED,
          payload: {
            channel: channel,
            message: message
          }
        });
      }
    }));
    subscriber.set(DELETE_MESSAGE, pubSub.subscribe(DELETE_MESSAGE, function (msg) {
      var channel = msg.channel,
          messageId = msg.messageId;

      if (channel && channelUrl === channel.url) {
        dispatcher({
          type: ON_MESSAGE_DELETED,
          payload: messageId
        });
      }
    }));
    return subscriber;
  };
  var getParsedStatus = function getParsedStatus(message, currentGroupChannel) {
    if (message.requestState === FAILED$1) {
      return MessageStatusType.FAILED;
    }

    if (message.requestState === PENDING$1) {
      return MessageStatusType.PENDING;
    }

    if (message.requestState === SUCCEEDED$1) {
      if (!currentGroupChannel) {
        return MessageStatusType.SENT;
      }

      var unreadCount = currentGroupChannel.getReadReceipt(message);

      if (unreadCount === 0) {
        return MessageStatusType.READ;
      }

      var isDelivered = currentGroupChannel.getDeliveryReceipt(message) === 0;

      if (isDelivered) {
        return MessageStatusType.DELIVERED;
      }

      return MessageStatusType.SENT;
    }

    return null;
  };
  var isOperator = function isOperator() {
    var groupChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var myRole = groupChannel.myRole;
    return myRole === 'operator';
  };
  var isDisabledBecauseFrozen = function isDisabledBecauseFrozen() {
    var groupChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFrozen = groupChannel.isFrozen;
    return isFrozen && !isOperator(groupChannel);
  };
  var isDisabledBecauseMuted = function isDisabledBecauseMuted() {
    var groupChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var myMutedState = groupChannel.myMutedState;
    return myMutedState === 'muted';
  };
  var getEmojiCategoriesFromEmojiContainer$1 = function getEmojiCategoriesFromEmojiContainer() {
    var emojiContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return emojiContainer.emojiCategories ? emojiContainer.emojiCategories : [];
  };
  var getAllEmojisFromEmojiContainer$1 = function getAllEmojisFromEmojiContainer() {
    var emojiContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _emojiContainer$emoji = emojiContainer.emojiCategories,
        emojiCategories = _emojiContainer$emoji === void 0 ? [] : _emojiContainer$emoji;
    var allEmojis = [];

    for (var categoryIndex = 0; categoryIndex < emojiCategories.length; categoryIndex += 1) {
      var emojis = emojiCategories[categoryIndex].emojis;

      for (var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex += 1) {
        allEmojis.push(emojis[emojiIndex]);
      }
    }

    return allEmojis;
  };
  var getEmojisFromEmojiContainer$1 = function getEmojisFromEmojiContainer() {
    var emojiContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var emojiCategoryId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return emojiContainer.emojiCategories ? emojiContainer.emojiCategories.filter(function (emojiCategory) {
      return emojiCategory.id === emojiCategoryId;
    })[0].emojis : [];
  };
  var getAllEmojisMapFromEmojiContainer = function getAllEmojisMapFromEmojiContainer() {
    var emojiContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _emojiContainer$emoji2 = emojiContainer.emojiCategories,
        emojiCategories = _emojiContainer$emoji2 === void 0 ? [] : _emojiContainer$emoji2;
    var allEmojisMap = new Map();

    for (var categoryIndex = 0; categoryIndex < emojiCategories.length; categoryIndex += 1) {
      var emojis = emojiCategories[categoryIndex].emojis;

      for (var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex += 1) {
        var _emojis$emojiIndex = emojis[emojiIndex],
            key = _emojis$emojiIndex.key,
            url = _emojis$emojiIndex.url;
        allEmojisMap.set(key, url);
      }
    }

    return allEmojisMap;
  };
  var getNicknamesMapFromMembers = function getNicknamesMapFromMembers() {
    var members = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var nicknamesMap = new Map();

    for (var memberIndex = 0; memberIndex < members.length; memberIndex += 1) {
      var _members$memberIndex = members[memberIndex],
          userId = _members$memberIndex.userId,
          nickname = _members$memberIndex.nickname;
      nicknamesMap.set(userId, nickname);
    }

    return nicknamesMap;
  };
  var getMessageCreatedAt$3 = function getMessageCreatedAt(message) {
    return format(message.createdAt, 'p');
  };
  var isSameGroup = function isSameGroup(message, comparingMessage) {
    if (!message || !comparingMessage || !message.sender || !comparingMessage.sender || !message.createdAt || !comparingMessage.createdAt || !message.sender.userId || !comparingMessage.sender.userId) {
      return false;
    }

    return message.sendingStatus === comparingMessage.sendingStatus && message.sender.userId === comparingMessage.sender.userId && getMessageCreatedAt$3(message) === getMessageCreatedAt$3(comparingMessage);
  };
  var compareMessagesForGrouping = function compareMessagesForGrouping(prevMessage, currMessage, nextMessage) {
    return [isSameGroup(prevMessage, currMessage), isSameGroup(currMessage, nextMessage)];
  };
  var hasOwnProperty = function hasOwnProperty(property) {
    return function (payload) {
      // eslint-disable-next-line no-prototype-builtins
      if (payload && payload.hasOwnProperty && payload.hasOwnProperty(property)) {
        return true;
      }

      return false;
    };
  };
  var passUnsuccessfullMessages = function passUnsuccessfullMessages(allMessages, newMessage) {
    var _newMessage$sendingSt = newMessage.sendingStatus,
        sendingStatus = _newMessage$sendingSt === void 0 ? UNDEFINED : _newMessage$sendingSt;

    if (sendingStatus === SUCCEEDED$1 || sendingStatus === PENDING$1) {
      var lastIndexOfSucceededMessage = allMessages.map(function (message) {
        return message.sendingStatus || (message.isAdminMessage && message.isAdminMessage() ? SUCCEEDED$1 : UNDEFINED);
      }).lastIndexOf(SUCCEEDED$1);

      if (lastIndexOfSucceededMessage + 1 < allMessages.length) {
        var messages = _toConsumableArray(allMessages);

        messages.splice(lastIndexOfSucceededMessage + 1, 0, newMessage);
        return messages;
      }
    }

    return [].concat(_toConsumableArray(allMessages), [newMessage]);
  };
  var pxToNumber$1 = function pxToNumber(px) {
    if (typeof px === 'number') {
      return px;
    }

    if (typeof px === 'string') {
      var parsed = Number.parseFloat(px);

      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }

    return null;
  };

  var messagesInitialState = {
    initialized: false,
    loading: false,
    allMessages: [],
    currentGroupChannel: {
      members: []
    },
    // for scrollup
    hasMore: false,
    lastMessageTimeStamp: 0,
    // for scroll down
    // onScrollDownCallback is added for navigation to different timestamps on messageSearch
    // hasMoreToBottom, onScrollDownCallback -> scroll down
    // hasMore, onScrollCallback -> scroll up(default behavior)
    hasMoreToBottom: false,
    latestFetchedMessageTimeStamp: 0,
    emojiContainer: {},
    readStatus: {},
    unreadCount: 0,
    unreadSince: null,
    isInvalid: false,
    messageListParams: null
  };

  var SUCCEEDED = SendingMessageStatus.SUCCEEDED,
      FAILED = SendingMessageStatus.FAILED,
      PENDING = SendingMessageStatus.PENDING;
  function reducer$3(state, action) {
    switch (action.type) {
      case RESET_STATE:
        return messagesInitialState;

      case RESET_MESSAGES:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          // when user switches channel, if the previous channel `hasMore`
          // the onScroll gets called twice, setting hasMore false prevents this
          hasMore: false,
          allMessages: []
        });

      case GET_PREV_MESSAGES_START:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          loading: true
        });

      case CLEAR_SENT_MESSAGES:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: _toConsumableArray(state.allMessages.filter(function (m) {
            return m.sendingStatus !== SUCCEEDED;
          }))
        });

      case GET_PREV_MESSAGES_SUCESS:
        {
          var receivedMessages = action.payload.messages || [];
          var _action$payload$curre = action.payload.currentGroupChannel,
              currentGroupChannel = _action$payload$curre === void 0 ? {} : _action$payload$curre;
          var stateChannel = state.currentGroupChannel || {};
          var stateChannelUrl = stateChannel.url;
          var actionChannelUrl = currentGroupChannel.url;

          if (actionChannelUrl !== stateChannelUrl) {
            return state;
          } // remove duplicate messages


          var filteredAllMessages = state.allMessages.filter(function (msg) {
            return !receivedMessages.find(function (_ref) {
              var messageId = _ref.messageId;
              return compareIds(messageId, msg.messageId);
            });
          });
          var hasHasMoreToBottom = hasOwnProperty('hasMoreToBottom')(action.payload);
          var hasLatestFetchedMessageTimeStamp = hasOwnProperty('latestFetchedMessageTimeStamp')(action.payload);
          return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, state), {}, {
            loading: false,
            initialized: true,
            hasMore: action.payload.hasMore,
            lastMessageTimeStamp: action.payload.lastMessageTimeStamp
          }, hasHasMoreToBottom && {
            hasMoreToBottom: action.payload.hasMoreToBottom
          }), hasLatestFetchedMessageTimeStamp && {
            latestFetchedMessageTimeStamp: action.payload.latestFetchedMessageTimeStamp
          }), {}, {
            allMessages: [].concat(_toConsumableArray(receivedMessages), _toConsumableArray(filteredAllMessages))
          });
        }

      case GET_NEXT_MESSAGES_SUCESS:
        {
          var _receivedMessages = action.payload.messages || [];

          var _action$payload$curre2 = action.payload.currentGroupChannel,
              _currentGroupChannel = _action$payload$curre2 === void 0 ? {} : _action$payload$curre2;

          var _stateChannel = state.currentGroupChannel || {};

          var _stateChannelUrl = _stateChannel.url;
          var _actionChannelUrl = _currentGroupChannel.url;

          if (_actionChannelUrl !== _stateChannelUrl) {
            return state;
          } // remove duplicate messages


          var _filteredAllMessages = state.allMessages.filter(function (msg) {
            return !_receivedMessages.find(function (_ref2) {
              var messageId = _ref2.messageId;
              return compareIds(messageId, msg.messageId);
            });
          });

          return _objectSpread2(_objectSpread2({}, state), {}, {
            loading: false,
            initialized: true,
            hasMore: action.payload.hasMore,
            lastMessageTimeStamp: action.payload.lastMessageTimeStamp,
            hasMoreToBottom: action.payload.hasMoreToBottom,
            latestFetchedMessageTimeStamp: action.payload.latestFetchedMessageTimeStamp,
            allMessages: [].concat(_toConsumableArray(_filteredAllMessages), _toConsumableArray(_receivedMessages))
          });
        }

      case GET_NEXT_MESSAGES_FAILURE:
        {
          return _objectSpread2({}, state);
        }

      case SEND_MESSAGEGE_START:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: [].concat(_toConsumableArray(state.allMessages), [_objectSpread2({}, action.payload)])
        });

      case SEND_MESSAGEGE_SUCESS:
        {
          var newMessages = state.allMessages.map(function (m) {
            return compareIds(m.reqId, action.payload.reqId) ? action.payload : m;
          });

          _toConsumableArray(newMessages).sort(function (a, b) {
            return a.sendingStatus && b.sendingStatus && a.sendingStatus === SUCCEEDED && (b.sendingStatus === PENDING || b.sendingStatus === FAILED) ? -1 : 1;
          });

          return _objectSpread2(_objectSpread2({}, state), {}, {
            allMessages: newMessages
          });
        }

      case SEND_MESSAGEGE_FAILURE:
        {
          // eslint-disable-next-line no-param-reassign
          action.payload.failed = true;
          return _objectSpread2(_objectSpread2({}, state), {}, {
            allMessages: state.allMessages.map(function (m) {
              return compareIds(m.reqId, action.payload.reqId) ? action.payload : m;
            })
          });
        }

      case SET_CURRENT_CHANNEL$1:
        {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            currentGroupChannel: action.payload,
            isInvalid: false
          });
        }

      case SET_CHANNEL_INVALID:
        {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            isInvalid: true
          });
        }

      case UPDATE_UNREAD_COUNT:
        {
          var channel = action.payload.channel;

          var _state$currentGroupCh = state.currentGroupChannel,
              _currentGroupChannel2 = _state$currentGroupCh === void 0 ? {} : _state$currentGroupCh,
              unreadCount = state.unreadCount;

          var currentGroupChannelUrl = _currentGroupChannel2.url;

          if (!compareIds(channel.url, currentGroupChannelUrl)) {
            return state;
          }

          return _objectSpread2(_objectSpread2({}, state), {}, {
            unreadSince: unreadCount + 1
          });
        }

      case ON_MESSAGE_RECEIVED:
        {
          var _action$payload = action.payload,
              _channel = _action$payload.channel,
              message = _action$payload.message,
              scrollToEnd = _action$payload.scrollToEnd;
          var _unreadCount = 0;

          var _state$currentGroupCh2 = state.currentGroupChannel,
              _currentGroupChannel3 = _state$currentGroupCh2 === void 0 ? {} : _state$currentGroupCh2,
              unreadSince = state.unreadSince;

          var _currentGroupChannelUrl = _currentGroupChannel3.url;

          if (!compareIds(_channel.url, _currentGroupChannelUrl) || !(state.allMessages.map(function (msg) {
            return msg.messageId;
          }).indexOf(message.messageId) < 0) // Excluded overlapping messages
          || state.messageListParams && !filterMessageListParams(state.messageListParams, message) // Filter by userFilledQuery
          ) {
              return state;
            }

          _unreadCount = state.unreadCount + 1; // reset unreadCount if have to scrollToEnd

          if (scrollToEnd) {
            _unreadCount = 0;
          }

          if (message.isAdminMessage && message.isAdminMessage()) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              allMessages: passUnsuccessfullMessages(state.allMessages, message)
            });
          }

          return _objectSpread2(_objectSpread2({}, state), {}, {
            unreadCount: _unreadCount,
            unreadSince: _unreadCount === 1 ? format(new Date(), 'p MMM dd') : unreadSince,
            allMessages: passUnsuccessfullMessages(state.allMessages, message)
          });
        }

      case ON_MESSAGE_UPDATED:
        {
          var _message = action.payload.message;

          if (state.messageListParams && !filterMessageListParams(state.messageListParams, _message)) {
            // Delete the message if it doesn't match to the params anymore
            return _objectSpread2(_objectSpread2({}, state), {}, {
              allMessages: state.allMessages.filter(function (m) {
                return !compareIds(m.messageId, action.payload);
              })
            });
          }

          return _objectSpread2(_objectSpread2({}, state), {}, {
            allMessages: state.allMessages.map(function (m) {
              return compareIds(m.messageId, action.payload.message.messageId) ? action.payload.message : m;
            })
          });
        }

      case RESEND_MESSAGEGE_START:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: state.allMessages.map(function (m) {
            return compareIds(m.reqId, action.payload.reqId) ? action.payload : m;
          })
        });

      case MARK_AS_READ:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          unreadCount: 0,
          unreadSince: null
        });

      case ON_MESSAGE_DELETED:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: state.allMessages.filter(function (m) {
            return !compareIds(m.messageId, action.payload);
          })
        });

      case ON_MESSAGE_DELETED_BY_REQ_ID:
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: state.allMessages.filter(function (m) {
            return !compareIds(m.reqId, action.payload);
          })
        });

      case SET_EMOJI_CONTAINER:
        {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            emojiContainer: action.payload
          });
        }

      case SET_READ_STATUS:
        {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            readStatus: action.payload
          });
        }

      case ON_REACTION_UPDATED:
        {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            allMessages: state.allMessages.map(function (m) {
              if (compareIds(m.messageId, action.payload.messageId)) {
                if (m.applyReactionEvent && typeof m.applyReactionEvent === 'function') {
                  m.applyReactionEvent(action.payload);
                }

                return m;
              }

              return m;
            })
          });
        }

      case MESSAGE_LIST_PARAMS_CHANGED:
        {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            messageListParams: action.payload
          });
        }

      default:
        return state;
    }
  }

  /**
   * Handles ChannelEvents and send values to dispatcher using messagesDispatcher
   * messagesDispatcher: Dispatcher
   * sdk: sdkInstance
   * logger: loggerInstance
   * channelUrl: string
   * sdkInit: bool
   */

  function useHandleChannelEvents(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel,
        sdkInit = _ref.sdkInit,
        hasMoreToBottom = _ref.hasMoreToBottom;
    var messagesDispatcher = _ref2.messagesDispatcher,
        sdk = _ref2.sdk,
        logger = _ref2.logger,
        scrollRef = _ref2.scrollRef;
    var channelUrl = currentGroupChannel && currentGroupChannel.url;
    React__default.useEffect(function () {
      var messageReceiverId = uuidv4();

      if (channelUrl && sdk && sdk.ChannelHandler) {
        var ChannelHandler = new sdk.ChannelHandler();
        logger.info('Channel | useHandleChannelEvents: Setup event handler', messageReceiverId);

        ChannelHandler.onMessageReceived = function (channel, message) {
          // donot update if hasMoreToBottom
          if (compareIds(channel.url, currentGroupChannel.url) && !hasMoreToBottom) {
            var scrollToEnd = false;

            try {
              var current = scrollRef.current;
              scrollToEnd = current.offsetHeight + current.scrollTop >= current.scrollHeight;
            } catch (error) {//
            }

            logger.info('Channel | useHandleChannelEvents: onMessageReceived', message);
            messagesDispatcher({
              type: ON_MESSAGE_RECEIVED,
              payload: {
                channel: channel,
                message: message,
                scrollToEnd: scrollToEnd
              }
            });

            if (scrollToEnd) {
              try {
                setTimeout(function () {
                  currentGroupChannel.markAsRead();
                  scrollIntoLast();
                });
              } catch (error) {
                logger.warning('Channel | onMessageReceived | scroll to end failed');
              }
            }
          }

          if (compareIds(channel.url, currentGroupChannel.url) && hasMoreToBottom) {
            messagesDispatcher({
              type: UPDATE_UNREAD_COUNT,
              payload: {
                channel: channel
              }
            });
          }
        };

        ChannelHandler.onMessageUpdated = function (channel, message) {
          logger.info('Channel | useHandleChannelEvents: onMessageUpdated', message);
          messagesDispatcher({
            type: ON_MESSAGE_UPDATED,
            payload: {
              channel: channel,
              message: message
            }
          });
        };

        ChannelHandler.onMessageDeleted = function (_, messageId) {
          logger.info('Channel | useHandleChannelEvents: onMessageDeleted', messageId);
          messagesDispatcher({
            type: ON_MESSAGE_DELETED,
            payload: messageId
          });
        };

        ChannelHandler.onReactionUpdated = function (_, reactionEvent) {
          logger.info('Channel | useHandleChannelEvents: onReactionUpdated', reactionEvent);
          messagesDispatcher({
            type: ON_REACTION_UPDATED,
            payload: reactionEvent
          });
        };

        ChannelHandler.onChannelChanged = function (groupChannel) {
          if (compareIds(groupChannel.url, currentGroupChannel.url)) {
            logger.info('Channel | useHandleChannelEvents: onChannelChanged', groupChannel);
            messagesDispatcher({
              type: SET_CURRENT_CHANNEL$1,
              payload: groupChannel
            });
          }
        };

        ChannelHandler.onChannelFrozen = function (groupChannel) {
          if (compareIds(groupChannel.url, currentGroupChannel.url)) {
            logger.info('Channel | useHandleChannelEvents: onChannelFrozen', groupChannel);
            messagesDispatcher({
              type: SET_CURRENT_CHANNEL$1,
              payload: groupChannel
            });
          }
        };

        ChannelHandler.onChannelUnfrozen = function (groupChannel) {
          if (compareIds(groupChannel.url, currentGroupChannel.url)) {
            logger.info('Channel | useHandleChannelEvents: onChannelUnFrozen', groupChannel);
            messagesDispatcher({
              type: SET_CURRENT_CHANNEL$1,
              payload: groupChannel
            });
          }
        };

        ChannelHandler.onUserMuted = function (groupChannel) {
          if (compareIds(groupChannel.url, currentGroupChannel.url)) {
            logger.info('Channel | useHandleChannelEvents: onUserMuted', groupChannel);
            messagesDispatcher({
              type: SET_CURRENT_CHANNEL$1,
              payload: groupChannel
            });
          }
        };

        ChannelHandler.onUserUnmuted = function (groupChannel) {
          if (compareIds(groupChannel.url, currentGroupChannel.url)) {
            logger.info('Channel | useHandleChannelEvents: onUserUnmuted', groupChannel);
            messagesDispatcher({
              type: SET_CURRENT_CHANNEL$1,
              payload: groupChannel
            });
          }
        };

        ChannelHandler.onUserBanned = function (groupChannel) {
          if (compareIds(groupChannel.url, currentGroupChannel.url)) {
            logger.info('Channel | useHandleChannelEvents: onUserBanned', groupChannel);
            messagesDispatcher({
              type: SET_CURRENT_CHANNEL$1,
              payload: groupChannel
            });
          }
        };

        ChannelHandler.onOperatorUpdated = function (groupChannel) {
          if (compareIds(groupChannel.url, currentGroupChannel.url)) {
            logger.info('Channel | useHandleChannelEvents: onOperatorUpdated', groupChannel);
            messagesDispatcher({
              type: SET_CURRENT_CHANNEL$1,
              payload: groupChannel
            });
          }
        }; // Add this channel event handler to the SendBird object.


        sdk.addChannelHandler(messageReceiverId, ChannelHandler);
      }

      return function () {
        if (sdk && sdk.removeChannelHandler) {
          logger.info('Channel | useHandleChannelEvents: Removing message reciver handler', messageReceiverId);
          sdk.removeChannelHandler(messageReceiverId);
        }
      };
    }, [channelUrl, sdkInit]);
  }

  function useSetChannel(_ref, _ref2) {
    var channelUrl = _ref.channelUrl,
        sdkInit = _ref.sdkInit;
    var messagesDispatcher = _ref2.messagesDispatcher,
        sdk = _ref2.sdk,
        logger = _ref2.logger;
    React__default.useEffect(function () {
      if (channelUrl && sdkInit && sdk && sdk.GroupChannel) {
        logger.info('Channel | useSetChannel fetching channel', channelUrl);
        sdk.GroupChannel.getChannel(channelUrl).then(function (groupChannel) {
          logger.info('Channel | useSetChannel fetched channel', groupChannel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL$1,
            payload: groupChannel
          });
          logger.info('Channel: Mark as read', groupChannel); // this order is important - this mark as read should update the event handler up above

          groupChannel.markAsRead();
        }).catch(function (e) {
          logger.warning('Channel | useSetChannel fetch channel failed', {
            channelUrl: channelUrl,
            e: e
          });
          messagesDispatcher({
            type: SET_CHANNEL_INVALID
          });
        });
        sdk.getAllEmoji(function (emojiContainer_, err) {
          if (err) {
            logger.error('Channel: Getting emojis failed', err);
            return;
          }

          logger.info('Channel: Getting emojis success', emojiContainer_);
          messagesDispatcher({
            type: SET_EMOJI_CONTAINER,
            payload: emojiContainer_
          });
        });
      }
    }, [channelUrl, sdkInit]);
  }

  var PREV_RESULT_SIZE = 30;
  var NEXT_RESULT_SIZE = 10;

  var getLatestMessageTimeStamp = function getLatestMessageTimeStamp() {
    var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var latestMessage = messages[messages.length - 1];
    return latestMessage && latestMessage.createdAt || null;
  };

  function useInitialMessagesFetch(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel,
        userFilledMessageListQuery = _ref.userFilledMessageListQuery,
        intialTimeStamp = _ref.intialTimeStamp;
    var sdk = _ref2.sdk,
        logger = _ref2.logger,
        messagesDispatcher = _ref2.messagesDispatcher;
    var channelUrl = currentGroupChannel && currentGroupChannel.url;
    React__default.useEffect(function () {
      logger.info('Channel useInitialMessagesFetch: Setup started', currentGroupChannel);
      messagesDispatcher({
        type: RESET_MESSAGES
      });

      if (sdk && sdk.MessageListParams && currentGroupChannel && currentGroupChannel.getMessagesByTimestamp) {
        var messageListParams = new sdk.MessageListParams();
        messageListParams.prevResultSize = PREV_RESULT_SIZE;
        messageListParams.isInclusive = true;
        messageListParams.includeReplies = false;
        messageListParams.includeReaction = true;

        if (userFilledMessageListQuery) {
          Object.keys(userFilledMessageListQuery).forEach(function (key) {
            messageListParams[key] = userFilledMessageListQuery[key];
          });
          logger.info('Channel useInitialMessagesFetch: Setup messageListParams', messageListParams);
          messagesDispatcher({
            type: MESSAGE_LIST_PARAMS_CHANGED,
            payload: messageListParams
          });
        }

        logger.info('Channel: Fetching messages', {
          currentGroupChannel: currentGroupChannel,
          userFilledMessageListQuery: userFilledMessageListQuery
        });
        messagesDispatcher({
          type: GET_PREV_MESSAGES_START
        });

        if (intialTimeStamp) {
          messageListParams.nextResultSize = NEXT_RESULT_SIZE;
          currentGroupChannel.getMessagesByTimestamp(intialTimeStamp, messageListParams).then(function (messages) {
            var hasMore = messages && messages.length > 0;
            var lastMessageTimeStamp = hasMore ? messages[0].createdAt : null;
            var latestFetchedMessageTimeStamp = getLatestMessageTimeStamp(messages); // to make sure there are no more messages below

            var nextMessageListParams = new sdk.MessageListParams();
            nextMessageListParams.nextResultSize = NEXT_RESULT_SIZE;
            currentGroupChannel.getMessagesByTimestamp(latestFetchedMessageTimeStamp || new Date().getTime(), nextMessageListParams).then(function (nextMessages) {
              messagesDispatcher({
                type: GET_PREV_MESSAGES_SUCESS,
                payload: {
                  messages: messages,
                  hasMore: hasMore,
                  lastMessageTimeStamp: lastMessageTimeStamp,
                  currentGroupChannel: currentGroupChannel,
                  latestFetchedMessageTimeStamp: latestFetchedMessageTimeStamp,
                  hasMoreToBottom: nextMessages && nextMessages.length > 0
                }
              });
            });
          }).catch(function (error) {
            logger.error('Channel: Fetching messages failed', error);
            messagesDispatcher({
              type: GET_PREV_MESSAGES_SUCESS,
              payload: {
                messages: [],
                hasMore: false,
                lastMessageTimeStamp: 0,
                currentGroupChannel: currentGroupChannel
              }
            });
          }).finally(function () {
            if (!intialTimeStamp) {
              setTimeout(function () {
                return scrollIntoLast();
              });
            }

            currentGroupChannel.markAsRead();
          });
        } else {
          currentGroupChannel.getMessagesByTimestamp(new Date().getTime(), messageListParams).then(function (messages) {
            var hasMore = messages && messages.length > 0;
            var lastMessageTimeStamp = hasMore ? messages[0].createdAt : null;
            var latestFetchedMessageTimeStamp = getLatestMessageTimeStamp(messages);
            messagesDispatcher({
              type: GET_PREV_MESSAGES_SUCESS,
              payload: {
                messages: messages,
                hasMore: hasMore,
                lastMessageTimeStamp: lastMessageTimeStamp,
                currentGroupChannel: currentGroupChannel,
                latestFetchedMessageTimeStamp: latestFetchedMessageTimeStamp,
                hasMoreToBottom: false
              }
            });
          }).catch(function (error) {
            logger.error('Channel: Fetching messages failed', error);
            messagesDispatcher({
              type: GET_PREV_MESSAGES_SUCESS,
              payload: {
                messages: [],
                hasMore: false,
                lastMessageTimeStamp: 0,
                currentGroupChannel: currentGroupChannel
              }
            });
          }).finally(function () {
            if (!intialTimeStamp) {
              setTimeout(function () {
                return scrollIntoLast();
              });
            }

            currentGroupChannel.markAsRead();
          });
        }
      }
    }, [channelUrl, userFilledMessageListQuery, intialTimeStamp]);
    /**
     * Note - useEffect(() => {}, [currentGroupChannel])
     * was buggy, that is why we did
     * const channelUrl = currentGroupChannel && currentGroupChannel.url;
     * useEffect(() => {}, [channelUrl])
     * Again, this hook is supposed to execute when currentGroupChannel changes
     * The 'channelUrl' here is not the same memory reference from Conversation.props
     */
  }

  function useHandleReconnect(_ref, _ref2) {
    var isOnline = _ref.isOnline;
    var logger = _ref2.logger,
        sdk = _ref2.sdk,
        currentGroupChannel = _ref2.currentGroupChannel,
        messagesDispatcher = _ref2.messagesDispatcher,
        userFilledMessageListQuery = _ref2.userFilledMessageListQuery;
    React__default.useEffect(function () {
      var wasOffline = !isOnline;
      return function () {
        // state changed from offline to online
        if (wasOffline) {
          logger.info('Refreshing conversation state');
          var _sdk$appInfo = sdk.appInfo,
              appInfo = _sdk$appInfo === void 0 ? {} : _sdk$appInfo;
          var useReaction = appInfo.isUsingReaction || false;
          var messageListParams = new sdk.MessageListParams();
          messageListParams.prevResultSize = 30;
          messageListParams.includeReplies = false;
          messageListParams.includeReaction = useReaction;

          if (userFilledMessageListQuery) {
            Object.keys(userFilledMessageListQuery).forEach(function (key) {
              messageListParams[key] = userFilledMessageListQuery[key];
            });
          }

          logger.info('Channel: Fetching messages', {
            currentGroupChannel: currentGroupChannel,
            userFilledMessageListQuery: userFilledMessageListQuery
          });
          messagesDispatcher({
            type: GET_PREV_MESSAGES_START
          });
          sdk.GroupChannel.getChannel(currentGroupChannel.url).then(function (groupChannel) {
            var lastMessageTime = new Date().getTime();
            groupChannel.getMessagesByTimestamp(lastMessageTime, messageListParams).then(function (messages) {
              messagesDispatcher({
                type: CLEAR_SENT_MESSAGES
              });
              var hasMore = messages && messages.length > 0;
              var lastMessageTimeStamp = hasMore ? messages[0].createdAt : null;
              messagesDispatcher({
                type: GET_PREV_MESSAGES_SUCESS,
                payload: {
                  messages: messages,
                  hasMore: hasMore,
                  lastMessageTimeStamp: lastMessageTimeStamp,
                  currentGroupChannel: currentGroupChannel
                }
              });
              setTimeout(function () {
                return scrollIntoLast();
              });
            }).catch(function (error) {
              logger.error('Channel: Fetching messages failed', error);
            }).finally(function () {
              currentGroupChannel.markAsRead();
            });
          });
        }
      };
    }, [isOnline]);
  }

  function useScrollCallback(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel,
        lastMessageTimeStamp = _ref.lastMessageTimeStamp,
        userFilledMessageListQuery = _ref.userFilledMessageListQuery;
    var hasMore = _ref2.hasMore,
        logger = _ref2.logger,
        messagesDispatcher = _ref2.messagesDispatcher,
        sdk = _ref2.sdk;
    return React__default.useCallback(function (cb) {
      if (!hasMore) {
        return;
      }

      var messageListParams = new sdk.MessageListParams();
      messageListParams.prevResultSize = 30;
      messageListParams.includeReplies = false;
      messageListParams.includeReaction = true;

      if (userFilledMessageListQuery) {
        Object.keys(userFilledMessageListQuery).forEach(function (key) {
          messageListParams[key] = userFilledMessageListQuery[key];
        });
      }

      logger.info('Channel: Fetching messages', {
        currentGroupChannel: currentGroupChannel,
        userFilledMessageListQuery: userFilledMessageListQuery
      });
      currentGroupChannel.getMessagesByTimestamp(lastMessageTimeStamp || new Date().getTime(), messageListParams).then(function (messages) {
        var hasMoreMessages = messages && messages.length > 0;
        var lastMessageTs = hasMoreMessages ? messages[0].createdAt : null;
        messagesDispatcher({
          type: GET_PREV_MESSAGES_SUCESS,
          payload: {
            messages: messages,
            hasMore: hasMoreMessages,
            lastMessageTimeStamp: lastMessageTs,
            currentGroupChannel: currentGroupChannel
          }
        });
        cb([messages, null]);
      }).catch(function (error) {
        logger.error('Channel: Fetching messages failed', error);
        messagesDispatcher({
          type: GET_PREV_MESSAGES_SUCESS,
          payload: {
            messages: [],
            hasMore: false,
            lastMessageTimeStamp: 0,
            currentGroupChannel: currentGroupChannel
          }
        });
        cb([null, error]);
      }).finally(function () {
        currentGroupChannel.markAsRead();
      });
    }, [currentGroupChannel, lastMessageTimeStamp]);
  }

  var RESULT_SIZE = 30;

  function useScrollDownCallback(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel,
        latestFetchedMessageTimeStamp = _ref.latestFetchedMessageTimeStamp,
        userFilledMessageListQuery = _ref.userFilledMessageListQuery,
        hasMoreToBottom = _ref.hasMoreToBottom;
    var logger = _ref2.logger,
        messagesDispatcher = _ref2.messagesDispatcher,
        sdk = _ref2.sdk;
    return React__default.useCallback(function (cb) {
      if (!hasMoreToBottom) {
        return;
      }

      var messageListParams = new sdk.MessageListParams();
      messageListParams.nextResultSize = RESULT_SIZE;
      messageListParams.includeReplies = false;
      messageListParams.includeReaction = true;

      if (userFilledMessageListQuery) {
        Object.keys(userFilledMessageListQuery).forEach(function (key) {
          messageListParams[key] = userFilledMessageListQuery[key];
        });
      }

      logger.info('Channel: Fetching later messages', {
        currentGroupChannel: currentGroupChannel,
        userFilledMessageListQuery: userFilledMessageListQuery
      });
      currentGroupChannel.getMessagesByTimestamp(latestFetchedMessageTimeStamp || new Date().getTime(), messageListParams).then(function (messages) {
        var messagesLength = messages && messages.length || 0;
        var hasMoreMessages = messagesLength > 0 && messageListParams.nextResultSize === messagesLength;
        var lastMessageTs = hasMoreMessages ? messages[messages.length - 1].createdAt : null;
        messagesDispatcher({
          type: GET_NEXT_MESSAGES_SUCESS,
          payload: {
            messages: messages,
            hasMoreToBottom: hasMoreMessages,
            latestFetchedMessageTimeStamp: lastMessageTs,
            currentGroupChannel: currentGroupChannel
          }
        });
        cb([messages, null]);
      }).catch(function (error) {
        logger.error('Channel: Fetching later messages failed', error);
        messagesDispatcher({
          type: GET_NEXT_MESSAGES_FAILURE,
          payload: {
            messages: [],
            hasMoreToBottom: false,
            latestFetchedMessageTimeStamp: 0,
            currentGroupChannel: currentGroupChannel
          }
        });
        cb([null, error]);
      }).finally(function () {
        currentGroupChannel.markAsRead();
      });
    }, [currentGroupChannel, latestFetchedMessageTimeStamp, hasMoreToBottom]);
  }

  function useDeleteMessageCallback(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel,
        messagesDispatcher = _ref.messagesDispatcher;
    var logger = _ref2.logger;
    return React__default.useCallback(function (message, cb) {
      logger.info('Channel | useDeleteMessageCallback: Deleting message', message);
      var requestState = message.requestState;
      logger.info('Channel | useDeleteMessageCallback: Deleting message requestState:', requestState); // Message is only on local

      if (requestState === 'failed' || requestState === 'pending') {
        logger.info('Channel | useDeleteMessageCallback: Deleted message from local:', message);
        messagesDispatcher({
          type: ON_MESSAGE_DELETED_BY_REQ_ID,
          payload: message.reqId
        });

        if (cb) {
          cb();
        }

        return;
      } // Message is on server


      currentGroupChannel.deleteMessage(message, function (err) {
        logger.info('Channel | useDeleteMessageCallback: Deleting message from remote:', requestState);

        if (cb) {
          cb(err);
        }

        if (!err) {
          logger.info('Channel | useDeleteMessageCallback: Deleting message success!', message);
          messagesDispatcher({
            type: ON_MESSAGE_DELETED,
            payload: message.messageId
          });
        } else {
          logger.warning('Channel | useDeleteMessageCallback: Deleting message failed!', err);
        }
      });
    }, [currentGroupChannel, messagesDispatcher]);
  }

  function useUpdateMessageCallback(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel,
        messagesDispatcher = _ref.messagesDispatcher,
        onBeforeUpdateUserMessage = _ref.onBeforeUpdateUserMessage;
    var logger = _ref2.logger,
        pubSub = _ref2.pubSub,
        sdk = _ref2.sdk;
    return React__default.useCallback(function (messageId, text, cb) {
      var createParamsDefault = function createParamsDefault(txt) {
        var params = new sdk.UserMessageParams();
        params.message = txt;
        return params;
      };

      var createCustomPrams = onBeforeUpdateUserMessage && typeof onBeforeUpdateUserMessage === 'function';

      if (createCustomPrams) {
        logger.info('Channel: creating params using onBeforeUpdateUserMessage', onBeforeUpdateUserMessage);
      }

      var params = onBeforeUpdateUserMessage ? onBeforeUpdateUserMessage(text) : createParamsDefault(text);
      currentGroupChannel.updateUserMessage(messageId, params, function (r, e) {
        logger.info('Channel: Updating message!', params);
        var swapParams = sdk.getErrorFirstCallback();
        var message = r;
        var err = e;

        if (swapParams) {
          message = e;
          err = r;
        }

        if (cb) {
          cb(err, message);
        }

        if (!err) {
          logger.info('Channel: Updating message success!', message);
          messagesDispatcher({
            type: ON_MESSAGE_UPDATED,
            payload: {
              channel: currentGroupChannel,
              message: message
            }
          });
          pubSub.publish(UPDATE_USER_MESSAGE, {
            message: message,
            channel: currentGroupChannel
          });
        } else {
          logger.warning('Channel: Updating message failed!', err);
        }
      });
    }, [currentGroupChannel.url, messagesDispatcher, onBeforeUpdateUserMessage]);
  }

  function useResendMessageCallback(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel,
        messagesDispatcher = _ref.messagesDispatcher;
    var logger = _ref2.logger;
    return React__default.useCallback(function (failedMessage) {
      logger.info('Channel: Resending message has started', failedMessage);
      var messageType = failedMessage.messageType,
          file = failedMessage.file;

      if (failedMessage && typeof failedMessage.isResendable === 'function' && failedMessage.isResendable()) {
        // eslint-disable-next-line no-param-reassign
        failedMessage.requestState = 'pending';
        messagesDispatcher({
          type: RESEND_MESSAGEGE_START,
          payload: failedMessage
        }); // userMessage

        if (messageType === 'user') {
          currentGroupChannel.resendUserMessage(failedMessage).then(function (message) {
            logger.info('Channel: Resending message success!', {
              message: message
            });
            messagesDispatcher({
              type: SEND_MESSAGEGE_SUCESS,
              payload: message
            });
          }).catch(function (e) {
            logger.warning('Channel: Resending message failed!', {
              e: e
            }); // eslint-disable-next-line no-param-reassign

            failedMessage.requestState = 'failed';
            messagesDispatcher({
              type: SEND_MESSAGEGE_FAILURE,
              payload: failedMessage
            });
          }); // eslint-disable-next-line no-param-reassign

          failedMessage.requestState = 'pending';
          messagesDispatcher({
            type: RESEND_MESSAGEGE_START,
            payload: failedMessage
          });
          return;
        }

        if (messageType === 'file') {
          currentGroupChannel.resendFileMessage(failedMessage, file).then(function (message) {
            logger.info('Channel: Resending file message success!', {
              message: message
            });
            messagesDispatcher({
              type: SEND_MESSAGEGE_SUCESS,
              payload: message
            });
          }).catch(function (e) {
            logger.warning('Channel: Resending file message failed!', {
              e: e
            }); // eslint-disable-next-line no-param-reassign

            failedMessage.requestState = 'failed';
            messagesDispatcher({
              type: SEND_MESSAGEGE_FAILURE,
              payload: failedMessage
            });
          }); // eslint-disable-next-line no-param-reassign

          failedMessage.requestState = 'pending';
          messagesDispatcher({
            type: RESEND_MESSAGEGE_START,
            payload: failedMessage
          });
        }
      } else {
        // to alert user on console
        // eslint-disable-next-line no-console
        console.error('Message is not resendable');
        logger.warning('Message is not resendable', failedMessage);
      }
    }, [currentGroupChannel, messagesDispatcher]);
  }

  function useSendMessageCallback(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel,
        onBeforeSendUserMessage = _ref.onBeforeSendUserMessage;
    var sdk = _ref2.sdk,
        logger = _ref2.logger,
        pubSub = _ref2.pubSub,
        messagesDispatcher = _ref2.messagesDispatcher;
    var messageInputRef = React__default.useRef(null);
    var sendMessage = React__default.useCallback(function () {
      var text = messageInputRef.current.value;

      var createParamsDefault = function createParamsDefault(txt) {
        var message = typeof txt === 'string' ? txt.trim() : txt;
        var params = new sdk.UserMessageParams();
        params.message = message;
        return params;
      };

      var createCustomPrams = onBeforeSendUserMessage && typeof onBeforeSendUserMessage === 'function';

      if (createCustomPrams) {
        logger.info('Channel: creating params using onBeforeSendUserMessage', onBeforeSendUserMessage);
      }

      var params = onBeforeSendUserMessage ? onBeforeSendUserMessage(text) : createParamsDefault(text);
      logger.info('Channel: Sending message has started', params);
      var pendingMsg = currentGroupChannel.sendUserMessage(params, function (res, err) {
        var swapParams = sdk.getErrorFirstCallback();
        var message = res;
        var error = err;

        if (swapParams) {
          message = err;
          error = res;
        } // sending params instead of pending message
        // to make sure that we can resend the message once it fails


        if (error) {
          logger.warning('Channel: Sending message failed!', {
            message: message
          });
          messagesDispatcher({
            type: SEND_MESSAGEGE_FAILURE,
            payload: message
          });
          return;
        }

        logger.info('Channel: Sending message success!', message);
        messagesDispatcher({
          type: SEND_MESSAGEGE_SUCESS,
          payload: message
        });
      });
      pubSub.publish(SEND_MESSAGE_START, {
        /* pubSub is used instead of messagesDispatcher
          to avoid redundantly calling `messageActionTypes.SEND_MESSAGEGE_START` */
        message: pendingMsg,
        channel: currentGroupChannel
      });
      setTimeout(function () {
        return scrollIntoLast();
      });
    }, [currentGroupChannel, onBeforeSendUserMessage]);
    return [messageInputRef, sendMessage];
  }

  function useSendFileMessageCallback(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel,
        onBeforeSendFileMessage = _ref.onBeforeSendFileMessage,
        _ref$imageCompression = _ref.imageCompression,
        imageCompression = _ref$imageCompression === void 0 ? {} : _ref$imageCompression;
    var sdk = _ref2.sdk,
        logger = _ref2.logger,
        pubSub = _ref2.pubSub,
        messagesDispatcher = _ref2.messagesDispatcher;
    var sendMessage = React__default.useCallback(function (file) {
      var compressionRate = imageCompression.compressionRate,
          resizingWidth = imageCompression.resizingWidth,
          resizingHeight = imageCompression.resizingHeight;
      var createCustomParams = onBeforeSendFileMessage && typeof onBeforeSendFileMessage === 'function';
      var compressibleFileType = file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg';
      var compressibleRatio = compressionRate > 0 && compressionRate < 1; // pxToNumber returns null if values are invalid

      var compressibleDiamensions = pxToNumber$1(resizingWidth) || pxToNumber$1(resizingHeight);
      var canCompressImage = compressibleFileType && (compressibleRatio || compressibleDiamensions);

      var createParamsDefault = function createParamsDefault(file_) {
        var params = new sdk.FileMessageParams();
        params.file = file_;
        return params;
      };

      if (canCompressImage) {
        // Using image compression
        try {
          var image = document.createElement('img');
          image.src = URL.createObjectURL(file);

          image.onload = function () {
            URL.revokeObjectURL(image.src);
            var canvas = document.createElement('canvas');
            var imageWdith = image.naturalWidth || image.width;
            var imageHeight = image.naturalHeight || image.height;
            var targetWidth = pxToNumber$1(resizingWidth) || imageWdith;
            var targetHeight = pxToNumber$1(resizingHeight) || imageHeight; // In canvas.toBlob(callback, mimeType, qualityArgument)
            // qualityArgument doesnt work
            // so in case compressibleDiamensions are not present, we use ratio

            if (file.type === 'image/png' && !compressibleDiamensions) {
              targetWidth *= compressionRate;
              targetHeight *= compressionRate;
            }

            canvas.width = targetWidth;
            canvas.height = targetHeight;
            var context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, targetWidth, targetHeight);
            context.canvas.toBlob(function (newImageBlob) {
              var compressedFile = new File([newImageBlob], file.name, {
                type: file.type
              });

              if (createCustomParams) {
                logger.info('Channel: Creating params using onBeforeSendFileMessage', onBeforeSendFileMessage);
              }

              var params = createCustomParams ? onBeforeSendFileMessage(compressedFile) : createParamsDefault(compressedFile);
              logger.info('Channel: Uploading file message start!', params);
              var pendingMessage = currentGroupChannel.sendFileMessage(params, function (response, err) {
                var swapParams = sdk.getErrorFirstCallback();

                var _ref3 = swapParams ? [err, response] : [response, err],
                    _ref4 = _slicedToArray(_ref3, 2),
                    message = _ref4[0],
                    error = _ref4[1];

                if (error) {
                  // sending params instead of pending message
                  // to make sure that we can resend the message once it fails
                  logger.error('Channel: Sending file message failed!', {
                    message: message,
                    error: error
                  });
                  message.localUrl = URL.createObjectURL(compressedFile);
                  message.file = compressedFile;
                  messagesDispatcher({
                    type: SEND_MESSAGEGE_FAILURE,
                    payload: message
                  });
                  return;
                }

                logger.info('Channel: Sending file message success!', message);
                messagesDispatcher({
                  type: SEND_MESSAGEGE_SUCESS,
                  payload: message
                });
              });
              pubSub.publish(SEND_MESSAGE_START, {
                /* pubSub is used instead of messagesDispatcher
                  to avoid redundantly calling `messageActionTypes.SEND_MESSAGEGE_START` */
                message: _objectSpread2(_objectSpread2({}, pendingMessage), {}, {
                  url: URL.createObjectURL(compressedFile),
                  // pending thumbnail message seems to be failed
                  requestState: 'pending'
                }),
                channel: currentGroupChannel
              });
              setTimeout(function () {
                return scrollIntoLast();
              }, 1000);
            }, file.type, compressionRate);
          };
        } catch (error) {
          logger.error('Channel: Sending file message failed!', error);
        }
      } else {
        // Not using image compression
        if (createCustomParams) {
          logger.info('Channel: creating params using onBeforeSendFileMessage', onBeforeSendFileMessage);
        }

        var params = onBeforeSendFileMessage ? onBeforeSendFileMessage(file) : createParamsDefault(file);
        logger.info('Channel: Uploading file message start!', params);
        var pendingMsg = currentGroupChannel.sendFileMessage(params, function (response, err) {
          var swapParams = sdk.getErrorFirstCallback();

          var _ref5 = swapParams ? [err, response] : [response, err],
              _ref6 = _slicedToArray(_ref5, 2),
              message = _ref6[0],
              error = _ref6[1];

          if (error) {
            // sending params instead of pending message
            // to make sure that we can resend the message once it fails
            logger.error('Channel: Sending file message failed!', {
              message: message,
              error: error
            });
            message.localUrl = URL.createObjectURL(file);
            message.file = file;
            messagesDispatcher({
              type: SEND_MESSAGEGE_FAILURE,
              payload: message
            });
            return;
          }

          logger.info('Channel: Sending message success!', message);
          messagesDispatcher({
            type: SEND_MESSAGEGE_SUCESS,
            payload: message
          });
        });
        pubSub.publish(SEND_MESSAGE_START, {
          /* pubSub is used instead of messagesDispatcher
            to avoid redundantly calling `messageActionTypes.SEND_MESSAGEGE_START` */
          message: _objectSpread2(_objectSpread2({}, pendingMsg), {}, {
            url: URL.createObjectURL(file),
            // pending thumbnail message seems to be failed
            requestState: 'pending'
          }),
          channel: currentGroupChannel
        });
        setTimeout(function () {
          return scrollIntoLast();
        }, 1000);
      }
    }, [currentGroupChannel, onBeforeSendFileMessage, imageCompression]);
    return [sendMessage];
  }

  function useSetReadStatus(_ref, _ref2) {
    var allMessages = _ref.allMessages,
        currentGroupChannel = _ref.currentGroupChannel;
    var messagesDispatcher = _ref2.messagesDispatcher,
        sdk = _ref2.sdk,
        logger = _ref2.logger;
    React__default.useEffect(function () {
      if (!sdk.ChannelHandler || !currentGroupChannel.url) {
        return function () {};
      } // todo: move to reducer?


      var setReadStatus = function setReadStatus() {
        var allReadStatus = allMessages.reduce(function (accumulator, msg) {
          if (msg.messageId !== 0) {
            return _objectSpread2(_objectSpread2({}, accumulator), {}, _defineProperty({}, msg.messageId, getParsedStatus(msg, currentGroupChannel)));
          }

          return accumulator;
        }, {});
        messagesDispatcher({
          type: SET_READ_STATUS,
          payload: allReadStatus
        });
      };

      if (allMessages.length > 0) {
        setReadStatus();
      }

      var channelUrl = currentGroupChannel.url;
      var handler = new sdk.ChannelHandler();

      var handleMessageStatus = function handleMessageStatus(c) {
        if (channelUrl === c.url) {
          setReadStatus();
        }
      };

      handler.onDeliveryReceiptUpdated = handleMessageStatus;
      handler.onReadReceiptUpdated = handleMessageStatus; // Add this channel event handler to the SendBird object.

      var handlerId = uuidv4();
      logger.info('Channel | useSetReadStatus: Removing message reciver handler', handlerId);
      sdk.addChannelHandler(handlerId, handler);
      return function () {
        if (sdk && sdk.removeChannelHandler) {
          logger.info('Channel | useSetReadStatus: Removing message reciver handler', handlerId);
          sdk.removeChannelHandler(handlerId);
        }
      };
    }, [allMessages, currentGroupChannel]);
  }

  var ReactionButton = /*#__PURE__*/React__default__default.forwardRef(function (props, ref) {
    var className = props.className,
        width = props.width,
        height = props.height,
        selected = props.selected,
        _onClick = props.onClick,
        children = props.children;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ["sendbird-reaction-button".concat(selected ? '--selected' : '')]).join(' '),
      ref: ref,
      role: "button",
      style: {
        width: typeof width === 'string' ? "".concat(width.slice(0, -2) - 2, "px") : "".concat(width - 2, "px"),
        height: typeof height === 'string' ? "".concat(height.slice(0, -2) - 2, "px") : "".concat(height - 2, "px")
      },
      onClick: function onClick(e) {
        return _onClick(e);
      },
      onKeyDown: function onKeyDown(e) {
        return _onClick(e);
      },
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-reaction-button__inner"
    }, children));
  });
  ReactionButton.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    selected: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.element.isRequired
  };
  ReactionButton.defaultProps = {
    className: '',
    width: '36px',
    height: '36px',
    selected: false,
    onClick: function onClick() {}
  };

  function useMemoizedEmojiListItems(_ref, _ref2) {
    var emojiContainer = _ref.emojiContainer,
        toggleReaction = _ref.toggleReaction;
    var useReaction = _ref2.useReaction,
        logger = _ref2.logger,
        userId = _ref2.userId,
        emojiAllList = _ref2.emojiAllList;

    /* eslint-disable react/prop-types */
    return React__default.useMemo(function () {
      return function (_ref3) {
        var parentRef = _ref3.parentRef,
            parentContainRef = _ref3.parentContainRef,
            message = _ref3.message,
            closeDropdown = _ref3.closeDropdown,
            _ref3$spaceFromTrigge = _ref3.spaceFromTrigger,
            spaceFromTrigger = _ref3$spaceFromTrigge === void 0 ? {} : _ref3$spaceFromTrigge;

        if (!useReaction || !(parentRef || parentContainRef || message || closeDropdown)) {
          logger.warning('Channel: Invalid Params in memoizedEmojiListItems');
          return null;
        }

        return /*#__PURE__*/React__default__default.createElement(EmojiListItems, {
          parentRef: parentRef,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          spaceFromTrigger: spaceFromTrigger
        }, emojiAllList.map(function (emoji) {
          var reactedReaction = message.reactions.filter(function (reaction) {
            return reaction.key === emoji.key;
          })[0];
          var isReacted = reactedReaction ? !(reactedReaction.userIds.indexOf(userId) < 0) : false;
          return /*#__PURE__*/React__default__default.createElement(ReactionButton, {
            key: emoji.key,
            width: "36px",
            height: "36px",
            selected: isReacted,
            onClick: function onClick() {
              closeDropdown();
              toggleReaction(message, emoji.key, isReacted);
            }
          }, /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
            url: emoji.url,
            width: "28px",
            height: "28px",
            defaultComponent: /*#__PURE__*/React__default__default.createElement(Icon, {
              width: "28px",
              height: "28px",
              type: IconTypes.QUESTION
            })
          }));
        }));
      };
    }, [emojiContainer, toggleReaction]);
  }

  function useToggleReactionCallback(_ref, _ref2) {
    var currentGroupChannel = _ref.currentGroupChannel;
    var logger = _ref2.logger;
    return React__default.useCallback(function (message, key, isReacted) {
      if (isReacted) {
        currentGroupChannel.deleteReaction(message, key).then(function (res) {
          logger.info('Delete reaction success', res);
        }).catch(function (err) {
          logger.warning('Delete reaction failed', err);
        });
        return;
      }

      currentGroupChannel.addReaction(message, key).then(function (res) {
        logger.info('Add reaction success', res);
      }).catch(function (err) {
        logger.warning('Add reaction failed', err);
      });
    }, [currentGroupChannel]);
  }

  function MessageStatus(_ref) {
    var className = _ref.className,
        message = _ref.message,
        status = _ref.status;

    var label = function label() {
      switch (status) {
        case MessageStatusType.FAILED:
        case MessageStatusType.PENDING:
          {
            return null;
          }

        case MessageStatusType.SENT:
        case MessageStatusType.DELIVERED:
        case MessageStatusType.READ:
          {
            return /*#__PURE__*/React__default__default.createElement(Label, {
              className: "sendbird-message-status__text",
              type: LabelTypography.CAPTION_3,
              color: LabelColors.ONBACKGROUND_2
            }, getMessageCreatedAt(message));
          }

        default:
          return null;
      }
    };

    var icon = {
      PENDING: /*#__PURE__*/React__default__default.createElement(Loader, {
        className: "sendbird-message-status__icon",
        width: "16px",
        height: "16px"
      }, /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.SPINNER,
        fillColor: IconColors.PRIMARY,
        width: "16px",
        height: "16px"
      })),
      SENT: /*#__PURE__*/React__default__default.createElement(Icon, {
        className: "sendbird-message-status__icon",
        type: IconTypes.DONE,
        fillColor: IconColors.SENT,
        width: "16px",
        height: "16px"
      }),
      DELIVERED: /*#__PURE__*/React__default__default.createElement(Icon, {
        className: "sendbird-message-status__icon",
        type: IconTypes.DONE_ALL,
        fillColor: IconColors.SENT,
        width: "16px",
        height: "16px"
      }),
      READ: /*#__PURE__*/React__default__default.createElement(Icon, {
        className: "sendbird-message-status__icon",
        type: IconTypes.DONE_ALL,
        fillColor: IconColors.READ,
        width: "16px",
        height: "16px"
      }),
      FAILED: /*#__PURE__*/React__default__default.createElement(Icon, {
        className: "sendbird-message-status__icon",
        type: IconTypes.ERROR,
        fillColor: IconColors.ERROR,
        width: "16px",
        height: "16px"
      })
    };
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-message-status']).join(' ')
    }, icon[status], /*#__PURE__*/React__default__default.createElement("br", null), label());
  }
  MessageStatus.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    message: PropTypes.shape({
      createdAt: PropTypes.number,
      sender: PropTypes.shape({
        friendName: PropTypes.string,
        nickname: PropTypes.string,
        userId: PropTypes.string,
        profileUrl: PropTypes.string
      })
    }),
    status: PropTypes.string
  };
  MessageStatus.defaultProps = {
    className: '',
    message: null,
    status: ''
  };

  var ReactionBadge = /*#__PURE__*/React__default__default.forwardRef(function (props, ref) {
    var className = props.className,
        children = props.children,
        count = props.count,
        selected = props.selected,
        isAdd = props.isAdd,
        onClick = props.onClick;

    var getClassNameTail = function getClassNameTail() {
      if (selected && !isAdd) {
        return '--selected';
      }

      if (isAdd) {
        return '--is-add';
      }

      return '';
    };

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ["sendbird-reaction-badge".concat(getClassNameTail())]).join(' '),
      role: "button",
      ref: ref,
      onClick: onClick,
      onKeyDown: onClick,
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-reaction-badge__inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-reaction-badge__inner__icon"
    }, children), /*#__PURE__*/React__default__default.createElement(Label, {
      className: children && count && 'sendbird-reaction-badge__inner__count',
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_1
    }, count)));
  });
  ReactionBadge.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    children: PropTypes.element.isRequired,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    selected: PropTypes.bool,
    isAdd: PropTypes.bool,
    onClick: PropTypes.func
  };
  ReactionBadge.defaultProps = {
    className: '',
    count: '',
    selected: false,
    isAdd: false,
    onClick: function onClick() {}
  };

  function Tooltip(_ref) {
    var className = _ref.className,
        children = _ref.children;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-tooltip']).join(' ')
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-tooltip__text",
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONCONTENT_1
    }, children));
  }
  Tooltip.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.string), PropTypes.string])
  };
  Tooltip.defaultProps = {
    className: '',
    children: ''
  };

  var SPACE_FROM_TRIGGER = 8;
  function TooltipWrapper(_ref) {
    var className = _ref.className,
        children = _ref.children,
        hoverTooltip = _ref.hoverTooltip;

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showHoverTooltip = _useState2[0],
        setShowHoverTooltip = _useState2[1];

    var childrenRef = React__default.useRef(null);
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-tooltip-wrapper']).join(' '),
      onMouseOver: function onMouseOver() {
        setShowHoverTooltip(true);
      },
      onFocus: function onFocus() {
        setShowHoverTooltip(true);
      },
      onMouseOut: function onMouseOut() {
        setShowHoverTooltip(false);
      },
      onBlur: function onBlur() {
        setShowHoverTooltip(false);
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-tooltip-wrapper__children",
      ref: childrenRef
    }, children), showHoverTooltip && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-tooltip-wrapper__hover-tooltip",
      style: {
        bottom: "calc(100% + ".concat(SPACE_FROM_TRIGGER, "px)")
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-tooltip-wrapper__hover-tooltip__inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-tooltip-wrapper__hover-tooltip__inner__tooltip-container",
      style: {
        left: childrenRef.current && "calc(".concat(childrenRef.current.offsetWidth / 2, "px - 50%)")
      }
    }, hoverTooltip))));
  }
  TooltipWrapper.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    children: PropTypes.element.isRequired,
    hoverTooltip: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
  };
  TooltipWrapper.defaultProps = {
    className: ''
  };

  function EmojiReactions(_ref) {
    var className = _ref.className,
        userId = _ref.userId,
        message = _ref.message,
        emojiAllMap = _ref.emojiAllMap,
        membersMap = _ref.membersMap,
        toggleReaction = _ref.toggleReaction,
        memoizedEmojiListItems = _ref.memoizedEmojiListItems;
    var MemoizedEmojiListItems = memoizedEmojiListItems;
    var imageWidth = '20px';
    var imageHeight = '20px';
    var emojiReactionAddRef = React__default.useRef(null);
    var _message$reactions = message.reactions,
        reactions = _message$reactions === void 0 ? [] : _message$reactions;
    var messageReactions = reactions;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-emoji-reactions']).join(' ')
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-emoji-reactions--inner"
    }, messageReactions && messageReactions.map(function (reaction) {
      // function component
      var _reaction$userIds = reaction.userIds,
          userIds = _reaction$userIds === void 0 ? [] : _reaction$userIds;
      var emojiUrl = emojiAllMap.get(reaction.key) || '';
      var reactedUserCount = userIds.length;
      var reactedByMe = !(userIds.indexOf(userId) < 0);
      var nicknames = userIds.filter(function (currentUserId) {
        return currentUserId !== userId;
      }).map(function (currentUserId) {
        return membersMap.get(currentUserId) || stringSet.TOOLTIP__UNKOWN_USER;
      });
      var stringSetForMe = nicknames.length > 0 ? stringSet.TOOLTIP__AND_YOU : stringSet.TOOLTIP__YOU;
      return /*#__PURE__*/React__default__default.createElement(TooltipWrapper, {
        className: "sendbird-emoji-reactions__emoji-reaction",
        key: reaction.key,
        hoverTooltip: userIds.length > 0 && /*#__PURE__*/React__default__default.createElement(Tooltip, null, /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, "".concat(nicknames.join(', ')).concat(reactedByMe ? stringSetForMe : '')))
      }, /*#__PURE__*/React__default__default.createElement(ReactionBadge, {
        count: reactedUserCount,
        selected: reactedByMe,
        onClick: function onClick() {
          return toggleReaction(message, reaction.key, reactedByMe);
        }
      }, /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
        circle: true,
        url: emojiUrl,
        width: imageWidth,
        height: imageHeight,
        defaultComponent: /*#__PURE__*/React__default__default.createElement(Icon, {
          width: imageWidth,
          height: imageHeight,
          type: IconTypes.QUESTION
        })
      })));
    }), messageReactions.length < emojiAllMap.size && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(ReactionBadge, {
          className: "sendbird-emoji-reactions__emoji-reaction-add",
          isAdd: true,
          onClick: toggleDropdown,
          ref: emojiReactionAddRef
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          width: imageWidth,
          height: imageHeight,
          fillColor: IconColors.ON_BACKGROUND_3,
          type: IconTypes.EMOJI_MORE
        }));
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MemoizedEmojiListItems, {
          message: message,
          parentRef: emojiReactionAddRef,
          parentContainRef: emojiReactionAddRef,
          closeDropdown: closeDropdown,
          spaceFromTrigger: {
            y: 4
          }
        });
      }
    })));
  }
  EmojiReactions.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    userId: PropTypes.string,
    message: PropTypes.shape({
      reactions: PropTypes.arrayOf(PropTypes.shape({}))
    }).isRequired,
    emojiAllMap: PropTypes.instanceOf(Map).isRequired,
    membersMap: PropTypes.instanceOf(Map),
    toggleReaction: PropTypes.func,
    memoizedEmojiListItems: PropTypes.func
  };
  EmojiReactions.defaultProps = {
    className: '',
    userId: '',
    membersMap: new Map(),
    toggleReaction: function toggleReaction() {},
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    }
  };

  function useMemoizedMessageText$1(_ref) {
    var message = _ref.message,
        updatedAt = _ref.updatedAt,
        className = _ref.className,
        incoming = _ref.incoming;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var WORD_TYPOGRAPHY = LabelTypography.BODY_1;
    var EDITED_COLOR = incoming ? LabelColors.ONBACKGROUND_2 : LabelColors.ONCONTENT_2;
    return React__default.useMemo(function () {
      return function () {
        var splitMessage = message.split(/\r/);
        var matchedMessage = splitMessage.map(function (word) {
          return word !== '' ? word : /*#__PURE__*/React__default__default.createElement("br", null);
        });

        if (updatedAt > 0) {
          matchedMessage.push( /*#__PURE__*/React__default__default.createElement(Label, {
            key: uuidv4(),
            className: className,
            type: WORD_TYPOGRAPHY,
            color: EDITED_COLOR
          }, " ".concat(stringSet.MESSAGE_EDITED, " ")));
        }

        return matchedMessage;
      };
    }, [message, updatedAt, className]);
  }

  var MOUSE_ENTER = 'mouseenter';
  var MOUSE_LEAVE = 'mouseleave';

  var useMouseHover = function useMouseHover(_ref) {
    var ref = _ref.ref,
        setHover = _ref.setHover;

    var handleMouseOver = function handleMouseOver() {
      if (ref.current) {
        setHover(true);
      }
    };

    var handleMouseOut = function handleMouseOut() {
      if (ref.current) {
        setHover(false);
      }
    };

    React__default.useEffect(function () {
      var current = ref.current;

      if (current) {
        current.addEventListener(MOUSE_ENTER, handleMouseOver);
        current.addEventListener(MOUSE_LEAVE, handleMouseOut);
      }

      return function () {
        if (current) {
          current.removeEventListener(MOUSE_ENTER, handleMouseOver);
          current.removeEventListener(MOUSE_LEAVE, handleMouseOut);
        }
      };
    });
  };

  var noop$5 = function noop() {};

  var GROUPING_PADDING$3 = '1px';
  var NORMAL_PADDING$3 = '8px';
  function Message(props) {
    var className = props.className,
        message = props.message,
        isByMe = props.isByMe,
        userId = props.userId,
        resendMessage = props.resendMessage,
        disabled = props.disabled,
        showEdit = props.showEdit,
        showRemove = props.showRemove,
        status = props.status,
        useReaction = props.useReaction,
        emojiAllMap = props.emojiAllMap,
        membersMap = props.membersMap,
        toggleReaction = props.toggleReaction,
        memoizedEmojiListItems = props.memoizedEmojiListItems,
        chainTop = props.chainTop,
        chainBottom = props.chainBottom;
    if (!message) return null;
    var outgoingMemoizedMessageText = useMemoizedMessageText$1({
      className: 'sendbird-user-message-word',
      message: message.message,
      updatedAt: message.updatedAt
    });
    var incomingMemoizedMessageText = useMemoizedMessageText$1({
      className: 'sendbird-user-message-word',
      message: message.message,
      updatedAt: message.updatedAt,
      incoming: true
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-message', "sendbird-message".concat(isByMe ? '--outgoing' : '--incoming')]).join(' ')
    }, isByMe ? /*#__PURE__*/React__default__default.createElement(OutgoingUserMessage, {
      userId: userId,
      message: message,
      resendMessage: resendMessage,
      disabled: disabled,
      showEdit: showEdit,
      showRemove: showRemove,
      status: status,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedMessageText: outgoingMemoizedMessageText,
      memoizedEmojiListItems: memoizedEmojiListItems,
      chainTop: chainTop,
      chainBottom: chainBottom
    }) : /*#__PURE__*/React__default__default.createElement(IncomingUserMessage, {
      userId: userId,
      message: message,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedMessageText: incomingMemoizedMessageText,
      memoizedEmojiListItems: memoizedEmojiListItems,
      chainTop: chainTop,
      chainBottom: chainBottom
    }));
  }
  Message.propTypes = {
    isByMe: PropTypes.bool,
    disabled: PropTypes.bool,
    userId: PropTypes.string,
    message: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array, PropTypes.object])).isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    showEdit: PropTypes.func,
    status: PropTypes.string,
    showRemove: PropTypes.func,
    resendMessage: PropTypes.func,
    useReaction: PropTypes.bool.isRequired,
    emojiAllMap: PropTypes.instanceOf(Map),
    membersMap: PropTypes.instanceOf(Map),
    toggleReaction: PropTypes.func,
    memoizedEmojiListItems: PropTypes.func,
    chainTop: PropTypes.bool,
    chainBottom: PropTypes.bool
  };
  Message.defaultProps = {
    isByMe: false,
    disabled: false,
    userId: '',
    resendMessage: noop$5,
    className: '',
    showEdit: noop$5,
    showRemove: noop$5,
    status: '',
    emojiAllMap: new Map(),
    membersMap: new Map(),
    toggleReaction: noop$5,
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    },
    chainTop: false,
    chainBottom: false
  };

  function OutgoingUserMessage(_ref) {
    var userId = _ref.userId,
        message = _ref.message,
        showEdit = _ref.showEdit,
        disabled = _ref.disabled,
        showRemove = _ref.showRemove,
        status = _ref.status,
        resendMessage = _ref.resendMessage,
        useReaction = _ref.useReaction,
        emojiAllMap = _ref.emojiAllMap,
        membersMap = _ref.membersMap,
        toggleReaction = _ref.toggleReaction,
        memoizedMessageText = _ref.memoizedMessageText,
        memoizedEmojiListItems = _ref.memoizedEmojiListItems,
        chainTop = _ref.chainTop,
        chainBottom = _ref.chainBottom;
    var MemoizedMessageText = memoizedMessageText;
    var MemoizedEmojiListItems = memoizedEmojiListItems; // TODO: when message.requestState is succeeded, consider if it's SENT or DELIVERED

    var messageRef = React__default.useRef(null);
    var parentRefReactions = React__default.useRef(null);
    var parentRefMenus = React__default.useRef(null);
    var parentContainRef = React__default.useRef(null);

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        mousehover = _useState2[0],
        setMousehover = _useState2[1];

    var _useState3 = React__default.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        moreActive = _useState4[0],
        setMoreActive = _useState4[1];

    var _useState5 = React__default.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        menuDisplaying = _useState6[0],
        setMenuDisplaying = _useState6[1];

    var _useContext = React__default.useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

    var isMessageSent = getIsSentFromStatus$1(status);
    var showReactionAddButton = useReaction && emojiAllMap.size > 0 && getIsSentFromSendingStatus$1(message);

    var handleMoreIconClick = function handleMoreIconClick() {
      setMoreActive(true);
    };

    var handleMoreIconBlur = function handleMoreIconBlur() {
      setMoreActive(false);
    };

    useMouseHover({
      ref: messageRef,
      setHover: setMousehover
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message--outgoing",
      ref: messageRef,
      style: {
        paddingTop: chainTop ? GROUPING_PADDING$3 : NORMAL_PADDING$3,
        paddingBottom: chainBottom ? GROUPING_PADDING$3 : NORMAL_PADDING$3
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__left-padding"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__more",
      ref: parentContainRef
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          className: "sendbird-user-message__more__menu",
          ref: parentRefMenus,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
         */
        , {
          parentRef: parentRefMenus,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          openLeft: true
        }, isMessageSent && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-user-message--copy",
          onClick: function onClick() {
            copyToClipboard(message.message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__COPY), isMessageSent && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showEdit(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT), message && message.isResendable && message.isResendable() && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            resendMessage(message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showRemove(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
      }
    }), isMessageSent && showReactionAddButton && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          className: "sendbird-user-message__more__add-reaction",
          ref: parentRefReactions,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          width: "24px",
          height: "24px",
          type: IconTypes.EMOJI_MORE,
          fillColor: IconColors.CONTENT_INVERSE
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MemoizedEmojiListItems, {
          message: message,
          parentRef: parentRefReactions,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          spaceFromTrigger: {
            y: 2
          }
        });
      }
    })), !chainBottom && !(mousehover || moreActive || menuDisplaying) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__status"
    }, /*#__PURE__*/React__default__default.createElement(MessageStatus, {
      message: message,
      status: status
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__text-balloon"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__text-balloon__inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__text-balloon__inner__text-place"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-user-message__text-balloon__inner__text-place__text",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONCONTENT_1
    }, /*#__PURE__*/React__default__default.createElement(MemoizedMessageText, null))), useReaction && message.reactions && message.reactions.length > 0 && /*#__PURE__*/React__default__default.createElement(EmojiReactions, {
      className: "sendbird-user-message__text-balloon__inner__emoji-reactions",
      userId: userId,
      message: message,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    })))));
  }

  function IncomingUserMessage(_ref2) {
    var userId = _ref2.userId,
        message = _ref2.message,
        useReaction = _ref2.useReaction,
        emojiAllMap = _ref2.emojiAllMap,
        membersMap = _ref2.membersMap,
        toggleReaction = _ref2.toggleReaction,
        memoizedMessageText = _ref2.memoizedMessageText,
        memoizedEmojiListItems = _ref2.memoizedEmojiListItems,
        chainTop = _ref2.chainTop,
        chainBottom = _ref2.chainBottom;
    var MemoizedMessageText = memoizedMessageText;
    var MemoizedEmojiListItems = memoizedEmojiListItems;
    var messageRef = React__default.useRef(null);
    var parentRefReactions = React__default.useRef(null);
    var parentRefMenus = React__default.useRef(null);
    var parentContainRef = React__default.useRef(null);
    var avatarRef = React__default.useRef(null);

    var _React$useContext = React__default__default.useContext(UserProfileContext),
        disableUserProfile = _React$useContext.disableUserProfile,
        renderUserProfile = _React$useContext.renderUserProfile;

    var _useState7 = React__default.useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        mousehover = _useState8[0],
        setMousehover = _useState8[1];

    var _useState9 = React__default.useState(false),
        _useState10 = _slicedToArray(_useState9, 2),
        moreActive = _useState10[0],
        setMoreActive = _useState10[1];

    var _useState11 = React__default.useState(false),
        _useState12 = _slicedToArray(_useState11, 2),
        menuDisplaying = _useState12[0],
        setMenuDisplaying = _useState12[1];

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var showReactionAddButton = useReaction && emojiAllMap && emojiAllMap.size > 0;
    var showEmojiReactions = useReaction && message.reactions && message.reactions.length > 0;

    var handleMoreIconClick = function handleMoreIconClick() {
      setMoreActive(true);
    };

    var handleMoreIconBlur = function handleMoreIconBlur() {
      setMoreActive(false);
    };

    useMouseHover({
      ref: messageRef,
      setHover: setMousehover
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      ref: messageRef,
      className: "sendbird-user-message--incoming",
      style: {
        paddingTop: chainTop ? GROUPING_PADDING$3 : NORMAL_PADDING$3,
        paddingBottom: chainBottom ? GROUPING_PADDING$3 : NORMAL_PADDING$3
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message--body"
    }, !chainBottom && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          ref: avatarRef,
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          },
          className: "sendbird-user-message__avatar",
          src: getSenderProfileUrl$1(message),
          width: "28px",
          height: "28px"
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
         */
        , {
          parentRef: avatarRef,
          parentContainRef: avatarRef,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: message.sender,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: message.sender,
          onSuccess: closeDropdown
        }));
      }
    }), !chainTop && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-user-message__sender-name",
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, getSenderName$1(message)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__text-balloon"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__text-balloon__inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__text-balloon__inner__text-place"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-user-message__text-balloon__inner__text-place__text",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_1
    }, /*#__PURE__*/React__default__default.createElement(MemoizedMessageText, null))), showEmojiReactions && /*#__PURE__*/React__default__default.createElement(EmojiReactions, {
      className: "sendbird-user-message__text-balloon__inner__emoji-reactions",
      userId: userId,
      message: message,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    })))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__right-padding"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-user-message__more",
      ref: parentContainRef,
      style: {
        top: chainTop ? '6px' : '22px'
      }
    }, showReactionAddButton && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: parentRefReactions,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          width: "24px",
          height: "24px",
          type: IconTypes.EMOJI_MORE,
          fillColor: IconColors.CONTENT_INVERSE
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MemoizedEmojiListItems, {
          parentRef: parentRefReactions,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          message: message,
          spaceFromTrigger: {
            y: 2
          }
        });
      }
    }), /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: parentRefMenus,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          width: "24px",
          height: "24px",
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: parentRefMenus,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown
        }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-user-message--copy",
          onClick: function onClick() {
            copyToClipboard(message.message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__COPY));
      }
    })), !chainBottom && !(mousehover || moreActive || menuDisplaying) && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-user-message__sent-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, getMessageCreatedAt$1(message)))));
  }

  IncomingUserMessage.propTypes = {
    userId: PropTypes.string.isRequired,
    message: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array, PropTypes.object])),
    useReaction: PropTypes.bool.isRequired,
    emojiAllMap: PropTypes.instanceOf(Map),
    membersMap: PropTypes.instanceOf(Map),
    toggleReaction: PropTypes.func,
    memoizedMessageText: PropTypes.func.isRequired,
    memoizedEmojiListItems: PropTypes.func,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };
  IncomingUserMessage.defaultProps = {
    message: {},
    emojiAllMap: new Map(),
    membersMap: new Map(),
    toggleReaction: noop$5,
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    }
  };
  OutgoingUserMessage.propTypes = {
    userId: PropTypes.string.isRequired,
    message: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array, PropTypes.object])),
    showEdit: PropTypes.func,
    showRemove: PropTypes.func,
    disabled: PropTypes.bool,
    resendMessage: PropTypes.func,
    status: PropTypes.string.isRequired,
    useReaction: PropTypes.bool.isRequired,
    emojiAllMap: PropTypes.instanceOf(Map),
    membersMap: PropTypes.instanceOf(Map),
    toggleReaction: PropTypes.func,
    memoizedMessageText: PropTypes.func.isRequired,
    memoizedEmojiListItems: PropTypes.func,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };
  OutgoingUserMessage.defaultProps = {
    message: {},
    resendMessage: noop$5,
    showEdit: noop$5,
    showRemove: noop$5,
    disabled: false,
    emojiAllMap: new Map(),
    membersMap: new Map(),
    toggleReaction: noop$5,
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    }
  };

  function AdminMessage(_ref) {
    var className = _ref.className,
        message = _ref.message;

    if (!(message.isAdminMessage || message.messageType) || !message.isAdminMessage() || message.messageType !== 'admin') {
      return null;
    }

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-admin-message']).join(' ')
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-admin-message__text",
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, message.message));
  }
  AdminMessage.propTypes = {
    message: PropTypes.shape({
      message: PropTypes.string,
      messageType: PropTypes.string,
      isAdminMessage: PropTypes.func
    }),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  };
  AdminMessage.defaultProps = {
    message: {},
    className: ''
  };

  var getMessageCreatedAt$2 = function getMessageCreatedAt(message) {
    return format(message.createdAt, 'p');
  };
  var getIsSentFromStatus$1$1 = function getIsSentFromStatus(status) {
    return status === MessageStatusType.SENT || status === MessageStatusType.DELIVERED || status === MessageStatusType.READ;
  };
  var getIsSentFromSendingStatus$1$1 = function getIsSentFromSendingStatus() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (message.sendingStatus && typeof message.sendingStatus === 'string') {
      return message.sendingStatus === 'none' || message.sendingStatus === 'succeeded';
    }

    return false;
  };

  var noop$4 = function noop() {};

  var OUTGOING_THUMBNAIL_MESSAGE = 'sendbird-outgoing-thumbnail-message';
  var INCOMING_THUMBNAIL_MESSAGE = 'sendbird-incoming-thumbnail-message';
  var GROUPING_PADDING$2 = '1px';
  var NORMAL_PADDING$2 = '8px';
  function ThumbnailMessage(_ref) {
    var _ref$message = _ref.message,
        message = _ref$message === void 0 ? {} : _ref$message,
        userId = _ref.userId,
        disabled = _ref.disabled,
        isByMe = _ref.isByMe,
        onClick = _ref.onClick,
        showRemove = _ref.showRemove,
        status = _ref.status,
        resendMessage = _ref.resendMessage,
        useReaction = _ref.useReaction,
        emojiAllMap = _ref.emojiAllMap,
        membersMap = _ref.membersMap,
        toggleReaction = _ref.toggleReaction,
        memoizedEmojiListItems = _ref.memoizedEmojiListItems,
        chainTop = _ref.chainTop,
        chainBottom = _ref.chainBottom;
    return isByMe ? /*#__PURE__*/React__default__default.createElement(OutgoingThumbnailMessage, {
      userId: userId,
      status: status,
      message: message,
      onClick: onClick,
      disabled: disabled,
      chainTop: chainTop,
      showRemove: showRemove,
      membersMap: membersMap,
      chainBottom: chainBottom,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      resendMessage: resendMessage,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    }) : /*#__PURE__*/React__default__default.createElement(IncomingThumbnailMessage, {
      userId: userId,
      status: status,
      message: message,
      onClick: onClick,
      chainTop: chainTop,
      membersMap: membersMap,
      chainBottom: chainBottom,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    });
  }
  function OutgoingThumbnailMessage(_ref2) {
    var _ref2$message = _ref2.message,
        message = _ref2$message === void 0 ? {} : _ref2$message,
        userId = _ref2.userId,
        disabled = _ref2.disabled,
        onClick = _ref2.onClick,
        showRemove = _ref2.showRemove,
        status = _ref2.status,
        resendMessage = _ref2.resendMessage,
        useReaction = _ref2.useReaction,
        emojiAllMap = _ref2.emojiAllMap,
        membersMap = _ref2.membersMap,
        toggleReaction = _ref2.toggleReaction,
        memoizedEmojiListItems = _ref2.memoizedEmojiListItems,
        chainTop = _ref2.chainTop,
        chainBottom = _ref2.chainBottom;
    var type = message.type,
        url = message.url,
        localUrl = message.localUrl,
        thumbnails = message.thumbnails;
    var thumbnailUrl = thumbnails && thumbnails.length > 0 && thumbnails[0].url || null;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var messageRef = React__default.useRef(null);
    var parentContainRef = React__default.useRef(null);
    var menuRef = React__default.useRef(null);
    var reactionAddRef = React__default.useRef(null);

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        mousehover = _useState2[0],
        setMousehover = _useState2[1];

    var _useState3 = React__default.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        moreActive = _useState4[0],
        setMoreActive = _useState4[1];

    var _useState5 = React__default.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        menuDisplaying = _useState6[0],
        setMenuDisplaying = _useState6[1];
    /* eslint-disable react/prop-types */


    var memorizedThumbnailPlaceHolder = React__default.useMemo(function () {
      return function (iconType) {
        return function (_ref3) {
          var style = _ref3.style;
          return /*#__PURE__*/React__default__default.createElement("div", {
            style: style
          }, /*#__PURE__*/React__default__default.createElement(Icon, {
            type: iconType,
            fillColor: IconColors.ON_BACKGROUND_2,
            width: "56px",
            height: "56px"
          }));
        };
      };
    }, []);
    var showReactionAddButton = useReaction && emojiAllMap && emojiAllMap.size > 0 && getIsSentFromSendingStatus$1$1(message);
    var MemoizedEmojiListItems = memoizedEmojiListItems;
    var isMessageSent = getIsSentFromStatus$1$1(status);

    var handleMoreIconClick = function handleMoreIconClick() {
      setMoreActive(true);
    };

    var handleMoreIconBlur = function handleMoreIconBlur() {
      setMoreActive(false);
    };

    useMouseHover({
      ref: messageRef,
      setHover: setMousehover
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: OUTGOING_THUMBNAIL_MESSAGE,
      ref: messageRef,
      style: {
        paddingTop: chainTop ? GROUPING_PADDING$2 : NORMAL_PADDING$2,
        paddingBottom: chainBottom ? GROUPING_PADDING$2 : NORMAL_PADDING$2
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "--inner")
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "__left-padding")
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-left-padding__more"),
      ref: parentContainRef
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: menuRef,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
         */
        , {
          parentRef: menuRef,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          openLeft: true
        }, message && message.isResendable && message.isResendable() && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            resendMessage(message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showRemove(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
      }
    }), isMessageSent && showReactionAddButton && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: reactionAddRef,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.EMOJI_MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MemoizedEmojiListItems, {
          message: message,
          parentRef: reactionAddRef,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          spaceFromTrigger: {
            y: 2
          }
        });
      }
    })), !chainBottom && !(mousehover || moreActive || menuDisplaying) && /*#__PURE__*/React__default__default.createElement(MessageStatus, {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-left-padding__status"),
      message: message,
      status: status
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "__body")
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__wrap")
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__wrap--inner"),
      role: "button",
      onClick: isMessageSent ? function () {
        return onClick(true);
      } : function () {},
      onKeyDown: isMessageSent ? function () {
        return onClick(true);
      } : function () {},
      tabIndex: 0
    }, isVideo(type) && /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, thumbnailUrl ? /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__video"),
      url: thumbnailUrl,
      alt: "video/thumbnail",
      width: "404px",
      height: "280px",
      defaultComponent: /*#__PURE__*/React__default__default.createElement("div", {
        className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "__thumbnail-placeholder--video")
      }, /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.PLAY,
        fillColor: IconColors.ON_BACKGROUND_2,
        width: "56px",
        height: "56px"
      })),
      placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PLAY)
    }) :
    /*#__PURE__*/

    /* eslint-disable-next-line jsx-a11y/media-has-caption */
    React__default__default.createElement("video", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__video")
    }, /*#__PURE__*/React__default__default.createElement("source", {
      src: url || localUrl,
      type: type
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__video-icon--wrap")
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__video-icon"),
      type: IconTypes.PLAY,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "34px",
      height: "34px"
    }))), isImage(type) && /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__img"),
      url: thumbnailUrl || url || localUrl,
      alt: "image/thumbnail",
      width: "404px",
      height: "280px",
      defaultComponent: /*#__PURE__*/React__default__default.createElement("div", {
        className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "__thumbnail-placeholder--image")
      }, /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.PHOTO,
        fillColor: IconColors.ON_BACKGROUND_2,
        width: "56px",
        height: "56px"
      })),
      placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PHOTO)
    }), isGif(type) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__gif-icon--wrap")
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__gif-icon"),
      type: IconTypes.GIF,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "34px",
      height: "34px"
    }))), unSupported(type) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__other")
    }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE), /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__wrap__overlay")
    })), useReaction && message.reactions && message.reactions.length > 0 && /*#__PURE__*/React__default__default.createElement(EmojiReactions, {
      className: "".concat(OUTGOING_THUMBNAIL_MESSAGE, "-body__wrap__emoji-reactions"),
      userId: userId,
      message: message,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    })))));
  }
  function IncomingThumbnailMessage(_ref4) {
    var _ref4$message = _ref4.message,
        message = _ref4$message === void 0 ? {} : _ref4$message,
        userId = _ref4.userId,
        onClick = _ref4.onClick,
        status = _ref4.status,
        useReaction = _ref4.useReaction,
        emojiAllMap = _ref4.emojiAllMap,
        membersMap = _ref4.membersMap,
        toggleReaction = _ref4.toggleReaction,
        memoizedEmojiListItems = _ref4.memoizedEmojiListItems,
        chainTop = _ref4.chainTop,
        chainBottom = _ref4.chainBottom;
    var type = message.type,
        url = message.url,
        localUrl = message.localUrl,
        thumbnails = message.thumbnails;
    var thumbnailUrl = thumbnails && thumbnails.length > 0 && thumbnails[0].url || null;

    var _React$useContext = React__default__default.useContext(UserProfileContext),
        disableUserProfile = _React$useContext.disableUserProfile,
        renderUserProfile = _React$useContext.renderUserProfile;

    var _useContext2 = React__default.useContext(LocalizationContext),
        stringSet = _useContext2.stringSet;

    var messageRef = React__default.useRef(null);
    var parentContainRef = React__default.useRef(null);
    var reactionAddRef = React__default.useRef(null);
    var avatarRef = React__default.useRef(null);

    var _useState7 = React__default.useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        mousehover = _useState8[0],
        setMousehover = _useState8[1];

    var _useState9 = React__default.useState(false),
        _useState10 = _slicedToArray(_useState9, 2),
        moreActive = _useState10[0],
        setMoreActive = _useState10[1];

    var _useState11 = React__default.useState(false),
        _useState12 = _slicedToArray(_useState11, 2),
        menuDisplaying = _useState12[0],
        setMenuDisplaying = _useState12[1];
    /* eslint-disable react/prop-types */


    var memorizedThumbnailPlaceHolder = React__default.useMemo(function () {
      return function (iconType) {
        return function (_ref5) {
          var style = _ref5.style;
          return /*#__PURE__*/React__default__default.createElement("div", {
            style: style
          }, /*#__PURE__*/React__default__default.createElement(Icon, {
            type: iconType,
            fillColor: IconColors.ON_BACKGROUND_2,
            width: "56px",
            height: "56px"
          }));
        };
      };
    }, []);
    var showReactionAddButton = useReaction && emojiAllMap && emojiAllMap.size > 0;
    var MemoizedEmojiListItems = memoizedEmojiListItems;
    var isMessageSent = getIsSentFromStatus$1$1(status);

    var handleMoreIconClick = function handleMoreIconClick() {
      setMoreActive(true);
    };

    var handleMoreIconBlur = function handleMoreIconBlur() {
      setMoreActive(false);
    };

    useMouseHover({
      ref: messageRef,
      setHover: setMousehover
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: INCOMING_THUMBNAIL_MESSAGE,
      ref: messageRef,
      style: {
        paddingTop: chainTop ? GROUPING_PADDING$2 : NORMAL_PADDING$2,
        paddingBottom: chainBottom ? GROUPING_PADDING$2 : NORMAL_PADDING$2
      }
    }, !chainTop && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__sender-name"),
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, getSenderName(message) || ''), /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "--inner")
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__body")
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "-body__wrap")
    }, !chainBottom && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__avatar"),
          ref: avatarRef,
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          },
          src: getSenderProfileUrl(message),
          width: "28px",
          height: "28px"
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
         */
        , {
          parentRef: avatarRef,
          parentContainRef: avatarRef,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: message.sender,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: message.sender,
          onSuccess: closeDropdown
        }));
      }
    }), /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "-body__wrap--inner"),
      role: "button",
      onClick: isMessageSent ? function () {
        return onClick(true);
      } : function () {},
      onKeyDown: isMessageSent ? function () {
        return onClick(true);
      } : function () {},
      tabIndex: 0
    }, isVideo(type) && /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, thumbnailUrl ? /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__video"),
      url: thumbnailUrl,
      alt: "video/thumbnail",
      width: "404px",
      height: "280px",
      defaultComponent: /*#__PURE__*/React__default__default.createElement("div", {
        className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__thumbnail-placeholder--video")
      }, /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.PLAY,
        fillColor: IconColors.ON_BACKGROUND_2,
        width: "56px",
        height: "56px"
      })),
      placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PLAY)
    }) :
    /*#__PURE__*/

    /* eslint-disable-next-line jsx-a11y/media-has-caption */
    React__default__default.createElement("video", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__video")
    }, /*#__PURE__*/React__default__default.createElement("source", {
      src: url || localUrl,
      type: type
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__video-icon--wrap")
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__video-icon"),
      type: IconTypes.PLAY,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "34px",
      height: "34px"
    }))), isImage(type) && /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__img"),
      url: thumbnailUrl || url || localUrl,
      alt: "image/thumbnail",
      width: "404px",
      height: "280px",
      defaultComponent: /*#__PURE__*/React__default__default.createElement("div", {
        className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__thumbnail-placeholder--image")
      }, /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.PHOTO,
        fillColor: IconColors.ON_BACKGROUND_2,
        width: "56px",
        height: "56px"
      })),
      placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PHOTO)
    }), isGif(type) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__gif-icon--wrap")
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__gif-icon"),
      type: IconTypes.GIF,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "34px",
      height: "34px"
    }))), unSupported(type) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__other")
    }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE), /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "-body__wrap-overlay")
    })), useReaction && message.reactions && message.reactions.length > 0 && /*#__PURE__*/React__default__default.createElement(EmojiReactions, {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__wrap__emoji-reactions"),
      userId: userId,
      message: message,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__right-padding")
    }, !chainBottom && !(mousehover || moreActive || menuDisplaying) && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__sent-at"),
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, getMessageCreatedAt$2(message)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "".concat(INCOMING_THUMBNAIL_MESSAGE, "__more"),
      ref: parentContainRef
    }, showReactionAddButton && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: reactionAddRef,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.EMOJI_MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MemoizedEmojiListItems, {
          message: message,
          parentRef: reactionAddRef,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          spaceFromTrigger: {
            y: 2
          }
        });
      }
    })))));
  }
  ThumbnailMessage.propTypes = {
    message: PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
      localUrl: PropTypes.string
    }).isRequired,
    userId: PropTypes.string,
    resendMessage: PropTypes.func,
    status: PropTypes.string,
    isByMe: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    showRemove: PropTypes.func,
    useReaction: PropTypes.bool.isRequired,
    emojiAllMap: PropTypes.instanceOf(Map),
    membersMap: PropTypes.instanceOf(Map),
    toggleReaction: PropTypes.func,
    memoizedEmojiListItems: PropTypes.func,
    chainTop: PropTypes.bool,
    chainBottom: PropTypes.bool
  };
  ThumbnailMessage.defaultProps = {
    isByMe: false,
    disabled: false,
    resendMessage: noop$4,
    onClick: noop$4,
    showRemove: noop$4,
    status: '',
    userId: '',
    emojiAllMap: new Map(),
    membersMap: new Map(),
    toggleReaction: noop$4,
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    },
    chainTop: false,
    chainBottom: false
  };
  OutgoingThumbnailMessage.propTypes = {
    message: PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
      localUrl: PropTypes.string
    }).isRequired,
    userId: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    resendMessage: PropTypes.func.isRequired,
    status: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    showRemove: PropTypes.func.isRequired,
    useReaction: PropTypes.bool.isRequired,
    emojiAllMap: PropTypes.instanceOf(Map).isRequired,
    membersMap: PropTypes.instanceOf(Map).isRequired,
    toggleReaction: PropTypes.func.isRequired,
    memoizedEmojiListItems: PropTypes.func.isRequired,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };
  OutgoingThumbnailMessage.defaultProps = {
    status: ''
  };
  IncomingThumbnailMessage.propTypes = {
    message: PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
      localUrl: PropTypes.string
    }).isRequired,
    userId: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    status: PropTypes.string,
    useReaction: PropTypes.bool.isRequired,
    emojiAllMap: PropTypes.instanceOf(Map).isRequired,
    membersMap: PropTypes.instanceOf(Map).isRequired,
    toggleReaction: PropTypes.func.isRequired,
    memoizedEmojiListItems: PropTypes.func.isRequired,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };
  IncomingThumbnailMessage.defaultProps = {
    status: ''
  };

  var MAX_TRUNCATE_LENGTH = 40;
  var GROUPAING_PADDING = '1px';
  var NORMAL_PADDING$1 = '8px';

  var noop$3 = function noop() {};

  function checkFileType(fileUrl) {
    var result = null;
    var imageFile = /(\.gif|\.jpg|\.jpeg|\.txt|\.pdf)$/i;
    var audioFile = /(\.mp3)$/i;

    if (imageFile.test(fileUrl)) {
      result = IconTypes.FILE_DOCUMENT;
    } else if (audioFile.test(fileUrl)) {
      result = IconTypes.FILE_AUDIO;
    }

    return result;
  }

  var MessageSwitch = function MessageSwitch(_ref) {
    var message = _ref.message,
        userId = _ref.userId,
        disabled = _ref.disabled,
        isByMe = _ref.isByMe,
        showRemove = _ref.showRemove,
        status = _ref.status,
        resendMessage = _ref.resendMessage,
        useReaction = _ref.useReaction,
        emojiAllMap = _ref.emojiAllMap,
        membersMap = _ref.membersMap,
        toggleReaction = _ref.toggleReaction,
        memoizedEmojiListItems = _ref.memoizedEmojiListItems,
        chainTop = _ref.chainTop,
        chainBottom = _ref.chainBottom;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message".concat(isByMe ? '--outgoing' : '--incoming')
    }, isByMe ? /*#__PURE__*/React__default__default.createElement(OutgoingFileMessage, {
      message: message,
      userId: userId,
      disabled: disabled,
      showRemove: showRemove,
      status: status,
      resendMessage: resendMessage,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems,
      chainTop: chainTop,
      chainBottom: chainBottom
    }) : /*#__PURE__*/React__default__default.createElement(IncomingFileMessage, {
      userId: userId,
      message: message,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems,
      chainTop: chainTop,
      chainBottom: chainBottom
    }));
  };

  MessageSwitch.propTypes = {
    message: PropTypes.shape({}),
    userId: PropTypes.string,
    isByMe: PropTypes.bool,
    disabled: PropTypes.bool,
    showRemove: PropTypes.func,
    resendMessage: PropTypes.func,
    status: PropTypes.string.isRequired,
    useReaction: PropTypes.bool.isRequired,
    emojiAllMap: PropTypes.instanceOf(Map),
    membersMap: PropTypes.instanceOf(Map),
    toggleReaction: PropTypes.func,
    memoizedEmojiListItems: PropTypes.func,
    chainTop: PropTypes.bool,
    chainBottom: PropTypes.bool
  };
  MessageSwitch.defaultProps = {
    message: {},
    isByMe: false,
    disabled: false,
    showRemove: noop$3,
    resendMessage: noop$3,
    userId: '',
    emojiAllMap: new Map(),
    membersMap: new Map(),
    toggleReaction: noop$3,
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    },
    chainTop: false,
    chainBottom: false
  };
  function OutgoingFileMessage(_ref2) {
    var message = _ref2.message,
        userId = _ref2.userId,
        status = _ref2.status,
        showRemove = _ref2.showRemove,
        disabled = _ref2.disabled,
        resendMessage = _ref2.resendMessage,
        useReaction = _ref2.useReaction,
        emojiAllMap = _ref2.emojiAllMap,
        membersMap = _ref2.membersMap,
        toggleReaction = _ref2.toggleReaction,
        memoizedEmojiListItems = _ref2.memoizedEmojiListItems,
        chainTop = _ref2.chainTop,
        chainBottom = _ref2.chainBottom;
    var url = message.url;

    var openFileUrl = function openFileUrl() {
      window.open(url);
    };

    var messageRef = React__default.useRef(null);
    var parentContainRef = React__default.useRef(null);
    var menuRef = React__default.useRef(null);
    var reactionAddButtonRef = React__default.useRef(null);

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        mousehover = _useState2[0],
        setMousehover = _useState2[1];

    var _useState3 = React__default.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        moreActive = _useState4[0],
        setMoreActive = _useState4[1];

    var _useState5 = React__default.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        menuDisplaying = _useState6[0],
        setMenuDisplaying = _useState6[1];

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var MemoizedEmojiListItems = memoizedEmojiListItems;
    var isMessageSent = getIsSentFromStatus(status);
    var showReactionAddButton = useReaction && emojiAllMap && emojiAllMap.size > 0 && getIsSentFromSendingStatus(message);
    var showEmojiReactions = isMessageSent && useReaction && message.reactions && message.reactions.length > 0 && getIsSentFromSendingStatus(message);

    var handleMoreIconClick = function handleMoreIconClick() {
      setMoreActive(true);
    };

    var handleMoreIconBlur = function handleMoreIconBlur() {
      setMoreActive(false);
    };

    useMouseHover({
      ref: messageRef,
      setHover: setMousehover
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__outgoing",
      ref: messageRef,
      style: {
        paddingTop: chainTop ? GROUPAING_PADDING : NORMAL_PADDING$1,
        paddingBottom: chainBottom ? GROUPAING_PADDING : NORMAL_PADDING$1
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__outgoing--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__outgoing__left-padding"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__outgoing__left-padding__more",
      ref: parentContainRef
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: menuRef,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
         */
        , {
          parentRef: menuRef,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          openLeft: true
        }, message && message.isResendable && message.isResendable() && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            resendMessage(message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showRemove(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
      }
    }), showReactionAddButton && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: reactionAddButtonRef,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.EMOJI_MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MemoizedEmojiListItems, {
          message: message,
          parentRef: reactionAddButtonRef,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          spaceFromTrigger: {
            y: 2
          }
        });
      }
    })), !chainBottom && !(mousehover || moreActive || menuDisplaying) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__outgoing__left-padding__status"
    }, /*#__PURE__*/React__default__default.createElement(MessageStatus, {
      message: message,
      status: status
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__outgoing__tooltip"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__outgoing__tooltip__inner"
    }, checkFileType(url) ? /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__outgoing__tooltip__icon-box"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-file-message__outgoing__tooltip__icon-box__icon",
      type: checkFileType(url),
      fillColor: IconColors.PRIMARY,
      width: "24px",
      height: "24px"
    })) : null, /*#__PURE__*/React__default__default.createElement(TextButton, {
      className: "sendbird-file-message__outgoing__tooltip__text",
      onClick: openFileUrl,
      color: LabelColors.ONCONTENT_1
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.BODY_1,
      color: LabelColors.ONCONTENT_1
    }, truncate(message.name || message.url, MAX_TRUNCATE_LENGTH)))), showEmojiReactions && /*#__PURE__*/React__default__default.createElement(EmojiReactions, {
      className: "sendbird-file-message__outgoing__tooltip__emoji-reactions",
      userId: userId,
      message: message,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    }))));
  }
  function IncomingFileMessage(_ref3) {
    var message = _ref3.message,
        userId = _ref3.userId,
        useReaction = _ref3.useReaction,
        emojiAllMap = _ref3.emojiAllMap,
        membersMap = _ref3.membersMap,
        toggleReaction = _ref3.toggleReaction,
        memoizedEmojiListItems = _ref3.memoizedEmojiListItems,
        chainTop = _ref3.chainTop,
        chainBottom = _ref3.chainBottom;

    var openFileUrl = function openFileUrl() {
      window.open(message.url);
    };

    var messageRef = React__default.useRef(null);

    var _React$useContext = React__default__default.useContext(UserProfileContext),
        disableUserProfile = _React$useContext.disableUserProfile,
        renderUserProfile = _React$useContext.renderUserProfile;

    var parentContainRef = React__default.useRef(null);
    var avatarRef = React__default.useRef(null);
    var reactionAddButtonRef = React__default.useRef(null);

    var _useState7 = React__default.useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        mousehover = _useState8[0],
        setMousehover = _useState8[1];

    var _useState9 = React__default.useState(false),
        _useState10 = _slicedToArray(_useState9, 2),
        moreActive = _useState10[0],
        setMoreActive = _useState10[1];

    var _useState11 = React__default.useState(false),
        _useState12 = _slicedToArray(_useState11, 2),
        menuDisplaying = _useState12[0],
        setMenuDisplaying = _useState12[1];

    var showReactionAddButton = useReaction && emojiAllMap && emojiAllMap.size > 0;
    var MemoizedEmojiListItems = memoizedEmojiListItems;

    var handleMoreIconClick = function handleMoreIconClick() {
      setMoreActive(true);
    };

    var handleMoreIconBlur = function handleMoreIconBlur() {
      setMoreActive(false);
    };

    useMouseHover({
      ref: messageRef,
      setHover: setMousehover
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__incoming",
      ref: messageRef,
      style: {
        paddingTop: chainTop ? GROUPAING_PADDING : NORMAL_PADDING$1,
        paddingBottom: chainBottom ? GROUPAING_PADDING : NORMAL_PADDING$1
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__incoming--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__incoming__body"
    }, !chainBottom && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          ref: avatarRef,
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          },
          className: "sendbird-file-message__incoming__body__avatar",
          src: getSenderProfileUrl(message),
          width: "28px",
          height: "28px"
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
         */
        , {
          parentRef: avatarRef,
          parentContainRef: avatarRef,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: message.sender,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: message.sender,
          onSuccess: closeDropdown
        }));
      }
    }), !chainTop && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-file-message__incoming__body__sender-name",
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, getSenderName(message)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__incoming__body__tooltip"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__incoming__body__tooltip__inner"
    }, checkFileType(message.url) ? /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__incoming__body__tooltip__icon-box"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-file-message__incoming__body__tooltip__icon-box__icon",
      type: checkFileType(message.url),
      fillColor: IconColors.PRIMARY,
      width: "24px",
      height: "24px"
    })) : null, /*#__PURE__*/React__default__default.createElement(TextButton, {
      className: "sendbird-file-message__incoming__body__tooltip__text",
      onClick: openFileUrl
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_1
    }, truncate(message.name || message.url, MAX_TRUNCATE_LENGTH)))), useReaction && message.reactions && message.reactions.length > 0 && /*#__PURE__*/React__default__default.createElement(EmojiReactions, {
      className: "sendbird-file-message__incoming__body__tooltip__emoji-reactions",
      userId: userId,
      message: message,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__incoming__right-padding"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-file-message__incoming__right-padding__more",
      ref: parentContainRef,
      style: {
        top: chainTop ? 6 : 18
      }
    }, showReactionAddButton && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: reactionAddButtonRef,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          width: "24px",
          height: "24px",
          type: IconTypes.EMOJI_MORE,
          fillColor: IconColors.CONTENT_INVERSE
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MemoizedEmojiListItems, {
          message: message,
          parentRef: reactionAddButtonRef,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          spaceFromTrigger: {
            y: 2
          }
        });
      }
    })), !chainBottom && !(mousehover || moreActive || menuDisplaying) && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-file-message__incoming__right-padding__sent-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, getMessageCreatedAt(message)))));
  }
  OutgoingFileMessage.propTypes = {
    message: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array, PropTypes.object])),
    userId: PropTypes.string,
    status: PropTypes.string,
    showRemove: PropTypes.func,
    resendMessage: PropTypes.func,
    useReaction: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    emojiAllMap: PropTypes.instanceOf(Map),
    membersMap: PropTypes.instanceOf(Map),
    toggleReaction: PropTypes.func,
    memoizedEmojiListItems: PropTypes.func,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };
  OutgoingFileMessage.defaultProps = {
    status: '',
    showRemove: noop$3,
    resendMessage: noop$3,
    message: {},
    userId: '',
    disabled: false,
    emojiAllMap: new Map(),
    membersMap: new Map(),
    toggleReaction: noop$3,
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    }
  };
  IncomingFileMessage.propTypes = {
    message: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array, PropTypes.object])),
    userId: PropTypes.string,
    useReaction: PropTypes.bool.isRequired,
    emojiAllMap: PropTypes.instanceOf(Map),
    membersMap: PropTypes.instanceOf(Map),
    toggleReaction: PropTypes.func,
    memoizedEmojiListItems: PropTypes.func,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };
  IncomingFileMessage.defaultProps = {
    message: {},
    userId: '',
    emojiAllMap: new Map(),
    membersMap: new Map(),
    toggleReaction: noop$3,
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    }
  };

  var RemoveMessage = function RemoveMessage(props) {
    var onCloseModal = props.onCloseModal,
        onDeleteMessage = props.onDeleteMessage;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    return /*#__PURE__*/React__default__default.createElement(Modal, {
      onCancel: onCloseModal,
      onSubmit: onDeleteMessage,
      submitText: stringSet.CONTEXT_MENU_DROPDOWN__DELETE,
      titleText: stringSet.MODAL__DELETE_MESSAGE__TITLE
    });
  };

  RemoveMessage.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    onDeleteMessage: PropTypes.func.isRequired
  };

  var getMessageCreatedAt$1$1 = function getMessageCreatedAt(message) {
    return format(message.createdAt, 'p');
  };

  var GROUPING_PADDING$1 = '1px';
  var NORMAL_PADDING = '8px';
  function UnknownMessage(_ref) {
    var message = _ref.message,
        isByMe = _ref.isByMe,
        status = _ref.status,
        className = _ref.className,
        showRemove = _ref.showRemove,
        chainTop = _ref.chainTop,
        chainBottom = _ref.chainBottom;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-unknown-message', "sendbird-unknown-message".concat(isByMe ? '--outgoing' : '--incoming')]).join(' ')
    }, isByMe ? /*#__PURE__*/React__default__default.createElement(OutgoingUnknownMessage, {
      status: status,
      message: message,
      chainTop: chainTop,
      showRemove: showRemove,
      chainBottom: chainBottom
    }) : /*#__PURE__*/React__default__default.createElement(IncomingUnknownMessage, {
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom
    }));
  }
  UnknownMessage.propTypes = {
    message: PropTypes.shape({}).isRequired,
    isByMe: PropTypes.bool,
    status: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    showRemove: PropTypes.func,
    chainTop: PropTypes.bool,
    chainBottom: PropTypes.bool
  };
  UnknownMessage.defaultProps = {
    isByMe: false,
    status: '',
    className: '',
    showRemove: function showRemove() {},
    chainTop: false,
    chainBottom: false
  };

  function OutgoingUnknownMessage(_ref2) {
    var message = _ref2.message,
        status = _ref2.status,
        showRemove = _ref2.showRemove,
        chainTop = _ref2.chainTop,
        chainBottom = _ref2.chainBottom;
    var messageRef = React__default.useRef(null);
    var parentContainRef = React__default.useRef(null);
    var menuRef = React__default.useRef(null);

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        mousehover = _useState2[0],
        setMousehover = _useState2[1];

    var _useState3 = React__default.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        moreActive = _useState4[0],
        setMoreActive = _useState4[1];

    var _useState5 = React__default.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        menuDisplaying = _useState6[0],
        setMenuDisplaying = _useState6[1];

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var handleMoreIconClick = function handleMoreIconClick() {
      setMoreActive(true);
    };

    var handleMoreIconBlur = function handleMoreIconBlur() {
      setMoreActive(false);
    };

    useMouseHover({
      ref: messageRef,
      setHover: setMousehover
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-unknown-message",
      ref: messageRef,
      style: {
        paddingTop: chainTop ? GROUPING_PADDING$1 : NORMAL_PADDING,
        paddingBottom: chainBottom ? GROUPING_PADDING$1 : NORMAL_PADDING
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-unknown-message--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-unknown-message--left-padding"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-unknown-message__more",
      ref: parentContainRef
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          className: "sendbird-outgoing-unknown-message__more__menu",
          ref: menuRef,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
            setMenuDisplaying(true);
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(close) {
        var closeDropdown = function closeDropdown() {
          close();
          setMenuDisplaying(false);
        };

        return /*#__PURE__*/React__default__default.createElement(MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
         */
        , {
          parentRef: menuRef,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          openLeft: true
        }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            showRemove(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
      }
    })), !chainBottom && !(mousehover || moreActive || menuDisplaying) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-unknown-message__message-status"
    }, /*#__PURE__*/React__default__default.createElement(MessageStatus, {
      message: message,
      status: status
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-unknown-message__body"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-unknown-message__body__text-balloon"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-outgoing-unknown-message__body__text-balloon__header",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-outgoing-unknown-message__body__text-balloon__description",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_2
    }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE)))));
  }

  function IncomingUnknownMessage(_ref3) {
    var message = _ref3.message,
        chainTop = _ref3.chainTop,
        chainBottom = _ref3.chainBottom;
    var sender = message.sender;
    var avatarRef = React__default.useRef(null);

    var _useContext2 = React__default.useContext(LocalizationContext),
        stringSet = _useContext2.stringSet;

    var _React$useContext = React__default__default.useContext(UserProfileContext),
        disableUserProfile = _React$useContext.disableUserProfile,
        renderUserProfile = _React$useContext.renderUserProfile;

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-unknown-message",
      style: {
        paddingTop: chainTop ? GROUPING_PADDING$1 : NORMAL_PADDING,
        paddingBottom: chainBottom ? GROUPING_PADDING$1 : NORMAL_PADDING
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-unknown-message--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-unknown-message__left"
    }, !chainBottom && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          className: "sendbird-incoming-unknown-message__left__sender-profile-image",
          ref: avatarRef,
          src: sender.profileUrl,
          alt: "sender-profile-image",
          width: "28px",
          height: "28px",
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          }
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
         */
        , {
          parentRef: avatarRef,
          parentContainRef: avatarRef,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: message.sender,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: message.sender,
          onSuccess: closeDropdown
        }));
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-unknown-message__body"
    }, !chainTop && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-incoming-unknown-message__body__sender-name",
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, sender.nickname || stringSet.NO_NAME), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-unknown-message__body__text-balloon"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-incoming-unknown-message__body__text-balloon__header",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-incoming-unknown-message__body__text-balloon__description",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_2
    }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-unknown-message--right-padding"
    }, !chainBottom && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-incoming-unknown-message__sent-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, getMessageCreatedAt$1$1(message)))));
  }

  OutgoingUnknownMessage.propTypes = {
    message: PropTypes.shape({}).isRequired,
    status: PropTypes.string.isRequired,
    showRemove: PropTypes.func,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };
  OutgoingUnknownMessage.defaultProps = {
    showRemove: function showRemove() {}
  };
  IncomingUnknownMessage.propTypes = {
    message: PropTypes.shape({
      sender: PropTypes.shape({
        nickname: PropTypes.string,
        profileUrl: PropTypes.string
      })
    }).isRequired,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };

  var createUrlTester = function createUrlTester(regexp) {
    return function (text) {
      return regexp.test(text);
    };
  };
  var getIsSentFromStatus$2 = function getIsSentFromStatus(status) {
    return status === MessageStatusType.SENT || status === MessageStatusType.DELIVERED || status === MessageStatusType.READ;
  };
  var copyToClipboard$1 = function copyToClipboard(text) {
    try {
      if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path
        // to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData('Text', text);
      }

      if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        var textarea = document.createElement('textarea');
        textarea.textContent = text;
        textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.

        document.body.appendChild(textarea);
        textarea.select();

        try {
          return document.execCommand('copy'); // Security exception may be thrown by some browsers.
        } catch (ex) {
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }

      return false;
    } catch (err) {
      return err;
    }
  };
  var getSenderProfileUrl$2 = function getSenderProfileUrl(message) {
    return message.sender && message.sender.profileUrl;
  };
  var getSenderName$2 = function getSenderName(message) {
    return message.sender && (message.sender.friendName || message.sender.nickname || message.sender.userId);
  };
  var getMessageCreatedAt$4 = function getMessageCreatedAt(message) {
    return format(message.createdAt, 'p');
  };
  var checkOGIsEnalbed = function checkOGIsEnalbed(message) {
    var ogMetaData = message.ogMetaData;

    if (!ogMetaData) {
      return false;
    }

    var url = ogMetaData.url;

    if (!url) {
      return false;
    }

    return true;
  };
  var getIsSentFromSendingStatus$2 = function getIsSentFromSendingStatus() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (message.sendingStatus && typeof message.sendingStatus === 'string') {
      return message.sendingStatus === 'none' || message.sendingStatus === 'succeeded';
    }

    return false;
  };

  var URL_REG = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  var isUrl = createUrlTester(URL_REG);
  function useMemoizedMessageText(_ref) {
    var message = _ref.message,
        updatedAt = _ref.updatedAt,
        className = _ref.className,
        _ref$incoming = _ref.incoming,
        incoming = _ref$incoming === void 0 ? false : _ref$incoming;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var WORD_TYPOGRAPHY = LabelTypography.BODY_1;
    var WORD_COLOR = incoming ? LabelColors.ONBACKGROUND_1 : LabelColors.ONCONTENT_1;
    var EDITED_COLOR = incoming ? LabelColors.ONBACKGROUND_2 : LabelColors.ONCONTENT_2;
    return React__default.useMemo(function () {
      return function () {
        var splitMessage = message.split(' ');
        var matchedMessage = splitMessage.map(function (word) {
          return isUrl(word) ? /*#__PURE__*/React__default__default.createElement(LinkLabel, {
            key: uuidv4(),
            className: className,
            src: word,
            type: WORD_TYPOGRAPHY,
            color: WORD_COLOR
          }, word) : /*#__PURE__*/React__default__default.createElement(Label, {
            key: uuidv4(),
            className: className,
            type: WORD_TYPOGRAPHY,
            color: WORD_COLOR
          }, word);
        });

        if (updatedAt > 0) {
          matchedMessage.push( /*#__PURE__*/React__default__default.createElement(Label, {
            key: uuidv4(),
            className: className,
            type: WORD_TYPOGRAPHY,
            color: EDITED_COLOR
          }, stringSet.MESSAGE_EDITED));
        }

        return matchedMessage;
      };
    }, [message, updatedAt, className]);
  }

  var GROUPING_PADDING = '1px';
  var NORAML_PADDING = '8px';

  var OGMessageSwitch = function OGMessageSwitch(_ref) {
    var className = _ref.className,
        isByMe = _ref.isByMe,
        userId = _ref.userId,
        status = _ref.status,
        message = _ref.message,
        disabled = _ref.disabled,
        showEdit = _ref.showEdit,
        chainTop = _ref.chainTop,
        membersMap = _ref.membersMap,
        showRemove = _ref.showRemove,
        useReaction = _ref.useReaction,
        emojiAllMap = _ref.emojiAllMap,
        chainBottom = _ref.chainBottom,
        resendMessage = _ref.resendMessage,
        toggleReaction = _ref.toggleReaction,
        memoizedEmojiListItems = _ref.memoizedEmojiListItems;
    var ogMetaData = message.ogMetaData;

    var openLink = function openLink() {
      if (checkOGIsEnalbed(message)) {
        var url = ogMetaData.url;
        window.open(url);
      }
    };

    var outoingMemoizedMessageText = useMemoizedMessageText({
      message: message.message,
      updatedAt: message.updatedAt,
      className: 'sendbird-og-message-word'
    });
    var incomingMemoizedMessageText = useMemoizedMessageText({
      message: message.message,
      updatedAt: message.updatedAt,
      className: 'sendbird-og-message-word',
      incoming: true
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-og-message', "sendbird-og-message".concat(isByMe ? '--outgoing' : '--incoming')]).join(' ')
    }, isByMe ? /*#__PURE__*/React__default__default.createElement(OutgoingOGMessage, {
      status: status,
      userId: userId,
      message: message,
      disabled: disabled,
      openLink: openLink,
      showEdit: showEdit,
      chainTop: chainTop,
      showRemove: showRemove,
      membersMap: membersMap,
      chainBottom: chainBottom,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      resendMessage: resendMessage,
      toggleReaction: toggleReaction,
      memoizedMessageText: outoingMemoizedMessageText,
      memoizedEmojiListItems: memoizedEmojiListItems
    }) : /*#__PURE__*/React__default__default.createElement(IncomingOGMessage, {
      userId: userId,
      message: message,
      openLink: openLink,
      chainTop: chainTop,
      membersMap: membersMap,
      chainBottom: chainBottom,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      toggleReaction: toggleReaction,
      memoizedMessageText: incomingMemoizedMessageText,
      memoizedEmojiListItems: memoizedEmojiListItems
    }));
  };

  function OutgoingOGMessage(props) {
    var status = props.status,
        userId = props.userId,
        message = props.message,
        disabled = props.disabled,
        openLink = props.openLink,
        showEdit = props.showEdit,
        chainTop = props.chainTop,
        showRemove = props.showRemove,
        membersMap = props.membersMap,
        chainBottom = props.chainBottom,
        emojiAllMap = props.emojiAllMap,
        useReaction = props.useReaction,
        resendMessage = props.resendMessage,
        toggleReaction = props.toggleReaction,
        memoizedMessageText = props.memoizedMessageText,
        memoizedEmojiListItems = props.memoizedEmojiListItems;
    var ogMetaData = message.ogMetaData;
    var defaultImage = ogMetaData.defaultImage;
    var MemoizedMessageText = memoizedMessageText;
    var MemoizedEmojiListItems = memoizedEmojiListItems;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var isMessageSent = getIsSentFromStatus$2(status);
    var showEmojiReactions = useReaction && message.reactions && message.reactions.length > 0 && getIsSentFromSendingStatus$2(message);
    var messageRef = React__default.useRef(null);
    var parentContainRef = React__default.useRef(null);
    var parentRefMenus = React__default.useRef(null);
    var parentRefReactions = React__default.useRef(null);

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        mousehover = _useState2[0],
        setMousehover = _useState2[1];

    var _useState3 = React__default.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        moreActive = _useState4[0],
        setMoreActive = _useState4[1];

    var handleMoreIconClick = function handleMoreIconClick() {
      setMoreActive(true);
    };

    var handleMoreIconBlur = function handleMoreIconBlur() {
      setMoreActive(false);
    };

    useMouseHover({
      ref: messageRef,
      setHover: setMousehover
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message",
      ref: messageRef,
      style: {
        paddingTop: chainTop ? GROUPING_PADDING : NORAML_PADDING,
        paddingBottom: chainBottom ? GROUPING_PADDING : NORAML_PADDING
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message--left-padding"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message__more",
      ref: parentContainRef
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          className: "sendbird-outgoing-og-message__more__menu",
          ref: parentRefMenus,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: parentRefMenus // for catching location(x, y) of MenuItems
          ,
          parentContainRef: parentContainRef // for toggling more options(menus & reactions)
          ,
          closeDropdown: closeDropdown,
          openLeft: true
        }, isMessageSent && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-outgoing-og-message__more__menu__copy",
          onClick: function onClick() {
            copyToClipboard$1(message.message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__COPY), isMessageSent && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showEdit(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT), message && message.isResendable && message.isResendable() && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            resendMessage(message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showRemove(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
      }
    }), isMessageSent && useReaction && emojiAllMap.size > 0 && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          className: "sendbird-outgoing-og-message__more__add-reaction",
          ref: parentRefReactions,
          width: "32px",
          height: "32px",
          onClick: toggleDropdown
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.EMOJI_MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MemoizedEmojiListItems, {
          message: message,
          parentRef: parentRefReactions,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          spaceFromTrigger: {
            y: 2
          }
        });
      }
    })), !chainBottom && !(mousehover || moreActive) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message__message-status"
    }, /*#__PURE__*/React__default__default.createElement(MessageStatus, {
      message: message,
      status: status
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message--body"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message__text-balloon"
    }, /*#__PURE__*/React__default__default.createElement(MemoizedMessageText, null)), /*#__PURE__*/React__default__default.createElement("div", {
      className: ['sendbird-outgoing-og-message__thumbnail', checkOGIsEnalbed(message) ? '' : 'sendbird-outgoing-og-message__thumbnail--disabled'].join(' '),
      role: "button",
      onClick: openLink,
      onKeyDown: openLink,
      tabIndex: 0
    }, defaultImage && /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      className: "sendbird-outgoing-og-message__thumbnail__image",
      url: defaultImage.url || '',
      alt: defaultImage.alt,
      width: "320px",
      height: "180px",
      defaultComponent: /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-outgoing-og-message__thumbnail__image__placeholder"
      }, /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.THUMBNAIL_NONE,
        width: "56px",
        height: "56px"
      }))
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: ['sendbird-outgoing-og-message__og-tag', checkOGIsEnalbed(message) ? '' : 'sendbird-outgoing-og-message__og-tag--disabled'].join(' '),
      role: "button",
      onClick: openLink,
      onKeyDown: openLink,
      tabIndex: 0
    }, ogMetaData.title && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message__og-tag__title"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_1
    }, ogMetaData.title)), ogMetaData.description && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message__og-tag__description"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-outgoing-og-message__og-tag__description__label",
      type: LabelTypography.BODY_2,
      color: LabelColors.ONBACKGROUND_1
    }, ogMetaData.description)), ogMetaData.url && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-outgoing-og-message__og-tag__url",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, ogMetaData.url), showEmojiReactions && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-outgoing-og-message__og-tag__emoji-reactions--wrapper",
      role: "button",
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      onKeyDown: function onKeyDown(event) {
        return event.stopPropagation();
      },
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement(EmojiReactions, {
      className: "sendbird-outgoing-og-message__og-tag__emoji-reactions",
      userId: userId,
      message: message,
      membersMap: membersMap,
      emojiAllMap: emojiAllMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    }))))));
  }

  function IncomingOGMessage(props) {
    var userId = props.userId,
        message = props.message,
        openLink = props.openLink,
        chainTop = props.chainTop,
        membersMap = props.membersMap,
        chainBottom = props.chainBottom,
        useReaction = props.useReaction,
        emojiAllMap = props.emojiAllMap,
        toggleReaction = props.toggleReaction,
        memoizedMessageText = props.memoizedMessageText,
        memoizedEmojiListItems = props.memoizedEmojiListItems;
    var ogMetaData = message.ogMetaData;
    var defaultImage = ogMetaData.defaultImage;

    var _useContext2 = React__default.useContext(LocalizationContext),
        stringSet = _useContext2.stringSet;

    var MemoizedMessageText = memoizedMessageText;
    var MemoizedEmojiListItems = memoizedEmojiListItems;
    var showEmojiReactions = useReaction && message.reactions && message.reactions.length > 0;
    var showReactionAddButton = useReaction && emojiAllMap && emojiAllMap.size > 0;
    var messageRef = React__default.useRef(null);
    var avatarRef = React__default.useRef(null);
    var parentRefReactions = React__default.useRef(null);
    var parentRefMenus = React__default.useRef(null);
    var parentContainRef = React__default.useRef(null);

    var _React$useContext = React__default__default.useContext(UserProfileContext),
        disableUserProfile = _React$useContext.disableUserProfile,
        renderUserProfile = _React$useContext.renderUserProfile;

    var _useState5 = React__default.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        mousehover = _useState6[0],
        setMousehover = _useState6[1];

    var _useState7 = React__default.useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        moreActive = _useState8[0],
        setMoreActive = _useState8[1];

    var handleMoreIconClick = function handleMoreIconClick() {
      setMoreActive(true);
    };

    var handleMoreIconBlur = function handleMoreIconBlur() {
      setMoreActive(false);
    };

    useMouseHover({
      ref: messageRef,
      setHover: setMousehover
    });
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message",
      ref: messageRef,
      style: {
        paddingTop: chainTop ? GROUPING_PADDING : NORAML_PADDING,
        paddingBottom: chainBottom ? GROUPING_PADDING : NORAML_PADDING
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message--body"
    }, !chainBottom && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          ref: avatarRef,
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          },
          className: "sendbird-incoming-og-message__avatar",
          src: getSenderProfileUrl$2(message),
          alt: "sender-profile-image",
          width: "28px",
          height: "28px"
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: avatarRef // for catching location(x, y) of MenuItems
          ,
          parentContainRef: avatarRef // for toggling more options(menus & reactions)
          ,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: message.sender,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: message.sender,
          onSuccess: closeDropdown
        }));
      }
    }), !chainTop && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-incoming-og-message__sender-name",
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, getSenderName$2(message)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message__text-balloon"
    }, /*#__PURE__*/React__default__default.createElement(MemoizedMessageText, null)), /*#__PURE__*/React__default__default.createElement("div", {
      className: ['sendbird-incoming-og-message__thumbnail', checkOGIsEnalbed(message) ? '' : 'sendbird-incoming-og-message__thumbnail--disabled'].join(' '),
      role: "button",
      onClick: openLink,
      onKeyDown: openLink,
      tabIndex: 0
    }, defaultImage && /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      url: defaultImage.url || '',
      alt: defaultImage.alt || '',
      className: "sendbird-incoming-og-message__thumbnail__image",
      width: "320px",
      height: "180px",
      defaultComponent: /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-incoming-og-message__thumbnail__image__placeholder"
      }, /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.THUMBNAIL_NONE,
        width: "56px",
        height: "56px"
      }))
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: ['sendbird-incoming-og-message__og-tag', checkOGIsEnalbed(message) ? '' : 'sendbird-incoming-og-message__og-tag--disabled'].join(' '),
      role: "button",
      onClick: openLink,
      onKeyDown: openLink,
      tabIndex: 0
    }, ogMetaData.title && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message__og-tag__title"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_1
    }, ogMetaData.title)), ogMetaData.description && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message__og-tag__description"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-incoming-og-message__og-tag__description__label",
      type: LabelTypography.BODY_2,
      color: LabelColors.ONBACKGROUND_1
    }, ogMetaData.description)), ogMetaData.url && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message__og-tag__url"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-incoming-og-message__og-tag__url__label",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, ogMetaData.url)), showEmojiReactions && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message__og-tag__emoji-reactions--wrapper",
      role: "button",
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      onKeyDown: function onKeyDown(event) {
        return event.stopPropagation();
      },
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement(EmojiReactions, {
      className: "sendbird-incoming-og-message__og-tag__emoji-reactions",
      userId: userId,
      message: message,
      membersMap: membersMap,
      emojiAllMap: emojiAllMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems
    })))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message--right-padding"
    }, !chainBottom && !(mousehover || moreActive) && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-incoming-og-message__sent-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, getMessageCreatedAt$4(message)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-incoming-og-message__more",
      ref: parentContainRef
    }, showReactionAddButton && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: parentRefReactions,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.EMOJI_MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MemoizedEmojiListItems, {
          parentRef: parentRefReactions,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown,
          message: message,
          spaceFromTrigger: {
            y: 2
          }
        });
      }
    }), /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(IconButton, {
          ref: parentRefMenus,
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
            handleMoreIconClick();
          },
          onBlur: function onBlur() {
            handleMoreIconBlur();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: parentRefMenus,
          parentContainRef: parentContainRef,
          closeDropdown: closeDropdown
        }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-incoming-og-message__more__menu__copy",
          onClick: function onClick() {
            copyToClipboard$1(message.message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__COPY));
      }
    })))));
  }

  var noop$2$1 = function noop() {};

  OGMessageSwitch.propTypes = {
    isByMe: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    message: PropTypes.shape({
      message: PropTypes.string,
      sender: PropTypes.shape({}),
      ogMetaData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        defaultImage: PropTypes.shape({
          url: PropTypes.string,
          alt: PropTypes.string
        })
      }),
      reactions: PropTypes.array,
      updatedAt: PropTypes.number
    }).isRequired,
    useReaction: PropTypes.bool.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    status: PropTypes.string,
    disabled: PropTypes.bool,
    showEdit: PropTypes.func,
    showRemove: PropTypes.func,
    resendMessage: PropTypes.func,
    toggleReaction: PropTypes.func,
    membersMap: PropTypes.instanceOf(Map),
    emojiAllMap: PropTypes.instanceOf(Map),
    memoizedEmojiListItems: PropTypes.func,
    chainTop: PropTypes.bool,
    chainBottom: PropTypes.bool
  };
  OGMessageSwitch.defaultProps = {
    className: '',
    status: '',
    disabled: false,
    showEdit: noop$2$1,
    showRemove: noop$2$1,
    resendMessage: noop$2$1,
    toggleReaction: noop$2$1,
    membersMap: new Map(),
    emojiAllMap: new Map(),
    memoizedEmojiListItems: noop$2$1,
    chainTop: false,
    chainBottom: false
  };
  OutgoingOGMessage.propTypes = {
    status: PropTypes.string,
    userId: PropTypes.string.isRequired,
    message: PropTypes.shape({
      message: PropTypes.string,
      ogMetaData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        defaultImage: PropTypes.shape({
          url: PropTypes.string,
          alt: PropTypes.string
        })
      }),
      reactions: PropTypes.array,
      updatedAt: PropTypes.number,
      isResendable: PropTypes.func,
      errorCode: PropTypes.number
    }).isRequired,
    disabled: PropTypes.bool.isRequired,
    openLink: PropTypes.func.isRequired,
    showEdit: PropTypes.func.isRequired,
    showRemove: PropTypes.func.isRequired,
    membersMap: PropTypes.instanceOf(Map).isRequired,
    emojiAllMap: PropTypes.instanceOf(Map).isRequired,
    useReaction: PropTypes.bool.isRequired,
    resendMessage: PropTypes.func.isRequired,
    toggleReaction: PropTypes.func.isRequired,
    memoizedMessageText: PropTypes.func.isRequired,
    memoizedEmojiListItems: PropTypes.func.isRequired,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };
  OutgoingOGMessage.defaultProps = {
    status: ''
  };
  IncomingOGMessage.propTypes = {
    userId: PropTypes.string.isRequired,
    message: PropTypes.shape({
      message: PropTypes.string,
      sender: PropTypes.shape({}),
      ogMetaData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        defaultImage: PropTypes.shape({
          url: PropTypes.string,
          alt: PropTypes.string
        })
      }),
      reactions: PropTypes.array,
      updatedAt: PropTypes.number
    }).isRequired,
    openLink: PropTypes.func.isRequired,
    membersMap: PropTypes.instanceOf(Map).isRequired,
    emojiAllMap: PropTypes.instanceOf(Map).isRequired,
    useReaction: PropTypes.bool.isRequired,
    toggleReaction: PropTypes.func.isRequired,
    memoizedMessageText: PropTypes.func.isRequired,
    memoizedEmojiListItems: PropTypes.func.isRequired,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired
  };

  function MessageHoc(_ref) {
    var _MessageTypes$ADMIN$M;

    var message = _ref.message,
        userId = _ref.userId,
        disabled = _ref.disabled,
        editDisabled = _ref.editDisabled,
        hasSeperator = _ref.hasSeperator,
        deleteMessage = _ref.deleteMessage,
        updateMessage = _ref.updateMessage,
        status = _ref.status,
        resendMessage = _ref.resendMessage,
        useReaction = _ref.useReaction,
        chainTop = _ref.chainTop,
        chainBottom = _ref.chainBottom,
        emojiAllMap = _ref.emojiAllMap,
        membersMap = _ref.membersMap,
        highLightedMessageId = _ref.highLightedMessageId,
        toggleReaction = _ref.toggleReaction,
        memoizedEmojiListItems = _ref.memoizedEmojiListItems,
        renderCustomMessage = _ref.renderCustomMessage,
        currentGroupChannel = _ref.currentGroupChannel;
    var _message$sender = message.sender,
        sender = _message$sender === void 0 ? {} : _message$sender;

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showEdit = _useState2[0],
        setShowEdit = _useState2[1];

    var _useState3 = React__default.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        showRemove = _useState4[0],
        setShowRemove = _useState4[1];

    var _useState5 = React__default.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        showFileViewer = _useState6[0],
        setShowFileViewer = _useState6[1];

    var _useState7 = React__default.useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        isAnimated = _useState8[0],
        setIsAnimated = _useState8[1];

    var editMessageInputRef = React__default.useRef(null);
    var useMessageScrollRef = React__default.useRef(null);
    React__default.useLayoutEffect(function () {
      if (highLightedMessageId === message.messageId) {
        if (useMessageScrollRef && useMessageScrollRef.current) {
          useMessageScrollRef.current.scrollIntoView({
            block: 'center',
            inline: 'center'
          });
          setTimeout(function () {
            setIsAnimated(true);
          }, 500);
        }
      } else {
        setIsAnimated(false);
      }
    }, [highLightedMessageId, useMessageScrollRef.current, message.messageId]);
    var RenderedMessage = React__default.useMemo(function () {
      if (renderCustomMessage) {
        return renderCustomMessage(message, currentGroupChannel, chainTop, chainBottom); // Let's change this to object type on next major version up
      }

      return null;
    }, [message, message.message, renderCustomMessage]);
    var isByMe = userId === sender.userId || message.requestState === 'pending' || message.requestState === 'failed';

    if (RenderedMessage) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        ref: useMessageScrollRef,
        className: "\n          sendbird-msg-hoc sendbird-msg--scroll-ref\n          ".concat(isAnimated ? 'sendbird-msg-hoc__highlighted' : '', "\n        ")
      }, hasSeperator && /*#__PURE__*/React__default__default.createElement(DateSeparator, null, /*#__PURE__*/React__default__default.createElement(Label, {
        type: LabelTypography.CAPTION_2,
        color: LabelColors.ONBACKGROUND_2
      }, format(message.createdAt, 'MMMM dd, yyyy'))), /*#__PURE__*/React__default__default.createElement(RenderedMessage, {
        message: message
      }));
    }

    if (showEdit) {
      return /*#__PURE__*/React__default__default.createElement(MessageInput, {
        isEdit: true,
        disabled: editDisabled,
        ref: editMessageInputRef,
        name: message.messageId,
        onSendMessage: updateMessage,
        onCancelEdit: function onCancelEdit() {
          setShowEdit(false);
        },
        value: message.message
      });
    }

    return /*#__PURE__*/React__default__default.createElement("div", {
      ref: useMessageScrollRef,
      className: "\n        sendbird-msg-hoc sendbird-msg--scroll-ref\n        ".concat(isAnimated ? 'sendbird-msg-hoc__animated' : '', "\n      ")
    }, hasSeperator && /*#__PURE__*/React__default__default.createElement(DateSeparator, null, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, format(message.createdAt, 'MMMM dd, yyyy'))), (_MessageTypes$ADMIN$M = {}, _defineProperty(_MessageTypes$ADMIN$M, MessageTypes.ADMIN, /*#__PURE__*/React__default__default.createElement(AdminMessage, {
      message: message
    })), _defineProperty(_MessageTypes$ADMIN$M, MessageTypes.FILE, /*#__PURE__*/React__default__default.createElement(MessageSwitch, {
      message: message,
      userId: userId,
      disabled: disabled,
      isByMe: isByMe,
      showRemove: setShowRemove,
      resendMessage: resendMessage,
      status: status,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems,
      chainTop: chainTop,
      chainBottom: chainBottom
    })), _defineProperty(_MessageTypes$ADMIN$M, MessageTypes.OG, /*#__PURE__*/React__default__default.createElement(OGMessageSwitch, {
      message: message,
      status: status,
      isByMe: isByMe,
      userId: userId,
      showEdit: setShowEdit,
      disabled: disabled,
      showRemove: setShowRemove,
      resendMessage: resendMessage,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems,
      chainTop: chainTop,
      chainBottom: chainBottom
    })), _defineProperty(_MessageTypes$ADMIN$M, MessageTypes.THUMBNAIL, /*#__PURE__*/React__default__default.createElement(ThumbnailMessage, {
      disabled: disabled,
      message: message,
      userId: userId,
      isByMe: isByMe,
      showRemove: setShowRemove,
      resendMessage: resendMessage,
      onClick: setShowFileViewer,
      status: status,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems,
      chainTop: chainTop,
      chainBottom: chainBottom
    })), _defineProperty(_MessageTypes$ADMIN$M, MessageTypes.USER, /*#__PURE__*/React__default__default.createElement(Message, {
      message: message,
      disabled: disabled,
      isByMe: isByMe,
      userId: userId,
      showEdit: setShowEdit,
      showRemove: setShowRemove,
      resendMessage: resendMessage,
      status: status,
      useReaction: useReaction,
      emojiAllMap: emojiAllMap,
      membersMap: membersMap,
      toggleReaction: toggleReaction,
      memoizedEmojiListItems: memoizedEmojiListItems,
      chainTop: chainTop,
      chainBottom: chainBottom
    })), _MessageTypes$ADMIN$M)[getMessageType(message)], showRemove && /*#__PURE__*/React__default__default.createElement(RemoveMessage, {
      onCloseModal: function onCloseModal() {
        return setShowRemove(false);
      },
      onDeleteMessage: function onDeleteMessage() {
        deleteMessage(message);
      }
    }), showFileViewer && /*#__PURE__*/React__default__default.createElement(FileViewer, {
      onClose: function onClose() {
        return setShowFileViewer(false);
      },
      message: message,
      onDelete: function onDelete() {
        deleteMessage(message, function () {
          setShowFileViewer(false);
        });
      },
      isByMe: isByMe
    }), !(message.isFileMessage && message.isFileMessage() || message.messageType === 'file') && !(message.isAdminMessage && message.isAdminMessage()) && !(message.isUserMessage && message.isUserMessage() || message.messageType === 'user') && !showFileViewer && /*#__PURE__*/React__default__default.createElement(UnknownMessage, {
      message: message,
      status: status,
      isByMe: isByMe,
      showRemove: setShowRemove,
      chainTop: chainTop,
      chainBottom: chainBottom
    }));
  }
  MessageHoc.propTypes = {
    userId: PropTypes.string,
    message: PropTypes.shape({
      isFileMessage: PropTypes.func,
      isAdminMessage: PropTypes.func,
      isUserMessage: PropTypes.func,
      isDateSeperator: PropTypes.func,
      // should be a number, but there's a bug in SDK shich returns string
      messageId: PropTypes.number,
      type: PropTypes.string,
      createdAt: PropTypes.number,
      message: PropTypes.string,
      requestState: PropTypes.string,
      messageType: PropTypes.string,
      sender: PropTypes.shape({
        userId: PropTypes.string
      }),
      ogMetaData: PropTypes.shape({})
    }),
    highLightedMessageId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    renderCustomMessage: PropTypes.func,
    currentGroupChannel: PropTypes.shape({}),
    hasSeperator: PropTypes.bool,
    disabled: PropTypes.bool,
    editDisabled: PropTypes.bool,
    deleteMessage: PropTypes.func.isRequired,
    updateMessage: PropTypes.func.isRequired,
    resendMessage: PropTypes.func.isRequired,
    status: PropTypes.string,
    useReaction: PropTypes.bool.isRequired,
    chainTop: PropTypes.bool.isRequired,
    chainBottom: PropTypes.bool.isRequired,
    emojiAllMap: PropTypes.instanceOf(Map).isRequired,
    membersMap: PropTypes.instanceOf(Map).isRequired,
    toggleReaction: PropTypes.func,
    memoizedEmojiListItems: PropTypes.func
  };
  MessageHoc.defaultProps = {
    userId: '',
    editDisabled: false,
    renderCustomMessage: null,
    currentGroupChannel: {},
    message: {},
    hasSeperator: false,
    disabled: false,
    highLightedMessageId: null,
    status: '',
    toggleReaction: function toggleReaction() {},
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    }
  };

  var ConversationScroll = /*#__PURE__*/function (_Component) {
    _inherits(ConversationScroll, _Component);

    var _super = _createSuper(ConversationScroll);

    function ConversationScroll() {
      var _this;

      _classCallCheck(this, ConversationScroll);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "onScroll", function (e) {
        var _this$props = _this.props,
            scrollRef = _this$props.scrollRef,
            hasMore = _this$props.hasMore,
            messagesDispatcher = _this$props.messagesDispatcher,
            onScroll = _this$props.onScroll,
            onScrollDown = _this$props.onScrollDown,
            currentGroupChannel = _this$props.currentGroupChannel;
        var element = e.target;
        var scrollTop = element.scrollTop,
            clientHeight = element.clientHeight,
            scrollHeight = element.scrollHeight;

        if (scrollTop === 0) {
          if (!hasMore) {
            return;
          }

          var nodes = scrollRef.current.querySelectorAll('.sendbird-msg--scroll-ref');
          var first = nodes && nodes[0];
          onScroll(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                messages = _ref2[0];

            if (messages) {
              // https://github.com/scabbiaza/react-scroll-position-on-updating-dom
              try {
                first.scrollIntoView();
              } catch (error) {//
              }
            }
          });
        }

        if (clientHeight + scrollTop === scrollHeight) {
          var _nodes = scrollRef.current.querySelectorAll('.sendbird-msg--scroll-ref');

          var last = _nodes && _nodes[_nodes.length - 1];
          onScrollDown(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
                messages = _ref4[0];

            if (messages) {
              // https://github.com/scabbiaza/react-scroll-position-on-updating-dom
              try {
                last.scrollIntoView();
              } catch (error) {//
              }
            }
          });
        } // do this later


        setTimeout(function () {
          // mark as read if scroll is at end
          if (clientHeight + scrollTop === scrollHeight) {
            messagesDispatcher({
              type: MARK_AS_READ
            });
            currentGroupChannel.markAsRead();
          }
        }, 500);
      });

      return _this;
    }

    _createClass(ConversationScroll, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            userId = _this$props2.userId,
            disabled = _this$props2.disabled,
            scrollRef = _this$props2.scrollRef,
            readStatus = _this$props2.readStatus,
            membersMap = _this$props2.membersMap,
            allMessages = _this$props2.allMessages,
            useReaction = _this$props2.useReaction,
            emojiAllMap = _this$props2.emojiAllMap,
            editDisabled = _this$props2.editDisabled,
            deleteMessage = _this$props2.deleteMessage,
            updateMessage = _this$props2.updateMessage,
            resendMessage = _this$props2.resendMessage,
            renderCustomMessage = _this$props2.renderCustomMessage,
            renderChatItem = _this$props2.renderChatItem,
            highLightedMessageId = _this$props2.highLightedMessageId,
            emojiContainer = _this$props2.emojiContainer,
            toggleReaction = _this$props2.toggleReaction,
            useMessageGrouping = _this$props2.useMessageGrouping,
            currentGroupChannel = _this$props2.currentGroupChannel,
            memoizedEmojiListItems = _this$props2.memoizedEmojiListItems,
            showScrollBot = _this$props2.showScrollBot,
            onClickScrollBot = _this$props2.onClickScrollBot;

        if (allMessages.length < 1) {
          return /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
            className: "sendbird-conversation__no-messages",
            type: PlaceHolderTypes.NO_MESSAGES
          });
        }

        return /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-conversation__messages"
        }, /*#__PURE__*/React__default__default.createElement("div", {
          ref: scrollRef,
          className: "sendbird-conversation__scroll-container",
          onScroll: this.onScroll
        }, /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-conversation__padding"
        }), /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-conversation__messages-padding"
        }, allMessages.map(function (m, idx) {
          var previousMessage = allMessages[idx - 1];
          var nextMessage = allMessages[idx + 1];

          var _ref5 = useMessageGrouping ? compareMessagesForGrouping(previousMessage, m, nextMessage) : [false, false],
              _ref6 = _slicedToArray(_ref5, 2),
              chainTop = _ref6[0],
              chainBottom = _ref6[1];

          var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
          var currentCreatedAt = m.createdAt; // https://stackoverflow.com/a/41855608

          var hasSeperator = !(previousMessageCreatedAt && isSameDay(currentCreatedAt, previousMessageCreatedAt));

          if (renderChatItem) {
            return /*#__PURE__*/React__default__default.createElement("div", {
              key: m.messageId || m.reqId,
              className: "sendbird-msg--scroll-ref"
            }, renderChatItem({
              message: m,
              highLightedMessageId: highLightedMessageId,
              channel: currentGroupChannel,
              onDeleteMessage: deleteMessage,
              onUpdateMessage: updateMessage,
              onResendMessage: resendMessage,
              emojiContainer: emojiContainer,
              chainTop: chainTop,
              chainBottom: chainBottom
            }));
          }

          return /*#__PURE__*/React__default__default.createElement(MessageHoc, {
            highLightedMessageId: highLightedMessageId,
            renderCustomMessage: renderCustomMessage,
            key: m.messageId || m.reqId,
            userId: userId,
            status: readStatus[m.messageId] || getParsedStatus(m, currentGroupChannel) // show status for pending/failed messages
            ,
            message: m,
            currentGroupChannel: currentGroupChannel,
            disabled: disabled,
            membersMap: membersMap,
            chainTop: chainTop,
            useReaction: useReaction,
            emojiAllMap: emojiAllMap,
            editDisabled: editDisabled,
            hasSeperator: hasSeperator,
            chainBottom: chainBottom,
            updateMessage: updateMessage,
            deleteMessage: deleteMessage,
            resendMessage: resendMessage,
            toggleReaction: toggleReaction,
            memoizedEmojiListItems: memoizedEmojiListItems
          });
        }))), showScrollBot && /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-conversation__scroll-bottom-button",
          onClick: onClickScrollBot,
          onKeyDown: onClickScrollBot,
          tabIndex: 0,
          role: "button"
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          width: "24px",
          height: "24px",
          type: IconTypes.CHEVRON_DOWN,
          fillColor: IconColors.PRIMARY
        })));
      }
    }]);

    return ConversationScroll;
  }(React__default.Component);
  ConversationScroll.propTypes = {
    // https://stackoverflow.com/a/52646941
    scrollRef: PropTypes.shape({
      current: PropTypes.oneOfType([PropTypes.element, PropTypes.shape({})])
    }).isRequired,
    hasMore: PropTypes.bool,
    messagesDispatcher: PropTypes.func.isRequired,
    onScroll: PropTypes.func,
    onScrollDown: PropTypes.func,
    editDisabled: PropTypes.bool,
    disabled: PropTypes.bool,
    userId: PropTypes.string,
    allMessages: PropTypes.arrayOf(PropTypes.shape({
      createdAt: PropTypes.number
    })).isRequired,
    deleteMessage: PropTypes.func.isRequired,
    resendMessage: PropTypes.func.isRequired,
    updateMessage: PropTypes.func.isRequired,
    readStatus: PropTypes.shape({}).isRequired,
    currentGroupChannel: PropTypes.shape({
      markAsRead: PropTypes.func,
      members: PropTypes.arrayOf(PropTypes.shape({}))
    }).isRequired,
    highLightedMessageId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    renderChatItem: PropTypes.element,
    renderCustomMessage: PropTypes.func,
    useReaction: PropTypes.bool,
    showScrollBot: PropTypes.bool,
    onClickScrollBot: PropTypes.func,
    emojiContainer: PropTypes.shape({}),
    emojiAllMap: PropTypes.instanceOf(Map),
    membersMap: PropTypes.instanceOf(Map),
    useMessageGrouping: PropTypes.bool,
    toggleReaction: PropTypes.func,
    memoizedEmojiListItems: PropTypes.func
  };
  ConversationScroll.defaultProps = {
    hasMore: false,
    editDisabled: false,
    disabled: false,
    userId: '',
    renderCustomMessage: null,
    renderChatItem: null,
    highLightedMessageId: null,
    onScroll: null,
    onScrollDown: null,
    useReaction: true,
    emojiContainer: {},
    showScrollBot: false,
    onClickScrollBot: function onClickScrollBot() {},
    emojiAllMap: new Map(),
    membersMap: new Map(),
    useMessageGrouping: true,
    toggleReaction: function toggleReaction() {},
    memoizedEmojiListItems: function memoizedEmojiListItems() {
      return '';
    }
  };

  function Notification(_ref) {
    var count = _ref.count,
        time = _ref.time,
        onClick = _ref.onClick;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var timeArray = time.split(' ');
    timeArray.splice(-2, 0, stringSet.CHANNEL__MESSAGE_LIST__NOTIFICATION__ON);
    return (
      /*#__PURE__*/
      // eslint-disable-next-line
      React__default__default.createElement("div", {
        className: "sendbird-notification",
        onClick: onClick
      }, /*#__PURE__*/React__default__default.createElement(Label, {
        className: "sendbird-notification__text",
        color: LabelColors.ONCONTENT_1,
        type: LabelTypography.CAPTION_2
      }, "".concat(count, " "), stringSet.CHANNEL__MESSAGE_LIST__NOTIFICATION__NEW_MESSAGE, " ".concat(timeArray.join(' '))), /*#__PURE__*/React__default__default.createElement(Icon, {
        width: "24px",
        height: "24px",
        type: IconTypes.CHEVRON_DOWN,
        fillColor: IconColors.CONTENT
      }))
    );
  }
  Notification.propTypes = {
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    time: PropTypes.string,
    onClick: PropTypes.func.isRequired
  };
  Notification.defaultProps = {
    count: 0,
    time: ''
  };

  var FrozenNotification = function FrozenNotification() {
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-notification sendbird-notification--frozen"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-notification__text",
      type: LabelTypography.CAPTION_2
    }, stringSet.CHANNEL_FROZEN));
  };

  var TypingIndicatorText = function TypingIndicatorText(_ref) {
    var members = _ref.members;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    if (!members || members.length === 0) {
      return '';
    }

    if (members && members.length === 1) {
      return "".concat(members[0].nickname, " ").concat(stringSet.TYPING_INDICATOR__IS_TYPING);
    }

    if (members && members.length === 2) {
      return "".concat(members[0].nickname, " ").concat(stringSet.TYPING_INDICATOR__AND, " ").concat(members[1].nickname, " ").concat(stringSet.TYPING_INDICATOR__ARE_TYPING);
    }

    return stringSet.TYPING_INDICATOR__MULTIPLE_TYPING;
  };

  function TypingIndicator(_ref2) {
    var channelUrl = _ref2.channelUrl,
        sb = _ref2.sb,
        logger = _ref2.logger;

    var _useState = React__default.useState(uuidv4()),
        _useState2 = _slicedToArray(_useState, 2),
        handlerId = _useState2[0],
        setHandlerId = _useState2[1];

    var _useState3 = React__default.useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        typingMembers = _useState4[0],
        setTypingMembers = _useState4[1];

    React__default.useEffect(function () {
      if (sb && sb.ChannelHandler) {
        sb.removeChannelHandler(handlerId);
        var newHandlerId = uuidv4();
        var handler = new sb.ChannelHandler(); // there is a possible warning in here - setState called after unmount

        handler.onTypingStatusUpdated = function (groupChannel) {
          logger.info('Channel > Typing Indicator: onTypingStatusUpdated', groupChannel);
          var members = groupChannel.getTypingMembers();

          if (groupChannel.url === channelUrl) {
            setTypingMembers(members);
          }
        };

        sb.addChannelHandler(newHandlerId, handler);
        setHandlerId(newHandlerId);
      }

      return function () {
        setTypingMembers([]);

        if (sb && sb.removeChannelHandler) {
          sb.removeChannelHandler(handlerId);
        }
      };
    }, [channelUrl]);
    return /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, /*#__PURE__*/React__default__default.createElement(TypingIndicatorText, {
      members: typingMembers
    }));
  }

  TypingIndicator.propTypes = {
    channelUrl: PropTypes.string.isRequired,
    sb: PropTypes.shape({
      ChannelHandler: PropTypes.func,
      removeChannelHandler: PropTypes.func,
      addChannelHandler: PropTypes.func
    }).isRequired,
    logger: PropTypes.shape({
      info: PropTypes.func
    }).isRequired
  };

  // Logic required to handle message input rendering

  var MessageInputWrapper = function MessageInputWrapper(_a, ref) {
    var channel = _a.channel,
        user = _a.user,
        onSendMessage = _a.onSendMessage,
        onFileUpload = _a.onFileUpload,
        renderMessageInput = _a.renderMessageInput,
        isOnline = _a.isOnline,
        initialized = _a.initialized;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    var disabled = !initialized || isDisabledBecauseFrozen(channel) || isDisabledBecauseMuted(channel) || !isOnline;
    var isOperator$1 = isOperator(channel);
    var isBroadcast = channel.isBroadcast; // custom message

    if (renderMessageInput) {
      return renderMessageInput({
        channel: channel,
        user: user,
        disabled: disabled
      });
    } // broadcast channel + not operator


    if (isBroadcast && !isOperator$1) {
      return null;
    } // other conditions


    return /*#__PURE__*/React__default__default.createElement(MessageInput, {
      placeholder: isDisabledBecauseFrozen(channel) && stringSet.CHANNEL__MESSAGE_INPUT__PLACE_HOLDER__DISABLED || isDisabledBecauseMuted(channel) && stringSet.CHANNEL__MESSAGE_INPUT__PLACE_HOLDER__MUTED,
      ref: ref,
      disabled: disabled,
      onStartTyping: function onStartTyping() {
        channel.startTyping();
      },
      onSendMessage: onSendMessage,
      onFileUpload: onFileUpload
    });
  };

  var MessageInputWrapper$1 = /*#__PURE__*/React__default__default.forwardRef(MessageInputWrapper);

  function ConnectionStatus() {
    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-connection-status"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.BODY_2,
      color: LabelColors.ONBACKGROUND_2
    }, stringSet.TRYING_TO_CONNECT), /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.DISCONNECTED,
      fillColor: IconColors.SENT,
      width: "14px",
      height: "14px"
    }));
  }

  var getChannelTitle$1 = function getChannelTitle() {
    var channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var currentUserId = arguments.length > 1 ? arguments[1] : undefined;
    var stringSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LabelStringSet;

    if (!channel || !channel.name && !channel.members) {
      return stringSet.NO_TITLE;
    }

    if (channel.name && channel.name !== 'Group Channel') {
      return channel.name;
    }

    if (channel.members.length === 1) {
      return stringSet.NO_MEMBERS;
    }

    return channel.members.filter(function (_ref) {
      var userId = _ref.userId;
      return userId !== currentUserId;
    }).map(function (_ref2) {
      var nickname = _ref2.nickname;
      return nickname || stringSet.NO_NAME;
    }).join(', ');
  };

  var noop$1$1 = function noop() {};

  function ChatHeader(props) {
    var currentGroupChannel = props.currentGroupChannel,
        currentUser = props.currentUser,
        title = props.title,
        subTitle = props.subTitle,
        isMuted = props.isMuted,
        theme = props.theme,
        showSearchIcon = props.showSearchIcon,
        onSearchClick = props.onSearchClick,
        onActionClick = props.onActionClick;
    var userId = currentUser.userId;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-chat-header"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-chat-header__left"
    }, /*#__PURE__*/React__default__default.createElement(ChannelAvatar, {
      theme: theme,
      channel: currentGroupChannel,
      userId: userId,
      height: 32,
      width: 32
    }), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-chat-header__left__title",
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, title || getChannelTitle$1(currentGroupChannel, userId, stringSet)), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-chat-header__left__subtitle",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_2
    }, subTitle)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-chat-header__right"
    }, (typeof isMuted === 'string' && isMuted === 'true' || typeof isMuted === 'boolean' && isMuted) && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-chat-header__right__mute",
      type: IconTypes.NOTIFICATIONS_OFF_FILLED,
      width: "24px",
      height: "24px"
    }), showSearchIcon && /*#__PURE__*/React__default__default.createElement(IconButton, {
      className: "sendbird-chat-header__right__search",
      width: "32px",
      height: "32px",
      onClick: onSearchClick
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.SEARCH,
      fillColor: IconColors.PRIMARY,
      width: "24px",
      height: "24px"
    })), /*#__PURE__*/React__default__default.createElement(IconButton, {
      className: "sendbird-chat-header__right__info",
      width: "32px",
      height: "32px",
      onClick: onActionClick
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.INFO,
      fillColor: IconColors.PRIMARY,
      width: "24px",
      height: "24px"
    }))));
  }
  ChatHeader.propTypes = {
    currentGroupChannel: PropTypes.shape({
      members: PropTypes.arrayOf(PropTypes.shape({})),
      coverUrl: PropTypes.string
    }),
    currentUser: PropTypes.shape({
      userId: PropTypes.string
    }),
    title: PropTypes.string,
    subTitle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    isMuted: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    theme: PropTypes.string,
    showSearchIcon: PropTypes.bool,
    onSearchClick: PropTypes.func,
    onActionClick: PropTypes.func
  };
  ChatHeader.defaultProps = {
    currentGroupChannel: {},
    currentUser: {},
    title: '',
    subTitle: '',
    isMuted: false,
    theme: 'light',
    showSearchIcon: false,
    onSearchClick: noop$1$1,
    onActionClick: noop$1$1
  };

  var noop$6 = function noop() {};

  var ConversationPanel = function ConversationPanel(props) {
    var channelUrl = props.channelUrl,
        _props$stores = props.stores,
        sdkStore = _props$stores.sdkStore,
        userStore = _props$stores.userStore,
        _props$config = props.config,
        userId = _props$config.userId,
        logger = _props$config.logger,
        pubSub = _props$config.pubSub,
        isOnline = _props$config.isOnline,
        theme = _props$config.theme,
        imageCompression = _props$config.imageCompression,
        reconnect = props.dispatchers.reconnect,
        _props$queries = props.queries,
        queries = _props$queries === void 0 ? {} : _props$queries,
        startingPoint = props.startingPoint,
        highlightedMessage = props.highlightedMessage,
        useReaction = props.useReaction,
        showSearchIcon = props.showSearchIcon,
        onSearchClick = props.onSearchClick,
        renderChatItem = props.renderChatItem,
        renderChatHeader = props.renderChatHeader,
        renderCustomMessage = props.renderCustomMessage,
        renderUserProfile = props.renderUserProfile,
        disableUserProfile = props.disableUserProfile,
        renderMessageInput = props.renderMessageInput,
        useMessageGrouping = props.useMessageGrouping,
        onChatHeaderActionClick = props.onChatHeaderActionClick,
        onBeforeSendUserMessage = props.onBeforeSendUserMessage,
        onBeforeSendFileMessage = props.onBeforeSendFileMessage,
        onBeforeUpdateUserMessage = props.onBeforeUpdateUserMessage;
    var sdk = sdkStore.sdk;
    var config = props.config;
    var sdkError = sdkStore.error;
    var sdkInit = sdkStore.initialized;
    var user = userStore.user;

    if (queries.messageListQuery) {
      // eslint-disable-next-line no-console
      console.warn('messageListQuery has been deprecated, please use messageListParams instead');
    }

    var _useState = React__default.useState(startingPoint),
        _useState2 = _slicedToArray(_useState, 2),
        intialTimeStamp = _useState2[0],
        setIntialTimeStamp = _useState2[1];

    React__default.useEffect(function () {
      setIntialTimeStamp(startingPoint);
    }, [startingPoint, channelUrl]);

    var _useState3 = React__default.useState(highlightedMessage),
        _useState4 = _slicedToArray(_useState3, 2),
        highLightedMessageId = _useState4[0],
        setHighLightedMessageId = _useState4[1];

    React__default.useEffect(function () {
      setHighLightedMessageId(highlightedMessage);
    }, [highlightedMessage]);
    var userFilledMessageListQuery = queries.messageListParams;

    var _useReducer = React__default.useReducer(reducer$3, messagesInitialState),
        _useReducer2 = _slicedToArray(_useReducer, 2),
        messagesStore = _useReducer2[0],
        messagesDispatcher = _useReducer2[1];

    var scrollRef = React__default.useRef(null);
    var allMessages = messagesStore.allMessages,
        loading = messagesStore.loading,
        initialized = messagesStore.initialized,
        unreadCount = messagesStore.unreadCount,
        unreadSince = messagesStore.unreadSince,
        isInvalid = messagesStore.isInvalid,
        _messagesStore$curren = messagesStore.currentGroupChannel,
        currentGroupChannel = _messagesStore$curren === void 0 ? {} : _messagesStore$curren,
        hasMore = messagesStore.hasMore,
        lastMessageTimeStamp = messagesStore.lastMessageTimeStamp,
        hasMoreToBottom = messagesStore.hasMoreToBottom,
        latestFetchedMessageTimeStamp = messagesStore.latestFetchedMessageTimeStamp,
        emojiContainer = messagesStore.emojiContainer,
        readStatus = messagesStore.readStatus;
    var isFrozen = currentGroupChannel.isFrozen,
        isBroadcast = currentGroupChannel.isBroadcast,
        isSuper = currentGroupChannel.isSuper;
    var _sdk$appInfo = sdk.appInfo,
        appInfo = _sdk$appInfo === void 0 ? {} : _sdk$appInfo;
    var usingReaction = appInfo.isUsingReaction && !isBroadcast && !isSuper && useReaction;
    var userDefinedDisableUserProfile = disableUserProfile || config.disableUserProfile;
    var userDefinedRenderProfile = renderUserProfile || config.renderUserProfile;
    var showScrollBot = hasMoreToBottom;
    var emojiAllMap = React__default.useMemo(function () {
      return usingReaction ? getAllEmojisMapFromEmojiContainer(emojiContainer) : new Map();
    }, [emojiContainer]);
    var emojiAllList = React__default.useMemo(function () {
      return usingReaction ? getAllEmojisFromEmojiContainer$1(emojiContainer) : [];
    }, [emojiContainer]);
    var nicknamesMap = React__default.useMemo(function () {
      return usingReaction ? getNicknamesMapFromMembers(currentGroupChannel.members) : new Map();
    }, [currentGroupChannel.members]); // Scrollup is default scroll for channel

    var onScrollCallback = useScrollCallback({
      currentGroupChannel: currentGroupChannel,
      lastMessageTimeStamp: lastMessageTimeStamp,
      userFilledMessageListQuery: userFilledMessageListQuery
    }, {
      hasMore: hasMore,
      logger: logger,
      messagesDispatcher: messagesDispatcher,
      sdk: sdk
    }); // onScrollDownCallback is added for navigation to different timestamps on messageSearch
    // hasMoreToBottom, onScrollDownCallback -> scroll down
    // hasMore, onScrollCallback -> scroll up(default behavior)

    var onScrollDownCallback = useScrollDownCallback({
      currentGroupChannel: currentGroupChannel,
      latestFetchedMessageTimeStamp: latestFetchedMessageTimeStamp,
      userFilledMessageListQuery: userFilledMessageListQuery,
      hasMoreToBottom: hasMoreToBottom
    }, {
      logger: logger,
      messagesDispatcher: messagesDispatcher,
      sdk: sdk
    });
    var toggleReaction = useToggleReactionCallback({
      currentGroupChannel: currentGroupChannel
    }, {
      logger: logger
    });
    var memoizedEmojiListItems = useMemoizedEmojiListItems({
      emojiContainer: emojiContainer,
      toggleReaction: toggleReaction
    }, {
      useReaction: usingReaction,
      logger: logger,
      userId: userId,
      emojiAllList: emojiAllList
    }); // to create message-datasource
    // this hook sets currentGroupChannel asynchronously

    useSetChannel({
      channelUrl: channelUrl,
      sdkInit: sdkInit
    }, {
      messagesDispatcher: messagesDispatcher,
      sdk: sdk,
      logger: logger
    }); // Hook to handle ChannelEvents and send values to useReducer using messagesDispatcher

    useHandleChannelEvents({
      currentGroupChannel: currentGroupChannel,
      sdkInit: sdkInit,
      hasMoreToBottom: hasMoreToBottom
    }, {
      messagesDispatcher: messagesDispatcher,
      sdk: sdk,
      logger: logger,
      scrollRef: scrollRef
    }); // hook that fetches messages when channel changes
    // to be clear here useGetChannel sets currentGroupChannel
    // and useInitialMessagesFetch executes when currentGroupChannel changes
    // p.s This one executes on intialTimeStamp change too

    useInitialMessagesFetch({
      currentGroupChannel: currentGroupChannel,
      userFilledMessageListQuery: userFilledMessageListQuery,
      intialTimeStamp: intialTimeStamp
    }, {
      sdk: sdk,
      logger: logger,
      messagesDispatcher: messagesDispatcher
    }); // handles API calls from withSendbird

    React__default.useEffect(function () {
      var subScriber = pubSubHandler$1(channelUrl, pubSub, messagesDispatcher);
      return function () {
        pubSubHandleRemover$1(subScriber);
      };
    }, [channelUrl, sdkInit]); // to create initial read status

    useSetReadStatus({
      allMessages: allMessages,
      currentGroupChannel: currentGroupChannel
    }, {
      messagesDispatcher: messagesDispatcher,
      sdk: sdk,
      logger: logger
    }); // handling connection breaks

    useHandleReconnect({
      isOnline: isOnline
    }, {
      logger: logger,
      sdk: sdk,
      currentGroupChannel: currentGroupChannel,
      messagesDispatcher: messagesDispatcher,
      userFilledMessageListQuery: userFilledMessageListQuery
    }); // callbacks for Message CURD actions

    var deleteMessage = useDeleteMessageCallback({
      currentGroupChannel: currentGroupChannel,
      messagesDispatcher: messagesDispatcher
    }, {
      logger: logger
    });
    var updateMessage = useUpdateMessageCallback({
      currentGroupChannel: currentGroupChannel,
      messagesDispatcher: messagesDispatcher,
      onBeforeUpdateUserMessage: onBeforeUpdateUserMessage
    }, {
      logger: logger,
      sdk: sdk,
      pubSub: pubSub
    });
    var resendMessage = useResendMessageCallback({
      currentGroupChannel: currentGroupChannel,
      messagesDispatcher: messagesDispatcher
    }, {
      logger: logger
    });

    var _useSendMessageCallba = useSendMessageCallback({
      currentGroupChannel: currentGroupChannel,
      onBeforeSendUserMessage: onBeforeSendUserMessage
    }, {
      sdk: sdk,
      logger: logger,
      pubSub: pubSub,
      messagesDispatcher: messagesDispatcher
    }),
        _useSendMessageCallba2 = _slicedToArray(_useSendMessageCallba, 2),
        messageInputRef = _useSendMessageCallba2[0],
        onSendMessage = _useSendMessageCallba2[1];

    var _useSendFileMessageCa = useSendFileMessageCallback({
      currentGroupChannel: currentGroupChannel,
      onBeforeSendFileMessage: onBeforeSendFileMessage,
      imageCompression: imageCompression
    }, {
      sdk: sdk,
      logger: logger,
      pubSub: pubSub,
      messagesDispatcher: messagesDispatcher
    }),
        _useSendFileMessageCa2 = _slicedToArray(_useSendFileMessageCa, 1),
        onSendFileMessage = _useSendFileMessageCa2[0];

    if (!channelUrl) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-conversation"
      }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes.NO_CHANNELS
      }));
    }

    if (isInvalid) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-conversation"
      }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes.WRONG
      }));
    }

    if (sdkError) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-conversation"
      }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes.WRONG,
        retryToConnect: function retryToConnect() {
          logger.info('Channel: reconnecting');
          reconnect();
        }
      }));
    }

    return /*#__PURE__*/React__default__default.createElement(UserProfileProvider, {
      className: "sendbird-conversation",
      disableUserProfile: userDefinedDisableUserProfile,
      renderUserProfile: userDefinedRenderProfile
    }, renderChatHeader ? renderChatHeader({
      channel: currentGroupChannel,
      user: user
    }) : /*#__PURE__*/React__default__default.createElement(ChatHeader, {
      theme: theme,
      currentGroupChannel: currentGroupChannel,
      currentUser: user,
      showSearchIcon: showSearchIcon,
      onSearchClick: onSearchClick,
      onActionClick: onChatHeaderActionClick,
      subTitle: currentGroupChannel.members && currentGroupChannel.members.length !== 2,
      isMuted: false
    }), isFrozen && /*#__PURE__*/React__default__default.createElement(FrozenNotification, null), unreadCount > 0 && /*#__PURE__*/React__default__default.createElement(Notification, {
      count: unreadCount,
      onClick: function onClick() {
        if (intialTimeStamp) {
          setIntialTimeStamp(null);
          setHighLightedMessageId(null);
        } else {
          scrollIntoLast(); // there is no scroll

          if (scrollRef.current.scrollTop === 0) {
            currentGroupChannel.markAsRead();
            messagesDispatcher({
              type: MARK_AS_READ
            });
          }
        }
      },
      time: unreadSince
    }), loading ? /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-conversation"
    }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.LOADING
    })) : /*#__PURE__*/React__default__default.createElement(ConversationScroll, {
      swapParams: sdk && sdk.getErrorFirstCallback && sdk.getErrorFirstCallback(),
      highLightedMessageId: highLightedMessageId,
      userId: userId,
      hasMore: hasMore,
      disabled: !isOnline,
      onScroll: onScrollCallback,
      onScrollDown: onScrollDownCallback,
      scrollRef: scrollRef,
      readStatus: readStatus,
      useReaction: usingReaction,
      allMessages: allMessages,
      emojiAllMap: emojiAllMap,
      membersMap: nicknamesMap,
      editDisabled: isDisabledBecauseFrozen(currentGroupChannel),
      deleteMessage: deleteMessage,
      updateMessage: updateMessage,
      resendMessage: resendMessage,
      toggleReaction: toggleReaction,
      emojiContainer: emojiContainer,
      renderChatItem: renderChatItem,
      showScrollBot: showScrollBot,
      onClickScrollBot: function onClickScrollBot() {
        setIntialTimeStamp(null);
        setHighLightedMessageId(null);
      },
      renderCustomMessage: renderCustomMessage,
      useMessageGrouping: useMessageGrouping,
      messagesDispatcher: messagesDispatcher,
      currentGroupChannel: currentGroupChannel,
      memoizedEmojiListItems: memoizedEmojiListItems
    }), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-conversation__footer"
    }, /*#__PURE__*/React__default__default.createElement(MessageInputWrapper$1, {
      channel: currentGroupChannel,
      user: user,
      ref: messageInputRef,
      onSendMessage: onSendMessage,
      onFileUpload: onSendFileMessage,
      renderMessageInput: renderMessageInput,
      isOnline: isOnline,
      initialized: initialized
    }), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-conversation__typing-indicator"
    }, /*#__PURE__*/React__default__default.createElement(TypingIndicator, {
      channelUrl: channelUrl,
      sb: sdk,
      logger: logger
    })), !isOnline && /*#__PURE__*/React__default__default.createElement(ConnectionStatus, {
      sdkInit: sdkInit,
      sb: sdk,
      logger: logger
    })));
  };
  ConversationPanel.propTypes = {
    channelUrl: PropTypes.string,
    stores: PropTypes.shape({
      sdkStore: PropTypes.shape({
        initialized: PropTypes.bool,
        sdk: PropTypes.shape({
          getErrorFirstCallback: PropTypes.func,
          removeChannelHandler: PropTypes.func,
          GroupChannel: PropTypes.any,
          ChannelHandler: PropTypes.any,
          addChannelHandler: PropTypes.func,
          UserMessageParams: PropTypes.any,
          FileMessageParams: PropTypes.any,
          getAllEmoji: PropTypes.func,
          appInfo: PropTypes.shape({})
        }),
        error: PropTypes.bool
      }),
      userStore: PropTypes.shape({
        user: PropTypes.shape({})
      })
    }).isRequired,
    dispatchers: PropTypes.shape({
      reconnect: PropTypes.func
    }).isRequired,
    config: PropTypes.shape({
      disableUserProfile: PropTypes.bool,
      renderUserProfile: PropTypes.func,
      userId: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      theme: PropTypes.string,
      logger: PropTypes.shape({
        info: PropTypes.func,
        error: PropTypes.func,
        warning: PropTypes.func
      }),
      pubSub: PropTypes.shape({
        subscribe: PropTypes.func,
        publish: PropTypes.func
      }),
      imageCompression: PropTypes.shape({
        compressionRate: PropTypes.number,
        resizingWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        resizingHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
    }).isRequired,
    queries: PropTypes.shape({
      messageListParams: PropTypes.shape({
        includeMetaArray: PropTypes.bool,
        includeParentMessageText: PropTypes.bool,
        includeReaction: PropTypes.bool,
        includeReplies: PropTypes.bool,
        includeThreadInfo: PropTypes.bool,
        limit: PropTypes.number,
        reverse: PropTypes.bool,
        senderUserIdsFilter: PropTypes.arrayOf(PropTypes.string)
      })
    }),
    startingPoint: PropTypes.number,
    highlightedMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onBeforeSendUserMessage: PropTypes.func,
    // onBeforeSendUserMessage(text)
    onBeforeSendFileMessage: PropTypes.func,
    // onBeforeSendFileMessage(File)
    onBeforeUpdateUserMessage: PropTypes.func,
    renderChatItem: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    renderCustomMessage: PropTypes.func,
    renderMessageInput: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    renderChatHeader: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    showSearchIcon: PropTypes.bool,
    onSearchClick: PropTypes.func,
    onChatHeaderActionClick: PropTypes.func,
    useReaction: PropTypes.bool,
    disableUserProfile: PropTypes.bool,
    renderUserProfile: PropTypes.func,
    useMessageGrouping: PropTypes.bool
  };
  ConversationPanel.defaultProps = {
    channelUrl: null,
    queries: {},
    onBeforeSendUserMessage: null,
    onBeforeSendFileMessage: null,
    onBeforeUpdateUserMessage: null,
    startingPoint: null,
    highlightedMessage: null,
    renderChatItem: null,
    renderCustomMessage: null,
    renderMessageInput: null,
    renderChatHeader: null,
    useReaction: true,
    showSearchIcon: false,
    onSearchClick: noop$6,
    disableUserProfile: false,
    renderUserProfile: null,
    useMessageGrouping: true,
    onChatHeaderActionClick: noop$6
  };
  var getEmojiCategoriesFromEmojiContainer = getEmojiCategoriesFromEmojiContainer$1,
      getAllEmojisFromEmojiContainer = getAllEmojisFromEmojiContainer$1,
      getEmojisFromEmojiContainer = getEmojisFromEmojiContainer$1;
  var Conversation = withSendbirdContext(ConversationPanel);

  var Context = /*#__PURE__*/React__default__default.createContext({
    opened: '',
    setOpened: noop
  });
  var Consumer = Context.Consumer;
  var Provider = Context.Provider;

  // Wraps all the accordions in an accordion set
  function AccordionGroup$1(_a) {
    var children = _a.children,
        _b = _a.className,
        className = _b === void 0 ? '' : _b;

    var _c = React__default.useState(''),
        opened = _c[0],
        setOpened = _c[1];

    return /*#__PURE__*/React__default__default.createElement(Provider, {
      value: {
        opened: opened,
        setOpened: setOpened
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: className
    }, children));
  }

  function Accordion(_a) {
    var className = _a.className,
        id = _a.id,
        renderTitle = _a.renderTitle,
        renderContent = _a.renderContent,
        renderFooter = _a.renderFooter;

    var _b = React__default.useState(false),
        showAccordion = _b[0],
        setShowAccordion = _b[1];

    return /*#__PURE__*/React__default__default.createElement(Consumer, null, // Function is considered like a react component
    function (value) {
      var opened = value.opened,
          setOpened = value.setOpened; // props from Provider

      if (id === opened) {
        setShowAccordion(true);
      } else {
        setShowAccordion(false);
      }

      var handleClick = function handleClick() {
        if (showAccordion) {
          setOpened('');
        } else {
          setOpened(id);
        }
      };

      return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement("div", {
        className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className]), ['sendbird-accordion__panel-header']).join(' '),
        id: id,
        role: "switch",
        "aria-checked": false,
        onClick: handleClick,
        onKeyDown: handleClick,
        tabIndex: 0
      }, renderTitle(), /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.CHEVRON_RIGHT,
        className: ['sendbird-accordion__panel-icon-right', 'sendbird-accordion__panel-icon--chevron', showAccordion ? 'sendbird-accordion__panel-icon--open' : ''].join(' '),
        height: "24px",
        width: "24px"
      })), showAccordion && /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-accordion"
      }, /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-accordion__list"
      }, renderContent()), renderFooter && /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-accordion__footer"
      }, renderFooter())));
    });
  }
  var AccordionGroup = AccordionGroup$1;

  var EditDetails = function EditDetails(props) {
    var _onSubmit = props.onSubmit,
        onCancel = props.onCancel,
        channel = props.channel,
        userId = props.userId,
        theme = props.theme;
    var inputRef = React__default.useRef(null);
    var formRef = React__default.useRef(null);
    var hiddenInputRef = React__default.useRef(null);

    var _useState = React__default.useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        currentImg = _useState2[0],
        setCurrentImg = _useState2[1];

    var _useState3 = React__default.useState(null),
        _useState4 = _slicedToArray(_useState3, 2),
        newFile = _useState4[0],
        setNewFile = _useState4[1];

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var title = channel.name;
    return /*#__PURE__*/React__default__default.createElement(Modal, {
      titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE,
      submitText: stringSet.BUTTON__SAVE,
      onCancel: onCancel,
      onSubmit: function onSubmit() {
        if (title !== '' && !inputRef.current.value) {
          if (formRef.current.reportValidity) {
            // might not work in explorer
            formRef.current.reportValidity();
          }

          return;
        }

        _onSubmit(newFile, inputRef.current.value);

        onCancel();
      },
      type: Type$1.PRIMARY
    }, /*#__PURE__*/React__default__default.createElement("form", {
      className: "channel-profile-form",
      ref: formRef,
      onSubmit: function onSubmit(e) {
        e.preventDefault();
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "channel-profile-form__img-section"
    }, /*#__PURE__*/React__default__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE), /*#__PURE__*/React__default__default.createElement("div", {
      className: "channel-profile-form__avatar"
    }, currentImg ? /*#__PURE__*/React__default__default.createElement(Avatar$1, {
      height: "80px",
      width: "80px",
      src: currentImg
    }) : /*#__PURE__*/React__default__default.createElement(ChannelAvatar, {
      height: 80,
      width: 80,
      channel: channel,
      userId: userId,
      theme: theme
    })), /*#__PURE__*/React__default__default.createElement("input", {
      ref: hiddenInputRef,
      type: "file",
      accept: "image/gif, image/jpeg, image/png",
      style: {
        display: 'none'
      },
      onChange: function onChange(e) {
        setCurrentImg(URL.createObjectURL(e.target.files[0]));
        setNewFile(e.target.files[0]);
        hiddenInputRef.current.value = '';
      }
    }), /*#__PURE__*/React__default__default.createElement(TextButton, {
      className: "channel-profile-form__avatar-button",
      onClick: function onClick() {
        return hiddenInputRef.current.click();
      },
      notUnderline: true
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.BUTTON_1,
      color: LabelColors.PRIMARY
    }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "channel-profile-form__name-section"
    }, /*#__PURE__*/React__default__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME), /*#__PURE__*/React__default__default.createElement(Input, {
      required: title !== '',
      name: "channel-profile-form__name",
      ref: inputRef,
      value: title,
      placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER
    }))));
  };

  EditDetails.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    channel: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    userId: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
  };

  var ChannelProfile = function ChannelProfile(props) {
    var disabled = props.disabled,
        channel = props.channel,
        userId = props.userId,
        theme = props.theme,
        onChannelInfoChange = props.onChannelInfoChange;

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showModal = _useState2[0],
        setShowModal = _useState2[1];

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var getChannelName = function getChannelName() {
      if (channel && channel.name && channel.name !== 'Group Channel') {
        return channel.name;
      }

      if (channel && (channel.name === 'Group Channel' || !channel.name)) {
        return channel.members.map(function (member) {
          return member.nickname || stringSet.NO_NAME;
        }).join(', ');
      }

      return stringSet.NO_TITLE;
    };

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-profile"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-profile--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-profile__avatar"
    }, /*#__PURE__*/React__default__default.createElement(ChannelAvatar, {
      channel: channel,
      userId: userId,
      theme: theme,
      width: 80,
      height: 80
    })), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-channel-profile__title",
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_1
    }, getChannelName()), /*#__PURE__*/React__default__default.createElement(TextButton, {
      disabled: disabled,
      className: "sendbird-channel-profile__edit",
      onClick: function onClick() {
        if (disabled) {
          return;
        }

        setShowModal(true);
      },
      notUnderline: true
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.BUTTON_1,
      color: disabled ? LabelColors.ONBACKGROUND_2 : LabelColors.PRIMARY
    }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)), showModal && /*#__PURE__*/React__default__default.createElement(EditDetails, {
      onCancel: function onCancel() {
        return setShowModal(false);
      },
      onSubmit: onChannelInfoChange,
      channel: channel,
      userId: userId,
      theme: theme
    })));
  };

  ChannelProfile.propTypes = {
    channel: PropTypes.shape({
      name: PropTypes.string,
      members: PropTypes.arrayOf(PropTypes.shape({
        nickname: PropTypes.string
      }))
    }).isRequired,
    userId: PropTypes.string.isRequired,
    theme: PropTypes.string,
    disabled: PropTypes.bool,
    onChannelInfoChange: PropTypes.func
  };
  ChannelProfile.defaultProps = {
    theme: 'light',
    disabled: false,
    onChannelInfoChange: function onChannelInfoChange() {}
  };

  function MembersModal(_a) {
    var hideModal = _a.hideModal,
        channel = _a.channel,
        currentUser = _a.currentUser;

    var _b = React__default.useState([]),
        members = _b[0],
        setMembers = _b[1];

    var _c = React__default.useState(null),
        memberQuery = _c[0],
        setMemberQuery = _c[1];

    React__default.useEffect(function () {
      var memberListQuery = channel.createMemberListQuery();
      memberListQuery.limit = 20;
      memberListQuery.next(function (members, error) {
        if (error) {
          return;
        }

        setMembers(members);
      });
      setMemberQuery(memberListQuery);
    }, []);
    return /*#__PURE__*/React__default__default.createElement("div", null, /*#__PURE__*/React__default__default.createElement(Modal, {
      hideFooter: true,
      onCancel: function onCancel() {
        return hideModal();
      },
      onSubmit: noop,
      titleText: "All Members"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-more-members__popup-scroll",
      onScroll: function onScroll(e) {
        var hasNext = memberQuery.hasNext;
        var target = e.target;
        var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

        if (hasNext && fetchMore) {
          memberQuery.next(function (o, error) {
            if (error) {
              return;
            }

            setMembers(__spreadArray(__spreadArray([], members), o));
          });
        }
      }
    }, members.map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem, {
        user: member,
        key: member.userId,
        currentUser: currentUser,
        action: function action(_a) {
          var parentRef = _a.parentRef,
              actionRef = _a.actionRef;
          return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, channel.myRole === 'operator' && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
            menuTrigger: function menuTrigger(toggleDropdown) {
              return /*#__PURE__*/React__default__default.createElement(IconButton, {
                className: "sendbird-user-message__more__menu",
                width: "32px",
                height: "32px",
                onClick: toggleDropdown
              }, /*#__PURE__*/React__default__default.createElement(Icon, {
                width: "24px",
                height: "24px",
                type: IconTypes.MORE,
                fillColor: IconColors.CONTENT_INVERSE
              }));
            },
            menuItems: function menuItems(closeDropdown) {
              return /*#__PURE__*/React__default__default.createElement(MenuItems, {
                parentContainRef: parentRef,
                parentRef: actionRef // for catching location(x, y) of MenuItems
                ,
                closeDropdown: closeDropdown,
                openLeft: true
              }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  if (member.role !== 'operator') {
                    channel.addOperators([member.userId], function () {
                      setMembers(members.map(function (m) {
                        if (m.userId === member.userId) {
                          return __assign(__assign({}, member), {
                            role: 'operator'
                          });
                        }

                        return m;
                      }));
                      closeDropdown();
                    });
                  } else {
                    channel.removeOperators([member.userId], function () {
                      setMembers(members.map(function (m) {
                        if (m.userId === member.userId) {
                          return __assign(__assign({}, member), {
                            role: ''
                          });
                        }

                        return m;
                      }));
                      closeDropdown();
                    });
                  }
                }
              }, member.role !== 'operator' ? 'Promote to operator' : 'Demote operator'), // No muted members in broadcast channel
              !channel.isBroadcast && /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  if (member.isMuted) {
                    channel.unmuteUser(member, function () {
                      setMembers(members.map(function (m) {
                        if (m.userId === member.userId) {
                          return __assign(__assign({}, member), {
                            isMuted: false
                          });
                        }

                        return m;
                      }));
                      closeDropdown();
                    });
                  } else {
                    channel.muteUser(member, function () {
                      setMembers(members.map(function (m) {
                        if (m.userId === member.userId) {
                          return __assign(__assign({}, member), {
                            isMuted: true
                          });
                        }

                        return m;
                      }));
                      closeDropdown();
                    });
                  }
                }
              }, member.isMuted ? 'Unmute' : 'Mute'), /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  channel.banUser(member, -1, '', function () {
                    setMembers(members.filter(function (_a) {
                      var userId = _a.userId;
                      return userId !== member.userId;
                    }));
                  });
                }
              }, "Ban"));
            }
          }));
        }
      });
    }))));
  }

  var SHOWN_MEMBER_MAX = 10;

  var UserListItem$1 = function UserListItem(_ref) {
    var _ref$member = _ref.member,
        member = _ref$member === void 0 ? {} : _ref$member,
        _ref$currentUser = _ref.currentUser,
        currentUser = _ref$currentUser === void 0 ? '' : _ref$currentUser;
    var avatarRef = React__default.useRef(null);

    var _useContext = React__default.useContext(UserProfileContext),
        disableUserProfile = _useContext.disableUserProfile,
        renderUserProfile = _useContext.renderUserProfile;

    var _useContext2 = React__default.useContext(LocalizationContext),
        stringSet = _useContext2.stringSet;

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-members-accordion__member"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-members-accordion__member-avatar"
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          },
          ref: avatarRef,
          src: member.profileUrl,
          width: 24,
          height: 24
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          openLeft: true,
          parentRef: avatarRef // for catching location(x, y) of MenuItems
          ,
          parentContainRef: avatarRef // for toggling more options(menus & reactions)
          ,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: member,
          currentUserId: currentUser,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: member,
          currentUserId: currentUser,
          onSuccess: closeDropdown
        }));
      }
    })), /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_1
    }, member.nickname || stringSet.NO_NAME, currentUser === member.userId && stringSet.YOU));
  };

  UserListItem$1.propTypes = {
    member: PropTypes.shape({
      userId: PropTypes.string,
      profileUrl: PropTypes.string,
      nickname: PropTypes.string
    }).isRequired,
    currentUser: PropTypes.string.isRequired
  };

  var MembersAccordion = function MembersAccordion(_ref2) {
    var channel = _ref2.channel,
        disabled = _ref2.disabled,
        currentUser = _ref2.currentUser,
        userQueryCreator = _ref2.userQueryCreator,
        onInviteMembers = _ref2.onInviteMembers,
        swapParams = _ref2.swapParams;
    var members = channel.members || [];

    var _useState = React__default.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showMoreModal = _useState2[0],
        setShowMoreModal = _useState2[1];

    var _useState3 = React__default.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        showAddUserModal = _useState4[0],
        setShowAddUserModal = _useState4[1];

    var _useContext3 = React__default.useContext(LocalizationContext),
        stringSet = _useContext3.stringSet;

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-members-accordion"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-members-accordion__list"
    }, members.slice(0, SHOWN_MEMBER_MAX).map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem$1, {
        member: member,
        currentUser: currentUser,
        key: member.userId
      });
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-members-accordion__footer"
    }, members.length >= SHOWN_MEMBER_MAX && /*#__PURE__*/React__default__default.createElement(Button, {
      className: "sendbird-members-accordion__footer__all-members",
      type: ButtonTypes.SECONDARY,
      size: ButtonSizes.SMALL,
      onClick: function onClick() {
        return setShowMoreModal(true);
      }
    }, stringSet.CHANNEL_SETTING__MEMBERS__SEE_ALL_MEMBERS), members.length >= SHOWN_MEMBER_MAX && showMoreModal && /*#__PURE__*/React__default__default.createElement(MembersModal, {
      currentUser: currentUser,
      hideModal: function hideModal() {
        setShowMoreModal(false);
      },
      channel: channel
    }), /*#__PURE__*/React__default__default.createElement(Button, {
      className: "sendbird-members-accordion__footer__invite-users",
      type: ButtonTypes.SECONDARY,
      size: ButtonSizes.SMALL,
      disabled: disabled,
      onClick: function onClick() {
        if (disabled) {
          return;
        }

        setShowAddUserModal(true);
      }
    }, stringSet.CHANNEL_SETTING__MEMBERS__INVITE_MEMBER), showAddUserModal && /*#__PURE__*/React__default__default.createElement(InviteMembers, {
      swapParams: swapParams,
      titleText: stringSet.MODAL__INVITE_MEMBER__TITLE,
      submitText: stringSet.BUTTON__INVITE,
      closeModal: function closeModal() {
        return setShowAddUserModal(false);
      },
      idsToFilter: members.map(function (member) {
        return member.userId;
      }),
      userQueryCreator: userQueryCreator,
      onSubmit: onInviteMembers
    })));
  };

  MembersAccordion.propTypes = {
    swapParams: PropTypes.bool,
    disabled: PropTypes.bool,
    channel: PropTypes.shape({
      members: PropTypes.arrayOf(PropTypes.shape({}))
    }),
    currentUser: PropTypes.string,
    userQueryCreator: PropTypes.func.isRequired,
    onInviteMembers: PropTypes.func.isRequired
  };
  MembersAccordion.defaultProps = {
    swapParams: false,
    currentUser: '',
    disabled: false,
    channel: {}
  };

  // might move to reusable/UI
  var COMPONENT_NAME = 'sendbird-user-list-item--small';

  var UserListItem$2 = function UserListItem(_a) {
    var user = _a.user,
        className = _a.className,
        currentUser = _a.currentUser,
        action = _a.action;
    var actionRef = React__default.useRef(null);
    var parentRef = React__default.useRef(null);
    var avatarRef = React__default.useRef(null);
    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var _b = React__default.useContext(UserProfileContext),
        disableUserProfile = _b.disableUserProfile,
        renderUserProfile = _b.renderUserProfile;

    var injectingClassNames = Array.isArray(className) ? className : [className];
    return /*#__PURE__*/React__default__default.createElement("div", {
      ref: parentRef,
      className: __spreadArray([COMPONENT_NAME], injectingClassNames).join(' ')
    }, user.isMuted && /*#__PURE__*/React__default__default.createElement(MutedAvatarOverlay, null), /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          },
          ref: avatarRef,
          className: COMPONENT_NAME + "__avatar",
          src: user.profileUrl,
          width: 24,
          height: 24
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          openLeft: true,
          parentRef: avatarRef // for catching location(x, y) of MenuItems
          ,
          parentContainRef: avatarRef // for toggling more options(menus & reactions)
          ,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: user,
          currentUserId: currentUser,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: user,
          currentUserId: currentUser,
          onSuccess: closeDropdown
        }));
      }
    }), /*#__PURE__*/React__default__default.createElement(Label, {
      className: COMPONENT_NAME + "__title",
      type: LabelTypography.SUBTITLE_1,
      color: LabelColors.ONBACKGROUND_1
    }, user.nickname || stringSet.NO_NAME, currentUser === user.userId && " (You)"), // if there is now nickname, display userId
    !user.nickname && /*#__PURE__*/React__default__default.createElement(Label, {
      className: COMPONENT_NAME + "__subtitle",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, user.userId), user.role === 'operator' && /*#__PURE__*/React__default__default.createElement(Label, {
      className: COMPONENT_NAME + "__operator",
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_2
    }, "Operator"), action && /*#__PURE__*/React__default__default.createElement("div", {
      ref: actionRef,
      className: COMPONENT_NAME + "__action"
    }, action({
      actionRef: actionRef,
      parentRef: parentRef
    })));
  };

  function OperatorsModal(_a) {
    var hideModal = _a.hideModal,
        channel = _a.channel,
        currentUser = _a.currentUser;

    var _b = React__default.useState([]),
        operators = _b[0],
        setOperators = _b[1];

    var _c = React__default.useState(null),
        operatorQuery = _c[0],
        setOperatorQuery = _c[1];

    React__default.useEffect(function () {
      var operatorListQuery = channel.createOperatorListQuery();
      operatorListQuery.limit = 20;
      operatorListQuery.next(function (operators, error) {
        if (error) {
          return;
        }

        setOperators(operators);
      });
      setOperatorQuery(operatorListQuery);
    }, []);
    return /*#__PURE__*/React__default__default.createElement("div", null, /*#__PURE__*/React__default__default.createElement(Modal, {
      hideFooter: true,
      onCancel: function onCancel() {
        return hideModal();
      },
      onSubmit: noop,
      titleText: "All operators"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-more-members__popup-scroll",
      onScroll: function onScroll(e) {
        var hasNext = operatorQuery.hasNext;
        var target = e.target;
        var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

        if (hasNext && fetchMore) {
          operatorQuery.next(function (o, error) {
            if (error) {
              return;
            }

            setOperators(__spreadArray(__spreadArray([], operators), o));
          });
        }
      }
    }, operators.map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem, {
        currentUser: currentUser,
        user: member,
        key: member.userId,
        action: function action(_a) {
          var parentRef = _a.parentRef,
              actionRef = _a.actionRef;
          return /*#__PURE__*/React__default__default.createElement(ContextMenu, {
            menuTrigger: function menuTrigger(toggleDropdown) {
              return /*#__PURE__*/React__default__default.createElement(IconButton, {
                className: "sendbird-user-message__more__menu",
                width: "32px",
                height: "32px",
                onClick: toggleDropdown
              }, /*#__PURE__*/React__default__default.createElement(Icon, {
                width: "24px",
                height: "24px",
                type: IconTypes.MORE,
                fillColor: IconColors.CONTENT_INVERSE
              }));
            },
            menuItems: function menuItems(closeDropdown) {
              return /*#__PURE__*/React__default__default.createElement(MenuItems, {
                parentContainRef: parentRef,
                parentRef: actionRef // for catching location(x, y) of MenuItems
                ,
                closeDropdown: closeDropdown,
                openLeft: true
              }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  channel.removeOperators([member.userId], function (response, error) {
                    if (error) {
                      return;
                    }

                    setOperators(operators.filter(function (_a) {
                      var userId = _a.userId;
                      return userId !== member.userId;
                    }));
                  });
                  closeDropdown();
                }
              }, stringSet.CHANNEL_SETTING__OPERATORS__DEMOTE));
            }
          });
        }
      });
    }))));
  }

  function AddOperatorsModal(_a) {
    var hideModal = _a.hideModal,
        channel = _a.channel,
        _onSubmit = _a.onSubmit;

    var _b = React__default.useState([]),
        members = _b[0],
        setMembers = _b[1];

    var _c = React__default.useState({}),
        selectedMembers = _c[0],
        setSelectedMembers = _c[1];

    var _d = React__default.useState(null),
        memberQuery = _d[0],
        setMemberQuery = _d[1];

    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    React__default.useEffect(function () {
      var memberListQuery = channel.createMemberListQuery();
      memberListQuery.limit = 20;
      memberListQuery.next(function (members, error) {
        if (error) {
          return;
        }

        setMembers(members);
      });
      setMemberQuery(memberListQuery);
    }, []);
    var selectedCount = Object.keys(selectedMembers).filter(function (m) {
      return selectedMembers[m];
    }).length;
    return /*#__PURE__*/React__default__default.createElement("div", null, /*#__PURE__*/React__default__default.createElement(Modal, {
      type: Type$1.PRIMARY,
      submitText: "Add",
      onCancel: function onCancel() {
        return hideModal();
      },
      onSubmit: function onSubmit() {
        var members = Object.keys(selectedMembers).filter(function (m) {
          return selectedMembers[m];
        });

        _onSubmit(members);
      },
      titleText: "Select members"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      color: selectedCount > 0 ? LabelColors.PRIMARY : LabelColors.ONBACKGROUND_3,
      type: LabelTypography.CAPTION_1
    }, selectedCount + " " + stringSet.MODAL__INVITE_MEMBER__SELECTEC), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-more-members__popup-scroll",
      onScroll: function onScroll(e) {
        var hasNext = memberQuery.hasNext;
        var target = e.target;
        var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

        if (hasNext && fetchMore) {
          memberQuery.next(function (o, error) {
            if (error) {
              return;
            }

            setMembers(__spreadArray(__spreadArray([], members), o));
          });
        }
      }
    }, members.map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem, {
        checkBox: true,
        checked: selectedMembers[member.userId],
        onChange: function onChange(event) {
          var _a;

          var modifiedSelectedMembers = __assign(__assign({}, selectedMembers), (_a = {}, _a[event.target.id] = event.target.checked, _a));

          if (!event.target.checked) {
            delete modifiedSelectedMembers[event.target.id];
          }

          setSelectedMembers(modifiedSelectedMembers);
        },
        user: member,
        key: member.userId
      });
    }))));
  }

  var OperatorList = function OperatorList(_a) {
    var sdk = _a.sdk,
        channel = _a.channel;

    var _b = React__default.useState([]),
        operators = _b[0],
        setOperators = _b[1];

    var _c = React__default.useState(false),
        showMore = _c[0],
        setShowMore = _c[1];

    var _d = React__default.useState(false),
        showAdd = _d[0],
        setShowAdd = _d[1];

    var _e = React__default.useState(false),
        hasNext = _e[0],
        setHasNext = _e[1];

    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    React__default.useEffect(function () {
      if (!channel) {
        setOperators([]);
        return;
      }

      var operatorListQuery = channel.createOperatorListQuery();
      operatorListQuery.limit = 10;
      operatorListQuery.next(function (operators, error) {
        if (error) {
          return;
        }

        setOperators(operators);
        setHasNext(operatorListQuery.hasNext);
      });
    }, [channel]);
    var refershList = React__default.useCallback(function () {
      if (!channel) {
        setOperators([]);
        return;
      }

      var operatorListQuery = channel.createOperatorListQuery();
      operatorListQuery.limit = 10;
      operatorListQuery.next(function (operators, error) {
        if (error) {
          return;
        }

        setOperators(operators);
        setHasNext(operatorListQuery.hasNext);
      });
    }, [channel]);
    return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, operators.map(function (operator) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem$2, {
        key: operator.userId,
        user: operator,
        currentUser: sdk.currentUser.userId,
        action: function action(_a) {
          var actionRef = _a.actionRef,
              parentRef = _a.parentRef;
          return /*#__PURE__*/React__default__default.createElement(ContextMenu, {
            menuTrigger: function menuTrigger(toggleDropdown) {
              return /*#__PURE__*/React__default__default.createElement(IconButton, {
                className: "sendbird-user-message__more__menu",
                width: "32px",
                height: "32px",
                onClick: toggleDropdown
              }, /*#__PURE__*/React__default__default.createElement(Icon, {
                width: "24px",
                height: "24px",
                type: IconTypes.MORE,
                fillColor: IconColors.CONTENT_INVERSE
              }));
            },
            menuItems: function menuItems(closeDropdown) {
              return /*#__PURE__*/React__default__default.createElement(MenuItems, {
                parentContainRef: parentRef,
                parentRef: actionRef // for catching location(x, y) of MenuItems
                ,
                closeDropdown: closeDropdown,
                openLeft: true
              }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  channel.removeOperators([operator.userId], function (response, error) {
                    if (error) {
                      return;
                    }

                    setOperators(operators.filter(function (_a) {
                      var userId = _a.userId;
                      return userId !== operator.userId;
                    }));
                  });
                  closeDropdown();
                }
              }, stringSet.CHANNEL_SETTING__OPERATORS__DEMOTE));
            }
          });
        }
      });
    }), hasNext && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-settings-accordion__footer"
    }, /*#__PURE__*/React__default__default.createElement(Button, {
      type: ButtonTypes.SECONDARY,
      size: ButtonSizes.SMALL,
      onClick: function onClick() {
        setShowMore(true);
      }
    }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ALL), /*#__PURE__*/React__default__default.createElement(Button, {
      type: ButtonTypes.SECONDARY,
      size: ButtonSizes.SMALL,
      onClick: function onClick() {
        setShowAdd(true);
      }
    }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ADD)), showMore && /*#__PURE__*/React__default__default.createElement(OperatorsModal, {
      currentUser: sdk.currentUser.userId,
      hideModal: function hideModal() {
        setShowMore(false);
        refershList();
      },
      channel: channel
    }), showAdd && /*#__PURE__*/React__default__default.createElement(AddOperatorsModal, {
      hideModal: function hideModal() {
        return setShowAdd(false);
      },
      channel: channel,
      onSubmit: function onSubmit(members) {
        setShowAdd(false);
        channel.addOperators(members, function () {
          refershList();
        });
      }
    }));
  };

  var mapStoreToProps$3 = function mapStoreToProps(store) {
    return {
      sdk: getSdk(store)
    };
  };

  var OperatorList$1 = withSendbirdContext(OperatorList, mapStoreToProps$3);

  function InviteMembers$1(_a) {
    var hideModal = _a.hideModal,
        userQueryCreator = _a.userQueryCreator,
        _onSubmit = _a.onSubmit;

    var _b = React__default.useState([]),
        members = _b[0],
        setMembers = _b[1];

    var _c = React__default.useState({}),
        selectedMembers = _c[0],
        setSelectedMembers = _c[1];

    var _d = React__default.useState(null),
        userQuery = _d[0],
        setUserQuery = _d[1];

    React__default.useEffect(function () {
      var userListQuery = userQueryCreator();
      userListQuery.limit = 20;
      userListQuery.next(function (members, error) {
        if (error) {
          return;
        }

        setMembers(members);
      });
      setUserQuery(userListQuery);
    }, []);
    return /*#__PURE__*/React__default__default.createElement("div", null, /*#__PURE__*/React__default__default.createElement(Modal, {
      disabled: Object.keys(selectedMembers).length === 0,
      submitText: "Invite",
      type: Type$1.PRIMARY,
      onCancel: function onCancel() {
        return hideModal();
      },
      onSubmit: function onSubmit() {
        var members = Object.keys(selectedMembers).filter(function (m) {
          return selectedMembers[m];
        });

        _onSubmit(members);
      },
      titleText: "Select members"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-more-members__popup-scroll",
      onScroll: function onScroll(e) {
        var hasNext = userQuery.hasNext;
        var target = e.target;
        var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

        if (hasNext && fetchMore) {
          userQuery.next(function (o, error) {
            if (error) {
              return;
            }

            setMembers(__spreadArray(__spreadArray([], members), o));
          });
        }
      }
    }, members.map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem, {
        checkBox: true,
        checked: selectedMembers[member.userId],
        onChange: function onChange(event) {
          var _a;

          var modifiedSelectedMembers = __assign(__assign({}, selectedMembers), (_a = {}, _a[event.target.id] = event.target.checked, _a));

          if (!event.target.checked) {
            delete modifiedSelectedMembers[event.target.id];
          }

          setSelectedMembers(modifiedSelectedMembers);
        },
        user: member,
        key: member.userId
      });
    }))));
  }

  var MemberList = function MemberList(_a) {
    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var sdk = _a.sdk,
        channel = _a.channel,
        userQueryCreator = _a.userQueryCreator,
        userId = _a.userId;

    var _b = React__default.useState([]),
        members = _b[0],
        setMembers = _b[1];

    var _c = React__default.useState(false),
        hasNext = _c[0],
        setHasNext = _c[1];

    var _d = React__default.useState(false),
        showAllMembers = _d[0],
        setShowAllMembers = _d[1];

    var _e = React__default.useState(false),
        showInviteMembers = _e[0],
        setShowInviteMembers = _e[1];

    React__default.useEffect(function () {
      if (!channel) {
        setMembers([]);
        return;
      }

      var memberUserListQuery = channel.createMemberListQuery();
      memberUserListQuery.limit = 10;
      memberUserListQuery.next(function (members, error) {
        if (error) {
          return;
        }

        setMembers(members);
        setHasNext(memberUserListQuery.hasNext);
      });
    }, [channel]);
    var refershList = React__default.useCallback(function () {
      if (!channel) {
        setMembers([]);
        return;
      }

      var memberUserListQuery = channel.createMemberListQuery();
      memberUserListQuery.limit = 10;
      memberUserListQuery.next(function (members, error) {
        if (error) {
          return;
        }

        setMembers(members);
        setHasNext(memberUserListQuery.hasNext);
      });
    }, [channel]);
    return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, members.map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem$2, {
        key: member.userId,
        user: member,
        currentUser: sdk.currentUser.userId,
        action: userId !== member.userId ? function (_a) {
          var actionRef = _a.actionRef,
              parentRef = _a.parentRef;
          return /*#__PURE__*/React__default__default.createElement(ContextMenu, {
            menuTrigger: function menuTrigger(toggleDropdown) {
              return /*#__PURE__*/React__default__default.createElement(IconButton, {
                className: "sendbird-user-message__more__menu",
                width: "32px",
                height: "32px",
                onClick: toggleDropdown
              }, /*#__PURE__*/React__default__default.createElement(Icon, {
                width: "24px",
                height: "24px",
                type: IconTypes.MORE,
                fillColor: IconColors.CONTENT_INVERSE
              }));
            },
            menuItems: function menuItems(closeDropdown) {
              return /*#__PURE__*/React__default__default.createElement(MenuItems, {
                parentContainRef: parentRef,
                parentRef: actionRef // for catching location(x, y) of MenuItems
                ,
                closeDropdown: closeDropdown,
                openLeft: true
              }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  if (member.role !== 'operator') {
                    channel.addOperators([member.userId], function () {
                      refershList();
                      closeDropdown();
                    });
                  } else {
                    channel.removeOperators([member.userId], function () {
                      refershList();
                      closeDropdown();
                    });
                  }
                }
              }, member.role !== 'operator' ? stringSet.CHANNEL_SETTING__OPERATORS__PROMOTE : stringSet.CHANNEL_SETTING__OPERATORS__DEMOTE), // No muted members in broadcast channel
              !channel.isBroadcast && /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  if (member.isMuted) {
                    channel.unmuteUser(member, function () {
                      refershList();
                      closeDropdown();
                    });
                  } else {
                    channel.muteUser(member, function () {
                      refershList();
                      closeDropdown();
                    });
                  }
                }
              }, member.isMuted ? 'Unmute' : 'Mute'), /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  channel.banUser(member, -1, '', function () {
                    refershList();
                    closeDropdown();
                  });
                }
              }, "Ban"));
            }
          });
        } : null
      });
    }), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-settings-accordion__footer"
    }, hasNext && /*#__PURE__*/React__default__default.createElement(Button, {
      type: ButtonTypes.SECONDARY,
      size: ButtonSizes.SMALL,
      onClick: function onClick() {
        return setShowAllMembers(true);
      }
    }, "All members"), /*#__PURE__*/React__default__default.createElement(Button, {
      type: ButtonTypes.SECONDARY,
      size: ButtonSizes.SMALL,
      onClick: function onClick() {
        return setShowInviteMembers(true);
      }
    }, "Invite members")), showAllMembers && /*#__PURE__*/React__default__default.createElement(MembersModal, {
      currentUser: sdk.currentUser.userId,
      channel: channel,
      hideModal: function hideModal() {
        setShowAllMembers(false);
        refershList();
      }
    }), showInviteMembers && /*#__PURE__*/React__default__default.createElement(InviteMembers$1, {
      userQueryCreator: userQueryCreator,
      onSubmit: function onSubmit(selectedMembers) {
        channel.inviteWithUserIds(selectedMembers, function () {
          setShowInviteMembers(false);
          refershList();
        });
      },
      channel: channel,
      hideModal: function hideModal() {
        return setShowInviteMembers(false);
      }
    }));
  };

  var mapStoreToProps$2 = function mapStoreToProps(store) {
    return {
      sdk: getSdk(store)
    };
  };

  var MemberList$1 = withSendbirdContext(MemberList, mapStoreToProps$2);

  function BannedMembersModal(_a) {
    var hideModal = _a.hideModal,
        channel = _a.channel;

    var _b = React__default.useState([]),
        members = _b[0],
        setMembers = _b[1];

    var _c = React__default.useState(null),
        memberQuery = _c[0],
        setMemberQuery = _c[1];

    React__default.useEffect(function () {
      var bannedUserListQuery = channel.createBannedUserListQuery();
      bannedUserListQuery.next(function (users, error) {
        if (error) {
          return;
        }

        setMembers(users);
      });
      setMemberQuery(bannedUserListQuery);
    }, []);
    return /*#__PURE__*/React__default__default.createElement("div", null, /*#__PURE__*/React__default__default.createElement(Modal, {
      hideFooter: true,
      onCancel: function onCancel() {
        return hideModal();
      },
      onSubmit: noop,
      titleText: "Muted members"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-more-members__popup-scroll",
      onScroll: function onScroll(e) {
        var hasNext = memberQuery.hasNext;
        var target = e.target;
        var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

        if (hasNext && fetchMore) {
          memberQuery.next(function (o, error) {
            if (error) {
              return;
            }

            setMembers(__spreadArray(__spreadArray([], members), o));
          });
        }
      }
    }, members.map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem, {
        user: member,
        key: member.userId,
        action: function action(_a) {
          var parentRef = _a.parentRef,
              actionRef = _a.actionRef;
          return /*#__PURE__*/React__default__default.createElement(ContextMenu, {
            menuTrigger: function menuTrigger(toggleDropdown) {
              return /*#__PURE__*/React__default__default.createElement(IconButton, {
                className: "sendbird-user-message__more__menu",
                width: "32px",
                height: "32px",
                onClick: toggleDropdown
              }, /*#__PURE__*/React__default__default.createElement(Icon, {
                width: "24px",
                height: "24px",
                type: IconTypes.MORE,
                fillColor: IconColors.CONTENT_INVERSE
              }));
            },
            menuItems: function menuItems(closeDropdown) {
              return /*#__PURE__*/React__default__default.createElement(MenuItems, {
                parentContainRef: parentRef,
                parentRef: actionRef // for catching location(x, y) of MenuItems
                ,
                closeDropdown: closeDropdown,
                openLeft: true
              }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  channel.unbanUser(member, function () {
                    closeDropdown();
                    setMembers(members.filter(function (m) {
                      return m.userId !== member.userId;
                    }));
                  });
                }
              }, "Unban"));
            }
          });
        }
      });
    }))));
  }

  var BannedMemberList = function BannedMemberList(_a) {
    var channel = _a.channel;

    var _b = React__default.useState([]),
        members = _b[0],
        setMembers = _b[1];

    var _c = React__default.useState(false),
        hasNext = _c[0],
        setHasNext = _c[1];

    var _d = React__default.useState(false),
        showModal = _d[0],
        setShowModal = _d[1];

    React__default.useEffect(function () {
      if (!channel) {
        setMembers([]);
        return;
      }

      var bannedUserListQuery = channel.createBannedUserListQuery();
      bannedUserListQuery.next(function (users, error) {
        if (error) {
          return;
        }

        setMembers(users);
        setHasNext(bannedUserListQuery.hasNext);
      });
    }, [channel]);
    var refreshList = React__default.useCallback(function () {
      if (!channel) {
        setMembers([]);
        return;
      }

      var bannedUserListQuery = channel.createBannedUserListQuery();
      bannedUserListQuery.next(function (users, error) {
        if (error) {
          return;
        }

        setMembers(users);
        setHasNext(bannedUserListQuery.hasNext);
      });
    }, [channel]);
    return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, members.map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem$2, {
        key: member.userId,
        user: member,
        action: function action(_a) {
          var actionRef = _a.actionRef,
              parentRef = _a.parentRef;
          return /*#__PURE__*/React__default__default.createElement(ContextMenu, {
            menuTrigger: function menuTrigger(toggleDropdown) {
              return /*#__PURE__*/React__default__default.createElement(IconButton, {
                className: "sendbird-user-message__more__menu",
                width: "32px",
                height: "32px",
                onClick: toggleDropdown
              }, /*#__PURE__*/React__default__default.createElement(Icon, {
                width: "24px",
                height: "24px",
                type: IconTypes.MORE,
                fillColor: IconColors.CONTENT_INVERSE
              }));
            },
            menuItems: function menuItems(closeDropdown) {
              return /*#__PURE__*/React__default__default.createElement(MenuItems, {
                parentContainRef: parentRef,
                parentRef: actionRef // for catching location(x, y) of MenuItems
                ,
                closeDropdown: closeDropdown,
                openLeft: true
              }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  channel.unbanUser(member, function () {
                    closeDropdown();
                    refreshList();
                  });
                }
              }, "Unban"));
            }
          });
        }
      });
    }), members && members.length === 0 && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-channel-settings__empty-list",
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_3
    }, "No banned members yet"), hasNext && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-settings-accordion__footer"
    }, /*#__PURE__*/React__default__default.createElement(Button, {
      type: ButtonTypes.SECONDARY,
      size: ButtonSizes.SMALL,
      onClick: function onClick() {
        setShowModal(true);
      }
    }, "All banned members")), showModal && /*#__PURE__*/React__default__default.createElement(BannedMembersModal, {
      channel: channel,
      hideModal: function hideModal() {
        setShowModal(false);
        refreshList();
      }
    }));
  };

  var mapStoreToProps$1$1 = function mapStoreToProps(store) {
    return {
      sdk: getSdk(store)
    };
  };

  var BannedMemberList$1 = withSendbirdContext(BannedMemberList, mapStoreToProps$1$1);

  function MutedMembersModal(_a) {
    var hideModal = _a.hideModal,
        channel = _a.channel,
        currentUser = _a.currentUser;

    var _b = React__default.useState([]),
        members = _b[0],
        setMembers = _b[1];

    var _c = React__default.useState(null),
        memberQuery = _c[0],
        setMemberQuery = _c[1];

    React__default.useEffect(function () {
      var memberUserListQuery = channel.createMemberListQuery();
      memberUserListQuery.limit = 10;
      memberUserListQuery.mutedMemberFilter = 'muted';
      memberUserListQuery.next(function (members, error) {
        if (error) {
          return;
        }

        setMembers(members);
      });
      setMemberQuery(memberUserListQuery);
    }, []);
    return /*#__PURE__*/React__default__default.createElement("div", null, /*#__PURE__*/React__default__default.createElement(Modal, {
      hideFooter: true,
      onCancel: function onCancel() {
        return hideModal();
      },
      onSubmit: noop,
      titleText: "Muted members"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-more-members__popup-scroll",
      onScroll: function onScroll(e) {
        var hasNext = memberQuery.hasNext;
        var target = e.target;
        var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

        if (hasNext && fetchMore) {
          memberQuery.next(function (o, error) {
            if (error) {
              return;
            }

            setMembers(__spreadArray(__spreadArray([], members), o));
          });
        }
      }
    }, members.map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem, {
        currentUser: currentUser,
        user: member,
        key: member.userId,
        action: function action(_a) {
          var actionRef = _a.actionRef,
              parentRef = _a.parentRef;
          return /*#__PURE__*/React__default__default.createElement(ContextMenu, {
            menuTrigger: function menuTrigger(toggleDropdown) {
              return /*#__PURE__*/React__default__default.createElement(IconButton, {
                className: "sendbird-user-message__more__menu",
                width: "32px",
                height: "32px",
                onClick: toggleDropdown
              }, /*#__PURE__*/React__default__default.createElement(Icon, {
                width: "24px",
                height: "24px",
                type: IconTypes.MORE,
                fillColor: IconColors.CONTENT_INVERSE
              }));
            },
            menuItems: function menuItems(closeDropdown) {
              return /*#__PURE__*/React__default__default.createElement(MenuItems, {
                parentContainRef: parentRef,
                parentRef: actionRef // for catching location(x, y) of MenuItems
                ,
                closeDropdown: closeDropdown,
                openLeft: true
              }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  channel.unmuteUser(member, function () {
                    closeDropdown();
                    setMembers(members.filter(function (m) {
                      return m.userId !== member.userId;
                    }));
                  });
                }
              }, "Unmute"));
            }
          });
        }
      });
    }))));
  }

  var MutedMemberList = function MutedMemberList(_a) {
    var sdk = _a.sdk,
        channel = _a.channel;

    var _b = React__default.useState([]),
        members = _b[0],
        setMembers = _b[1];

    var _c = React__default.useState(false),
        hasNext = _c[0],
        setHasNext = _c[1];

    var _d = React__default.useState(false),
        showModal = _d[0],
        setShowModal = _d[1];

    React__default.useEffect(function () {
      if (!channel) {
        setMembers([]);
        return;
      }

      var memberUserListQuery = channel.createMemberListQuery();
      memberUserListQuery.limit = 10;
      memberUserListQuery.mutedMemberFilter = 'muted';
      memberUserListQuery.next(function (members, error) {
        if (error) {
          return;
        }

        setMembers(members);
        setHasNext(memberUserListQuery.hasNext);
      });
    }, [channel]);
    var refreshList = React__default.useCallback(function () {
      if (!channel) {
        setMembers([]);
        return;
      }

      var memberUserListQuery = channel.createMemberListQuery();
      memberUserListQuery.limit = 10;
      memberUserListQuery.mutedMemberFilter = 'muted';
      memberUserListQuery.next(function (members, error) {
        if (error) {
          return;
        }

        setMembers(members);
        setHasNext(memberUserListQuery.hasNext);
      });
    }, [channel]);
    return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, members.map(function (member) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem$2, {
        key: member.userId,
        user: member,
        currentUser: sdk.currentUser.userId,
        action: function action(_a) {
          var actionRef = _a.actionRef,
              parentRef = _a.parentRef;
          return /*#__PURE__*/React__default__default.createElement(ContextMenu, {
            menuTrigger: function menuTrigger(toggleDropdown) {
              return /*#__PURE__*/React__default__default.createElement(IconButton, {
                className: "sendbird-user-message__more__menu",
                width: "32px",
                height: "32px",
                onClick: toggleDropdown
              }, /*#__PURE__*/React__default__default.createElement(Icon, {
                width: "24px",
                height: "24px",
                type: IconTypes.MORE,
                fillColor: IconColors.CONTENT_INVERSE
              }));
            },
            menuItems: function menuItems(closeDropdown) {
              return /*#__PURE__*/React__default__default.createElement(MenuItems, {
                closeDropdown: closeDropdown,
                openLeft: true,
                parentContainRef: parentRef,
                parentRef: actionRef // for catching location(x, y) of MenuItems

              }, /*#__PURE__*/React__default__default.createElement(MenuItem, {
                onClick: function onClick() {
                  channel.unmuteUser(member, function () {
                    refreshList();
                    closeDropdown();
                  });
                }
              }, "Unmute"));
            }
          });
        }
      });
    }), members && members.length === 0 && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-channel-settings__empty-list",
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_3
    }, "No muted members yet"), hasNext && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-settings-accordion__footer"
    }, /*#__PURE__*/React__default__default.createElement(Button, {
      type: ButtonTypes.SECONDARY,
      size: ButtonSizes.SMALL,
      onClick: function onClick() {
        setShowModal(true);
      }
    }, "All muted members")), showModal && /*#__PURE__*/React__default__default.createElement(MutedMembersModal, {
      currentUser: sdk.currentUser.userId,
      channel: channel,
      hideModal: function hideModal() {
        setShowModal(false);
        refreshList();
      }
    }));
  };

  var mapStoreToProps$4 = function mapStoreToProps(store) {
    return {
      sdk: getSdk(store)
    };
  };

  var MutedMemberList$1 = withSendbirdContext(MutedMemberList, mapStoreToProps$4);

  var kFormatter$1 = function kFormatter(num) {
    return Math.abs(num) > 999 ? (Math.abs(num) / 1000).toFixed(1) + "K" : num;
  };

  function AdminPannel(_a) {
    var userQueryCreator = _a.userQueryCreator,
        channel = _a.channel,
        userId = _a.userId;

    var _b = React__default.useState(false),
        frozen = _b[0],
        setFrozen = _b[1]; // work around for
    // https://sendbird.slack.com/archives/G01290GCDCN/p1595922832000900
    // SDK bug - after frozen/unfrozen myRole becomes "none"


    React__default.useEffect(function () {
      setFrozen(channel.isFrozen);
    }, [channel]);
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement(AccordionGroup, {
      className: "sendbird-channel-settings__operator"
    }, /*#__PURE__*/React__default__default.createElement(Accordion, {
      className: "sendbird-channel-settings__operators-list",
      id: "operators",
      renderTitle: function renderTitle() {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.OPERATOR,
          fillColor: IconColors.PRIMARY,
          width: 24,
          height: 24,
          className: "sendbird-channel-settings__accordion-icon"
        }), /*#__PURE__*/React__default__default.createElement(Label, {
          type: LabelTypography.SUBTITLE_1,
          color: LabelColors.ONBACKGROUND_1
        }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(OperatorList$1, {
          channel: channel
        }));
      }
    }), /*#__PURE__*/React__default__default.createElement(Accordion, {
      className: "sendbird-channel-settings__members-list",
      id: "members",
      renderTitle: function renderTitle() {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MEMBERS,
          fillColor: IconColors.PRIMARY,
          width: 24,
          height: 24,
          className: "sendbird-channel-settings__accordion-icon"
        }), /*#__PURE__*/React__default__default.createElement(Label, {
          type: LabelTypography.SUBTITLE_1,
          color: LabelColors.ONBACKGROUND_1
        }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE), /*#__PURE__*/React__default__default.createElement(Badge, {
          count: kFormatter$1(channel.memberCount)
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(MemberList$1, {
          userQueryCreator: userQueryCreator,
          channel: channel,
          userId: userId
        }));
      }
    }), // No muted members in broadcast channel
    !channel.isBroadcast && /*#__PURE__*/React__default__default.createElement(Accordion, {
      id: "mutedMembers",
      className: "sendbird-channel-settings__muted-members-list",
      renderTitle: function renderTitle() {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MUTE,
          fillColor: IconColors.PRIMARY,
          width: 24,
          height: 24,
          className: "sendbird-channel-settings__accordion-icon"
        }), /*#__PURE__*/React__default__default.createElement(Label, {
          type: LabelTypography.SUBTITLE_1,
          color: LabelColors.ONBACKGROUND_1
        }, stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(MutedMemberList$1, {
          channel: channel
        }));
      }
    }), /*#__PURE__*/React__default__default.createElement(Accordion, {
      className: "sendbird-channel-settings__banned-members-list",
      id: "bannedMembers",
      renderTitle: function renderTitle() {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.BAN,
          fillColor: IconColors.PRIMARY,
          width: 24,
          height: 24,
          className: "sendbird-channel-settings__accordion-icon"
        }), /*#__PURE__*/React__default__default.createElement(Label, {
          type: LabelTypography.SUBTITLE_1,
          color: LabelColors.ONBACKGROUND_1
        }, stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(BannedMemberList$1, {
          channel: channel
        }));
      }
    }));
  }

  var COMPONENT_CLASS_NAME = 'sendbird-channel-settings';

  var kFormatter = function kFormatter(num) {
    return Math.abs(num) > 999 ? "".concat((Math.abs(num) / 1000).toFixed(1), "K") : num;
  };

  function ChannelSettings(props) {
    var className = props.className,
        onCloseClick = props.onCloseClick,
        channelUrl = props.channelUrl,
        disableUserProfile = props.disableUserProfile,
        renderUserProfile = props.renderUserProfile,
        _onChannelModified = props.onChannelModified,
        renderChannelProfile = props.renderChannelProfile,
        onBeforeUpdateChannel = props.onBeforeUpdateChannel;
    var sdkStore = props.stores.sdkStore,
        _props$config = props.config,
        userListQuery = _props$config.userListQuery,
        theme = _props$config.theme,
        userId = _props$config.userId,
        logger = _props$config.logger,
        isOnline = _props$config.isOnline,
        _props$queries = props.queries,
        queries = _props$queries === void 0 ? {} : _props$queries;
    var _props$config2 = props.config,
        config = _props$config2 === void 0 ? {} : _props$config2;
    var userDefinedDisableUserProfile = disableUserProfile || config.disableUserProfile;
    var userDefinedRenderProfile = renderUserProfile || config.renderUserProfile;
    var userFilledApplicationUserListQuery = queries.applicationUserListQuery;

    var _useContext = React__default.useContext(LocalizationContext),
        stringSet = _useContext.stringSet;

    var sdk = sdkStore.sdk,
        initialized = sdkStore.initialized; // hack to kepp track of channel updates by triggering useEffect

    var _useState = React__default.useState(uuidv4()),
        _useState2 = _slicedToArray(_useState, 2),
        channelUpdateId = _useState2[0],
        setChannelUpdateId = _useState2[1];

    var _useState3 = React__default.useState(null),
        _useState4 = _slicedToArray(_useState3, 2),
        channel = _useState4[0],
        setChannel = _useState4[1];

    var _useState5 = React__default.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        invalidChannel = _useState6[0],
        setInvalidChannel = _useState6[1];

    var _useState7 = React__default.useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        showAccordion = _useState8[0],
        setShowAccordion = _useState8[1];

    var _useState9 = React__default.useState(false),
        _useState10 = _slicedToArray(_useState9, 2),
        showLeaveChannelModal = _useState10[0],
        setShowLeaveChannelModal = _useState10[1];

    var componentClassNames = (Array.isArray(className) ? [COMPONENT_CLASS_NAME].concat(_toConsumableArray(className)) : [COMPONENT_CLASS_NAME, className]).join(' ');
    React__default.useEffect(function () {
      logger.info('ChannelSettings: Setting up');

      if (!channelUrl || !initialized || !sdk) {
        logger.warning('ChannelSettings: Setting up failed', 'No channelUrl or sdk uninitialized');
        setInvalidChannel(false);
      } else {
        if (!sdk || !sdk.GroupChannel) {
          logger.warning('ChannelSettings: No GroupChannel');
          return;
        }

        sdk.GroupChannel.getChannel(channelUrl, function (groupChannel) {
          if (!groupChannel) {
            logger.warning('ChannelSettings: Channel not found');
            setInvalidChannel(true);
          } else {
            logger.info('ChannelSettings: Fetched group channel', groupChannel);
            setInvalidChannel(false);
            setChannel(groupChannel);
          }
        });
      }
    }, [channelUrl, initialized, channelUpdateId]);

    if (!channel || invalidChannel) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: componentClassNames
      }, /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-channel-settings__header"
      }, /*#__PURE__*/React__default__default.createElement(Label, {
        type: LabelTypography.H_2,
        color: LabelColors.ONBACKGROUND_1
      }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default__default.createElement(Icon, {
        className: "sendbird-channel-settings__close-icon",
        type: IconTypes.CLOSE,
        height: "24px",
        width: "24px",
        onClick: function onClick() {
          logger.info('ChannelSettings: Click close');
          onCloseClick();
        }
      })), /*#__PURE__*/React__default__default.createElement("div", null, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes$1.WRONG
      })));
    }

    return /*#__PURE__*/React__default__default.createElement(UserProfileProvider, {
      className: componentClassNames,
      disableUserProfile: userDefinedDisableUserProfile,
      renderUserProfile: userDefinedRenderProfile
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-settings__header"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-settings__header-icon"
    }, /*#__PURE__*/React__default__default.createElement(IconButton, {
      width: "32px",
      height: "32px",
      onClick: function onClick() {
        logger.info('ChannelSettings: Click close');
        onCloseClick();
      }
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-channel-settings__close-icon",
      type: IconTypes.CLOSE,
      height: "22px",
      width: "22px"
    })))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-channel-settings__scroll-area"
    }, renderChannelProfile ? renderChannelProfile({
      channel: channel
    }) : /*#__PURE__*/React__default__default.createElement(ChannelProfile, {
      disabled: !isOnline,
      channel: channel,
      userId: userId,
      theme: theme,
      onChannelInfoChange: function onChannelInfoChange(currentImg, currentTitle) {
        logger.info('ChannelSettings: Channel information being updated');
        var swapParams = sdk.getErrorFirstCallback();

        if (onBeforeUpdateChannel) {
          var params = onBeforeUpdateChannel(currentTitle, currentImg, channel.data); // swapParams

          channel.updateChannel(params, function (response, error) {
            var groupChannel = response;

            if (swapParams) {
              groupChannel = error;
            }

            _onChannelModified(groupChannel);

            setChannelUpdateId(uuidv4());
          });
          return;
        }

        channel.updateChannel(currentTitle, currentImg, channel.data, function (response, error) {
          var groupChannel = response;

          if (swapParams) {
            groupChannel = error;
          }

          logger.info('ChannelSettings: Channel information updated', groupChannel);

          _onChannelModified(groupChannel);

          setChannelUpdateId(uuidv4());
        });
      }
    }), channel.myRole === 'operator' ? /*#__PURE__*/React__default__default.createElement(AdminPannel, {
      channel: channel,
      userId: userId,
      onChannelModified: function onChannelModified(groupChannel) {
        // setChannelUpdateId(uuidv4());
        _onChannelModified(groupChannel);
      },
      userQueryCreator: function userQueryCreator() {
        return userListQuery && typeof userListQuery === 'function' ? userListQuery() : createDefaultUserListQuery({
          sdk: sdk,
          userFilledApplicationUserListQuery: userFilledApplicationUserListQuery
        });
      }
    }) : /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement("div", {
      className: ['sendbird-channel-settings__panel-item', 'sendbird-channel-settings__members'].join(' '),
      role: "switch",
      "aria-checked": showAccordion,
      onKeyDown: function onKeyDown() {
        return setShowAccordion(!showAccordion);
      },
      onClick: function onClick() {
        return setShowAccordion(!showAccordion);
      },
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-channel-settings__panel-icon-left",
      type: IconTypes.MEMBERS,
      fillColor: IconColors.PRIMARY,
      height: "24px",
      width: "24px"
    }), /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.SUBTITLE_1,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE, /*#__PURE__*/React__default__default.createElement(Badge, {
      count: kFormatter(channel.memberCount)
    })), /*#__PURE__*/React__default__default.createElement(Icon, {
      className: ['sendbird-channel-settings__panel-icon-right', 'sendbird-channel-settings__panel-icon--chevron', showAccordion ? 'sendbird-channel-settings__panel-icon--open' : ''].join(' '),
      type: IconTypes.CHEVRON_RIGHT,
      height: "24px",
      width: "24px"
    })), showAccordion && /*#__PURE__*/React__default__default.createElement(MembersAccordion, {
      currentUser: userId,
      disabled: !isOnline // eslint-disable-next-line
      ,
      userQueryCreator: function userQueryCreator() {
        return userListQuery && typeof userListQuery === 'function' ? userListQuery() : createDefaultUserListQuery({
          sdk: sdk,
          userFilledApplicationUserListQuery: userFilledApplicationUserListQuery
        });
      },
      swapParams: sdk && sdk.getErrorFirstCallback && sdk.getErrorFirstCallback(),
      channel: channel,
      members: channel.members,
      onInviteMembers: function onInviteMembers(selectedMembers) {
        logger.info('ChannelSettings: Inviting new users');
        channel.inviteWithUserIds(selectedMembers).then(function (res) {
          _onChannelModified(res);

          setChannelUpdateId(uuidv4());
          logger.info('ChannelSettings: Inviting new users success!', res);
        });
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: ['sendbird-channel-settings__panel-item', 'sendbird-channel-settings__leave-channel', !isOnline ? 'sendbird-channel-settings__panel-item__disabled' : ''].join(' '),
      role: "button",
      disabled: true,
      onKeyDown: function onKeyDown() {
        if (!isOnline) {
          return;
        }

        setShowLeaveChannelModal(true);
      },
      onClick: function onClick() {
        if (!isOnline) {
          return;
        }

        setShowLeaveChannelModal(true);
      },
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: ['sendbird-channel-settings__panel-icon-left', 'sendbird-channel-settings__panel-icon__leave'].join(' '),
      type: IconTypes.LEAVE,
      fillColor: IconColors.ERROR,
      height: "24px",
      width: "24px"
    }), /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.SUBTITLE_1,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE)), showLeaveChannelModal && /*#__PURE__*/React__default__default.createElement(LeaveChannel, {
      onCloseModal: function onCloseModal() {
        return setShowLeaveChannelModal(false);
      },
      onLeaveChannel: function onLeaveChannel() {
        logger.info('ChannelSettings: Leaving channel', channel);
        channel.leave().then(function () {
          logger.info('ChannelSettings: Leaving channel successful!', channel);
          onCloseClick();
        });
      }
    })));
  }

  ChannelSettings.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    onCloseClick: PropTypes.func,
    onChannelModified: PropTypes.func,
    onBeforeUpdateChannel: PropTypes.func,
    renderChannelProfile: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    disableUserProfile: PropTypes.bool,
    renderUserProfile: PropTypes.func,
    channelUrl: PropTypes.string.isRequired,
    queries: PropTypes.shape({
      applicationUserListQuery: PropTypes.shape({
        limit: PropTypes.number,
        userIdsFilter: PropTypes.arrayOf(PropTypes.string),
        metaDataKeyFilter: PropTypes.string,
        metaDataValuesFilter: PropTypes.arrayOf(PropTypes.string)
      })
    }),
    // from withSendbirdContext
    stores: PropTypes.shape({
      sdkStore: PropTypes.shape({
        sdk: PropTypes.shape({
          getErrorFirstCallback: PropTypes.func,
          GroupChannel: PropTypes.oneOfType([PropTypes.shape({
            getChannel: PropTypes.func
          }), PropTypes.func]),
          createApplicationUserListQuery: PropTypes.any
        }),
        initialized: PropTypes.bool
      })
    }).isRequired,
    config: PropTypes.shape({
      userId: PropTypes.string,
      theme: PropTypes.string,
      userListQuery: PropTypes.func,
      isOnline: PropTypes.bool,
      logger: PropTypes.shape({
        info: PropTypes.func,
        error: PropTypes.func,
        warning: PropTypes.func
      })
    }).isRequired
  };
  ChannelSettings.defaultProps = {
    className: '',
    onBeforeUpdateChannel: null,
    queries: {},
    disableUserProfile: false,
    renderUserProfile: null,
    renderChannelProfile: null,
    onCloseClick: function onCloseClick() {},
    onChannelModified: function onChannelModified() {}
  };
  var ChannelSettings$1 = withSendbirdContext(ChannelSettings);

  var GET_SEARCHED_MESSAGES = 'GET_SEARCHED_MESSAGES';
  var GET_NEXT_SEARCHED_MESSAGES = 'GET_NEXT_SEARCHED_MESSAGES';
  var START_MESSAGE_SEARCH = 'START_MESSAGE_SEARCH';
  var START_GETTING_SEARCHED_MESSAGES = 'START_GETTING_SEARCHED_MESSAGES';
  var SET_QUERY_INVALID = 'SET_QUERY_INVALID';
  var SET_CURRENT_CHANNEL$2 = 'SET_CURRENT_CHANNEL';
  var CHANNEL_INVALID = 'CHANNEL_INVALID';

  function reducer$4(state, action) {
    switch (action.type) {
      case SET_CURRENT_CHANNEL$2:
        {
          var currentChannel = action.payload;
          return __assign(__assign({}, state), {
            currentChannel: currentChannel,
            initialized: true
          });
        }

      case CHANNEL_INVALID:
        {
          return __assign(__assign({}, state), {
            currentChannel: null,
            initialized: false
          });
        }

      case GET_SEARCHED_MESSAGES:
        {
          var _a = action.payload,
              messages = _a.messages,
              createdQuery = _a.createdQuery;

          if (createdQuery && createdQuery.channelUrl === state.currentMessageSearchQuery.channelUrl && createdQuery.key === state.currentMessageSearchQuery.key) {
            return __assign(__assign({}, state), {
              loading: false,
              isInvalid: false,
              allMessages: __spreadArray([], messages),
              hasMoreResult: state.currentMessageSearchQuery.hasNext
            });
          }

          return __assign({}, state);
        }

      case SET_QUERY_INVALID:
        {
          return __assign(__assign({}, state), {
            isInvalid: true
          });
        }

      case START_MESSAGE_SEARCH:
        {
          return __assign(__assign({}, state), {
            isInvalid: false,
            loading: false
          });
        }

      case START_GETTING_SEARCHED_MESSAGES:
        {
          var currentMessageSearchQuery = action.payload;
          return __assign(__assign({}, state), {
            loading: true,
            currentMessageSearchQuery: currentMessageSearchQuery
          });
        }

      case GET_NEXT_SEARCHED_MESSAGES:
        {
          var messages = action.payload;
          return __assign(__assign({}, state), {
            allMessages: __spreadArray(__spreadArray([], state.allMessages), messages),
            hasMoreResult: state.currentMessageSearchQuery.hasNext
          });
        }

      default:
        {
          return state;
        }
    }
  }

  var initialState = {
    allMessages: [],
    loading: false,
    isInvalid: false,
    initialized: false,
    currentChannel: null,
    currentMessageSearchQuery: null,
    hasMoreResult: false
  };

  function useSetChannel$1(_a, _b) {
    var channelUrl = _a.channelUrl,
        sdkInit = _a.sdkInit;
    var sdk = _b.sdk,
        logger = _b.logger,
        messageSearchDispathcer = _b.messageSearchDispathcer;
    React__default.useEffect(function () {
      if (channelUrl && sdkInit && sdk && (sdk.OpenChannel || sdk.GroupChannel)) {
        sdk.GroupChannel.getChannel(channelUrl, function (groupChannel, error) {
          if (!error) {
            logger.info('MessageSearch | useSetChannel group channel', groupChannel);
            messageSearchDispathcer({
              type: SET_CURRENT_CHANNEL$2,
              payload: groupChannel
            });
          } else {
            messageSearchDispathcer({
              type: CHANNEL_INVALID,
              payload: null
            });
          }
        });
      }
    }, [channelUrl, sdkInit]);
  }

  function useGetSearchedMessages(_a, _b) {
    var currentChannel = _a.currentChannel,
        channelUrl = _a.channelUrl,
        searchString = _a.searchString,
        messageSearchQuery = _a.messageSearchQuery,
        onResultLoaded = _a.onResultLoaded,
        retryCount = _a.retryCount;
    var sdk = _b.sdk,
        logger = _b.logger,
        messageSearchDispathcer = _b.messageSearchDispathcer;
    React__default.useEffect(function () {
      messageSearchDispathcer({
        type: START_MESSAGE_SEARCH,
        payload: null
      });

      if (sdk && channelUrl && sdk.createMessageSearchQuery && currentChannel) {
        if (searchString) {
          var inputSearchMessageQueryObject = __assign(__assign({}, messageSearchQuery), {
            channelUrl: channelUrl,
            messageTimestampFrom: currentChannel.invitedAt
          });

          var createdQuery_1 = sdk.createMessageSearchQuery(searchString, inputSearchMessageQueryObject);
          createdQuery_1.next(function (messages, error) {
            if (!error) {
              logger.info('MessageSearch | useGetSearchedMessages: succeeded getting messages', messages);
              messageSearchDispathcer({
                type: GET_SEARCHED_MESSAGES,
                payload: {
                  messages: messages,
                  createdQuery: createdQuery_1
                }
              });

              if (onResultLoaded && typeof onResultLoaded === 'function') {
                onResultLoaded(messages, null);
              }
            } else {
              logger.warning('MessageSearch | useGetSearchedMessages: getting failed', error);
              messageSearchDispathcer({
                type: SET_QUERY_INVALID,
                payload: null
              });

              if (onResultLoaded && typeof onResultLoaded === 'function') {
                onResultLoaded(null, error);
              }
            }
          });
          messageSearchDispathcer({
            type: START_GETTING_SEARCHED_MESSAGES,
            payload: createdQuery_1
          });
        } else {
          logger.info('MessageSearch | useGetSeasrchedMessages: search string is empty');
        }
      }
    }, [channelUrl, messageSearchQuery, searchString, currentChannel, retryCount]);
  }

  function useScrollCallback$1(_a, _b) {
    var currentMessageSearchQuery = _a.currentMessageSearchQuery,
        hasMoreResult = _a.hasMoreResult,
        onResultLoaded = _a.onResultLoaded;
    var logger = _b.logger,
        messageSearchDispathcer = _b.messageSearchDispathcer;
    return React__default.useCallback(function (cb) {
      if (!hasMoreResult) {
        logger.warning('MessageSearch | useScrollCallback: no more searched results', hasMoreResult);
      }

      if (currentMessageSearchQuery && currentMessageSearchQuery.hasNext) {
        currentMessageSearchQuery.next(function (messages, error) {
          if (!error) {
            logger.info('MessageSearch | useScrollCallback: succeeded getting searched messages', messages);
            messageSearchDispathcer({
              type: GET_NEXT_SEARCHED_MESSAGES,
              payload: messages
            });
            cb(messages, null);

            if (onResultLoaded && typeof onResultLoaded === 'function') {
              onResultLoaded(messages, null);
            }
          } else {
            logger.warning('MessageSearch | useScrollCallback: failed getting searched messages', error);
            cb(null, error);

            if (onResultLoaded && typeof onResultLoaded === 'function') {
              onResultLoaded(null, error);
            }
          }
        });
      } else {
        logger.warning('MessageSearch | useScrollCallback: no currentMessageSearchQuery');
      }
    }, [currentMessageSearchQuery, hasMoreResult]);
  }

  var getCreatedAt$1 = (function (createdAt) {
    if (!createdAt) {
      return '';
    }

    if (isToday(createdAt)) {
      return format(createdAt, 'p');
    }

    if (isYesterday(createdAt)) {
      return 'Yesterday';
    }

    return format(createdAt, 'MMM dd');
  });

  function MessageSearchItem(_a) {
    var className = _a.className,
        message = _a.message,
        selected = _a.selected,
        _onClick = _a.onClick;
    var createdAt = message.createdAt;
    var messageText = message.message;
    var sender = message.sender || message._sender;
    var profileUrl = sender.profileUrl,
        nickname = sender.nickname;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className]), ['sendbird-message-search-item', selected ? 'sendbird-message-search-item--selected' : '']).join(' '),
      onClick: function onClick(e) {
        e.stopPropagation();

        _onClick(message);
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-message-search-item__left"
    }, /*#__PURE__*/React__default__default.createElement(Avatar$1, {
      className: "sendbird-message-search-item__left__sender-avatar",
      src: profileUrl,
      alt: "profile image",
      width: "56px",
      height: "56px"
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-message-search-item__right"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-message-search-item__right__sender-name",
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_1
    }, nickname || stringSet.NO_NAME), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-message-search-item__right__message-text",
      type: LabelTypography.BODY_2,
      color: LabelColors.ONBACKGROUND_3
    }, messageText), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-message-search-item__right__message-created-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, getCreatedAt$1(createdAt))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-message-search-item__right-footer"
    }));
  }

  function getCreatedAt(createdAt) {
    if (!createdAt) {
      return '';
    }

    if (isToday(createdAt)) {
      return format(createdAt, 'p');
    }

    if (isYesterday(createdAt)) {
      return 'Yesterday';
    }

    return format(createdAt, 'MMM dd');
  }
  function getIconOfFileType(message) {
    var url = message.url;
    var fileMessageUrl = url;
    var fileExtension = fileMessageUrl.match(/\.([^.]*?)(?=\?|#|$)/)[1];

    if (/(jpg|jpeg|png)$/i.test(fileExtension)) {
      return IconTypes.PHOTO;
    } else if (/mp4$/i.test(fileExtension)) {
      return IconTypes.PLAY;
    } else if (/mp3/i.test(fileExtension)) {
      return IconTypes.FILE_AUDIO;
    } else if (/gif/i.test(fileExtension)) {
      return IconTypes.GIF;
    } else {
      return IconTypes.FILE_DOCUMENT;
    }
  }
  function truncate$1(fullText, textLimit) {
    if (fullText.length <= textLimit) return fullText;
    var separator = '...';
    var sepLen = separator.length;
    var charsToShow = textLimit - sepLen;
    var frontChars = Math.ceil(charsToShow / 2);
    var backChars = Math.floor(charsToShow / 2);
    return fullText.substr(0, frontChars) + separator + fullText.substr(fullText.length - backChars);
  }

  function MessageSearchFileItem(props) {
    var className = props.className,
        message = props.message,
        selected = props.selected,
        _onClick = props.onClick;
    var createdAt = message.createdAt,
        url = message.url,
        name = message.name;
    var fileMessageUrl = url;
    var sender = message.sender || message._sender;
    var profileUrl = sender.profileUrl,
        nickname = sender.nickname;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className]), ['sendbird-message-search-file-item', selected ? 'sendbird-message-search-file-item--selected' : '']).join(' '),
      onClick: function onClick(e) {
        e.stopPropagation();

        _onClick(message);
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-message-search-file-item__left"
    }, /*#__PURE__*/React__default__default.createElement(Avatar$1, {
      className: "sendbird-message-search-file-item__left__sender-avatar",
      src: profileUrl,
      alt: "profile image",
      width: "56px",
      height: "56px"
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-message-search-file-item__right"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-message-search-file-item__right__sender-name",
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_1
    }, nickname || stringSet.NO_NAME), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-message-search-file-item__right__content"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-message-search-file-item__right__content__type-icon"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: getIconOfFileType(message),
      fillColor: IconColors.PRIMARY,
      width: "18px",
      height: "18px"
    })), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-message-search-file-item__right__content__url",
      type: LabelTypography.BODY_2,
      color: LabelColors.ONBACKGROUND_1
    }, truncate$1(name || fileMessageUrl, 28)))), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-message-search-file-item__message-created-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, getCreatedAt(createdAt)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-message-search-file-item__right-footer"
    }));
  }

  var COMPONENT_CLASS_NAME$1 = 'sendbird-message-search';

  function MessageSearch(props) {
    var // sendbird internal props
    stores = props.stores,
        config = props.config,
        // message search props
    channelUrl = props.channelUrl,
        searchString = props.searchString,
        messageSearchQuery = props.messageSearchQuery,
        renderSearchItem = props.renderSearchItem,
        onResultLoaded = props.onResultLoaded,
        onResultClick = props.onResultClick; // hook variables

    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var _a = React__default.useState(0),
        retryCount = _a[0],
        setRetryCount = _a[1]; // this is a trigger flag for activating useGetSearchMessages


    var _b = React__default.useState(0),
        selectedMessageId = _b[0],
        setSelectedMessageId = _b[1];

    var _c = React__default.useReducer(reducer$4, initialState),
        messageSearchStore = _c[0],
        messageSearchDispathcer = _c[1];

    var allMessages = messageSearchStore.allMessages,
        loading = messageSearchStore.loading,
        isInvalid = messageSearchStore.isInvalid,
        currentChannel = messageSearchStore.currentChannel,
        currentMessageSearchQuery = messageSearchStore.currentMessageSearchQuery,
        hasMoreResult = messageSearchStore.hasMoreResult;

    var getChannelName = function getChannelName() {
      if (currentChannel && currentChannel.name && currentChannel.name !== 'Group Channel') {
        return currentChannel.name;
      }

      if (currentChannel && (currentChannel.name === 'Group Channel' || !currentChannel.name)) {
        return currentChannel.members.map(function (member) {
          return member.nickname || stringSet.NO_NAME;
        }).join(', ');
      }

      return stringSet.NO_TITLE;
    }; // const


    var sdkStore = stores.sdkStore;
    var logger = config.logger;
    var sdk = sdkStore.sdk;
    var sdkInit = sdkStore.initialized;
    var scrollRef = React__default.useRef(null);

    var handleOnScroll = function handleOnScroll(e) {
      var scrollElement = e.target;
      var scrollTop = scrollElement.scrollTop,
          scrollHeight = scrollElement.scrollHeight,
          clientHeight = scrollElement.clientHeight;

      if (!hasMoreResult) {
        return;
      }

      if (scrollTop + clientHeight >= scrollHeight) {
        onScroll(function () {// after load more searched messages
        });
      }
    };

    useSetChannel$1({
      channelUrl: channelUrl,
      sdkInit: sdkInit
    }, {
      sdk: sdk,
      logger: logger,
      messageSearchDispathcer: messageSearchDispathcer
    });
    useGetSearchedMessages({
      currentChannel: currentChannel,
      channelUrl: channelUrl,
      searchString: searchString,
      messageSearchQuery: messageSearchQuery,
      onResultLoaded: onResultLoaded,
      retryCount: retryCount
    }, {
      sdk: sdk,
      logger: logger,
      messageSearchDispathcer: messageSearchDispathcer
    });
    var onScroll = useScrollCallback$1({
      currentMessageSearchQuery: currentMessageSearchQuery,
      hasMoreResult: hasMoreResult,
      onResultLoaded: onResultLoaded
    }, {
      logger: logger,
      messageSearchDispathcer: messageSearchDispathcer
    });

    var handleRetryToConnect = function handleRetryToConnect() {
      setRetryCount(retryCount + 1);
    };

    if (isInvalid && searchString) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: COMPONENT_CLASS_NAME$1
      }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes.WRONG,
        retryToConnect: handleRetryToConnect
      }));
    }

    if (loading && searchString) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: COMPONENT_CLASS_NAME$1
      }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes.SEARCHING
      }));
    }

    if (!searchString) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: COMPONENT_CLASS_NAME$1
      }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes.SEARCH_IN,
        searchInString: getChannelName()
      }));
    }

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: COMPONENT_CLASS_NAME$1,
      onScroll: handleOnScroll,
      ref: scrollRef
    }, allMessages.length > 0 ? allMessages.map(function (message) {
      if (renderSearchItem) {
        return renderSearchItem({
          message: message,
          onResultClick: onResultClick
        });
      }

      if (message.messageType === 'file') {
        return /*#__PURE__*/React__default__default.createElement(MessageSearchFileItem, {
          className: COMPONENT_CLASS_NAME$1 + "__message-search-item",
          message: message,
          key: message.messageId,
          selected: selectedMessageId === message.messageId,
          onClick: function onClick() {
            onResultClick(message);
            setSelectedMessageId(message.messageId);
          }
        });
      }

      return /*#__PURE__*/React__default__default.createElement(MessageSearchItem, {
        className: COMPONENT_CLASS_NAME$1 + "__message-search-item",
        message: message,
        key: message.messageId,
        selected: selectedMessageId === message.messageId,
        onClick: function onClick() {
          onResultClick(message);
          setSelectedMessageId(message.messageId);
        }
      });
    }) : /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.NO_RESULTS
    }));
  }

  var MessageSearch$1 = withSendbirdContext(MessageSearch);

  var COMPONENT_CLASS_NAME$2 = 'sendbird-message-search-pannel';

  function MessageSearchPannel(props) {
    var channelUrl = props.channelUrl,
        onResultClick = props.onResultClick,
        onCloseClick = props.onCloseClick;

    var _a = React__default.useState(''),
        searchString = _a[0],
        setSearchString = _a[1];

    var _b = React__default.useState(''),
        inputString = _b[0],
        setInputString = _b[1];

    var _c = React__default.useState(false),
        loading = _c[0],
        setLoading = _c[1];

    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    var timeout = null;
    React__default.useEffect(function () {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function () {
        setSearchString(inputString);
        setLoading(true);
        timeout = null;
      }, 500);
    }, [inputString]);

    var handleOnChangeInputString = function handleOnChangeInputString(e) {
      setInputString(e.target.value);
    };

    var handleOnResultLoaded = function handleOnResultLoaded() {
      setLoading(false);
    };

    var handleOnClickResetStringButton = function handleOnClickResetStringButton(e) {
      e.stopPropagation();
      setInputString('');
      setSearchString('');
    };

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: COMPONENT_CLASS_NAME$2
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: COMPONENT_CLASS_NAME$2 + "__header"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: COMPONENT_CLASS_NAME$2 + "__header__title",
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.SEARCH_IN_CHANNEL), /*#__PURE__*/React__default__default.createElement(IconButton, {
      className: COMPONENT_CLASS_NAME$2 + "__header__close-button",
      width: "32px",
      height: "32px",
      onClick: onCloseClick
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.CLOSE,
      fillColor: IconColors.ON_BACKGROUND_1,
      width: "22px",
      height: "22px"
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: COMPONENT_CLASS_NAME$2 + "__input"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: COMPONENT_CLASS_NAME$2 + "__input__container"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: COMPONENT_CLASS_NAME$2 + "__input__container__search-icon",
      type: IconTypes.SEARCH,
      fillColor: IconColors.ON_BACKGROUND_3,
      width: "24px",
      height: "24px"
    }), /*#__PURE__*/React__default__default.createElement("input", {
      className: COMPONENT_CLASS_NAME$2 + "__input__container__input-area",
      placeholder: stringSet.SEARCH,
      value: inputString,
      onChange: handleOnChangeInputString
    }), inputString && loading && /*#__PURE__*/React__default__default.createElement(Loader, {
      className: COMPONENT_CLASS_NAME$2 + "__input__container__spinner",
      width: "20px",
      height: "20px"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.SPINNER,
      fillColor: IconColors.PRIMARY,
      width: "20px",
      height: "20px"
    })), !loading && inputString && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: COMPONENT_CLASS_NAME$2 + "__input__container__reset-input-button",
      type: IconTypes.REMOVE,
      fillColor: IconColors.ON_BACKGROUND_3,
      width: "20px",
      height: "20px",
      onClick: handleOnClickResetStringButton
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: COMPONENT_CLASS_NAME$2 + "__message-search"
    }, /*#__PURE__*/React__default__default.createElement(MessageSearch$1, {
      channelUrl: channelUrl,
      searchString: searchString,
      onResultClick: onResultClick,
      onResultLoaded: handleOnResultLoaded
    })));
  }

  function App(props) {
    var appId = props.appId,
        userId = props.userId,
        accessToken = props.accessToken,
        theme = props.theme,
        userListQuery = props.userListQuery,
        nickname = props.nickname,
        profileUrl = props.profileUrl,
        _props$config = props.config,
        config = _props$config === void 0 ? {} : _props$config,
        useReaction = props.useReaction,
        useMessageGrouping = props.useMessageGrouping,
        colorSet = props.colorSet,
        stringSet = props.stringSet,
        allowProfileEdit = props.allowProfileEdit,
        disableUserProfile = props.disableUserProfile,
        renderHeader = props.renderHeader,
        renderUserProfile = props.renderUserProfile,
        showSearchIcon = props.showSearchIcon,
        onProfileEditSuccess = props.onProfileEditSuccess,
        imageCompression = props.imageCompression;

    var _useState = React__default.useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        currentChannelUrl = _useState2[0],
        setCurrentChannelUrl = _useState2[1];

    var _useState3 = React__default.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        showSettings = _useState4[0],
        setShowSettings = _useState4[1];

    var _useState5 = React__default.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        showSearch = _useState6[0],
        setShowSearch = _useState6[1];

    var _useState7 = React__default.useState(null),
        _useState8 = _slicedToArray(_useState7, 2),
        highlightedMessage = _useState8[0],
        setHighlightedMessage = _useState8[1];

    var _useState9 = React__default.useState(null),
        _useState10 = _slicedToArray(_useState9, 2),
        startingPoint = _useState10[0],
        setStartingPoint = _useState10[1];

    return /*#__PURE__*/React__default__default.createElement(Sendbird, {
      stringSet: stringSet,
      appId: appId,
      userId: userId,
      accessToken: accessToken,
      theme: theme,
      nickname: nickname,
      profileUrl: profileUrl,
      userListQuery: userListQuery,
      config: config,
      colorSet: colorSet,
      disableUserProfile: disableUserProfile,
      renderUserProfile: renderUserProfile,
      renderHeader: renderHeader,
      imageCompression: imageCompression
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-app__wrap"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-app__channellist-wrap"
    }, /*#__PURE__*/React__default__default.createElement(ChannelList$1, {
      allowProfileEdit: allowProfileEdit,
      renderUserProfile: renderUserProfile,
      renderHeader: renderHeader,
      onProfileEditSuccess: onProfileEditSuccess,
      onChannelSelect: function onChannelSelect(channel) {
        setStartingPoint(null);
        setHighlightedMessage(null);

        if (channel && channel.url) {
          setCurrentChannelUrl(channel.url);
        } else {
          setCurrentChannelUrl('');
        }
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "\n            ".concat(showSettings ? 'sendbird-app__conversation--settings-open' : '', "\n            ").concat(showSearch ? 'sendbird-app__conversation--search-open' : '', "\n            sendbird-app__conversation-wrap\n          ")
    }, /*#__PURE__*/React__default__default.createElement(Conversation, {
      channelUrl: currentChannelUrl,
      onChatHeaderActionClick: function onChatHeaderActionClick() {
        setShowSearch(false);
        setShowSettings(!showSettings);
      },
      onSearchClick: function onSearchClick() {
        setShowSettings(false);
        setShowSearch(!showSearch);
      },
      showSearchIcon: showSearchIcon,
      startingPoint: startingPoint,
      highlightedMessage: highlightedMessage,
      useReaction: useReaction,
      useMessageGrouping: useMessageGrouping
    })), showSettings && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-app__settingspanel-wrap"
    }, /*#__PURE__*/React__default__default.createElement(ChannelSettings$1, {
      className: "sendbird-channel-settings",
      channelUrl: currentChannelUrl,
      onCloseClick: function onCloseClick() {
        setShowSettings(false);
      }
    })), showSearch && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-app__searchpanel-wrap"
    }, /*#__PURE__*/React__default__default.createElement(MessageSearchPannel, {
      channelUrl: currentChannelUrl,
      onResultClick: function onResultClick(message) {
        if (message.messageId === highlightedMessage) {
          setHighlightedMessage(null);
          setTimeout(function () {
            setHighlightedMessage(message.messageId);
          });
        } else {
          setStartingPoint(message.createdAt);
          setHighlightedMessage(message.messageId);
        }
      },
      onCloseClick: function onCloseClick() {
        setShowSearch(false);
      }
    }))));
  }
  App.propTypes = {
    appId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    accessToken: PropTypes.string,
    theme: PropTypes.string,
    userListQuery: PropTypes.func,
    nickname: PropTypes.string,
    profileUrl: PropTypes.string,
    allowProfileEdit: PropTypes.bool,
    disableUserProfile: PropTypes.bool,
    renderUserProfile: PropTypes.func,
    renderHeader: PropTypes.func,
    onProfileEditSuccess: PropTypes.func,
    config: PropTypes.shape({
      // None Error Warning Info 'All/Debug'
      logLevel: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    }),
    useReaction: PropTypes.bool,
    showSearchIcon: PropTypes.bool,
    useMessageGrouping: PropTypes.bool,
    stringSet: PropTypes.objectOf(PropTypes.string),
    colorSet: PropTypes.objectOf(PropTypes.string),
    imageCompression: PropTypes.shape({
      compressionRate: PropTypes.number,
      resizingWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      resizingHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  };
  App.defaultProps = {
    accessToken: '',
    theme: 'light',
    nickname: '',
    profileUrl: '',
    userListQuery: null,
    allowProfileEdit: false,
    onProfileEditSuccess: null,
    disableUserProfile: false,
    showSearchIcon: false,
    renderUserProfile: null,
    renderHeader: null,
    config: {},
    useReaction: true,
    useMessageGrouping: true,
    stringSet: null,
    colorSet: null,
    imageCompression: {}
  };

  var getMessageCreatedAt$5 = function getMessageCreatedAt(message) {
    return format(message.createdAt, 'p');
  };
  var scrollIntoLast$1 = function scrollIntoLast(intialTry) {
    if (intialTry === void 0) {
      intialTry = 0;
    }

    var MAX_TRIES = 10;
    var currentTry = intialTry;

    if (currentTry > MAX_TRIES) {
      return;
    }

    try {
      var scrollDOM = document.querySelector('.sendbird-openchannel-conversation-scroll'); // eslint-disable-next-line no-multi-assign

      scrollDOM.scrollTop = scrollDOM.scrollHeight;
    } catch (error) {
      setTimeout(function () {
        scrollIntoLast(currentTry + 1);
      }, 500 * currentTry);
    }
  };
  var isSameGroup$1 = function isSameGroup(message, comparingMessage) {
    if (!message || !comparingMessage || message.messageType === 'admin' || comparingMessage.messageType === 'admin' || !message.sender || !comparingMessage.sender || !message.createdAt || !comparingMessage.createdAt || !message.sender.userId || !comparingMessage.sender.userId) {
      return false;
    }

    return message.sendingStatus === comparingMessage.sendingStatus && message.sender.userId === comparingMessage.sender.userId && getMessageCreatedAt$5(message) === getMessageCreatedAt$5(comparingMessage);
  };
  var compareMessagesForGrouping$1 = function compareMessagesForGrouping(prevMessage, currMessage, nextMessage) {
    return [isSameGroup$1(prevMessage, currMessage), isSameGroup$1(currMessage, nextMessage)];
  };
  var kFormatter$2 = function kFormatter(num) {
    if (Math.abs(num) > 999999) {
      return (Math.abs(num) / 1000000).toFixed(1) + "M";
    }

    if (Math.abs(num) > 999) {
      return (Math.abs(num) / 1000).toFixed(1) + "K";
    }

    return "" + num;
  };
  var isOperator$1 = function isOperator(openChannel, userId) {
    var operators = openChannel.operators;

    if (operators.map(function (operator) {
      return operator.userId;
    }).indexOf(userId) < 0) {
      return false;
    }

    return true;
  };
  var isDisabledBecauseFrozen$1 = function isDisabledBecauseFrozen(openChannel, userId) {
    var isFrozen = openChannel.isFrozen;
    return isFrozen && !isOperator$1(openChannel, userId);
  };
  var fetchWithListQuery = function fetchWithListQuery(listQuery, logger, eachQueryNextCallback) {
    var fetchList = function fetchList(query) {
      var hasNext = query.hasNext;

      if (hasNext) {
        query.next(function (error, users) {
          if (!error) {
            eachQueryNextCallback(users);
            fetchList(query);
          } else {
            logger.warning('OpenChannel | FetchUserList failed', error);
          }
        });
      } else {
        logger.info('OpenChannel | FetchUserList finished');
      }
    };

    logger.info('OpenChannel | FetchUserList start', listQuery);
    fetchList(listQuery);
  };
  var pxToNumber$2 = function pxToNumber(px) {
    if (typeof px === 'number') {
      return px;
    }

    if (typeof px === 'string') {
      var parsed = Number.parseFloat(px);

      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }

    return null;
  };

  var MessageInputWrapper$2 = function MessageInputWrapper(_a, ref) {
    var channel = _a.channel,
        user = _a.user,
        disabled = _a.disabled,
        onSendMessage = _a.onSendMessage,
        onFileUpload = _a.onFileUpload,
        renderMessageInput = _a.renderMessageInput;

    if (!channel) {
      return;
    }

    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    if (renderMessageInput) {
      return renderMessageInput({
        channel: channel,
        user: user,
        disabled: disabled
      });
    }

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-footer"
    }, /*#__PURE__*/React__default__default.createElement(MessageInput, {
      ref: ref,
      disabled: disabled,
      onSendMessage: onSendMessage,
      onFileUpload: onFileUpload,
      placeholder: disabled && stringSet.CHANNEL__MESSAGE_INPUT__PLACE_HOLDER__DISABLED // add disabled because of muted state

    }));
  };

  var MessageInputWrapper$1$1 = /*#__PURE__*/React__default__default.forwardRef(MessageInputWrapper$2);

  var FrozenNotification$1 = function FrozenNotification() {
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-frozen-channel-notification"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-frozen-channel-notification__text",
      type: LabelTypography.CAPTION_2
    }, stringSet.CHANNEL_FROZEN));
  };

  function OpenchannelConversationHeader(_a) {
    var coverImage = _a.coverImage,
        title = _a.title,
        subTitle = _a.subTitle,
        amIOperator = _a.amIOperator,
        onActionClick = _a.onActionClick;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-conversation-header"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-conversation-header__left"
    }, coverImage ? /*#__PURE__*/React__default__default.createElement(Avatar$1, {
      className: "sendbird-openchannel-conversation-header__left__cover-image",
      src: coverImage,
      alt: "channel cover image",
      width: "32px",
      height: "32px"
    }) : /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-conversation-header__left__cover-image--icon",
      style: {
        width: 32,
        height: 32
      }
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.CHANNELS,
      fillColor: IconColors.CONTENT,
      width: "18px",
      height: "18px"
    })), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-conversation-header__left__title",
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, title || stringSet.NO_TITLE), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-conversation-header__left__sub-title",
      type: LabelTypography.BODY_2,
      color: LabelColors.ONBACKGROUND_2
    }, subTitle || stringSet.NO_TITLE)), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-conversation-header__right"
    }, /*#__PURE__*/React__default__default.createElement(IconButton, {
      className: "sendbird-openchannel-conversation-header__right__trigger",
      width: "32px",
      height: "32px",
      onClick: onActionClick
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: amIOperator ? IconTypes.INFO : IconTypes.MEMBERS,
      fillColor: IconColors.PRIMARY,
      width: "24px",
      height: "24px"
    }))));
  }

  var copyToClipboard$2 = function copyToClipboard(text) {
    // @ts-ignore: Unreachable code error
    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      // @ts-ignore: Unreachable code error
      return window.clipboardData.setData('Text', text);
    }

    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      var textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.

      document.body.appendChild(textarea);
      textarea.select();

      try {
        return document.execCommand('copy'); // Security exception may be thrown by some browsers.
      } catch (ex) {
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }

    return false;
  };

  var OpenChannelMessageStatusTypes = {
    NONE: 'none',
    PENDING: 'pending',
    FAILED: 'failed',
    CANCELED: 'canceled',
    SUCCEEDED: 'succeeded'
  };
  var getSenderFromMessage = function getSenderFromMessage(message) {
    return message.sender || message._sender;
  };
  var checkIsSent = function checkIsSent(status) {
    return status === OpenChannelMessageStatusTypes.SUCCEEDED;
  };
  var checkIsPending = function checkIsPending(status) {
    return status === OpenChannelMessageStatusTypes.PENDING;
  };
  var checkIsFailed = function checkIsFailed(status) {
    return status === OpenChannelMessageStatusTypes.FAILED;
  };
  var checkIsByMe = function checkIsByMe(message, userId) {
    return getSenderFromMessage(message).userId === userId;
  };
  var isFineCopy = function isFineCopy(_a) {
    var message = _a.message;
    return message.messageType === 'user' && message.message.length > 0;
  };
  var isFineResend = function isFineResend(_a) {
    var message = _a.message,
        status = _a.status,
        userId = _a.userId;
    return checkIsByMe(message, userId) && checkIsFailed(status) && message.isResendable && message.isResendable();
  };
  var isFineEdit = function isFineEdit(_a) {
    var message = _a.message,
        status = _a.status,
        userId = _a.userId;
    return checkIsByMe(message, userId) && checkIsSent(status);
  };
  var isFineDelete = function isFineDelete(_a) {
    var message = _a.message,
        userId = _a.userId;
    return checkIsByMe(message, userId);
  };
  var showMenuTrigger = function showMenuTrigger(props) {
    var message = props.message,
        status = props.status,
        userId = props.userId;

    if (message.messageType === 'user') {
      return isFineDelete({
        message: message,
        status: status,
        userId: userId
      }) || isFineEdit({
        message: message,
        status: status,
        userId: userId
      }) || isFineCopy({
        message: message,
        status: status,
        userId: userId
      }) || isFineResend({
        message: message,
        status: status,
        userId: userId
      });
    } else {
      return isFineDelete({
        message: message,
        status: status,
        userId: userId
      }) || isFineResend({
        message: message,
        status: status,
        userId: userId
      });
    }
  };

  function OpenchannelUserMessage(_a) {
    var className = _a.className,
        message = _a.message,
        userId = _a.userId,
        resendMessage = _a.resendMessage,
        disabled = _a.disabled,
        showEdit = _a.showEdit,
        showRemove = _a.showRemove,
        chainTop = _a.chainTop,
        status = _a.status;

    if (!message || message.messageType !== 'user') {
      return null;
    } // hooks


    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var _b = React__default.useContext(UserProfileContext),
        disableUserProfile = _b.disableUserProfile,
        renderUserProfile = _b.renderUserProfile;

    var messageRef = React__default.useRef(null);
    var avatarRef = React__default.useRef(null);
    var contextMenuRef = React__default.useRef(null);

    var _c = React__default.useState({}),
        contextStyle = _c[0],
        setContextStyle = _c[1]; // consts


    var isByMe = checkIsByMe(message, userId);
    var isPending = checkIsPending(status);
    var isFailed = checkIsFailed(status);
    var sender = getSenderFromMessage(message);
    var MemoizedMessageText = React__default.useMemo(function () {
      return function () {
        var splitMessage = message.message.split(/\r/);
        var matchedMessage = splitMessage.map(function (word) {
          return word !== '' ? word : /*#__PURE__*/React__default__default.createElement("br", null);
        });

        if (message.updatedAt > 0) {
          matchedMessage.push( /*#__PURE__*/React__default__default.createElement(Label, {
            key: uuidv4(),
            type: LabelTypography.BODY_1,
            color: LabelColors.ONBACKGROUND_2,
            calssName: "sendbird-openchannel-user-message-word"
          }, " " + stringSet.MESSAGE_EDITED + " "));
        }

        return matchedMessage;
      };
    }, [message, message.updatedAt]); // place context menu top depending clientHeight of message component

    React__default.useEffect(function () {
      var _a;

      if (((_a = messageRef === null || messageRef === void 0 ? void 0 : messageRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) > 36) {
        setContextStyle({
          top: '8px '
        });
      } else {
        setContextStyle({
          top: '2px'
        });
      }
    }, [window.innerWidth]);
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className]), ['sendbird-openchannel-user-message']).join(' '),
      ref: messageRef
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-user-message__left"
    }, !chainTop && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          className: "sendbird-openchannel-user-message__left__avatar",
          src: sender.profileUrl || '',
          ref: avatarRef,
          width: "28px",
          height: "28px",
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          }
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: avatarRef,
          parentContainRef: avatarRef,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: sender,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: sender,
          onSuccess: closeDropdown,
          disableMessaging: true
        }));
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-user-message__right"
    }, !chainTop && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-user-message__right__top"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-user-message__right__top__sender-name",
      type: LabelTypography.CAPTION_2,
      color: isByMe ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2
    }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-user-message__right__top__sent-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_3
    }, message.createdAt && format(message.createdAt, 'p'))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-user-message__right__bottom"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-user-message__right__bottom__message",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_1
    }, MemoizedMessageText())), (isPending || isFailed) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-user-message__right__tail"
    }, isPending && /*#__PURE__*/React__default__default.createElement(Loader, {
      width: "16px",
      height: "16px"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-user-message__right__tail__pending",
      type: IconTypes.SPINNER,
      fillColor: IconColors.PRIMARY,
      width: "16px",
      height: "16px"
    })), isFailed && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-user-message__right__tail__failed",
      type: IconTypes.ERROR,
      width: "16px",
      height: "16px"
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-user-message__context-menu",
      ref: contextMenuRef,
      style: contextStyle
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return showMenuTrigger({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(IconButton, {
          className: "sendbird-openchannel-user-message__context-menu--icon",
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: contextMenuRef,
          parentContainRef: contextMenuRef,
          closeDropdown: closeDropdown,
          openLeft: true
        }, isFineCopy({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-openchannel-user-message__context-menu__copy",
          onClick: function onClick() {
            copyToClipboard$2(message.message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__COPY), isFineEdit({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-openchannel-user-message__context-menu__edit",
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showEdit(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT), isFineResend({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-openchannel-user-message__context-menu__resend",
          onClick: function onClick() {
            resendMessage(message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), isFineDelete({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-openchannel-user-message__context-menu__delete",
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showRemove(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
      }
    })));
  }

  function OpenChannelAdminMessage(_a) {
    var className = _a.className,
        message = _a.message;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className]), ['sendbird-openchannel-admin-message']).join(' ')
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-admin-message__text",
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, message.message || ''));
  }

  var URL_REG$1 = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
  var createUrlTester$1 = function createUrlTester(regexp) {
    return function (text) {
      return regexp.test(text);
    };
  };
  var checkOGIsEnalbed$1 = function checkOGIsEnalbed(message) {
    var ogMetaData = message.ogMetaData;

    if (!ogMetaData) {
      return false;
    }

    var url = ogMetaData.url;

    if (!url) {
      return false;
    }

    return true;
  };

  function OpenchannelOGMessage(_a) {
    var message = _a.message,
        className = _a.className,
        disabled = _a.disabled,
        showEdit = _a.showEdit,
        showRemove = _a.showRemove,
        resendMessage = _a.resendMessage,
        chainTop = _a.chainTop,
        status = _a.status,
        userId = _a.userId;

    if (!message || message.messageType !== 'user') {
      return null;
    }

    var ogMetaData = message.ogMetaData;
    var defaultImage = ogMetaData.defaultImage;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var _b = React__default.useContext(UserProfileContext),
        disableUserProfile = _b.disableUserProfile,
        renderUserProfile = _b.renderUserProfile;

    var _c = React__default.useState({}),
        contextStyle = _c[0],
        setContextStyle = _c[1];

    var messageComponentRef = React__default.useRef(null);
    var contextMenuRef = React__default.useRef(null);
    var avatarRef = React__default.useRef(null);
    var isUrl = createUrlTester$1(URL_REG$1);
    var isByMe = checkIsByMe(message, userId);
    var isPending = checkIsPending(status);
    var isFailed = checkIsFailed(status);
    var sender = getSenderFromMessage(message);
    var MemoizedMessageText = React__default.useMemo(function () {
      return function () {
        var wordClassName = 'sendbird-openchannel-og-message--word';
        var splitMessage = message.message.split(' ');
        var matchedMessage = splitMessage.map(function (word) {
          return isUrl(word) ? /*#__PURE__*/React__default__default.createElement(LinkLabel, {
            key: uuidv4(),
            className: [wordClassName, 'sendbird-openchannel-og-message--word--link'],
            src: word,
            type: LabelTypography.BODY_1,
            color: LabelColors.PRIMARY
          }, word) : /*#__PURE__*/React__default__default.createElement(Label, {
            key: uuidv4(),
            className: wordClassName,
            type: LabelTypography.BODY_1,
            color: LabelColors.ONBACKGROUND_1
          }, word);
        });

        if (message.updatedAt > 0) {
          matchedMessage.push( /*#__PURE__*/React__default__default.createElement(Label, {
            key: uuidv4(),
            className: wordClassName,
            type: LabelTypography.BODY_1,
            color: LabelColors.ONBACKGROUND_2
          }, stringSet.MESSAGE_EDITED));
        }

        return matchedMessage;
      };
    }, [message, message.updatedAt]);

    var openLink = function openLink() {
      if (checkOGIsEnalbed$1(message)) {
        var url = ogMetaData.url;
        window.open(url);
      }
    }; // place conxt menu top depending clientHeight of message component


    React__default.useEffect(function () {
      var _a;

      if (((_a = messageComponentRef === null || messageComponentRef === void 0 ? void 0 : messageComponentRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) > 36) {
        setContextStyle({
          top: '8px '
        });
      } else {
        setContextStyle({
          top: '2px'
        });
      }
    }, [window.innerWidth]);
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className]), ['sendbird-openchannel-og-message']).join(' '),
      ref: messageComponentRef
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__top"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__top__left"
    }, !chainTop && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          className: "sendbird-openchannel-og-message__top__left__avatar",
          src: sender.profileUrl || '',
          ref: avatarRef,
          width: "28px",
          height: "28px",
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          }
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: avatarRef,
          parentContainRef: avatarRef,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: sender,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: sender,
          onSuccess: closeDropdown,
          disableMessaging: true
        }));
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__top__right"
    }, !chainTop && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__top__right__title"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-og-message__top__right__title__sender-name",
      type: LabelTypography.CAPTION_2,
      color: isByMe ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2
    }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-og-message__top__right__title__sent-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_3
    }, message.createdAt && format(message.createdAt, 'p'))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__top__right__description"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-og-message__top__right__description__message",
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_1
    }, MemoizedMessageText()))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__top__context-menu",
      ref: contextMenuRef,
      style: contextStyle
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return showMenuTrigger({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(IconButton, {
          className: "sendbird-openchannel-og-message__top__context-menu--icon",
          width: "32px",
          height: "32px",
          onClick: function onClick() {
            toggleDropdown();
          }
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: contextMenuRef,
          parentContainRef: contextMenuRef,
          closeDropdown: closeDropdown,
          openLeft: true
        }, isFineCopy({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-openchannel-og-message__top__context-menu__copy",
          onClick: function onClick() {
            copyToClipboard$2(message.message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__COPY), isFineEdit({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-openchannel-og-message__top__context-menu__edit",
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showEdit(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT), isFineResend({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-openchannel-og-message__top__context-menu__resend",
          onClick: function onClick() {
            resendMessage(message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), isFineDelete({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          className: "sendbird-openchannel-og-message__top__context-menu__delete",
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showRemove(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
      }
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__bottom"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__bottom__og-tag"
    }, ogMetaData.url && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-og-message__bottom__og-tag__url",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_2
    }, ogMetaData.url), ogMetaData.title && /*#__PURE__*/React__default__default.createElement(LinkLabel, {
      className: "sendbird-openchannel-og-message__bottom__og-tag__title",
      src: ogMetaData.url,
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.PRIMARY
    }, ogMetaData.title), ogMetaData.description && /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-og-message__bottom__og-tag__description",
      type: LabelTypography.BODY_2,
      color: LabelColors.ONBACKGROUND_1
    }, ogMetaData.description), ogMetaData.url && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail",
      role: "button",
      onClick: openLink,
      onKeyDown: openLink,
      tabIndex: 0
    }, defaultImage && /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail__image",
      url: defaultImage.url || '',
      alt: defaultImage.alt || '',
      height: "189px",
      defaultComponent: /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail__image--placeholder"
      }, /*#__PURE__*/React__default__default.createElement(Icon, {
        type: IconTypes.THUMBNAIL_NONE,
        width: "56px",
        height: "56px"
      }))
    }))), (isPending || isFailed) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-og-message__top__right__tail"
    }, isPending && /*#__PURE__*/React__default__default.createElement(Loader, {
      width: "16px",
      height: "16px"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-og-message__top__right__tail__pending",
      type: IconTypes.SPINNER,
      fillColor: IconColors.PRIMARY,
      width: "16px",
      height: "16px"
    })), isFailed && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-og-message__top__right__tail__failed",
      type: IconTypes.ERROR,
      width: "16px",
      height: "16px"
    }))));
  }

  var SUPPORTING_TYPES = {
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO',
    UNSUPPORTED: 'UNSUPPORTED'
  };
  var SUPPORTED_MIMES$1 = {
    IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
    VIDEO: ['video/mpeg', 'video/ogg', 'video/webm', 'video/mp4']
  };
  var getSupportingFileType = function getSupportingFileType(type) {
    if (SUPPORTED_MIMES$1.IMAGE.indexOf(type) >= 0) {
      return SUPPORTING_TYPES.IMAGE;
    }

    if (SUPPORTED_MIMES$1.VIDEO.indexOf(type) >= 0) {
      return SUPPORTING_TYPES.VIDEO;
    }

    return SUPPORTING_TYPES.UNSUPPORTED;
  };

  function OpenchannelThumbnailMessage(_a) {
    var _b;

    var className = _a.className,
        message = _a.message,
        disabled = _a.disabled,
        userId = _a.userId,
        status = _a.status,
        chainTop = _a.chainTop,
        _onClick = _a.onClick,
        showRemove = _a.showRemove,
        resendMessage = _a.resendMessage;
    var type = message.type,
        url = message.url,
        localUrl = message.localUrl,
        thumbnails = message.thumbnails;
    var thumbnailUrl = thumbnails && thumbnails.length > 0 && thumbnails[0].url || null;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var _c = React__default.useContext(UserProfileContext),
        disableUserProfile = _c.disableUserProfile,
        renderUserProfile = _c.renderUserProfile;

    var _d = React__default.useState(360),
        messageWidth = _d[0],
        setMessageWidth = _d[1];

    var messageRef = React__default.useRef(null);
    var contextMenuRef = React__default.useRef(null);
    var avatarRef = React__default.useRef(null);
    var memorizedThumbnailPlaceHolder = React__default.useMemo(function () {
      return function (type) {
        return function (_a) {
          var style = _a.style;
          return (
            /*#__PURE__*/
            // eslint-disable-line
            React__default__default.createElement("div", {
              style: style
            }, /*#__PURE__*/React__default__default.createElement(Icon, {
              type: type,
              fillColor: IconColors.ON_BACKGROUND_2,
              width: "56px",
              height: "56px"
            }))
          );
        };
      };
    }, []);
    var isByMe = checkIsByMe(message, userId);
    var isMessageSent = checkIsSent(status);
    var isPending = checkIsPending(status);
    var isFailed = checkIsFailed(status);
    var sender = getSenderFromMessage(message);
    React__default.useEffect(function () {
      var _a;

      var thumbnailWidth = ((_a = messageRef === null || messageRef === void 0 ? void 0 : messageRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) - 80;
      setMessageWidth(thumbnailWidth > 360 ? 360 : thumbnailWidth);
    }, []);
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className]), ['sendbird-openchannel-thumbnail-message']).join(' '),
      ref: messageRef
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-thumbnail-message__left"
    }, !chainTop && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          className: "sendbird-openchannel-thumbnail-message__left__avatar",
          src: sender.profileUrl || '',
          ref: avatarRef,
          width: "28px",
          height: "28px",
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          }
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: avatarRef,
          parentContainRef: avatarRef,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: sender,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: sender,
          onSuccess: closeDropdown,
          disableMessaging: true
        }));
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-thumbnail-message__right"
    }, !chainTop && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-thumbnail-message__right__title"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-thumbnail-message__right__title__sender-name",
      type: LabelTypography.CAPTION_2,
      color: isByMe ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2
    }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-thumbnail-message__right__title__sent-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_3
    }, message.createdAt && format(message.createdAt, 'p'))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-thumbnail-message__right__body"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap",
      role: "button",
      onClick: function onClick() {
        if (isMessageSent) {
          _onClick(true);
        }
      },
      onKeyDown: function onKeyDown() {
        if (isMessageSent) {
          _onClick(true);
        }
      },
      tabIndex: 0
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap__overlay"
    }), (_b = {}, _b[SUPPORTING_TYPES.VIDEO] = url || localUrl ? /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video"
    }, thumbnailUrl ? /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video",
      url: thumbnailUrl,
      width: messageWidth,
      height: "270px",
      alt: "image",
      placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PLAY)
    }) : /*#__PURE__*/React__default__default.createElement("video", {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video__video"
    }, /*#__PURE__*/React__default__default.createElement("source", {
      src: url || localUrl,
      type: type
    })), /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video__icon",
      type: IconTypes.PLAY,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "56px",
      height: "56px"
    })) : /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video--icon",
      type: IconTypes.PHOTO,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "56px",
      height: "56px"
    }), _b[SUPPORTING_TYPES.IMAGE] = url || localUrl ? /*#__PURE__*/React__default__default.createElement(ImageRenderer, {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap__image",
      url: thumbnailUrl || url || localUrl,
      alt: "image",
      width: messageWidth,
      height: "270px",
      placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PHOTO)
    }) : /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap__image--icon",
      type: IconTypes.PHOTO,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "56px",
      height: "56px"
    }), _b[SUPPORTING_TYPES.UNSUPPORTED] = /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-thumbnail-message__right__body__wrap__unknown",
      type: IconTypes.PHOTO,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "56px",
      height: "56px"
    }), _b)[getSupportingFileType(type)])), (isPending || isFailed) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-thumbnail-message__right__tail"
    }, isPending && /*#__PURE__*/React__default__default.createElement(Loader, {
      width: "16px",
      height: "16px"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-thumbnail-message__right__tail__pending",
      type: IconTypes.SPINNER,
      fillColor: IconColors.PRIMARY,
      width: "16px",
      height: "16px"
    })), isFailed && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-thumbnail-message__right__tail__failed",
      type: IconTypes.ERROR,
      width: "16px",
      height: "16px"
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-thumbnail-message__context-menu",
      ref: contextMenuRef
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return showMenuTrigger({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(IconButton, {
          className: "sendbird-openchannel-thumbnail-message__context-menu--icon",
          width: "32px",
          height: "32px",
          onClick: toggleDropdown
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          fillColor: IconColors.CONTENT_INVERSE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: contextMenuRef,
          parentContainRef: contextMenuRef,
          closeDropdown: closeDropdown,
          openLeft: true
        }, isFineResend({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            resendMessage(message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), isFineDelete({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showRemove(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
      }
    })));
  }

  var checkFileType$1 = function checkFileType(fileUrl) {
    var audioFile = /(\.mp3)$/i;
    var gifFile = /(\.gif)$/i;

    if (audioFile.test(fileUrl)) {
      return IconTypes.FILE_AUDIO;
    }

    if (gifFile.test(fileUrl)) {
      return IconTypes.GIF;
    }

    return IconTypes.FILE_DOCUMENT;
  };
  var truncate$2 = function truncate(fullStr, strLen) {
    if (fullStr === null || fullStr === undefined) return '';
    if (fullStr.length <= strLen) return fullStr;
    var separator = '...';
    var sepLen = separator.length;
    var charsToShow = strLen - sepLen;
    var frontChars = Math.ceil(charsToShow / 2);
    var backChars = Math.floor(charsToShow / 2);
    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
  };

  function OpenchannelFileMessage(_a) {
    var className = _a.className,
        message = _a.message,
        userId = _a.userId,
        disabled = _a.disabled,
        chainTop = _a.chainTop,
        status = _a.status,
        showRemove = _a.showRemove,
        resendMessage = _a.resendMessage;
    var contextMenuRef = React__default.useRef(null);
    var avatarRef = React__default.useRef(null);
    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var _b = React__default.useContext(UserProfileContext),
        disableUserProfile = _b.disableUserProfile,
        renderUserProfile = _b.renderUserProfile;

    var openFileUrl = function openFileUrl() {
      window.open(message.url);
    };

    var isByMe = checkIsByMe(message, userId);
    var isPending = checkIsPending(status);
    var isFailed = checkIsFailed(status);
    var sender = getSenderFromMessage(message);
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className]), ['sendbird-openchannel-file-message']).join(' ')
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-file-message__left"
    }, !chainTop && /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          className: "sendbird-openchannel-file-message__left__avatar",
          src: sender.profileUrl || '',
          ref: avatarRef,
          width: "28px",
          height: "28px",
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          }
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: avatarRef,
          parentContainRef: avatarRef,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: sender,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          user: sender,
          onSuccess: closeDropdown,
          disableMessaging: true
        }));
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-file-message__right"
    }, !chainTop && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-file-message__right__title"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-file-message__right__title__sender-name",
      type: LabelTypography.CAPTION_2,
      color: isByMe ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2
    }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-file-message__right__title__sent-at",
      type: LabelTypography.CAPTION_3,
      color: LabelColors.ONBACKGROUND_3
    }, message.createdAt && format(message.createdAt, 'p'))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-file-message__right__body"
    }, checkFileType$1(message.url) && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-file-message__right__body__icon",
      type: checkFileType$1(message.url),
      fillColor: IconColors.PRIMARY,
      width: "48px",
      height: "48px"
    }), /*#__PURE__*/React__default__default.createElement(TextButton, {
      className: "sendbird-openchannel-file-message__right__body__file-name",
      onClick: openFileUrl
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.BODY_1,
      color: LabelColors.ONBACKGROUND_1
    }, truncate$2(message.name || message.url, 40)))), (isPending || isFailed) && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-file-message__right__tail"
    }, isPending && /*#__PURE__*/React__default__default.createElement(Loader, {
      width: "16px",
      height: "16px"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-file-message__right__tail__pending",
      type: IconTypes.SPINNER,
      fillColor: IconColors.PRIMARY,
      width: "16px",
      height: "16px"
    })), isFailed && /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-file-message__right__tail__failed",
      type: IconTypes.ERROR,
      width: "16px",
      height: "16px"
    }))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-file-message__context-menu",
      ref: contextMenuRef
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return showMenuTrigger({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(IconButton, {
          className: "sendbird-openchannel-file-message__context-menu__icon",
          width: "32px",
          height: "32px",
          onClick: toggleDropdown
        }, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MORE,
          width: "24px",
          height: "24px"
        }));
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          parentRef: contextMenuRef,
          parentContainRef: contextMenuRef,
          closeDropdown: closeDropdown,
          openLeft: true
        }, isFineResend({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            resendMessage(message);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), isFineDelete({
          message: message,
          userId: userId,
          status: status
        }) && /*#__PURE__*/React__default__default.createElement(MenuItem, {
          onClick: function onClick() {
            if (disabled) {
              return;
            }

            showRemove(true);
            closeDropdown();
          }
        }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
      }
    })));
  }

  function RemoveMessageModal(_a) {
    var onCloseModal = _a.onCloseModal,
        onDeleteMessage = _a.onDeleteMessage;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement(Modal, {
      onCancel: onCloseModal,
      onSubmit: onDeleteMessage,
      submitText: "Delete",
      titleText: stringSet.MODAL__DELETE_MESSAGE__TITLE
    });
  }

  var MessageTypes$1 = {
    ADMIN: 'ADMIN',
    USER: 'USER',
    FILE: 'FILE',
    THUMBNAIL: 'THUMBNAIL',
    OG: 'OG',
    UNKNOWN: 'UNKNOWN'
  };
  var SendingMessageStatus$1 = {
    NONE: 'none',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed',
    PENDING: 'pending'
  };
  var getMessageType$1 = function getMessageType(message) {
    if (message.isUserMessage && message.isUserMessage() || message.messageType === 'user') {
      return message.ogMetaData ? MessageTypes$1.OG : MessageTypes$1.USER;
    }

    if (message.isAdminMessage && message.isAdminMessage()) {
      return MessageTypes$1.ADMIN;
    }

    if (message.messageType === 'file') {
      return isImage(message.type) || isVideo(message.type) ? MessageTypes$1.THUMBNAIL : MessageTypes$1.FILE;
    }

    return MessageTypes$1.UNKNOWN;
  };

  function MessageHoc$1(_a) {
    var _b;

    var message = _a.message,
        userId = _a.userId,
        disabled = _a.disabled,
        editDisabled = _a.editDisabled,
        hasSeperator = _a.hasSeperator,
        channel = _a.channel,
        renderCustomMessage = _a.renderCustomMessage,
        deleteMessage = _a.deleteMessage,
        updateMessage = _a.updateMessage,
        resendMessage = _a.resendMessage,
        status = _a.status,
        chainTop = _a.chainTop,
        chainBottom = _a.chainBottom;
    var sender = null;

    if (message.messageType !== 'admin') {
      sender = message.sender;
    }

    var RenderedMessage = React__default.useMemo(function () {
      if (renderCustomMessage) {
        return renderCustomMessage(message, channel, chainTop, chainBottom);
      }

      return null;
    }, [message, renderCustomMessage]);

    var _c = React__default.useState(false),
        showEdit = _c[0],
        setShowEdit = _c[1];

    var _d = React__default.useState(false),
        showRemove = _d[0],
        setShowRemove = _d[1];

    var _e = React__default.useState(false),
        showFileViewer = _e[0],
        setShowFileViewer = _e[1];

    var editMessageInputRef = React__default.useRef(null);
    var isByMe = false;

    if (sender && message.messageType !== 'admin') {
      // pending and failed messages are by me
      isByMe = userId === sender.userId || message.requestState === SendingMessageStatus$1.PENDING || message.requestState === SendingMessageStatus$1.FAILED;
    }

    if (RenderedMessage) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: "sendbird-msg-hoc sendbird-msg--scroll-ref"
      }, /*#__PURE__*/React__default__default.createElement(RenderedMessage, {
        message: message
      }));
    }

    if (message.messageType === 'user' && showEdit) {
      return /*#__PURE__*/React__default__default.createElement(MessageInput, {
        isEdit: true,
        disabled: editDisabled,
        ref: editMessageInputRef,
        name: message.messageId,
        onSendMessage: updateMessage,
        onCancelEdit: function onCancelEdit() {
          setShowEdit(false);
        },
        value: message.message
      });
    }

    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-msg-hoc sendbird-msg--scroll-ref"
    }, hasSeperator && /*#__PURE__*/React__default__default.createElement(DateSeparator, null, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, format(message.createdAt, 'MMMM dd, yyyy'))), (_b = {}, _b[MessageTypes$1.ADMIN] = function () {
      if (message.messageType === 'admin') {
        return /*#__PURE__*/React__default__default.createElement(OpenChannelAdminMessage, {
          message: message
        });
      }
    }(), _b[MessageTypes$1.FILE] = function () {
      if (message.messageType === 'file') {
        return /*#__PURE__*/React__default__default.createElement(OpenchannelFileMessage, {
          message: message,
          disabled: disabled,
          userId: userId,
          showRemove: setShowRemove,
          resendMessage: resendMessage,
          status: status,
          chainTop: chainTop,
          chainBottom: chainBottom
        });
      }

      return;
    }(), _b[MessageTypes$1.OG] = function () {
      if (message.messageType === 'user') {
        return /*#__PURE__*/React__default__default.createElement(OpenchannelOGMessage, {
          message: message,
          status: status,
          userId: userId,
          showEdit: setShowEdit,
          disabled: disabled,
          showRemove: setShowRemove,
          resendMessage: resendMessage,
          chainTop: chainTop,
          chainBottom: chainBottom
        });
      }

      return;
    }(), _b[MessageTypes$1.THUMBNAIL] = function () {
      if (message.messageType === 'file') {
        return /*#__PURE__*/React__default__default.createElement(OpenchannelThumbnailMessage, {
          message: message,
          disabled: disabled,
          userId: userId,
          showRemove: setShowRemove,
          resendMessage: resendMessage,
          onClick: setShowFileViewer,
          status: status,
          chainTop: chainTop,
          chainBottom: chainBottom
        });
      }

      return;
    }(), _b[MessageTypes$1.USER] = function () {
      if (message.messageType === 'user') {
        return /*#__PURE__*/React__default__default.createElement(OpenchannelUserMessage, {
          message: message,
          userId: userId,
          disabled: disabled,
          showEdit: setShowEdit,
          showRemove: setShowRemove,
          resendMessage: resendMessage,
          status: status,
          chainTop: chainTop,
          chainBottom: chainBottom
        });
      }

      return;
    }(), _b[MessageTypes$1.UNKNOWN] = function () {
      return; // return (
      //   <OpenChannelUnknownMessage message={message} />
      // );
    }(), _b)[getMessageType$1(message)], showRemove && /*#__PURE__*/React__default__default.createElement(RemoveMessageModal, {
      onCloseModal: function onCloseModal() {
        return setShowRemove(false);
      },
      onDeleteMessage: function onDeleteMessage() {
        if (message.messageType !== 'admin') {
          deleteMessage(message);
        }
      }
    }), showFileViewer && message.messageType === 'file' && /*#__PURE__*/React__default__default.createElement(FileViewer, {
      onClose: function onClose() {
        return setShowFileViewer(false);
      },
      message: message,
      onDelete: function onDelete() {
        return deleteMessage(message);
      },
      isByMe: isByMe
    }));
  }

  function OpenchannelConversationScroll(_a, ref) {
    var _b = _a.useMessageGrouping,
        useMessageGrouping = _b === void 0 ? true : _b,
        openchannel = _a.openchannel,
        user = _a.user,
        allMessages = _a.allMessages,
        _c = _a.isOnline,
        isOnline = _c === void 0 ? true : _c,
        hasMore = _a.hasMore,
        onScroll = _a.onScroll,
        renderCustomMessage = _a.renderCustomMessage,
        updateMessage = _a.updateMessage,
        deleteMessage = _a.deleteMessage,
        resendMessage = _a.resendMessage;
    var scrollRef = ref || React__default.useRef(null);

    var _d = React__default.useState(false),
        showScrollDownButton = _d[0],
        setShowScrollDownButton = _d[1];

    var handleOnScroll = function handleOnScroll(e) {
      var element = e.target;
      var scrollTop = element.scrollTop,
          scrollHeight = element.scrollHeight,
          clientHeight = element.clientHeight;

      if (scrollHeight > scrollTop + clientHeight && window.navigator.userAgent.indexOf('MSIE ') < 0 // don't show button in IE
      ) {
          setShowScrollDownButton(true);
        } else {
        setShowScrollDownButton(false);
      }

      if (!hasMore) {
        return;
      }

      if (scrollTop === 0) {
        var nodes = scrollRef.current.querySelectorAll('.sendbird-msg--scroll-ref');
        var first_1 = nodes && nodes[0];
        onScroll(function () {
          try {
            first_1.scrollIntoView();
          } catch (error) {}
        });
      }
    };

    var scrollToBottom = function scrollToBottom() {
      if (scrollRef && scrollRef.current) {
        scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
        setShowScrollDownButton(false);
      }
    };

    var hasMessage = React__default.useMemo(function () {
      return allMessages.length > 0;
    }, [allMessages.length]);
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-conversation-scroll",
      onScroll: handleOnScroll,
      ref: scrollRef
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-conversation-scroll__container"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-conversation-scroll__container__padding"
    }), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-conversation-scroll__container__item-container" + (hasMessage ? '' : '--no-messages')
    }, hasMessage ? allMessages.map(function (message, index) {
      var status;

      if (message.messageType !== 'admin') {
        status = message.sendingStatus;
      }

      var previousMessage = allMessages[index - 1];
      var nextMessage = allMessages[index - 1];
      var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
      var currentCreatedAt = message.createdAt; // https://stackoverflow.com/a/41855608

      var hasSeperator = !(previousMessageCreatedAt && isSameDay(currentCreatedAt, previousMessageCreatedAt));

      var _a = useMessageGrouping ? compareMessagesForGrouping$1(previousMessage, message, nextMessage) : [false, false],
          chainTop = _a[0],
          chainBottom = _a[1];

      return /*#__PURE__*/React__default__default.createElement(MessageHoc$1, {
        renderCustomMessage: renderCustomMessage,
        channel: openchannel,
        key: message.messageId,
        message: message,
        status: status,
        userId: user.userId,
        disabled: !isOnline,
        editDisabled: openchannel.isFrozen,
        hasSeperator: hasSeperator,
        chainTop: chainTop,
        chainBottom: chainBottom,
        deleteMessage: deleteMessage,
        updateMessage: updateMessage,
        resendMessage: resendMessage
      });
    }) : /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
      className: "sendbird-openchannel-conversation-scroll__container__place-holder",
      type: PlaceHolderTypes.NO_MESSAGES
    })), showScrollDownButton && /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button",
      onClick: scrollToBottom,
      onKeyDown: scrollToBottom,
      tabIndex: 0,
      role: "button"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      width: "24px",
      height: "24px",
      type: IconTypes.CHEVRON_DOWN,
      fillColor: IconColors.CONTENT
    }))));
  }

  var OpenchannelConversationScroll$1 = /*#__PURE__*/React__default__default.forwardRef(OpenchannelConversationScroll);

  var SET_CURRENT_CHANNEL$3 = 'SET_CURRENT_CHANNEL';
  var SET_CHANNEL_INVALID$1 = 'SET_CHANNEL_INVALID';
  var RESET_MESSAGES$1 = 'RESET_MESSAGES';
  var GET_PREV_MESSAGES_START$1 = 'GET_PREV_MESSAGES_START';
  var GET_PREV_MESSAGES_SUCESS$1 = 'GET_PREV_MESSAGES_SUCESS';
  var GET_PREV_MESSAGES_FAIL = 'GET_PREV_MESSAGES_FAIL';
  var SENDING_MESSAGE_FAILED = 'SENDING_MESSAGE_FAILED';
  var SENDING_MESSAGE_SUCCEEDED = 'SENDING_MESSAGE_SUCCEEDED';
  var SENDING_MESSAGE_START = 'SENDING_MESSAGE_START';
  var RESENDING_MESSAGE_START = 'RESENDING_MESSAGE_START';
  var FETCH_PARTICIPANT_LIST = 'FETCH_PARTICIPANT_LIST';
  var FETCH_BANNED_USER_LIST = 'FETCH_BANNED_USER_LIST';
  var FETCH_MUTED_USER_LIST = 'FETCH_MUTED_USER_LIST'; // event handlers

  var ON_MESSAGE_RECEIVED$1 = 'ON_MESSAGE_RECEIVED';
  var ON_MESSAGE_UPDATED$1 = 'ON_MESSAGE_UPDATED';
  var ON_MESSAGE_DELETED$1 = 'ON_MESSAGE_DELETED';
  var ON_MESSAGE_DELETED_BY_REQ_ID$1 = 'ON_MESSAGE_DELETED_BY_REQ_ID';
  var ON_OPERATOR_UPDATED = 'ON_OPERATOR_UPDATED';
  var ON_USER_ENTERED = 'ON_USER_ENTERED';
  var ON_USER_EXITED = 'ON_USER_EXITED';
  var ON_USER_MUTED = 'ON_USER_MUTED';
  var ON_USER_UNMUTED = 'ON_USER_UNMUTED';
  var ON_USER_BANNED = 'ON_USER_BANNED';
  var ON_USER_UNBANNED = 'ON_USER_UNBANNED';
  var ON_CHANNEL_FROZEN$1 = 'ON_CHANNEL_FROZEN';
  var ON_CHANNEL_UNFROZEN$1 = 'ON_CHANNEL_UNFROZEN';
  var ON_CHANNEL_CHANGED$1 = 'ON_CHANNEL_CHANGED';
  var ON_META_DATA_CREATED = 'ON_META_DATA_CREATED';
  var ON_META_DATA_UPDATED = 'ON_META_DATA_UPDATED';
  var ON_META_DATA_DELETED = 'ON_META_DATA_DELETED';
  var ON_META_COUNTERS_CREATED = 'ON_META_COUNTERS_CREATED';
  var ON_META_COUNTERS_UPDATED = 'ON_META_COUNTERS_UPDATED';
  var ON_META_COUNTERS_DELETED = 'ON_META_COUNTERS_DELETED';
  var ON_MENTION_RECEIVED = 'ON_MENTION_RECEIVED';

  var messageActionTypes = /*#__PURE__*/Object.freeze({
      __proto__: null,
      SET_CURRENT_CHANNEL: SET_CURRENT_CHANNEL$3,
      SET_CHANNEL_INVALID: SET_CHANNEL_INVALID$1,
      RESET_MESSAGES: RESET_MESSAGES$1,
      GET_PREV_MESSAGES_START: GET_PREV_MESSAGES_START$1,
      GET_PREV_MESSAGES_SUCESS: GET_PREV_MESSAGES_SUCESS$1,
      GET_PREV_MESSAGES_FAIL: GET_PREV_MESSAGES_FAIL,
      SENDING_MESSAGE_FAILED: SENDING_MESSAGE_FAILED,
      SENDING_MESSAGE_SUCCEEDED: SENDING_MESSAGE_SUCCEEDED,
      SENDING_MESSAGE_START: SENDING_MESSAGE_START,
      RESENDING_MESSAGE_START: RESENDING_MESSAGE_START,
      FETCH_PARTICIPANT_LIST: FETCH_PARTICIPANT_LIST,
      FETCH_BANNED_USER_LIST: FETCH_BANNED_USER_LIST,
      FETCH_MUTED_USER_LIST: FETCH_MUTED_USER_LIST,
      ON_MESSAGE_RECEIVED: ON_MESSAGE_RECEIVED$1,
      ON_MESSAGE_UPDATED: ON_MESSAGE_UPDATED$1,
      ON_MESSAGE_DELETED: ON_MESSAGE_DELETED$1,
      ON_MESSAGE_DELETED_BY_REQ_ID: ON_MESSAGE_DELETED_BY_REQ_ID$1,
      ON_OPERATOR_UPDATED: ON_OPERATOR_UPDATED,
      ON_USER_ENTERED: ON_USER_ENTERED,
      ON_USER_EXITED: ON_USER_EXITED,
      ON_USER_MUTED: ON_USER_MUTED,
      ON_USER_UNMUTED: ON_USER_UNMUTED,
      ON_USER_BANNED: ON_USER_BANNED,
      ON_USER_UNBANNED: ON_USER_UNBANNED,
      ON_CHANNEL_FROZEN: ON_CHANNEL_FROZEN$1,
      ON_CHANNEL_UNFROZEN: ON_CHANNEL_UNFROZEN$1,
      ON_CHANNEL_CHANGED: ON_CHANNEL_CHANGED$1,
      ON_META_DATA_CREATED: ON_META_DATA_CREATED,
      ON_META_DATA_UPDATED: ON_META_DATA_UPDATED,
      ON_META_DATA_DELETED: ON_META_DATA_DELETED,
      ON_META_COUNTERS_CREATED: ON_META_COUNTERS_CREATED,
      ON_META_COUNTERS_UPDATED: ON_META_COUNTERS_UPDATED,
      ON_META_COUNTERS_DELETED: ON_META_COUNTERS_DELETED,
      ON_MENTION_RECEIVED: ON_MENTION_RECEIVED
  });

  function reducer$5(state, action) {
    switch (action.type) {
      case RESET_MESSAGES$1:
        {
          return __assign(__assign({}, state), {
            allMessages: []
          });
        }

      case SET_CURRENT_CHANNEL$3:
        {
          var gottenChannel = action.payload;
          var operators = gottenChannel.operators;

          if (!state.isInvalid && state.currentOpenChannel && state.currentOpenChannel.url && state.currentOpenChannel.url === gottenChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            currentOpenChannel: gottenChannel,
            isInvalid: false,
            operators: operators,
            participants: operators,
            bannedParticipantIds: [],
            mutedParticipantIds: []
          });
        }

      case SET_CHANNEL_INVALID$1:
        {
          return __assign(__assign({}, state), {
            isInvalid: true
          });
        }

      case GET_PREV_MESSAGES_START$1:
        {
          return __assign(__assign({}, state), {
            loading: true
          });
        }

      case GET_PREV_MESSAGES_SUCESS$1:
      case GET_PREV_MESSAGES_FAIL:
        {
          var isFailed = action.type === GET_PREV_MESSAGES_FAIL;
          var _a = action.payload,
              _b = _a.currentOpenChannel,
              currentOpenChannel = _b === void 0 ? {} : _b,
              _c = _a.messages,
              messages = _c === void 0 ? [] : _c,
              hasMore = _a.hasMore,
              lastMessageTimestamp = _a.lastMessageTimestamp;
          var actionChannelUrl = currentOpenChannel.url;
          var receivedMessages_1 = isFailed ? [] : messages;

          var _hasMore = isFailed ? false : hasMore;

          var _lastMessageTimestamp = isFailed ? 0 : lastMessageTimestamp;

          var stateChannel = state.currentOpenChannel;
          var stateChannelUrl = stateChannel.url;

          if (actionChannelUrl !== stateChannelUrl) {
            return state;
          }

          var filteredAllMessages = state.allMessages.filter(function (message) {
            return !receivedMessages_1.find(function (_a) {
              var messageId = _a.messageId;
              return compareIds(messageId, message.messageId);
            });
          });
          return __assign(__assign({}, state), {
            loading: false,
            initialized: true,
            hasMore: _hasMore,
            lastMessageTimestamp: _lastMessageTimestamp,
            allMessages: __spreadArray(__spreadArray([], receivedMessages_1), filteredAllMessages)
          });
        }

      case SENDING_MESSAGE_START:
        {
          var _d = action.payload,
              message = _d.message,
              channel = _d.channel;

          if (channel.url !== state.currentOpenChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            allMessages: __spreadArray(__spreadArray([], state.allMessages), [__assign({}, message)])
          });
        }

      case SENDING_MESSAGE_SUCCEEDED:
        {
          var sentMessage_1 = action.payload;
          var newMessages = state.allMessages.map(function (m) {
            return compareIds(m.reqId, sentMessage_1.reqId) ? sentMessage_1 : m;
          });
          return __assign(__assign({}, state), {
            allMessages: newMessages
          });
        }

      case SENDING_MESSAGE_FAILED:
        {
          var sentMessage_2 = action.payload;
          return __assign(__assign({}, state), {
            allMessages: state.allMessages.map(function (m) {
              return compareIds(m.reqId, sentMessage_2.reqId) ? sentMessage_2 : m;
            })
          });
        }

      case RESENDING_MESSAGE_START:
        {
          var eventedChannel = action.payload.channel;
          var resentMessage_1 = action.payload.message;

          if (eventedChannel.url !== state.currentOpenChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            allMessages: state.allMessages.map(function (m) {
              return compareIds(m.reqId, resentMessage_1.reqId) ? resentMessage_1 : m;
            })
          });
        }

      case FETCH_PARTICIPANT_LIST:
        {
          var eventedChannel = action.payload.channel;
          var fetchedParticipantList = action.payload.users;

          if (eventedChannel.url !== state.currentOpenChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            participants: __spreadArray(__spreadArray([], state.participants), fetchedParticipantList)
          });
        }

      case FETCH_BANNED_USER_LIST:
        {
          var eventedChannel = action.payload.channel;
          var fetchedBannedUserList = action.payload.users;

          if (eventedChannel.url !== state.currentOpenChannel.url || !fetchedBannedUserList.every(function (user) {
            return typeof user.userId === 'string';
          })) {
            return state;
          }

          return __assign(__assign({}, state), {
            bannedParticipantIds: __spreadArray(__spreadArray([], state.bannedParticipantIds), fetchedBannedUserList.map(function (user) {
              return user.userId;
            }))
          });
        }

      case FETCH_MUTED_USER_LIST:
        {
          var eventedChannel = action.payload.channel;
          var fetchedMutedUserList = action.payload.users;

          if (eventedChannel.url !== state.currentOpenChannel.url || !fetchedMutedUserList.every(function (user) {
            return typeof user.userId === 'string';
          })) {
            return state;
          }

          return __assign(__assign({}, state), {
            mutedParticipantIds: __spreadArray(__spreadArray([], state.bannedParticipantIds), fetchedMutedUserList.map(function (user) {
              return user.userId;
            }))
          });
        }
      // events

      case ON_MESSAGE_RECEIVED$1:
        {
          var eventedChannel = action.payload.channel;
          var receivedMessage = action.payload.message;
          var currentOpenChannel = state.currentOpenChannel;

          if (!compareIds(eventedChannel.url, currentOpenChannel.url) || !(state.allMessages.map(function (message) {
            return message.messageId;
          }).indexOf(receivedMessage.messageId) < 0)) {
            return state;
          }

          return __assign(__assign({}, state), {
            allMessages: __spreadArray(__spreadArray([], state.allMessages), [receivedMessage])
          });
        }

      case ON_MESSAGE_UPDATED$1:
        {
          var eventedChannel = action.payload.channel;
          var updatedMessage_1 = action.payload.message;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== eventedChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            allMessages: state.allMessages.map(function (message) {
              return message.isIdentical(updatedMessage_1) ? updatedMessage_1 : message;
            })
          });
        }

      case ON_MESSAGE_DELETED$1:
        {
          var eventedChannel = action.payload.channel;
          var deletedMessageId_1 = action.payload.messageId;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== eventedChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            allMessages: state.allMessages.filter(function (message) {
              return !compareIds(message.messageId, deletedMessageId_1);
            })
          });
        }

      case ON_MESSAGE_DELETED_BY_REQ_ID$1:
        {
          return __assign(__assign({}, state), {
            allMessages: state.allMessages.filter(function (m) {
              return !compareIds(m.reqId, action.payload);
            })
          });
        }

      case ON_OPERATOR_UPDATED:
        {
          var eventedChannel = action.payload.channel;
          var updatedOperators = action.payload.operators;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== eventedChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            currentOpenChannel: __assign(__assign({}, state.currentOpenChannel), {
              operators: updatedOperators
            }),
            operators: updatedOperators
          });
        }

      case ON_USER_ENTERED:
        {
          var eventedChannel = action.payload.channel;
          var enteredUser = action.payload.user;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== eventedChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            participants: __spreadArray(__spreadArray([], state.participants), [enteredUser])
          });
        }

      case ON_USER_EXITED:
        {
          var eventedChannel = action.payload.channel;
          var exitedUser_1 = action.payload.user;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== eventedChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            participants: state.participants.filter(function (participant) {
              return !compareIds(participant.userId, exitedUser_1.userId);
            })
          });
        }

      case ON_USER_MUTED:
        {
          var eventedChannel = action.payload.channel;
          var mutedUser = action.payload.user;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== eventedChannel.url || state.mutedParticipantIds.indexOf(mutedUser.userId) >= 0) {
            return state;
          }

          return __assign(__assign({}, state), {
            mutedParticipantIds: __spreadArray(__spreadArray([], state.mutedParticipantIds), [mutedUser.userId])
          });
        }

      case ON_USER_UNMUTED:
        {
          var eventedChannel = action.payload.channel;
          var unmutedUser_1 = action.payload.user;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== eventedChannel.url || state.mutedParticipantIds.indexOf(unmutedUser_1.userId) < 0) {
            return state;
          }

          return __assign(__assign({}, state), {
            mutedParticipantIds: state.mutedParticipantIds.filter(function (userId) {
              return userId !== unmutedUser_1.userId;
            })
          });
        }

      case ON_USER_BANNED:
        {
          var eventedChannel = action.payload.channel;
          var bannedUser = action.payload.user;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== eventedChannel.url || state.bannedParticipantIds.indexOf(bannedUser.userId) >= 0) {
            return state;
          }

          return __assign(__assign({}, state), {
            bannedParticipantIds: __spreadArray(__spreadArray([], state.bannedParticipantIds), [bannedUser.userId])
          });
        }

      case ON_USER_UNBANNED:
        {
          var eventedChannel = action.payload.channel;
          var unbannedUser_1 = action.payload.user;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== eventedChannel.url || state.bannedParticipantIds.indexOf(unbannedUser_1.userId) < 0) {
            return state;
          }

          return __assign(__assign({}, state), {
            bannedParticipantIds: state.bannedParticipantIds.filter(function (userId) {
              return userId !== unbannedUser_1.userId;
            })
          });
        }

      case ON_CHANNEL_FROZEN$1:
        {
          var frozenChannel = action.payload;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== frozenChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            frozen: true
          });
        }

      case ON_CHANNEL_UNFROZEN$1:
        {
          var unfrozenChannel = action.payload;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== unfrozenChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            frozen: false
          });
        }

      case ON_CHANNEL_CHANGED$1:
        {
          var changedChannel = action.payload;
          var currentChannel = state.currentOpenChannel;

          if (!currentChannel || currentChannel.url && currentChannel.url !== changedChannel.url) {
            return state;
          }

          return __assign(__assign({}, state), {
            currentOpenChannel: changedChannel
          });
        }

      case ON_META_DATA_CREATED:
        {
          // const eventedChannel = action.payload.channel;
          // const createdMetaData = action.payload.metaData;
          // return {
          //   ...state
          // };
          return state;
        }

      case ON_META_DATA_UPDATED:
        {
          // const eventedChannel = action.payload.channel;
          // const updatedMetaData = action.payload.metaData;
          // return {
          //   ...state
          // };
          return state;
        }

      case ON_META_DATA_DELETED:
        {
          // const eventedChannel = action.payload.channel;
          // const deletedMetaDataKeys = action.payload.metaDataKeys;
          // return {
          //   ...state
          // };
          return state;
        }

      case ON_META_COUNTERS_CREATED:
        {
          // const eventedChannel = action.payload.channel;
          // const createdMetaCounter = action.payload.metaCounter;
          // return {
          //   ...state
          // };
          return state;
        }

      case ON_META_COUNTERS_UPDATED:
        {
          // const eventedChannel = action.payload.channel;
          // const updatedMetaCounter = action.payload.metaCounter;
          // return {
          //   ...state
          // };
          return state;
        }

      case ON_META_COUNTERS_DELETED:
        {
          // const eventedChannel = action.payload.channel;
          // const deletedMetaCounterKeys = action.payload.metaCounterKeys;
          // return {
          //   ...state
          // };
          return state;
        }

      case ON_MENTION_RECEIVED:
        {
          // const eventedChannel = action.payload.channel;
          // const mentionedMessage = action.payload.message;
          // return {
          //   ...state
          // };
          return state;
        }

      default:
        return state;
    }
  }

  var initialState$1 = {
    allMessages: [],
    loading: false,
    initialized: false,
    currentOpenChannel: null,
    isInvalid: false,
    hasMore: false,
    lastMessageTimestamp: 0,
    frozen: false,
    operators: [],
    participants: [],
    bannedParticipantIds: [],
    mutedParticipantIds: []
  };

  function useSetChannel$2(_a, _b) {
    var channelUrl = _a.channelUrl,
        sdkInit = _a.sdkInit,
        fetchingParticipants = _a.fetchingParticipants;
    var sdk = _b.sdk,
        logger = _b.logger,
        messagesDispatcher = _b.messagesDispatcher;
    React__default.useEffect(function () {
      if (channelUrl && sdkInit && sdk && sdk.OpenChannel) {
        logger.info('OpenChannel | useSetChannel fetching channel', channelUrl);
        sdk.OpenChannel.getChannel(channelUrl, function (openChannel, error) {
          if (!error) {
            logger.info('OpenChannel | useSetChannel fetched channel', openChannel);
            messagesDispatcher({
              type: SET_CURRENT_CHANNEL$3,
              payload: openChannel
            });
            openChannel.enter(function (_, error) {
              if (error) {
                logger.warning('OpenChannel | useSetChannel enter channel failed', {
                  channelUrl: channelUrl,
                  error: error
                });
                messagesDispatcher({
                  type: SET_CHANNEL_INVALID$1,
                  payload: null
                });
              }

              if (fetchingParticipants) {
                // fetch participants, banned participantIds, muted participantIds
                var participantListQuery = openChannel.createParticipantListQuery();
                var bannedParticipantListQuery = openChannel.createBannedUserListQuery();
                var mutedParticipantListQuery = openChannel.createMutedUserListQuery();
                fetchWithListQuery(participantListQuery, logger, function (users) {
                  messagesDispatcher({
                    type: FETCH_PARTICIPANT_LIST,
                    payload: {
                      channel: openChannel,
                      users: users
                    }
                  });
                });
                fetchWithListQuery(bannedParticipantListQuery, logger, function (users) {
                  messagesDispatcher({
                    type: FETCH_BANNED_USER_LIST,
                    payload: {
                      channel: openChannel,
                      users: users
                    }
                  });
                });
                fetchWithListQuery(mutedParticipantListQuery, logger, function (users) {
                  messagesDispatcher({
                    type: FETCH_MUTED_USER_LIST,
                    payload: {
                      channel: openChannel,
                      users: users
                    }
                  });
                });
              }
            });
          } else {
            logger.warning('OpenChannel | useSetChannel fetching channel failed', {
              channelUrl: channelUrl,
              error: error
            });
            messagesDispatcher({
              type: SET_CHANNEL_INVALID$1,
              payload: null
            });
          }
        }); // .then((openChannel) => {
        //   logger.info('OpenChannel | useSetChannel fetched channel', openChannel);
        //   messagesDispatcher({
        //     type: messageActionTypes.SET_CURRENT_CHANNEL,
        //     payload: openChannel,
        //   });
        //   openChannel.enter((_, error) => {
        //     if (error) {
        //       logger.warning('OpenChannel | useSetChannel enter channel failed', { channelUrl, error });
        //       messagesDispatcher({
        //         type: messageActionTypes.SET_CHANNEL_INVALID,
        //       });
        //     }
        //     if (fetchingParticipants) {
        //       // fetch participants, banned participantIds, muted participantIds
        //       const participantListQuery = openChannel.createParticipantListQuery();
        //       const bannedParticipantListQuery = openChannel.createBannedUserListQuery();
        //       const mutedParticipantListQuery = openChannel.createMutedUserListQuery();
        //       utils.fetchWithListQuery(
        //         participantListQuery,
        //         logger,
        //         (users) => {
        //           messagesDispatcher({
        //             type: messageActionTypes.FETCH_PARTICIPANT_LIST,
        //             payload: {
        //               channel: openChannel,
        //               users,
        //             },
        //           });
        //         },
        //       );
        //       utils.fetchWithListQuery(
        //         bannedParticipantListQuery,
        //         logger,
        //         (users) => {
        //           messagesDispatcher({
        //             type: messageActionTypes.FETCH_BANNED_USER_LIST,
        //             payload: {
        //               channel: openChannel,
        //               users,
        //             },
        //           });
        //         },
        //       );
        //       utils.fetchWithListQuery(
        //         mutedParticipantListQuery,
        //         logger,
        //         (users) => {
        //           messagesDispatcher({
        //             type: messageActionTypes.FETCH_MUTED_USER_LIST,
        //             payload: {
        //               channel: openChannel,
        //               users,
        //             },
        //           });
        //         },
        //       );
        //     }
        //   });
        // })
        // .catch((error) => {
        //   logger.warning('OpenChannel | useSetChannel fetching channel failed', { channelUrl, error });
        //   messagesDispatcher({
        //     type: messageActionTypes.SET_CHANNEL_INVALID,
        //   });
        // });
      }
    }, [channelUrl, sdkInit, fetchingParticipants]);
  }

  function useHandleChannelEvents$1(_a, _b) {
    var currentOpenChannel = _a.currentOpenChannel,
        checkScrollBottom = _a.checkScrollBottom;
    var sdk = _b.sdk,
        logger = _b.logger,
        messagesDispatcher = _b.messagesDispatcher;
    React__default.useEffect(function () {
      var messageReceiverId = uuidv4();

      if (currentOpenChannel && currentOpenChannel.url && sdk && sdk.ChannelHandler) {
        var ChannelHandler = new sdk.ChannelHandler();
        logger.info('OpenChannel | useHandleChannelEvents: Setup evnet handler', messageReceiverId);

        ChannelHandler.onMessageReceived = function (channel, message) {
          var scrollToEnd = checkScrollBottom();
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMessageReceived', {
            channelUrl: channelUrl,
            message: message
          });
          messagesDispatcher({
            type: ON_MESSAGE_RECEIVED$1,
            payload: {
              channel: channel,
              message: message
            }
          });

          if (scrollToEnd) {
            try {
              setTimeout(function () {
                scrollIntoLast$1();
              });
            } catch (error) {
              logger.warning('OpenChannel | onMessageReceived | scroll to end failed');
            }
          }
        };

        ChannelHandler.onMessageUpdated = function (channel, message) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMessageUpdated', {
            channelUrl: channelUrl,
            message: message
          });
          messagesDispatcher({
            type: ON_MESSAGE_UPDATED$1,
            payload: {
              channel: channel,
              message: message
            }
          });
        };

        ChannelHandler.onMessageDeleted = function (channel, messageId) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMessageDeleted', {
            channelUrl: channelUrl,
            messageId: messageId
          });
          messagesDispatcher({
            type: ON_MESSAGE_DELETED$1,
            payload: {
              channel: channel,
              messageId: messageId
            }
          });
        };

        ChannelHandler.onOperatorUpdated = function (channel, operators) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onOperatorUpdated', {
            channelUrl: channelUrl,
            operators: operators
          });
          messagesDispatcher({
            type: ON_OPERATOR_UPDATED,
            payload: {
              channel: channel,
              operators: operators
            }
          });
        };

        ChannelHandler.onUserEntered = function (channel, user) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onUserEntered', {
            channelUrl: channelUrl,
            user: user
          });
          messagesDispatcher({
            type: ON_USER_ENTERED,
            payload: {
              channel: channel,
              user: user
            }
          });
        };

        ChannelHandler.onUserExited = function (channel, user) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onUserExited', {
            channelUrl: channelUrl,
            user: user
          });
          messagesDispatcher({
            type: ON_USER_EXITED,
            payload: {
              channel: channel,
              user: user
            }
          });
        };

        ChannelHandler.onUserMuted = function (channel, user) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onUserMuted', {
            channelUrl: channelUrl,
            user: user
          });
          messagesDispatcher({
            type: ON_USER_MUTED,
            payload: {
              channel: channel,
              user: user
            }
          });
        };

        ChannelHandler.onUserUnmuted = function (channel, user) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onUserUnmuted', {
            channelUrl: channelUrl,
            user: user
          });
          messagesDispatcher({
            type: ON_USER_UNMUTED,
            payload: {
              channel: channel,
              user: user
            }
          });
        };

        ChannelHandler.onUserBanned = function (channel, user) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onUserBanned', {
            channelUrl: channelUrl,
            user: user
          });
          messagesDispatcher({
            type: ON_USER_BANNED,
            payload: {
              channel: channel,
              user: user
            }
          });
        };

        ChannelHandler.onUserUnbanned = function (channel, user) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onUserUnbanned', {
            channelUrl: channelUrl,
            user: user
          });
          messagesDispatcher({
            type: ON_USER_UNBANNED,
            payload: {
              channel: channel,
              user: user
            }
          });
        };

        ChannelHandler.onChannelFrozen = function (channel) {
          logger.info('OpenChannel | useHandleChannelEvents: onChannelFrozen', channel);
          messagesDispatcher({
            type: ON_CHANNEL_FROZEN$1,
            payload: channel
          });
        };

        ChannelHandler.onChannelUnfrozen = function (channel) {
          logger.info('OpenChannel | useHandleChannelEvents: onChannelUnfrozen', channel);
          messagesDispatcher({
            type: ON_CHANNEL_UNFROZEN$1,
            payload: channel
          });
        };

        ChannelHandler.onChannelChanged = function (channel) {
          logger.info('OpenChannel | useHandleChannelEvents: onChannelChanged', channel);
          messagesDispatcher({
            type: ON_CHANNEL_CHANGED$1,
            payload: channel
          });
        };

        ChannelHandler.onMetaDataCreated = function (channel, metaData) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMetaDataCreated', {
            channelUrl: channelUrl,
            metaData: metaData
          });
          messagesDispatcher({
            type: ON_META_DATA_CREATED,
            payload: {
              channel: channel,
              metaData: metaData
            }
          });
        };

        ChannelHandler.onMetaDataUpdated = function (channel, metaData) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMetaDataUpdated', {
            channelUrl: channelUrl,
            metaData: metaData
          });
          messagesDispatcher({
            type: ON_META_DATA_UPDATED,
            payload: {
              channel: channel,
              metaData: metaData
            }
          });
        };

        ChannelHandler.onMetaDataDeleted = function (channel, metaDataKeys) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMetaDataDeleted', {
            channelUrl: channelUrl,
            metaDataKeys: metaDataKeys
          });
          messagesDispatcher({
            type: ON_META_DATA_DELETED,
            payload: {
              channel: channel,
              metaDataKeys: metaDataKeys
            }
          });
        };

        ChannelHandler.onMetaCountersCreated = function (channel, metaCounter) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMetaCountersCreated', {
            channelUrl: channelUrl,
            metaCounter: metaCounter
          });
          messagesDispatcher({
            type: ON_META_COUNTERS_CREATED,
            payload: {
              channel: channel,
              metaCounter: metaCounter
            }
          });
        };

        ChannelHandler.onMetaCountersUpdated = function (channel, metaCounter) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMetaCountersUpdated', {
            channelUrl: channelUrl,
            metaCounter: metaCounter
          });
          messagesDispatcher({
            type: ON_META_COUNTERS_UPDATED,
            payload: {
              channel: channel,
              metaCounter: metaCounter
            }
          });
        };

        ChannelHandler.onMetaCountersDeleted = function (channel, metaCounterKeys) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMetaCountersDeleted', {
            channelUrl: channelUrl,
            metaCounterKeys: metaCounterKeys
          });
          messagesDispatcher({
            type: ON_META_COUNTERS_DELETED,
            payload: {
              channel: channel,
              metaCounterKeys: metaCounterKeys
            }
          });
        };

        ChannelHandler.onMentionReceived = function (channel, message) {
          var channelUrl = channel.url;
          logger.info('OpenChannel | useHandleChannelEvents: onMentionReceived', {
            channelUrl: channelUrl,
            message: message
          });
          messagesDispatcher({
            type: ON_MENTION_RECEIVED,
            payload: {
              channel: channel,
              message: message
            }
          });
        };

        sdk.addChannelHandler(messageReceiverId, ChannelHandler);
      }

      return function () {
        if (sdk && sdk.removeChannelHandler) {
          logger.info('OpenChannel | useHandleChannelEvents: Removing message receiver handler', messageReceiverId);
          sdk.removeChannelHandler(messageReceiverId);
        }
      };
    }, [currentOpenChannel]);
  }

  function useInitialMessagesFetch$1(_a, _b) {
    var currentOpenChannel = _a.currentOpenChannel,
        userFilledMessageListParams = _a.userFilledMessageListParams;
    var sdk = _b.sdk,
        logger = _b.logger,
        messagesDispatcher = _b.messagesDispatcher;
    React__default.useEffect(function () {
      logger.info('OpenChannel | useInitialMessagesFetch: Setup started', currentOpenChannel);
      messagesDispatcher({
        type: RESET_MESSAGES$1,
        payload: null
      });

      if (sdk && sdk.MessageListParams && currentOpenChannel && currentOpenChannel.getMessagesByTimestamp) {
        var messageListParams_1 = new sdk.MessageListParams();
        messageListParams_1.prevResultSize = 30;
        messageListParams_1.isInclusive = true;
        messageListParams_1.includeReplies = false;
        messageListParams_1.includeReactions = false;

        if (userFilledMessageListParams) {
          Object.keys(userFilledMessageListParams).forEach(function (key) {
            messageListParams_1[key] = userFilledMessageListParams[key];
          });
          logger.info('OpenChannel | useInitialMessagesFetch: Used customizedMessageListParams');
        }

        logger.info('OpenChannel | useInitialMessagesFetch: Fetching messages', {
          currentOpenChannel: currentOpenChannel,
          messageListParams: messageListParams_1
        });
        messagesDispatcher({
          type: GET_PREV_MESSAGES_START$1,
          payload: null
        });
        currentOpenChannel.getMessagesByTimestamp(new Date().getTime(), messageListParams_1, function (messages, error) {
          if (!error) {
            logger.info('OpenChannel | useInitialMessagesFetch: Fetching messages succeeded', messages);
            var hasMore = messages && messages.length > 0;
            var lastMessageTimestamp = hasMore ? messages[0].createdAt : null;
            messagesDispatcher({
              type: GET_PREV_MESSAGES_SUCESS$1,
              payload: {
                currentOpenChannel: currentOpenChannel,
                messages: messages,
                hasMore: hasMore,
                lastMessageTimestamp: lastMessageTimestamp
              }
            });
            setTimeout(function () {
              scrollIntoLast$1();
            });
          } else {
            logger.error('OpenChannel | useInitialMessagesFetch: Fetching messages failed', error);
            messagesDispatcher({
              type: GET_PREV_MESSAGES_FAIL,
              payload: {
                currentOpenChannel: currentOpenChannel,
                messages: [],
                hasMore: false,
                lastMessageTimestamp: 0
              }
            });
          }
        });
      }
    }, [currentOpenChannel, userFilledMessageListParams]);
  }

  function useScrollCallback$2(_a, _b) {
    var currentOpenChannel = _a.currentOpenChannel,
        lastMessageTimestamp = _a.lastMessageTimestamp;
    var sdk = _b.sdk,
        logger = _b.logger,
        messagesDispatcher = _b.messagesDispatcher,
        hasMore = _b.hasMore,
        userFilledMessageListParams = _b.userFilledMessageListParams;
    return React__default.useCallback(function (callback) {
      if (hasMore && sdk && sdk.MessageListParams) {
        logger.info('OpenChannel | useScrollCallback: start');
        var messageListParams_1 = new sdk.MessageListParams();
        messageListParams_1.prevResultSize = 30;
        messageListParams_1.includeReplies = false;
        messageListParams_1.includeReactions = false;

        if (userFilledMessageListParams) {
          Object.keys(userFilledMessageListParams).forEach(function (key) {
            messageListParams_1[key] = userFilledMessageListParams[key];
          });
          logger.info('OpenChannel | useScrollCallback: Used userFilledMessageListParams', userFilledMessageListParams);
        }

        logger.info('OpenChannel | useScrollCallback: Fetching messages', {
          currentOpenChannel: currentOpenChannel,
          messageListParams: messageListParams_1
        });
        currentOpenChannel.getMessagesByTimestamp(lastMessageTimestamp || new Date().getTime(), messageListParams_1, function (messages, error) {
          if (!error) {
            logger.info('OpenChannel | useScrollCallback: Fetching messages succeeded', messages);
            var hasMore_1 = messages && messages.length > 0;
            var lastMessageTimestamp_1 = hasMore_1 ? messages[0].createdAt : null;
            messagesDispatcher({
              type: GET_PREV_MESSAGES_SUCESS$1,
              payload: {
                currentOpenChannel: currentOpenChannel,
                messages: messages,
                hasMore: hasMore_1,
                lastMessageTimestamp: lastMessageTimestamp_1
              }
            });
            setTimeout(function () {
              callback();
            });
          } else {
            logger.error('OpenChannel | useScrollCallback: Fetching messages failed', error);
            messagesDispatcher({
              type: GET_PREV_MESSAGES_FAIL,
              payload: {
                currentOpenChannel: currentOpenChannel,
                messages: [],
                hasMore: false,
                lastMessageTimestamp: 0
              }
            });
          }
        });
      }
    }, [currentOpenChannel, lastMessageTimestamp]);
  }

  function useCheckScrollBottom(_a, _b) {
    var conversationScrollRef = _a.conversationScrollRef;
    var logger = _b.logger;
    return React__default.useCallback(function () {
      var isBottom = true;

      if (conversationScrollRef) {
        try {
          var conversationScroll = conversationScrollRef.current;
          isBottom = conversationScroll.scrollHeight <= conversationScroll.scrollTop + conversationScroll.clientHeight;
        } catch (error) {
          logger.error('OpenChannel | useCheckScrollBottom', error);
        }
      }

      return isBottom;
    }, [conversationScrollRef]);
  }

  function useSendMessageCallback$1(_a, _b) {
    var currentOpenChannel = _a.currentOpenChannel,
        onBeforeSendUserMessage = _a.onBeforeSendUserMessage,
        checkScrollBottom = _a.checkScrollBottom,
        messageInputRef = _a.messageInputRef;
    var sdk = _b.sdk,
        logger = _b.logger,
        messagesDispatcher = _b.messagesDispatcher;
    return React__default.useCallback(function () {
      if (sdk && sdk.UserMessageParams) {
        var text = messageInputRef.current.value;

        var createParamsDefault = function createParamsDefault(txt) {
          var message = typeof txt === 'string' ? txt.trim() : txt.toString(10).trim();
          var params = new sdk.UserMessageParams();
          params.message = message;
          return params;
        };

        var createCustomParams = onBeforeSendUserMessage && typeof onBeforeSendUserMessage === 'function';

        if (createCustomParams) {
          logger.info('OpenChannel | useSendMessageCallback: Creating params using onBeforeSendUserMessage', onBeforeSendUserMessage);
        }

        var params = onBeforeSendUserMessage ? onBeforeSendUserMessage(text) : createParamsDefault(text);
        logger.info('OpenChannel | useSendMessageCallback: Sending message has started', params);
        var isBottom_1 = checkScrollBottom();
        var pendingMessage = currentOpenChannel.sendUserMessage(params, function (message, error) {
          if (!error) {
            logger.info('OpenChannel | useSendMessageCallback: Sending message succeeded', message);
            messagesDispatcher({
              type: SENDING_MESSAGE_SUCCEEDED,
              payload: message
            });

            if (isBottom_1) {
              setTimeout(function () {
                scrollIntoLast$1();
              });
            }
          } else {
            logger.warning('OpenChannel | useSendMessageCallback: Sending message failed', error);
            messagesDispatcher({
              type: SENDING_MESSAGE_FAILED,
              payload: messageActionTypes
            });
          }
        });
        messagesDispatcher({
          type: SENDING_MESSAGE_START,
          payload: {
            message: pendingMessage,
            channel: currentOpenChannel
          }
        });
      }
    }, [currentOpenChannel, onBeforeSendUserMessage, checkScrollBottom, messageInputRef]);
  }

  function useFileUploadCallback(_a, _b) {
    var currentOpenChannel = _a.currentOpenChannel,
        checkScrollBottom = _a.checkScrollBottom,
        _c = _a.imageCompression,
        imageCompression = _c === void 0 ? {} : _c,
        onBeforeSendFileMessage = _a.onBeforeSendFileMessage;
    var sdk = _b.sdk,
        logger = _b.logger,
        messagesDispatcher = _b.messagesDispatcher;
    return React__default.useCallback(function (file) {
      if (sdk && sdk.FileMessageParams) {
        var compressionRate_1 = imageCompression.compressionRate,
            resizingWidth_1 = imageCompression.resizingWidth,
            resizingHeight_1 = imageCompression.resizingHeight;
        var createCustomParams_1 = onBeforeSendFileMessage && typeof onBeforeSendFileMessage === 'function';
        var compressibleFileType = file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg';
        var compressibleRatio = compressionRate_1 > 0 && compressionRate_1 < 1; // pxToNumber returns null if values are invalid

        var compressibleDiamensions_1 = pxToNumber$2(resizingWidth_1) || pxToNumber$2(resizingHeight_1);
        var canCompressImage = compressibleFileType && (compressibleRatio || compressibleDiamensions_1);

        var createParamsDefault_1 = function createParamsDefault_1(file_) {
          var params = new sdk.FileMessageParams();
          params.file = file_;
          return params;
        };

        if (canCompressImage) {
          // Using image compression
          try {
            var image_1 = document.createElement('img');
            image_1.src = URL.createObjectURL(file);

            image_1.onload = function () {
              URL.revokeObjectURL(image_1.src);
              var canvas = document.createElement('canvas');
              var imageWidth = image_1.naturalWidth || image_1.width;
              var imageHeight = image_1.naturalHeight || image_1.height;
              var targetWidth = pxToNumber$2(resizingWidth_1) || imageWidth;
              var targetHeight = pxToNumber$2(resizingHeight_1) || imageHeight; // In canvas.toBlob(callback, mimeType, qualityArgument)
              // qualityArgument doesnt work
              // so in case compressibleDiamensions are not present, we use ratio

              if (file.type === 'image/png' && !compressibleDiamensions_1) {
                targetWidth *= compressionRate_1;
                targetHeight *= compressionRate_1;
              }

              canvas.width = targetWidth;
              canvas.height = targetHeight;
              var context = canvas.getContext('2d');
              context.drawImage(image_1, 0, 0, targetWidth, targetHeight);
              context.canvas.toBlob(function (newImageBlob) {
                var compressedFile = new File([newImageBlob], file.name, {
                  type: file.type
                });

                if (createCustomParams_1) {
                  logger.info('OpenChannel | useFileUploadCallback: Creating params using onBeforeSendFileMessage', onBeforeSendFileMessage);
                }

                var params = onBeforeSendFileMessage ? onBeforeSendFileMessage(compressedFile) : createParamsDefault_1(compressedFile);
                logger.info('OpenChannel | useFileUploadCallback: Uploading file message start', params);
                var isBottom = checkScrollBottom();
                var pendingMessage = currentOpenChannel.sendFileMessage(params, function (message, error) {
                  if (!error) {
                    logger.info('OpenChannel | useFileUploadCallback: Sending message succeeded', message);
                    messagesDispatcher({
                      type: SENDING_MESSAGE_SUCCEEDED,
                      payload: message
                    });

                    if (isBottom) {
                      setTimeout(function () {
                        scrollIntoLast$1();
                      });
                    }
                  } else {
                    logger.error('OpenChannel | useFileUploadCallback: Sending file message failed', {
                      message: message,
                      error: error
                    });
                    message.localUrl = URL.createObjectURL(file);
                    message.file = file;
                    messagesDispatcher({
                      type: SENDING_MESSAGE_FAILED,
                      payload: message
                    });
                  }
                });
                messagesDispatcher({
                  type: SENDING_MESSAGE_START,
                  payload: {
                    message: __assign(__assign({}, pendingMessage), {
                      url: URL.createObjectURL(file),
                      // pending thumbnail message seems to be failed
                      requestState: 'pending'
                    }),
                    channel: currentOpenChannel
                  }
                });
              }, file.type, compressionRate_1);
            };
          } catch (error) {
            logger.warning('OpenChannel | useFileUploadCallback: Sending file message with image compression failed', error);
          }
        } else {
          // Not using image compression
          if (createCustomParams_1) {
            logger.info('OpenChannel | useFileUploadCallback: Creating params using onBeforeSendFileMessage', onBeforeSendFileMessage);
          }

          var params = onBeforeSendFileMessage ? onBeforeSendFileMessage(file) : createParamsDefault_1(file);
          logger.info('OpenChannel | useFileUploadCallback: Uploading file message start', params);
          var isBottom_1 = checkScrollBottom();
          var pendingMessage = currentOpenChannel.sendFileMessage(params, function (message, error) {
            if (!error) {
              logger.info('OpenChannel | useFileUploadCallback: Sending message succeeded', message);
              messagesDispatcher({
                type: SENDING_MESSAGE_SUCCEEDED,
                payload: message
              });

              if (isBottom_1) {
                setTimeout(function () {
                  scrollIntoLast$1();
                });
              }
            } else {
              logger.error('OpenChannel | useFileUploadCallback: Sending file message failed', {
                message: message,
                error: error
              });
              message.localUrl = URL.createObjectURL(file);
              message.file = file;
              messagesDispatcher({
                type: SENDING_MESSAGE_FAILED,
                payload: message
              });
            }
          });
          messagesDispatcher({
            type: SENDING_MESSAGE_START,
            payload: {
              message: __assign(__assign({}, pendingMessage), {
                url: URL.createObjectURL(file),
                // pending thumbnail message seems to be failed
                requestState: 'pending'
              }),
              channel: currentOpenChannel
            }
          });
        }
      }
    }, [currentOpenChannel, onBeforeSendFileMessage, checkScrollBottom, imageCompression]);
  }

  function useUpdateMessageCallback$1(_a, _b) {
    var currentOpenChannel = _a.currentOpenChannel,
        onBeforeSendUserMessage = _a.onBeforeSendUserMessage;
    var sdk = _b.sdk,
        logger = _b.logger,
        messagesDispatcher = _b.messagesDispatcher;
    return React__default.useCallback(function (messageId, text, callback) {
      var createParamsDefault = function createParamsDefault(txt) {
        var params = new sdk.UserMessageParams();
        params.message = txt;
        return params;
      };

      if (onBeforeSendUserMessage && typeof onBeforeSendUserMessage === 'function') {
        logger.info('OpenChannel | useUpdateMessageCallback: Creating params using onBeforeUpdateUserMessage');
      }

      var params = onBeforeSendUserMessage ? onBeforeSendUserMessage(text) : createParamsDefault(text);
      currentOpenChannel.updateUserMessage(messageId, params, function (message, error) {
        if (callback) {
          callback();
        }

        if (!error) {
          logger.info('OpenChannel | useUpdateMessageCallback: Updating message succeeded', {
            message: message,
            params: params
          });
          messagesDispatcher({
            type: ON_MESSAGE_UPDATED$1,
            payload: {
              channel: currentOpenChannel,
              message: message
            }
          });
        } else {
          logger.warning('OpenChannel | useUpdateMessageCallback: Updating message failed', error);
        }
      });
    }, [currentOpenChannel, onBeforeSendUserMessage]);
  }

  function useDeleteMessageCallback$1(_a, _b) {
    var currentOpenChannel = _a.currentOpenChannel;
    var logger = _b.logger,
        messagesDispatcher = _b.messagesDispatcher;
    return React__default.useCallback(function (message, callback) {
      logger.info('OpenChannel | useDeleteMessageCallback: Deleting message', message);
      var sendingStatus = message.sendingStatus;
      logger.info('OpenChannel | useDeleteMessageCallback: Deleting message requestState', sendingStatus);

      if (sendingStatus === 'failed' || sendingStatus === 'pending') {
        logger.info('OpenChannel | useDeleteMessageCallback: Deleted message from local', message);
        messagesDispatcher({
          type: ON_MESSAGE_DELETED_BY_REQ_ID$1,
          payload: message.reqId
        });

        if (callback) {
          callback();
        }
      } else {
        if (!(message.messageType === 'file' || message.messageType === 'user')) {
          return;
        }

        var messageToDelete = message;
        currentOpenChannel.deleteMessage(messageToDelete, function (error) {
          logger.info('OpenChannel | useDeleteMessageCallback: Deleting message on server', sendingStatus);

          if (callback) {
            callback();
          }

          if (!error) {
            logger.info('OpenChannel | useDeleteMessageCallback: Deleting message succeeded', message);
            messagesDispatcher({
              type: ON_MESSAGE_DELETED$1,
              payload: {
                channel: currentOpenChannel,
                messageId: message.messageId
              }
            });
          } else {
            logger.warning('OpenChannel | useDeleteMessageCallback: Deleting message failed', error);
          }
        });
      }
    }, [currentOpenChannel]);
  }

  function useResendMessageCallback$1(_a, _b) {
    var currentOpenChannel = _a.currentOpenChannel;
    var logger = _b.logger,
        messagesDispatcher = _b.messagesDispatcher;
    return React__default.useCallback(function (failedMessage) {
      logger.info('OpenChannel | useResendMessageCallback: Resending message has started', failedMessage);
      var messageType = failedMessage.messageType,
          file = failedMessage.file;

      if (failedMessage && typeof failedMessage.isResendable === 'function' && failedMessage.isResendable()) {
        // eslint-disable-next-line no-param-reassign
        failedMessage.requestState = 'pending';
        messagesDispatcher({
          type: RESENDING_MESSAGE_START,
          payload: {
            channel: currentOpenChannel,
            message: failedMessage
          }
        }); // userMessage

        if (messageType === 'user' && failedMessage.messageType === 'user') {
          currentOpenChannel.resendUserMessage(failedMessage, function (message, error) {
            if (!error) {
              logger.info('OpenChannel | useResendMessageCallback: Reseding message succeeded', message);
              messagesDispatcher({
                type: SENDING_MESSAGE_SUCCEEDED,
                payload: message
              });
            } else {
              logger.warning('OpenChannel | useResendMessageCallback: Resending message failed', error); // eslint-disable-next-line no-param-reassign

              failedMessage.requestState = 'failed';
              messagesDispatcher({
                type: SENDING_MESSAGE_FAILED,
                payload: failedMessage
              });
            }
          });
          return;
        } // fileMessage


        if (messageType === 'file' && failedMessage.messageType === 'file') {
          currentOpenChannel.resendFileMessage(failedMessage, file, function (message, error) {
            if (!error) {
              logger.info('OpenChannel | useResendMessageCallback: Resending file message succeeded', message);
              messagesDispatcher({
                type: SENDING_MESSAGE_SUCCEEDED,
                payload: message
              });
            } else {
              logger.warning('OpenChannel | useResendMessageCallback: Resending file message failed', error); // eslint-disable-next-line no-param-reassign

              failedMessage.requestState = 'failed';
              messagesDispatcher({
                type: SENDING_MESSAGE_FAILED,
                payload: failedMessage
              });
            }
          });
        }
      } else {
        // to alert user on console
        // eslint-disable-next-line no-console
        console.error('OpenChannel | useResendMessageCallback: Message is not resendable');
        logger.warning('OpenChannel | useResendMessageCallback: Message is not resendable', failedMessage);
      }
    }, [currentOpenChannel]);
  }

  var COMPONENT_CLASS_NAME$3 = 'sendbird-openchannel-conversation';
  var OpenchannelConversation = function OpenchannelConversation(props) {
    var // internal props
    stores = props.stores,
        config = props.config,
        // normal props
    useMessageGrouping = props.useMessageGrouping,
        channelUrl = props.channelUrl,
        _a = props.queries,
        queries = _a === void 0 ? {} : _a,
        disableUserProfile = props.disableUserProfile,
        _b = props.fetchingParticipants,
        fetchingParticipants = _b === void 0 ? false : _b,
        // We didn't decide to support fetching participant list
    renderCustomMessage = props.renderCustomMessage,
        renderUserProfile = props.renderUserProfile,
        renderChannelTitle = props.renderChannelTitle,
        renderMessageInput = props.renderMessageInput,
        onBeforeSendUserMessage = props.onBeforeSendUserMessage,
        onBeforeSendFileMessage = props.onBeforeSendFileMessage,
        onChatHeaderActionClick = props.onChatHeaderActionClick;
    var sdkStore = stores.sdkStore,
        userStore = stores.userStore;
    var userId = config.userId,
        isOnline = config.isOnline,
        logger = config.logger,
        pubSub = config.pubSub,
        imageCompression = config.imageCompression;
    var sdk = sdkStore.sdk;
    var user = userStore.user; // hook variables

    var _c = React__default.useReducer(reducer$5, initialState$1),
        messagesStore = _c[0],
        messagesDispatcher = _c[1];

    var allMessages = messagesStore.allMessages,
        loading = messagesStore.loading,
        initialized = messagesStore.initialized,
        currentOpenChannel = messagesStore.currentOpenChannel,
        isInvalid = messagesStore.isInvalid,
        hasMore = messagesStore.hasMore,
        lastMessageTimestamp = messagesStore.lastMessageTimestamp,
        operators = messagesStore.operators,
        bannedParticipantIds = messagesStore.bannedParticipantIds,
        mutedParticipantIds = messagesStore.mutedParticipantIds; // ref

    var messageInputRef = React__default.useRef(null); // useSendMessageCallback

    var conversationScrollRef = React__default.useRef(null); // useScrollAfterSendMessageCallback

    var stringSet = React__default.useContext(LocalizationContext).stringSet; // const

    var sdkInit = sdkStore.initialized;
    var userFilledMessageListParams = queries ? queries.messageListParams : null;
    var disabled = !initialized || !isOnline || isDisabledBecauseFrozen$1(currentOpenChannel, userId); // || utils.isDisabledBecauseMuted(mutedParticipantIds, userId)

    var userDefinedDisableUserProfile = disableUserProfile || config.disableUserProfile;
    var userDefinedRenderProfile = renderUserProfile || config.renderUserProfile; // useMemo

    var amIBanned = React__default.useMemo(function () {
      return bannedParticipantIds.indexOf(user.userId) >= 0;
    }, [channelUrl, bannedParticipantIds, user]);
    var amIMuted = React__default.useMemo(function () {
      return mutedParticipantIds.indexOf(user.userId) >= 0;
    }, [channelUrl, mutedParticipantIds, user]);
    var amIOperator = React__default.useMemo(function () {
      return operators.map(function (operator) {
        return operator.userId;
      }).indexOf(user.userId) >= 0;
    }, [channelUrl, operators, user]); // use hooks

    useSetChannel$2({
      channelUrl: channelUrl,
      sdkInit: sdkInit,
      fetchingParticipants: fetchingParticipants
    }, {
      sdk: sdk,
      logger: logger,
      messagesDispatcher: messagesDispatcher
    });
    var checkScrollBottom = useCheckScrollBottom({
      conversationScrollRef: conversationScrollRef
    }, {
      logger: logger
    });
    useHandleChannelEvents$1({
      currentOpenChannel: currentOpenChannel,
      checkScrollBottom: checkScrollBottom
    }, {
      sdk: sdk,
      logger: logger,
      messagesDispatcher: messagesDispatcher
    });
    useInitialMessagesFetch$1({
      currentOpenChannel: currentOpenChannel,
      userFilledMessageListParams: userFilledMessageListParams
    }, {
      sdk: sdk,
      logger: logger,
      messagesDispatcher: messagesDispatcher
    });
    var onScroll = useScrollCallback$2({
      currentOpenChannel: currentOpenChannel,
      lastMessageTimestamp: lastMessageTimestamp
    }, {
      sdk: sdk,
      logger: logger,
      messagesDispatcher: messagesDispatcher,
      hasMore: hasMore,
      userFilledMessageListParams: userFilledMessageListParams
    });
    var handleSendMessage = useSendMessageCallback$1({
      currentOpenChannel: currentOpenChannel,
      onBeforeSendUserMessage: onBeforeSendUserMessage,
      checkScrollBottom: checkScrollBottom,
      messageInputRef: messageInputRef
    }, {
      sdk: sdk,
      logger: logger,
      messagesDispatcher: messagesDispatcher
    });
    var handleFileUpload = useFileUploadCallback({
      currentOpenChannel: currentOpenChannel,
      onBeforeSendFileMessage: onBeforeSendFileMessage,
      checkScrollBottom: checkScrollBottom,
      imageCompression: imageCompression
    }, {
      sdk: sdk,
      logger: logger,
      messagesDispatcher: messagesDispatcher
    });
    var updateMessage = useUpdateMessageCallback$1({
      currentOpenChannel: currentOpenChannel,
      onBeforeSendUserMessage: onBeforeSendUserMessage
    }, {
      sdk: sdk,
      logger: logger,
      messagesDispatcher: messagesDispatcher
    });
    var deleteMessage = useDeleteMessageCallback$1({
      currentOpenChannel: currentOpenChannel
    }, {
      logger: logger,
      messagesDispatcher: messagesDispatcher
    });
    var resendMessage = useResendMessageCallback$1({
      currentOpenChannel: currentOpenChannel
    }, {
      logger: logger,
      messagesDispatcher: messagesDispatcher
    }); // handle API calls from withSendbird

    React__default.useEffect(function () {
      var subscriber = new Map();

      if (!pubSub || !pubSub.subscribe) {
        return;
      }

      subscriber.set(SEND_USER_MESSAGE, pubSub.subscribe(SEND_USER_MESSAGE, function (msg) {
        var channel = msg.channel,
            message = msg.message;
        scrollIntoLast$1();

        if (channel && channelUrl === channel.url) {
          messagesDispatcher({
            type: SENDING_MESSAGE_SUCCEEDED,
            payload: message
          });
        }
      }));
      subscriber.set(SEND_MESSAGE_START, pubSub.subscribe(SEND_MESSAGE_START, function (msg) {
        var channel = msg.channel,
            message = msg.message;

        if (channel && channelUrl === channel.url) {
          messagesDispatcher({
            type: SENDING_MESSAGE_START,
            payload: message
          });
        }
      }));
      subscriber.set(SEND_FILE_MESSAGE, pubSub.subscribe(SEND_FILE_MESSAGE, function (msg) {
        var channel = msg.channel,
            message = msg.message;
        scrollIntoLast$1();

        if (channel && channelUrl === channel.url) {
          messagesDispatcher({
            type: SENDING_MESSAGE_SUCCEEDED,
            payload: message
          });
        }
      }));
      subscriber.set(UPDATE_USER_MESSAGE, pubSub.subscribe(UPDATE_USER_MESSAGE, function (msg) {
        var channel = msg.channel,
            message = msg.message,
            fromSelector = msg.fromSelector;

        if (fromSelector && channel && channelUrl === channel.url) {
          messagesDispatcher({
            type: ON_MESSAGE_UPDATED$1,
            payload: {
              channel: channel,
              message: message
            }
          });
        }
      }));
      subscriber.set(DELETE_MESSAGE, pubSub.subscribe(DELETE_MESSAGE, function (msg) {
        var channel = msg.channel,
            messageId = msg.messageId;

        if (channel && channelUrl === channel.url) {
          messagesDispatcher({
            type: ON_MESSAGE_DELETED$1,
            payload: messageId
          });
        }
      }));
      return function () {
        if (subscriber) {
          subscriber.forEach(function (s) {
            try {
              s.remove();
            } catch (_a) {//
            }
          });
        }
      };
    }, [channelUrl, sdkInit]);

    if (!currentOpenChannel || !currentOpenChannel.url || amIBanned) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: COMPONENT_CLASS_NAME$3
      }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes.NO_CHANNELS
      }));
    }

    if (loading) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: COMPONENT_CLASS_NAME$3
      }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes.LOADING
      }));
    }

    if (isInvalid) {
      return /*#__PURE__*/React__default__default.createElement("div", {
        className: COMPONENT_CLASS_NAME$3
      }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
        type: PlaceHolderTypes.WRONG
      }));
    }

    return /*#__PURE__*/React__default__default.createElement(UserProfileProvider, {
      className: COMPONENT_CLASS_NAME$3,
      disableUserProfile: userDefinedDisableUserProfile,
      renderUserProfile: userDefinedRenderProfile
    }, renderChannelTitle ? renderChannelTitle({
      channel: currentOpenChannel,
      user: user
    }) : /*#__PURE__*/React__default__default.createElement(OpenchannelConversationHeader, {
      title: currentOpenChannel.name,
      subTitle: kFormatter$2(currentOpenChannel.participantCount) + " " + stringSet.OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS,
      coverImage: currentOpenChannel.coverUrl,
      onActionClick: onChatHeaderActionClick,
      amIOperator: amIOperator
    }), currentOpenChannel.isFrozen && /*#__PURE__*/React__default__default.createElement(FrozenNotification$1, null), /*#__PURE__*/React__default__default.createElement(OpenchannelConversationScroll$1, {
      ref: conversationScrollRef,
      renderCustomMessage: renderCustomMessage,
      openchannel: currentOpenChannel,
      user: user,
      useMessageGrouping: useMessageGrouping,
      isOnline: isOnline,
      allMessages: allMessages,
      onScroll: onScroll,
      hasMore: hasMore,
      updateMessage: updateMessage,
      deleteMessage: deleteMessage,
      resendMessage: resendMessage
    }), renderMessageInput ? renderMessageInput({
      channel: currentOpenChannel,
      user: user,
      disabled: disabled
    }) : /*#__PURE__*/React__default__default.createElement(MessageInputWrapper$1$1, {
      channel: currentOpenChannel,
      user: user,
      ref: messageInputRef,
      disabled: disabled || amIMuted,
      onSendMessage: handleSendMessage,
      onFileUpload: handleFileUpload,
      renderMessageInput: renderMessageInput
    }));
  };
  var index = withSendbirdContext(OpenchannelConversation);

  function ChannelAvatar$1(_a) {
    var channel = _a.channel,
        theme = _a.theme,
        _b = _a.height,
        height = _b === void 0 ? 56 : _b,
        _c = _a.width,
        width = _c === void 0 ? 56 : _c;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    var memoizedAvatar = React__default.useMemo(function () {
      return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
        className: "sendbird-chat-header__avatar--open-channel",
        src: getOpenChannelAvatar(channel),
        width: width + "px",
        height: height + "px",
        alt: channel.name || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE
      });
    }, [channel.coverUrl, theme]);
    return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, memoizedAvatar);
  }

  var EditDetails$1 = function EditDetails(props) {
    var _onSubmit = props.onSubmit,
        onCancel = props.onCancel,
        channel = props.channel,
        theme = props.theme;
    var inputRef = React__default.useRef(null);
    var formRef = React__default.useRef(null);
    var hiddenInputRef = React__default.useRef(null);

    var _a = React__default.useState(null),
        currentImg = _a[0],
        setCurrentImg = _a[1];

    var _b = React__default.useState(null),
        newFile = _b[0],
        setNewFile = _b[1];

    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    var title = channel.name;
    return /*#__PURE__*/React__default__default.createElement(Modal, {
      titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE,
      submitText: stringSet.BUTTON__SAVE,
      onCancel: onCancel,
      onSubmit: function onSubmit() {
        if (title !== '' && !inputRef.current.value) {
          if (formRef.current.reportValidity) {
            // might not work in explorer
            formRef.current.reportValidity();
          }

          return;
        }

        _onSubmit(newFile, inputRef.current.value);

        onCancel();
      },
      type: Type$1.PRIMARY
    }, /*#__PURE__*/React__default__default.createElement("form", {
      className: "channel-profile-form",
      ref: formRef,
      onSubmit: function onSubmit(e) {
        e.preventDefault();
      }
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "channel-profile-form__img-section"
    }, /*#__PURE__*/React__default__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE), /*#__PURE__*/React__default__default.createElement("div", {
      className: "channel-profile-form__avatar"
    }, currentImg ? /*#__PURE__*/React__default__default.createElement(Avatar$1, {
      height: "80px",
      width: "80px",
      src: currentImg
    }) : /*#__PURE__*/React__default__default.createElement(ChannelAvatar$1, {
      height: 80,
      width: 80,
      channel: channel,
      theme: theme
    })), /*#__PURE__*/React__default__default.createElement("input", {
      ref: hiddenInputRef,
      type: "file",
      accept: "image/gif, image/jpeg, image/png",
      style: {
        display: 'none'
      },
      onChange: function onChange(e) {
        setCurrentImg(URL.createObjectURL(e.target.files[0]));
        setNewFile(e.target.files[0]);
        hiddenInputRef.current.value = '';
      }
    }), /*#__PURE__*/React__default__default.createElement(TextButton, {
      className: "channel-profile-form__avatar-button",
      onClick: function onClick() {
        return hiddenInputRef.current.click();
      },
      notUnderline: true
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.BUTTON_1,
      color: LabelColors.PRIMARY
    }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))), /*#__PURE__*/React__default__default.createElement("div", {
      className: "channel-profile-form__name-section"
    }, /*#__PURE__*/React__default__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME), /*#__PURE__*/React__default__default.createElement(Input, {
      required: title !== '',
      name: "channel-profile-form__name",
      ref: inputRef,
      value: title,
      placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER
    }))));
  };

  function ChannelProfile$1(props) {
    var disabled = props.disabled,
        channel = props.channel,
        theme = props.theme,
        onChannelInfoChange = props.onChannelInfoChange;
    var title = channel.name;

    var _a = React__default.useState(false),
        showModal = _a[0],
        setShowModal = _a[1];

    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-profile"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-profile--inner"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-profile__avatar"
    }, /*#__PURE__*/React__default__default.createElement(ChannelAvatar$1, {
      channel: channel,
      theme: theme,
      height: 80,
      width: 80
    })), /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_1,
      className: "sendbird-openchannel-profile__title"
    }, title || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE), /*#__PURE__*/React__default__default.createElement(TextButton, {
      disabled: disabled,
      className: "sendbird-openchannel-profile__edit",
      onClick: function onClick() {
        if (disabled) {
          return;
        }

        setShowModal(true);
      },
      notUnderline: true
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.BUTTON_1,
      color: disabled ? LabelColors.ONBACKGROUND_2 : LabelColors.PRIMARY
    }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)), showModal && /*#__PURE__*/React__default__default.createElement(EditDetails$1, {
      onCancel: function onCancel() {
        return setShowModal(false);
      },
      onSubmit: onChannelInfoChange,
      channel: channel,
      theme: theme
    })));
  }

  function ParticipantsModal(_a) {
    var hideModal = _a.hideModal,
        channel = _a.channel;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var _b = React__default.useState([]),
        participants = _b[0],
        setParticipants = _b[1];

    var _c = React__default.useState(null),
        participantListQuery = _c[0],
        setParticipantListQuery = _c[1];

    React__default.useEffect(function () {
      if (!channel || !channel.createParticipantListQuery) {
        return;
      }

      var participantListQuery = channel.createParticipantListQuery();
      setParticipantListQuery(participantListQuery);
      participantListQuery.next(function (participantList, error) {
        if (error) {
          return;
        }

        setParticipants(participantList);
      });
    }, []);
    return /*#__PURE__*/React__default__default.createElement("div", null, /*#__PURE__*/React__default__default.createElement(Modal, {
      hideFooter: true,
      onCancel: function onCancel() {
        return hideModal();
      },
      onSubmit: noop,
      titleText: stringSet.OPEN_CHANNEL_SETTINGS__ALL_PARTICIPANTS_TITLE
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-more-members__popup-scroll",
      onScroll: function onScroll(e) {
        var hasNext = participantListQuery.hasNext;
        var target = e.target;
        var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

        if (hasNext && fetchMore) {
          participantListQuery.next(function (fetchedParticipants, error) {
            if (error) {
              return;
            }

            setParticipants(__spreadArray(__spreadArray([], participants), fetchedParticipants));
          });
        }
      }
    }, participants.map(function (p) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem, {
        user: p,
        key: p.userId
      });
    }))));
  }

  var SHOWN_MEMBER_MAX$1 = 10;
  var UserListItem$3 = function UserListItem(_a) {
    var member = _a.member,
        _b = _a.currentUser,
        currentUser = _b === void 0 ? '' : _b;
    var avatarRef = React__default.useRef(null);

    var _c = React__default.useContext(UserProfileContext),
        disableUserProfile = _c.disableUserProfile,
        renderUserProfile = _c.renderUserProfile;

    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-participants-accordion__member"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-participants-accordion__member-avatar"
    }, /*#__PURE__*/React__default__default.createElement(ContextMenu, {
      menuTrigger: function menuTrigger(toggleDropdown) {
        return /*#__PURE__*/React__default__default.createElement(Avatar$1, {
          onClick: function onClick() {
            if (!disableUserProfile) {
              toggleDropdown();
            }
          },
          ref: avatarRef,
          src: member.profileUrl,
          width: 24,
          height: 24
        });
      },
      menuItems: function menuItems(closeDropdown) {
        return /*#__PURE__*/React__default__default.createElement(MenuItems, {
          openLeft: true,
          parentRef: avatarRef // for catching location(x, y) of MenuItems
          ,
          parentContainRef: avatarRef // for toggling more options(menus & reactions)
          ,
          closeDropdown: closeDropdown,
          style: {
            paddingTop: 0,
            paddingBottom: 0
          }
        }, renderUserProfile ? renderUserProfile({
          user: member,
          currentUserId: currentUser,
          close: closeDropdown
        }) : /*#__PURE__*/React__default__default.createElement(ConnectedUserProfile, {
          disableMessaging: true,
          user: member,
          currentUserId: currentUser,
          onSuccess: closeDropdown
        }));
      }
    })), /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_1
    }, member.nickname || stringSet.NO_NAME, currentUser === member.userId && stringSet.YOU));
  };
  function ParticipantsAccordion(_a) {
    var channel = _a.channel,
        currentUser = _a.currentUser;

    var _b = React__default.useState([]),
        participants = _b[0],
        setParticipants = _b[1];

    var _c = React__default.useState(false),
        showMoreModal = _c[0],
        setShowMoreModal = _c[1];

    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    React__default.useEffect(function () {
      if (!channel || !channel.createParticipantListQuery) {
        return;
      }

      var participantListQuery = channel.createParticipantListQuery();
      participantListQuery.next(function (participantList, error) {
        if (error) {
          return;
        }

        setParticipants(participantList);
      });
    }, [channel]);
    return /*#__PURE__*/React__default__default.createElement(Accordion, {
      className: "sendbird-participants-accordion",
      id: "participants",
      renderTitle: function renderTitle() {
        return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement(Icon, {
          type: IconTypes.MEMBERS,
          fillColor: IconColors.PRIMARY,
          width: 24,
          height: 24,
          className: "sendbird-openchannel-settings__accordion-icon"
        }), /*#__PURE__*/React__default__default.createElement(Label, {
          type: LabelTypography.SUBTITLE_1,
          color: LabelColors.ONBACKGROUND_1
        }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_ACCORDION_TITLE));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React__default__default.createElement("div", {
          className: ""
        }, /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-participants-accordion__list"
        }, participants.slice(0, SHOWN_MEMBER_MAX$1).map(function (p) {
          return /*#__PURE__*/React__default__default.createElement(UserListItem$3, {
            member: p,
            currentUser: currentUser,
            key: p.userId
          });
        }), participants && participants.length === 0 ? /*#__PURE__*/React__default__default.createElement(Label, {
          className: "sendbird-channel-settings__empty-list",
          type: LabelTypography.SUBTITLE_2,
          color: LabelColors.ONBACKGROUND_3
        }, stringSet.OPEN_CHANNEL_SETTINGS__EMPTY_LIST) : null), participants.length >= SHOWN_MEMBER_MAX$1 && /*#__PURE__*/React__default__default.createElement("div", {
          className: "sendbird-participants-accordion__footer"
        }, /*#__PURE__*/React__default__default.createElement(Button, {
          className: "sendbird-participants-accordion__footer__all-participants",
          type: ButtonTypes.SECONDARY,
          size: ButtonSizes.SMALL,
          onClick: function onClick() {
            return setShowMoreModal(true);
          }
        }, stringSet.OPEN_CHANNEL_SETTINGS__SEE_ALL), showMoreModal && /*#__PURE__*/React__default__default.createElement(ParticipantsModal, {
          currentUser: currentUser,
          hideModal: function hideModal() {
            setShowMoreModal(false);
          },
          channel: channel
        })));
      }
    });
  }

  function DeleteChannel(_a) {
    var isOnline = _a.isOnline,
        onDeleteChannel = _a.onDeleteChannel;

    var _b = React__default.useState(false),
        showDeleteChannelModal = _b[0],
        setShowDeleteChannelModal = _b[1];

    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings__panel-item\n          sendbird-openchannel-settings__delete-channel\n            " + (!isOnline ? 'sendbird-openchannel-settings__panel-item__disabled' : ''),
      role: "button",
      tabIndex: 0,
      onKeyDown: function onKeyDown() {
        if (!isOnline) {
          return;
        }

        setShowDeleteChannelModal(true);
      },
      onClick: function onClick() {
        if (!isOnline) {
          return;
        }

        setShowDeleteChannelModal(true);
      }
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.DELETE,
      className: ['sendbird-openchannel-settings__panel-icon-left', 'sendbird-openchannel-settings__panel-icon__delete'].join(' '),
      height: "24px",
      width: "24px"
    }), /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.SUBTITLE_1,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL)), showDeleteChannelModal && /*#__PURE__*/React__default__default.createElement(Modal, {
      onCancel: function onCancel() {
        setShowDeleteChannelModal(false);
      },
      onSubmit: function onSubmit() {
        onDeleteChannel();
      },
      submitText: stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_SUBMIT,
      titleText: stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_TITLE
    }));
  }

  function ParticipantsList(_a) {
    var channel = _a.channel,
        onCloseClick = _a.onCloseClick,
        currentUser = _a.currentUser;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;

    var _b = React__default.useState([]),
        participants = _b[0],
        setParticipants = _b[1];

    var _c = React__default.useState(null),
        participantListQuery = _c[0],
        setParticipantListQuery = _c[1];

    React__default.useEffect(function () {
      if (!channel || !channel.createParticipantListQuery) {
        return;
      }

      var participantListQuery = channel.createParticipantListQuery();
      setParticipantListQuery(participantListQuery);
      participantListQuery.next(function (participantList, error) {
        if (error) {
          return;
        }

        setParticipants(participantList);
      });
    }, [channel]);
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings__participant"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings__header"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE), /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.CLOSE,
      className: "sendbird-openchannel-settings__close-icon",
      height: "24px",
      width: "24px",
      onClick: function onClick() {
        onCloseClick();
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings__participants-list",
      onScroll: function onScroll(e) {
        var hasNext = participantListQuery.hasNext;
        var target = e.target;
        var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

        if (hasNext && fetchMore) {
          participantListQuery.next(function (fetchedParticipants, error) {
            if (error) {
              return;
            }

            setParticipants(__spreadArray(__spreadArray([], participants), fetchedParticipants));
          });
        }
      }
    }, /*#__PURE__*/React__default__default.createElement("div", null, participants.map(function (p) {
      return /*#__PURE__*/React__default__default.createElement(UserListItem$3, {
        member: p,
        currentUser: currentUser,
        key: p.userId
      });
    }), participants && participants.length === 0 ? /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-channel-settings__empty-list",
      type: LabelTypography.SUBTITLE_2,
      color: LabelColors.ONBACKGROUND_3
    }, stringSet.OPEN_CHANNEL_SETTINGS__EMPTY_LIST) : null)));
  }

  function InvalidChannel(_a) {
    var onCloseClick = _a.onCloseClick;
    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    return /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings"
    }, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings__header"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default__default.createElement(Icon, {
      type: IconTypes.CLOSE,
      className: "sendbird-openchannel-settings__close-icon",
      height: "24px",
      width: "24px",
      onClick: function onClick() {
        onCloseClick();
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings__placeholder"
    }, /*#__PURE__*/React__default__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes$1.WRONG
    })));
  }

  var emptyLogger = function emptyLogger() {
    return {
      info: noop,
      error: noop,
      warning: noop
    };
  };

  function OpenChannelSettings(props) {
    var channelUrl = props.channelUrl,
        _a = props.onCloseClick,
        _onCloseClick = _a === void 0 ? noop : _a,
        onBeforeUpdateChannel = props.onBeforeUpdateChannel,
        _b = props.onChannelModified,
        onChannelModified = _b === void 0 ? noop : _b,
        renderChannelProfile = props.renderChannelProfile,
        renderUserProfile = props.renderUserProfile,
        _onDeleteChannel = props.onDeleteChannel,
        _c = props.disableUserProfile,
        disableUserProfile = _c === void 0 ? false : _c,
        _d = props.logger,
        logger = _d === void 0 ? emptyLogger() : _d,
        sdk = props.sdk,
        theme = props.theme,
        user = props.user,
        isOnline = props.isOnline;

    var currentUser = user.userId;

    var _e = React__default.useState(null),
        channel = _e[0],
        setChannel = _e[1];

    var stringSet = React__default.useContext(LocalizationContext).stringSet;
    React__default.useEffect(function () {
      if (!channelUrl || !sdk || !sdk.getConnectionState) {
        setChannel(null);
        return;
      }

      sdk.OpenChannel.getChannel(channelUrl, function (openChannel, error) {
        if (!error) {
          setChannel(openChannel);
        } else {
          setChannel(null);
        }
      });
    }, [channelUrl, sdk]);

    if (!channel) {
      return /*#__PURE__*/React__default__default.createElement(InvalidChannel, {
        onCloseClick: function onCloseClick() {
          logger.info('OpenChannelSettings: Click close');

          if (_onCloseClick) {
            _onCloseClick();
          }
        }
      });
    }

    return /*#__PURE__*/React__default__default.createElement(UserProfileProvider, {
      className: "sendbird-openchannel-settings",
      disableUserProfile: disableUserProfile,
      renderUserProfile: renderUserProfile
    }, channel.isOperator(user) ? /*#__PURE__*/React__default__default.createElement(React__default__default.Fragment, null, /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings__header"
    }, /*#__PURE__*/React__default__default.createElement(Label, {
      type: LabelTypography.H_2,
      color: LabelColors.ONBACKGROUND_1
    }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-settings__close-icon",
      type: IconTypes.CLOSE,
      height: "24px",
      width: "24px",
      onClick: function onClick() {
        _onCloseClick();
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings__profile"
    }, renderChannelProfile ? renderChannelProfile({
      channel: channel,
      user: user
    }) : /*#__PURE__*/React__default__default.createElement(ChannelProfile$1, {
      disabled: !isOnline,
      channel: channel,
      theme: theme,
      onChannelInfoChange: function onChannelInfoChange(currentImg, currentTitle) {
        logger.info('ChannelSettings: Channel information being updated');

        if (onBeforeUpdateChannel) {
          var params = onBeforeUpdateChannel(currentTitle, currentImg, channel.data);
          logger.info('ChannelSettings: onBeforeUpdateChannel', params);
          channel.updateChannel(params, function (openChannel) {
            onChannelModified(openChannel); // setChannel(openChannel) => alone not working

            setChannel(null);
            setChannel(openChannel);
          });
        } else {
          channel.updateChannel(currentTitle, currentImg, channel.data, function (openChannel) {
            logger.info('ChannelSettings: Channel information updated', openChannel);
            onChannelModified(openChannel); // setChannel(openChannel) => alone not working

            setChannel(null);
            setChannel(openChannel);
          });
        }
      }
    })), /*#__PURE__*/React__default__default.createElement("div", {
      className: "sendbird-openchannel-settings__url"
    }, /*#__PURE__*/React__default__default.createElement(Icon, {
      className: "sendbird-openchannel-settings__copy-icon",
      type: IconTypes.COPY,
      height: "22px",
      width: "22px",
      onClick: function onClick() {
        copyToClipboard(channel.url);
      }
    }), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-settings__url-label",
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, stringSet.OPEN_CHANNEL_SETTINGS__OPERATOR_URL), /*#__PURE__*/React__default__default.createElement(Label, {
      className: "sendbird-openchannel-settings__url-value",
      type: LabelTypography.SUBTITLE_2
    }, channel.url)), /*#__PURE__*/React__default__default.createElement(AccordionGroup, null, /*#__PURE__*/React__default__default.createElement(ParticipantsAccordion, {
      channel: channel,
      currentUser: currentUser
    })), /*#__PURE__*/React__default__default.createElement(DeleteChannel, {
      isOnline: isOnline,
      onDeleteChannel: function onDeleteChannel() {
        channel.delete(function (response, error) {
          if (error) {
            logger.warning('OpenChannelSettings: Delete channel failed', error);
            return;
          }

          logger.info('OpenChannelSettings: Delete channel success', response);

          if (_onDeleteChannel) {
            _onDeleteChannel(channel);
          }
        });
      }
    })) : /*#__PURE__*/React__default__default.createElement(ParticipantsList, {
      currentUser: currentUser,
      channel: channel,
      onCloseClick: function onCloseClick() {
        _onCloseClick();
      }
    }));
  }

  var ChannelSettingsWithSendbird = withSendbirdContext(OpenChannelSettings, function (store) {
    var logger = store && store.config && store.config.logger;
    var theme = store && store.config && store.config.theme || 'light';
    var isOnline = store && store.config && store.config.isOnline;
    var user = store && store.stores && store.stores.userStore && store.stores.userStore.user;
    return {
      sdk: selectors.getSdk(store),
      logger: logger,
      theme: theme,
      isOnline: isOnline,
      user: user
    };
  });

  /**
   * Example:
   * const MyComponent = () => {
   *  const context = useSendbirdStateContext();
   *  const sdk = sendbirdSelectors.getSdk(context);
   *  return (<div>...</div>);
   * }
   */

  function useSendbirdStateContext() {
    var context = React__default.useContext(SendbirdSdkContext);
    return context;
  }

  exports.App = App;
  exports.Channel = Conversation;
  exports.ChannelList = ChannelList$1;
  exports.ChannelSettings = ChannelSettings$1;
  exports.MessageSearch = MessageSearch$1;
  exports.OpenChannel = index;
  exports.OpenChannelSettings = ChannelSettingsWithSendbird;
  exports.SendBirdProvider = Sendbird;
  exports.getAllEmojisFromEmojiContainer = getAllEmojisFromEmojiContainer;
  exports.getEmojiCategoriesFromEmojiContainer = getEmojiCategoriesFromEmojiContainer;
  exports.getEmojisFromEmojiContainer = getEmojisFromEmojiContainer;
  exports.getStringSet = getStringSet;
  exports.sendBirdSelectors = selectors;
  exports.useSendbirdStateContext = useSendbirdStateContext;
  exports.withSendBird = withSendbirdContext;

  return exports;

}({}, React__default, PropTypes, Sb, cssVars, reactDom));
