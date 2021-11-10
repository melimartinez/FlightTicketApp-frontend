import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private customerHttp: RegisterService) { }

  ngOnInit(): void {
  }

  firstname: string;
  lastname: string;
  dob: string;
  email: string;
  usernameRegistration: string;
  passwordRegistration: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zipcode: number;

  register() {
    
    console.log(this.firstname)
  }

  checkCustomers() {
    this.customerHttp.getAllCustomers().subscribe(
      (response: any) => {
        console.log(response);
      }

    );
  }

}
