import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from './auth/auth.service';

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

  constructor(
    private authService: AuthService) {}

  ngOnInit() {}

  onUserSignOut() {
    this.authService.signOutUser();
  }

  toggleMobileMenu() {
    this.mobileNavShowing = !this.mobileNavShowing;
  }
}
