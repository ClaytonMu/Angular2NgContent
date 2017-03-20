import { AbstractControl, ValidatorFn } from '@angular/forms';
export function MyNameValidator(control: AbstractControl) {
  if(control.value.indexOf('Will') == 0) {
    if((control.value as string).endsWith('0')) {
       return { myname: true };
    }
  }
  return null;
}

export function MyNameValidatorParm(parm: string): ValidatorFn {
  return function (control: AbstractControl) {
    if (parm == control.value) {
      return { myname: true };
    }
    return null;
  };
}
