// Unit Tests
test("product service basic test", () => {
  expect(true).toBe(true);
});

test("basic test", () => {
  expect(1 + 1).toBe(2);
});

// Integration Test - checks server starts, route exists, request works, and response is returned
const request = require("supertest");
const app = require("../src/index");

test("product service basic test", () => {
  expect(true).toBe(true);
});

test("GET /health endpoint works", async () => {
  const res = await request(app).get("/health");
  expect(res.statusCode).toBe(200);
});