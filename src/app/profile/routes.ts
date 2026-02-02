import { Routes } from '@angular/router';
import { ProfileFormPage } from './pages/profile-form-page/profile-form-page';
import { ProfileRoot } from './pages/profile-root/profile-root';
import { ProfileViewPage } from './pages/profile-view-page/profile-view-page';

export default [
  {
    path: '',
    component: ProfileRoot,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },

      { path: 'view', component: ProfileViewPage },
      { path: 'form', component: ProfileFormPage },
    ],
  },
] as Routes;
