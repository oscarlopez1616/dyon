// Close APP
// Función NWjs para cerrar en modo ventana ejecutable

 /*var GUI = require('nw.gui');
  function closefunc(){
	 GUI.App.closeAllWindows();
	 GUI.App.quit();
  }*/

// Resizing 
// Open-Closing lateral panel depending on width
// =============================================
//function adaptWidth() {
//	  if ( $(window).width()<=1260){
//                        if ( $("#pagina-contenedor").not('lateral-colapsado')){
//                                $("#pagina-contenedor").addClass('lateral-colapsado');
//                        }
//			
//	  }else {
//		  if ( $(window).width()>=1280){
//			 if ( $("#pagina-contenedor").hasClass('lateral-colapsado')){
//                                $("#pagina-contenedor").removeClass('lateral-colapsado');
//                        }
//		  }
//	  }
//};
//adaptWidth(); // Call function on initialize  
//$(window).resize(adaptWidth); // Call function on resize


// jQueryUI Dialog + jquery-dialogextend
// =====================================
var dialog_index = 0;
function opendialog(id_dialog) {
	 var this_dialog_id = dialog_index;
	 var dialogOptions = {
		    "autoOpen": false,
			"appendTo" : "#multithread-contenedor",
			"width" : 370,
            "height" : 250,
            "modal" : false,
            "closeOnEscape" : true,
            "draggable" : true,
            "position" : { my: "center center", at: "center-"+dialog_index+"0 center-"+dialog_index+"0" },
	 		"beforeClose" : function(evt, dlg){ set_dialog_index(this_dialog_id);}
	 }
	 var dialogExtendOptions = {
            "closable" : true,
            "maximizable" : false,
            "minimizable" : true,
		    "minimizeLocation" : "right",
		    "dblclick" : "minimize"
	};
	$(id_dialog).dialog(dialogOptions).dialogExtend(dialogExtendOptions);
    $(id_dialog).dialog('open');
    dialog_index += 1;
 };
 /* opendialog( "#dialog1" );*/

 

 
 function set_dialog_index(lastdialog_index) {
	  dialog_index = lastdialog_index; 
 }
 
 
// Dropdown right menu buttons
// =====================================
 
 // Show/hide desplegable on click
function topDesplegable (id_drop){
	if ( $("#desplegable"+id_drop).hasClass('opened')){
		$( "#desplegable"+id_drop ).removeClass('opened');
		$( "#top-button"+id_drop ).removeClass('active');

	}else{
		window.max_apt = 4;
		var i = 1;
		for (i=1;i<=max_apt;i++){
			if (i!==id_drop){
				$( "#desplegable"+i ).removeClass('opened');
				$( "#top-button"+i ).removeClass('active');
			}
		}
		$( "#desplegable"+id_drop ).addClass('opened');
		$("#top-button"+id_drop).addClass('active');
	}
	
}
// Hide desplegable on leave
$( "#pagina-superior-derecha" )
.mouseleave(function() {
	var i = 1;
	for (i=1;i<=window.max_apt;i++){
			$("#desplegable"+i).removeClass('opened');
			$("#top-button"+i).removeClass('active');
	}
 });


// Lateral Menu
// ========================================

// Lateral mouseover - Adding .lateral-hover on hovering #lateral.lateral-colapsado
//$( "#lateral" )
//.mouseenter(function() {
//	if ( $("#pagina-contenedor").hasClass('lateral-colapsado')){
//		$("#pagina-contenedor").addClass('lateral-hover');
//	}
//
// });
//// Lateral mouseout - Removing .lateral-hover on leaving #lateral-colapsado
//$( "#lateral" )
//.mouseleave(function() {
//		if ($( "#pagina-contenedor").hasClass('lateral-colapsado')){
//			$("#pagina-contenedor").removeClass('lateral-hover');
//		}
// });


// App Button Dropdown
// ==============================================

// Toggle Open/close App Button Dropdown
//function moduloDesplegable(){
//	if (   $( "#desplegable-modulos").hasClass('opened') ){
//		$( "#desplegable-modulos").addClass( "closed" );
//		$( "#desplegable-modulos").removeClass ("opened");
//	}else{
//		$( "#desplegable-modulos").removeClass('closed');
//		$( "#desplegable-modulos").addClass('opened');
//	}
//};
//// Hide moduloDesplegable on mouseleave (calls moduloDesplegable function forcing close)
//$( "#desplegable-modulos-contenedor" )
//	.mouseleave(function() {
//	if ( $( "#desplegable-modulos").hasClass('opened')){
//		moduloDesplegable();
//		$("#lateral").removeClass('active');
//	}
// });
//// Toggle open/close moduloDesplegable on click (calls moduloDesplegable function)
//$( ".boton-modulos" )
//	.click(function() {
//		moduloDesplegable();
// });

// Toggle 'collapsed' class on #pagina-contenedor function
// ======================================================
//function toggleLateralColapsado() 
// {
//	if ( $("#pagina-contenedor").hasClass('lateral-colapsado') ){
//		$("#pagina-contenedor").removeClass('lateral-colapsado');
//	}else{
//		$("#pagina-contenedor").addClass('lateral-colapsado');
//	}
//}
// Toggle class opened/closed generic function
// ======================================================
function toggle_opened_closed(element) 
 {
	if ( $(element).hasClass('opened') ){
		$(element).removeClass('opened');
		$(element).addClass('closed');
	}else{
		$(element).removeClass('closed');
		$(element).addClass('opened');
	}
}
// SingleThread
// ======================================================

var singlethread_num = 0; 

// Showing a Singlethread of top of any other, changing z-index
// of desactivador just below active singlethread and above any other
function showSinglethread(w,h){
	var singlethread = $("#singlethread"+singlethread_num);
	if (singlethread!=null){
		singlethread.removeClass('active');
	};
	singlethread_num+=1;
	$("#desactivador").css({
	      "z-index": (900+singlethread_num*100),
	      "visibility": "visible"
	    });

	var medida_lateral=parseInt($("#lateral").css("width"),10);
	singlethread = $("#singlethread"+singlethread_num);
	singlethread.addClass('active');
	singlethread.css({
	      "margin-top": (-h/2)+"px",
	      "margin-left": ((medida_lateral-w)/2)+"px",
	      "width": w + "px", 
	      "height": h + "px",
	      "visibility": "visible"
		});
}
// Hiding the active Singlethread. If there is some other, changing z-index 
// of desactivador just below last singlethread.
function hideSinglethread(){
    var singlethread = $("#singlethread"+singlethread_num);
    singlethread.css( "visibility" , "hidden");
    singlethread.removeClass('active');
    singlethread_num-=1;
    singlethread = $("#singlethread"+singlethread_num);
    if (singlethread!=null){
    	singlethread.addClass('active');
    };
	if (singlethread_num==0){
		$("#desactivador").css( "visibility" , "hidden"); 
	}else{
		$("#desactivador").css( "z-index" , (900+singlethread_num*100));
	}
}

