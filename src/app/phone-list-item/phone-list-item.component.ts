import {Component, Input} from '@angular/core';
import {Phones} from "../phones";

@Component({
  selector: 'app-phone-list-item',
  standalone: true,
  imports: [],
  templateUrl: './phone-list-item.component.html',
  styleUrl: './phone-list-item.component.css'
})
export class PhoneListItemComponent {
  @Input() item?:Phones;

}
