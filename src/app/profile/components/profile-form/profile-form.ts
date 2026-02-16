import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { Profile } from '../../types';
import { applyEach, createMetadataKey, form, FormField, metadata } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { createFriend } from '../../helpers';

@Component({
  selector: 'app-profile-form',
  imports: [FormField, JsonPipe],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileForm {
  readonly data = model.required<Profile>();
  protected readonly friendCountKey = createMetadataKey<number>();
  protected readonly friendUcNameKey = createMetadataKey<string>();

  protected readonly form = form(this.data, (path) => {
    metadata(path.friends, this.friendCountKey, (ctx) => ctx.value().length); //or destruct ({value})=>value().length

    applyEach(path.friends, (path) => {
      metadata(path, this.friendUcNameKey, ({ value }) => value().toLocaleUpperCase());
    });
  });

  // protected readonly friendCount = computed(() => this.form.friends().value().length);

  protected addFriend(): void {
    this.form.friends().value.update((items) => [...items, createFriend()]);
  }

  protected removeFriend(index: number): void {
    this.form.friends().value.update((items) => items.filter((_item, i) => i !== index));
  }

  protected moveFriend(index: number, offset: number): void {
    this.form
      .friends()
      .value.update((items) =>
        items.map((item, i) =>
          i === index ? items[index + offset] : i === index + offset ? items[index] : item,
        ),
      );
  }
}
