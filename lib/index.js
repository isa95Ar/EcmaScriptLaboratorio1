"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//clase humano 
var humano = /*#__PURE__*/function () {
  function humano() {
    var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Jimy";
    var edad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
    var localidad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Bariloche";

    _classCallCheck(this, humano);

    this.nombre = nombre, this.localidad = localidad, this.edad = edad;
  }

  _createClass(humano, [{
    key: "getYearBorn",
    value: function getYearBorn() {
      var dateObje = new Date();
      var year = dateObje.getFullYear();
      return year - this.edad;
    }
  }, {
    key: "saltar",
    value: function saltar() {
      return "Esta saltando ".concat(this.nombre);
    }
  }]);

  return humano;
}();

var alumno = /*#__PURE__*/function (_humano) {
  _inherits(alumno, _humano);

  var _super = _createSuper(alumno);

  function alumno(nombre, edad, localidad, carrera) {
    var _this;

    _classCallCheck(this, alumno);

    _this = _super.call(this, nombre, edad, localidad), _this.carrera = carrera;
    var elem = document.getElementById("button");
    elem.addEventListener('click', function () {
      alert(_this.nombre);
    });
    return _this;
  }

  _createClass(alumno, [{
    key: "getCarrera",
    value: function getCarrera() {
      return "La carrera del alumno es ".concat(this.carrera);
    }
  }]);

  return alumno;
}(humano);

var student = new alumno("Isaias", 24, "bariloche", "Desarrollo de Software"); //tira bardo