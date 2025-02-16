import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FlightService } from '../api/services/flight.service';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-search-flights',
  standalone: false,
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent {

  searchResult: FlightRm[] = [
    {
      airline: "American Airline",
      arrival: { place: "Instanbul", time: Date.now().toString() },
      departure: { place: "Los Angels", time: Date.now().toString() },
      price: "350",
      remainingNumberOfSeats: 500
    },
    {
      airline: "Deutsche BA",
      arrival: { place: "Schipol", time: Date.now().toString() },
      departure: { place: "Muchen", time: Date.now().toString() },
      price: "600",
      remainingNumberOfSeats: 60
    },
    {
      airline: "British Airways",
      arrival: { place: "Vizzola-Ticino", time: Date.now().toString() },
      departure: { place: "London, England", time: Date.now().toString() },
      price: "700",
      remainingNumberOfSeats: 50
    }

  ];

  constructor() { }

}

