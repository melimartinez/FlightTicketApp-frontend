import { Component, OnInit, InjectionToken } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Validator } from '@angular/forms';
import { Vendor } from 'src/app/models/Vendor';

@Component({
  selector: 'app-vendorregister',
  templateUrl: './vendorregister.component.html',
  styleUrls: ['./vendorregister.component.css']
})
export class VendorregisterComponent implements OnInit {

  constructor(private vendorHttp: RegisterService) { }

  ngOnInit(): void {
  }
  NG_VALIDATORS: InjectionToken<(Function | Validator)[]>;


  companyName: string;
  vendorUsername: string;
  vendorPassword: string;
  vendorEmail: string; 
  vendorPhoneNumber: number;
  slogan: string; 

  showError: boolean = false;
  holder: string;
  valid: boolean = false;

  submit() {
    console.log("it works")
    console.log(this.companyName)
    console.log(this.vendorUsername)
    console.log(this.vendorPassword)
    console.log(this.vendorEmail)
    console.log(this.vendorPhoneNumber)
    console.log(this.slogan)




    this.vendorHttp.getAllVendors().subscribe(
      (response: any) => {
        console.log(response)

        for(let r of response) {
          if(r.vendorUsername == this.vendorUsername) {
            this.showError = true;
            this.holder = this.vendorUsername;
            this.vendorUsername = "";
          } else {
            this.valid = true;
          }
        }

      }

    );
    if(this.valid) {
      let v: Vendor = new Vendor(0, this.companyName, this.vendorUsername, this.vendorPassword, this.vendorEmail, this.vendorPhoneNumber, this.slogan);
      this.vendorHttp.addVendor(v).subscribe((response) => {
      console.log (response);
      })   

  }
}
}
