import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServ: LoginService) { }

  ngOnInit(): void {
    
  }
  username: string;
  password: string;
  failedLogin: string = "Invalid Login";
  failed: boolean = false;

  async login(){
    console.log(this.username);
    await this.loginServ.login(this.username, this.password);
    console.log(localStorage.getItem('currentCustomer'));
    console.log(localStorage.getItem('currentVendor'));
    localStorage.removeItem('currentCustomer');

    if (!this.loginServ.loginsucceed){
      this.failed = true;
    }

  }

}
