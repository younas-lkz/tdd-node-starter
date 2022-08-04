import * as fc from "fast-check";

import { StringCalculator } from "./string-calculator";

describe("String Calculator", () => {
  let stringCalculator: StringCalculator;

  beforeEach(() => {
    stringCalculator = new StringCalculator();
  });

  it("Empty string => 0", () => {
    const sum = stringCalculator.add("");

    expect(sum).toEqual(0);
  });

  it("NbStr => Nb", () => {
    const integerBuilder: fc.Arbitrary<number> = fc.integer();

    fc.assert(
      fc.property(integerBuilder, (nb) => {
        const stringNb = `${nb}`;

        const sum = stringCalculator.add(stringNb);

        expect(sum).toEqual(nb);
      })
    );
  });

  it("Given numbers separated by comas or new line When I add the stringCalculator on it Then I should get the sum of the numbers", () => {
    const integerArrayBuilder = fc.array(fc.integer());

    fc.assert(
      fc.property(integerArrayBuilder, (eachNumber) => {
        const separatedNumbers = generateSeparatedNumbers(
          eachNumber,
          getDefaultSeparator
        );

        const sum = stringCalculator.add(separatedNumbers);

        const expectedResult = eachNumber.reduce((acc, cur) => acc + cur, 0);
        expect(sum).toEqual(expectedResult);
      })
    );
  });

  it("Given numbers separated by a given separator When I add the stringCalculator on it Then I should get the sum of the numbers", () => {
    const integerArrayBuilder = fc.array(fc.integer({ min: -1000, max: 1000 }));
    const separatorBuilder = fc.string({ minLength: 1, maxLength: 1 });

    fc.assert(
      fc.property(
        integerArrayBuilder,
        separatorBuilder,
        (eachNumber, separator) => {
          const numbersString = generateSeparatedNumbers(
            eachNumber,
            () => separator
          );
          const numbersWithSeparatorInfo = appendSeparatorInformation(
            numbersString,
            separator
          );

          const sum = stringCalculator.add(numbersWithSeparatorInfo);

          const expectedResult = eachNumber.reduce((acc, cur) => acc + cur, 0);
          expect(sum).toEqual(expectedResult);
        }
      )
    );
  });
});

const getDefaultSeparator = () => (randomFromInterval(0, 1) ? "," : "\n");

const generateSeparatedNumbers = (
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

const randomFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const appendSeparatorInformation = (
  separatedNumbers: string,
  separator: string
) => {
  return `//${separator}\n${separatedNumbers}`;
};
