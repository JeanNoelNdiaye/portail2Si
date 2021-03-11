import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEticketingComponent } from './service-eticketing.component';

describe('ServiceTicketingComponent', () => {
  let component: ServiceEticketingComponent;
  let fixture: ComponentFixture<ServiceEticketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEticketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEticketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
