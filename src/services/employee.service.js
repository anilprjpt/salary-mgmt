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
  validateEmployee(data);
  const existingEmployee = repo.findById(id);
  if (!existingEmployee) {
    const error = new Error("Employee not found");
    error.status = 404;
    error.type = "NOT_FOUND";
    throw error;
  }

  return repo.update(id, data);
};

const deleteEmployee = (id) => {
  return repo.deleteEmployee(id);
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};
