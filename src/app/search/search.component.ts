import { Component, OnInit } from "@angular/core";
import { AutocompleteService } from "../autocomplete.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  providers: [AutocompleteService]
})
export class SearchComponent implements OnInit {
  constructor(private autocompleteService: AutocompleteService) {}
  autocomplete(text:string) {
    this.autocompleteService.autocompleteCityName(text.toString());
  }
  ngOnInit() {}
}
