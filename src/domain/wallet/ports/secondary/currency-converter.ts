import { Currency } from "../../models/currency";
import { Montant } from "../../models/montant";
import { Stock } from "../../models/stocks";

export interface CurrencyConverter {
  convert(from: Stock, to: Currency): Montant;
}
