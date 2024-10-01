import { Injectable } from '@angular/core';
import {Phones} from "../phones";
import {Observable, of} from "rxjs";
import {mockPhone} from "../mock-phone";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
   constructor() {}

  getPhones(): Observable<Phones[]> {
    return of(mockPhone)
  }
}
