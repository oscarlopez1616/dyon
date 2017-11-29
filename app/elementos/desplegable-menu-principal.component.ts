import {Component,Injector,ViewEncapsulation}   from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Pagina}   from '../domains/pagina';
import {PaginaComponent}   from '../posiciones/pagina.component';


@Component({
    selector: "desplegable-menu-principal",
    templateUrl: '../../templates/template-0/html/elementos/desplegable-menu-principal.html',
    styleUrls:['../../templates/template-0/css/desplegable-menu-principal.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
export class DesplegableMenuPrincipalComponent {
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
    
    cerrarMenuModulo(): void {
        this.pagina.esOpenMenuPrincipal = false;
    }
}