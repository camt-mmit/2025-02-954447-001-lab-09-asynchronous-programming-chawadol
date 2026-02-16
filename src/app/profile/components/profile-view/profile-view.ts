import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Profile } from '../../types';

@Component({
  selector: 'app-profile-view',
  imports: [],
  templateUrl: './profile-view.html',
  styleUrl: './profile-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileView {
  readonly data = input.required<Profile>();

  protected readonly joinFriend = computed(() => this.data().friends.join(', '));
}
