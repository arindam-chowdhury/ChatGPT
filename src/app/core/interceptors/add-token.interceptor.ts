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
            'Authorization': 'Bearer [YOUR_API_KEY from openAI.com]'
          }
        });
      }
    }
    return next.handle(request);
  }
}
