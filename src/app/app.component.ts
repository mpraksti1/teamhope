import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  onUserSignOut() {
    this.authService.signOutUser();
  }

  closeMobileMenu() {
    this.mobileNavShowing = false;
  }

  toggleMobileMenu() {
    this.mobileNavShowing = !this.mobileNavShowing;
  }
}
