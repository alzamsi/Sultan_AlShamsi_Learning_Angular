import { CommonModule } from '@angular/common';
import {Component, Input} from "@angular/core";
import {Phones} from "../phones";

@Component({
  selector: 'app-phone-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone-list-item.component.html',
  styleUrls: ['./phone-list-item.component.css']
})
export class PhoneListItemComponent {
  @Input() phone?: Phones;
}
