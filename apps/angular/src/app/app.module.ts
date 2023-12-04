import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  declarations: [AppComponent, NxWelcomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
