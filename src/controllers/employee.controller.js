const service = require("../services/employee.service");

const createEmployee = async (req, res, next) => {
  try {
    const data = await service.createEmployee(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

const getEmployees = (req, res, next) => {
  try {
    res.json(service.getAllEmployees());
  } catch (err) {
    next(err);
  }
};

const getEmployee = (req, res, next) => {
  try {
    res.json(service.getEmployeeById(req.params.id));
  } catch (err) {
    next(err);
  }
};

const updateEmployee = (req, res, next) => {
  try {
    res.json(service.updateEmployee(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
};

const deleteEmployee = (req, res, next) => {
  try {
    service.deleteEmployee(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee
};