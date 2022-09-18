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

  it("Given numbers separated by comas or new line When I add the stringCalculator on it Then I should get the sum of the numbers", () => {
    sut.givenNumbers((numbers) => {
      const separatedNumbers = sut.generateSeparatedNumbers(
        numbers,
        sut.getDefaultDelimiter
      );

      const sum = stringCalculator.add(separatedNumbers);

      const expectedResult = numbers.reduce((acc, cur) => acc + cur, 0);
      expect(sum).toEqual(expectedResult);
    });
  });

  it("Given numbers separated by a given delimiter When I add the stringCalculator on it Then I should get the sum of the numbers", () => {
    sut.givenNumbersAndDelimiter((eachNumber, delimiter) => {
      fc.pre(delimiter !== "-" && isNaN(+delimiter));
      const numbersString = sut.generateSeparatedNumbers(
        eachNumber,
        () => delimiter
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
