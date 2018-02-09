import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private _http: Http) {
    console.log('Github Service Working!');
   }

  getUsers(data) {
    return this._http.get('https://api.github.com/search/users?q=tom+repos:%3E42')
    .map(res => res.json());
  }
}
