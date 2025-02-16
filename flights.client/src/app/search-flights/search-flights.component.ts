import { Component } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  standalone: false,
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent {

  searchResult: any = [
    "American Airlines", "British Airways", "Luftansa", "Qatar Airways", "Emirates"
  ];

  constructor() { }

}
