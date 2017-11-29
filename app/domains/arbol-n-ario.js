System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArbolNArio;
    return {
        setters:[],
        execute: function() {
            ArbolNArio = (function () {
                function ArbolNArio(data, idNode, nodos) {
                    this.data = data;
                    this.idNode = idNode;
                    this.nodos = nodos;
                }
                ArbolNArio.prototype.getData = function () { return this.data; };
                ArbolNArio.prototype.getIdNode = function () { return this.idNode; };
                ArbolNArio.prototype.setData = function (newData) { this.data = newData; };
                ArbolNArio.prototype.setNodoByIdNodo = function (newNodo) {
                    this.nodos.push(newNodo);
                };
                ArbolNArio.prototype.getNodoByIdNodo = function (idNode) {
                    try {
                        var arbolNArio = this.nodos.filter(function (_) { return _.idNode === idNode; })[0];
                        return arbolNArio;
                    }
                    catch (err) {
                        return null;
                    }
                };
                ArbolNArio.prototype.esHijoMasIzquierda = function () {
                    if (this.idNode == 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                ArbolNArio.prototype.getAltura = function (nodo) {
                    if (nodo == null)
                        return -1;
                    var max = 0;
                    var idNode = 0;
                    for (var tempNode = nodo.getNodoByIdNodo(idNode); tempNode != null; tempNode = nodo.getNodoByIdNodo(idNode)) {
                        var n = this.getAltura(tempNode) + 1;
                        if (n > max)
                            max = n;
                        idNode = idNode + 1;
                    }
                    return max;
                };
                ArbolNArio.prototype.preOrden = function (nodo, preOrdenData, callback) {
                    if (nodo == null)
                        return;
                    preOrdenData.push(nodo.data);
                    callback(nodo);
                    var idNode = 0;
                    for (var tempNode = nodo.getNodoByIdNodo(idNode); tempNode != null; tempNode = nodo.getNodoByIdNodo(idNode)) {
                        this.preOrden(tempNode, preOrdenData, callback);
                        idNode = idNode + 1;
                    }
                    if (this.getAltura(nodo) > 0) {
                        callback(null);
                    }
                };
                ArbolNArio.prototype.inOrden = function (nodo, inOrdenData) {
                    if (nodo != null) {
                        var tempNode = nodo.getNodoByIdNodo(0);
                        this.inOrden(tempNode, inOrdenData);
                        inOrdenData.push(nodo.data);
                        var idNode = 0;
                        while (tempNode != null) {
                            idNode = idNode + 1;
                            tempNode = nodo.getNodoByIdNodo(idNode);
                            this.inOrden(tempNode, inOrdenData);
                        }
                    }
                };
                ArbolNArio.prototype.postOrden = function (nodo, postOrdenData) {
                    if (nodo == null)
                        return;
                    var idNode = 0;
                    for (var tempNode = nodo.getNodoByIdNodo(idNode); tempNode != null; tempNode = nodo.getNodoByIdNodo(idNode)) {
                        this.postOrden(tempNode, postOrdenData);
                        idNode = idNode + 1;
                    }
                    postOrdenData.push(nodo.data);
                };
                return ArbolNArio;
            }());
            exports_1("ArbolNArio", ArbolNArio);
        }
    }
});
//# sourceMappingURL=arbol-n-ario.js.map