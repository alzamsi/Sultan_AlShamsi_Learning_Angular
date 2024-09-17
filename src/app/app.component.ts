import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Phones } from './phones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 2';

  phonesList: Phones[] = [
    { id: 1, name: "Iphone 15 Pro Max", company: "Apple", storage: 256, smartPhone: true },
    { id: 2, name: "Iphone 14 Pro Max", company: "Apple", storage: 512, smartPhone: true },
    { id: 3, name: "Iphone X", company: "Apple", storage: 32, smartPhone: true },
    { id: 4, name: "Nokia 225", company: "Nokia", storage: 8, smartPhone: false },
    { id: 5, name: "Samsung Galaxy A15", company: "Samsung", storage: 128, smartPhone: true },
    { id: 6, name: "SAMSUNG Galaxy Z Fold 6", company: "SAMSUNG", storage: 256, smartPhone: true },
    { id: 7, name: "Punkt MP02", company: "Punkt", storage: 2, smartPhone: false }
  ];
}
