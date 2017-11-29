System.register(['angular2/core', '../posiciones/pagina.component', './menu-modulo-grupo.component'], function(exports_1, context_1) {
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
    var core_1, pagina_component_1, menu_modulo_grupo_component_1;
    var MenuModuloComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pagina_component_1_1) {
                pagina_component_1 = pagina_component_1_1;
            },
            function (menu_modulo_grupo_component_1_1) {
                menu_modulo_grupo_component_1 = menu_modulo_grupo_component_1_1;
            }],
        execute: function() {
            MenuModuloComponent = (function () {
                function MenuModuloComponent(injector) {
                    this.pagina = injector.get(pagina_component_1.PaginaComponent).pagina;
                    var constructorPaginaService = injector.get(pagina_component_1.PaginaComponent).constructorPaginaService;
                    this.menuModulo = constructorPaginaService.menuModulo;
                }
                MenuModuloComponent = __decorate([
                    core_1.Component({
                        selector: "menu-modulo",
                        templateUrl: '../../templates/template-0/html/elementos/menu-modulo.html',
                        styleUrls: ['../../templates/template-0/css/elementos/menu-modulo.css'],
                        directives: [menu_modulo_grupo_component_1.MenuModuloGrupoComponent]
                    }), 
                    __metadata('design:paramtypes', [core_1.Injector])
                ], MenuModuloComponent);
                return MenuModuloComponent;
            }());
            exports_1("MenuModuloComponent", MenuModuloComponent);
        }
    }
});
//# sourceMappingURL=menu-modulo.component.js.map