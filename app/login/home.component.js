System.register(['angular2/core', 'angular2/http', 'angular2-jwt/angular2-jwt', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, angular2_jwt_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(router, http, authHttp) {
                    this.router = router;
                    this.http = http;
                    this.authHttp = authHttp;
                    this.jwt = localStorage.getItem('jwt');
                    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
                }
                HomeComponent.prototype.logout = function () {
                    localStorage.removeItem('jwt');
                    this.router.parent.navigateByUrl('/login');
                };
                HomeComponent.prototype.callAnonymousApi = function () {
                    this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
                };
                HomeComponent.prototype.callSecuredApi = function () {
                    this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
                };
                HomeComponent.prototype._callApi = function (type, url) {
                    var _this = this;
                    this.response = null;
                    if (type === 'Anonymous') {
                        this.http.get(url)
                            .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error.text(); });
                    }
                    if (type === 'Secured') {
                        this.authHttp.get(url)
                            .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error.text(); });
                    }
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: '../../templates/template-0/html/login/home.html',
                        styles: ['../../templates/template-0/css/login/home.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http, angular2_jwt_1.AuthHttp])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map