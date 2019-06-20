import { Component } from "@angular/core";
import { AutocompleteService } from "../autocomplete.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  providers: [AutocompleteService]
})

export class SearchComponent{
  inputValue: string = null;
  results;

  constructor(private autocompleteService: AutocompleteService) {}

  autocomplete(text:string) {
    this.autocompleteService.autocompleteCityName(text.toString());
    this.results = this.autocompleteService.data;
    console.warn(this.results);
  }

}
