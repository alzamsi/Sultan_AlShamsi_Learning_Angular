import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Phones } from '../phones';
import { PhoneListItemComponent } from '../phone-list-item/phone-list-item.component';
import { PhoneService } from "../services/phone.service";

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [CommonModule, PhoneListItemComponent],
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phoneList: Phones[] = [];
  selectedPhone?: Phones;

  constructor(private phoneService: PhoneService) { // Dependency injection
  }

  ngOnInit() {
    this.phoneService.getPhones().subscribe({
      next: (data: Phones[]) => this.phoneList = data, error: err => console.error("Error fetching Phones", err), complete: () => console.log("Phone data fetch complete!")
    });
  }

  selectPhone(phone: Phones): void {
    this.selectedPhone = phone;
  }
}
