import { Injectable } from '@angular/core';
import { BaseDataProvider } from '../base.dataprovider';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { HttpService } from '../../services';

/**
 * Auth network layer entity. Responsible for authentication-related interactions with network resources
 *
 */
@Injectable()
export class AuthDataProvider extends BaseDataProvider {

    constructor(private httpService: HttpService) {
        super();
    }

    /**
     * Example how requests are expected to be performed
     *
     * @param request - client request model
     */
    login(request: any): Observable<any> {
        // first validate that all required data exists
        if (!request) {
            return Observable.throw('Request object is missing');
        }
        // convert client model to server model here
        return this.httpService.post(this.getApiUrl(''), request).map((response: Response) => {
            return response; // convert to client model here
        },
        (error: Response) => {
            this.handleHttpError(error);
            Observable.throw(this.getResponseBody(error));
        });
    }
}
