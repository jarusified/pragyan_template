!function($){
	var press =false;
	var menuOpen=false;
	window.onload=function(){
		document.addEventListener('keydown',onkeydown,false);
		$('.cluster-section').first().addClass('highlight');
		$('#sub-cluster-menu').children().first().addClass('highlight');
		$('.cluster-section').hover(function(){
			$(this).addClass('highlight');
		},function(){
			$(this).removeClass('highlight');
		});
		$('.sub-cluster-section').hover(function(){
			$(this).addClass('highlight');
		},function(){
			$(this).removeClass('highlight');
		});
		$('.cluster-section').bind('click',function(){
			$('.cluster-section').css({"left":"0%","opacity":"0","z-index":2,"width":"10%","position":"absolute"});
			$(this).siblings('#sub-cluster-menu').css({"left":"0%","opacity":"1","z-index":2,"width":"50%"});
			$(this).parent().siblings().css("display","block");
			$('.image-main').css("display","none");
			$('.cluster-section').css({"left":"25%","width":"75%"});
			$(this).parent().siblings('.cluster-content').css("display","block");
		});
		$('#toggle').click(function(){
			if(menuOpen){
				$('#sub-menu').css("opacity","0");
				menuOpen=false;
			}
			else{
				$("#sub-menu").css("opacity","1");
				menuOpen=true;
			}
		});
		$('.back').bind('click',function(){
			$('[id=sub-cluster-menu]').css({"left":"0%","opacity":"0","z-index":2,"width":"10%"});
			$('[id=sub-cluster-menu]').css({"left":"25%","width":"75%"});
			$('.image').css("display","none");
			$('.image-main').css("display","block");
			$('.cluster-section').css({"left":"15%","opacity":"1","z-index":2,"width":"50%","position":"static"});
			$('.cluster-content').css("display","none");
		})
		

	}

	function back(){
		$('#sub-menu').css("opacity","0");
		menuOpen=false;
		press=false;
		$('[id=sub-cluster-menu]').css({"left":"0%","opacity":"0","z-index":2,"width":"10%"});
		$('[id=sub-cluster-menu]').css({"left":"25%","width":"75%"});
		$('.image').css("display","none");
		$('.image-main').css("display","block");
		/*$('[id=sub-cluster-menu]').bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
			$('.cluster-section').css({"left":"15%","opacity":"1","z-index":2,"width":"50%","position":"static"});

		});*/
		$('.cluster-section').delay(100).css({"left":"15%","opacity":"1","z-index":2,"width":"50%","position":"static"});
		$('.cluster-content').css("display","none");


	}
	
	function onkeydown(event){
		if(!press){
			if(event.keyCode==37){
				press=true;
			}
			else if(event.keyCode==38){
				press=true;
			}
			else if(event.keyCode==39){
				press=true;
				
			}	
			else if(event.keyCode==40){
				press=true;
			}
			else if(event.keyCode==66 || event.keyCode==27){
				press=true;
				back();
			}
		}
	}
}(window.jQuery);