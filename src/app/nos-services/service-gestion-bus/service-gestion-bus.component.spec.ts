import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGestionBusComponent } from './service-gestion-bus.component';

describe('ServiceGestionBusComponent', () => {
  let component: ServiceGestionBusComponent;
  let fixture: ComponentFixture<ServiceGestionBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceGestionBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGestionBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
