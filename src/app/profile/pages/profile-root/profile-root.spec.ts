import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRoot } from './profile-root';

describe('ProfileRoot', () => {
  let component: ProfileRoot;
  let fixture: ComponentFixture<ProfileRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
