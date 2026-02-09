import { APP_ID, Injectable, inject } from '@angular/core';
import { DynamicSection } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DynamicSectionDataStorage {
  private readonly keyName = `${inject(APP_ID)}-section` as const;

  async get(): Promise<DynamicSection | null> {
    return JSON.parse(localStorage.getItem(this.keyName) ?? 'null');
  }

  async set(data: DynamicSection): Promise<void> {
    return localStorage.setItem(this.keyName, JSON.stringify(data));
  }
}
