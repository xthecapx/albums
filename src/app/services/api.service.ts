import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class Api {
    url: string = environment.api;

    constructor(public http: HttpClient) {}

    get(endpoint: string, params?: any): Observable<any> {
        return this.http.get(this.url + endpoint);
    }
}
