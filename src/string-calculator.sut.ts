import fc from "fast-check";

export class Sut {
  public givenNumbersAndDelimiter =
    (constraints?: { min?: number; max?: number }) =>
    (fun: (numbers: number[], delimiter: string) => void) => {
      const integerArrayBuilder = fc.array(fc.integer(constraints));
      const delimiterBuilder = fc.char();

      fc.assert(
        fc.property(
          integerArrayBuilder,
          delimiterBuilder,
          (numbers, delimiter) => {
            fun(numbers, delimiter);
          }
        ),
        { numRuns: 1_000 }
      );
    };

  public generateSeparatedNumbers = (
    eachNumber: number[],
    delimiter: string
  ): string => {
    if (delimiter.trim() === "") {
      const defaultDelimiter = this.getDefaultDelimiter();

      const separatedNumbers = this.getSeparatedNumbers(
        eachNumber,
        defaultDelimiter
      );

      return separatedNumbers;
    }
    const separatedNumbers = this.getSeparatedNumbers(eachNumber, delimiter);
    return this.appendDelimiterInformation(separatedNumbers, delimiter);
  };

  private getDefaultDelimiter = () =>
    this.randomFromInterval(0, 1) ? "," : "\n";

  private randomFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  private getSeparatedNumbers(eachNumber: number[], delimiter: string) {
    return eachNumber
      .reduce((acc, cur) => `${acc}${cur}${delimiter}`, "")
      .slice(0, -1);
  }

  private appendDelimiterInformation = (
    separatedNumbers: string,
    delimiter: string
  ) => {
    return `//${delimiter}\n${separatedNumbers}`;
  };
}
