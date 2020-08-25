import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnterpriceComponent } from './view-enterprice.component';

describe('ViewEnterpriceComponent', () => {
  let component: ViewEnterpriceComponent;
  let fixture: ComponentFixture<ViewEnterpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEnterpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEnterpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
