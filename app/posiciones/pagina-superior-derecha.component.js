System.register(['angular2/core', '../elementos/manager-front-end-teamwork.component', '../elementos/menu-ayuda.component', '../elementos/menu-configuracion-usuario.component', '../elementos/menu-cerrar-sesion.component', '../posiciones/pagina.component'], function(exports_1, context_1) {
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
    var core_1, manager_front_end_teamwork_component_1, menu_ayuda_component_1, menu_configuracion_usuario_component_1, menu_cerrar_sesion_component_1, pagina_component_1;
    var PaginaSuperiorDerechaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (manager_front_end_teamwork_component_1_1) {
                manager_front_end_teamwork_component_1 = manager_front_end_teamwork_component_1_1;
            },
            function (menu_ayuda_component_1_1) {
                menu_ayuda_component_1 = menu_ayuda_component_1_1;
            },
            function (menu_configuracion_usuario_component_1_1) {
                menu_configuracion_usuario_component_1 = menu_configuracion_usuario_component_1_1;
            },
            function (menu_cerrar_sesion_component_1_1) {
                menu_cerrar_sesion_component_1 = menu_cerrar_sesion_component_1_1;
            },
            function (pagina_component_1_1) {
                pagina_component_1 = pagina_component_1_1;
            }],
        execute: function() {
            PaginaSuperiorDerechaComponent = (function () {
                function PaginaSuperiorDerechaComponent(injector) {
                    this.pagina = injector.get(pagina_component_1.PaginaComponent).pagina;
                }
                PaginaSuperiorDerechaComponent.prototype.desactivaOtrosDesplegables = function (component) {
                    if (!(component instanceof manager_front_end_teamwork_component_1.ManagerFrontEndTeamworkComponent))
                        this.managerFrontEndTeamworkComponent.desactivarDesplegable();
                    if (!(component instanceof menu_ayuda_component_1.MenuAyudaComponent))
                        this.menuAyudaComponent.desactivarDesplegable();
                    if (!(component instanceof menu_configuracion_usuario_component_1.MenuConfiguracionUsuarioComponent))
                        this.menuConfiguracionUsuarioComponent.desactivarDesplegable();
                    if (!(component instanceof menu_cerrar_sesion_component_1.MenuCerrarSesionComponent))
                        this.menuCerrarSesionComponent.desactivarDesplegable();
                };
                PaginaSuperiorDerechaComponent.prototype.cerrarTodosDesplegablesSuperiorDerecha = function () {
                    this.managerFrontEndTeamworkComponent.desactivarDesplegable();
                    this.menuAyudaComponent.desactivarDesplegable();
                    this.menuConfiguracionUsuarioComponent.desactivarDesplegable();
                    this.menuCerrarSesionComponent.desactivarDesplegable();
                };
                __decorate([
                    core_1.ViewChild(manager_front_end_teamwork_component_1.ManagerFrontEndTeamworkComponent), 
                    __metadata('design:type', manager_front_end_teamwork_component_1.ManagerFrontEndTeamworkComponent)
                ], PaginaSuperiorDerechaComponent.prototype, "managerFrontEndTeamworkComponent", void 0);
                __decorate([
                    core_1.ViewChild(menu_ayuda_component_1.MenuAyudaComponent), 
                    __metadata('design:type', menu_ayuda_component_1.MenuAyudaComponent)
                ], PaginaSuperiorDerechaComponent.prototype, "menuAyudaComponent", void 0);
                __decorate([
                    core_1.ViewChild(menu_configuracion_usuario_component_1.MenuConfiguracionUsuarioComponent), 
                    __metadata('design:type', menu_configuracion_usuario_component_1.MenuConfiguracionUsuarioComponent)
                ], PaginaSuperiorDerechaComponent.prototype, "menuConfiguracionUsuarioComponent", void 0);
                __decorate([
                    core_1.ViewChild(menu_cerrar_sesion_component_1.MenuCerrarSesionComponent), 
                    __metadata('design:type', menu_cerrar_sesion_component_1.MenuCerrarSesionComponent)
                ], PaginaSuperiorDerechaComponent.prototype, "menuCerrarSesionComponent", void 0);
                PaginaSuperiorDerechaComponent = __decorate([
                    core_1.Component({
                        selector: "pagina-superior-derecha",
                        templateUrl: '../../templates/template-0/html/posiciones/pagina-superior-derecha.html',
                        styleUrls: ['../../templates/template-0/css/posiciones/pagina-superior-derecha.css'],
                        directives: [manager_front_end_teamwork_component_1.ManagerFrontEndTeamworkComponent, menu_ayuda_component_1.MenuAyudaComponent, menu_configuracion_usuario_component_1.MenuConfiguracionUsuarioComponent, menu_cerrar_sesion_component_1.MenuCerrarSesionComponent]
                    }), 
                    __metadata('design:paramtypes', [core_1.Injector])
                ], PaginaSuperiorDerechaComponent);
                return PaginaSuperiorDerechaComponent;
            }());
            exports_1("PaginaSuperiorDerechaComponent", PaginaSuperiorDerechaComponent);
        }
    }
});
//# sourceMappingURL=pagina-superior-derecha.component.js.map