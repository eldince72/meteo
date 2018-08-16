import { Component, OnInit } from '@angular/core';
import { Situazione } from '../situazione';
import { MeteoService } from '../_services/meteo.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-previsioni',
  templateUrl: './previsioni.component.html',
  styleUrls: ['./previsioni.component.css']
})
export class PrevisioniComponent implements OnInit {
  title = 'Previsioni meteo';
  previsione = null;
  previsioni = [];
  error = '';
  currentPage: number = 1;
  pageSize: number = 8;
  elencocitta = [];  
  citta: number;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    this.elencocitta = this.meteoService.getElencoCitta();
    this.citta = this.elencocitta[93].id;
    this.getPrevisione(this.citta);
  }

  /**
   * 
   * @param citta 
   */
  getPrevisione(citta: number): void { 
   /* this.meteoService.getPrevisione()
      .subscribe(previsione => this.previsione = previsione);*/    
    this.citta = citta;
    this.meteoService.getPrevisione(this.citta)
    .subscribe(
      data => {
        this.previsione = data;
        this.previsioni = data.list;
      },
      error => {
        this.error = 'Errore chiamata API';
      }
    );
  }
 
  get pagePrevisioni(){
    return this.previsioni.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
  }

  /**
   * 
   * @param str 
   */
  getData(str: string) {
    return str.substr(8,2) + "/" + str.substr(5,2) + "/" + str.substr(0,4);
  }

  /**
   * 
   * @param str 
   */
  getOra(str: string) {
    return str.substr(11,5);
  }
}
