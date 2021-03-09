const Person = require('./Person');

const _proffesion = Symbol('proffesion');
const _income = Symbol('income');

class Guardian extends Person {
    constructor(id,name,proffesion,income) {
        super(id, name);
        this[_proffesion] = proffesion;
        this[_income] = income;
    }

    get proffesion() {
        return this[_proffesion];
    }

    set profession(value) {
        this[_profession] = value;
    }

    get income() {
        return this[_income];
    }

    set income(value) {
        this[_income] = value;
    }

    toString() {
        super.toString();
        console.log('Profession : ', this[_profession]);
        console.log('Income : ', this[_income]);
    }
}

module.exports = Guardian;