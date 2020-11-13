import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedUtilErrorModule } from '@hutch/shared/util-error';
import { SharedFeatureHeaderModule } from '@hutch/shared/feature-header';
import { AuthUtilJwtModule } from '@hutch/auth/util-jwt';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@hutch/profile/feature-shell').then(
            (module) => module.ProfileFeatureShellModule
          ),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('@hutch/auth/feature-shell').then(
            (module) => module.AuthFeatureShellModule
          ),
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      }
    ]),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    SharedUtilErrorModule,
    SharedFeatureHeaderModule,
    AuthUtilJwtModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
