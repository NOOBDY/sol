import { expect } from "chai";
import hre from "hardhat";

describe("MyState", function () {
  describe("A", function () {
    it("Should do something", async function () {
      const A = await hre.ethers.getContractFactory("A");
      const a = await A.deploy();

      await a.set(123);
      expect(await a.get()).to.equal(123);
    });
  });
});
