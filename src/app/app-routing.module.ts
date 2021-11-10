import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'ticket', component: TicketComponent}
=======
import { RegisterComponent } from './components/register/register.component';
import { VendorregisterComponent } from './components/vendorregister/vendorregister.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'vendorregister', component: VendorregisterComponent},
  {path: 'login/register', component: RegisterComponent},
  {path: 'login/register/login', component: LoginComponent}
>>>>>>> b270a51569bb7a7f3564645c83ff592bb1a93658
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
