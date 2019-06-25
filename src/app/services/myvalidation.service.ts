import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class MyvalidationService {
  constructor() {}

  GetValidationMessages(f: AbstractControl, name: string) {
    if (f.errors) {
      for (let errroName in f.errors) {
        if (errroName == "required") return `${name} alanı boş bırakılamaz`;
        else if (errroName == "email") return `email formatı yanlış`;
        else if (errroName == "minlength")
          return `${name} alanız en az 5 karakter olmalıdır.`;
      }
    }
  }
}
