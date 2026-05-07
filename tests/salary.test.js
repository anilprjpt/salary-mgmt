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

    it("should return 400 if gross salary is missing", async () => {
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
            .get(`/salary/${employeeId}`);

        expect(res.statusCode).toBe(400);

        expect(res.body.message).toBe(
            "Gross salary is required"
        );
    });

    it("should calculate salary for US using custom gross", async () => {
        const createRes = await request(app)
            .post("/employees")
            .send({
                fullName: "Emp US",
                jobTitle: "Developer",
                country: "United States",
                salary: 2000
            });

        const employeeId = createRes.body.id;

        const res = await request(app)
            .get(`/salary/${employeeId}?gross=2000`);

        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual({
            gross: 2000,
            deduction: 240,
            net: 1760
        });
    });
});

describe("GET /salary/metrics/country/:country", () => {
    it("should return salary metrics for India", async () => {
        await request(app)
            .post("/employees")
            .send({
                fullName: "Emp 1",
                jobTitle: "Developer",
                country: "India",
                salary: 30000
            });

        await request(app)
            .post("/employees")
            .send({
                fullName: "Emp 2",
                jobTitle: "Manager",
                country: "India",
                salary: 50000
            });

        const res = await request(app)
            .get("/salary/metrics/country/India");

        expect(res.statusCode).toBe(200);

        expect(res.body.min).toBe(30000);
        expect(res.body.max).toBe(50000);
        expect(res.body.avg).toBe(45000);
    });

    it("should return 404 when no employees exist for country", async () => {
        const res = await request(app)
            .get("/salary/metrics/country/Japan");

        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe("No employees found for country: Japan");
    });
});

describe("GET /salary/metrics/job/:jobTitle", () => {
    it("should return average salary for a job title", async () => {
        await request(app)
            .post("/employees")
            .send({
                fullName: "John Doe",
                jobTitle: "Developer",
                country: "India",
                salary: 50000
            });

        await request(app)
            .post("/employees")
            .send({
                fullName: "Jane Smith",
                jobTitle: "Developer",
                country: "USA",
                salary: 70000
            });

        const res = await request(app)
            .get("/salary/metrics/job/Developer");

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            avg: 42000
        });
    });
    

});
