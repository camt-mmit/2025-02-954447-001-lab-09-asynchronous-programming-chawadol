import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionViewPage } from './dynamic-section-view-page';

describe('DynamicSectionViewPage', () => {
  let component: DynamicSectionViewPage;
  let fixture: ComponentFixture<DynamicSectionViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSectionViewPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSectionViewPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
