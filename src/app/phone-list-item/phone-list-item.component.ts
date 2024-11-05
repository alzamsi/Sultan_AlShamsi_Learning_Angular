import { CommonModule } from '@angular/common';
import {Component, Input} from "@angular/core";
import {Phones} from "../phones";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-phone-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone-list-item.component.html',
  styleUrls: ['./phone-list-item.component.css']
})
export class PhoneListItemComponent {
  @Input() phone?: Phones;
  protected readonly error = error;
}
