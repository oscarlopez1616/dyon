import {Component,Injector}   from 'angular2/core';
import {Pagina}   from '../domains/pagina';
import {PaginaComponent}   from '../posiciones/pagina.component';


@Component({
    selector: "boton-menu-principal",
    templateUrl: '../../templates/template-0/html/elementos/boton-menu-principal.html',
    styleUrls:['../../templates/template-0/css/boton-menu-principal.css']
})
export class BotonMenuPrincipalComponent {  
    pagina: Pagina;
    constructor(injector: Injector) {
        this.pagina = injector.get(PaginaComponent).pagina;
    }
    
    clickMenuModulo(): void {
        if (this.pagina.esOpenMenuPrincipal) {
            this.pagina.esOpenMenuPrincipal = false;
        }
        else {
            this.pagina.esOpenMenuPrincipal = true;
        }
    }
}