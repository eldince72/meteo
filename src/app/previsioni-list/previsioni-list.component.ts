import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previsioni-list',
  templateUrl: './previsioni-list.component.html',
  styleUrls: ['./previsioni-list.component.css']
})
export class PrevisioniListComponent implements OnInit {
  title = 'Previsioni meteo';
  json = {
            "coord": {
                "lon": 7.68,
                "lat": 45.07
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "nubi sparse",
                    "icon": "03d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 22.74,
                "pressure": 1014,
                "humidity": 78,
                "temp_min": 22,
                "temp_max": 24
            },
            "visibility": 10000,
            "wind": {
                "speed": 1.5,
                "deg": 100
            },
            "clouds": {
                "all": 40
            },
            "dt": 1534148400,
            "sys": {
                "type": 1,
                "id": 5795,
                "message": 0.0193,
                "country": "IT",
                "sunrise": 1534134519,
                "sunset": 1534185523
            },
            "id": 3165524,
            "name": "Turin",
            "cod": 200
        };
  constructor() { }

  ngOnInit() {
  }

}
