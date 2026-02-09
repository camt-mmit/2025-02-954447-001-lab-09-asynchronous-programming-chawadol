export function createInput(value: number): number {
  return value;
}

export function createSection(): readonly number[] {
  return [];
}

export function addInput(section: readonly number[], value: number): readonly number[] {
  return [...section, createInput(value)];
}

export function removeInput(section: readonly number[], index: number): readonly number[] {
  return section.filter((_, i) => i !== index);
}

export function addSection(model: readonly (readonly number[])[]): readonly (readonly number[])[] {
  return [...model, createSection()];
}

export function removeSection(
  model: readonly (readonly number[])[],
  index: number,
): readonly (readonly number[])[] {
  return model.filter((_, i) => i !== index);
}
