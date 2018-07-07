import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {APP_CONFIG, IAppConfig} from "../app.config";
import {User} from "../models/User";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {JwtHelperService} from '@auth0/angular-jwt';
import 'rxjs/add/observable/of';

// this is a global service which provided in app.module
@Injectable()
export class AuthenticationService {

    private isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    private user: User;

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private http: HttpClient) {
        this.initCurrentUser();
    }

    initCurrentUser(): Observable<any> {
        const token = localStorage.getItem('token');
        if (token) {
            this.user = new User();
            const tokenHelper = new JwtHelperService();
            let tokenParsed = tokenHelper.decodeToken(token);
            this.user.username = tokenParsed._doc.username;
            this.user.imageUrl = tokenParsed.imageUrl;
            this.user._id = tokenParsed._doc._id;
            return Observable.of(this.user);
        } else {
            this.user = null;
            return Observable.of(null);
        }
    }

    getCurrentUser(): Observable<any> {
        return this.user ? Observable.of(this.user) : this.initCurrentUser();
    }

    getUserAvatar(): string {
        const token = localStorage.getItem('token');
        let url = this.user.imageUrl;
        if (token) {
            const tokenHelper = new JwtHelperService();
            let tokenParsed = tokenHelper.decodeToken(token);
            url = tokenParsed.imageUrl;
        }
        return url || '';
    }

    /**
     *
     * @returns {Observable<T>}
     */
    isLoggedIn(): Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }

    /**
     * if we have token the user is loggedIn
     * @returns {boolean}
     */
    private hasToken(): boolean {
        return !localStorage.getItem('token');
    }

    fakeUserLogin(_id: string): Observable<any> {
        const json = JSON.stringify({_id: _id});
        return this.http.post(this.config.apiEndpoint + '/auth/fakeLogin', {_id: _id},
            {
                headers: this.jwt()
            });
    }

    login(user: User, token: string) {
        localStorage.setItem('token', token);
        this.user = user;
        this.logged();
        return this.user;
    }

    logout() {
        // remove user from local storage to log user out
        this.isLoginSubject.next(false);
        localStorage.removeItem('token');
        this.user = null;
    }

    /**
     *  Login the user then tell all the subscribers about the new status
     */
    logged(): void {
        this.isLoginSubject.next(true);
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
        const token = localStorage.getItem('token') || '';
        if (token) {
            return new HttpHeaders().set('Authorization', token);
        }
    }
}
