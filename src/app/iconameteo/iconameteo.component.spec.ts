import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconameteoComponent } from './iconameteo.component';

describe('IconameteoComponent', () => {
  let component: IconameteoComponent;
  let fixture: ComponentFixture<IconameteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconameteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconameteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
