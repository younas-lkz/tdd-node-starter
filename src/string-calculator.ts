import { Delimiter } from "./delimiter";

export class StringCalculator {
  private eachNumber!: number[];
  private delimiter!: Delimiter;

  public add(numbers: string): number {
    if (numbers === "") return 0;

    this.delimiter = Delimiter.create({ numbers });

    this.getEachNumber();

    if (this.eachNumber.length === 1) return this.eachNumber[0];

    return this.addEachNumber();
  }

  private getEachNumber = (): void => {
    this.eachNumber = this.delimiter
      .getNumbersWithoutDelimiter()
      .split(this.delimiter.getDelimiter())
      .map((number) => +number);
  };

  private addEachNumber = (): number => {
    return this.eachNumber.reduce((acc, cur) => acc + cur, 0);
  };
}
