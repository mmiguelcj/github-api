import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  
  private users: any;
  private user: any;
  private repos: any;

  constructor(private _http: Http) {
    console.log('Github Service Working!');
   }
  getUser(username){
    this.user = this._http.get("https://api.github.com/users/" + username)
    .map(res => res.json());
    return this.user;
  }
  getUserRepos(username){
  	this.repos = this._http.get("https://api.github.com/users/"+ username +"/repos")
    .map(res => res.json());
    return this.repos;
  }
  getUsers(name, numRepos) {
    this.users = this._http.get('https://api.github.com/search/users?q='+name+'+repos:%3E'+numRepos)
    .map(res => res.json());
    return this.users;
  }
}
