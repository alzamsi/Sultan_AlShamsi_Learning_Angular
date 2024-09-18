import { Component } from '@angular/core';



@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {

  phoneList:  Phones[] = [...]
//Catch the onclick event from the html
  selectedPhone?: Phones;

  //function to set which student to display
  selectPhone(Phone: Phones): void {
    this.selectedPhone = Phone;

  }
}
