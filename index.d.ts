declare namespace Cpf {
  interface CpfStatic {
    format(number: string): string;

    generate(formatted?: boolean): string;

    isValid(number: string, strict?: boolean): boolean;

    strip(number: string, strict?: boolean): string;
  }
}

declare var cpf: Cpf.CpfStatic;

export = cpf;