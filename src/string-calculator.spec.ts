import fc from "fast-check";

import { Sut } from "./string-calculator.sut";
import { StringCalculator } from "./string-calculator";
import { NegativeNotAllowed } from "./errors/negatives-not-allowed";

describe("String Calculator", () => {
  let sut: Sut;
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    sut = new Sut();
    stringCalculator = new StringCalculator();
  });

  it("Given negative numbers When I add them Then I should get an error thrown", () => {
    sut.givenNumbersAndDelimiter({
      min: Number.MIN_SAFE_INTEGER,
      max: Number.MAX_SAFE_INTEGER,
    })((eachNumber, delimiter) => {
      fc.pre(!delimiter.includes("-") && isNaN(+delimiter));
      const numbersString = sut.generateSeparatedNumbers(eachNumber, delimiter);

      if (eachNumber.find((num) => num < 0)) {
        const run = () => stringCalculator.add(numbersString);

        expect(run).toThrowError(
          new NegativeNotAllowed(eachNumber.filter((num) => num < 0))
        );
      } else {
        const sum = stringCalculator.add(numbersString);

        const expectedResult = eachNumber.reduce((acc, cur) => acc + cur, 0);

        expect(sum).toEqual(expectedResult);
      }
    });
  });

  it("Given numbers separated by a delimiter When I add them Then I should get the sum", () => {
    sut.givenNumbersAndDelimiter({ min: 0, max: Number.MAX_SAFE_INTEGER })(
      (eachNumber, delimiter) => {
        fc.pre(!delimiter.includes("-") && isNaN(+delimiter));
        const numbersString = sut.generateSeparatedNumbers(
          eachNumber,
          delimiter
        );
        const sum = stringCalculator.add(numbersString);

        const expectedResult = eachNumber.reduce((acc, cur) => acc + cur, 0);

        expect(sum).toEqual(expectedResult);
      }
    );
  });
});
