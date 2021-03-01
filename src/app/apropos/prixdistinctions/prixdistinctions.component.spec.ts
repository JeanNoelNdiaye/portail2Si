import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixdistinctionsComponent } from './prixdistinctions.component';

describe('PrixdistinctionsComponent', () => {
  let component: PrixdistinctionsComponent;
  let fixture: ComponentFixture<PrixdistinctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrixdistinctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixdistinctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
