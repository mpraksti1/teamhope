import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { UsersService } from '../shared/users.service';

@Injectable()

export class AuthService {
  user: Observable<firebase.User>;
  uid: string;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private userService: UsersService,
    private router: Router) {
      this.user = firebaseAuth.authState;
    }

  async signupUser(user: any) {
    try {
      await this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
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
    await this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);

    this.user.subscribe(
      (response) => {
        console.log(response);
        this.uid = response.uid;
      }
    );

    if (signingIn) {
      this.router.navigateByUrl('/');
    }

    } catch (error) {
      console.error(error);
    }
}

  async signOutUser() {
    await this.firebaseAuth.auth.signOut();
    this.router.navigateByUrl('/');
  }
}
