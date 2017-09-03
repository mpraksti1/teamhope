import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from "./auth/auth.service";
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../assets/vendor/bulma.css'
  ]
})
export class AppComponent implements OnInit {
  mobileNavShowing = false;


  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAQJvCmhfDgrLr51mvVrEXTSXMSz81Ern8',
      authDomain: 'givehope-8938a.firebaseapp.com',
    });


  }

  onUserSignOut() {
    this.authService.signOutUser();
  }

  toggleMobileMenu() {
    this.mobileNavShowing = !this.mobileNavShowing;
  }
}
