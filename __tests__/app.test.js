import getData from "../app.js";

test("fetch data", async () => {
  const res = await getData();
  console.log(res);
});
