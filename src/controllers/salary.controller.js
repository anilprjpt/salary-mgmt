const salaryService = require("../services/salary.service");
const getSalary = (req, res, next) => {
  try {
    const { gross } = req.query;
    const { id } = req.params;
    const result = salaryService.getSalaryByEmployeeId(id, gross);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getCountryMetrics = (req, res, next) => {
  try {
    const { country } = req.params;
    res.json(salaryService.getCountryMetrics(country));
  } catch (err) {
    next(err);
  }
};

const getJobMetrics = (req, res, next) => {
  try {
    const { jobTitle } = req.params;
    const result = salaryService.getJobTitleAvg(jobTitle);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
    getSalary,
    getCountryMetrics,
    getJobMetrics
};
