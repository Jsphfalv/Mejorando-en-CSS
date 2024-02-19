import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';
import { InfoPageComponent } from './components/pages/info-page/info-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMePageComponent,
  },
  {
    path: 'info',
    component: InfoPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
