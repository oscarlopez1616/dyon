/**
 * Toda la clase Arbol binaria esta implementada a un 90% pero queda pendiente 
 * la migracion a typescript esta mal hecha habiando fallos de consistencia en los siguientes siguientes puntos
 * hay que encontrar los pares en typescript para las siguientes funciones de php o emularlo con procedimientos propios.
 * global
 * array_intersect
 * array_merge 
 * array_unique
 * array_diff
 * 
 * 
 * 
 */

/*

Secuencia para crear el arbol correspondiente a (1i2)u((3i4)u(5i6)) Nota: omitimos la creacion de objetos conjunto nos referimos a el con su idConjunto para optimizar la velocidad general al hacer comprobaciones y generar el arbol, nomovemos mas datos que los necesarios.

nodo11= (6,null,null);

nodo10= (5,null,null);

nodo9= (i,nodo11,nodo10);

nodo8= (3,null,null);

nodo7= (4,null,null);

nodo6= (i,nodo8,nodo7);

nodo5= (u,nodo9,nodo6);

nodo4= (1,null,null);

nodo3= (2,null,null);

nodo2= (i,nodo4,nodo3);

Root= (u,nodo2,nodo5);

*/

// Nodo del arbol binario

export class ArbolBinario {

    private data: any;  //data puede ser un objeto conjunto o un string que represente la operacion. Los conjuntos solo pueden estar en hojas del mismo modo que las operaciones en raices.

    private left: ArbolBinario;

    private right: ArbolBinario;



    /* constructor */

    constructor(data: any, left: ArbolBinario, right: ArbolBinario) {

        this.data = data;

        this.left = left;

        this.right = right;

    }



    /**

    * Metodo para obtener los datos de un nodo

    **/

    getData(): any { return this.data; }



    /**

    * Retorna una referencia al hijo izquierda de este nodo, si no existe devuelve null

    **/

    getLeft(): ArbolBinario { return this.left; }



    /**

    * Retorna una referencia al hijo derecho de este nodo, si no existe devuelve null

    **/

    getRight(): ArbolBinario { return this.right; }



    /**

    * Retorna los datos desde el nodo más profundo que se puede acceder desde este nodo por

    * la izquierda de los enlaces.

    **/

    getLeftmostData(): any {

        var leftMostData: any;
        (this.left == null) ? leftMostData = this.data : leftMostData = this.left.getLeftmostData();



        return leftMostData;

    }



    /**

    * @ Return - los datos desde el nodo más profundo que se puede acceder desde este nodo por

    * la derecha de los enlaces.

    **/

    getRightmostData(): any {

        var rightMostData: any;
        (this.right == null) ? rightMostData = this.data : rightMostData = this.right.getRightmostData();



        return rightMostData;

    }



    /**

    * retorna - true si el nodo es hoja or false si el nodo no es hoja.

    **/

    isLeaf(): boolean {

        return (this.left == null) && (this.right == null);

    }



    /**

    * modificamos data y conjunto del nodo

    **/

    setData(newData: any): void { this.data = newData; }



    /**

    * Método de modificación para establecer el vínculo con el hijo de la izquierda de este nodo.

    * Una referencia al nodo que debe aparecer como el hijo de la izquierda de este nodo

    * (O la referencia null si no hay ningún hijo para este nodo)

    * Postcondición:

    * El enlace con el hijo de la izquierda de este nodo se ha establecido en newleft.

    * Cualquier otro nodo (que solía ser el hijo de la izquierda) ya no está conectado a

    * Este nodo.

    **/

    setLeft(newLeft: ArbolBinario): void { this.left = newLeft; }



    /**

    * Método de modificación para establecer el vínculo con el hijo de la derecha de este nodo.

    * Una referencia al nodo que debe aparecer como el hijo de la izquierda de este nodo

    * (O la referencia null si no hay ningún hijo para este nodo)

    * Postcondición:

    * El enlace con el hijo de la izquierda de este nodo se ha establecido en newRigth.

    * Cualquier otro nodo (que solía ser el hijo de la izquierda) ya no está conectado a

    * Este nodo.

    **/

    setRight(newRight: ArbolBinario): void { this.right = newRight; }



    /**

    * Contar el número de nodos en un árbol binario.

    * Una referencia a la raíz de un árbol binario (que puede ser

    * Un árbol vacío donde la fuente es nulo)

    * @ Retorna el número de nodos en el árbol binario

    **/

    treeSize(): number {

        var left_sum: number = 0;
        var right_sum: number = 0;
        (this.left != null) ? left_sum = this.left.treeSize() : left_sum = 0;

        (this.right != null) ? right_sum = this.right.treeSize() : right_sum = 0;



        return 1 + left_sum + right_sum;

    }


    preOrden(nodo: ArbolBinario, preOrdenData: Array<any>): void {
        if (nodo == null) return;
        preOrdenData.push(nodo.data);
        this.preOrden(nodo.getLeft(),preOrdenData); //recorre subarbol izquierdo
        this.preOrden(nodo.getRight(),preOrdenData); //recorre subarbol derecho
    }
    
    inOrden(nodo: ArbolBinario, inOrdenData: Array<any>): void {
        if (nodo == null) return;
        this.inOrden(nodo.getLeft(),inOrdenData); //recorre subarbol izquierdo
        inOrdenData.push(nodo.data);
        this.inOrden(nodo.getRight(),inOrdenData); //recorre subarbol derecho
    }
    
    postOrden(nodo: ArbolBinario, postOrdenData: Array<any>): void {
        if (nodo == null) return;
        this.postOrden(nodo.getLeft(),postOrdenData); //recorre subarbol izquierdo
        this.postOrden(nodo.getRight(),postOrdenData); //recorre subarbol derecho
        postOrdenData.push(nodo.data);
    }




    compruebaArbolPostorden(flag: boolean, numNodos: number, cont: number): boolean {

        //hay que llamarla siempre con true;

        var cont: number = 0;
        var flag: boolean = true;
        if (this.treeSize() != numNodos && cont === 0) return flag = false; // por si hay conjuntos seguidos

        cont++;

        if (this.left != null && flag) flag = this.left.compruebaArbolPostorden(flag, numNodos, cont);

        if (this.right != null && flag) flag = this.right.compruebaArbolPostorden(flag, numNodos, cont);

        if (this.isLeaf() && flag) if (this.data == "i" || this.data == "-" || this.data == "u") flag = false; //si es hoja miramos que no sea ni intersecion ni union ni resta

        if (this.data == "i" || this.data == "-" || this.data == "u") if (this.left == null || this.right == null) flag = false; //si es operación comprobamos que tenga hijo izquierdo e hijo derecho



        return flag;

    }


    //la migracion a typescript esta mal hecha habiando fallos de consistencia en los siguientes siguientes puntos
    //hay que encontrar los pares en typescript para las siguientes funciones de php o emularlo con procedimientos propios.
    //global
    //array_intersect
    //array_merge 
    //array_unique
    //array_diff
    //    calcularArbol(conjuntoAgenda_arr,expresionConjunto_arr)
    //
    //    {
    //
    //        //busco operacion y solo recorro el hilo de postorden. que lo tengo en un vector. busco operacion y tiro dos para tras para saber conjunto y creo otra vez el vector
    //
    //        /*
    //
    //        ejemplo:
    //
    //        0i(1u2)
    //
    //        [0][1][2][u][i]
    //
    //        [0][3][i]
    //
    //        [4]
    //
    //        */
    //
    //        /*global*/ postorderTraversal_arr;   
    //
    //        var flag: boolean =true;
    //
    //        var expresionIterada_arr: Arrat<any> = expresionConjunto_arr;
    //
    //        var operacionAnterior: string   ="";       //controla en modo "comprobar ambiguedad antes" la propiedad asociativa mirar documento consideraciones Power Expresion.odt para entender.
    //
    //        var conjuntoAnterior1: string   ="";
    //
    //        var conjuntoAnterior2: string   ="";
    //
    //        var operacion: string           ="";
    //
    //        var ambiguedad: boolean          =false;    //por defecto la expresion no es ambigua
    //
    //        var transitividad: boolean       =false;
    //        
    //        var valor_arr: Array<any>;
    //
    //        //imprimeVector(postorderTraversal_arr);
    //
    //        
    //
    //        var i:number =0;
    //
    //        while(i<count(postorderTraversal_arr) && flag && (!ambiguedad || transitividad))
    //
    //        {
    //
    //            //busco operacion y ejecuto operacion con loc conjuntos que estan en posicion -1 y posicion -2 ejempolo: 03i es 0i3 donde 0 es conjunto 1 y 3 conjunto 2 y operacion i
    //
    //            if(count(postorderTraversal_arr) == 1) flag=false;  //cuando solo quede una operacion
    //
    //            if(postorderTraversal_arr[i] == "i" || postorderTraversal_arr[i] == "u" || postorderTraversal_arr[i] == "-")
    //
    //            {
    //
    //                operacionAnterior=operacion;
    //
    //                operacion        =postorderTraversal_arr[i];
    //
    //                conjunto1        =postorderTraversal_arr[i-2];
    //
    //                conjunto2        =postorderTraversal_arr[i-1];
    //
    //                i=0;
    //
    //                switch(operacion)
    //
    //                {
    //
    //                    case "i":
    //
    //                        valor_arr=array_intersect(conjuntoAgenda_arr[conjunto1],conjuntoAgenda_arr[conjunto2]);
    //
    //                        break;
    //
    //                    case "u":
    //
    //                        valor_arr=array_unique(array_merge(conjuntoAgenda_arr[conjunto1],conjuntoAgenda_arr[conjunto2]));
    //
    //                        break;
    //
    //                    case "-":
    //
    //                        valor_arr=array_diff(conjuntoAgenda_arr[conjunto1],conjuntoAgenda_arr[conjunto2]);
    //
    //                        break;
    //
    //                }
    //
    //                
    //
    //                offsetActual=count(conjuntoAgenda_arr);
    //
    //                conjuntoAgenda_arr[offsetActual]=valor_arr;  //metemos la operacion en el siguiente indice libre de la matriz
    //
    //                arbolBinarioPostOrderTraversal_arr_temp=array();
    //
    //                expresionIterada_arr_temp=array();
    //
    //                
    //
    //                var cont: number =0;
    //
    //                miniArbolCambio_arr[0]=conjunto1;
    //
    //                miniArbolCambio_arr[1]=operacion;
    //
    //                miniArbolCambio_arr[2]=conjunto2;
    //
    //                
    //
    //                if(!(conjuntoAnterior1 == conjunto1 || conjuntoAnterior2 == conjunto2 || conjuntoAnterior1 == conjunto2 || conjuntoAnterior2 == conjunto1))
    //
    //                {
    //
    //                    transitividad    =false;
    //
    //                    operacionAnterior="";  //controla en modo "comprobar ambiguedad antes" la propiedad asociativa mirar documento consideraciones Power Expresion.odt para entender.
    //
    //                    conjuntoAnterior1="";
    //
    //                    conjuntoAnterior2="";
    //
    //                }
    //
    //                
    //
    //                for(j=0;j<count(expresionIterada_arr);j++)
    //
    //                {
    //
    //                    // va iterando el vector que contiene la expresion de conjuntos pasando de los caracteres "(" ")"  parentesis
    //
    //                    adder=true;
    //
    //                    if(miniArbolCambio_arr[0] == expresionIterada_arr[j])
    //
    //                    {
    //
    //                        k=j+1;
    //
    //                        while(expresionIterada_arr[k] == "(" || expresionIterada_arr[k] == ")") k++;
    //
    //                        
    //
    //                        if(miniArbolCambio_arr[1] == expresionIterada_arr[k])
    //
    //                        {
    //
    //                            k++;
    //
    //                            while(expresionIterada_arr[k] == "(" || expresionIterada_arr[k] == ")") k++;
    //
    //                            
    //
    //                            if(miniArbolCambio_arr[2] == expresionIterada_arr[k])
    //
    //                            {
    //
    //                                expresionIterada_arr_temp[]=offsetActual;
    //
    //                                adder=false;   // para que el if con adder actue como else
    //
    //                                
    //
    //                                if(transitividad && miniArbolCambio_arr[1] != operacionAnterior)
    //
    //                                {
    //
    //                                    ambiguedad        =true;
    //
    //                                    transitividad     =false;
    //
    //                                    conjuntoAgenda_arr="ambigua";
    //
    //                                    return conjuntoAgenda_arr;
    //
    //                                } 
    //
    //                                
    //
    //                                if((expresionIterada_arr[j-1] == "(" && expresionIterada_arr[k+1] == ")" && j > 0) || (j == 0))
    //
    //                                {
    //
    //                                    // j>0 por si es el principio de la expresion
    //
    //                                    ambiguedad=false;
    //
    //                                } else {
    //
    //                                    ambiguedad=true;
    //
    //                                    if(miniArbolCambio_arr[1] == "-")
    //
    //                                    {
    //
    //                                        conjuntoAgenda_arr="ambigua";
    //
    //                                        return conjuntoAgenda_arr;
    //
    //                                    } else if(miniArbolCambio_arr[1] == "i" || miniArbolCambio_arr[1] == "u") {
    //
    //                                        transitividad=true;
    //
    //                                    }
    //
    //                                }
    //
    //                                j=k;
    //
    //                            }
    //
    //                        }
    //
    //                    }
    //
    //                    
    //
    //                    if(adder) expresionIterada_arr_temp[]=expresionIterada_arr[j];
    //
    //                }
    //
    //                expresionIterada_arr=expresionIterada_arr_temp;
    //
    //            
    //
    //                miniArbolCambio_arr[1]=conjunto2;
    //
    //                miniArbolCambio_arr[2]=operacion;
  
    //                
    //
    //                for(j=0;j<count(postorderTraversal_arr);j++)
    //
    //                {
    //
    //                    // va iterando el vector que contiene el recorrido en Postorden
    //
    //                    if(miniArbolCambio_arr[0] == postorderTraversal_arr[j] && miniArbolCambio_arr[1] == postorderTraversal_arr[j+1] && miniArbolCambio_arr[2] == postorderTraversal_arr[j+2])
    //
    //                    {
    //
    //                        arbolBinarioPostOrderTraversal_arr_temp[]=offsetActual;
    //
    //                        j=j+2;
    //
    //                    } else {
    //
    //                        arbolBinarioPostOrderTraversal_arr_temp[]=postorderTraversal_arr[j];
    //
    //                    }
    //
    //                }
    //
    //                postorderTraversal_arr=arbolBinarioPostOrderTraversal_arr_temp;
    //
    //            }
    //
    //            i++;
    //
    //        }
    //
    //        
    //
    //        return conjuntoAgenda_arr; 
    //
    //    }


    

}