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

  public givenNumbersAndSeparator = (
    fun: (numbers: number[], separator: string) => void
  ) => {
    const integerArrayBuilder = fc.array(fc.integer({ min: -1000, max: 1000 }));
    const separatorBuilder = fc.string({ minLength: 1, maxLength: 1 });

    fc.assert(
      fc.property(
        integerArrayBuilder,
        separatorBuilder,
        (numbers, separator) => {
          fun(numbers, separator);
        }
      )
    );
  };

  public getDefaultSeparator = () =>
    this.randomFromInterval(0, 1) ? "," : "\n";

  private randomFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  public generateSeparatedNumbers = (
    eachNumber: number[],
    getSeparator: () => string
  ) => {
    return eachNumber
      .reduce((acc, cur) => {
        const separator = getSeparator();

        return acc + `${cur}` + separator;
      }, "")
      .slice(0, -1);
  };

  public appendSeparatorInformation = (
    separatedNumbers: string,
    separator: string
  ) => {
    return `//${separator}\n${separatedNumbers}`;
  };
}
