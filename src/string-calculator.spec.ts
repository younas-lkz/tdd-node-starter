import fc from "fast-check";

import { Sut } from "./string-calculator.sut";
import { StringCalculator } from "./string-calculator";

describe("String Calculator", () => {
  let sut: Sut;
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    sut = new Sut();
    stringCalculator = new StringCalculator();
  });

  it("Given numbers separated by a given delimiter When I add the stringCalculator on it Then I should get the sum of the numbers", () => {
    sut.givenNumbersAndDelimiter((eachNumber, delimiter) => {
      fc.pre(!delimiter.includes("-") && isNaN(+delimiter));
      const numbersString = sut.generateSeparatedNumbers(eachNumber, delimiter);

      const sum = stringCalculator.add(numbersString);

      const expectedResult = eachNumber.reduce((acc, cur) => acc + cur, 0);
      expect(sum).toEqual(expectedResult);
    });
  });
});
