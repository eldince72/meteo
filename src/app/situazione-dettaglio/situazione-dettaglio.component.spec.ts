import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituazioneDettaglioComponent } from './situazione-dettaglio.component';

describe('SituazioneDettaglioComponent', () => {
  let component: SituazioneDettaglioComponent;
  let fixture: ComponentFixture<SituazioneDettaglioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituazioneDettaglioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituazioneDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
