import { Routes } from '@angular/router';
import {PhoneListComponent} from "./app/phone-list/phone-list.component";
import {PhoneListItemComponent} from "./app/phone-list-item/phone-list-item.component";

export const routes: Routes = [
  { path: 'phones', component: PhoneListComponent },
  { path: 'phones/:id', component: PhoneListItemComponent}
];
