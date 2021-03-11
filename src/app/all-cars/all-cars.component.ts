import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  cars:any;
  constructor(private service : CarServiceService) { }

  ngOnInit(): void {
    let response = this.service.getCar();
    response.subscribe(data => this.cars = data);
  }

  public removeCar(companyname : string){
    let response = this.service.deleteCar(companyname);
    response.subscribe(data => this.cars = data);
  }

}
