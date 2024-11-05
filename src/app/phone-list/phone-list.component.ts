import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Phones } from '../phones';
import { PhoneListItemComponent } from '../phone-list-item/phone-list-item.component';
import { PhoneService } from "../services/phone.service";
import { RouterOutlet, Router } from "@angular/router";

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [CommonModule, PhoneListItemComponent, RouterOutlet],
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phoneList: Phones[] = [];
  selectedPhone?: Phones;
  error: string | null = null;

  constructor(private phoneService: PhoneService, private router: Router) {}

  ngOnInit() {
    this.phoneService.getPhones().subscribe({
      next: (data: Phones[]) => {
        this.phoneList = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error fetching phones';
        console.error("Error fetching phones", err);
      },
      complete: () => console.log("Phone data fetch complete!")
    });
  }

  selectPhone(phone: Phones): void {
    this.selectedPhone = phone;
  }

  onDelete(phoneId: number): void {
    this.phoneService.deletePhone(phoneId).subscribe({
      next: () => {
        this.phoneList = this.phoneList.filter(phone => phone.id !== phoneId);
      },
      error: (err) => {
        this.error = 'Error deleting phone';
        console.error("Error deleting phone", err);
      }
    });
  }

  onEdit(phoneId: number): void {
    this.router.navigate(['/modify-phones', phoneId]);
  }
}
