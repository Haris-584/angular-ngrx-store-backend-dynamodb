// business.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri = 'http://localhost:4000/data';

  constructor(private http: HttpClient) { }

  getdata() {
    return this
           .http
           .get(`${this.uri}`);
  }
}