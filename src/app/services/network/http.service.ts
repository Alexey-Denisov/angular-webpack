import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * Wrapper around Angular's http service
 *
 */
@Injectable()
export class HttpService {

    private readonly httpHeaderContentType = 'Content-Type';
    private readonly httpHeaderContentTypeVal = 'application/json';
    private readonly httpHeaderAccept = 'Accept';
    private readonly httpHeaderAcceptVal = 'application/json';

    protected headers: Headers;

    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append(this.httpHeaderContentType, this.httpHeaderContentTypeVal);
        this.headers.append(this.httpHeaderAccept, this.httpHeaderAcceptVal);
    }

    /**
     * Method for GET request
     *
     * @param url URL to endpoint
     * @param args additional angular request options(for example authentication headers)
     */
    get(url: string, args?: RequestOptionsArgs): Observable<Response> {
        if (args == null) {
            args = {};
        }
        args.headers = this.prepareHeaders(args.headers);

        return this._http.get(url, args)
            .catch(this.handleError);
    }


    /**
     * Method for POST request
     *
     * @param url URL to endpoint
     * @param data body of request
     * @param args additional angular request options(for example authentication headers)
     */
    post(url: string, data: any, args?: RequestOptionsArgs): Observable<Response> {
        if (args == null) {
            args = {};
        }
        args.headers = this.prepareHeaders(args.headers);
        let requestData = data instanceof ArrayBuffer ? data : JSON.stringify(data);

        return this._http.post(url, requestData, args)
            .catch(this.handleError);
    }

    /**
     * Method for PUT request
     *
     * @param url URL to endpoint
     * @param data body of request
     * @param args additional angular request options(for example authentication headers)
     */
    put(url: string, data: any, args?: RequestOptionsArgs): Observable<Response> {
        if (args == null) {
            args = {};
        }
        args.headers = this.prepareHeaders(args.headers);
        let requestData = data instanceof ArrayBuffer ? data : JSON.stringify(data);

        return this._http.put(url, requestData, args)
            .catch(this.handleError);
    }

    /**
     * Method for GET request
     *
     * @param url URL to endpoint
     * @param args additional angular request options(for example authentication headers)
     */
    delete(url: string, args?: RequestOptionsArgs): Observable<Response> {
        if (args == null) {
            args = {};
        }
        args.headers = this.prepareHeaders(args.headers);

        return this._http.delete(url, args)
            .catch(this.handleError);
    }

    /**
     * Setup basic headers for request
     *
     * @param headers additional headers
     */
    private prepareHeaders(headers: Headers): Headers {
        let hasContentType = headers && headers.has(this.httpHeaderContentType);
        let hasAccept = headers && headers.has(this.httpHeaderAccept);
        if (!hasContentType || !hasAccept) {
            let newHeaders = new Headers(headers);
            if (!newHeaders.has(this.httpHeaderContentType)) {
                newHeaders.append(this.httpHeaderContentType, this.httpHeaderContentTypeVal);
            }
            if (!newHeaders.has(this.httpHeaderAccept)) {
                newHeaders.append(this.httpHeaderAccept, this.httpHeaderAcceptVal);
            }
            return newHeaders;
        }
        return headers;
    }

    /**
     * Catch error and pass it upstream if required
     *
     * @param error error object
     */
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error);
    }
}
