const { sendHealthStatus } = require("../../src/Controllers/healthController");


jest.mock("../../src/Services/healthService", () => ({
    getHealthStatus: jest.fn(),
}));

const { getHealthStatus } = require("../../src/Services/healthService");

describe("sendHealthStatus (Unit-Test)", () => {
    let req, res;

    beforeEach( () => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    })
});