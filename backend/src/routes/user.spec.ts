import { Request, Response, NextFunction } from "express";
import { signup } from "../controllers/user";
import request from "supertest";
import router from "./user";

describe("POST /users/signup", () => {
  it.skip("test /user", async () => {
    const response = await request(router).get("/");
    expect(response.body).toBeDefined();
  });
});

describe("Get signup", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let next: Partial<NextFunction>;
  let responseObject = {};

  beforeEach(() => {
    mockRequest = {
      body: {
        email: "testing5@email.com",
        fullname: "testing Email",
        password: "testingpassword",
      },
    };
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };
  });

  it.skip("200 - signup", async () => {
    const expectedStatusCode = 200;
    const expectedReponse = {
      status: "Resgistration Successful!",
    };

    await signup(
      mockRequest as Request,
      mockResponse as Response,
      next as NextFunction
    );

    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObject).toEqual(expectedReponse);
  });
});
