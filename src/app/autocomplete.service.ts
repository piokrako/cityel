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
      .get(
        `http://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=c7tXTQyIcMgn4ZXfMFIC&app_code=Jcu8MaYBd1Gg8721U7VK0g&resultType=areas&&query=${cityQuery}`
      )
      .subscribe(
        (json: ApiResponse) => {
          this.data = json;
        },
        err => {
          console.warn(err);
          alert("Serwer nie działa.");
        }
      );
  }
}
