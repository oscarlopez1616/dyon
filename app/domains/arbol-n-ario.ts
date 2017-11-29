/**
 * Esta clase esta implementada por Oscar Lopez
 * Es un Arbol N Ario para poder implementar los recorridos preorden postorden y inorden
 * he utilizado immersion. Los recorridos son algoritmos recursivos pero iterando los hijos de cada nodo desde 
 * A Sub 0 hasta A Sub N donde A es el arbol n ario y el indice es idNode. idNode existe en todos los naturales.
 * el hijo mas a la izquierda esta identificado por idNode=0 asta idNode=Max donde Max es el hijo mas a la derecha
 */
export class ArbolNArio {

    private data: any;
    private idNode: number;
    private nodos: Array<ArbolNArio>

    constructor(data: any, idNode: number, nodos: Array<ArbolNArio>) {
        this.data = data;
        this.idNode = idNode;
        this.nodos = nodos;
    }

    getData(): any { return this.data; }

    getIdNode(): any { return this.idNode; }


    setData(newData: any): void { this.data = newData; }

    setNodoByIdNodo(newNodo: ArbolNArio): void {
        this.nodos.push(newNodo);
    }

    getNodoByIdNodo(idNode: number): ArbolNArio {
        try {
            var arbolNArio: ArbolNArio = this.nodos.filter(_ => _.idNode === idNode)[0];
            return arbolNArio;
        } catch (err) {
            return null;
        }
    }
    
    /**
     * @return {boolean} retorna true si es el hijo mas a la izquierda
     * el hijo mas a la izquierda esta identificado por idNode=0 asta idNode=Max donde Max es el hijo mas a la derecha
     */
    esHijoMasIzquierda(): boolean{
      if(this.idNode==0){
           return true;
      }else{
          return false;
      }
    }

    getAltura(nodo: ArbolNArio): number {
        if (nodo == null) return -1;
        var max: number = 0;
        var idNode: number = 0;
        for (var tempNode: ArbolNArio = nodo.getNodoByIdNodo(idNode); tempNode != null; tempNode = nodo.getNodoByIdNodo(idNode)) {
            var n = this.getAltura(tempNode) + 1;
            if (n > max) max = n;
            idNode = idNode + 1;
        }
        return max;
    }

    /**
     * Este metodo recorre un arbol N Ario en preorden
     * @param {ArbolNArio} nodo - Arbol N Ario de entrada a la funcion
     * @param {Array<any>} preOrdenData-  Array que entramos en la primera llamada vacia para que la llene con el preorden
     * @param {(data:any) => void} callback - La funcion callback que podemos hacer a nuestro gusto 
     * el callback se llama al introducir un elemento en preOrdenData pasandole el nodo osea callback(node:ArbolNArio) y se 
     * llama al acabar el for de hijos pasandole null solo si la altura
     * del nodo es >0 osea callback(null). De este modo el callback puede detectar facilmente los hooks importanets en el recorrido como por ejemplo para dibujar
     * Nota: tener en cuenta que en el hook para englobar hijos no devuelve un objeto ArbolNArio con sus parametros a null si no un null 
     * Ponemos un ejemplo de integracion del callback para por ejemplo un menu con <ul> y <li> esta seria la definicion de nuestra funcion callback:
     * de hecho esta es la integracion del metodo drawLineaMenu(dibujarRaiz: boolean = true,envoltorioLista: string = "ul",envoltorioElementoLista: string = "li"): string
     * de la clase LineaMenu contenida en /domains/linea-menu.ts. Ya que los menu son arboles y recorremos en Preorden para dibujarlos.
     * 
    drawLineaMenu(dibujarRaiz: boolean = true,envoltorioLista: string = "ul",envoltorioElementoLista: string = "li"): string{
        var lineaMenuHtml = "";
        var menusItem: Array<MenuItem> = [];
        var esRaiz: boolean = !dibujarRaiz;
        this.arbolOfMenusItems.preOrden(this.arbolOfMenusItems, menusItem, (nodo: ArbolNArio) => {
            if(!esRaiz){                                  
                if (nodo instanceof ArbolNArio) {//logica si el callback se llama con parametro ArbolNArio
                        if (nodo.getAltura(nodo) > 0) {//tiene hijos <"+envoltorioLista+">
                            lineaMenuHtml = lineaMenuHtml + "<"+envoltorioLista+">" + "<"+envoltorioElementoLista+">";
                            if (nodo.getData().esPuente)//no tiene que tener link
                            { 
                                lineaMenuHtml = lineaMenuHtml + nodo.getData().anchorText;
                            }else{ //tiene que tener link
                                lineaMenuHtml = lineaMenuHtml+"<a href='"+nodo.getData().href+"'>"+nodo.getData().anchorText+"</a>";
                            }
                        } else {
                            if (nodo.esHijoMasIzquierda())lineaMenuHtml = lineaMenuHtml+"<"+envoltorioLista+">";
                            if (nodo.getData().esPuente)//no tiene que tener link
                            { 
                                lineaMenuHtml = lineaMenuHtml +"<"+envoltorioElementoLista+">" + nodo.getData().anchorText + "</"+envoltorioElementoLista+">" ;
                            }else{ //tiene que tener link
                                lineaMenuHtml = lineaMenuHtml+"<"+envoltorioElementoLista+"><a href='"+nodo.getData().href+"'>"+nodo.getData().anchorText+"</a></"+envoltorioElementoLista+">";
                            }  
                        }
                    }else if(nodo === null){//logica si el callback se llama con parametro null
                        lineaMenuHtml = lineaMenuHtml+"</"+envoltorioLista+"></"+envoltorioElementoLista+">";
                    }
            }else{
                esRaiz=false;
            }
        });
        lineaMenuHtml = lineaMenuHtml+"</"+envoltorioLista+">";
        return lineaMenuHtml;
    }
     * 
     * 
     */
    preOrden(nodo: ArbolNArio, preOrdenData: Array<any>, callback: (data: ArbolNArio) => void): void {
        if (nodo == null) return;
        preOrdenData.push(nodo.data);
        callback(nodo);     
        var idNode: number = 0;
        for (var tempNode: ArbolNArio = nodo.getNodoByIdNodo(idNode); tempNode != null; tempNode = nodo.getNodoByIdNodo(idNode)) {
            this.preOrden(tempNode, preOrdenData, callback);
            idNode = idNode + 1;
        }
        if (this.getAltura(nodo)>0){
            callback(null);
        }
    }

    /**
     * tiene sentido  si la n de hijos es par si no se puede realizar tambien pero no es tipo de recorrido util
     */
    inOrden(nodo: ArbolNArio, inOrdenData: Array<any>): void {
        if (nodo != null) {
            var tempNode: ArbolNArio = nodo.getNodoByIdNodo(0);
            this.inOrden(tempNode, inOrdenData);
            inOrdenData.push(nodo.data);
            var idNode: number = 0;
            while (tempNode != null) {
                idNode = idNode + 1;
                tempNode = nodo.getNodoByIdNodo(idNode);
                this.inOrden(tempNode, inOrdenData);
            }
        }
    }

    postOrden(nodo: ArbolNArio, postOrdenData: Array<any>): void {
        if (nodo == null) return;
        var idNode: number = 0;
        for (var tempNode: ArbolNArio = nodo.getNodoByIdNodo(idNode); tempNode != null; tempNode = nodo.getNodoByIdNodo(idNode)) {
            this.postOrden(tempNode, postOrdenData);
            idNode = idNode + 1;
        }
        postOrdenData.push(nodo.data);
    }

}