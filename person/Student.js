const UniPerson = require('./UniPerson');

const _studentID = Symbol('studentId');
const _guardian = Symbol('guardian');
const _exam = Symbol('exam');
const _fee = Symbol('fee');

class Student extends UniPerson {
    constructor(id, name, studentId, guardian) {
        super(id, name);
        this[_studentID] = studentId;
        this[_guardian] = guardian;
        this[_exam] = [];
        this[_fee] = null;
    }

    get studentId() {
        return this[_studentID];
    }

    get guardian() {
        return this[_guardian];
    }

    get exam() {
        return this[_exam];
    }
    set exam(value) {
        this[_exam] = value;
    }
    addExam(exam) {
        this[_exam].push(exam);
    }

    get fee() {
        return this[_fee];
    }

    set fee(value) {
        this[_fee] = value;
    }

    toString() {
        return `${super.toString()}, Student ID : ${this[_studentID]}`;
    }
}
module.exports = Student;