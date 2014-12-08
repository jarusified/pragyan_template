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
	var menu=['events','workshops','gl','exhibitions','sponsorships'];
	var index=[0,1,2,3,4];
	window.onload=function(){
		document.addEventListener('keydown',onkeydown,false);
		$('.section').bind('click',function(){
			if($('#menu').css("opacity")!=1.0){
				for(var i=0;i<5;i++){
					$('[id='+mapper[i]+']').css({"opacity":0,"display":"none"});
				}
				$('#menu').css('-webkit-transform', 'translateY(40%)');
				$('#menu').css('-moz-transform', 'translateY(40%)');
				$('#menu').css('-o-transform', 'translateY(40%)');
				$('#menu').css('-ms-transform', 'translateY(40%)');
				$('#menu').css('transform', 'translateY(40%)');
				$('#cluster-menu').css("visibility","hidden");
				var value =$(this).index();
				var selector = mapper[value];
				console.log(selector);
				$('[id='+selector+']').css({"opacity":1,"display":"inline-block"});
				$('#menu').bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
					$(this).css("opacity","0.4");
					$('#menu').css('-webkit-transform', 'translateY(4%)');
					$('#menu').css('-moz-transform', 'translateY(4%)');
					$('#menu').css('-o-transform', 'translateY(4%)');
					$('#menu').css('-ms-transform', 'translateY(4%)');
					$('#menu').css('transform', 'translateY(4%)');
					$('#cluster-menu').css("visibility","visible");
					//console.log(selector);
				});

			}
			else{
				$('#menu').css('-webkit-transform', 'translateY(4%)');
				$('#menu').css('-moz-transform', 'translateY(4%)');
				$('#menu').css('-o-transform', 'translateY(4%)');
				$('#menu').css('-ms-transform', 'translateY(4%)');
				$('#menu').css('transform', 'translateY(4%)');
				$('#menu').css("opacity","0.4");

				for(var i=0;i<5;i++){
					$('[id='+mapper[i]+']').css({"opacity":0,"display":"none"});
				}
				var value =$(this).index();
				var selector = mapper[value];
				$('[id='+selector+']').css({"opacity":1,"display":"inline-block"});
			}
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
		

	}

	function back(){
		$('#sub-menu').css("opacity","0");
		menuOpen=false;
		$("#menu").css({"top":"25%","opacity":"1.0"});
		for(var i=0;i<5;i++){
			$('[id='+mapper[i]+']').css({"opacity":0,"display":"none"});
		}
		press=false;
	}

	function toggleLeft(arr,index,count){
		for(i=0; i<count; i++)
			arr.unshift(arr.pop());
			index.unshift(index.pop());
		return arr;
	}

	function left(arr){
		$('#'+arr[0]).removeClass('section').addClass('hover');
		$('#'+arr[0]).bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
			$(this).removeClass('hover').addClass('section');
		});
		press=false;
	}

	function toggleRight(arr,index,count){
		for(i=0; i<count; i++)
			arr.push(arr.shift(arr[0]));
			index.push(index.shift(index[0]));
		return arr;
	}

	function right(arr){
		$('#'+arr[0]).removeClass('section').addClass('hover');
		$('#'+arr[0]).bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
			$(this).removeClass('hover').addClass('section');
		});
		press=false;
	}

	function toggleDown(value){
		$('#menu').css('-webkit-transform', 'translateY(4%)');
		$('#menu').css('-moz-transform', 'translateY(4%)');
		$('#menu').css('-o-transform', 'translateY(4%)');
		$('#menu').css('-ms-transform', 'translateY(4%)');
		$('#menu').css('transform', 'translateY(4%)');
		$('#menu').css("opacity","0.4");
		for(var i=0;i<5;i++){
			$('[id='+mapper[i]+']').css({"opacity":0,"display":"none"});
		}
		var selector = mapper[value];
		$('[id='+selector+']').css({"opacity":1,"display":"inline-block"});
		press=false;
	}

	function toggleUp(){
		$('#menu').css('-webkit-transform', 'translateY(40%)');
		$('#menu').css('-moz-transform', 'translateY(40%)');
		$('#menu').css('-o-transform', 'translateY(40%)');
		$('#menu').css('-ms-transform', 'translateY(40%)');
		$('#menu').css('transform', 'translateY(40%)');
		$('#menu').css('opacity',1);
		for(var i=0;i<5;i++){
			$('[id='+mapper[i]+']').css("display","none");
		}
		press=false;
	}
	
	function onkeydown(event){
		if(!press){
			if(event.keyCode==37){
				press=true;
				menu=toggleLeft(menu,index,1);
				left(menu);
			}
			else if(event.keyCode==38){
				press=true;
				toggleUp();
			}
			else if(event.keyCode==39){
				press=true;
				menu=toggleRight(menu,index,1);
				right(menu);
			}	
			else if(event.keyCode==40){
				press=true;
				toggleDown(index[0]);
			}
			else if(event.keyCode==66 || event.keyCode==27){
				press=true;
				back();
			}
		}
	}
}(window.jQuery);