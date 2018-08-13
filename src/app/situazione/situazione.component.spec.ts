import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituazioneComponent } from './situazione.component';

describe('SituazioneComponent', () => {
  let component: SituazioneComponent;
  let fixture: ComponentFixture<SituazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
