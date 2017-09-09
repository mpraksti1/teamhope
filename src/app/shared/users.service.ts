import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'

// import { User } from "../models/user.model";



@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  createNewUser(user) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/users', body, { headers: headers })
      .map(data => data.json())
      .catch((error: Response) => Observable.throw(error.json));
  }

  // Get all posts from the API
  getUsers() {
    return this.http.get('/api/users')
      .map(res => res.json());
  }

  getUserById(id) {
    return this.http.get(`/api/users/${id}`)
      .map(res => res.json());
  }
}
