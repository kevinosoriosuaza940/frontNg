import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    this.httpClient.get('http://localhost:8080/api')
  }
}
