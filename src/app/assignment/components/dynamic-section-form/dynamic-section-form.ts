import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { addInput, addSection, removeInput, removeSection } from '../../helpers';
import { DynamicSection } from '../../types';
import { createMetadataKey, form, FormField } from '@angular/forms/signals';
import { DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-section-form',
  imports: [JsonPipe, FormField, DecimalPipe],
  templateUrl: './dynamic-section-form.html',
  styleUrl: './dynamic-section-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSectionForm {
  sectionModel = model.required<DynamicSection>();
  protected readonly numberKey = createMetadataKey<number>();
  inputForm = form(this.sectionModel);

  protected onAddSection(): void {
    this.inputForm().value.update(addSection);
  }

  protected onRemoveSection(index: number): void {
    this.inputForm().value.update((model) => removeSection(model, index));
  }

  protected onAddInput(sectionIndex: number): void {
    this.inputForm().value.update((model) =>
      model.map((section, i) => (i === sectionIndex ? addInput(section, 0) : section)),
    );
  }

  protected onRemoveInput(sectionIndex: number, inputIndex: number): void {
    this.inputForm().value.update((model) =>
      model.map((section, i) => (i === sectionIndex ? removeInput(section, inputIndex) : section)),
    );
  }

  protected sectionTotal(section: readonly number[]): number {
    return section.reduce((sum, v) => sum + (v ?? 0), 0);
  }
}
