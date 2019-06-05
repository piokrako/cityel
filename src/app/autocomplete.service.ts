import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AutocompleteService {
  constructor(private http: HttpClient) {}

  public autocompleteCityName(cityQuery: string) {
    console.warn(cityQuery);
    this.http
      .get(
        `http://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=c7tXTQyIcMgn4ZXfMFIC&app_code=Jcu8MaYBd1Gg8721U7VK0g&query=${cityQuery}&beginHighlight=<b>&endHighlight=</b>`
      )
      .subscribe(res => {
        console.log(res);
      });
  }
}
