import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'

@Injectable()
export class DonationService {

  constructor(private http: Http) { }

  createNewDonation(donation) {
    const body = JSON.stringify(donation);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('/api/org', body, { headers: headers })
      .map(data => data.json())
      .catch((error: Response) => Observable.throw(error.json));
  }

  getDonationsById(id) {
    return this.http.get(`api/donation/${id}`)
      .map(res => res.json());
  }
}
