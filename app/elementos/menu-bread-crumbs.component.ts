import {Component,ViewEncapsulation,Injector}   from 'angular2/core';
import {ConstructorPaginaService}   from '../services/constructor-pagina.service';
import {Pagina}   from '../domains/pagina';
import {PaginaComponent}   from '../posiciones/pagina.component';


@Component({
    selector: "menu-bread-crumbs",
    templateUrl: '../../templates/template-0/html/elementos/menu-bread-crumbs.html',
    styleUrls:['../../templates/template-0/css/elementos/menu-bread-crumbs.css']
})
export class MenuBreadCrumbsComponent {
    pagina: Pagina;
    constructor(injector: Injector) {
        this.pagina = injector.get(PaginaComponent).pagina;
    }
   
}