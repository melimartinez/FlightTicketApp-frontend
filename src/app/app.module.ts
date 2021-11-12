import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { VendorhomeComponent } from './components/vendorhome/vendorhome.component';
import { TicketComponent } from './components/ticket/ticket.component';

import { CustomerHomeComponent } from './components/customer-home/customer-home.component';

import { FlightListComponent } from './flight-list/flight-list.component';
import { ChildFindFlightsComponent } from './child-find-flights/child-find-flights.component';

import { RegisterComponent } from './components/register/register.component';
import { VendorregisterComponent } from './components/vendorregister/vendorregister.component';
import { RegisterService } from './services/register.service';
import { CustomerLandingComponent } from './components/customerLanding/customer-landing.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerHomeComponent,
    RegisterComponent,
    VendorregisterComponent,
    FlightListComponent,
    ChildFindFlightsComponent,
    VendorhomeComponent,
    TicketComponent,
    CustomerLandingComponent,
    CustomerHomeComponent

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
