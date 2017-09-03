import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UsersService} from '../../shared/users.service';
import {AuthService} from '../auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  users: User[];

  constructor(
    private usersService: UsersService,
    private authService: AuthService ) {}

  ngOnInit() {
    // Retrieve posts from the API
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  async onSubmitUser(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;

    const user = {
      email,
      password,
      firstName,
      lastName,
    };

    this.authService.signupUser(user);
  }
}
