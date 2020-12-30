import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/app02',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
