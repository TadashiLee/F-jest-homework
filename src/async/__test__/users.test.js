import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    axios.get.mockResolvedValue({ data: "wenchang.li" });
    await expect(getUsers()).resolves.toEqual("wenchang.li");
  });
});
