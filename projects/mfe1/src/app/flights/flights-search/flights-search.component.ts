import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent {
  from = '';
  to = '';

  constructor(private router: Router) {}

  search() {
    alert('Flight from ' + this.from + ' to ' + this.to);
  }

  back() {
    this.router.navigate(['flights']);
  }
}
