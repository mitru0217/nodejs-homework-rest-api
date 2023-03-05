const express = require("express");
const request = require("supertest");
const { auth: ctrl } = require("../../controllers");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();
// const router = express.Router();
// app.get("/api/products", getAll);

// const authRouter = router.post(
//     "/login",
//     ctrl.login
//   );
app.post("/api/login", ctrl.login);
// app.use("/api/auth", authRouter);

describe("test login controller", () => {
  //   let server;
  beforeAll(() => app.listen(3000));
  afterAll(() => app.close());

  test("should  add user and token properties to req object", async () => {
    const response = await request(app).post("/api/login", ctrl.login);
    const [user] = response.body;
    const token = jwt.sign(
      {
        _id: user._id,
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
    expect(typeof user.email).toBe("string");
    expect(typeof user.subscription).toBe("number");
  });
});
