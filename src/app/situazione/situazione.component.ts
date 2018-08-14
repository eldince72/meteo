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
  imagePathCieloSereno = 'src/assets/image/cielosereno.png';
  imagePathPocheNuvole = 'src/assets/image/pochenuvole.png';
  imagePathPioggiaLeggera = 'src/assets/image/pioggialeggera.png';
  imagePathNubiSparse = 'src/assets/image/nubisparse.png';
  
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
