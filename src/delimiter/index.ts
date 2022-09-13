import { ValueObject } from "../ddd-tools/value-object";

interface DelimiterProps {
  numbers: string;
}

export class Delimiter extends ValueObject<DelimiterProps> {
  delimiter!: RegExp | string;
  numbersWithoutDelimiter!: string;

  private constructor(props: DelimiterProps) {
    super(props);
    this.setDelimiter();
    this.setNumbersWithoutDelimiter();
  }

  public static create(props: DelimiterProps): Delimiter {
    return new Delimiter(props);
  }

  public getDelimiter() {
    return this.delimiter;
  }

  public getNumbersWithoutDelimiter() {
    return this.numbersWithoutDelimiter;
  }

  private setDelimiter() {
    const isDelimiterOverride = new RegExp("^//.*\\n").test(this.props.numbers);

    if (isDelimiterOverride) {
      this.delimiter = this.props.numbers.substring(
        this.props.numbers.indexOf("//") + 2,
        this.props.numbers.indexOf("\n")
      );
    } else {
      this.delimiter = this.getNewLineAndDelimiterRegex(",");
    }
  }

  private getNewLineAndDelimiterRegex(delimiter: string): RegExp {
    return new RegExp(`[\\s${delimiter}]+`);
  }

  private setNumbersWithoutDelimiter() {
    const isDelimiterOverride = new RegExp("^//.*\\n").test(this.props.numbers);

    if (isDelimiterOverride) {
      this.numbersWithoutDelimiter = this.props.numbers.slice(
        this.props.numbers.indexOf("\n") + 1,
        this.props.numbers.length
      );
    } else {
      this.numbersWithoutDelimiter = this.props.numbers;
    }
  }
}
