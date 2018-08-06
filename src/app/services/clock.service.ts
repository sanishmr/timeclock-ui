import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';  


const httpOptions = {
	headers: new HttpHeaders({'ContentType' : 'application/json'})
};

@Injectable()
export class ClockService {

  constructor(private http:HttpClient) { }
  getClocks()
  {
  	return this.http.get('/server/api/v1/clocks');
  }

}
