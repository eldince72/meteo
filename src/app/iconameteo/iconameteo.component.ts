import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iconameteo',
  templateUrl: './iconameteo.component.html',
  styleUrls: ['./iconameteo.component.css']
})
export class IconameteoComponent implements OnInit {
  @Input() tempo: string;

  imagePathCieloSereno = 'src/assets/image/cielosereno.png';
  imagePathPocheNuvole = 'src/assets/image/pochenuvole.png';
  imagePathPioggiaLeggera = 'src/assets/image/pioggialeggera.png';
  imagePathPioggiaModerata = 'src/assets/image/pioggiamoderata.png';
  imagePathNubiSparse = 'src/assets/image/nubisparse.png';
  imagePathCieloCoperto = 'src/assets/image/cielocoperto.png';
  imagePathTemporale = 'src/assets/image/temporale.png';

  constructor() { }

  ngOnInit() {
  }

}
