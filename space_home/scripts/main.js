!function($){
	var baseUrl="./../media/",
		progress = $('#percent'),
		loader = new PxLoader();
	var images=["bg.jpg","logo.png",
				"icons/Contacts.png",
				"icons/Contacts_Off.png",
				"icons/Contacts_On.png",
				"icons/Events.png",
				"icons/Events_Off.png",
				"icons/Events_On.png",
				"icons/Exhibitions.png",
				"icons/Exhibitions_Off.png",
				"icons/Exhibitions_On.png",
				"icons/GL.png",
				"icons/GL_Off.png",
				"icons/GL_On.png",
				"icons/Hospitality.png",
				"icons/Hospitality_Off.png",
				"icons/Hospitality_On.png",
				"icons/Infotainment.png",
				"icons/Infotainment_Off.png",
				"icons/Infotainment_On.png",
				"icons/Outreach.png",
				"icons/Outreach_Off.png",
				"icons/Outreach_On.png",
				"icons/PSR.png",
				"icons/PSR_Off.png",
				"icons/PSR_On.png",
				"icons/Sponsorships.png",
				"icons/Sponsorships_Off.png",
				"icons/Sponsorships_On.png",
				"icons/texture.png",
				"icons/texture2.png",
				"icons/Workshops.png",
				"icons/Workshops_Off.png",
				"icons/Workshops_On.png"
	];

	for(var i=0;i<images.length;i++){
		var pxImage = new PxLoaderImage(baseUrl+images[i]); 
       	pxImage.imageNumber = i + 1; 
 		loader.add(pxImage); 
	}

	loader.addProgressListener(function(e) { 
    	var completed=(e.completedCount/e.totalCount)*100; // calculates the percentage loaded
    	$progress.text(Math.floor(completed)); 
    	initialise(e.completedCount/e.totalCount); 
	});

	var press =false;
	var menuOpen=false, search=false;
	var animationEnd=false, activeMenu = 0;
	var mapper={
		0:"events-menu",
		1:"workshops-menu",
		2:"gl-menu",
		3:"exhibitions-menu",
		4:"sponsorships-menu"
	};
	var menu=['events','workshops','gl','exhibitions','sponsorships'];
	var state_define={
		"events":['events','workshops','gl','exhibitions','sponsorships'],
		"workshops":['workshops','gl','exhibitions','sponsorships','events'],
		"gl":['gl','exhibitions','sponsorships','events','workshops'],
		"exhibitions":['exhibitions','sponsorships','events','workshops','gl'],
		"sponsorships":['sponsorships','events','workshops','gl','exhibitions']
	}
	var index_define={
		"events":[0,1,2,3,4],
		"workshops":[1,2,3,4,0],
		"gl":[2,3,4,0,1],
		"exhibitions":[3,4,0,1,2],
		"sponsorships":[4,0,1,2,3]
	};
	var index=[0,1,2,3,4];
	var level=false;
	var count =0;
	$(document).ready(function(){
		
		$("#bg-music").prop("volume", 0.1);
		
		document.addEventListener('keydown',onkeydown,false);

		$("#slideshow > div:gt(0)").hide();
		setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(800)
		    .next()
		    .fadeIn(800)
		    .end()
		    .appendTo('#slideshow');
		},  2000);

		$('.section').hover(function(){
			$('.section').removeClass('hover');
			$('.section').removeClass('hover1');
			$(this).addClass('hover1');
			activeMenu = $(this).index();
			var item=$(this).attr('id');
			menu=state_define[item];
			index=index_define[item];
		});
		$('.section').bind('mouseout',function(){
		});

		$('.section').bind('click',function(){
			var item=$(this).attr('id');
			menu=state_define[item];
			index=index_define[item];	
			$('.section').removeClass('hover');
			$('.section').removeClass('hover1');
			if($('#menu').css("opacity")){
				$(this).addClass('hover1');
				$('#menu').css('-webkit-transform', 'translateY(-30%)');
				$('#menu').css('-moz-transform', 'translateY(-30%)');
				$('#menu').css('-o-transform', 'translateY(-30%)');
				$('#menu').css('-ms-transform', 'translateY(-30%)');
				$('#menu').css('transform', 'translateY(-30%)');

				$('.cluster-section').removeClass('cluster-hover');
				for(var j=0; j<5; j++)
					$('#'+$('#'+mapper[j]+' .cluster-section')[0].id).addClass('cluster-hover');

				var value =$(this).index();
				var selector = mapper[value];
				activeMenu = value;
				for(var i=0;i<5;i++){
					if(i!=value)
					  $('[id='+mapper[i]+']').css({"opacity":0,"display":"none"});
					else
					  $('[id='+mapper[i]+']').css({"display":"block"});	
				}
				$('[id='+selector+']').removeClass('fadeInDown fadeOut').addClass('fadeInDown');
				//$('[id='+selector+']').css('-webkit-transform', 'translateY(0%)');
				/*$('[id='+selector+']').css('-moz-transform', 'scale(0)');
				$('[id='+selector+']').css('-o-transform', 'scale(0)');
				$('[id='+selector+']').css('-ms-transform', 'scale(0)');
				$('[id='+selector+']').css('transform', 'scale(0)');*/
				$('#menu').bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
					//$(this).css("opacity","0.4");
					/*$('[id='+selector+']').css('-webkit-transform', 'scale(1)');
					$('[id='+selector+']').css('-moz-transform', 'scale(1)');
					$('[id='+selector+']').css('-o-transform', 'scale(1)');
					$('[id='+selector+']').css('-ms-transform', 'scale(1)');
					$('[id='+selector+']').css('transform', 'scale(1)');*/
					//$('[id='+selector+']').css('opacity', '1');
					//$('[id='+selector+']').css({"opacity":1, "display":"inline-block"});
				});


			}
		});
		$('#toggle').click(function(){
			if(menuOpen){
				$('#toggle button').show();
				$('#toggle .close').hide();
				console.log($('#toggle .close'));
				$('#sub-menu').removeClass('slideIn slideOut').addClass('slideOut');
				menuOpen=false;
			}
			else{
				$('#toggle button').hide();
				$('#toggle .close').show();
				$("#sub-menu").removeClass('slideIn slideOut').addClass('slideIn');
				menuOpen=true;
			}
		});
		

	});

	function back(){
		menuOpen=false;
		$("#menu").css("opacity","1.0");
		$('#menu').css('-webkit-transform', 'translateY(0%)');
		$('#menu').css('-moz-transform', 'translateY(0%)');
		$('#menu').css('-o-transform', 'translateY(0%)');
		$('#menu').css('-ms-transform', 'translateY(0%)');
		$('#menu').css('transform', 'translateY(0%)');

		$('.cluster-section').removeClass('cluster-hover');

		for(var i=0;i<5;i++){
			$('[id='+mapper[i]+']').css({"opacity":"0", 'display': 'none'});
			$('[id='+mapper[i]+']').removeClass('fadeInDown fadeOut').addClass('fadeOut');
			//else
			//	$('[id='+mapper[i]+']').css({"opacity":"0","display":"none"});
			//$('[id='+menu[i]+']').removeClass('hover1');

		}
		press=false;
		return menu;
	}

	function toggleLeft(arr,index,count){
		for(i=0; i<count; i++)
			arr.unshift(arr.pop());
			index.unshift(index.pop());
		return arr;
	}

	function left(arr){
		for (var i = 0; i < arr.length; i++) {
			if($('#'+arr[0]).hasClass('section')){
				if(i!=activeMenu && menuOpen==true){
					$('#'+arr[i]).removeClass('hover').addClass('section');
				    $('#'+arr[i]).removeClass('hover1').addClass('section');
				}
				else{
					$('#'+arr[i]).removeClass('hover').addClass('section');
				    $('#'+arr[i]).removeClass('hover1').addClass('section');
				}
			}
			else{
				$('#'+arr[i]).removeClass('cluster-hover');
			}
		};
		if($('#'+arr[0]).hasClass('section')){
			$('#'+arr[0]).addClass('hover');
			
		}
		else{
			$('#'+arr[0]).addClass('cluster-hover');
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
		for (var i = 0; i < arr.length; i++) {
			if($('#'+arr[0]).hasClass('section')){
				if(i!=activeMenu){
				  $('#'+arr[i]).removeClass('hover').addClass('section');
				  $('#'+arr[i]).removeClass('hover1').addClass('section');
				}
			}
			else{
				$('#'+arr[i]).removeClass('cluster-hover');
			}
		};
		if($('#'+arr[0]).hasClass('section')){
			$('#'+arr[0]).addClass('hover');
			
		}
		else{
			$('#'+arr[0]).addClass('cluster-hover');
		}
		press=false;
	}

	function toggleDown(value){
		$('#menu').css('-webkit-transform', 'translateY(-30%)');
		$('#menu').css('-moz-transform', 'translateY(-30%)');
		$('#menu').css('-o-transform', 'translateY(-30%)');
		$('#menu').css('-ms-transform', 'translateY(-30%)');
		$('#menu').css('transform', 'translateY(-30%)');

		$('.cluster-section').removeClass('cluster-hover');
		for(var j=0; j<5; j++)
			$('#'+$('#'+mapper[j]+' .cluster-section')[0].id).addClass('cluster-hover');
		
		var selector = mapper[value];
		for(var i=0;i<5;i++){
			if(i!=value)
			  $('[id='+mapper[i]+']').css({"opacity":0,"display":"none"});
			else
			  $('[id='+mapper[i]+']').css({"display":"block"});	
		}

		$('[id='+selector+']').removeClass('fadeInDown fadeOut').addClass('fadeInDown');
		
		$('#menu').bind('transitionend mozTransitionEnd webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
			/*$('[id='+selector+']').css('-webkit-transform', 'scale(1)');
			$('[id='+selector+']').css('-moz-transform', 'scale(1)');
			$('[id='+selector+']').css('-o-transform', 'scale(1)');
			$('[id='+selector+']').css('-ms-transform', 'scale(1)');
			$('[id='+selector+']').css('transform', 'scale(1)');*/
		});
		var length = $('[id='+selector+']').length;
		var id = $('[id='+selector+']').attr('id');
		menu1=[];
		for(var i=0;i<length;i++){
			menu1[i]=id;
		}
		$('#'+menu[0]).addClass('hover1');
		press=false;
		return menu1;
	}

	function toggleUp(){
		$('#menu').css('-webkit-transform', 'translateY(0%)');
		$('#menu').css('-moz-transform', 'translateY(0%)');
		$('#menu').css('-o-transform', 'translateY(0%)');
		$('#menu').css('-ms-transform', 'translateY(0%)');
		$('#menu').css('transform', 'translateY(0%)');
		$('#menu').css("opacity","1.0");

		$('.cluster-section').removeClass('cluster-hover');
		
		for(var i=0;i<5;i++){
			$('[id='+mapper[i]+']').css({"opacity":"0", 'display': 'none'});
			$('[id='+mapper[i]+']').removeClass('fadeInDown fadeOut').addClass('fadeOut');
		}

		press=false;
		return menu;
	}
	
	function onkeydown(event){
		console.log(event.keyCode);
		if(!press){
		  if(search==false){	
			if(event.keyCode==37){
				press=true;
				if(!level){
					menu=toggleLeft(menu,index,1);
					left(menu);
				}
				else{
					cluster_menu=toggleLeft(cluster_menu,cluster_index,1);
					left(cluster_menu);
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
					cluster_menu=toggleRight(cluster_menu,cluster_index,1);
					right(cluster_menu);
				}
			}	
			else if(event.keyCode==40 || event.keyCode==13){
				press=true;
				level=true;
				menu1=toggleDown(index[0]);
				elem=$('#'+menu1[0]);
				tag=$('#'+menu1[0]+'> div');
				cluster_menu=[];
				cluster_index=[];
				for(var i=0;i<$('#'+menu1[0]).children().length;i++){
					cluster_index[i]=i;
					cluster_menu[i]=tag[i].id;
				}
			}
			else if(event.keyCode==66 || event.keyCode==27){
				press=true;
				level=false;
				menu=back();
			}
	        if(event.keyCode == 83){
		      $('#search-box input').val('');
		      $('#search-overlay').fadeIn('500');
		      search = true;
		    }
		  }
		  else{
		  	if(event.keyCode == 27){
		      $('#search-overlay').fadeOut('300');
		      search = false;
		  	}
		  } 
		}
	}
}(window.jQuery);
