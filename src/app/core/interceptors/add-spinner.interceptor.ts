// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { finalize, Observable } from 'rxjs';
// import { LodderService } from '../services/lodder.service';

// @Injectable()
// export class AddSpinnerInterceptor implements HttpInterceptor {

//   constructor(private loader: LodderService) { }

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     this.loader.show();
//     return next.handle(request).pipe(
//       finalize(() => {
//         this.loader.hide();
//       })
//     );
//   }
// }
