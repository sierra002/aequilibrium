import {AbstractControl, ValidationErrors} from "@angular/forms";

const arrayError = 'Input received is not an array'

export class FormValidators {

  static isArray(control: AbstractControl): ValidationErrors | null {
    try {
      const value = Array.isArray(control.value) ? control.value : JSON.parse(control.value);
      if (Array.isArray(value)) {
        return null;
      }
      return {error: arrayError}
    } catch (e) {
      return {error: arrayError}
    }
  }
}
