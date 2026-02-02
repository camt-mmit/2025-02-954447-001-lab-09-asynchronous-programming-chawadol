import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormPage } from './profile-form-page';

describe('ProfileFormPage', () => {
  let component: ProfileFormPage;
  let fixture: ComponentFixture<ProfileFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
