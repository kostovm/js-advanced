class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
        for (let param of arguments) {
            if (param === "" || param === null || param === undefined || department === undefined || salary < 0) {
                throw Error("Invalid input!");
            }
        }

        if (this.departments.hasOwnProperty(department)) {
            this.departments[department].sumOfSalaryes += salary;
            this.departments[department].numberOfEmployees++;
            this.departments[department].avgSalary = this.departments[department].sumOfSalaryes /
                this.departments[department].numberOfEmployees;

            this.departments[department].employees[name] = {
                salary: salary,
                position: position
            };

            return `New employee is hired. Name: ${name}. Position: ${position}`

        } else {
            this.departments[department] = {
                avgSalary: salary,
                sumOfSalaryes: salary,
                numberOfEmployees: 1,
                employees: {}
            }

            this.departments[department].employees[name] = {
                salary: salary,
                position: position
            }
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }

    bestDepartment() {
        let allDepartments = Object.keys(this.departments);
        let bestD = "";
        let bestS = 0;

        for (let department of allDepartments) {
            if (bestS < this.departments[department].avgSalary) {
                bestS = this.departments[department].avgSalary;
                bestD = department;
            };
        };

        let employeesAsString = ``

        let listOfEmployees = Object.keys(this.departments[bestD].employees);
        listOfEmployees.sort((a, b) => {
            return this.departments[bestD].employees[b].salary - this.departments[bestD].employees[a].salary ||
                a.localeCompare(b);
        })
        for (let employee of listOfEmployees) {
            employeesAsString += `\n${employee} ${this.departments[bestD].employees[employee].salary} ${this.departments[bestD].employees[employee].position}`
        }

        return `Best Department is: ${bestD}\nAverage salary: ${bestS.toFixed(2)}` + employeesAsString;
    }
}