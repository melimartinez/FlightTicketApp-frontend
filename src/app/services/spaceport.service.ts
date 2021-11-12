import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spaceport } from '../models/Spaceport';

@Injectable({
  providedIn: 'root'
})
export class SpaceportService {

  constructor(private http: HttpClient) { }

  getAllSpaceports(): Observable<Spaceport[]>{
    return this.http.get<Spaceport[]>('http://localhost:8080/spaceports');
  }
}
