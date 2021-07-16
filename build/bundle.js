/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./auth/Auth.ctrl.js":
/*!***************************!*\
  !*** ./auth/Auth.ctrl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth.model */ \"./auth/Auth.model.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction authCtrl() {\n  var router = express__WEBPACK_IMPORTED_MODULE_4___default().Router();\n  router.post('/register', /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(req, res) {\n      var _req$body, email, password, userFounded, hashPassword, user, dbUser, token;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _req$body = req.body, email = _req$body.email, password = _req$body.password;\n              _context.prev = 1;\n              _context.next = 4;\n              return _Auth_model__WEBPACK_IMPORTED_MODULE_3__.default.find({\n                email: email\n              });\n\n            case 4:\n              userFounded = _context.sent;\n\n              if (!(userFounded.length > 0)) {\n                _context.next = 9;\n                break;\n              }\n\n              res.status(409).json({\n                message: 'User already exists'\n              });\n              _context.next = 21;\n              break;\n\n            case 9:\n              _context.next = 11;\n              return bcrypt__WEBPACK_IMPORTED_MODULE_5___default().hash(password, 3);\n\n            case 11:\n              hashPassword = _context.sent;\n              user = new _Auth_model__WEBPACK_IMPORTED_MODULE_3__.default(_objectSpread(_objectSpread({}, req.body), {}, {\n                password: hashPassword\n              }));\n              user.role = 'USER';\n              _context.next = 16;\n              return user.save();\n\n            case 16:\n              dbUser = _context.sent;\n              _context.next = 19;\n              return jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().sign({\n                user: user\n              }, 'OPEN-CTS');\n\n            case 19:\n              token = _context.sent;\n              res.status(201).json({\n                accessToken: token\n              });\n\n            case 21:\n              _context.next = 26;\n              break;\n\n            case 23:\n              _context.prev = 23;\n              _context.t0 = _context[\"catch\"](1);\n              res.status(500).json({\n                error: _context.t0\n              });\n\n            case 26:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 23]]);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n  router.post('/login', /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(req, res) {\n      var _req$body2, email, password, foundedUsers, isConform, token;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;\n              _context2.next = 3;\n              return _Auth_model__WEBPACK_IMPORTED_MODULE_3__.default.find({\n                email: email\n              });\n\n            case 3:\n              foundedUsers = _context2.sent;\n\n              if (!(foundedUsers.length > 0)) {\n                _context2.next = 18;\n                break;\n              }\n\n              _context2.next = 7;\n              return bcrypt__WEBPACK_IMPORTED_MODULE_5___default().compare(password, foundedUsers[0].password);\n\n            case 7:\n              isConform = _context2.sent;\n\n              if (!isConform) {\n                _context2.next = 15;\n                break;\n              }\n\n              _context2.next = 11;\n              return jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().sign({\n                user: foundedUsers[0]\n              }, 'OPEN-CTS');\n\n            case 11:\n              token = _context2.sent;\n              res.status(200).json({\n                accessToken: token\n              });\n              _context2.next = 16;\n              break;\n\n            case 15:\n              res.status(403).json({\n                message: 'Bad credentials'\n              });\n\n            case 16:\n              _context2.next = 19;\n              break;\n\n            case 18:\n              res.status(403).json({\n                message: 'Bad credentials'\n              });\n\n            case 19:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n  router.post('/forget-password', /*#__PURE__*/function () {\n    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(req, res) {\n      var email, dbUser, token, content;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              email = req.body.email;\n              _context3.next = 3;\n              return _Auth_model__WEBPACK_IMPORTED_MODULE_3__.default.find({\n                email: email\n              });\n\n            case 3:\n              dbUser = _context3.sent;\n\n              if (!(dbUser.length > 0)) {\n                _context3.next = 12;\n                break;\n              }\n\n              _context3.next = 7;\n              return jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().sign({\n                email: email,\n                id: dbUser[0]._id\n              }, 'OPEN-CTS', {\n                expiresIn: '1000s'\n              });\n\n            case 7:\n              token = _context3.sent;\n              content = \"http://localhost:4200/auth/change-password/\".concat(token);\n              res.status(200).json({\n                link: content\n              });\n              /* transporter.sendMail(setMailOptions(email, content), function (err, data) {\n                   if (err) {\n                       console.log(\"Error \" + err);\n                   } else {\n                       console.log(\"Email sent successfully\");\n                   }\n               });*/\n\n              _context3.next = 13;\n              break;\n\n            case 12:\n              res.status(500).json({\n                message: 'No user with this email'\n              });\n\n            case 13:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x5, _x6) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n  router.post('/change-password/:token', /*#__PURE__*/function () {\n    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(req, res) {\n      var _req$body3, email, password, token, decoded, hashedPassword, user, result, accessToken;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;\n              token = req.params.token;\n              _context4.prev = 2;\n              _context4.next = 5;\n              return jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().verify(token, 'OPEN-CTS');\n\n            case 5:\n              decoded = _context4.sent;\n              _context4.next = 8;\n              return bcrypt__WEBPACK_IMPORTED_MODULE_5___default().hash(password, 3);\n\n            case 8:\n              hashedPassword = _context4.sent;\n              user = {\n                email: email,\n                password: hashedPassword\n              };\n              _context4.next = 12;\n              return _Auth_model__WEBPACK_IMPORTED_MODULE_3__.default.updateOne({\n                _id: decoded.id\n              }, _objectSpread({}, user));\n\n            case 12:\n              result = _context4.sent;\n              console.log(result);\n              accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().sign({\n                email: email,\n                id: decoded.id\n              }, 'OPEN-CTS');\n              res.status(200).json({\n                accessToken: accessToken\n              });\n              _context4.next = 21;\n              break;\n\n            case 18:\n              _context4.prev = 18;\n              _context4.t0 = _context4[\"catch\"](2);\n              res.status(404).json({\n                message: _context4.t0\n              });\n\n            case 21:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[2, 18]]);\n    }));\n\n    return function (_x7, _x8) {\n      return _ref4.apply(this, arguments);\n    };\n  }());\n  return router;\n}\n\nvar transporter = nodemailer__WEBPACK_IMPORTED_MODULE_7___default().createTransport({\n  service: 'gmail',\n  auth: {\n    // type: 'OAuth2',\n    user: 'm.p.gangbadja@gmail.com',\n    pass: \"L'enigmatik_12 Google\" //user: process.env.MAIL_USERNAME,\n    //pass: process.env.MAIL_PASSWORD,\n    //clientId: process.env.OAUTH_CLIENTID,\n    //clientSecret: process.env.OAUTH_CLIENT_SECRET,\n    //refreshToken: process.env.OAUTH_REFRESH_TOKEN\n\n  }\n});\n\nfunction setMailOptions(to, content) {\n  return {\n    from: 'm.p.gangbadja@gmail.com',\n    to: to,\n    subject: 'Nodemailer Project',\n    text: content\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authCtrl);\n\n//# sourceURL=webpack://server/./auth/Auth.ctrl.js?");

/***/ }),

/***/ "./auth/Auth.model.js":
/*!****************************!*\
  !*** ./auth/Auth.model.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nvar userSchema = new Schema({\n  email: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  photo: {\n    type: String\n  },\n  role: String\n});\nvar User = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack://server/./auth/Auth.model.js?");

/***/ }),

/***/ "./crud/Schemas/Client.js":
/*!********************************!*\
  !*** ./crud/Schemas/Client.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ourSchema/schemaType */ \"./ourSchema/schemaType.js\");\n/* harmony import */ var _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Client = {\n  name: _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__.Text,\n  email: _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__.Email,\n  createAt: Date,\n  isValid: Boolean,\n  pwd: _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__.Password,\n  weight: Number,\n  photo: _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__.File\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);\n\n//# sourceURL=webpack://server/./crud/Schemas/Client.js?");

/***/ }),

/***/ "./crud/Schemas/Comment.js":
/*!*********************************!*\
  !*** ./crud/Schemas/Comment.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Comment = {\n  name: String,\n  msg: String\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\n\n//# sourceURL=webpack://server/./crud/Schemas/Comment.js?");

/***/ }),

/***/ "./crud/Schemas/Student.js":
/*!*********************************!*\
  !*** ./crud/Schemas/Student.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ourSchema/schemaType */ \"./ourSchema/schemaType.js\");\n/* harmony import */ var _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Student = {\n  name: {\n    type: _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__.Text,\n    minLength: 3,\n    maxLength: 255,\n    required: true\n  },\n  email: Email,\n  password: Password,\n  confirmPassword: {\n    type: Password,\n    required: true,\n    match: /^[a-z]/\n  },\n  age: Number,\n  avatar: {\n    type: File,\n    accept: 'pdf',\n    maxSize: '1Mo',\n    required: true\n  },\n  createAt: {\n    type: Date,\n    min: '2021-06-06',\n    max: '2025-09-01',\n    required: true,\n    reaire: true\n  },\n  categorie: [{\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n    ref: 'categorie'\n  }],\n  role: {\n    type: _ourSchema_schemaType__WEBPACK_IMPORTED_MODULE_1__.Text,\n    \"enum\": ['USER', 'ADMIN', 'SUPER-ADMIN']\n  },\n  something: String,\n  enable: {\n    type: Boolean,\n    \"default\": true\n  },\n  secondEmail: Email\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Student);\n\n//# sourceURL=webpack://server/./crud/Schemas/Student.js?");

/***/ }),

/***/ "./crud/crud.ctrl.js":
/*!***************************!*\
  !*** ./crud/crud.ctrl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _crud_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud.model */ \"./crud/crud.model.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction crudCtrl(route) {\n  var router = express__WEBPACK_IMPORTED_MODULE_3___default().Router();\n  var model = (0,_crud_model__WEBPACK_IMPORTED_MODULE_4__.default)(route);\n  router.get('/', /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(req, res) {\n      var data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return model.find({});\n\n            case 2:\n              data = _context.sent;\n              console.log(data);\n              res.status(200).json(data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n  router.get('/:id', /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(req, res) {\n      var data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return model.findById(req.params.id);\n\n            case 2:\n              data = _context2.sent;\n              if (!data) res.status(404).json({\n                message: 'Not found!'\n              });\n              res.status(200).json(data);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n  router.post('/', /*#__PURE__*/function () {\n    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(req, res) {\n      var newData;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              newData = new model(_objectSpread({}, req.body));\n              _context3.next = 4;\n              return newData.save();\n\n            case 4:\n              res.status(201).json({\n                message: 'Item Created!',\n                id: newData._id\n              });\n              _context3.next = 10;\n              break;\n\n            case 7:\n              _context3.prev = 7;\n              _context3.t0 = _context3[\"catch\"](0);\n              res.status(422).json(_context3.t0);\n\n            case 10:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 7]]);\n    }));\n\n    return function (_x5, _x6) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n  router[\"delete\"]('/:id', /*#__PURE__*/function () {\n    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(req, res) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return model.deleteOne({\n                _id: req.params.id\n              });\n\n            case 3:\n              res.status(200).json({\n                message: 'Item deleted!'\n              });\n              _context4.next = 9;\n              break;\n\n            case 6:\n              _context4.prev = 6;\n              _context4.t0 = _context4[\"catch\"](0);\n              res.status(422).json(_context4.t0);\n\n            case 9:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 6]]);\n    }));\n\n    return function (_x7, _x8) {\n      return _ref4.apply(this, arguments);\n    };\n  }());\n  router.put('/:id', /*#__PURE__*/function () {\n    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(req, res) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              delete req.body._id;\n              _context5.prev = 1;\n              _context5.next = 4;\n              return model.updateOne({\n                _id: req.params.id\n              }, _objectSpread({}, req.body));\n\n            case 4:\n              res.status(200).json({\n                message: 'Item Updated!'\n              });\n              _context5.next = 10;\n              break;\n\n            case 7:\n              _context5.prev = 7;\n              _context5.t0 = _context5[\"catch\"](1);\n              res.status(422).json(_context5.t0);\n\n            case 10:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5, null, [[1, 7]]);\n    }));\n\n    return function (_x9, _x10) {\n      return _ref5.apply(this, arguments);\n    };\n  }());\n  return router;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (crudCtrl);\n\n//# sourceURL=webpack://server/./crud/crud.ctrl.js?");

/***/ }),

/***/ "./crud/crud.model.js":
/*!****************************!*\
  !*** ./crud/crud.model.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createModel)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ourSchema_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ourSchema/validation */ \"./ourSchema/validation.js\");\n\n\nvar Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nfunction createModel(route) {\n  //return mongoose.model(route.name, new Schema(route.schema))\n  return mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(route.name, (0,_ourSchema_validation__WEBPACK_IMPORTED_MODULE_1__.default)(route.schema));\n}\n\n//# sourceURL=webpack://server/./crud/crud.model.js?");

/***/ }),

/***/ "./crud/crud.router.js":
/*!*****************************!*\
  !*** ./crud/crud.router.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _crud_ctrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.ctrl */ \"./crud/crud.ctrl.js\");\n/* harmony import */ var _Schemas_Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Schemas/Comment */ \"./crud/Schemas/Comment.js\");\n/* harmony import */ var _Schemas_Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Schemas/Client */ \"./crud/Schemas/Client.js\");\n/* harmony import */ var _Schemas_Student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Schemas/Student */ \"./crud/Schemas/Student.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar routes = [{\n  name: 'comments',\n  schema: _Schemas_Comment__WEBPACK_IMPORTED_MODULE_1__.default\n}, {\n  name: 'students',\n  schema: _Schemas_Student__WEBPACK_IMPORTED_MODULE_3__.default\n}, {\n  name: 'clients',\n  schema: _Schemas_Client__WEBPACK_IMPORTED_MODULE_2__.default\n}];\n\nfunction createCrudRouter(app) {\n  var _iterator = _createForOfIteratorHelper(routes),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var r = _step.value;\n      app.use('/' + r.name, (0,_crud_ctrl__WEBPACK_IMPORTED_MODULE_0__.default)(r));\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCrudRouter);\n\n//# sourceURL=webpack://server/./crud/crud.router.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_Auth_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/Auth.ctrl */ \"./auth/Auth.ctrl.js\");\n/* harmony import */ var _crud_crud_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud/crud.router */ \"./crud/crud.router.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect('mongodb+srv://enigmatik:12345@cluster0.x1bw2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useFindAndModify: false,\n  useCreateIndex: true\n})[\"catch\"](function (err) {\n  return console.error(err);\n});\napp.use('/auth', (0,_auth_Auth_ctrl__WEBPACK_IMPORTED_MODULE_3__.default)());\n(0,_crud_crud_router__WEBPACK_IMPORTED_MODULE_4__.default)(app);\nvar PORT = process.env.PORT || 4200;\napp.listen(PORT, function () {});\n\n//# sourceURL=webpack://server/./index.js?");

/***/ }),

/***/ "./ourSchema/schemaType.js":
/*!*********************************!*\
  !*** ./ourSchema/schemaType.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n  Text: __webpack_require__.g.Text = 'Text',\n  // Store String that correspond to mongo String dataType\n  Email: __webpack_require__.g.Email = 'Email',\n  // Store email \n  Password: __webpack_require__.g.Password = 'Password',\n  // Store password \n  File: __webpack_require__.g.File = 'File' // Store file but it uploadUrl in mongo db\n\n};\n\n//# sourceURL=webpack://server/./ourSchema/schemaType.js?");

/***/ }),

/***/ "./ourSchema/validation.js":
/*!*********************************!*\
  !*** ./ourSchema/validation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"@babel/runtime/helpers/typeof\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar Schema = (mongoose__WEBPACK_IMPORTED_MODULE_3___default().Schema);\n\nvar validateEmail = function validateEmail(email) {\n  var re = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\n  return re.test(email);\n}; // default email schema\n\n\nvar defaultEmailSchema = {\n  type: String,\n  trim: true,\n  //lowercase: true,\n  //unique: true,\n  //required: true,\n  validate: [validateEmail, 'Please fill a valid email address'],\n  match: [/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/, 'Please fill a valid email address']\n}; // default password schema\n\nvar defaultPasswordSchema = {\n  type: String,\n  match: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/\n}; // Mongoose default validations\n\nvar MONGOOSE_VALIDATIONS = {\n  \"STRING\": ['minlength', 'maxlength', 'match', 'enum', 'uppercase', 'lowercase', 'trim', 'required', 'validate', 'default'],\n  \"NUMBER\": ['min', 'max', 'enum', 'required', 'validate', 'default'],\n  \"DATE\": ['min', 'max', 'required', 'validate', 'default']\n}; // get intersection of array\n\nvar arrIntersection = function arrIntersection(arr1, arr2) {\n  return arr1.filter(function (x) {\n    return arr2.includes(x);\n  });\n};\n/**\n * \n * @param {object} ourSchema  like a mongo schema with \n * {File : input file, Text: input text, Number for input number }\n * @returns object that is mongoose schema\n */\n\n\nvar generateMongoSchema = function generateMongoSchema(ourSchema) {\n  var builtSchema = {};\n\n  for (var _i = 0, _Object$entries = Object.entries(ourSchema); _i < _Object$entries.length; _i++) {\n    var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries[_i], 2),\n        key = _Object$entries$_i[0],\n        value = _Object$entries$_i[1];\n\n    if (value !== null && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(value) === 'object' && !Array.isArray(value)) {\n      builtSchema = _objectSpread(_objectSpread({}, builtSchema), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, getSchemaFromObjectValue(value)));\n    } else if (Array.isArray(value)) {\n      builtSchema = _objectSpread(_objectSpread({}, builtSchema), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));\n    } else {\n      builtSchema = _objectSpread(_objectSpread({}, builtSchema), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, getDefaultSchema(value)));\n    }\n  }\n\n  return new Schema(builtSchema);\n};\n\nfunction getSchemaFromObjectValue(value) {\n  var type = value['type'];\n  var fieldSchema = {};\n  if (type === 'Email' || type === 'Text' || type === String || type === Boolean) fieldSchema = _objectSpread(_objectSpread({}, value), getDefaultSchema(type));\n\n  if (type === 'Password' || type === 'File' || type === Date) {\n    var typeUpperCase = type === Date ? 'DATE' : 'STRING';\n    fieldSchema = getDefaultSchema(type);\n    fieldSchema = _objectSpread(_objectSpread({}, fieldSchema), foundedMongoValidation(value, typeUpperCase));\n  }\n\n  if (type === (mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId)) fieldSchema = _objectSpread({}, value);\n  return fieldSchema;\n}\n\nfunction foundedMongoValidation(obj, type) {\n  var schema = {};\n  var validations = Object.keys(obj);\n  var foundedValidations = arrIntersection(validations, MONGOOSE_VALIDATIONS[type]);\n  foundedValidations.forEach(function (val) {\n    schema[val] = obj[val];\n  });\n  return schema;\n}\n\nfunction getDefaultSchema(type) {\n  var defaultSchema = {};\n\n  switch (type) {\n    case 'Text':\n      defaultSchema = {\n        type: String\n      };\n      break;\n\n    case 'Email':\n      defaultSchema = defaultEmailSchema;\n      break;\n\n    case 'Password':\n      defaultSchema = defaultPasswordSchema;\n      break;\n\n    case 'File':\n      defaultSchema = {\n        type: String\n      };\n      break;\n\n    case Number:\n      defaultSchema = {\n        type: Number\n      };\n      break;\n\n    case Date:\n      defaultSchema = {\n        type: Date\n      };\n      break;\n\n    case Boolean:\n      defaultSchema = {\n        type: Boolean\n      };\n      break;\n\n    case String:\n      defaultSchema = {\n        type: String\n      };\n      break;\n  }\n\n  return defaultSchema;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMongoSchema);\n\n//# sourceURL=webpack://server/./ourSchema/validation.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");;

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/slicedToArray");;

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/typeof");;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");;

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;