import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { InputComponent } from './input/input.component';
import { ResultsComponent } from './results/results.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LogoComponent,
    InputComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    BrowserModule,


  ],
  exports:[
    LogoComponent,
    InputComponent,
    ResultsComponent
  ]
})
export class PagesModule { }
