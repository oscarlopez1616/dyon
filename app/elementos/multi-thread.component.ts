/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/jqueryui/jqueryui.d.ts" />

import {Component, Attribute, ViewEncapsulation, AfterViewInit}   from 'angular2/core';

declare var jQuery: JQueryStatic;

@Component({
    selector: "multi-thread",
    templateUrl: '../../templates/template-0/html/elementos/multi-thread.html',
    styleUrls: ['../../templates/template-0/css/multi-thread.css'],
    encapsulation: ViewEncapsulation.None,
})
/**
 * No esta sincronizado con angular2 porque el appendTo de dialog lo copia en otro en 
 * #dialog-contenedor por lo tanto cualquier cambio aqui hay que hacerlo con JQuery
 */
export class MultiThreadComponent implements AfterViewInit {
    id: number;
    titulo: string;
    width: number;
    height: number;
    htmlBody: string;
    constructor( @Attribute('data-id') id: number, @Attribute('data-titulo') titulo: string, @Attribute('data-width') width: number,
        @Attribute('data-height') height: number, @Attribute('data-htmlBody') htmlBody: string) {
        this.id = id;
        this.titulo = titulo;
        this.width = width;
        this.height = height;
        this.htmlBody = htmlBody;
    }
    
    onClickMenos(){
        jQuery("div[aria-describedby='dialog-" + this.id+"']").addClass("dialog-minimizado");
    }

    openDialog() {

        var dialogOptions = {
            autoOpen: true,
            appendTo: "#dialog-contenedor",
            width: this.width,
            height: this.height,
            modal: false,
            closeOnEscape: true,
            draggable: true,
            buttons: [
                {
                    text: "menos",
                    icons: {
                        primary: "ui-icon-heart"
                    },
                    click: ()=> {
                        this.onClickMenos();
                    }

                    // Uncommenting the following line would hide the text,
                    // resulting in the label being used as a tooltip
                    //showText: false
                }
            ]

        }
        jQuery("#dialog-" + this.id).dialog(dialogOptions);
    };

    
    
    ngAfterViewInit() {
        this.openDialog();
    }
}







