import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { CenterBarComponent } from './components/center-bar/center-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    CenterBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
