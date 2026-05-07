const getMissingFields = (data, fields) => {
  return fields.filter(
    (field) =>
      data[field] === undefined ||
      data[field] === null ||
      data[field] === ""
  );
};

// Generic validation helper
const validateRequiredFields = (data, fields) => {
  const missingFields = getMissingFields(data, fields);

  if (missingFields.length > 0) {
    const error = new Error(
      `Missing required fields: ${missingFields.join(", ")}`
    );

    error.type = "VALIDATION_ERROR";
    error.fields = missingFields;

    throw error;
  }
};

// Specific validator for Employee
const validateEmployee = (data) => {
  validateRequiredFields(data, [
    "fullName",
    "jobTitle",
    "country",
    "salary"
  ]);

  // Additional checks
  const { salary, fullName } = data;
  if (typeof salary !== "number" || salary <= 0) {
    throw new Error("Salary must be a positive number");
  }

  if (fullName.length < 2) {
    throw new Error("Full name must be at least 2 characters");
  }
};

module.exports = {
  getMissingFields,
  validateRequiredFields,
  validateEmployee
};
