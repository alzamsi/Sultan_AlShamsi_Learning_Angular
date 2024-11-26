import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Phones } from '../phones';
import { PhoneListItemComponent } from '../phone-list-item/phone-list-item.component';
import { PhoneService } from "../services/phone.service";
import { RouterOutlet, Router } from "@angular/router";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [CommonModule, PhoneListItemComponent, RouterOutlet, HoverHighlightDirective],
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phoneList: Phones[] = [];
  selectedPhone?: Phones;

  constructor(private phoneService: PhoneService, private router: Router) { // Dependency injection
  }

  ngOnInit() {
    this.phoneService.getPhones().subscribe({
      next: (data: Phones[]) => this.phoneList = data,
      error: err => console.error("Error fetching Phones", err),
      complete: () => console.log("Phone data fetch complete!")
    });
  }

  selectPhone(phone: Phones): void {
    this.selectedPhone = phone;
  }



  onDelete(phoneId: any): void {
    this.phoneService.deletePhone(phoneId);
     this.phoneList = this.phoneList.filter(phone => phone.id !== phoneId);
  }


  onEdit(phoneId: any): void {
     this.router.navigate(['/modify-student',phoneId]);

  }
}

