import { Component, OnInit, Input } from '@angular/core';
import { Tempo } from '../tempo';

@Component({
  selector: 'app-previsioni-dettaglio',
  templateUrl: './previsioni-dettaglio.component.html',
  styleUrls: ['./previsioni-dettaglio.component.css']
})
export class PrevisioniDettaglioComponent implements OnInit {
  @Input() tempo: Tempo;
  constructor() { }

  ngOnInit() {
  }

}
