import { Delimiter } from "./delimiter";

export class StringCalculator {
  private eachNumber!: number[];
  private delimiter!: Delimiter;

  public add(numbers: string): number {
    this.delimiter = Delimiter.create({ numbers });

    this.getEachNumber();

    return this.addEachNumber();
  }

  private getEachNumber(): void {
    this.eachNumber = this.delimiter
      .getNumbersWithoutDelimiter()
      .split(this.delimiter.getDelimiter())
      .map(this.stringToNumber);
  }

  private stringToNumber(n: string): number {
    return +n;
  }

  private addEachNumber(): number {
    return this.eachNumber.reduce((acc, cur) => acc + cur, 0);
  }
}
