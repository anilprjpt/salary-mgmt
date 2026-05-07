const repo = require("../repositories/employee.repository");
const { validateEmployee } = require("../utils/validator");

const createEmployee = async (data) => {
  validateEmployee(data); 
  return await repo.create(data);
};

const getAllEmployees = () => {
  return repo.findAll();
};

const getEmployeeById = (id) => {
  const employee = repo.findById(id);
  if (!employee) {
    throw {
      status: 404,
      message: "Employee not found"
    };
  }
  
  return employee;
};

const updateEmployee = (id, data) => {
  return repo.update(id, data);
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee
};
