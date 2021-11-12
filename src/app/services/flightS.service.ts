import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = 'http://localhost:8080/flight';

  constructor(private http: HttpClient) { }

  addFlight(flight: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, flight)
  }

  getAllFlights(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  findByDestinationsAndDate(findflight: Object):Observable<Object>{
    return this.http.post<any[]>(`${this.baseUrl}/findFlights`, findflight)
  }



}
