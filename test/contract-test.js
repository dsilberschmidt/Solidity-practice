const { assert } = require("chai");

describe("Contract", function () {
  let contract;
  before (async () => {
    const Contract = await ethers.getContractFactory("Contract");
    contract = await Contract.deploy();
    await contract.deployed();
  });
  it ( "should have an x", async () => {
    assert.equal (await contract.x(), 50)
  });
  // it ( "should have an y", async () => {
  //   assert.equal (await contract.y(), 122)
  // });
  // it ( "should have an z", async () => {
  //   assert.equal (await contract.z(), 5)
  // });
  it ( "should increment x by 1", async() => {
    await contract.increment();
    assert.equal (await contract.x(), 51)
  });
  it ( "should increment x many times", async() => {
    await contract.increment();
    await contract.increment();
    await contract.increment();
    assert.equal (await contract.x(), 54)
  });
});
