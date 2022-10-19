/*
 Title: app.module.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 10/18/2022
 Description: Hello World Module Declarations
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
