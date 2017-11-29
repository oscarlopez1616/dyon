System.register(['../domains/menu', '../domains/menu-grupo', '../domains/arbol-n-ario'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var menu_1, menu_grupo_1, arbol_n_ario_1;
    var ConstructorPaginaService;
    return {
        setters:[
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (menu_grupo_1_1) {
                menu_grupo_1 = menu_grupo_1_1;
            },
            function (arbol_n_ario_1_1) {
                arbol_n_ario_1 = arbol_n_ario_1_1;
            }],
        execute: function() {
            ConstructorPaginaService = (function () {
                function ConstructorPaginaService() {
                    var moduloName = this.getModuloName();
                    var paginaName = this.getPaginaName();
                    switch (moduloName) {
                        case "planner":
                            switch (paginaName) {
                                case "home":
                                    this.setPaginaHomeInPlaner();
                                    this.setHomeMenuModuloInPlanner();
                                    break;
                            }
                            break;
                    }
                }
                ConstructorPaginaService.prototype.getModuloName = function () {
                    var s = "";
                    s = "planner";
                    return s;
                };
                ConstructorPaginaService.prototype.getPaginaName = function () {
                    var s = "";
                    s = "home";
                    return s;
                };
                ConstructorPaginaService.prototype.setPaginaHomeInPlaner = function () {
                    var pagina = {
                        "breadCrumbItem": "Planner", "tienePasos": false, "menuModuloSelected": 2, "tituloPagina": "Home",
                        "esOpenMenuPrincipal": false, "xWindowDimensionsingleThread": 800, "yWindowDimensionsingleThread": 400,
                        "zIndexSingleThreadFlag": 1000, "lateralColapsado": false, "lateralColapsadoHover": false,
                        "esDesplegadoPaginaSuperiorDerecha": false
                    };
                    this.pagina = pagina;
                };
                ConstructorPaginaService.prototype.setHomeMenuModuloInPlanner = function () {
                    var menuItem = { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" };
                    var arbolNario0_0 = new arbol_n_ario_1.ArbolNArio(menuItem, 0, null);
                    menuItem = { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" };
                    var arbolNario0_1 = new arbol_n_ario_1.ArbolNArio(menuItem, 1, null);
                    var arbolesHijos = [arbolNario0_0, arbolNario0_1];
                    menuItem = { "id": 1, "esPuente": true, "anchorText": "el pais", "href": "http://www.elpais.com" };
                    var arbolNario0 = new arbol_n_ario_1.ArbolNArio(menuItem, 0, arbolesHijos);
                    menuItem = { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
                    var arbolNario1 = new arbol_n_ario_1.ArbolNArio(menuItem, 1, null);
                    menuItem = { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" };
                    var arbolNario2 = new arbol_n_ario_1.ArbolNArio(menuItem, 2, null);
                    menuItem = { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" };
                    var arbolNario3 = new arbol_n_ario_1.ArbolNArio(menuItem, 3, null);
                    arbolesHijos = [arbolNario0, arbolNario1, arbolNario2, arbolNario3];
                    menuItem = { "id": 0, "esPuente": true, "anchorText": "periodicos", "href": "null" };
                    var arbolNarioRoot = new arbol_n_ario_1.ArbolNArio(menuItem, 0, arbolesHijos);
                    var menuGrupoModulo0 = new menu_grupo_1.MenuGrupo("Acontecimientos");
                    menuGrupoModulo0.addLineaMenu(0, arbolNarioRoot);
                    menuGrupoModulo0.addLineaMenu(1, arbolNarioRoot);
                    menuGrupoModulo0.addLineaMenu(2, arbolNarioRoot);
                    menuGrupoModulo0.addLineaMenu(3, arbolNarioRoot);
                    menuGrupoModulo0.addLineaMenu(4, arbolNarioRoot);
                    menuGrupoModulo0.addLineaMenu(5, arbolNarioRoot);
                    var menuGrupoModulo1 = new menu_grupo_1.MenuGrupo("Devoluciones");
                    menuGrupoModulo1.addLineaMenu(6, arbolNarioRoot);
                    menuGrupoModulo1.addLineaMenu(7, arbolNarioRoot);
                    var menuModulo = new menu_1.Menu("MenuModulo PlannerHome");
                    menuModulo.addLineaMenuGrupo(menuGrupoModulo0);
                    menuModulo.addLineaMenuGrupo(menuGrupoModulo1);
                    this.menuModulo = menuModulo;
                };
                return ConstructorPaginaService;
            }());
            exports_1("ConstructorPaginaService", ConstructorPaginaService);
        }
    }
});
//# sourceMappingURL=constructor-pagina.service.js.map