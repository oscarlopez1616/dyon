import {Component,Injector,Input,AfterContentInit}   from 'angular2/core';
import {Pagina}   from '../domains/pagina';
import {PaginaComponent}   from '../posiciones/pagina.component';
import {MenuModuloUnidadComponent}   from './menu-modulo-unidad.component';
import {MenuGrupo}   from '../domains/menu-grupo';
import {LineaMenu}   from '../domains/linea-menu';


@Component({
    selector: "menu-modulo-grupo",
    moduleId:"loquemesalgadelapolla",
    templateUrl: '../../templates/template-0/html/elementos/menu-modulo-grupo.html',
    styleUrls: ['../../templates/template-0/css/elementos/menu-modulo-grupo.css'],
    directives: [MenuModuloUnidadComponent]
})
export class MenuModuloGrupoComponent implements AfterContentInit{
    pagina: Pagina;
    @Input("menuGrupo") menuGrupoModulo: MenuGrupo;
    lineasMenu: Array<LineaMenu>;
    constructor(injector: Injector) {
        this.pagina = injector.get(PaginaComponent).pagina;
    }
    
    ngAfterContentInit(){
        this.lineasMenu = this.menuGrupoModulo.lineasMenu;        
    }
    
}