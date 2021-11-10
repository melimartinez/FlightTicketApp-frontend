import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { VendorhomeComponent } from './components/vendorhome/vendorhome.component';
<<<<<<< HEAD
import { TicketComponent } from './components/ticket/ticket.component';
=======
import { RegisterComponent } from './components/register/register.component';
import { VendorregisterComponent } from './components/vendorregister/vendorregister.component';
>>>>>>> b270a51569bb7a7f3564645c83ff592bb1a93658



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    VendorhomeComponent,
    TicketComponent
=======
    AppComponent,
    VendorhomeComponent,
    RegisterComponent,
    VendorregisterComponent
>>>>>>> b270a51569bb7a7f3564645c83ff592bb1a93658

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
