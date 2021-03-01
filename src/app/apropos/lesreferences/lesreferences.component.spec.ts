import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesreferencesComponent } from './lesreferences.component';

describe('LesreferencesComponent', () => {
  let component: LesreferencesComponent;
  let fixture: ComponentFixture<LesreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
