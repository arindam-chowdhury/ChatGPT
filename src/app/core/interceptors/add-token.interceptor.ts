import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LodderService } from '../services/lodder.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === "POST") {
      if (!request.headers.has("Authorization")) {
        request = request.clone({
          setHeaders: {
            'Authorization': 'Bearer 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'
          }
        });
      }
    }
    return next.handle(request);
  }
}
