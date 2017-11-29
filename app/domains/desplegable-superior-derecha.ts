import {Injector}   from 'angular2/core';
import {PaginaSuperiorDerechaComponent}   from '../posiciones/pagina-superior-derecha.component';

/**
 * Esta clase abstracta se usa para eliminar el codigo duplicado en al creacion de los desplegableSuperiorDerecha
 * lo podiamos haber hecho con una directiva tambien pero como no tenemos ningun envolver para ese nodo lo hemos 
 * hecho asi.
 */
export abstract class DesplegableSuperiorDerecha{

    isOpened: boolean;
    paginaSuperiorDerechaComponent: PaginaSuperiorDerechaComponent;

    constructor(injector: Injector) { 
        this.isOpened = false;
        this.paginaSuperiorDerechaComponent = injector.get(PaginaSuperiorDerechaComponent);
    }
    
    
    onclickDesplegableSuperiorDerecha() {
      if (this.isOpened) {
            this.isOpened = false;
      }else{
            this.isOpened = true; 
      }
      this.paginaSuperiorDerechaComponent.desactivaOtrosDesplegables(this);
    }
    
    desactivarDesplegable(){
        this.isOpened = false; 
    }
}


