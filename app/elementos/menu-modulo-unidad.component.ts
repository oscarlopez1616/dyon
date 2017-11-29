import {Component, Input, Injector, AfterContentInit,Renderer}   from 'angular2/core';
import {Pagina}   from '../domains/pagina';
import {PaginaComponent}   from '../posiciones/pagina.component';
import {MenuItem}   from '../domains/menu-item';
import {LineaMenu}   from '../domains/linea-menu';
import {ArbolNArio}   from '../domains/arbol-n-ario';

@Component({
    selector: "menu-modulo-unidad",
    properties:[""],
    templateUrl: '../../templates/template-0/html/elementos/menu-modulo-unidad.html',
    styleUrls: ['../../templates/template-0/css/elementos/menu-modulo-unidad.css']
})
export class MenuModuloUnidadComponent implements AfterContentInit {
    pagina: Pagina;
    isMenuOpen: boolean;
    @Input("lineaMenu") lineaMenu: LineaMenu;
    menuHtml: any;
    myRenderer: any;
    constructor(injector: Injector,myRenderer: Renderer) {
        this.pagina = injector.get(PaginaComponent).pagina;
        this.isMenuOpen = false;
        this.menuHtml = '';
        this.myRenderer = myRenderer;
    }

    ngAfterContentInit() {
        this.menuHtml = this.lineaMenu.drawLineaMenu(false,this.myRenderer.selectRootElement("mi-tag-menu-unidad").attributes[0].nodeName);
    }

    abrirCerrarMenu() {
        if (this.isMenuOpen) {
            this.isMenuOpen = false;
        } else {
            this.isMenuOpen = true;
        }
    }

    cerrarMenu() {
        this.isMenuOpen = false;
    }
}