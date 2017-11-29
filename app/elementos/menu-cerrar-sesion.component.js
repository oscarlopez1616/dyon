System.register(['angular2/core', '../domains/desplegable-superior-derecha'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, desplegable_superior_derecha_1;
    var MenuCerrarSesionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (desplegable_superior_derecha_1_1) {
                desplegable_superior_derecha_1 = desplegable_superior_derecha_1_1;
            }],
        execute: function() {
            MenuCerrarSesionComponent = (function (_super) {
                __extends(MenuCerrarSesionComponent, _super);
                function MenuCerrarSesionComponent(injector) {
                    _super.call(this, injector);
                }
                MenuCerrarSesionComponent = __decorate([
                    core_1.Component({
                        selector: "menu-cerrar-sesion",
                        templateUrl: '../../templates/template-0/html/elementos/menu-cerrar-sesion.html',
                        styleUrls: ['../../templates/template-0/css/elementos/menu-cerrar-sesion.css']
                    }), 
                    __metadata('design:paramtypes', [core_1.Injector])
                ], MenuCerrarSesionComponent);
                return MenuCerrarSesionComponent;
            }(desplegable_superior_derecha_1.DesplegableSuperiorDerecha));
            exports_1("MenuCerrarSesionComponent", MenuCerrarSesionComponent);
        }
    }
});
//# sourceMappingURL=menu-cerrar-sesion.component.js.map