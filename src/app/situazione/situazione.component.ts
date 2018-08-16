import { Component, OnInit } from '@angular/core';
import { Situazione } from '../situazione';
import { MeteoService } from '../_services/meteo.service';

@Component({
  selector: 'app-situazione',
  templateUrl: './situazione.component.html',
  styleUrls: ['./situazione.component.css']
})
export class SituazioneComponent implements OnInit {
  title = 'Situazione in tempo reale'; 
  situazione: Situazione;
  elencocitta = [];
  citta: number;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    this.elencocitta = this.meteoService.getElencoCitta();
    this.citta = this.elencocitta[93].id;
    this.getSituazione(this.citta);
  }

  getSituazione(citta: number): void {
    //this.situazione = this.meteoService.getSituazione();
    this.citta = citta;
    this.meteoService.getSituazioneApi(this.citta)
      .subscribe(situazione => this.situazione = situazione);
  }

}
