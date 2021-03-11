import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private http : HttpClient) { }

  public doRegistration(car: Car){
    return this.http.post("http://localhost:8080/save-car",car, {responseType : "text" as "json"});
  }

  public getCar(){
    return this.http.get("http://localhost:8080/all-cars");
  }

  public getCarByCompanyname(companyname: string){
    return this.http.get("http://localhost:8080/search/"+companyname);
  }

  public deleteCar(companyname: string){
    return this.http.get("http://localhost:8080/delete/"+companyname);
  }
}
