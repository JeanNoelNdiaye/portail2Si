import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTicketingComponent } from './service-ticketing.component';

describe('ServiceTicketingComponent', () => {
  let component: ServiceTicketingComponent;
  let fixture: ComponentFixture<ServiceTicketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTicketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTicketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
