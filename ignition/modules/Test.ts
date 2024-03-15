import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MyState", (m) => {
  const a = m.contract("A");

  return { a };
});
