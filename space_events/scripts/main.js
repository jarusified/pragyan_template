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
			/*$('.cluster-section').css({"left":"0%","z-index":1,"width":"20%","box-shadow":"none"});
			$('.cluster-section').removeClass('highlight');
			$('.cluster-section p').css("opacity","0");
			$('[id=cluster-menu').css("display","none");
			$('.left-image').css("display","block");
			$('.hide').removeClass('hide').addClass('icon-glow');
			$('[id=sub-cluster-menu]').css("display","none");
			$(this).parent().siblings('#sub-cluster-menu').css("display","block");
			$(this).parent().siblings('#sub-cluster-menu').css({"left":"0%","opacity":"1","z-index":2,"width":"25%"});
			$('.image-main').css("display","none");
			$(this).parent().siblings('.cluster-content').css("display","block");*/
			var section=$(this).parent().parent().attr('id');
			var outer  =$('#'+section+'.outer');
			var inner  =$('#'+section+'.inner');

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
			$('[id=sub-cluster-menu]').css({"left":"0%","opacity":"0","z-index":1,"width":"10%"});
			$('[id=sub-cluster-menu]').css({"left":"50%","width":"50%","display":"none"});
			$('.image').css("display","none");
			$('.image-main').css("display","block");
			$('.cluster-section').css({"left":"0%","opacity":"1","z-index":2,"width":"50%"});
			$('.cluster-content').css("display","none");
			$('.cluster-section p').css("opacity","1");
			$('.cluster-section').first().addClass('highlight');
			$('[id=cluster-menu').css("display","block");
			$('.left-image').css("display","none");

		})
		

	}

	function back(){
		$('#sub-menu').css("opacity","0");
		menuOpen=false;
		press=false;
		$('[id=sub-cluster-menu]').css({"left":"0%","opacity":"0","z-index":1,"width":"10%"});
		$('[id=sub-cluster-menu]').css({"left":"50%","width":"75%","display":"none"});
		$('.image').css("display","none");
		$('.image-main').css("display","block");
		$('.cluster-section').delay(1000).css({"left":"15%","opacity":"1","z-index":2,"width":"50%","position":"static"});
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