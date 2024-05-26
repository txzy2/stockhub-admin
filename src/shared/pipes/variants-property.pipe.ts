import {Pipe, PipeTransform} from '@angular/core';
import {Variant} from "../types/types";

@Pipe({
  name: 'variantsProperty'
})
export class VariantsPropertyPipe implements PipeTransform {

  transform(variants: Variant[], property: 'size' | 'color' | 'price'): string {
    if (!variants || !variants.length) {
      return '';
    }

    if (property === 'size') {
      return variants.map(variant => variant.size.join(', ')).join(', ');
    } else {
      return variants.map(variant => variant[property]).join(', ');
    }
  }

}
