import * as fc from "fast-check";

export class Sut {
  public givenOneNumber = (fun: (nb: number) => void) => {
    const integerBuilder: fc.Arbitrary<number> = fc.integer();

    fc.assert(
      fc.property(integerBuilder, (nb) => {
        fun(nb);
      })
    );
  };

  public givenNumbers = (fun: (numbers: number[]) => void) => {
    const integerArrayBuilder = fc.array(fc.integer());

    fc.assert(
      fc.property(integerArrayBuilder, (numbers) => {
        fun(numbers);
      })
    );
  };

  public givenNumbersAndDelimiter = (
    fun: (numbers: number[], delimiter: string) => void
  ) => {
    const integerArrayBuilder = fc.array(fc.integer({ min: -1000, max: 1000 }));
    const delimiterBuilder = fc.string({ minLength: 1, maxLength: 1 });

    fc.assert(
      fc.property(
        integerArrayBuilder,
        delimiterBuilder,
        (numbers, delimiter) => {
          fun(numbers, delimiter);
        }
      )
    );
  };

  public getDefaultDelimiter = () =>
    this.randomFromInterval(0, 1) ? "," : "\n";

  private randomFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  public generateSeparatedNumbers = (
    eachNumber: number[],
    getDelimiter: () => string
  ): string => {
    return eachNumber
      .reduce((acc, cur) => `${acc}${cur}${getDelimiter()}`, "")
      .slice(0, -1);
  };

  public appendDelimiterInformation = (
    separatedNumbers: string,
    delimiter: string
  ) => {
    return `//${delimiter}\n${separatedNumbers}`;
  };
}
