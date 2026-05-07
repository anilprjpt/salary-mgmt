const db = require("../config/database");

const INSERT_EMPLOYEE_QUERY = `
  INSERT INTO employees (fullName, jobTitle, country, salary)
  VALUES (?, ?, ?, ?)
`;

exports.create = async (employee) => {
  const stmt = db.prepare(INSERT_EMPLOYEE_QUERY);

  const result = stmt.run(
    employee.fullName,
    employee.jobTitle,
    employee.country,
    employee.salary
  );

  return {
    id: result.lastInsertRowid,
    ...employee,
  };
};

exports.findAll = () => {
  return db.prepare("SELECT * FROM employees").all();
};
