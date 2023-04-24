class workerSalaries {

    constructor(name, surname, typeOfemployee, sales, salary) {

        this.name = name
        this.surname = surname
        this.typeOfemployee = typeOfemployee
        this.sales = sales
        this.salary = salary
    }

    salariedEmployees() {
        if (this.sales >= 50) {
            console.log(`${this.name} ${this.surname} earned ${this.salary * (10 / 100) + this.salary}`)
        } else {
            console.log(`${this.name} ${this.surname} earned ${this.salary} only because they did meet sales target`)
        }
    }
}

class timedEmployees extends workerSalaries {

    constructor(name, surname, typeOfemployee, sales, hoursWorked, salary) {

        super(name, surname, typeOfemployee, sales, salary)

        this.hoursWorked = hoursWorked
    }

    hourlyEmployees() {
        if (this.sales > 150) {
            console.log(`${this.name} ${this.surname} earned ${ 0.5 + this.hoursWorked  * this.salary}`)
        } else {
            console.log(`${this.name} ${this.surname} earned ${this.salary * this.hoursWorked} because they did not meet sales target`)
        }
    }
}

class HybridEmployees extends timedEmployees {

    constructor(name, surname, typeOfemployee, sales, hoursWorked, salary) {

        super(name, surname, typeOfemployee, sales, hoursWorked, salary)

    }

    hybridEmployees() {
        if (this.hoursWorked > 8 && this.sales > 800) {
            console.log(`${this.name} ${this.surname}  earned ${0.2 + this.hoursWorked * this.salary} because they worked overtime and met sales target`)
        } else if (this.hoursWorked > 8 && this.sales < 800) {
            console.log(`${this.name} ${this.surname} earned ${this.hoursWorked * this.salary} because they only worked overtime`)
        } else if (this.hoursWorked < 8 && this.sales > 800) {
            console.log(`${this.name} ${this.surname}  earned ${0.2 + this.hoursWorked * this.salary} because they met sales target`);
        } else if (this.hoursWorked < 8 && this.sales < 800) {
            console.log(`${this.name} ${this.surname} earned  ${this.salary} earned basic salary because they did not work overtime or meet sale target`)
        }
    }
}

const salariedWorker1 = new workerSalaries('Mike', 'Benjamin', 'salaryEmployee', 30, 5000)
const salariedWorker2 = new workerSalaries('Michelle', 'London', 'salaryEmployee', 100, 7000)

const hourlyWorker1 = new timedEmployees('Gary', 'Vice', 'hourlyEmployee', 145, 8, 6000)
const hourlyWorker2 = new timedEmployees('Loretta', 'Green', 'hourlyEmployee', 200, 10, 5500)

const hybridWorker1 = new HybridEmployees('Mike','Mina','hybridEmployee',900,7,6000)
const hybridWorker2 = new HybridEmployees('Patricia', 'Mina', 'hybridEmployee', 810, 9, 6000)
const hybridWorker3 = new HybridEmployees('Gayle', 'Vercetti', 'hybridEmployee', 500, 7, 10000)
const hybridWorker4 = new HybridEmployees('Maileen', 'Bermossa', 'hybridEmployee', 805, 9, 9000)

salariedWorker1.salariedEmployees()
salariedWorker2.salariedEmployees()

console.log(`========================================================================`);

hourlyWorker1.hourlyEmployees()
hourlyWorker2.hourlyEmployees()

console.log(`========================================================================`);

hybridWorker1.hybridEmployees()
hybridWorker2.hybridEmployees()
hybridWorker3.hybridEmployees()
hybridWorker4.hybridEmployees()