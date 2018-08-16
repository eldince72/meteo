import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iconameteo',
  templateUrl: './iconameteo.component.html',
  styleUrls: ['./iconameteo.component.css']
})
export class IconameteoComponent implements OnInit {
  @Input() tempo: string;

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
    }    
  ];
  pathIcon: string;

  constructor() { }

  ngOnInit() {
    this.pathIcon = this.pathIcons.find(e=>e.desc === this.tempo).path;
  }

}
