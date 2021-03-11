import { Component, OnInit } from '@angular/core';

import { CarServiceService } from '../car-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  
  car: any;

  _companyname: string;
  

  constructor(private service : CarServiceService) {
    
    this._companyname=""
  
   }

  ngOnInit(): void {
  }
    public findByCompanyname(){
      let response = this.service.getCarByCompanyname(this._companyname);
      response.subscribe(data => this.car = data);
    }
  


  }