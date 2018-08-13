import { Component, OnInit } from '@angular/core';
import { Situazione } from '../situazione';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-situazione',
  templateUrl: './situazione.component.html',
  styleUrls: ['./situazione.component.css']
})
export class SituazioneComponent implements OnInit {
  title = 'Previsioni meteo';
  
  situazione: Situazione;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    this.getSituazione();
  }

  getSituazione(): void {
    this.situazione = this.meteoService.getSituazione();
  }

}
