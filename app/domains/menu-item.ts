export interface MenuItem {
    id: number;
    /**
    * @param {boolean} esPuente - identifica si no es un link clickable.
    * si es true simplemente es un categorizador de menu para dirigir al siguiente nivel, 
    * un MenuItem con esPuente = true no debe tener href.
    */
    esPuente: boolean;
    anchorText: string;
    href: string;
}
