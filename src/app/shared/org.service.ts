import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'

@Injectable()
export class OrgService {

  constructor(private http: Http) { }

  createNewOrg(org) {
    const body = JSON.stringify(org);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/org', body, { headers: headers })
      .map(data => data.json())
      .catch((error: Response) => Observable.throw(error.json));
  }

  // Get all posts from the API
  getOrgs() {
    return this.http.get('/api/org')
      .map(res => res.json());
  }

  getOrgById(id) {
    return this.http.get(`api/org/${id}`)
      .map(res => res.json());
  }
}
