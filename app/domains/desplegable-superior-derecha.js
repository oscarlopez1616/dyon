System.register(['../posiciones/pagina-superior-derecha.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pagina_superior_derecha_component_1;
    var DesplegableSuperiorDerecha;
    return {
        setters:[
            function (pagina_superior_derecha_component_1_1) {
                pagina_superior_derecha_component_1 = pagina_superior_derecha_component_1_1;
            }],
        execute: function() {
            DesplegableSuperiorDerecha = (function () {
                function DesplegableSuperiorDerecha(injector) {
                    this.isOpened = false;
                    this.paginaSuperiorDerechaComponent = injector.get(pagina_superior_derecha_component_1.PaginaSuperiorDerechaComponent);
                }
                DesplegableSuperiorDerecha.prototype.onclickDesplegableSuperiorDerecha = function () {
                    if (this.isOpened) {
                        this.isOpened = false;
                    }
                    else {
                        this.isOpened = true;
                    }
                    this.paginaSuperiorDerechaComponent.desactivaOtrosDesplegables(this);
                };
                DesplegableSuperiorDerecha.prototype.desactivarDesplegable = function () {
                    this.isOpened = false;
                };
                return DesplegableSuperiorDerecha;
            }());
            exports_1("DesplegableSuperiorDerecha", DesplegableSuperiorDerecha);
        }
    }
});
//# sourceMappingURL=desplegable-superior-derecha.js.map