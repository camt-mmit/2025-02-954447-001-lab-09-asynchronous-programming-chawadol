import { ChangeDetectionStrategy, Component, effect, inject, resource } from '@angular/core';
import { createProfile } from '../../helpers';
import { ProfileForm } from '../../components/profile-form/profile-form';
import { ProfileDataStorage } from '../../services/profile-data.storage';

@Component({
  selector: 'app-profile-form-page',
  imports: [ProfileForm],
  templateUrl: './profile-form-page.html',
  styleUrl: './profile-form-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFormPage {
  private readonly dataStorage = inject(ProfileDataStorage);
  protected readonly dataResource = resource({
    loader: async () => (await this.dataStorage.get()) ?? createProfile(),
  });

  constructor() {
    effect(async () => {
      if (this.dataResource.hasValue()) {
        await this.dataStorage.set(this.dataResource.value());
      }
    });
  }
}
