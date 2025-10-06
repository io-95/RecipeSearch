const { sendHealthStatus } = require("../../src/Controllers/healthController");


jest.mock("../../src/Services/healthService", () => ({
    getHealthStatus: jest.fn(),
}));

const { getHealthStatus } = require("../../src/Services/healthService");

describe("sendHealthStatus (Unit-Test)", () => {
    let req, res;

    beforeEach( () => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it("returns 200 and status ok", async () => {
        getHealthStatus.mockResolvedValue('OK');

        await sendHealthStatus(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: "OK" });
    });
});