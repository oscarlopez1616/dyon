import {Component} from 'angular2/core';
import {Location, RouteConfig, RouterLink, Router} from 'angular2/router';

import {LoggedInRouterOutlet} from './logged-in-router-outlet';
import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {SignupComponent} from './signup.component';


@Component({
  selector: 'auth-app',
  template:   '../../templates/template-0/html/login/app.html',
  directives: [ LoggedInRouterOutlet ]
})
@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: HomeComponent, as: 'Home' },
  { path: '/login', component: LoginComponent, as: 'Login' },
  { path: '/signup', component: SignupComponent, as: 'Signup' }
])

export class AppComponent {
  constructor(public router: Router) {
  }
}

