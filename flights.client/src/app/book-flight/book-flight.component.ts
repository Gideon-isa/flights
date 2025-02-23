import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightRm } from './../api/models';
import { FlightService } from './../api/services';

@Component({
  selector: 'app-book-flight',
  standalone: false,
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent implements OnInit{

  constructor(private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightService) { }

  flightId: string = 'not loaded';
  flight: FlightRm = {};

  ngOnInit(): void {
      this.route.paramMap
        .subscribe(params => this.findFlight(params.get('flightId')));
  }

  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? 'not passed';
    this.flightService.findFlight({ id: this.flightId })
      .subscribe({
        next: response => this.flight = response,
        error: this.handleError
      });
  }

  private handleError = (error: any) => {
    if (error.status == 404) {
      alert("Flight not found!");
      this.router.navigate(['/search-flights']);
    }
    console.log("Response Error. Status: ", error.status)
    console.log("Response Error. Status Tesx: ", error.statusText)
    console.log(error);
  }
}
