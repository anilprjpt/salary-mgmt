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

    it("should fail if salary is negative", async () => {
        const res = await request(app).post("/employees").send({
            fullName: "Anil",
            jobTitle: "Dev",
            country: "India",
            salary: -100,
        });

        expect(res.statusCode).toBe(400);
    });

    it("should fail if fullName is too short", async () => {
        const res = await request(app).post("/employees").send({
            fullName: "A",
            jobTitle: "Dev",
            country: "India",
            salary: 1000,
        });

        expect(res.statusCode).toBe(400);
    });

    // READ ALL
    it("should get all employees", async () => {
        await request(app)
            .post("/employees")
            .send({
                fullName: "Anil Prajapati",
                jobTitle: "Software Engineer",
                country: "India",
                salary: 50000
            });

        const res = await request(app).get("/employees");
        
        expect(res.statusCode).toBe(200);

        expect(Array.isArray(res.body)).toBe(true);

        expect(res.body.length).toBeGreaterThan(0);

        expect(res.body[0]).toHaveProperty("id");
        expect(res.body[0]).toHaveProperty("fullName");
        expect(res.body[0]).toHaveProperty("jobTitle");
        expect(res.body[0]).toHaveProperty("country");
        expect(res.body[0]).toHaveProperty("salary");
    });

});