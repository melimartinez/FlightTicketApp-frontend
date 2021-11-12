import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(private flightHttp: FlightService) { }

  ngOnInit(): void {
    this.displayAllFlights();
  }


  flightList: Flight[] = [];


  displayAllFlights() {
    console.log("works")
    this.flightHttp.getAllFlights().subscribe(
      (response: any) => {
        console.log(response);
        this.flightList = response;

      }
    )
    console.log(this.flightList);
  }


}
