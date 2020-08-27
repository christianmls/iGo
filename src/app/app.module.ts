import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NbThemeModule, NbMenuModule } from '@nebular/theme';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { DataTablesModule } from 'angular-datatables';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/app.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthGuardService } from './services/auth-guard.service';

import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    TemplateModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          },
          baseEndpoint: environment.api,
          login: {
            method: 'post',
            endpoint: '/auth/sign-in',
            alwaysFail: false,
            requireValidToken: true,
            redirect: {
              success: '/home',
              failure: null, // stay on the same page
            },
            defaultErrors: ['La combinación de usuario/contraseña no es correcta, inténtelo de nuevo.'],
            defaultMessages: ['Has ingresado con éxito.'],
          },
          logout: {
            method: 'post',
            endpoint: '/auth/sign-out',
            alwaysFail: false,
            requireValidToken: false,
            redirect: {
              success: '/auth/login',
              failure: '/',
            },
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: true,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          }
        },
        logout: {
          redirectDelay: 0,
          strategy: 'email',
        },
      },
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
