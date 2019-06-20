import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { AppComponent } from './app.component';

const routes: Routes  = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: ':country',
    component: CityComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
