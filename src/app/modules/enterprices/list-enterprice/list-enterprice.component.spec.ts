import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnterpriceComponent } from './list-enterprice.component';

describe('ListEnterpriceComponent', () => {
  let component: ListEnterpriceComponent;
  let fixture: ComponentFixture<ListEnterpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnterpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnterpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
