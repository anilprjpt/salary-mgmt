const db = require("../config/database");
const employeeRepo = require("../repositories/employee.repository");

const calculateSalary = (country,grossSalary) => {
    let deduction = 0;

    if (country === "India") {
        deduction = grossSalary * 0.1;
    } else if (country === "United States") {
        deduction = grossSalary * 0.12;
    }

    return {
        gross: grossSalary,
        deduction,
        net: grossSalary - deduction
    };
};

const validateGrossSalary = (gross) => {
    if (!gross || gross === undefined || gross === null || gross === "") {
        throw {
            status: 400,
            message: "Gross salary is required"
        };
    }
};

const getSalaryByEmployeeId = (id, gross) => {  
    validateGrossSalary(gross);  
    const employee = employeeRepo.findById(id);
    if (!employee) {
        throw {
            status: 404,
            message: "Employee not found"
        };
    }

    return calculateSalary(employee.country, gross);
};

module.exports = {
    calculateSalary,
    validateGrossSalary,
    getSalaryByEmployeeId
};