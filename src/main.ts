import {provideRouter, Routes} from '@angular/router';
import {PhoneListComponent} from "./app/phone-list/phone-list.component";
import {PhoneListItemComponent} from "./app/phone-list-item/phone-list-item.component";
 import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {ModifyPhoneComponent} from './app/modify-phones/modify-phones.component';

const routes: Routes = [
  {path:'', redirectTo: '/phones', pathMatch: 'full'},
  { path: 'phones', component: PhoneListComponent },
  { path: 'phones/:id', component: PhoneListItemComponent },
  {path:'modify-student/:id', component: ModifyPhoneComponent},
  {path:'modify-student',component:ModifyPhoneComponent},
  {path: '**', component:PageNotFoundComponent}

];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
