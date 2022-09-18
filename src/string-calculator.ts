import { Delimiter } from "./delimiter";
import { NegativeNotAllowed } from "./errors/negatives-not-allowed";

export class StringCalculator {
  private eachNumber!: number[];
  private delimiter!: Delimiter;

  public add(numbers: string): number {
    this.delimiter = Delimiter.create({ numbers });

    this.getEachNumber();
    this.checkIntegrity();

    return this.addEachNumber();
  }

  private getEachNumber(): void {
    this.eachNumber = this.delimiter
      .getNumbersWithoutDelimiter()
      .split(this.delimiter.getDelimiter())
      .map(this.stringToNumber);
  }

  private checkIntegrity() {
    const negativeNumbers: number[] = [];

    this.eachNumber.forEach((num) => {
      if (num < 0) {
        negativeNumbers.push(num);
      }
    });

    if (negativeNumbers.length !== 0) {
      throw new NegativeNotAllowed(negativeNumbers);
    }
  }

  private stringToNumber(n: string): number {
    return +n;
  }

  private addEachNumber(): number {
    return this.eachNumber.reduce((acc, cur) => acc + cur, 0);
  }
}
