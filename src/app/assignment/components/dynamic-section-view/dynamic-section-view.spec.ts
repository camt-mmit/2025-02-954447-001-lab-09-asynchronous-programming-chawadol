import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionView } from './dynamic-section-view';

describe('DynamicSectionView', () => {
  let component: DynamicSectionView;
  let fixture: ComponentFixture<DynamicSectionView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSectionView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSectionView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
