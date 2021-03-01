import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NospartenairesComponent } from './nospartenaires.component';

describe('NospartenairesComponent', () => {
  let component: NospartenairesComponent;
  let fixture: ComponentFixture<NospartenairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NospartenairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NospartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
