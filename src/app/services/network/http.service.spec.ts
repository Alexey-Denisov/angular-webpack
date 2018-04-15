import { HttpService } from './http.service';
import { Http, Response, BaseResponseOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

describe('HttpService Test: ', function() {
    let service: HttpService;

    let httpMock: any;

    beforeEach(() => {

        httpMock = {
            get: (url: string, options?: RequestOptionsArgs): Observable<Response> => {
                url = url;
                options = options;
                return Observable.create((observer: any) => {
                    observer.next(new Response(new BaseResponseOptions()));
                    observer.complete();
                });
            },
            post: (url: string, body: any, options?: RequestOptionsArgs): Observable<Response> => {
                url = url;
                body = body;
                options = options;
                return Observable.create((observer: any) => {
                    observer.next(new Response(new BaseResponseOptions()));
                    observer.complete();
                });
            },
            put: (url: string, body: any, options?: RequestOptionsArgs): Observable<Response> => {
                url = url;
                body = body;
                options = options;
                return Observable.create((observer: any) => {
                    observer.next(new Response(new BaseResponseOptions()));
                    observer.complete();
                });
            },
            delete: (url: string, options?: RequestOptionsArgs): Observable<Response> => {
                url = url;
                options = options;
                return Observable.create((observer: any) => {
                    observer.next(new Response(new BaseResponseOptions()));
                    observer.complete();
                });
            }
        };

        service = new HttpService(httpMock as Http);
    });

    it('Define HttpService', function() {
        expect(service).toBeDefined();
    });
});
