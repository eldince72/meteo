import { Component, OnInit, Input } from '@angular/core';
import { Tempo } from '../tempo';

@Component({
  selector: 'app-situazione-dettaglio',
  templateUrl: './situazione-dettaglio.component.html',
  styleUrls: ['./situazione-dettaglio.component.css']
})
export class SituazioneDettaglioComponent implements OnInit {
  @Input() tempo: Tempo;

  constructor() { }

  ngOnInit() {
  }

}
