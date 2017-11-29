import {Pagina}   from '../domains/pagina';
import {Menu}   from '../domains/menu';
import {MenuGrupo}   from '../domains/menu-grupo';
import {MenuItem}   from '../domains/menu-item';
import {ArbolNArio}   from '../domains/arbol-n-ario';


export class ConstructorPaginaService {

    pagina: Pagina;
    menuModulo: Menu;
    constructor() {
        var moduloName: string = this.getModuloName();
        var paginaName: string = this.getPaginaName();
        switch (moduloName) {
            case "planner":
                switch (paginaName) {
                    case "home":
                        this.setPaginaHomeInPlaner();
                        this.setHomeMenuModuloInPlanner();    
                    break;
                }
                break;
        }
    }
    
    /**
     * lo tendra que coger la url
     */
    private getModuloName(): string{
        var s: string = "";
        //alert(window.location.pathname);
        s = "planner";
        return s;
    }
    
    /**
     * lo tendra que coger la url
     */
    private getPaginaName(): string{
        var s: string = "";
        s = "home";
        return s;
    }
    
    private setPaginaHomeInPlaner(): void {
        var pagina: Pagina = {
            "breadCrumbItem": "Planner", "tienePasos": false, "menuModuloSelected": 2, "tituloPagina": "Home",
            "esOpenMenuPrincipal": false, "xWindowDimensionsingleThread": 800, "yWindowDimensionsingleThread": 400,
            "zIndexSingleThreadFlag": 1000, "lateralColapsado": false, "lateralColapsadoHover": false,
            "esDesplegadoPaginaSuperiorDerecha":false
        };
        this.pagina = pagina;
    }

    
    private setHomeMenuModuloInPlanner(): void {
        var menuItem: MenuItem = { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" };
        var arbolNario0_0 = new ArbolNArio(menuItem, 0, null);
        menuItem = { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" };
        var arbolNario0_1 = new ArbolNArio(menuItem, 1, null);
        var arbolesHijos: Array<ArbolNArio> = [arbolNario0_0, arbolNario0_1];
        menuItem = { "id": 1, "esPuente": true, "anchorText": "el pais", "href": "http://www.elpais.com" };
        var arbolNario0 = new ArbolNArio(menuItem, 0, arbolesHijos);

        menuItem = { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
        var arbolNario1 = new ArbolNArio(menuItem, 1, null);

        menuItem = { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" };
        var arbolNario2 = new ArbolNArio(menuItem, 2, null);

        menuItem = { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" };
        var arbolNario3 = new ArbolNArio(menuItem, 3, null);

        arbolesHijos = [arbolNario0, arbolNario1, arbolNario2, arbolNario3];
        menuItem = { "id": 0, "esPuente": true, "anchorText": "periodicos", "href": "null" };
        var arbolNarioRoot = new ArbolNArio(menuItem, 0, arbolesHijos);

        var menuGrupoModulo0: MenuGrupo = new MenuGrupo("Acontecimientos");
        menuGrupoModulo0.addLineaMenu(0, arbolNarioRoot);
        menuGrupoModulo0.addLineaMenu(1, arbolNarioRoot);
        menuGrupoModulo0.addLineaMenu(2, arbolNarioRoot);
        menuGrupoModulo0.addLineaMenu(3, arbolNarioRoot);
        menuGrupoModulo0.addLineaMenu(4, arbolNarioRoot);
        menuGrupoModulo0.addLineaMenu(5, arbolNarioRoot);


        var menuGrupoModulo1: MenuGrupo = new MenuGrupo("Devoluciones");
        menuGrupoModulo1.addLineaMenu(6, arbolNarioRoot);
        menuGrupoModulo1.addLineaMenu(7, arbolNarioRoot);

        var menuModulo: Menu = new Menu("MenuModulo PlannerHome");
        menuModulo.addLineaMenuGrupo(menuGrupoModulo0);
        menuModulo.addLineaMenuGrupo(menuGrupoModulo1);

        this.menuModulo = menuModulo;

    }

}