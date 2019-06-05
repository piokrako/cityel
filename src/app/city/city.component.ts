import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

import { CurrentCity } from '../current-city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  currentCity: CurrentCity;
  constructor(private cityService:CityService) { }

  ngOnInit() {
    this.currentCity = this.cityService.currentCity();
  }

}
