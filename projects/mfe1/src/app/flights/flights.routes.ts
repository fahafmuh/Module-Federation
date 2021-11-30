import { Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { HomeComponent } from '../home/home.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: '',
      component:HomeComponent
    },
    {
      path: 'flights-search',
      component: FlightsSearchComponent
    }
];
