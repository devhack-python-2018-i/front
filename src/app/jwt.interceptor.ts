import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const token = localStorage.getItem('currentUser');
        console.log(token);
        const decoded_token = jwt_decode(token);
        console.log(decoded_token);
        if (decoded_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `JWT ${token}`
                }
            });
        }
        return next.handle(request);
    }
}
