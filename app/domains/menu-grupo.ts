import {ArbolNArio}   from './arbol-n-ario';
import {LineaMenu}   from './linea-menu';

export class MenuGrupo{
    titulo: string;
    lineasMenu: Array<LineaMenu>;
    
    constructor(titulo: string){
        this.titulo = titulo;
        this.lineasMenu = [];
    }
    
    addLineaMenu(posicionInMenu: number,arbolOfMenusItems: ArbolNArio): void{
        var lM: LineaMenu = new LineaMenu(posicionInMenu, arbolOfMenusItems);
        this.lineasMenu.push(lM);
    }
    
    /**
     * @returns {number} Devuelve un number con numero de raices que tiene ese MenuGrupo
     */
    getCountRaicesInMenuGrupo(): number{
        return this.lineasMenu.length;
    }  
    
}