import { ChangeDetectionStrategy, Component, inject, resource } from '@angular/core';
import { ProfileDataStorage } from '../../services/profile-data.storage';
import { ProfileView } from '../../components/profile-view/profile-view';

@Component({
  selector: 'app-profile-view-page',
  imports: [ProfileView],
  templateUrl: './profile-view-page.html',
  styleUrl: './profile-view-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileViewPage {
  private readonly dataStorage = inject(ProfileDataStorage);
  protected readonly dataResource = resource({
    loader: async () => await this.dataStorage.get(),
  });
}
