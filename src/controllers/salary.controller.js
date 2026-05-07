const salaryService = require("../services/salary.service");
exports.getSalary = (req, res, next) => {
  try {
    const gross = Number(req.query.gross);
    const { id } = req.params;
    const result = salaryService.getSalaryByEmployeeId(id, gross);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.getCountryMetrics = (req, res, next) => {
  try {
    const { country } = req.params;
    res.json(salaryService.getCountryMetrics(country));
  } catch (err) {
    next(err);
  }
};
