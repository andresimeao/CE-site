import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCompanyComponent } from './home-page-company.component';

describe('HomePageCompanyComponent', () => {
  let component: HomePageCompanyComponent;
  let fixture: ComponentFixture<HomePageCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
