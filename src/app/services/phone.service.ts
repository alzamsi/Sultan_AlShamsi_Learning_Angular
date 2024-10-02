import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phones } from '../phones'; // Adjust the path based on your project structure
import { mockPhone } from '../mock-phone'; // Import your mock data

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  private phones: Phones[] = mockPhone; // Local copy of phone data for CRUD operations

  constructor() {}

   getPhones(): Observable<Phones[]> {
    return of(this.phones);
  }

   addPhone(newPhone: Phones): Observable<Phones[]> {
    this.phones.push(newPhone);
    return of(this.phones);
  }

   updatePhone(updatedPhone: Phones): Observable<Phones[]> {
    const index = this.phones.findIndex(phone => phone.id === updatedPhone.id);
    if (index !== -1) {
      this.phones[index] = updatedPhone;
    }
    return of(this.phones);
  }

   deletePhone(phoneId: number): Observable<Phones[]> {
    this.phones = this.phones.filter(phone => phone.id !== phoneId); // Filter out the phone to delete
    return of(this.phones);
  }

   getPhoneById(phoneId: number): Observable<Phones | undefined> {
    const phone = this.phones.find(phone => phone.id === phoneId); // Find the phone by ID
    return of(phone);
  }
}
