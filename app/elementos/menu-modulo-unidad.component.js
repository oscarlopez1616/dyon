System.register(['angular2/core', '../posiciones/pagina.component', '../domains/linea-menu'], function(exports_1, context_1) {
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
    var core_1, pagina_component_1, linea_menu_1;
    var MenuModuloUnidadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pagina_component_1_1) {
                pagina_component_1 = pagina_component_1_1;
            },
            function (linea_menu_1_1) {
                linea_menu_1 = linea_menu_1_1;
            }],
        execute: function() {
            MenuModuloUnidadComponent = (function () {
                function MenuModuloUnidadComponent(injector, myRenderer) {
                    this.pagina = injector.get(pagina_component_1.PaginaComponent).pagina;
                    this.isMenuOpen = false;
                    this.menuHtml = '';
                    this.myRenderer = myRenderer;
                }
                MenuModuloUnidadComponent.prototype.ngAfterContentInit = function () {
                    this.menuHtml = this.lineaMenu.drawLineaMenu(false, this.myRenderer.selectRootElement("mi-tag-menu-unidad").attributes[0].nodeName);
                };
                MenuModuloUnidadComponent.prototype.abrirCerrarMenu = function () {
                    if (this.isMenuOpen) {
                        this.isMenuOpen = false;
                    }
                    else {
                        this.isMenuOpen = true;
                    }
                };
                MenuModuloUnidadComponent.prototype.cerrarMenu = function () {
                    this.isMenuOpen = false;
                };
                __decorate([
                    core_1.Input("lineaMenu"), 
                    __metadata('design:type', linea_menu_1.LineaMenu)
                ], MenuModuloUnidadComponent.prototype, "lineaMenu", void 0);
                MenuModuloUnidadComponent = __decorate([
                    core_1.Component({
                        selector: "menu-modulo-unidad",
                        properties: [""],
                        templateUrl: '../../templates/template-0/html/elementos/menu-modulo-unidad.html',
                        styleUrls: ['../../templates/template-0/css/elementos/menu-modulo-unidad.css']
                    }), 
                    __metadata('design:paramtypes', [core_1.Injector, core_1.Renderer])
                ], MenuModuloUnidadComponent);
                return MenuModuloUnidadComponent;
            }());
            exports_1("MenuModuloUnidadComponent", MenuModuloUnidadComponent);
        }
    }
});
//# sourceMappingURL=menu-modulo-unidad.component.js.map