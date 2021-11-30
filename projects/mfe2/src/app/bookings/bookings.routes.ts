import { Routes } from '@angular/router';
import { BookingsSearchComponent } from './bookings-search/bookings-search.component';
import { HomeComponent } from '../home/home.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: '',
      component:HomeComponent
    },
    {
      path: 'bookings-search',
      component: BookingsSearchComponent
    }
];
