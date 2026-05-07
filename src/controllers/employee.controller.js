const service = require("../services/employee.service");

exports.createEmployee = async (req, res, next) => {
  try {
    const data = await service.createEmployee(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};
