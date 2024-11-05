import {provideRouter, Routes} from '@angular/router';
import {PhoneListComponent} from "./app/phone-list/phone-list.component";
import {PhoneListItemComponent} from "./app/phone-list-item/phone-list-item.component";
 import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {ModifyPhoneComponent} from './app/modify-phones/modify-phones.component';
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";

const routes: Routes = [
  {path:'', redirectTo: '/phones', pathMatch: 'full'},
  { path: 'phones', component: PhoneListComponent },
  { path: 'phones/:id', component: PhoneListItemComponent },
  {path:'modify-phones/:id', component: ModifyPhoneComponent},
  {path:'modify-phones',component:ModifyPhoneComponent},
  {path: '**', component:PageNotFoundComponent}

];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
