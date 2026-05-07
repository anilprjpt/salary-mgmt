const repo = require("../repositories/employee.repository");

exports.createEmployee = async (data) => {
  return await repo.create(data);
};
