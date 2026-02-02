import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewPage } from './profile-view-page';

describe('ProfileViewPage', () => {
  let component: ProfileViewPage;
  let fixture: ComponentFixture<ProfileViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileViewPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileViewPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
