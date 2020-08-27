import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private authService: NbAuthService,) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.authService = this.injector.get(NbAuthService); // get it here within intercept

    this.authService.onTokenChange().subscribe((token: any) => {
      if ( !token.isValid() ) {
        return next.handle(request);
      };

      if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }

      request = request.clone({ headers: request.headers.set('Authorization', token?.token) });
      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

      return next.handle(request);
    });

    return next.handle(request);
  }
}
