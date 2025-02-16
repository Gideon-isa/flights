import { Time } from '@angular/common';
import { Component } from '@angular/core';

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


export interface FlightRm {
  airline: string;
  arrival: TimePlaceRm;
  departure: TimePlaceRm;
  price: string;
  remainingNumberOfSeats: number;

}

export interface TimePlaceRm {
  place: string;
  time: string;
}
