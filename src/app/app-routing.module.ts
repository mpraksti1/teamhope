import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationComponent } from './organization/organization.component';
import { AdminComponent } from './auth/admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { MyMetricsComponent } from './profile/my-metrics/my-metrics.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component'
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'organizations',
    component: OrganizationsComponent
  },
  {
    path: 'organization/:id',
    component: OrganizationComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'admin', component: AdminComponent },
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'my-metrics', pathMatch: 'full' },
      { path: 'my-metrics', component: MyMetricsComponent },
      { path: 'edit-profile', component: ProfileEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
