System.register(['./arbol-n-ario'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var arbol_n_ario_1;
    var LineaMenu;
    return {
        setters:[
            function (arbol_n_ario_1_1) {
                arbol_n_ario_1 = arbol_n_ario_1_1;
            }],
        execute: function() {
            LineaMenu = (function () {
                function LineaMenu(posicionInMenu, arbolOfMenusItems) {
                    this.posicionInMenu = posicionInMenu;
                    this.arbolOfMenusItems = arbolOfMenusItems;
                }
                LineaMenu.prototype.drawLineaMenu = function (dibujarRaiz, shadowDomId, envoltorioLista, envoltorioElementoLista) {
                    if (dibujarRaiz === void 0) { dibujarRaiz = true; }
                    if (shadowDomId === void 0) { shadowDomId = ""; }
                    if (envoltorioLista === void 0) { envoltorioLista = "ul"; }
                    if (envoltorioElementoLista === void 0) { envoltorioElementoLista = "li"; }
                    var lineaMenuHtml = "";
                    var menusItem = [];
                    var esRaiz = !dibujarRaiz;
                    this.arbolOfMenusItems.preOrden(this.arbolOfMenusItems, menusItem, function (nodo) {
                        if (!esRaiz) {
                            if (nodo instanceof arbol_n_ario_1.ArbolNArio) {
                                if (nodo.getAltura(nodo) > 0) {
                                    lineaMenuHtml = lineaMenuHtml + "<" + envoltorioLista + " " + shadowDomId + ">" + "<" + envoltorioElementoLista + " " + shadowDomId + ">";
                                    if (nodo.getData().esPuente) {
                                        lineaMenuHtml = lineaMenuHtml + nodo.getData().anchorText;
                                    }
                                    else {
                                        lineaMenuHtml = lineaMenuHtml + "<a " + shadowDomId + " href='" + nodo.getData().href + "'>" + nodo.getData().anchorText + "</a>";
                                    }
                                }
                                else {
                                    if (nodo.esHijoMasIzquierda())
                                        lineaMenuHtml = lineaMenuHtml + "<" + envoltorioLista + " " + shadowDomId + ">";
                                    if (nodo.getData().esPuente) {
                                        lineaMenuHtml = lineaMenuHtml + "<" + envoltorioElementoLista + " " + shadowDomId + ">" + nodo.getData().anchorText + "</" + envoltorioElementoLista + ">";
                                    }
                                    else {
                                        lineaMenuHtml = lineaMenuHtml + "<" + envoltorioElementoLista + " " + shadowDomId + "><a " + shadowDomId + " href='" + nodo.getData().href + "'>" + nodo.getData().anchorText + "</a></" + envoltorioElementoLista + ">";
                                    }
                                }
                            }
                            else if (nodo === null) {
                                lineaMenuHtml = lineaMenuHtml + "</" + envoltorioLista + "></" + envoltorioElementoLista + ">";
                            }
                        }
                        else {
                            esRaiz = false;
                        }
                    });
                    lineaMenuHtml = lineaMenuHtml + "</" + envoltorioLista + ">";
                    return lineaMenuHtml;
                };
                return LineaMenu;
            }());
            exports_1("LineaMenu", LineaMenu);
        }
    }
});
//# sourceMappingURL=linea-menu.js.map