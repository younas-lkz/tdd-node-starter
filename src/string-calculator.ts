import { Delimiter } from "./delimiter";

export class StringCalculator {
  private numbers!: string;
  private eachNumber!: number[];
  private delimiter!: string | RegExp;

  public add(numbers: string): number {
    this.numbers = numbers;

    if (this.numbers === "") return 0;

    const delimiter = Delimiter.create({ numbers: this.numbers });
    this.delimiter = delimiter.getDelimiter();
    this.numbers = delimiter.getNumbersWithoutDelimiter();

    this.getEachNumber();

    if (this.eachNumber.length === 1) return this.eachNumber[0];

    return this.addEachNumber();
  }

  private getEachNumber = (): void => {
    this.eachNumber = this.numbers
      .split(this.delimiter)
      .map((number) => +number);
  };

  private addEachNumber = (): number => {
    return this.eachNumber.reduce((acc, cur) => acc + cur, 0);
  };
}
