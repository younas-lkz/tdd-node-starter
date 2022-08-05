export class StringCalculator {
  private numbers!: string;
  private eachNumber!: number[];
  private separator!: string | RegExp;

  public add(numbers: string): number {
    this.numbers = numbers;

    if (this.numbers === "") return 0;

    this.getSeparator();
    this.getEachNumber();

    if (this.eachNumber.length === 1) return this.eachNumber[0];

    return this.addEachNumber();
  }

  private getSeparator = () => {
    const isSeparatorOverride = new RegExp("^//.*\\n").test(this.numbers);

    if (isSeparatorOverride) {
      this.separator = this.numbers.substring(
        this.numbers.indexOf("//") + 2,
        this.numbers.indexOf("\n")
      );
      this.numbers = this.numbers.slice(
        this.numbers.indexOf("\n") + 1,
        this.numbers.length
      );
    } else {
      this.separator = /[\s,]+/;
    }
  };

  private getEachNumber = (): void => {
    this.eachNumber = this.numbers
      .split(this.separator)
      .map((number) => +number);
  };

  private addEachNumber = (): number => {
    return this.eachNumber.reduce((acc, cur) => acc + cur, 0);
  };
}
