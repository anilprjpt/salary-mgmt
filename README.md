# Salary Management API

## Overview
The Salary Management API is a RESTful API designed to manage employee records, calculate salaries, and provide salary metrics. It supports CRUD operations for employee resources and includes endpoints for salary calculations and metrics based on job titles and countries.

## Features
1. **Employee CRUD Operations**: Create, read, update, and delete employee records.
2. **Salary Calculation**: Calculate net salary based on gross salary and applicable deductions based on the employee's country.
3. **Salary Metrics**: Retrieve minimum, maximum, and average salaries based on country and job title.

## Technologies Used
- Node.js
- Express.js
- TypeScript
- SQLite
- Jest for testing

## Project Structure
```
salary-mgmt
├── src
│   ├── controllers          # Contains controllers for handling requests
│   ├── services             # Contains business logic
│   ├── routes               # Contains route definitions
│   ├── config               # Contains database connection and migrations
│   ├── middleware           # Contains middleware for error handling and validation
│   ├── utils                # Contains utility functions
│   └── app.ts              # Entry point of the application
├── tests                    # Contains unit and integration tests
├── package.json             # NPM configuration file
└── .gitignore               # Git ignore file
```

## Setup Instructions
1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd salary-mgmt
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Run Migrations**:
   Ensure that the SQLite database is set up and run the migration to create the employees table.

4. **Start the Application**:
   ```
   npm run start
   ```

5. **Run Tests**:
   To run the tests, use:
   ```
   npm run test
   ```

## API Endpoints
### Employee Endpoints
- `POST /employees`: Create a new employee
- `GET /employees`: Retrieve all employees
- `GET /employees/:id`: Retrieve a specific employee by ID
- `PUT /employees/:id`: Update an employee by ID
- `DELETE /employees/:id`: Delete an employee by ID

### Salary Metrics Endpoints
- `GET /salary/:id`: Calculate salary based on gross salary and employee ID
- `GET /salary/metrics/country/:country`: Get minimum, maximum, and average salary for a given country
- `GET /salary/metrics/job/:jobTitle`: Get average salary for a given job title

## Implementation Details
This project was developed using Test-Driven Development (TDD) principles. Each feature was implemented with corresponding tests written first, followed by the minimal code necessary to pass the tests. The commit history reflects this iterative process.

## Acknowledgments
This project was developed as part of a coding exercise to demonstrate API development skills and adherence to best practices in software engineering.

## AI tools prompt 
-  what would be the best commit message for "initial project setup" in TDD approach 

-  what should I made changes for refector state in TDD approach for given code
*  Same Prompt for every code refector commit





