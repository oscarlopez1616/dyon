System.register(['angular2/core', './pagina.component', '../elementos/boton-menu-principal.component'], function(exports_1, context_1) {
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
    var core_1, pagina_component_1, boton_menu_principal_component_1;
    var PaginaLateralArribaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pagina_component_1_1) {
                pagina_component_1 = pagina_component_1_1;
            },
            function (boton_menu_principal_component_1_1) {
                boton_menu_principal_component_1 = boton_menu_principal_component_1_1;
            }],
        execute: function() {
            PaginaLateralArribaComponent = (function () {
                function PaginaLateralArribaComponent(injector) {
                    this.pagina = injector.get(pagina_component_1.PaginaComponent).pagina;
                }
                PaginaLateralArribaComponent.prototype.clickMenuModulo = function () {
                    if (this.pagina.esOpenMenuPrincipal) {
                        this.pagina.esOpenMenuPrincipal = false;
                    }
                    else {
                        this.pagina.esOpenMenuPrincipal = true;
                    }
                };
                PaginaLateralArribaComponent = __decorate([
                    core_1.Component({
                        selector: "pagina-lateral-arriba",
                        templateUrl: '../../templates/template-0/html/posiciones/pagina-lateral-arriba.html',
                        styleUrls: ['../../templates/template-0/css/posiciones/pagina-lateral-arriba.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        directives: [boton_menu_principal_component_1.BotonMenuPrincipalComponent]
                    }), 
                    __metadata('design:paramtypes', [core_1.Injector])
                ], PaginaLateralArribaComponent);
                return PaginaLateralArribaComponent;
            }());
            exports_1("PaginaLateralArribaComponent", PaginaLateralArribaComponent);
        }
    }
});
//# sourceMappingURL=pagina-lateral-arriba.component.js.map