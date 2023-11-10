import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {provideRouter, withViewTransitions} from "@angular/router";
import {APP_ROUTES} from "./app/app.routes";
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient} from "@angular/common/http";


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(APP_ROUTES, withViewTransitions({onViewTransitionCreated: (event) => console.log(event)})),
    provideAnimations(),
    provideHttpClient()
  ]
})
  .catch(err => console.error(err));
