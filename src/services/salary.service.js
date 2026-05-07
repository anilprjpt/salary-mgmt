const db = require("../config/database");
const employeeRepo = require("../repositories/employee.repository");

const calculateSalary = (country,grossSalary) => {
    let deduction = 0;

    if (country === "India") {
        deduction = grossSalary * 0.1;
    }

    return {
        gross: grossSalary,
        deduction,
        net: grossSalary - deduction
    };
};

exports.getSalaryByEmployeeId = (id, gross) => {    
    if (!gross) {
        throw {
            status: 400,
            message: "Gross salary is required"
        };
    }
    const employee = employeeRepo.findById(id);
    if (!employee) {
        throw {
            status: 404,
            message: "Employee not found"
        };
    }

    return calculateSalary(employee.country, gross);
};
