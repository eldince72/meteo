import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Previsioni meteo';
  imagePath = 'src/assets/image/meteo.png';
  
  constructor() { }

  ngOnInit() {
  }

}
