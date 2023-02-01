import crypto, { randomBytes } from "crypto";

import getData from "../app.js";

// //ok so you mock any 3rd party, rather than actually calling
// // this means you know what to expect
// jest.mock("crypto");

// test("fetch data", async () => {
//   // so this is converting the use of crypto, from the actual in
//   // getData, to this expected result of 'bytes'
//   crypto.randomBytes.mockResolvedValueOnce("bytes");

//   const res = await getData();
//   console.log(res);
// });

test("fetch data", async () => {
  jest.spyOn(crypto, "randomBytes").mockResolvedValueOnce("bytes");

  const res = await getData();
  console.log(res);
  expect(res).toBe("bytes");
});
