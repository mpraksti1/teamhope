import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule} from '@angular/http';
import { UsersService } from './shared/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SqueezeBoxModule } from 'squeezebox';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationComponent } from './organization/organization.component';
import { AdminComponent } from './auth/admin/admin.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {OrgService} from './shared/org.service';
import {InitiativeService} from './shared/initiative.service';
import {DonationService} from './shared/donation.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { MyMetricsComponent } from './profile/my-metrics/my-metrics.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrgsByInitiativePipe } from './pipes/orgs-by-initiative.pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    OrganizationsComponent,
    OrganizationComponent,
    AdminComponent,
    ProfileComponent,
    ProfileEditComponent,
    MyMetricsComponent,
    AboutUsComponent,
    OrgsByInitiativePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    SqueezeBoxModule,
    NgxChartsModule,

  ],
  providers: [
    UsersService,
    AuthService,
    OrgService,
    InitiativeService,
    DonationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
