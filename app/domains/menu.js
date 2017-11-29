System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Menu;
    return {
        setters:[],
        execute: function() {
            Menu = (function () {
                function Menu(titulo) {
                    this.titulo = titulo;
                    this.menusGrupo = [];
                }
                Menu.prototype.addLineaMenuGrupo = function (menusGrupo) {
                    this.menusGrupo.push(menusGrupo);
                };
                Menu.prototype.getCountRaicesInMenu = function () {
                    var totalCountRaicesInMenu = 0;
                    for (var i = 0; i < this.menusGrupo.length; i++) {
                        totalCountRaicesInMenu = totalCountRaicesInMenu + this.menusGrupo[i].getCountRaicesInMenuGrupo();
                    }
                    return totalCountRaicesInMenu;
                };
                return Menu;
            }());
            exports_1("Menu", Menu);
        }
    }
});
//# sourceMappingURL=menu.js.map