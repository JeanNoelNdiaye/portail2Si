import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEsigmapComponent } from './service-esigmap.component';

describe('ServiceMarchePublicComponent', () => {
  let component: ServiceEsigmapComponent;
  let fixture: ComponentFixture<ServiceEsigmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEsigmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEsigmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
