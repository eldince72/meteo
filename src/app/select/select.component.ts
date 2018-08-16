import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class OptionValue {
  id:number;
  name:string;

  constructor(id:number,name:string) {
    this.id = id;
    this.name = name;
  }
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input()
  items: OptionValue[];
  @Input()
  selectedItem: OptionValue;
  @Input()
  name: string;
  @Input()
  label: string;

  @Output()
  selectedItemChange: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.selectedItemChange.emit(value);    
  }

}
