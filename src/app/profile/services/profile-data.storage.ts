import { APP_ID, Injectable, inject } from '@angular/core';
import { Profile } from '../types';

const keyId = 'profile-data';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataStorage {
  private readonly keyName = `${inject(APP_ID)}-${keyId}` as const;

  async get(): Promise<Profile | null> {
    return JSON.parse(localStorage.getItem(this.keyName) ?? 'null');
  }

  async set(data: Profile): Promise<void> {
    return localStorage.setItem(this.keyName, JSON.stringify(data));
  }
}
