const request = require("supertest");
const app = require("../src/app");

describe("Employee API - CRUD", () => {
    let employeeId;
    const employeePayload = {
        fullName: "Anil Prajapati",
        jobTitle: "Software Engineer",
        country: "India",
        salary: 50000,
    };

    it("should create employee", async () => {
        const res = await request(app)
            .post("/employees")
            .send(employeePayload);

        expect(res.statusCode).toBe(201);
        employeeId = res.body.id;
    });

    it("should fail if required fields are missing", async () => {
        const res = await request(app).post("/employees").send({
            fullName: "Anil",
        });

        expect(res.statusCode).toBe(400);
        expect(res.body.message).toContain("Missing required fields");
    });

});