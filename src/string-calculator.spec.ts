import fc from "fast-check";

import { Sut } from "./string-calculator.sut";
import { StringCalculator } from "./string-calculator";

fc.configureGlobal({ numRuns: 1_000 });

describe("String Calculator", () => {
  let sut: Sut;
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    sut = new Sut();
    stringCalculator = new StringCalculator();
  });

  it("Given numbers separated by delimiter When I add them Then I should get the sum", () => {
    sut.givenNumbersAndDelimiter((eachNumber, delimiter) => {
      fc.pre(delimiter !== "-" && isNaN(+delimiter));
      const numbersString = sut.generateSeparatedNumbers(
        eachNumber,
        () => delimiter ?? sut.getDefaultDelimiter()
      );
      const numbersWithDelimiterInfo = sut.appendDelimiterInformation(
        numbersString,
        delimiter
      );

      const sum = stringCalculator.add(numbersWithDelimiterInfo);

      const expectedResult = eachNumber.reduce((acc, cur) => acc + cur, 0);
      expect(sum).toEqual(expectedResult);
    });
  });
});
