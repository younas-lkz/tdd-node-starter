import { Currency } from "./models/currency";
import { Montant } from "./models/montant";
import { CurrencyConverter } from "./ports/secondary/currency-converter";

export class GetWalletValue {
  constructor(
    private wallet: Record<string, number>,
    private currency: Currency,
    private currencyConverter: CurrencyConverter
  ) {}

  execute() {
    Object.entries(this.wallet).reduce(((acc), ([stockType, value])) => {
      return this.currencyConverter.convert(
        { type: stockType, value },
        this.currency
      );
    }, 0);
  }
}
