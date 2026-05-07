const repo = require("../repositories/employee.repository");
const { validateEmployee } = require("../utils/validator");

exports.createEmployee = async (data) => {
  validateEmployee(data); 
  return await repo.create(data);
};
