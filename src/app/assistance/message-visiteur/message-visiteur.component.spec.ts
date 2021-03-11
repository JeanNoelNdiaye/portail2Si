import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageVisiteurComponent } from './message-visiteur.component';

describe('MessageVisiteurComponent', () => {
  let component: MessageVisiteurComponent;
  let fixture: ComponentFixture<MessageVisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageVisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
