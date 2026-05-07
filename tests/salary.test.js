const request = require("supertest");
const app = require("../src/app");

describe("Salary API", () => {
    it("should calculate salary for India using custom gross salary", async () => {
        const createRes = await request(app)
            .post("/employees")
            .send({
                fullName: "Emp India",
                jobTitle: "Developer",
                country: "India",
                salary: 50000
            });

        const employeeId = createRes.body.id;

        const res = await request(app)
            .get(`/salary/${employeeId}?gross=50000`);

        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual({
            gross: 50000,
            deduction: 5000,
            net: 45000
        });
    });

});
