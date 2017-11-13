import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipDetailComponent } from './intership-detail.component';

describe('IntershipDetailComponent', () => {
  let component: IntershipDetailComponent;
  let fixture: ComponentFixture<IntershipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
