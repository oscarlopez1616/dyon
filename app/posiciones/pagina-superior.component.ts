import {Component}   from 'angular2/core';
import {PaginaSuperiorIzquierdaComponent}   from './pagina-superior-izquierda.component';
import {PaginaSuperiorDerechaComponent}   from './pagina-superior-derecha.component';
import {PaginaSuperiorLateralComponent}   from './pagina-superior-lateral.component';
import {PaginaAsistenteResponsiveComponent}   from './pagina-asistente-responsive.component';

@Component({
    selector: "pagina-superior",
    templateUrl: '../../templates/template-0/html/posiciones/pagina-superior.html',
    directives: [PaginaSuperiorIzquierdaComponent,PaginaSuperiorDerechaComponent,PaginaSuperiorLateralComponent
    ,PaginaAsistenteResponsiveComponent]
})
    
export class PaginaSuperiorComponent{
    
    constructor() {
    }   

}