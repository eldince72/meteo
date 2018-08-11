import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Previsioni meteo';
  imagePath = 'src/assets/image/meteo.png';
  isNavbarCollapsed = true;
}
