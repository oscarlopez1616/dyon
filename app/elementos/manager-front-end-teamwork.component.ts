import {Component, Injector, ChangeDetectorRef}   from 'angular2/core';
import {DesplegableSuperiorDerecha}   from '../domains/desplegable-superior-derecha';
import {MensajeChatTeamwork}   from '../domains/mensaje-chat-teamwork';

@Component({
    selector: "manager-front-end-teamwork",
    templateUrl: '../../templates/template-0/html/elementos/manager-front-end-teamwork.html',
    styleUrls: ['../../templates/template-0/css/elementos/manager-front-end-teamwork.css']
})

export class ManagerFrontEndTeamworkComponent  extends DesplegableSuperiorDerecha{
    nombreEmisor: string;
    mensajes: Array<MensajeChatTeamwork>;

    constructor(injector: Injector,private _changeDetectionRef : ChangeDetectorRef) {
        super(injector);
        this.nombreEmisor = "oscar";
        this.mensajes = [];
    }

    addMensaje(cuerpoMensaje: string): void {
        this.mensajes.push({ 'emisor': this.nombreEmisor, 'cuerpo': cuerpoMensaje });
        this._changeDetectionRef.detectChanges();
    } 
 
}