System.register(['angular2/core', '../elementos/desplegable-menu-principal.component', '../elementos/desactivador.component'], function(exports_1, context_1) {
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
    var core_1, desplegable_menu_principal_component_1, desactivador_component_1;
    var PaginaFlotanteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (desplegable_menu_principal_component_1_1) {
                desplegable_menu_principal_component_1 = desplegable_menu_principal_component_1_1;
            },
            function (desactivador_component_1_1) {
                desactivador_component_1 = desactivador_component_1_1;
            }],
        execute: function() {
            PaginaFlotanteComponent = (function () {
                function PaginaFlotanteComponent() {
                }
                PaginaFlotanteComponent = __decorate([
                    core_1.Component({
                        selector: "pagina-flotante",
                        templateUrl: '../../templates/template-0/html/posiciones/pagina-flotante.html',
                        styleUrls: ['../../templates/template-0/css/pagina-flotante.css'],
                        directives: [desplegable_menu_principal_component_1.DesplegableMenuPrincipalComponent, desactivador_component_1.DesactivadorComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginaFlotanteComponent);
                return PaginaFlotanteComponent;
            }());
            exports_1("PaginaFlotanteComponent", PaginaFlotanteComponent);
        }
    }
});
//# sourceMappingURL=pagina-flotante.component.js.map