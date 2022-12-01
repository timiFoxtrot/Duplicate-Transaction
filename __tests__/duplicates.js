import findDuplicateTransactions from "../src/duplicate-transactions";

describe("findDuplicateTransactions", () => {
  test("Assumptions", () => {
    expect(() => findDuplicateTransactions()).toThrow();
    expect(() => findDuplicateTransactions({})).toThrow();
    expect(() => findDuplicateTransactions("")).toThrow();
  });

  test("Empty array", () => {
    expect(findDuplicateTransactions([])).toEqual([]);
  });

  test("Single transaction", () => {
    expect(
      findDuplicateTransactions([
        {
          id: 6,
          sourceAccount: "A",
          targetAccount: "C",
          amount: 250,
          category: "other",
          time: "2018-03-02T10:33:05.000Z",
        },
      ])
    ).toEqual([]);
  });

  test("Small transaction", () => {
    const smallTransactionsInput = require("../fixtures/input/small.js");
    const smallTransactionsOutput = require("../fixtures/output/small.js");

    expect(findDuplicateTransactions(smallTransactionsInput)).toEqual(
      smallTransactionsOutput
    );
  });

  test("Do not mutate the original transactions list", () => {
    const smallTransactionsInput = require("../fixtures/input/small.js");

    Object.freeze(smallTransactionsInput).map((v) => Object.freeze(v));
    const smallTransactionsOutput = require("../fixtures/output/small.js");

    expect(() =>
      findDuplicateTransactions(smallTransactionsInput)
    ).not.toThrow();

    expect(findDuplicateTransactions(smallTransactionsInput)).toEqual(
      smallTransactionsOutput
    );
  });

  test("Large transactions", () => {
    const largeTransactionsInput = require("../fixtures/input/large.js");
    const largeTransactionsOutput = require("../fixtures/output/large.js");

    expect(findDuplicateTransactions(largeTransactionsInput)).toEqual(
      largeTransactionsOutput
    );
  });
});
