import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/Flight';
import { Vendor } from 'src/app/models/Vendor';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',
  styleUrls: ['./vendorhome.component.css']
})
export class VendorhomeComponent implements OnInit {

  constructor(private vendorHttp: FlightService, private router: Router) { }

  
  ngOnInit(): void {
    this.getAllFutureFlights();
  }

  flightList: Flight[] = [];
  upcomingFlights: Flight[] = [];
  pastFlights: Flight[] = [];
  showUpcomingFlights: boolean = true;
  showPastFlight: boolean = false;
  showNewFlightForm: boolean = false; // still need to create newFlightForm
  showEditFlightForm: boolean = false; // will basicallily replicate newFlightForm when its done
  currentVendor: Vendor = JSON.parse(localStorage.getItem('currentVendor')); 

  

  getAllFutureFlights() {  //Gets all future flights for this particular vendor
    console.log( this.currentVendor.vendor_id)
    this.vendorHttp.getAllFutureFlights(this.currentVendor.vendor_id).subscribe (
      (response) => {
        this.upcomingFlights = response;
        this.showPastFlight = false;
        this.showUpcomingFlights = true;
      }
    );
  }

  getAllPastFlights() {
    let id = this.currentVendor.vendor_id;
    this.vendorHttp.getAllPastFlights(id).subscribe (
      (response) => {
        this.pastFlights = response;
        this.showUpcomingFlights = false;
        this.showPastFlight = true;
      }
    );
  }

  newFlightForm() {
    console.log("This will reroute to a new page");
    // this.router.navigate(['vendorflightform']);
  }

  editFlight() {
    console.log("editing Flight");
    //this.router.navigate(['vendorflightform'])
  }

  deleteFlight(id: number) {
    this.vendorHttp.deleteFlight(id).subscribe (
      (data) => {
        this.getAllFutureFlights(); // to show updated table
        console.log(data)
      }
    )
  }
}
