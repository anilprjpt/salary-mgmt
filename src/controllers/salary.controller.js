const salaryService = require("../services/salary.service");
exports.getSalary = (req, res, next) => {
  try {
    const gross = Number(req.query.gross);
    const result = salaryService.getSalaryByEmployeeId(req.params.id, gross);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
