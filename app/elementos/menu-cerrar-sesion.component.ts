import {Component,Injector}   from 'angular2/core';
import {DesplegableSuperiorDerecha}   from '../domains/desplegable-superior-derecha';


@Component({
    selector: "menu-cerrar-sesion",
    templateUrl: '../../templates/template-0/html/elementos/menu-cerrar-sesion.html',
    styleUrls:['../../templates/template-0/css/elementos/menu-cerrar-sesion.css']
})
export class MenuCerrarSesionComponent extends DesplegableSuperiorDerecha{

    constructor(injector: Injector) { 
                super(injector);
    }
}