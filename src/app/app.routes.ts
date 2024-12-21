import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { DonateComponent } from '@pages/donate/donate.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  }
];
