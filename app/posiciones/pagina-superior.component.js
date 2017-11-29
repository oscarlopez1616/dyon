System.register(['angular2/core', './pagina-superior-izquierda.component', './pagina-superior-derecha.component', './pagina-superior-lateral.component', './pagina-asistente-responsive.component'], function(exports_1, context_1) {
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
    var core_1, pagina_superior_izquierda_component_1, pagina_superior_derecha_component_1, pagina_superior_lateral_component_1, pagina_asistente_responsive_component_1;
    var PaginaSuperiorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pagina_superior_izquierda_component_1_1) {
                pagina_superior_izquierda_component_1 = pagina_superior_izquierda_component_1_1;
            },
            function (pagina_superior_derecha_component_1_1) {
                pagina_superior_derecha_component_1 = pagina_superior_derecha_component_1_1;
            },
            function (pagina_superior_lateral_component_1_1) {
                pagina_superior_lateral_component_1 = pagina_superior_lateral_component_1_1;
            },
            function (pagina_asistente_responsive_component_1_1) {
                pagina_asistente_responsive_component_1 = pagina_asistente_responsive_component_1_1;
            }],
        execute: function() {
            PaginaSuperiorComponent = (function () {
                function PaginaSuperiorComponent() {
                }
                PaginaSuperiorComponent = __decorate([
                    core_1.Component({
                        selector: "pagina-superior",
                        templateUrl: '../../templates/template-0/html/posiciones/pagina-superior.html',
                        directives: [pagina_superior_izquierda_component_1.PaginaSuperiorIzquierdaComponent, pagina_superior_derecha_component_1.PaginaSuperiorDerechaComponent, pagina_superior_lateral_component_1.PaginaSuperiorLateralComponent,
                            pagina_asistente_responsive_component_1.PaginaAsistenteResponsiveComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginaSuperiorComponent);
                return PaginaSuperiorComponent;
            }());
            exports_1("PaginaSuperiorComponent", PaginaSuperiorComponent);
        }
    }
});
//# sourceMappingURL=pagina-superior.component.js.map