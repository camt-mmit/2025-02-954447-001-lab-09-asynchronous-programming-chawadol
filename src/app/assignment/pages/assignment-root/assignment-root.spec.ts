import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentRoot } from './assignment-root';

describe('AssignmentRoot', () => {
  let component: AssignmentRoot;
  let fixture: ComponentFixture<AssignmentRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentRoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentRoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
