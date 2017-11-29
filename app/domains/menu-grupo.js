System.register(['./linea-menu'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var linea_menu_1;
    var MenuGrupo;
    return {
        setters:[
            function (linea_menu_1_1) {
                linea_menu_1 = linea_menu_1_1;
            }],
        execute: function() {
            MenuGrupo = (function () {
                function MenuGrupo(titulo) {
                    this.titulo = titulo;
                    this.lineasMenu = [];
                }
                MenuGrupo.prototype.addLineaMenu = function (posicionInMenu, arbolOfMenusItems) {
                    var lM = new linea_menu_1.LineaMenu(posicionInMenu, arbolOfMenusItems);
                    this.lineasMenu.push(lM);
                };
                MenuGrupo.prototype.getCountRaicesInMenuGrupo = function () {
                    return this.lineasMenu.length;
                };
                return MenuGrupo;
            }());
            exports_1("MenuGrupo", MenuGrupo);
        }
    }
});
//# sourceMappingURL=menu-grupo.js.map