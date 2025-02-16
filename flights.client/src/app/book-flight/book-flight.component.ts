import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  standalone: false,
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }

    flightId: string = 'not loaded';

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.flightId = params.get('flightId') ?? 'not passed';
      });
    }

}
