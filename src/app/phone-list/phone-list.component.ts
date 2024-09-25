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
    {id: 1, name: 'iPhone 13', company: 'Apple', storage: 128, smartPhone: true,imageUrl: "https://media.cdn.kaufland.de/product-images/1024x1024/6cff0aa4905f981e32d34ab79e250087.jpg"},
    {id: 2, name: 'Galaxy S21', company: 'Samsung', storage: 256, smartPhone: true,imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/ca/sm-g991wzvaxac/gallery/ca-galaxy-s-sm-g991wzvaxac-front-phantom-violet-481769010?$624_624_PNG$"},
    {id: 3, name: 'Pixel 6', company: 'Google', storage: 128, smartPhone: true,imageUrl: "https://www.theioutlet.com/ie/wp-content/uploads/sites/5/2023/02/Pixel-6-Stormy-Black.png"},
    {id: 4, name: 'Nokia 3310', company: 'Nokia', storage: 16, smartPhone: false,imageUrl: "https://www.burner-phones.co.uk/wp-content/uploads/2024/03/Nokia-3310-2000.jpg"}
  ];
  selectedPhone?: Phones;

  selectPhone(phone: Phones): void {
    this.selectedPhone = phone;
  }
}
