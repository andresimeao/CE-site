import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCentralComponent } from './home-page-central.component';

describe('HomePageCentralComponent', () => {
  let component: HomePageCentralComponent;
  let fixture: ComponentFixture<HomePageCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
