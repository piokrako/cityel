import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "./api-response";

@Injectable({
  providedIn: "root"
})
export class AutocompleteService {
  data: ApiResponse;

  constructor(private http: HttpClient) {}

  public autocompleteCityName(cityQuery: string) {
    console.warn(cityQuery);
    this.http
      .get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${cityQuery}&types=geocode&key=AIzaSyDpffa8C0ugDz1SIYiosECbb-VaTYEoXoA`
      )
      .subscribe(
        (json: ApiResponse) => {
          this.data = json;
          console.warn(json);
        },
        err => {
          console.warn(err);
          alert("Server error. Please try again in a few minutes.");
        }
      );
  }
}
