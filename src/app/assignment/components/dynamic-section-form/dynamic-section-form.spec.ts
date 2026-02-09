import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionForm } from './dynamic-section-form';

describe('DynamicSectionForm', () => {
  let component: DynamicSectionForm;
  let fixture: ComponentFixture<DynamicSectionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSectionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSectionForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
