import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInternshipCentralComponent } from './create-internship-central.component';

describe('CreateInternshipCentralComponent', () => {
  let component: CreateInternshipCentralComponent;
  let fixture: ComponentFixture<CreateInternshipCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInternshipCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInternshipCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
