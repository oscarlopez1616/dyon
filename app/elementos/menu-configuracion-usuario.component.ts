import {Component,Injector}   from 'angular2/core';
import {DesplegableSuperiorDerecha}   from '../domains/desplegable-superior-derecha';


@Component({
    selector: "menu-configuracion-usuario",
    templateUrl: '../../templates/template-0/html/elementos/menu-configuracion-usuario.html',
    styleUrls:['../../templates/template-0/css/elementos/menu-configuracion-usuario.css'] 
})
export class MenuConfiguracionUsuarioComponent extends DesplegableSuperiorDerecha{
    constructor(injector: Injector) { 
                super(injector);
    }
}