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

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    this.getSituazione();
  }

  getSituazione(): void {
    //this.situazione = this.meteoService.getSituazione();
    this.meteoService.getSituazioneApi()
      .subscribe(situazione => this.situazione = situazione);
  }

}
