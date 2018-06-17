import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../../app.config";
import 'rxjs/add/operator/map';
import {Post} from "../../models/Post";


@Injectable()
export class DetailService {

    constructor(@Inject(APP_CONFIG) private config: IAppConfig,
                private http: HttpClient) {
    }

    public updatePost(post: Post): Observable<any> {
        return this.http.post(this.config.apiEndpoint + '/post/update', post,
            {
                headers: this.jwt()
            })
    }


    public getBy_id(_id: string): Observable<any> {
        return this.http.get(this.config.apiEndpoint + '/post/getById?_id=' + _id,
            {
                headers: this.jwt()
            }
            );
    }


    public addPost(post: Post): Observable<any> {
        return this.http.post(this.config.apiEndpoint + '/post/add', post,
            {
                headers: this.jwt()
            });
    }

    // create token header
    private jwt() {
        const token = localStorage.getItem('token');
        if (token) {
            return new HttpHeaders().set('Authorization', token);
        }
    }
}





