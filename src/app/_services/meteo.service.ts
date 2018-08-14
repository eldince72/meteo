import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Situazione } from '../situazione';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }
  
  getSituazione(): Situazione {
    return {
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
  }

  getSituazioneApi() {
    return this.http
      .get<any>('http://api.openweathermap.org/data/2.5/weather?id=3165524&units=metric&lang=it&APPID=14f1f6bf554218ae3f1e790eda450874');

  }

  getPrevisione() {
    return this.http
      .get<any>('http://api.openweathermap.org/data/2.5/forecast?id=3165524&lang=it&units=metric&APPID=14f1f6bf554218ae3f1e790eda450874');
  }

  
}
