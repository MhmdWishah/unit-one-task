import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }]),
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
