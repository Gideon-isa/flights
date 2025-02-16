import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../api/services/flight.service';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-search-flights',
  standalone: false,
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent implements OnInit{

  searchResult: FlightRm[] = [];

  constructor(private flightService: FlightService) { }

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  serachFlights() {

    this.flightService.searchFlight({})
      .subscribe({
        next: response => this.searchResult = response,
        error: this.handleError
      });
  }

  private handleError(error: any) {
    console.log(error);   
  }
}



