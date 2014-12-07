!function($){
	var sections = $('.section');
	var press =false;
	var menuOpen=false;

	window.onload=function(){
		document.addEventListener('keydown',onkeydown,false);
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
	function back(){
			$('#sub-menu').delay(500).hide();
			menuOpen=false;
			$("#menu").css({"top":"25%","opacity":"1.0"});
			press=false;
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
			else if(event.keyCode==66){
				press=true;
				back();
			}
		}
	}
	
	
}(window.jQuery);