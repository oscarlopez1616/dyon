import {ArbolNArio} from './arbol-n-ario';
import {MenuItem} from './menu-item';


describe('ArbolNArio', () => {
    it('tiene data dado en el constructor', () => {
        let arbolNArio = new ArbolNArio('datos', 0, null);
        expect(arbolNArio.getData()).toEqual('datos');
    });

    it('tiene data dado en el constructor', () => {
        let arbolNArio = new ArbolNArio('datos', 1, null);
        expect(arbolNArio.getIdNode()).toEqual(1);
    });

    it('Altura ArbolNario es correcta ?', () => {

        let menuItem: MenuItem = { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" };
        let arbolNario5 = new ArbolNArio(menuItem, 0, null);
        menuItem = { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" };
        let arbolNario6 = new ArbolNArio(menuItem, 1, null);
        let arbolesNarios: Array<ArbolNArio> = [arbolNario5, arbolNario6];
        menuItem = { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" };
        let arbolNario2 = new ArbolNArio(menuItem, 0, arbolesNarios);

        menuItem = { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
        let arbolNario3 = new ArbolNArio(menuItem, 1, null);

        menuItem = { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" };
        let arbolNario4 = new ArbolNArio(menuItem, 2, null);

        menuItem = { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" };
        let arbolNario7 = new ArbolNArio(menuItem, 3, null);

        arbolesNarios = [arbolNario2, arbolNario3, arbolNario4, arbolNario7];
        menuItem = { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" };
        let arbolNarioRoot = new ArbolNArio(menuItem, 0, arbolesNarios);
        let traversalOrdenData: Array<any> = [];
        let altura: number = arbolNarioRoot.getAltura(arbolNarioRoot);

        expect(altura).toEqual(2);
    });

    it('Recorrido Preorden Funciona es correcto tanto el en Array por Immersion como en una funcion callback dada ?', () => {

        let menuItem: MenuItem = { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" };
        let arbolNario5 = new ArbolNArio(menuItem, 0, null);
        menuItem = { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" };
        let arbolNario6 = new ArbolNArio(menuItem, 1, null);
        let arbolesNarios: Array<ArbolNArio> = [arbolNario5, arbolNario6];
        menuItem = { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" };
        let arbolNario2 = new ArbolNArio(menuItem, 0, arbolesNarios);

        menuItem = { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
        let arbolNario3 = new ArbolNArio(menuItem, 1, null);

        menuItem = { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" };
        let arbolNario4 = new ArbolNArio(menuItem, 2, null);

        menuItem = { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" };
        let arbolNario7 = new ArbolNArio(menuItem, 3, null);

        arbolesNarios = [arbolNario2, arbolNario3, arbolNario4, arbolNario7];
        menuItem = { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" };
        let arbolNarioRoot = new ArbolNArio(menuItem, 0, arbolesNarios);
        let traversalOrdenData: Array<any> = [];

        let callbackPreordenArray: Array<ArbolNArio> = [];

        arbolNarioRoot.preOrden(arbolNarioRoot, traversalOrdenData, (data: ArbolNArio): void => {
            callbackPreordenArray.push(data);
        }
        );


        let preOrdenData: Array<MenuItem> = [{ "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" },
            { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" },
            { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" },
            { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" },
            { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" },
            { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" },
            { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" }
        ];
        expect(traversalOrdenData).toEqual(preOrdenData);

        let preOrdenDataCallBack: Array<MenuItem> = [{ "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" },
            { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" },
            { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" },
            { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" },
            null,
            { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" },
            { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" },
            { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" },
            null
        ];
        
        let callbackPreordenArrayOfMenuItem: Array<any> = [];
        for (var i: number = 0; i < callbackPreordenArray.length; i++) {
            try {
                callbackPreordenArrayOfMenuItem.push(callbackPreordenArray[i].getData());
            }
            catch (err) {
                callbackPreordenArrayOfMenuItem.push(null);
            }
        }
        expect(callbackPreordenArrayOfMenuItem).toEqual(preOrdenDataCallBack);
    });

    it('Recorrido InOrden Funciona es correcto ?', () => {

        let menuItem: MenuItem = { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" };
        let arbolNario5 = new ArbolNArio(menuItem, 0, null);
        menuItem = { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" };
        let arbolNario6 = new ArbolNArio(menuItem, 1, null);
        let arbolesNarios: Array<ArbolNArio> = [arbolNario5, arbolNario6];
        menuItem = { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" };
        let arbolNario2 = new ArbolNArio(menuItem, 0, arbolesNarios);

        menuItem = { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
        let arbolNario3 = new ArbolNArio(menuItem, 1, null);

        menuItem = { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" };
        let arbolNario4 = new ArbolNArio(menuItem, 2, null);

        menuItem = { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" };
        let arbolNario7 = new ArbolNArio(menuItem, 3, null);

        arbolesNarios = [arbolNario2, arbolNario3, arbolNario4, arbolNario7];
        menuItem = { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" };
        let arbolNarioRoot = new ArbolNArio(menuItem, 0, arbolesNarios);
        let traversalOrdenData: Array<any> = [];
        arbolNarioRoot.inOrden(arbolNarioRoot, traversalOrdenData);
        let inOrdenData: Array<MenuItem> = [
            { "id": 4, "esPuente": false, "anchorText": "la ser", "href": "http://www.cadenaser.com" },
            { "id": 1, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" },
            { "id": 5, "esPuente": false, "anchorText": "los 40", "href": "http://www.cadena40.com" },
            { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" },
            { "id": 2, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" },
            { "id": 3, "esPuente": false, "anchorText": "publico", "href": "http://www.publico.com" },
            { "id": 6, "esPuente": false, "anchorText": "la razon", "href": "http://www.la-razon.com" }
        ];
        expect(traversalOrdenData).toEqual(inOrdenData);
    });

    it('Recorrido PostOrden Funciona es correcto ?', () => {
        let menuItem: MenuItem = { "id": 3, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" };
        let arbolNario2 = new ArbolNArio(menuItem, 0, null);
        menuItem = { "id": 4, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" };
        let arbolNario3 = new ArbolNArio(menuItem, 1, null);
        let arbolesNarios: Array<ArbolNArio> = [arbolNario2, arbolNario3];
        menuItem = { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" };
        let arbolNarioRoot = new ArbolNArio(menuItem, 0, arbolesNarios);
        let traversalOrdenData: Array<any> = [];
        arbolNarioRoot.postOrden(arbolNarioRoot, traversalOrdenData);
        let postOrdenData: Array<MenuItem> = [{ "id": 3, "esPuente": false, "anchorText": "el pais", "href": "http://www.elpais.com" },
            { "id": 4, "esPuente": false, "anchorText": "el mundo", "href": "http://www.elmundo.com" },
            { "id": 0, "esPuente": false, "anchorText": "periodicos", "href": "http://www.eventos-barcelona.com" }
        ];
        expect(traversalOrdenData).toEqual(postOrdenData);
    });


})