import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterWizardComponent } from './starter-wizard.component';

describe('StarterWizardComponent', () => {
  let component: StarterWizardComponent;
  let fixture: ComponentFixture<StarterWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
