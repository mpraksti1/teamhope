import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { UsersService } from '../shared/users.service';

@Injectable()

export class AuthService {
  token: string;
  uid: string;

  constructor(
    private userService: UsersService,
    private router: Router) {}

  async signupUser(user: any) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
      await this.signInUser(user.email, user.password, false);

      const dbUser = {
        userId: this.uid,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      };

      this.userService.createNewUser(dbUser)
        .subscribe(
          (response) => {
            console.log(response);
            this.router.navigateByUrl('/');
          }
        );
    } catch (error) {
      console.error(error);
    }
  }

  async signInUser(email: string, password: string, signingIn) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.token = await firebase.auth().currentUser.getToken();
      this.uid = await firebase.auth().currentUser.uid;

      if (signingIn) {
        this.router.navigateByUrl('/');
      }

    } catch (error) {
      console.error(error);
    }
  }

  async signOutUser() {
    await firebase.auth().signOut();

    this.token = null;
    this.uid = null;
    this.router.navigateByUrl('/');
  }

  isAuthenticated() {
    return this.token != null;
  }
}
