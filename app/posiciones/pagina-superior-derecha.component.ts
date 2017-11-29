import {Component, ViewChild,Injector}   from 'angular2/core';
import {ManagerFrontEndTeamworkComponent}   from '../elementos/manager-front-end-teamwork.component';
import {MenuAyudaComponent}   from '../elementos/menu-ayuda.component';
import {MenuConfiguracionUsuarioComponent}   from '../elementos/menu-configuracion-usuario.component';
import {MenuCerrarSesionComponent}   from '../elementos/menu-cerrar-sesion.component';
import {Pagina}   from '../domains/pagina';
import {PaginaComponent}   from '../posiciones/pagina.component';

@Component({
    selector: "pagina-superior-derecha",
    templateUrl: '../../templates/template-0/html/posiciones/pagina-superior-derecha.html',
    styleUrls: ['../../templates/template-0/css/posiciones/pagina-superior-derecha.css'],
    directives: [ManagerFrontEndTeamworkComponent, MenuAyudaComponent, MenuConfiguracionUsuarioComponent, MenuCerrarSesionComponent]
})

export class PaginaSuperiorDerechaComponent {
    @ViewChild(ManagerFrontEndTeamworkComponent) managerFrontEndTeamworkComponent: ManagerFrontEndTeamworkComponent;
    @ViewChild(MenuAyudaComponent) menuAyudaComponent: MenuAyudaComponent;
    @ViewChild(MenuConfiguracionUsuarioComponent) menuConfiguracionUsuarioComponent: MenuConfiguracionUsuarioComponent;
    @ViewChild(MenuCerrarSesionComponent) menuCerrarSesionComponent: MenuCerrarSesionComponent;
    pagina: Pagina;
    constructor(injector: Injector) {
        this.pagina = injector.get(PaginaComponent).pagina;
    }

    /**
     * llamara a todos los desativarDesplegable() Contenidos en 
     * PaginaSuperiorDerecha menos al tipo que al component que se le pase por parametro
     * @param {any} component - la clase this que llama a este metodo.
     */
    desactivaOtrosDesplegables(component: any): void {
        if (!(component instanceof ManagerFrontEndTeamworkComponent)) this.managerFrontEndTeamworkComponent.desactivarDesplegable();
        if (!(component instanceof MenuAyudaComponent)) this.menuAyudaComponent.desactivarDesplegable();
        if (!(component instanceof MenuConfiguracionUsuarioComponent)) this.menuConfiguracionUsuarioComponent.desactivarDesplegable();
        if (!(component instanceof MenuCerrarSesionComponent)) this.menuCerrarSesionComponent.desactivarDesplegable();
    }

    /**
     * llamara a todos los desativarDesplegable() Contenidos en 
     * PaginaSuperiorDerecha 
     */
    cerrarTodosDesplegablesSuperiorDerecha(): void {
        this.managerFrontEndTeamworkComponent.desactivarDesplegable();
        this.menuAyudaComponent.desactivarDesplegable();
        this.menuConfiguracionUsuarioComponent.desactivarDesplegable();
        this.menuCerrarSesionComponent.desactivarDesplegable();
    }

}