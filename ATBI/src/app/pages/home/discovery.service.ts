import 'rxjs/add/operator/map';
import {APP_CONFIG, IAppConfig} from "../../app.config";
import {Inject, Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DiscoveryService {

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private router: ActivatedRoute, private http: HttpClient) {
    }


    public loadAllPosts(): Observable<any> {
        return this.http.get(this.config.apiEndpoint + '/post/getAll');
    }


    // create token header
    private jwt() {
        // create authorization header with jwt token
        const token = localStorage.getItem('token');
        if (token) {
            // let headers = new Headers({ 'Authorization': token });
            // return new RequestOptions({ headers: headers });
            return new HttpHeaders().set('Authorization', token);
        }
    }
}