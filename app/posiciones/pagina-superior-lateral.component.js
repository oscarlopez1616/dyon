System.register(['angular2/core', '../elementos/menu-principal.component'], function(exports_1, context_1) {
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
    var core_1, menu_principal_component_1;
    var PaginaSuperiorLateralComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_principal_component_1_1) {
                menu_principal_component_1 = menu_principal_component_1_1;
            }],
        execute: function() {
            PaginaSuperiorLateralComponent = (function () {
                function PaginaSuperiorLateralComponent() {
                }
                PaginaSuperiorLateralComponent = __decorate([
                    core_1.Component({
                        selector: "pagina-superior-lateral",
                        templateUrl: '../../templates/template-0/html/posiciones/pagina-superior-lateral.html',
                        styleUrls: ['../../templates/template-0/css/posiciones/pagina-superior-lateral.css'],
                        directives: [menu_principal_component_1.MenuPrincipalComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginaSuperiorLateralComponent);
                return PaginaSuperiorLateralComponent;
            }());
            exports_1("PaginaSuperiorLateralComponent", PaginaSuperiorLateralComponent);
        }
    }
});
//# sourceMappingURL=pagina-superior-lateral.component.js.map