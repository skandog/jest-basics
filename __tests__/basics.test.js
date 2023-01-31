test("addition", () => {
  expect(2 + 2).toBe(4);
});

test("null", () => {
  const i = null;

  expect.assertions(2);

  expect(i).toBeNull();
  expect(i).toBeDefined();
});

const animals = ["dog", "cat"];

test("animal array", () => {
  expect(animals).toContain("cat");
  expect(animals).toBeInstanceOf(Array);
});

function getData() {
  throw new Error("Not Found");
}

test("getData", () => {
  expect(() => {
    getData();
  }).toThrow("Not Found");
});
