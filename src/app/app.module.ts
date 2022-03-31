import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page/title-page.component';
import { PlaybuttonComponent } from './shared/playbutton/playbutton.component';


@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    PlaybuttonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
