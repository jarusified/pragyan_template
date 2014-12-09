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
	var level=false;
	var count =0;
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
			if($('#'+arr[0]).hasClass('section')){
			$('#'+arr[0]).removeClass('section').addClass('hover');
			$('#'+arr[0]).bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
				$(this).removeClass('hover').addClass('section');
			});
		}
		else{
			$('#'+arr[0]).removeClass('cluster-section').addClass('hover');
			$('#'+arr[0]).bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
				$(this).removeClass('hover').addClass('cluster-section');
			});
		}
		press=false;
	}

	function toggleRight(arr,index,count){
		for(i=0; i<count; i++)
			arr.push(arr.shift(arr[0]));
			index.push(index.shift(index[0]));
		return arr;
	}

	function right(arr){
		if($('#'+arr[0]).hasClass('section')){
			$('#'+arr[0]).removeClass('section').addClass('hover');
			$('#'+arr[0]).bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
				$(this).removeClass('hover').addClass('section');
			});
		}
		press=false;
	}

	function cluster(arr,pos,elem,dir){
		console.log(elem);
		elem.removeClass('cluster-section').addClass('hover');
		elem.bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
			$(this).removeClass('hover').addClass('cluster-section');
		});
		press=false;
		if(dir){
			elem=elem.next();
		}
		else{
			elem=elem.prev();
		}
		return elem;

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
		var length = $('[id='+selector+']').length;
		var id = $('[id='+selector+']').attr('id');
		menu1=[];
		for(var i=0;i<length;i++){
			menu1[i]=id;
		}
		press=false;
		return menu1;
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
		return menu;
	}
	
	function onkeydown(event){
		if(!press){
			if(event.keyCode==37){
				press=true;
				if(!level){
					menu=toggleLeft(menu,index,1);
					left(menu);
				}
				else{
					count++;
					pos=count%menu1.length;
					elem=cluster(menu1,pos,elem,dir);
										dir=false;

				}
			}
			else if(event.keyCode==38){
				press=true;
				level=false;
				menu=toggleUp();
			}
			else if(event.keyCode==39){
				press=true;
				if(!level){
					menu=toggleRight(menu,index,1);
					right(menu);
				}
				else{
					count++;
					pos=count%menu1.length;
					dir=true;
					elem=cluster(menu1,pos,elem,dir);
				}
			}	
			else if(event.keyCode==40){
				press=true;
				level=true;
				menu1=toggleDown(index[0]);
				elem=$('#'+menu1[0]);
			}
			else if(event.keyCode==66 || event.keyCode==27){
				press=true;
				back();
			}
		}
	}
}(window.jQuery);