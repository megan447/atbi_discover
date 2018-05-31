import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {APP_CONFIG, IAppConfig} from "../app.config";
import {User} from "../models/User";

// this is a global service which provided in app.module
@Injectable()
export class AuthenticationService {

    private user: User;

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private http: HttpClient) {
        this.initCurrentUser();
    }

    initCurrentUser() {
        this.user = new User();
        this.user.username = 'Mike Test';
        this.user.imageUrl = 'http://endlesstheme.com/Endless1.5.1/img/user2.jpg';
    }

    getCurrentUser(): User {
        return this.user;
    }

    private getUser(): Observable<any> {
        return this.http.post(this.config.apiEndpoint + '/auth/getUser',
            {},
            {headers: this.jwt()});
    }

    /**
     * if we have token the user is loggedIn
     * @returns {boolean}
     */
    private hasToken(): boolean {
        return !!localStorage.getItem('token');
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Observable.throw(error || 'Something bad happened; please try again later.');
    }

    private jwt() {
        // create authorization header with jwt token
        const token = localStorage.getItem('token');
        if (token) {
            return new HttpHeaders().set('Authorization', token);
        }
    }
}
