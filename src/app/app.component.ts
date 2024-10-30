import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { Phones } from './phones';
import {PhoneListComponent} from "./phone-list/phone-list.component";
import {PhoneListItemComponent} from "./phone-list-item/phone-list-item.component";
import {PhoneService} from "./services/phone.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PhoneListComponent, PhoneListItemComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment 5';
  selectedPhone?: Phones;

  constructor(private phoneService: PhoneService) {}

  ngOnInit() {
    this.phoneService.getPhoneById(3).subscribe((selectedPhone: Phones| undefined) => {
      this.selectedPhone = selectedPhone;
    });

  }
}
