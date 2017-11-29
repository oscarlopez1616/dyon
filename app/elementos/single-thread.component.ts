import {Component, Attribute}   from 'angular2/core';


@Component({
    selector: "single-thread",
    templateUrl: '../../templates/template-0/html/elementos/single-thread.html',
    styleUrls:['../../templates/template-0/css/elementos/single-thread.css']
})
export class SingleThreadComponent {


    public id: number;
    public titulo: string;
    public htmlBody:  string;
    public htmlFooter: string;
    constructor(@Attribute('data-id') id: number,
        @Attribute('data-titulo')titulo: string, @Attribute('data-htmlBody')htmlBody: string,
        @Attribute('data-htmlFooter')htmlFooter: string) {
        this.id = id;
        this.titulo = titulo;
        this.htmlBody = htmlBody;
        this.htmlFooter = htmlFooter;
    }

}