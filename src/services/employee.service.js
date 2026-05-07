const repo = require("../repositories/employee.repository");

exports.createEmployee = (data) => {
  return repo.create(data);
};
