!function($){
	var sections = $('.section');
	var press =false;
	var menuOpen=false;
	var mapper={
		0:"events-cluster",
		1:"workshops-cluster",
		2:"gl-cluster",
		3:"exhibitions-cluster",
		4:"sponsorships-cluster"
	};
	window.onload=function(){
		document.addEventListener('keydown',onkeydown,false);
			$('.section').bind('click',function(){
				var value =$(this).index();
				var selector = mapper[value];
				$('#menu').animate({top:"4%",opacity:0.3},200);
					console.log(selector);
				$('[id='+selector+']').css("display","block");
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