import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor
import { Phones } from '../phones';
import { PhoneListItemComponent } from '../phone-list-item/phone-list-item.component';
import {mockPhone} from "../mock-phone";  // Ensure you import child components if using standalone

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [CommonModule, PhoneListItemComponent],
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent {
  phoneList: Phones[] = mockPhone;
  selectedPhone?: Phones;

  selectPhone(phone: Phones): void {
    this.selectedPhone = phone;
  }
}
