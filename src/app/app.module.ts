import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { VendorhomeComponent } from './components/vendorhome/vendorhome.component';
import { TicketComponent } from './components/ticket/ticket.component';
<<<<<<< HEAD
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { RegisterComponent } from './components/register/register.component';
import { VendorregisterComponent } from './components/vendorregister/vendorregister.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { ChildFindFlightsComponent } from './child-find-flights/child-find-flights.component';
=======
import { RegisterComponent } from './components/register/register.component';
import { VendorregisterComponent } from './components/vendorregister/vendorregister.component';
import { RegisterService } from './services/register.service';
import { CustomerLandingComponent } from './components/customerLanding/customer-landing.component';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';

>>>>>>> 9a940a03b9f477512b6efd8ec7715659e6dc5736


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendorhomeComponent,
    TicketComponent,
<<<<<<< HEAD
    CustomerHomeComponent,
    VendorhomeComponent,
    RegisterComponent,
    VendorregisterComponent,
    FlightListComponent,
    ChildFindFlightsComponent
=======
    AppComponent,
    VendorhomeComponent,
    RegisterComponent,
    VendorregisterComponent,
    CustomerLandingComponent,
    CustomerHomeComponent
>>>>>>> 9a940a03b9f477512b6efd8ec7715659e6dc5736

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
