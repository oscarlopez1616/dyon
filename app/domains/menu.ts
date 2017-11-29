import {MenuGrupo}   from './menu-grupo';

/**
 * Un menu contiene n MenuGrupo y 1 MenuGrupo contiene n LineaMenu
 * MenuGrupo contiene las lineas de menu y LineaMenu contiene el arbol y un atributo
 * que define la posicion en el menu
 */
export class Menu{
    titulo: string;
    menusGrupo: Array<MenuGrupo>;
    
    constructor(titulo: string){
        this.titulo = titulo;
        this.menusGrupo = [];
    }
    
    addLineaMenuGrupo(menusGrupo: MenuGrupo): void{
        this.menusGrupo.push(menusGrupo);
    }
    
    /**
     * @returns {number} Devuelve un number con numero de raices que tienen todos sus MenuGrupo contenidos en menusGrupo
     */
    getCountRaicesInMenu(){
        var totalCountRaicesInMenu: number = 0;
        for (var i: number = 0; i < this.menusGrupo.length; i++){
            totalCountRaicesInMenu = totalCountRaicesInMenu + this.menusGrupo[i].getCountRaicesInMenuGrupo();
        }
        return totalCountRaicesInMenu;
    }
  
}