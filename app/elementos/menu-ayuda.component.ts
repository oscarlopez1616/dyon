import {Component,Injector}   from 'angular2/core';
import {DesplegableSuperiorDerecha}   from '../domains/desplegable-superior-derecha';


@Component({
    selector: "menu-ayuda",
    templateUrl: '../../templates/template-0/html/elementos/menu-ayuda.html',
    styleUrls:['../../templates/template-0/css/elementos/menu-ayuda.css'] 
})
export class MenuAyudaComponent extends DesplegableSuperiorDerecha{

    constructor(injector: Injector) { 
                super(injector);
    }
    
}