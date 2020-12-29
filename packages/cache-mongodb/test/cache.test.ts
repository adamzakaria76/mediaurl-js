import { testCache } from "@mediaurl/test-utils";
import { MongodbCache } from "../src";

if (process.env.MONGODB_URL) {
  testCache("mongodb", () => new MongodbCache(<string>process.env.MONGODB_URL));
} else {
  describe("MongodbCache", () => {
    test("noop", () => {});
  });
}
