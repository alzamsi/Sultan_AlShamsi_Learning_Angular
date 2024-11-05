import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Phones } from '../phones';
import { mockPhone } from '../mock-phone';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private apiUrl = 'api/phones';
  private phones: Phones[] = mockPhone;

  constructor(private http: HttpClient) { }

  getPhones(): Observable<Phones[]> {
    return this.http.get<Phones[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getPhoneById(id: number): Observable<Phones | undefined> {
    return this.http.get<Phones>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  addPhone(phone: Phones): Observable<Phones> {
    return this.http.post<Phones>(this.apiUrl, phone).pipe(catchError(this.handleError));
  }

  updatePhone(updatedPhone: Phones): Observable<Phones | undefined> {
    const url = `${this.apiUrl}/${updatedPhone.id}`;
    return this.http.put<Phones>(url, updatedPhone).pipe(catchError(this.handleError));
  }

  deletePhone(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number {
    return this.phones.length > 0 ? Math.max(...this.phones.map(phone => phone.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
