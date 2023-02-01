test("mockImplementation", () => {
  const mockFN = jest
    .fn(() => {
      return "default";
    })
    .mockImplementation(() => {
      return "First Call";
    }) // always implements, ignores previous
    .mockImplementation(() => {
      return "Second Call";
    });

  const res1 = mockFN();
  const res2 = mockFN();

  //   console.log(res1);
});

test("mockImplementationOnce", () => {
  const mockFN = jest
    .fn(() => {
      return "default";
    }) // Only implement on first call!
    .mockImplementationOnce(() => {
      return "First Call";
    }) // implements once, on second call!
    .mockImplementationOnce(() => {
      return "Second Call";
    });

  const res1 = mockFN();
  const res2 = mockFN();
  const res3 = mockFN();

  console.log(res1);
  console.log(res2);
  console.log(res3);
});
