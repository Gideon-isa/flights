import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDto, FlightRm } from './../api/models';
import { FlightService } from './../api/services';
import { AuthService } from './../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-flight',
  standalone: false,
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent implements OnInit{

  form: FormGroup;
  flightId: string = 'not loaded';
  flight: FlightRm = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightService,
    private authService: AuthService,
    private formBuilder: FormBuilder) {


    this.form = this.formBuilder.group({
      number: [1, Validators.compose([Validators.required, Validators.min(1), Validators.max(254)])]
    });
  }

  ngOnInit(): void {

    if (!this.authService.current)
      this.router.navigate(['/register-passenger']);

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

  book() {
    if (this.form.invalid)
    {
      alert("Please enter the number of passengers!");
      return;
    }
    console.log(`Booking ${this.form.get('number')?.value} passengers for the flight: ${this.flight.id}`);

    const booking:BookDto = {
      flightId: this.flight.id,
      passengerEmail: this.authService.current?.email,
      numberOfSeats: this.form.get('number')?.value
    }

    this.flightService.bookFlight({body: booking})
      .subscribe(_ => this.router.navigate(['my-booking']), this.handleError)
 
  }

  get number() { return this.form.get('number'); }
}
