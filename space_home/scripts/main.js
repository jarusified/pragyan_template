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
			for(var i=0;i<5;i++){
				$('[id='+mapper[i]+']').css("display","none");
			}
			var value =$(this).index();
			var selector = mapper[value];
			$('#cluster-menu').hide().fadeIn();
			$('[id='+selector+']').hide().fadeIn(300);
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
				press=true;
			}
			else if(event.keyCode==39){
				press=true;
			}	
			else if(event.keyCode==66){
				press=true;
				back();
			}
		}
	}
	
	
}(window.jQuery);