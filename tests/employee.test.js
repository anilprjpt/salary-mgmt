const request = require("supertest");
const app = require("../src/app");

describe("POST /employees", () => {
    it("should create employee", async () => {
        const res = await request(app)
            .post("/employees")
            .send({
                fullName: "Anil Prajapati",
                jobTitle: "Software Engineer",
                country: "India",
                salary: 50000
            });

        expect(res.statusCode).toBe(201);
    });

    it("should fail if required fields are missing", async () => {
        const res = await request(app).post("/employees").send({
            fullName: "Anil",
        });

        expect(res.statusCode).toBe(400);
        expect(res.body.message).toContain("Missing required fields");
    });

});