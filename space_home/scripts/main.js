!function($){
	var sections = $('.section');
	var press =false;
	var menuOpen=false;
	var mapper={
		0:"a",
		1:"b",
		2:"c",
		3:"d",
		4:"e"
	};
	window.onload=function(){
		document.addEventListener('keydown',onkeydown,false);
			$('.section').bind('click',function(){
				var value =$(this).index();
				var selector = mapper[value];
				$('#menu').animate({top:"4%",opacity:0.5},200);
				$("#cluster-menu").delay(100).queue(function(next){
					console.log($("#"+mapper[value]));
					$("div[id*=selector]").hide().fadeIn(function(){
						console.log($(this));
					});
					next();
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