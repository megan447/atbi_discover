import {Injectable, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../../app.config";
import {Comment} from "../../models/Comment";
import 'rxjs/add/operator/map';


@Injectable()
export class CommentService {

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private router: ActivatedRoute, private http: HttpClient) {
    }


    public loadComments(id: string): Observable<any> {
        return this.http.get(this.config.apiEndpoint + '/comment/getComments?id=' + id);
    }

    public getCommentsWithRate(id: string): Observable<any> {
        return this.http.get(this.config.apiEndpoint + '/comment/getCommentsWithRate?_id=' + id);
    }

    public addComment(comment: Comment): Observable<any> {
        return this.http.post(this.config.apiEndpoint + '/comment/addComment', comment,
            {
                headers: this.jwt()
            });
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





