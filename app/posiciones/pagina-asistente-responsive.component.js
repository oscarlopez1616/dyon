System.register(['angular2/core', '../posiciones/pagina.component'], function(exports_1, context_1) {
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
    var core_1, pagina_component_1;
    var PaginaAsistenteResponsiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pagina_component_1_1) {
                pagina_component_1 = pagina_component_1_1;
            }],
        execute: function() {
            PaginaAsistenteResponsiveComponent = (function () {
                function PaginaAsistenteResponsiveComponent(injector) {
                    this.pagina = injector.get(pagina_component_1.PaginaComponent).pagina;
                }
                PaginaAsistenteResponsiveComponent.prototype.clickDesplegableMenus = function () {
                    if (this.pagina.lateralColapsado) {
                        this.pagina.lateralColapsado = false;
                    }
                    else {
                        this.pagina.lateralColapsado = true;
                    }
                };
                PaginaAsistenteResponsiveComponent.prototype.clickPaginaSuperiorDerecha = function () {
                    if (this.pagina.esDesplegadoPaginaSuperiorDerecha) {
                        this.pagina.esDesplegadoPaginaSuperiorDerecha = false;
                    }
                    else {
                        this.pagina.esDesplegadoPaginaSuperiorDerecha = true;
                    }
                };
                PaginaAsistenteResponsiveComponent = __decorate([
                    core_1.Component({
                        selector: "pagina-asistente-responsive",
                        templateUrl: '../../templates/template-0/html/posiciones/pagina-asistente-responsive.html',
                        styleUrls: ['../../templates/template-0/css/posiciones/pagina-asistente-responsive.css']
                    }), 
                    __metadata('design:paramtypes', [core_1.Injector])
                ], PaginaAsistenteResponsiveComponent);
                return PaginaAsistenteResponsiveComponent;
            }());
            exports_1("PaginaAsistenteResponsiveComponent", PaginaAsistenteResponsiveComponent);
        }
    }
});
//# sourceMappingURL=pagina-asistente-responsive.component.js.map