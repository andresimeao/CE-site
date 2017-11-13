import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIntershipsCentralComponent } from './show-interships-central.component';

describe('ShowIntershipsCentralComponent', () => {
  let component: ShowIntershipsCentralComponent;
  let fixture: ComponentFixture<ShowIntershipsCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIntershipsCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIntershipsCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
