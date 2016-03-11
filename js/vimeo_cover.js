var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

$(document).ready(function(){
	indepth_sizeAdjust(true);	 
	 
	var ventana_alto = $(window).height();
	var ventana_ancho = $(window).width();
	
	$(".vimeoFrame").css({
		"width": ventana_ancho+"px",
		"height": ventana_alto+"px"	
	});
	
	$(".vimeo").css({
		"width": (ventana_ancho+150)+"px",
		"height": (ventana_alto+100)+"px"	
	})

	 
	var ventana_alto = $(window).height();
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android'){
		$('#indepth_cover_view').css("position","absolute");
    }else{
    	$('#indepth_cover').css("height",(ventana_alto)+"px");    	
    	if(ventana_alto>600){
	 		$('.indepth_break').css("height",ventana_alto+"px");
	 		$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 		}
    }    
    if(navigator.platform == 'iPad'){
	    $("#indepth_parallax_back").css("background-attachment", "initial");
	    console.log("ipad")
    }
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
	
	 var ventana_alto = $(window).height();
	var ventana_ancho = $(window).width();
	
	$(".vimeoFrame").css({
		"width": ventana_ancho+"px",
		"height": ventana_alto+"px"	
	});
	
	$(".vimeo").css({
		"width": (ventana_ancho+150)+"px",
		"height": (ventana_alto+100)+"px"	
	})
	var ventana_alto = $(window).height();
    	$('#indepth_cover').css("height",(ventana_alto)+"px");
    	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",ventana_alto+"px");
	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    { 
    }else{
    	var ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
});
