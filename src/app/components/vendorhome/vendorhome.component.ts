import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',
  styleUrls: ['./vendorhome.component.css']
})
export class VendorhomeComponent implements OnInit {

  constructor(private vendorHttp: VendorService) { }

  
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
    
  }



  editFlight() {
    console.log("editing Flight");
  }

  deleteFlight(id: number) {
    this.vendorHttp.deleteFlight(id).subscribe (
      (response) => {
        console.log(response);
      }
    )
  }
}
