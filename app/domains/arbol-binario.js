System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArbolBinario;
    return {
        setters:[],
        execute: function() {
            ArbolBinario = (function () {
                function ArbolBinario(data, left, right) {
                    this.data = data;
                    this.left = left;
                    this.right = right;
                }
                ArbolBinario.prototype.getData = function () { return this.data; };
                ArbolBinario.prototype.getLeft = function () { return this.left; };
                ArbolBinario.prototype.getRight = function () { return this.right; };
                ArbolBinario.prototype.getLeftmostData = function () {
                    var leftMostData;
                    (this.left == null) ? leftMostData = this.data : leftMostData = this.left.getLeftmostData();
                    return leftMostData;
                };
                ArbolBinario.prototype.getRightmostData = function () {
                    var rightMostData;
                    (this.right == null) ? rightMostData = this.data : rightMostData = this.right.getRightmostData();
                    return rightMostData;
                };
                ArbolBinario.prototype.isLeaf = function () {
                    return (this.left == null) && (this.right == null);
                };
                ArbolBinario.prototype.setData = function (newData) { this.data = newData; };
                ArbolBinario.prototype.setLeft = function (newLeft) { this.left = newLeft; };
                ArbolBinario.prototype.setRight = function (newRight) { this.right = newRight; };
                ArbolBinario.prototype.treeSize = function () {
                    var left_sum = 0;
                    var right_sum = 0;
                    (this.left != null) ? left_sum = this.left.treeSize() : left_sum = 0;
                    (this.right != null) ? right_sum = this.right.treeSize() : right_sum = 0;
                    return 1 + left_sum + right_sum;
                };
                ArbolBinario.prototype.preOrden = function (nodo, preOrdenData) {
                    if (nodo == null)
                        return;
                    preOrdenData.push(nodo.data);
                    this.preOrden(nodo.getLeft(), preOrdenData);
                    this.preOrden(nodo.getRight(), preOrdenData);
                };
                ArbolBinario.prototype.inOrden = function (nodo, inOrdenData) {
                    if (nodo == null)
                        return;
                    this.inOrden(nodo.getLeft(), inOrdenData);
                    inOrdenData.push(nodo.data);
                    this.inOrden(nodo.getRight(), inOrdenData);
                };
                ArbolBinario.prototype.postOrden = function (nodo, postOrdenData) {
                    if (nodo == null)
                        return;
                    this.postOrden(nodo.getLeft(), postOrdenData);
                    this.postOrden(nodo.getRight(), postOrdenData);
                    postOrdenData.push(nodo.data);
                };
                ArbolBinario.prototype.compruebaArbolPostorden = function (flag, numNodos, cont) {
                    var cont = 0;
                    var flag = true;
                    if (this.treeSize() != numNodos && cont === 0)
                        return flag = false;
                    cont++;
                    if (this.left != null && flag)
                        flag = this.left.compruebaArbolPostorden(flag, numNodos, cont);
                    if (this.right != null && flag)
                        flag = this.right.compruebaArbolPostorden(flag, numNodos, cont);
                    if (this.isLeaf() && flag)
                        if (this.data == "i" || this.data == "-" || this.data == "u")
                            flag = false;
                    if (this.data == "i" || this.data == "-" || this.data == "u")
                        if (this.left == null || this.right == null)
                            flag = false;
                    return flag;
                };
                return ArbolBinario;
            }());
            exports_1("ArbolBinario", ArbolBinario);
        }
    }
});
//# sourceMappingURL=arbol-binario.js.map