const express = require("express");
const request = require("supertest");
const { auth: ctrl } = require("../../controllers");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();

app.post("/api/login", ctrl.login);

describe("test login controller", () => {
  //   let server;
  beforeAll(() => app.listen(3000));
  //   afterAll(() => app.close());

  test("should  add user and token properties to req object", async () => {
    const response = await request(app).post("/api/login", ctrl.login);
    const { email, subscription, _id } = response.body;
    const token = jwt.sign(
      {
        _id: _id,
      },
      process.env.SECRET_KEY
    );
    const userReq = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    expect(userReq.token).toEqual(token);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(typeof email).toBe("string");
    expect(typeof subscription).toBe("number");
  });
});
