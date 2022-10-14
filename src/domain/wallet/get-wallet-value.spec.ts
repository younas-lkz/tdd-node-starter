import { InMemoryCurrencyConverter } from "../../infra/adapters/secondary/in-memory-currency-converter";
import { GetWalletValue } from "./get-wallet-value";

describe("Get wallet value", () => {
  it("Given a wallet with one dollar, when I get the wallet value, it should be one dollar", () => {
    const wallet = {
      USD: 1,
    };

    expectWalletValueToBe(wallet, 1);
  });

  it("Given a wallet with two dollars, when I get the wallet value, it should be two dollars", () => {
    const wallet = {
      USD: 2,
    };

    expectWalletValueToBe(wallet, 2);
  });

  it("Given a wallet with one euro, when I get the wallet value, it should be 0.969", () => {
    const wallet = {
      EUR: 1,
    };

    expectWalletValueToBe(wallet, 0.969);
  });
});

const expectWalletValueToBe = (
  wallet: Record<string, number>,
  value: number
) => {
  const inMemoryCurrencyConverter = new InMemoryCurrencyConverter();
  const dollarValue = new GetWalletValue(
    wallet,
    "USD",
    inMemoryCurrencyConverter
  ).execute();

  expect(dollarValue).toBe(value);
};

describe("Get wallet value", () => {
  it("Given a wallet with one dollar, when I get the wallet value, it should be one dollar", () => {
    const wallet = {
      USD: 1,
    };

    expectWalletValueToBe(wallet, 1);
  });
});
