import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings-search',
  templateUrl: './bookings-search.component.html'
})
export class BookingsSearchComponent {
  from = '';
  to = '';
  constructor(private router: Router) {}

  
  search() {
    alert('Booking from ' + this.from + ' to ' + this.to);
  }

  back(){
    this.router.navigate(['bookings']);
  }


}
