declare namespace Cpf {
  interface CpfStatic {
    format(number: string): string;

    generate(formatted?: boolean): string;

    isValid(number: string, strict?: boolean): string;

    strip(number: string): string;
  }
}

declare var cpf: Cpf.CpfStatic;

export = cpf;