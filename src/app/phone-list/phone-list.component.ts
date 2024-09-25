import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor
import { Phones } from '../phones';
import { PhoneListItemComponent } from '../phone-list-item/phone-list-item.component';  // Ensure you import child components if using standalone

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [CommonModule, PhoneListItemComponent],
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent {
  phoneList: Phones[] = [
    {id: 1, name: 'iPhone 13', company: 'Apple', storage: 128, smartPhone: true},
    {id: 2, name: 'Galaxy S21', company: 'Samsung', storage: 256, smartPhone: true},
    {id: 3, name: 'Pixel 6', company: 'Google', storage: 128, smartPhone: true},
    {id: 4, name: 'Nokia 3310', company: 'Nokia', storage: 16, smartPhone: false}
  ];
  selectedPhone?: Phones;

  selectPhone(phone: Phones): void {
    this.selectedPhone = phone;
  }
}
