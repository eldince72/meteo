import { Component, OnInit } from '@angular/core';
import { Situazione } from '../situazione';
import { MeteoService } from '../_services/meteo.service';

@Component({
  selector: 'app-previsioni',
  templateUrl: './previsioni.component.html',
  styleUrls: ['./previsioni.component.css']
})
export class PrevisioniComponent implements OnInit {
  title = 'Previsioni meteo';
  previsione = null;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    this.getPrevisione();
  }

  getPrevisione(): void { 
    this.meteoService.getPrevisione()
      .subscribe(previsione => this.previsione = previsione);
  }

  getData(str: string) {
    return str.substr(8,2) + "/" + str.substr(5,2) + "/" + str.substr(0,4);
  }

  getOra(str: string) {
    return str.substr(11,5);
  }
}
