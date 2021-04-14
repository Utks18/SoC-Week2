import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ChipsComponent } from './chips/chips.component';
import { DateComponent } from './date/date.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ChipsComponent,
    DateComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
