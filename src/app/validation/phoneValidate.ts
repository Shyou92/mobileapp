import { AbstractControl, ValidatorFn } from '@angular/forms';

export default function phoneValidate(codes: number[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let valid = false;

    const currentCode = control.value;
    const operatorCode = currentCode?.slice(2, 5);

    codes.forEach((item) => {
      if (Number(operatorCode) === item) {
        valid = true;
      }
    });

    return !valid ? { validOperatorCode: { value: control.value } } : null;
  };
}
