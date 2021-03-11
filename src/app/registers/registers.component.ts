import { Component, OnInit } from '@angular/core';
import { CarServiceService  } from '../car-service.service';
import { Car } from '../car';


@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {
  car : Car  = new Car("","","",0,0);
  message : any;
  

  constructor(private service : CarServiceService ) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let reponse = this.service.doRegistration(this.car);
    reponse.subscribe(data => {
      this.message = data;
    });
  }

}
