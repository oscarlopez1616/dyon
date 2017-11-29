import {Component, ViewChildren, QueryList, ViewChild, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Pagina}   from '../domains/pagina';
import {Menu}   from '../domains/menu';

import {PaginaSuperiorComponent}   from './pagina-superior.component';
import {PaginaLateralComponent}   from './pagina-lateral.component';
//import {PaginaFlotanteComponent}   from './pagina-flotante.component';
import {ConstructorPaginaService}   from '../services/constructor-pagina.service';
import {BOOTSTRAP_RESOLUTION_MD_MIN}   from '../domains/core';

import {OutletPlannerHomeComponent}   from '../router-outlets/planner/outlet-planner-home.component';

@Component({
    selector: 'pagina',
    templateUrl: '../../templates/template-0/html/posiciones/pagina.html',
    styleUrls: ['../../templates/template-0/css/andamiaje.css','../../templates/template-0/css/main.css','../../templates/template-0/css/posiciones/pagina.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConstructorPaginaService],
    directives: [PaginaSuperiorComponent,PaginaLateralComponent,ROUTER_DIRECTIVES]
    /*directives: [PaginaSuperiorComponent, PaginaLateralComponent,
        PaginaFlotanteComponent,ROUTER_DIRECTIVES]*/
})

@RouteConfig([
    {
        path: '/',
        name: 'OutletPlannerHome',
        component: OutletPlannerHomeComponent,
        useAsDefault: true
    }
])


export class PaginaComponent {
    public breadCrumbs: string[];
    public pagina: Pagina;
    public id: string;
    menuPrincipal: Menu;
    constructorPaginaService: ConstructorPaginaService;
    constructor(constructorPaginaService: ConstructorPaginaService) {
        this.constructorPaginaService = constructorPaginaService;
        this.pagina = this.constructorPaginaService.pagina;
        
        this.construyeBreadCrumbs(this.pagina.breadCrumbItem);
        this.construyeBreadCrumbs("Home");

    }
    
    colapsarLateral(): void {
        if (this.pagina.lateralColapsado) {
            this.pagina.lateralColapsado = false;
        } else {
            this.pagina.lateralColapsado = true;
        }
    }
    
    /**
     * Comprobamos tambien pagina.lateralColpasado === true para que cuando 
     * lo cieeres osea lateralColpsado=True no se quede viendose por culpa del onmouseenter
     */
    onMouseEnterColapsarLateral(): void {
        if (!this.pagina.lateralColapsadoHover && this.pagina.lateralColapsado === true) {
            this.pagina.lateralColapsadoHover = true;
        }
    }
    
    onMouseLeaveColapsarLateral(): void {
        if (this.pagina.lateralColapsadoHover) {
            this.pagina.lateralColapsadoHover = false;
        }
    }
    
    construyeBreadCrumbs(breadCrumbItem: string): void {
        try {
            this.breadCrumbs.push(breadCrumbItem);
        } catch ($error) {
            this.breadCrumbs = [breadCrumbItem];
        }
    }
    
    onResizeColapsarLateral() {
        var w = window.innerWidth;
        
        if (w <= BOOTSTRAP_RESOLUTION_MD_MIN) {
            this.pagina.lateralColapsado = false;
        }
    }



}