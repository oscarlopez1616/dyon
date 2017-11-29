import {Component, Injector}   from 'angular2/core';
import {Pagina}   from '../domains/pagina';
import {PaginaComponent}   from '../posiciones/pagina.component';
import {PaginaSuperiorLateralComponent}   from './pagina-superior-lateral.component';
import {MenuModuloComponent}   from '../elementos/menu-modulo.component';


@Component({
    selector: "pagina-lateral",
    templateUrl: '../../templates/template-0/html/posiciones/pagina-lateral.html',
    styleUrls: ['../../templates/template-0/css/posiciones/pagina-lateral.css'],
    directives: [PaginaSuperiorLateralComponent, MenuModuloComponent]
})

export class PaginaLateralComponent {

    pagina: Pagina;
    constructor(injector: Injector) {
        this.pagina = injector.get(PaginaComponent).pagina;
    }
   

}
