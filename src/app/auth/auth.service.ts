import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { UsersService } from '../shared/users.service';

@Injectable()

export class AuthService {
  token = '';
  uid = '';

  constructor(private userService: UsersService) {}

  async signupUser(user: any) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
      await this.signInUser(user.email, user.password);

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
          }
        );
    } catch (error) {
      console.error(error);
    }
  }

  async signInUser(email: string, password: string) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.token = await firebase.auth().currentUser.getToken();
      this.uid = await firebase.auth().currentUser.uid;
    } catch (error) {
      console.error(error);
    }
  }

  signOutUser() {
    firebase.auth().signOut();

    this.token = '';
    this.uid = '';
  }
}
