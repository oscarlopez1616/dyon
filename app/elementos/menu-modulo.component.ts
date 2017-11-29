import {Component,Injector}   from 'angular2/core';
import {Pagina}   from '../domains/pagina';
import {PaginaComponent}   from '../posiciones/pagina.component';
import {MenuModuloGrupoComponent}   from './menu-modulo-grupo.component';
import {Menu}   from '../domains/menu';

import {ConstructorPaginaService}   from '../services/constructor-pagina.service';


@Component({
    selector: "menu-modulo",
    templateUrl: '../../templates/template-0/html/elementos/menu-modulo.html',
    styleUrls: ['../../templates/template-0/css/elementos/menu-modulo.css'],
    directives: [MenuModuloGrupoComponent]
})
export class MenuModuloComponent {
    pagina: Pagina;
    menuModulo: Menu;
    constructor(injector: Injector) {
        this.pagina = injector.get(PaginaComponent).pagina;
        var constructorPaginaService: ConstructorPaginaService = injector.get(PaginaComponent).constructorPaginaService;
        this.menuModulo = constructorPaginaService.menuModulo;
    }
    
}