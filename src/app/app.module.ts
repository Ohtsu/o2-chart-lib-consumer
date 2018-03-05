import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { O2ChartComponent, ChartConst } from 'o2-chart-lib';

@NgModule({
  declarations: [
    AppComponent,
    O2ChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChartConst],
  bootstrap: [AppComponent]
})
export class AppModule { }
