!function($){
	var sections = $('.section');
	var press =false;
	var menuOpen=false;

	window.onload=function(){
		document.addEventListener('keydown',onkeydown,false);
			$('.section').bind('click',function(){
				$('#menu').animate({top:"4%",opacity:0.05},500,function(){
					$("#box").hide().fadeIn();
					$('#switch-menu').delay(400).queue(function(next){
						$(this).hide().fadeIn();
						next();
					});
				});
		});
		$('#toggle').click(function(){
			if(menuOpen){
				$('#sub-menu').hide();
				menuOpen=false;
			}
			else{
				$("#sub-menu").hide().fadeIn();
				menuOpen=true;
			}
		});
	}

	function onkeydown(event){
		if(!press){
			if(event.keyCode==37){
				console.log('sdf');
				press=true;
			}
			else if(event.keyCode==39){
				console.log('ef');
				press=true;
			}
		}
	}
	
	
}(window.jQuery);