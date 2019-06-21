import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "urlformat"
})
export class UrlformatPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    value = value.toLowerCase();
    value = value.replace(/[",.*+?^${}()|[\]\\]/g, "-");
    value = value.replace(/\s/g, "-");
    value = value.replace(/[ç]/g, "c");
    value = value.replace(/[ğ]/g, "g");
    value = value.replace(/[ı]/g, "i");
    value = value.replace(/[ö]/g, "o");
    value = value.replace(/[ş]/g, "s");
    value = value.replace(/[ü]/g, "ü");

    return value;
  }
}
