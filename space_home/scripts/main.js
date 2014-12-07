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
			$('#menu').css({"top":"4%","opacity":"0.3"});
			for(var i=0;i<5;i++){
				$('[id='+mapper[i]+']').css("display","none");
				//$('[id='+mapper[i]+']').css({"display":"none","opacity":"0"});
			}
			var value =$(this).index();
			var selector = mapper[value];
			$('[id='+selector+']').delay(500).hide().fadeIn(1000);
			//$('[id='+selector+']').css({"display":"block","opacity":"1","top":"-20%"});
		});
		$('#toggle').click(function(){
			if(menuOpen){
				$('#sub-menu').delay(500).hide();
				menuOpen=false;
			}
			else{
				$("#sub-menu").hide().fadeIn();
				menuOpen=true;
			}
		});
	}

	function back(){
			$('#sub-menu').delay(500).hide();
			menuOpen=false;
			$("#menu").css({"top":"25%","opacity":"1.0"});
			for(var i=0;i<5;i++){
				$('[id='+mapper[i]+']').css("display","none");
				//$('[id='+mapper[i]+']').css({"display":"none","opacity":"0"});
			}
			press=false;
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