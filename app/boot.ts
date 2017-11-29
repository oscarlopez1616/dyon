///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}        from 'angular2/platform/browser';
//import { provide } from 'angular2/core';
//import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS } from 'angular2/router';
//import { Http, HTTP_PROVIDERS } from 'angular2/http';
//import { AuthConfig, AuthHttp } from 'angular2-jwt/angular2-jwt';
import {PaginaComponent}     from './posiciones/pagina.component';
//import {AppComponent}     from './login/app.component';
//import {enableProdMode} from "angular2/core";

//enableProdMode();
bootstrap(
  PaginaComponent,[ROUTER_PROVIDERS]
);

//bootstrap(
//  AppComponent,
//  [
//    FORM_PROVIDERS,
//    ROUTER_PROVIDERS,
//    HTTP_PROVIDERS,
//    provide(AuthHttp, {
//      useFactory: (http) => {
//        return new AuthHttp(new AuthConfig({
//          tokenName: 'jwt'
//        }), http);
//      },
//      deps: [Http]
//    })
//  ]
//);
