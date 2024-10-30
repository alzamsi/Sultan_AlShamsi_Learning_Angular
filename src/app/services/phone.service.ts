import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phones } from '../phones';
import { mockPhone } from '../mock-phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private phones: Phones[] = mockPhone;

  constructor() { }

  getPhones(): Observable<Phones[]> {
    return of(this.phones);
  }

  getPhoneById(id: number): Observable<Phones | undefined> {
    return of(this.phones.find(phone => phone.id === id));
  }

  addPhone(phone: Phones): Observable<Phones> {
    this.phones.push(phone);
    return of(phone);
  }

  updatePhone(updatedPhone: Phones): Observable<Phones | undefined> {
    const index = this.phones.findIndex(phones => phones.id === updatedPhone.id);
    if (index > -1) {
      this.phones[index] = updatedPhone;
      return of(updatedPhone);
    }
    return of(undefined);
  }

  deletePhone(id: number): void {
    this.phones = this.phones.filter(phone => phone.id !== id);
  }

  generateNewId(): number {
    return this.phones.length > 0 ? Math.max(...this.phones.map(phone => phone.id)) + 1 : 1;
  }
}
