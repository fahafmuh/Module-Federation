import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  styleUrls:['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {
   }

  ngOnInit() {
  }
  gotoFlightSearch(){
    this.router.navigate(['/flights/flights-search']);
  }

}
