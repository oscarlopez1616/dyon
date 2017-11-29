import {Component} from 'angular2/core';
import {SingleThreadComponent}   from '../../elementos/single-thread.component';
import {MultiThreadComponent}   from '../../elementos/multi-thread.component';

@Component({
    templateUrl: '../../../templates/template-0/html/router-outlets/planner/outlet-planner-home.html',
    directives: [SingleThreadComponent,MultiThreadComponent]
})
export class OutletPlannerHomeComponent /*extends Cacheable implements OutletCache*/ {
  
    popup0;
    popup1: any;
    constructor(){
        /*if(tieneOutletCache){
            this.cacheToOutlet();
        }else{//lo normal del constructor
            
        }*/
        //this.popup0 = window.open('http://192.168.1.25:3000/outlet-integrado.html','winname','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=350');
        //this.popup1 = window.open('http://localhost/','winname2','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=350');
        //setTimeout(()=>{this.popup0.close();}, 3000);
        //setTimeout(()=>{this.popup1.close();}, 6000);
        /*window.onbeforeunload =  function () {
                            alert("hola");
                        };*/
        
    }
   
    OutletToCache(arrayToCache: Array<any>): void{
        //arrayToCache.toCache();
    }
    
    cacheToOutlet(): void{
        //llenar todos los atributos cacheados
    }
    
    
}
