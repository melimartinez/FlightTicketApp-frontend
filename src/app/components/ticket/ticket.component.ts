import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Ticket } from 'src/app/models/Ticket';
import { FlightService } from 'src/app/services/flight.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Meals } from 'src/app/models/Meals';
import { CabinClass } from 'src/app/models/CabinClass';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  customer: Customer = JSON.parse(localStorage.getItem('currentCustomer'));
  ticket: Ticket = new Ticket();

  meals:Meals[];
  mealSelected:number;
  cabinClass:CabinClass[];
  cabinSelected:number;

  firstName:string;
  lastName:string;
  phoneNumber:number;
  formattedPh:string;
  email:string;
  noOfPassengers:number;

  constructor(private flightService: FlightService, private ticketService:TicketService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.meals = [
      {id:1, name:"Meals"},
      {id:2, name:"Baby Meal"},
      {id:3, name:"Diabetic Meal"},
      {id:4, name:"Regular Meal"},
      {id:5, name:"Light Whole Food"},
      {id:6, name:"Low Calorie Meal"},
      {id:7, name:"Low Cholesterol Meal"}
    ]
    this.mealSelected=1;

    this.cabinClass = [
      {id:1, name:"Cabin Class"},
      {id:2, name:"Economy Class"},
      {id:3, name:"Business Class"},
      {id:4, name:"First Class"}
    ]
    this.cabinSelected=1;

    this.firstName = this.customer.firstName;
    this.lastName = this.customer.lastName;
    this.formattedPh = this.customer.phoneNumber + "";
    this.formattedPh = this.formattedPh.slice(0,3) + '-' + this.formattedPh.slice(3, 6) + '-' + this.formattedPh.slice(6);
    this.email = this.customer.email;
  } 


  book(){
    this.ticketService.addTicket(this.ticket)
    .subscribe(
      data=>{
        console.log("response received");
        console.log(this.ticket);
        this.router.navigate(['confirmed']);
      },
      error=>{
        console.log("exception occured");
      }
    )
  }

 

}


