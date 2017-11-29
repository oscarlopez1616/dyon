System.register(['angular2/core', 'angular2/router', './pagina-superior.component', './pagina-lateral.component', '../services/constructor-pagina.service', '../domains/core', '../router-outlets/planner/outlet-planner-home.component'], function(exports_1, context_1) {
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
    var core_1, router_1, pagina_superior_component_1, pagina_lateral_component_1, constructor_pagina_service_1, core_2, outlet_planner_home_component_1;
    var PaginaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pagina_superior_component_1_1) {
                pagina_superior_component_1 = pagina_superior_component_1_1;
            },
            function (pagina_lateral_component_1_1) {
                pagina_lateral_component_1 = pagina_lateral_component_1_1;
            },
            function (constructor_pagina_service_1_1) {
                constructor_pagina_service_1 = constructor_pagina_service_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (outlet_planner_home_component_1_1) {
                outlet_planner_home_component_1 = outlet_planner_home_component_1_1;
            }],
        execute: function() {
            PaginaComponent = (function () {
                function PaginaComponent(constructorPaginaService) {
                    this.constructorPaginaService = constructorPaginaService;
                    this.pagina = this.constructorPaginaService.pagina;
                    this.construyeBreadCrumbs(this.pagina.breadCrumbItem);
                    this.construyeBreadCrumbs("Home");
                }
                PaginaComponent.prototype.colapsarLateral = function () {
                    if (this.pagina.lateralColapsado) {
                        this.pagina.lateralColapsado = false;
                    }
                    else {
                        this.pagina.lateralColapsado = true;
                    }
                };
                PaginaComponent.prototype.onMouseEnterColapsarLateral = function () {
                    if (!this.pagina.lateralColapsadoHover && this.pagina.lateralColapsado === true) {
                        this.pagina.lateralColapsadoHover = true;
                    }
                };
                PaginaComponent.prototype.onMouseLeaveColapsarLateral = function () {
                    if (this.pagina.lateralColapsadoHover) {
                        this.pagina.lateralColapsadoHover = false;
                    }
                };
                PaginaComponent.prototype.construyeBreadCrumbs = function (breadCrumbItem) {
                    try {
                        this.breadCrumbs.push(breadCrumbItem);
                    }
                    catch ($error) {
                        this.breadCrumbs = [breadCrumbItem];
                    }
                };
                PaginaComponent.prototype.onResizeColapsarLateral = function () {
                    var w = window.innerWidth;
                    if (w <= core_2.BOOTSTRAP_RESOLUTION_MD_MIN) {
                        this.pagina.lateralColapsado = false;
                    }
                };
                PaginaComponent = __decorate([
                    core_1.Component({
                        selector: 'pagina',
                        templateUrl: '../../templates/template-0/html/posiciones/pagina.html',
                        styleUrls: ['../../templates/template-0/css/andamiaje.css', '../../templates/template-0/css/main.css', '../../templates/template-0/css/posiciones/pagina.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        providers: [constructor_pagina_service_1.ConstructorPaginaService],
                        directives: [pagina_superior_component_1.PaginaSuperiorComponent, pagina_lateral_component_1.PaginaLateralComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'OutletPlannerHome',
                            component: outlet_planner_home_component_1.OutletPlannerHomeComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [constructor_pagina_service_1.ConstructorPaginaService])
                ], PaginaComponent);
                return PaginaComponent;
            }());
            exports_1("PaginaComponent", PaginaComponent);
        }
    }
});
//# sourceMappingURL=pagina.component.js.map