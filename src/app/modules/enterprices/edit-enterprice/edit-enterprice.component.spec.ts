import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnterpriceComponent } from './edit-enterprice.component';

describe('EditEnterpriceComponent', () => {
  let component: EditEnterpriceComponent;
  let fixture: ComponentFixture<EditEnterpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnterpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnterpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
