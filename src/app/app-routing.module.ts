import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { HomeComponent } from './home/home.component';
import { RegistersComponent } from './registers/registers.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:"search",component:SearchComponent
  },
  {
    path:"all-cars",component:AllCarsComponent
  },
  {
    path:"register", component:RegistersComponent
  },
  {
    path:"home",component:HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
