import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';
import { InfoPageComponent } from './components/pages/info-page/info-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { AppComponent } from './app.component';
import { ColorSelectPageComponent } from './components/pages/color-select-page/color-select-page.component';
import { PixelArtComponent } from './components/pages/pixel-art/pixel-art.component';

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
  {
    path: 'color-select',
    component: ColorSelectPageComponent,
  },
  {
    path: 'pixel-art',
    component: PixelArtComponent,
  },
  {
    path: 'home',
    redirectTo: '',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
