import fc from "fast-check";

import { Sut } from "./string-calculator.sut";
import { StringCalculator } from "./string-calculator";

fc.configureGlobal({ numRuns: 1000 });

describe("String Calculator", () => {
  let sut: Sut;
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    sut = new Sut();
    stringCalculator = new StringCalculator();
  });

  it("Given no number When I add the stringCalculator on it Then I should get zero", () => {
    const sum = stringCalculator.add("");

    expect(sum).toEqual(0);
  });

  it("Given one number When I add the stringCalculator on it Then I should get the given number", () => {
    sut.givenOneNumber((nb) => {
      const stringNb = `${nb}`;

      const sum = stringCalculator.add(stringNb);

      expect(sum).toEqual(nb);
    });
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
