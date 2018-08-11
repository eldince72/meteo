import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisioniListComponent } from './previsioni-list.component';

describe('PrevisioniListComponent', () => {
  let component: PrevisioniListComponent;
  let fixture: ComponentFixture<PrevisioniListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisioniListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisioniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
