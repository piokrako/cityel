import { Injectable } from '@angular/core';
import { CurrentCity } from './current-city';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  current:CurrentCity = new CurrentCity('Poznań', 'Poland', 'PLN', 'Polish')

  constructor(private http: HttpClient) { }
  
  currentCity() {
    return this.current;
  }

}

