import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionFormPage } from './dynamic-section-form-page';

describe('DynamicSectionFormPage', () => {
  let component: DynamicSectionFormPage;
  let fixture: ComponentFixture<DynamicSectionFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSectionFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSectionFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
