import { Pipe, PipeTransform } from '@angular/core';
import {Phones} from "../phones";

@Pipe({
  name: 'model',
  standalone: true
})
export class ModelPipe implements PipeTransform {

  transform(phone: Phones): string {

    return `${phone.company}${phone.name} `;
  }

}
