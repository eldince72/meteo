import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previsioni-list',
  templateUrl: './previsioni-list.component.html',
  styleUrls: ['./previsioni-list.component.css']
})
export class PrevisioniListComponent implements OnInit {
  title = 'Previsioni del tempo';

  constructor() { }

  ngOnInit() {
  }

}
