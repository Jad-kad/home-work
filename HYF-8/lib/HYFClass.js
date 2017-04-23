"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Student = require("./Student");

var _Student2 = _interopRequireDefault(_Student);

var _Teacher = require("./Teacher");

var _Teacher2 = _interopRequireDefault(_Teacher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HYFClass = function () {
    function HYFClass(members) {
        _classCallCheck(this, HYFClass);

        this.members = members || [];

        var memberIsArray = this.members instanceof Array;
        if (!memberIsArray) {
            throw new Error("members should be an array");
        }
    }

    _createClass(HYFClass, [{
        key: "addTeacher",
        value: function addTeacher(member) {
            this.members.push(new _Teacher2.default(member));
        }
    }, {
        key: "addStudent",
        value: function addStudent(member) {
            this.members.push(new _Student2.default(member));
        }
    }, {
        key: "getAllteachers",
        value: function getAllteachers() {
            return this.members.filter(function (member) {
                return member instanceof _Teacher2.default;
            });
        }
    }, {
        key: "getAllStudents",
        value: function getAllStudents() {
            return this.members.filter(function (member) {
                return member instanceof _Student2.default;
            });
        }
    }]);

    return HYFClass;
}();

exports.default = HYFClass;