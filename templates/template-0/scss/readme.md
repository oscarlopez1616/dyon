# tenemos que cambiar en _bootstrap-sprockets.scss de bootstrap
y dejarlo asi 
```sh
@function twbs-font-path($path) {
@return "../../../node_modules/bootstrap-sass/assets/fonts/"+$path;
}
 
@function twbs-image-path($path) {
@return "../../../node_modules/bootstrap-sass/assets/images/"+$path;
}
 
$bootstrap-sass-asset-helper: true;
```


# Cuando la interfaz se hace responsive en sd hay que tener en cuenta los siguiente:
aparecera la barra de navegacion identificada por el id "#pagina-asistente-responsive"
cuando se clicka en el boton que tiene icono "glyphicon-th" se desplega un nav con el class "selector-menus" para seleccionar Menu Modulo o Menu Principal.
-  esto hay que implementarlo con javascript quitando el display: none a al nav

También en javascript tenemos que hacer lo siguiente en esta barra tambien tenemos a la derecha otro boton identiicado por el gliphicon "glyphicon-collapse-down" que al clickar en el tendremos que quitan los  "hidden-sm hidden-xs" al div id="pagina-superior-derecha" y ademas añadirle al div id="pagina-centro" la clase "es-desplegado-pagina-superior-derecha".

Al colapsar la barra lateral, tendremos que añadir la clase "es-lateral-colapsado" a "#pagina"
