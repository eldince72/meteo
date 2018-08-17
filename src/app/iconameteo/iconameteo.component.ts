import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-iconameteo',
  templateUrl: './iconameteo.component.html',
  styleUrls: ['./iconameteo.component.css']
})
export class IconameteoComponent implements OnChanges, OnInit {
  @Input() tempo: string;
  /*imagePathCieloSereno = 'src/assets/image/cielosereno.png';
  imagePathPocheNuvole = 'src/assets/image/pochenuvole.png';
  imagePathPioggiaLeggera = 'src/assets/image/pioggialeggera.png';
  imagePathPioggiaModerata = 'src/assets/image/pioggiamoderata.png';
  imagePathNubiSparse = 'src/assets/image/nubisparse.png';
  imagePathCieloCoperto = 'src/assets/image/cielocoperto.png';
  imagePathTemporale = 'src/assets/image/temporale.png';*/
  pathIcons = [
    {
      "desc": 'cielo sereno',
      "path": "src/assets/image/cielosereno.png"
    },
    {
      "desc": 'poche nuvole',
      "path": "src/assets/image/pochenuvole.png"
    },
    {
      "desc": 'pioggia leggera',
      "path": "src/assets/image/pioggialeggera.png"
    },
    {
      "desc": 'pioggia moderata',
      "path": "src/assets/image/pioggiamoderata.png"
    },
    {
      "desc": 'nubi sparse',
      "path": "src/assets/image/nubisparse.png"
    },
    {
      "desc": 'cielo coperto',
      "path": "src/assets/image/cielocoperto.png"
    },
    {
      "desc": 'temporale',
      "path": "src/assets/image/temporale.png"
    },
    {
      "desc": 'nebbia',
      "path": "src/assets/image/nebbia.png"
    }    
  ];
  pathIcon: string;

  constructor() { }

  ngOnInit() {
    this.getPathIcon();
  }

  ngOnChanges() {
    this.getPathIcon();
  }

  getPathIcon() {
    //this.pathIcon = this.pathIcons.find(e=>e.desc === this.tempo).path;
    let index: number = this.pathIcons.findIndex(e=>e.desc === this.tempo);
    if (index !== -1) {
        this.pathIcon = this.pathIcons[index].path;
    }
    else {
        this.pathIcon = 'src/assets/image/not-available.png';
    }
  }

}
