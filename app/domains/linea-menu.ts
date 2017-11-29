import {ArbolNArio}   from './arbol-n-ario';
import {MenuItem}   from './menu-item';

export class LineaMenu {
    posicionInMenu: number;
    arbolOfMenusItems: ArbolNArio;
    
    constructor(posicionInMenu: number, arbolOfMenusItems: ArbolNArio){
        this.posicionInMenu = posicionInMenu;
        this.arbolOfMenusItems = arbolOfMenusItems;
    }
    
    /**
     * @param {boolean} dibujarRaiz - por defecto es true , Si es true dibujara tambien la raiz si es false no lo hará 
     * @param {string} envoltorioExterior - por defecto es el tipico <ul> , 
     * hay que pasarlo sin <> por ejemplo si quisieramos <div> hay que pasar div
     * @param {string} envoltorioInterior - por defecto es el tipico <li>,
     * hay que pasarlo sin <> por ejemplo si quisieramos <p> hay que pasar p 
     * @returns {string} Devuelve ese menu en html
     */
    drawLineaMenu(dibujarRaiz: boolean = true,shadowDomId: string = "",envoltorioLista: string = "ul",envoltorioElementoLista: string = "li"): string{
        var lineaMenuHtml = "";
        var menusItem: Array<MenuItem> = [];
        var esRaiz: boolean = !dibujarRaiz;
        this.arbolOfMenusItems.preOrden(this.arbolOfMenusItems, menusItem, nodo => {
            if(!esRaiz){                                  
                if (nodo instanceof ArbolNArio) {//logica si el callback se llama con parametro ArbolNArio
                        if (nodo.getAltura(nodo) > 0) {//tiene hijos <"+envoltorioLista+">
                            lineaMenuHtml = lineaMenuHtml + "<"+envoltorioLista+" "+shadowDomId+">" + "<"+envoltorioElementoLista+" "+shadowDomId+">";
                            if (nodo.getData().esPuente)//no tiene que tener link
                            { 
                                lineaMenuHtml = lineaMenuHtml + nodo.getData().anchorText;
                            }else{ //tiene que tener link
                                lineaMenuHtml = lineaMenuHtml+"<a "+shadowDomId+" href='"+nodo.getData().href+"'>"+nodo.getData().anchorText+"</a>";
                            }
                        } else {
                            if (nodo.esHijoMasIzquierda())lineaMenuHtml = lineaMenuHtml+"<"+envoltorioLista+" "+shadowDomId+">";
                            if (nodo.getData().esPuente)//no tiene que tener link
                            { 
                                lineaMenuHtml = lineaMenuHtml +"<"+envoltorioElementoLista+" "+shadowDomId+">" + nodo.getData().anchorText + "</"+envoltorioElementoLista+">" ;
                            }else{ //tiene que tener link
                                lineaMenuHtml = lineaMenuHtml+"<"+envoltorioElementoLista+" "+shadowDomId+"><a "+shadowDomId+" href='"+nodo.getData().href+"'>"+nodo.getData().anchorText+"</a></"+envoltorioElementoLista+">";
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
}
