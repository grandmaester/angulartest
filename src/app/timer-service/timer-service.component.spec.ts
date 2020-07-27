import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceComponent } from './timer-service.component';

describe('TimerServiceComponent', () => {
  let component: TimerServiceComponent;
  let fixture: ComponentFixture<TimerServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
