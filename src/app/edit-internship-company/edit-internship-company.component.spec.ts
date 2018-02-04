import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInternshipCompanyComponent } from './edit-internship-company.component';

describe('EditInternshipCompanyComponent', () => {
  let component: EditInternshipCompanyComponent;
  let fixture: ComponentFixture<EditInternshipCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInternshipCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInternshipCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
