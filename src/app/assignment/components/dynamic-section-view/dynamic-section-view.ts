import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DynamicSection } from '../../types';

@Component({
  selector: 'app-dynamic-section-view',
  imports: [],
  templateUrl: './dynamic-section-view.html',
  styleUrl: './dynamic-section-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSectionView {
  sections = input.required<DynamicSection>();

  total = computed(() => this.sections().map((section) => section.reduce((sum, n) => sum + n, 0)));
}
