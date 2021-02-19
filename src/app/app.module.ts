import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   // Main routes for application
    CoreModule,         // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule,       // Shared (multi-instance) objects
    HomeModule,         // Eager loaded
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
