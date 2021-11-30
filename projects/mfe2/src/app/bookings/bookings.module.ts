import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsSearchComponent } from './bookings-search/bookings-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './bookings.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    BookingsSearchComponent
  ]
})
export class BookingsModule { }
