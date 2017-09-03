import { Component, OnInit } from '@angular/core';
import {UsersService} from '../shared/users.service';
import {User} from '../models/user.model';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  users: any = [];

  constructor(
    private usersService: UsersService,
    private authService: AuthService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onSubmitUser(form: NgForm) {
    console.log(form.value);

    const email = form.value.email;
    const password = form.value.password;
  }
}
