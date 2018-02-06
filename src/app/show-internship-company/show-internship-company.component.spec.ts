import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInternshipCompanyComponent } from './show-internship-company.component';

describe('ShowInternshipCompanyComponent', () => {
  let component: ShowInternshipCompanyComponent;
  let fixture: ComponentFixture<ShowInternshipCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInternshipCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInternshipCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
