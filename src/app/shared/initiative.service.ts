import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'

@Injectable()
export class InitiativeService {

  constructor(private http: Http) { }

  createNewInitiative(initiative) {
    const body = JSON.stringify(initiative);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/initiative', body, { headers: headers })
      .map(data => data.json())
      .catch((error: Response) => Observable.throw(error.json));
  }

  getInitiativesById(id) {
    return this.http.get(`api/initiative/${id}`)
      .map(res => res.json());
  }
}
