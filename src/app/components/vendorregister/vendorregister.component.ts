import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendorregister',
  templateUrl: './vendorregister.component.html',
  styleUrls: ['./vendorregister.component.css']
})
export class VendorregisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  companyName: string;
  vendorUsername: string;
  vendorPassword: string;
  vendorEmail: string; 
  vendorPhoneNumber: number;

  submit() {
    console.log("it works")
    console.log(this.companyName)

  }
}
