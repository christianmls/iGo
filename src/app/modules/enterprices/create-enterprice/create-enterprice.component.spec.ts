import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnterpriceComponent } from './create-enterprice.component';

describe('CreateEnterpriceComponent', () => {
  let component: CreateEnterpriceComponent;
  let fixture: ComponentFixture<CreateEnterpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEnterpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnterpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
