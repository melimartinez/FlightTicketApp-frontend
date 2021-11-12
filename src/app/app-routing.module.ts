import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { TicketComponent } from './components/ticket/ticket.component';
import { RegisterComponent } from './components/register/register.component';
import { VendorregisterComponent } from './components/vendorregister/vendorregister.component';
=======

import { TicketComponent } from './components/ticket/ticket.component';


import { RegisterComponent } from './components/register/register.component';
import { VendorregisterComponent } from './components/vendorregister/vendorregister.component';
import { VendorhomeComponent } from './components/vendorhome/vendorhome.component';

>>>>>>> 9a940a03b9f477512b6efd8ec7715659e6dc5736
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'ticket/:id', component: TicketComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'vendorregister', component: VendorregisterComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: 'login/register/login', component: LoginComponent},
<<<<<<< HEAD
  {path: 'customer-home', component: CustomerHomeComponent}
=======
  {path: 'ticket', component: TicketComponent},
  {path: 'customerHome', component: CustomerHomeComponent},
  {path: 'vendorHome', component: VendorhomeComponent},
  {path: 'ticket', component: TicketComponent}

>>>>>>> 9a940a03b9f477512b6efd8ec7715659e6dc5736
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
