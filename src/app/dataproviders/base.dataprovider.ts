import { Headers, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Base network layer entity. Contains basic functionality for endpoints
 *
 */
export class BaseDataProvider {

    constructor() {
    }

    /**
     * Returns full API URL
     *
     * @param path path to endpoint
     */
    protected getApiUrl(path: string): string {
        return '' + path; // baseURl should be here
    }

    /**
     * Get response body from angular response
     *
     * @param res angular response object
     */
    protected getResponseBody(res: Response): any {
        return res && res.text() === '' ? res : res.json();
    }

    /**
     * Method to hook network error and do some additional processing
     *
     * @param error error response info
     */
    protected handleHttpError(error: Response) {
        console.log(error);
        // let errResponse = this.getResponseBody(error);
        // hook error here
    }

    /**
     * Validate authorized request before sending to server
     *
     * @param hasData flag data required for request
     * @param requestData data object for request
     */
    protected validateRequest(hasData: boolean, requestData?: any): Observable<any> {
        let message: string;
        if (!this.isAuthorized()) {
            message = 'User is not authorized';
        }
        if (hasData && !requestData) {
            message = 'Request object is missing';
        }
        return message ? Observable.throw(message) : null;
    }

    /**
     * Validates is user authorized or not
     *
     */
    protected isAuthorized(): boolean {
        return true; // validate authorization here
    }

    /**
     * Basic method to add authentication options
     *
     */
    protected getAuthOptions(): RequestOptionsArgs {
        let token = ''; // grab token from somewhere
        let options: RequestOptionsArgs = { };
        if (token) {
            options.headers = new Headers();
            options.headers.append('Authorization', 'Bearer' + token);
        }
        return options;
    }
}
