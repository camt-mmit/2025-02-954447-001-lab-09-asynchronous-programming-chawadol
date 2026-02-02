import { Profile } from './types';
export function createFriend(): string {
  return '';
}
export function createProfile(): Profile {
  return {
    studentId: '',
    firstname: '',
    lastname: '',
    age: 0,
    autobiography: '',
    friends: [createFriend()],
  };
}
