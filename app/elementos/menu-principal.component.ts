import {Component, Injector, ViewEncapsulation}   from 'angular2/core';
import {PaginaComponent}   from '../posiciones/pagina.component';
import {Pagina}   from '../domains/pagina';


@Component({
    selector: "menu-principal",
    templateUrl: '../../templates/template-0/html/elementos/menu-principal.html',
    styleUrls: ['../../templates/template-0/css/elementos/menu-principal.css'],
})
export class MenuPrincipalComponent {
    public pagina: Pagina;
    constructor(injector: Injector) {
        this.pagina = injector.get(PaginaComponent).pagina;
    }

    clickMenuPrincipal(): void {
        if (this.pagina.esOpenMenuPrincipal) {
            this.pagina.esOpenMenuPrincipal = false;
        }
        else {
            this.pagina.esOpenMenuPrincipal = true;
        }
    }

    cerrarMenuPrincipal(): void {
        this.pagina.esOpenMenuPrincipal = false;
    }
}