import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',
  styleUrls: ['./vendorhome.component.css']
})
export class VendorhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newFlight() {
    console.log("new flight will be created");
  }

  pastFlights() {
    console.log("veiwing past flights");
  }

  editFlight() {
    console.log("editing Flight");
  }

}
