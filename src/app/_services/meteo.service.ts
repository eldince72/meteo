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

  /**
   * 
   * @param idCitta 
   */
  getSituazioneApi(idCitta: number) {
    return this.http
      .get<any>('http://api.openweathermap.org/data/2.5/weather?id='+ idCitta + '&lang=it&units=metric&APPID=14f1f6bf554218ae3f1e790eda450874');

  }

  /**
   * 
   * @param idCitta 
   */
  getPrevisione(idCitta: number) {
    return this.http
      .get<any>('http://api.openweathermap.org/data/2.5/forecast?id='+ idCitta + '&lang=it&units=metric&APPID=14f1f6bf554218ae3f1e790eda450874');
  }

  getElencoCitta() {
    return [
      {
        "id": 6541860,
        "name": "Agrigento"
      },
      {
        "id": 6541464,
        "name": "Alessandria"
      },
      {
        "id": 3183089,
        "name": "Ancona"
      },
      {
        "id": 3182997,
        "name": "Aosta"
      },
      {
        "id": 6542153,
        "name": "Arezzo"
      },
      {
        "id": 6542152,
        "name": "Ascoli Piceno"
      },
      {
        "id": 3182714,
        "name": "Asti"
      },
      {
        "id": 3182650,
        "name": "Avellino"
      },
      {
        "id": 6537546,
        "name": "Barletta"
      },
      {
        "id": 3182210,
        "name": "Belluno"
      },
      {
        "id": 6542123,
        "name": "Benevento"
      },
      {
        "id": 6542116,
        "name": "Bergamo"
      },
      {
        "id": 3182043,
        "name": "Biella"
      },
      {
        "id": 6541998,
        "name": "Bologna"
      },
      {
        "id": 3181913,
        "name": "Bolzano"
      },
      {
        "id": 6542113,
        "name": "Brescia"
      },
      {
        "id": 6540109,
        "name": "Brindisi"
      },
      {
        "id": 6540125,
        "name": "Cagliari"
      },
      {
        "id": 2525448,
        "name": "Caltanissetta"
      },
      {
        "id": 3180991,
        "name": "Campobasso"
      },
      {
        "id": 6539583,
        "name": "Carbonia"
      },
      {
        "id": 6541869,
        "name": "Caserta"
      },
      {
        "id": 6541858,
        "name": "Catanzaro"
      },
      {
        "id": 3178796,
        "name": "Chieti"
      },
      {
        "id": 6542055,
        "name": "Como"
      },
      {
        "id": 6541467,
        "name": "Cosenza"
      },
      {
        "id": 5932187,
        "name": "Cremona"
      },
      {
        "id": 6541463,
        "name": "Crotone"
      },
      {
        "id": 3177700,
        "name": "Cuneo"
      },
      {
        "id": 6541871,
        "name": "Enna"
      },
      {
        "id": 6541874,
        "name": "Fermo"
      },
      {
        "id": 6542120,
        "name": "Ferrara"
      },
      {
        "id": 6542285,
        "name": "Firenze"
      },
      {
        "id": 3176885,
        "name": "Foggia"
      },
      {
        "id": 3176746,
        "name": "Forli"
      },
      {
        "id": 6541853,
        "name": "Frosinone"
      },
      {
        "id": 3176219,
        "name": "Genova"
      },
      {
        "id": 6541866,
        "name": "Gorizia"
      },
      {
        "id": 6541868,
        "name": "Grosseto"
      },
      {
        "id": 6541484,
        "name": "Imperia"
      },
      {
        "id": 6540113,
        "name": "Isernia"
      },
      {
        "id": 3175081,
        "name": "La Spezia"
      },
      {
        "id": 6541999,
        "name": "L'Aquila"
      },
      {
        "id": 6542115,
        "name": "Latina"
      },
      {
        "id": 3174953,
        "name": "Lecce"
      },
      {
        "id": 3174945,
        "name": "Lecco"
      },
      {
        "id": 3174659,
        "name": "Livorno"
      },
      {
        "id": 3174638,
        "name": "Lodi"
      },
      {
        "id": 6542121,
        "name": "Lucca"
      },
      {
        "id": 3174380,
        "name": "Macerata"
      },
      {
        "id": 3174051,
        "name": "Mantova"
      },
      {
        "id": 3173775,
        "name": "Massa"
      },
      {
        "id": 3173721,
        "name": "Matera"
      },
      {
        "id": 6541859,
        "name": "Messina"
      },
      {
        "id": 3173435,
        "name": "Milano"
      },
      {
        "id": 6541461,
        "name": "Modena"
      },
      {
        "id": 6537122,
        "name": "Monza"
      },
      {
        "id": 3172394,
        "name": "Napoli"
      },
      {
        "id": 6542119,
        "name": "Novara"
      },
      {
        "id": 3172154,
        "name": "Nuoro"
      },
      {
        "id": 6540127,
        "name": "Olbia"
      },
      {
        "id": 2523964,
        "name": "Oristano"
      },
      {
        "id": 6542281,
        "name": "Padova"
      },
      {
        "id": 6542127,
        "name": "Palermo"
      },
      {
        "id": 3171457,
        "name": "Parma"
      },
      {
        "id": 3171366,
        "name": "Pavia"
      },
      {
        "id": 6542125,
        "name": "Perugia"
      },
      {
        "id": 6542003,
        "name": "Pesaro"
      },
      {
        "id": 6540108,
        "name": "Pescara"
      },
      {
        "id": 6542025,
        "name": "Piacenza"
      },
      {
        "id": 6542122,
        "name": "Pisa"
      },
      {
        "id": 6541867,
        "name": "Pistoia"
      },
      {
        "id": 3170147,
        "name": "Pordenone"
      },
      {
        "id": 6541470,
        "name": "Potenza"
      },
      {
        "id": 6540124,
        "name": "Prato"
      },
      {
        "id": 6541996,
        "name": "Ragusa"
      },
      {
        "id": 3169561,
        "name": "Ravenna"
      },
      {
        "id": 2523630,
        "name": "Reggio Calabria"
      },
      {
        "id": 3169524,
        "name": "Reggio Emilia"
      },
      {
        "id": 6541462,
        "name": "Rieti"
      },
      {
        "id": 6541863,
        "name": "Rimini"
      },
      {
        "id": 3169070,
        "name": "Roma"
      },
      {
        "id": 3168843,
        "name": "Rovigo"
      },
      {
        "id": 3168673,
        "name": "Salerno"
      },
      {
        "id": 2523434,
        "name": "Sanluri"
      },
      {
        "id": 6540111,
        "name": "Sassari"
      },
      {
        "id": 3167022,
        "name": "Savona"
      },
      {
        "id": 3166548,
        "name": "Siena"
      },
      {
        "id": 6542286,
        "name": "Siracusa"
      },
      {
        "id": 6539617,
        "name": "Sondrio"
      },
      {
        "id": 3165926,
        "name": "Taranto"
      },
      {
        "id": 6541856,
        "name": "Teramo"
      },
      {
        "id": 6542114,
        "name": "Terni"
      },
      {
        "id": 3165525,
        "name": "Torino"
      },
      {
        "id": 6540128,
        "name": "Tortolì"
      },
      {
        "id": 6542155,
        "name": "Trapani"
      },
      {
        "id": 3165243,
        "name": "Trento"
      },
      {
        "id": 6540118,
        "name": "Treviso"
      },
      {
        "id": 3165185,
        "name": "Trieste"
      },
      {
        "id": 6540119,
        "name": "Udine"
      },
      {
        "id": 3164699,
        "name": "Varese"
      },
      {
        "id": 6542284,
        "name": "Venezia"
      },
      {
        "id": 6542004,
        "name": "Verbania"
      },
      {
        "id": 3164565,
        "name": "Vercelli"
      },
      {
        "id": 6541865,
        "name": "Verona"
      },
      {
        "id": 6540115,
        "name": "Vibo Valentia"
      },
      {
        "id": 6541465,
        "name": "Vicenza"
      },
      {
        "id": 6540107,
        "name": "Viterbo"
      }
    ];
  }
  
}
