import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMarchePublicComponent } from './service-marche-public.component';

describe('ServiceMarchePublicComponent', () => {
  let component: ServiceMarchePublicComponent;
  let fixture: ComponentFixture<ServiceMarchePublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMarchePublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMarchePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
