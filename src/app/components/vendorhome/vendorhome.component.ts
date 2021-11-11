import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/Flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',
  styleUrls: ['./vendorhome.component.css']
})
export class VendorhomeComponent implements OnInit {

  constructor(private vendorHttp: FlightService, private router: Router) { }

  
  ngOnInit(): void {
    // this.getAllFlights();
    this.getAllFutureFlights();
  }

  flightList: Flight[] = [];
  upcomingFlights: Flight[] = [];
  pastFlights: Flight[] = [];
  showUpcomingFlights: boolean = true;
  showPastFlight: boolean = false;
  showNewFlightForm: boolean = false; // still need to create newFlightForm
  showEditFlightForm: boolean = false; // will basicallily replicate newFlightForm when its done
  
  // currentTime: number = 55000001;

  getAllFutureFlights() { 
    this.vendorHttp.getAllFutureFlights().subscribe (
      (response) => {
        this.upcomingFlights = response;
      }
    );
  }

  getAllPastFlights() {
    this.vendorHttp.getAllPastFlights().subscribe (
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
  }

  deleteFlight(id: number) {
    this.vendorHttp.deleteFlight(id).subscribe (
      data => {
        console.log(data)
      }
    )
  }
}
