import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEtransportComponent } from './service-etransport.component';

describe('ServiceGestionBusComponent', () => {
  let component: ServiceEtransportComponent;
  let fixture: ComponentFixture<ServiceEtransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEtransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
