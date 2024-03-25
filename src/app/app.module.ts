import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { CenterBarComponent } from './components/center-bar/center-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';
import { InfoPageComponent } from './components/pages/info-page/info-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PaletteComponent } from './components/left-side-bar/palette/palette.component';
import { word2ColorPipe } from './components/pipes/word2color.pipe';
import { ColorSelectPageComponent } from './components/pages/color-select-page/color-select-page.component';
import { PixelArtComponent } from './components/pages/pixel-art/pixel-art.component';
import { CanvasArtComponent } from './components/canvas-art/canvas-art.component';
import { GridSizeComponent } from './components/grid-size/grid-size.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    CenterBarComponent,
    HeaderComponent,
    FooterComponent,
    AboutMePageComponent,
    InfoPageComponent,
    LoginPageComponent,
    PaletteComponent,
    word2ColorPipe,
    ColorSelectPageComponent,
    PixelArtComponent,
    CanvasArtComponent,
    GridSizeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
