import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SpinComponent } from './spin/spin.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SpinComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
