import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GodsComponent } from './gods/gods.component';
import { GodsDetailComponent } from './gods-detail/gods-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GodsComponent,
    GodsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
