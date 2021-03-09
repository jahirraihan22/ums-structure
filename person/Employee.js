const UniPerson = require('./UniPerson');

const _employeeID = Symbol('studentId');
const _salary = Symbol('salary');

class Employee extends UniPerson {
    constructor(id, name, studentId, guardian) {
        super(id, name);
        this[_employeeID] = studentId;
        this[_salary] = null;
    }

    get employeeId() {
        return this[_employeeID];
    }


    get salary() {
        return this[_salary];
    }

    set salary(value) {
        this[_salary] = value;
    }

    toString() {
        
        return `${super.toString()}, Employee ID : ${this[_employeeID]}`;
    }
}
module.exports = Employee;