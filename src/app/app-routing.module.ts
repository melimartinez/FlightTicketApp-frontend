import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { RegisterComponent } from './components/register/register.component';
import { VendorregisterComponent } from './components/vendorregister/vendorregister.component';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'ticket/:id', component: TicketComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'vendorregister', component: VendorregisterComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: 'login/register/login', component: LoginComponent},
  {path: 'customer-home', component: CustomerHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
