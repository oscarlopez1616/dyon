System.register(['rxjs/Observable', 'rxjs/add/operator/share'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var PaginaObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            PaginaObservable = (function () {
                function PaginaObservable(pagina) {
                    var _this = this;
                    this._pagina = pagina;
                    this.fuenteObservable = new Observable_1.Observable(function (observer) {
                        _this._miObserver = observer;
                        _this._miObserver.next(_this._pagina);
                    });
                }
                PaginaObservable.prototype.setPagina = function (pagina) {
                    this._pagina = pagina;
                    this._miObserver.next(this._pagina);
                };
                PaginaObservable.prototype.getFuenteObservable = function () {
                    return this.fuenteObservable;
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
//# sourceMappingURL=PaginaObservable.js.map