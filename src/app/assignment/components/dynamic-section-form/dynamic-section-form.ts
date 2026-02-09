import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { addInput, addSection, removeInput, removeSection } from '../../helpers';
import { DynamicSection, DynamicSectionModel } from '../../types';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-dynamic-section-form',
  imports: [],
  templateUrl: './dynamic-section-form.html',
  styleUrl: './dynamic-section-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSectionForm {
  // state หลักของฟอร์ม
  readonly data = model<DynamicSectionModel>([]);
  sectionModel = model.required<DynamicSection>();
  inputForm = form(this.sectionModel);
  // ===== actions =====

  protected onAddSection(): void {
    this.data.update((model) => addSection(model));
  }

  protected onRemoveSection(index: number): void {
    this.data.update((model) => removeSection(model, index));
  }

  protected onAddInput(sectionIndex: number): void {
    this.data.update((model) =>
      model.map((section, i) => (i === sectionIndex ? addInput(section, 0) : section)),
    );
  }

  protected onRemoveInput(sectionIndex: number, inputIndex: number): void {
    this.data.update((model) =>
      model.map((section, i) => (i === sectionIndex ? removeInput(section, inputIndex) : section)),
    );
  }

  protected onUpdateValue(sectionIndex: number, inputIndex: number, value: number): void {
    this.data.update((model) =>
      model.map((section, i) =>
        i === sectionIndex ? section.map((v, j) => (j === inputIndex ? value : v)) : section,
      ),
    );
  }

  protected sectionTotal(section: readonly number[]): number {
    return section.reduce((sum, v) => sum + v, 0);
  }
}
