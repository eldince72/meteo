import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisioniDettaglioComponent } from './previsioni-dettaglio.component';

describe('PrevisioniDettaglioComponent', () => {
  let component: PrevisioniDettaglioComponent;
  let fixture: ComponentFixture<PrevisioniDettaglioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisioniDettaglioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisioniDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
