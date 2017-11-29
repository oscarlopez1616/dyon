import {Component}   from 'angular2/core';
import {DesplegableMenuPrincipalComponent}   from '../elementos/desplegable-menu-principal.component';
import {DesactivadorComponent}   from '../elementos/desactivador.component';

@Component({
    selector: "pagina-flotante",
    templateUrl: '../../templates/template-0/html/posiciones/pagina-flotante.html',
    styleUrls: ['../../templates/template-0/css/pagina-flotante.css'],
    directives: [DesplegableMenuPrincipalComponent,DesactivadorComponent]
})
    
export class PaginaFlotanteComponent{

    constructor() {
    }

}
