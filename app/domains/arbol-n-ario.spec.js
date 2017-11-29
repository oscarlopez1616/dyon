System.register(['./arbol-n-ario'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var arbol_n_ario_1;
    return {
        setters:[
            function (arbol_n_ario_1_1) {
                arbol_n_ario_1 = arbol_n_ario_1_1;
            }],
        execute: function() {
            describe('ArbolNArio', function () {
                it('tiene data dado en el constructor', function () {
                    var arbolNArio = new arbol_n_ario_1.ArbolNArio('datos', 0, null);
                    expect(arbolNArio.getData()).toEqual('datos');
                });
                it('tiene data dado en el constructor', function () {
                    var arbolNArio = new arbol_n_ario_1.ArbolNArio('datos', 1, null);
                    expect(arbolNArio.getIdNode()).toEqual(1);
                });
                it('Altura ArbolNario es correcta ?', function () {
                    var menuItem = { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" };
                    var arbolNario5 = new arbol_n_ario_1.ArbolNArio(menuItem, 0, null);
                    menuItem = { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" };
                    var arbolNario6 = new arbol_n_ario_1.ArbolNArio(menuItem, 1, null);
                    var arbolesNarios = [arbolNario5, arbolNario6];
                    menuItem = { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" };
                    var arbolNario2 = new arbol_n_ario_1.ArbolNArio(menuItem, 0, arbolesNarios);
                    menuItem = { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
                    var arbolNario3 = new arbol_n_ario_1.ArbolNArio(menuItem, 1, null);
                    menuItem = { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" };
                    var arbolNario4 = new arbol_n_ario_1.ArbolNArio(menuItem, 2, null);
                    menuItem = { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" };
                    var arbolNario7 = new arbol_n_ario_1.ArbolNArio(menuItem, 3, null);
                    arbolesNarios = [arbolNario2, arbolNario3, arbolNario4, arbolNario7];
                    menuItem = { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" };
                    var arbolNarioRoot = new arbol_n_ario_1.ArbolNArio(menuItem, 0, arbolesNarios);
                    var traversalOrdenData = [];
                    var altura = arbolNarioRoot.getAltura(arbolNarioRoot);
                    expect(altura).toEqual(2);
                });
                it('Recorrido Preorden Funciona es correcto tanto el en Array por Immersion como en una funcion callback dada ?', function () {
                    var menuItem = { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" };
                    var arbolNario5 = new arbol_n_ario_1.ArbolNArio(menuItem, 0, null);
                    menuItem = { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" };
                    var arbolNario6 = new arbol_n_ario_1.ArbolNArio(menuItem, 1, null);
                    var arbolesNarios = [arbolNario5, arbolNario6];
                    menuItem = { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" };
                    var arbolNario2 = new arbol_n_ario_1.ArbolNArio(menuItem, 0, arbolesNarios);
                    menuItem = { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
                    var arbolNario3 = new arbol_n_ario_1.ArbolNArio(menuItem, 1, null);
                    menuItem = { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" };
                    var arbolNario4 = new arbol_n_ario_1.ArbolNArio(menuItem, 2, null);
                    menuItem = { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" };
                    var arbolNario7 = new arbol_n_ario_1.ArbolNArio(menuItem, 3, null);
                    arbolesNarios = [arbolNario2, arbolNario3, arbolNario4, arbolNario7];
                    menuItem = { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" };
                    var arbolNarioRoot = new arbol_n_ario_1.ArbolNArio(menuItem, 0, arbolesNarios);
                    var traversalOrdenData = [];
                    var callbackPreordenArray = [];
                    arbolNarioRoot.preOrden(arbolNarioRoot, traversalOrdenData, function (data) {
                        callbackPreordenArray.push(data);
                    });
                    var preOrdenData = [{ "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" },
                        { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" },
                        { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" },
                        { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" },
                        { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" },
                        { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" },
                        { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" }
                    ];
                    expect(traversalOrdenData).toEqual(preOrdenData);
                    var preOrdenDataCallBack = [{ "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" },
                        { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" },
                        { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" },
                        { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" },
                        null,
                        { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" },
                        { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" },
                        { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" },
                        null
                    ];
                    var callbackPreordenArrayOfMenuItem = [];
                    for (var i = 0; i < callbackPreordenArray.length; i++) {
                        try {
                            callbackPreordenArrayOfMenuItem.push(callbackPreordenArray[i].getData());
                        }
                        catch (err) {
                            callbackPreordenArrayOfMenuItem.push(null);
                        }
                    }
                    expect(callbackPreordenArrayOfMenuItem).toEqual(preOrdenDataCallBack);
                });
                it('Recorrido InOrden Funciona es correcto ?', function () {
                    var menuItem = { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" };
                    var arbolNario5 = new arbol_n_ario_1.ArbolNArio(menuItem, 0, null);
                    menuItem = { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" };
                    var arbolNario6 = new arbol_n_ario_1.ArbolNArio(menuItem, 1, null);
                    var arbolesNarios = [arbolNario5, arbolNario6];
                    menuItem = { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" };
                    var arbolNario2 = new arbol_n_ario_1.ArbolNArio(menuItem, 0, arbolesNarios);
                    menuItem = { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
                    var arbolNario3 = new arbol_n_ario_1.ArbolNArio(menuItem, 1, null);
                    menuItem = { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" };
                    var arbolNario4 = new arbol_n_ario_1.ArbolNArio(menuItem, 2, null);
                    menuItem = { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" };
                    var arbolNario7 = new arbol_n_ario_1.ArbolNArio(menuItem, 3, null);
                    arbolesNarios = [arbolNario2, arbolNario3, arbolNario4, arbolNario7];
                    menuItem = { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" };
                    var arbolNarioRoot = new arbol_n_ario_1.ArbolNArio(menuItem, 0, arbolesNarios);
                    var traversalOrdenData = [];
                    arbolNarioRoot.inOrden(arbolNarioRoot, traversalOrdenData);
                    var inOrdenData = [
                        { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" },
                        { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" },
                        { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" },
                        { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" },
                        { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" },
                        { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" },
                        { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" }
                    ];
                    expect(traversalOrdenData).toEqual(inOrdenData);
                });
                it('Recorrido PostOrden Funciona es correcto ?', function () {
                    var menuItem = { "id": 3, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" };
                    var arbolNario2 = new arbol_n_ario_1.ArbolNArio(menuItem, 0, null);
                    menuItem = { "id": 4, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
                    var arbolNario3 = new arbol_n_ario_1.ArbolNArio(menuItem, 1, null);
                    var arbolesNarios = [arbolNario2, arbolNario3];
                    menuItem = { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" };
                    var arbolNarioRoot = new arbol_n_ario_1.ArbolNArio(menuItem, 0, arbolesNarios);
                    var traversalOrdenData = [];
                    arbolNarioRoot.postOrden(arbolNarioRoot, traversalOrdenData);
                    var postOrdenData = [{ "id": 3, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" },
                        { "id": 4, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" },
                        { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" }
                    ];
                    expect(traversalOrdenData).toEqual(postOrdenData);
                });
            });
        }
    }
});
//# sourceMappingURL=arbol-n-ario.spec.js.map