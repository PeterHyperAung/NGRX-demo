import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { NGRXFeature } from './features/ngrx/store/ngrx.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { NgrxEffects } from './features/ngrx/store/ngrx.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({
      [NGRXFeature.name]: NGRXFeature.reducer,
    }), 
    provideHttpClient(), 
    provideEffects([NgrxEffects]),
  ],
};
