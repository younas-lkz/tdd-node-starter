import { Currency } from "../../../domain/wallet/models/currency";
import { Montant } from "../../../domain/wallet/models/montant";
import { Stock } from "../../../domain/wallet/models/stocks";
import { CurrencyConverter } from "../../../domain/wallet/ports/secondary/currency-converter";

export class InMemoryCurrencyConverter implements CurrencyConverter {
  convert(from: Stock, to: Currency): Montant {
    return {
      currency: to,
      value: from.value * conversionTable[to][from.type],
    };
  }
}

const conversionTable: Record<Currency, Record<Stock["type"], number>> = {
  USD: {
    USD: 1,
    EUR: 0.969,
  },
  EUR: {
    EUR: 1,
    USD: 1.1,
  },
};
