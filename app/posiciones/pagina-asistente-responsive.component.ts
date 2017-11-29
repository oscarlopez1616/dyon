import {Component,Injector}   from 'angular2/core';
import {Pagina}   from '../domains/pagina';
import {PaginaComponent}   from '../posiciones/pagina.component';

@Component({
    selector: "pagina-asistente-responsive",
    templateUrl: '../../templates/template-0/html/posiciones/pagina-asistente-responsive.html',
    styleUrls: ['../../templates/template-0/css/posiciones/pagina-asistente-responsive.css']
})

export class PaginaAsistenteResponsiveComponent {

    pagina: Pagina;
    constructor(injector: Injector) {
        this.pagina = injector.get(PaginaComponent).pagina;
    }

    clickDesplegableMenus() {
        if (this.pagina.lateralColapsado) {
            this.pagina.lateralColapsado = false;
        }
        else {
            this.pagina.lateralColapsado = true;
        }
    }
    
    clickPaginaSuperiorDerecha() {
        if (this.pagina.esDesplegadoPaginaSuperiorDerecha) {
            this.pagina.esDesplegadoPaginaSuperiorDerecha = false;
        }
        else {
            this.pagina.esDesplegadoPaginaSuperiorDerecha = true;
        }
    }

}
