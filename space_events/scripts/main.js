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
			var section=$(this).parent().attr('id');
			var outer  =$('#'+section+'.outer');
			var inner  =$('#'+section+'.inner');
			$('.sub-cluster-menu').css("opacity","0");
			$('.image').css("display","none");
			$('.cluster-section').removeClass('highlight');
			$('.icon-glow').css("visibility","hidden");
			$(this).siblings('.icon-glow').css("visibility","visible");
			$(this).children('.icon-glow').css("visibility","visible");
			$(this).addClass('highlight');
			$('.cluster-section').css({"width":"40px","box-shadow":"none"});
			$('.inner').css({"opacity":"1","left":"0%","width":"0px"});
			$(inner).children().siblings('.cluster-content').css("display","block");
			$('.cluster-section p').css("opacity","0");
			$('.outer').css({"left":"0%","opacity":"1"})
			$(outer).children('.sub-cluster-menu').css({"opacity":"1","width":"25%","z-index":"3"});
			$(inner).children('.image').css("display","block");
			$('.image-main').css("display","none");
			$('.cluster-content').css("display","none");
			$(this).siblings('.cluster-content').css("display","block");
		});
		$('.sub-cluster-section').bind('click',function(){
			$('.cluster-content').css("display","none");
			$(this).siblings('.sub-cluster-content').css("display","block");
		})
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
			$('.cluster-section').first().addClass('highlight');
			$('.cluster-section').css({"width":"250px","box-shadow":"inset 4px 0 10px #68A1CE, inset -20px 0 30px #122c36, 6px -6px 12px -7px #A0DDFF"});
			$('.inner').css({"width":"100%","opacity":"1"});
			$('.outer').css({"opacity":"0","left":"25%"});
			$('.cluster-section p').css("opacity","1");
			$('.cluster-content').css("display","none");
			$('.sub-cluster-menu').css({"opacity":"0","left":"0%","width":"25%"});
			$('.image-main').css("display","block");
			$('.image').css("display","none");
			$('.icon-glow').css("visibility","hidden");

		});
		

	}

	function back(){
		$('#sub-menu').css("opacity","0");
		menuOpen=false;
		press=false;
		$('[id=sub-cluster-menu]').css({"left":"0%","opacity":"0","z-index":2,"width":"10%"});
		$('[id=sub-cluster-menu]').css({"left":"50%","width":"75%","display":"none"});
		$('.image').css("display","none");
		$('.image-main').css("display","block");
		$('.cluster-section').delay(1000).css({"left":"15%","opacity":"1","z-index":1,"width":"50%","position":"static"});
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