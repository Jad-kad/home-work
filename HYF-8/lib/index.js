'use strict';

var _HYFClass = require('./HYFClass');

var _HYFClass2 = _interopRequireDefault(_HYFClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JS = new _HYFClass2.default([]);

var jsMembers = [{ firstName: 'Mauro', lastName: 'Mandracchia', type: 'teacher' }, { firstName: 'David', lastName: 'furlong', type: 'teacher' }, { firstName: 'Ali', lastName: 'Barakat', type: 'student' }, { firstName: 'odai', lastName: 'kakhi', type: 'student' }];

jsMembers.forEach(function (member) {
    if (member.type === "teacher") {
        JS.addTeacher(member);
    } else {
        JS.addStudent(member);
    }
});

console.log("ALL Teachers", JS.getAllteachers());
console.log("ALL Students", JS.getAllStudents());