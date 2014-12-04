!function($){
	console.log('asf')
	var sections = $('.section');
	console.log(sections);
	var press =false;

	window.onload=function(){
		document.addEventListener('keydown',onkeydown,false);
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
	$('#toggle').click(function(){
		console.log('sdfg');
		$("#sub-menu").hide().fadeIn();
	});
	$('.section').click(function(){
		console.log('sd');
	});
}(window.jQuery);