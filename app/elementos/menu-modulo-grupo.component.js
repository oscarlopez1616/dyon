System.register(['angular2/core', '../posiciones/pagina.component', './menu-modulo-unidad.component', '../domains/menu-grupo'], function(exports_1, context_1) {
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
    var core_1, pagina_component_1, menu_modulo_unidad_component_1, menu_grupo_1;
    var MenuModuloGrupoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pagina_component_1_1) {
                pagina_component_1 = pagina_component_1_1;
            },
            function (menu_modulo_unidad_component_1_1) {
                menu_modulo_unidad_component_1 = menu_modulo_unidad_component_1_1;
            },
            function (menu_grupo_1_1) {
                menu_grupo_1 = menu_grupo_1_1;
            }],
        execute: function() {
            MenuModuloGrupoComponent = (function () {
                function MenuModuloGrupoComponent(injector) {
                    this.pagina = injector.get(pagina_component_1.PaginaComponent).pagina;
                }
                MenuModuloGrupoComponent.prototype.ngAfterContentInit = function () {
                    this.lineasMenu = this.menuGrupoModulo.lineasMenu;
                };
                __decorate([
                    core_1.Input("menuGrupo"), 
                    __metadata('design:type', menu_grupo_1.MenuGrupo)
                ], MenuModuloGrupoComponent.prototype, "menuGrupoModulo", void 0);
                MenuModuloGrupoComponent = __decorate([
                    core_1.Component({
                        selector: "menu-modulo-grupo",
                        moduleId: "loquemesalgadelapolla",
                        templateUrl: '../../templates/template-0/html/elementos/menu-modulo-grupo.html',
                        styleUrls: ['../../templates/template-0/css/elementos/menu-modulo-grupo.css'],
                        directives: [menu_modulo_unidad_component_1.MenuModuloUnidadComponent]
                    }), 
                    __metadata('design:paramtypes', [core_1.Injector])
                ], MenuModuloGrupoComponent);
                return MenuModuloGrupoComponent;
            }());
            exports_1("MenuModuloGrupoComponent", MenuModuloGrupoComponent);
        }
    }
});
//# sourceMappingURL=menu-modulo-grupo.component.js.map