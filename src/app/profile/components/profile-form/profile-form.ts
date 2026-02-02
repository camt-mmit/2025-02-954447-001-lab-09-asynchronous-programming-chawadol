import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { applyEach, createMetadataKey, form, FormField, metadata } from '@angular/forms/signals';
import { Profile } from '../../types';
import { createFriend } from '../../helpers';

@Component({
  selector: 'app-profile-form',
  imports: [FormField],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileForm {
  readonly data = model.required<Profile>();
  // data = signal ตัวแทนข้อมูลที่เราจะใช้
  protected readonly friendsCountKey = createMetadataKey<number>();
  protected readonly friendUCNameKey = createMetadataKey<string>();
  // metadata key ref to fieldtree เอาไว้อ้างอิงค่า
  protected readonly form = form(this.data, (path) => {
    metadata(path.friends, this.friendsCountKey, ({ value }) => value().length);

    applyEach(path.friends, (path) => {
      metadata(path, this.friendUCNameKey, ({ value }) => value().toLocaleUpperCase());
    });
  });
  // function form สร้าง this.signal ที่ตรงกับตัวโปรไฟล์
  // protected readonly friendsCount = computed(() => this.form.friends().value().length);
  //applyeach apply schema ให้กับ element ทุกตัว path ตรง applyeach = path ของ friend แต่ละคน

  protected addFriend(): void {
    this.form.friends().value.update((items) => [...items, createFriend()]);
  }

  protected removeFriend(index: number): void {
    this.form.friends().value.update((items) => items.filter((_item, i) => i !== index));
  }
  // index = which one to delete / ignore item focus on i

  protected moveFriend(index: number, offset: number): void {
    this.form
      .friends()
      .value.update((items) =>
        items.map((item, i) =>
          i === index + offset ? items[index] : i === index ? items[index + offset] : item,
        ),
      );
  }
  // if i === index plus the offset ( move up ) and return the items[index]
}
