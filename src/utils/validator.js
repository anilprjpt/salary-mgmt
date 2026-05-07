// Generic validation helper
const validateRequiredFields = (data, fields) => {
  const missingFields = [];

  fields.forEach((field) => {
    if (
      data[field] === undefined ||
      data[field] === null ||
      data[field] === ""
    ) {
      missingFields.push(field);
    }
  });

  if (missingFields.length > 0) {
    throw new Error(
      `Missing required fields: ${missingFields.join(", ")}`
    );
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
};

module.exports = {
  validateEmployee
};
