const repo = require("../repositories/employee.repository");
const { validateEmployee } = require("../utils/validator");

const createEmployee = async (data) => {
  validateEmployee(data); 
  return await repo.create(data);
};

const getAllEmployees = () => {
  return repo.findAll();
};

module.exports = {
  createEmployee,
  getAllEmployees
};
