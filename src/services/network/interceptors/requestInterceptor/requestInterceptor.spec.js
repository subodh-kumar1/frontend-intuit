import { requestInterceptor, requestErrorHandler } from "./requestInterceptor";
import { HTTP_CONSTANTS } from "../../../../constants";

jest.mock("../../../../utils/common/CommonUtil", () => {
  return {
    getUuid: jest.fn(() => "466b55ac-c984-238c-85a2-1bdbae565543"),
  };
});

describe("Request interceptors", () => {
  it("should return request configuration with authorization", () => {
    const config = {
      url: "mockedUrl",
      headers: {
        "Content-Type": "application/json",
        breadcrumbId: "466b55ac-c984-238c-85a2-1bdbae565543",
        "x-correlationId": "mockedCorrelationId",
      },
    };

    expect(requestInterceptor(config)).toEqual(config);
  });

  it("should return request error promise", () => {
    const error = {
      statusText: "NotFound",
      status: HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND,
      data: {
        message: "Page not found",
      },
    };

    return requestErrorHandler(error).catch((err) => {
      expect(err.statusText).toBe(error.statusText);
    });
  });
});
