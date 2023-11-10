import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {PreloadAllModules, provideRouter, withPreloading} from "@angular/router";
import {APP_ROUTES} from "./app/app.routes";
import {provideAnimations} from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
    providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideAnimations()
]
})
  .catch(err => console.error(err));
