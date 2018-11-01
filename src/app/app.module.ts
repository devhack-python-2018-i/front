import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from './login/login.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './login/login.guard';
import {JwtInterceptor} from './jwt.interceptor';
import { AlertComponent } from './alert/alert.component';
import {UnauthenticatedInterceptor} from './unauthenticated.interceptor';
import {AlertService} from './alert/alert.service';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './login/register.component';
import { GroupsComponent } from './groups/groups.component';
import {GroupsService} from './groups/groups.service';
import { GroupsCreateComponent } from './groups-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
    GroupsComponent,
    GroupsCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthenticationService,
    AlertService,
    AuthGuard,
    GroupsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthenticatedInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
