import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Vendor } from '../models/Vendor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customers')
  }

  getAllVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>('http://localhost:8080/vendors')
  }
}
