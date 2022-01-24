import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticalQuizzJobModule } from 'dist/practical-quizz-job';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PracticalQuizzJobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
