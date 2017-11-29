System.register(['rxjs/Observable', 'rxjs/add/operator/publish', 'rxjs/add/operator/share', '../services/constructor-pagina.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, constructor_pagina_service_1;
    var PaginaObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (constructor_pagina_service_1_1) {
                constructor_pagina_service_1 = constructor_pagina_service_1_1;
            }],
        execute: function() {
            PaginaObservable = (function () {
                function PaginaObservable() {
                    var _this = this;
                    var constructorPaginaService = new constructor_pagina_service_1.ConstructorPaginaService("planner", "home");
                    this._pagina = constructorPaginaService.pagina;
                    this._fuenteObservable = new Observable_1.Observable(function (observer) {
                        _this._miObserver = observer;
                        _this._miObserver.next(_this._pagina);
                    }).share();
                    this._fuenteObservableHot = this._fuenteObservable.publish();
                    this.hazCosas2();
                }
                PaginaObservable.prototype.hazCosas1 = function () {
                    this._pagina.breadCrumbItem = "Cambio Reactivo 1 desde hazascosas1()";
                };
                PaginaObservable.prototype.hazCosas2 = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this._pagina.breadCrumbItem = "Cambio Reactivo 2 desde hazascosas2()";
                        console.log("han pasado 10 segundos");
                    }, 10000);
                };
                PaginaObservable.prototype.setPagina = function (pagina) {
                    this._pagina = pagina;
                    this._miObserver.next(this._pagina);
                };
                PaginaObservable.prototype.getFuenteObservable = function () {
                    return this._fuenteObservable;
                };
                PaginaObservable.prototype.getFuenteObservableHot = function () {
                    return this._fuenteObservableHot;
                };
                PaginaObservable.prototype.getObserver = function () {
                    return this._miObserver;
                };
                return PaginaObservable;
            }());
            exports_1("PaginaObservable", PaginaObservable);
        }
    }
});
//# sourceMappingURL=pagina-observable.js.map