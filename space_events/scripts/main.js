!function($){
	var press =false,menuOpen=false,level=false;
	var menu=["codeit","manigma","chillpill","amalgam","core-e","landscape","outofbox","robovigyan"];
	var state_define={
		"manigma":["manigma", "chillpill", "amalgam", "core-e", "landscape", "outofbox", "robovigyan", "codeit"],
		"chillpill":["chillpill", "amalgam", "core-e", "landscape", "outofbox", "robovigyan", "codeit", "manigma"],
		"amalgam":["amalgam", "core-e", "landscape", "outofbox", "robovigyan", "codeit", "manigma", "chillpill"],
		"core-e":["core-e", "landscape", "outofbox", "robovigyan", "codeit", "manigma", "chillpill", "amalgam"],
		"landscape":["landscape", "outofbox", "robovigyan", "codeit", "manigma", "chillpill", "amalgam", "core-e"],
		"outofbox":["outofbox", "robovigyan", "codeit", "manigma", "chillpill", "amalgam", "core-e", "landscape"],
		"robovigyan":["robovigyan", "codeit", "manigma", "chillpill", "amalgam", "core-e", "landscape", "outofbox"],
		"codeit":["codeit", "manigma", "chillpill", "amalgam", "core-e", "landscape", "outofbox", "robovigyan"]
	};
	var sub_menu=[];
	var mapper={
		0:"codeit",
		1:"manigma",
		2:"chillpill",
		3:"amalgam",
		4:"core-e",
		5:"landscape",
		6:"outofbox",
		7:"robovigyan"
	};
	var index_define={
		"codeit":[0,1,2,3,4,5,6,7],
		"manigma":[1,2,3,4,5,6,7,0],
		"chillpill":[2,3,4,5,6,7,0,1],
		"amalgam":[3,4,5,6,7,0,1,2],
		"core-e":[4,5,6,7,0,1,2,3],
		"landscape":[5,6,7,0,1,2,3,4],
		"outofbox":[6,7,0,1,2,3,4,5],
		"robovigyan":[7,0,1,2,3,4,5,6]
	};
	var index=[0,1,2,3,4,5,6,7];
	var search=false,mobile=false,control=true;

	$(document).ready(function(){

		var isMobile = {
		    Android: function() {
		        return /Android/i.test(navigator.userAgent);
		    },
		    BlackBerry: function() {
		        return /BlackBerry/i.test(navigator.userAgent);
		    },
		    iOS: function() {
		        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
		    },
		    Windows: function() {
		        return /IEMobile/i.test(navigator.userAgent);
		    },
		    any: function() {
		        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
		    }
		};
		
		$("#bg-music").prop("volume", 0.1);
		$('#escape-music').prop("volume", 0.1);

		window.onload = function(){
			$("#bg-music")[0].play();
			if(isMobile['any']()==true){
				mobile = true;
				$("#bg-music").remove();
			}
		}

		if(isMobile['any']()==true){
			mobile = true;
			$("#escape-music")[0].remove();
			$(".menu-sound").remove();
		}

		document.addEventListener('keydown',onkeydown,false);
			
		$("#slideshow > div:gt(0)").hide();
		if($('.sponsor-slider').css('display') == 'block')
			setInterval(function() { 
		  		$('#slideshow > div:first')
		    	.fadeOut(800)
			    .next()
			    .fadeIn(800)
			    .end()
			    .appendTo('#slideshow');
			},  2000);


		$('#sub-cluster-menu').children().first().addClass('highlight');

		$('.cluster-section').hover(function(){
			var item=$(this).parent().attr('id');
			menu=state_define[item];
			index=index_define[item];
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
			control=false;
			var item=$(this).parent().attr('id');
			menu=state_define[item];
			index=index_define[item];
			var section=$(this).parent().attr('id');
			var outer  =$('#'+section+'.outer');
			var inner  =$('#'+section+'.inner');
			$('.sub-cluster-menu').css("opacity","0");
			$('.image').css("display","none");
			$('.cluster-section').removeClass('highlight');
			$('.icon-glow').css("visibility","hidden");
			$('.cluster-content').removeClass('highlight');
			$('.icon-glow').removeClass('highlight');
			$('.icon-normal').removeClass('highlight');
			$(this).siblings('.icon-glow').css("visibility","visible");
			$(this).children('.icon-glow').css("visibility","visible");
			$('.cluster-section').css({"width":"56px","box-shadow":"none"});
			$(this).addClass('highlight');
			$('.inner').css({"opacity":"1","width":"0px"});
			$(inner).children().siblings('.cluster-content').css("display","block");
			$('.cluster-section p').css("opacity","0");
			$('.outer').css({"opacity":"1"})
			$(outer).children('.sub-cluster-menu').css({"opacity":"1","width":"25%","z-index":"3"});
			$(inner).children('.image').css("display","block");
			$('.image-main').css("display","none");
			$('.cluster-content').css("display","none");
			$(this).siblings('.cluster-content').css("display","block");
			menu1=[];
			level=true;
			var length= $(outer).children('.sub-cluster-menu').children().length;
			for(var i=0;i<length;i++){
				sub_menu[i]='sub-'+(i+1);
			}
			sub_index=[];
			for(var i=0;i<sub_menu.length;i++){
				sub_index[i]=i;
			}
			press=false;
		});
		$('.sub-cluster-section').bind('click',function(){
			$('.cluster-content').css("display","none");
			$('.sub-cluster-content').css("display","none");
			$(this).siblings('.sub-cluster-content').css("display","block");
		})
		
		$('#toggle').click(function(){
			if(menuOpen) 
				closeMenu();
			else 
				openMenu();
		});

		function ticker() {
		    $('#ticker li:first').slideUp(function() {
		        $(this).appendTo($('#ticker')).slideDown();
		    });
		}
		if($('.ticker').css('display') == 'block')
			setInterval(function(){ ticker(); }, 4000);
		
		$('.action-button').bind('click',function(){
            openLogin();
		});

		$('.search-trigger').bind('click',function(){
            openSearch();
		});
		$('.search-close').bind('click',function(){
            closeSearch();
		});

		$('#controls-guide-trigger').bind('click',function(){
			openHelp();
		});
		$('#controls-close').bind('click',function(){
			closeHelp();
        });

		$('.search-trigger').bind('click',function(){
            $('#search-box input').css('color', 'black');
            $('#search-overlay').fadeIn('500', function(){
		      	$('#search-box input').val('');
	            $('#search-box input').css('color', '#92CCFC');
		    });
		    search = true;
		});

		$('#controls-guide-trigger').bind('click',function(){
            $('#controls-guide').css('-webkit-transform', 'translateY(0px)');
			$('#controls-guide').css('-moz-transform', 'translateY(0px)');
			$('#controls-guide').css('-o-transform', 'translateY(0px)');
			$('#controls-guide').css('-ms-transform', 'translateY(0px)');
			$('#controls-guide').css('transform', 'translateY(0px)');
		});
		$('#controls-close').bind('click',function(){
            $('#controls-guide').css('-webkit-transform', 'translateY(400px)');
			$('#controls-guide').css('-moz-transform', 'translateY(400px)');
			$('#controls-guide').css('-o-transform', 'translateY(400px)');
			$('#controls-guide').css('-ms-transform', 'translateY(400px)');
			$('#controls-guide').css('transform', 'translateY(400px)');
        });


		$('.back').bind('click',function(){
			control=true;
			$('.sub-cluster-section').removeClass('highlight');
			$('.cluster-section').first().addClass('highlight');
			$('.cluster-section').css({"width":"250px"});
			$('.inner').css({"width":"100%","opacity":"1"});
			$('.outer').css({"opacity":"0","left":"18%"});
			$('.cluster-section p').css("opacity","1");
			$('.cluster-content').css("display","none");
			$('.sub-cluster-menu').css({"opacity":"0","width":"25%"});
			$('.image-main').css("display","block");
			$('.image').css("display","none");
			$('.icon-glow').css("visibility","hidden");
		});


	});

	function toggleUp(arr,index,count){
		for(i=0; i<count; i++)
			arr.unshift(arr.pop());
			index.unshift(index.pop());
		return arr;
	}

	function up(arr){
		for(var i=0;i<arr.length;i++){
			$('#'+arr[i]+'.inner').children('.cluster-section').removeClass('highlight');
		}
		$('#'+arr[0]+'.inner').children().addClass('highlight');
		press=false;
	}

	function toggleDown(arr,index,count){
		for(i=0; i<count; i++)
			arr.push(arr.shift(arr[0]));
			index.push(index.shift(index[0]));
		return arr;
	}

	function down(arr){
		for(var i=0;i<arr.length;i++){
			$('#'+arr[i]+'.inner').children('.cluster-section').removeClass('highlight');
		}
		$('#'+arr[0]+'.inner').children().addClass('highlight');
		press=false;
	}

	function down_sub(arr){
		for(var i=0;i<arr.length;i++){
			$('.'+arr[i]).children('.sub-cluster-section').removeClass('highlight');
			$('.'+arr[i]).children('.sub-cluster-content').css("display","none");
		}
		$('.cluster-content').css("display","none");

		$('.'+arr[0]).children('.sub-cluster-section').addClass('highlight');
		$('.'+arr[0]).children('.sub-cluster-content').css("display","block");
		press=false;
	}

	function toggleRight(val){
		section1 = mapper[val];
		menu1=[];
		outer  =$('#'+section1+'.outer');
		inner  =$('#'+section1+'.inner');
		$('.sub-cluster-menu').css("opacity","0");
		$('.image').css("display","none");
		$('.cluster-section').removeClass('highlight');
		$('.cluster-content').removeClass('highlight');
		$('.icon-glow').removeClass('highlight');
		$('.icon-normal').removeClass('highlight');
		$('.icon-glow').css("visibility","hidden");
		$(inner).children('.cluster-section').children('.icon-glow').css("visibility","visible");
		$(inner).children('.cluster-section').addClass('highlight');
		$('.cluster-section').css({"width":"56px","box-shadow":"none"});
		$('.inner').css({"opacity":"1","width":"0px"});
		$(inner).children().siblings('.cluster-content').css("display","block");
		$('.cluster-section p').css("opacity","0");
		$('.outer').css({"opacity":"1"})
		$(outer).children('.sub-cluster-menu').css({"opacity":"1","width":"25%","z-index":"3"});
		$(inner).children('.image').css("display","block");
		$('.image-main').css("display","none");
		$('.cluster-content').css("display","none");
		$(inner).children('.cluster-content').css("display","block");
		var length= $(outer).children('.sub-cluster-menu').children().length;
		var id=$(outer).children('.sub-cluster-menu').children('.sub').attr('class');
		for(var i=0;i<length;i++){
			menu1[i]='sub-'+(i);
		}
		press=false;
		return menu1;
	}

	function toggleleft(){
		$('.cluster-section').css({"width":"250px"});
		$('.inner').css({"width":"100%","opacity":"1"});
		$('.outer').css({"opacity":"0","left":"18%"});
		$('.cluster-section p').css("opacity","1");
		$('.cluster-content').css("display","none");
		$('.sub-cluster-menu').css({"opacity":"0","width":"25%"});
		$('.image-main').css("display","block");
		$('.image').css("display","none");
		$('.icon-glow').css("visibility","hidden");
		$('.sub-cluster-section').removeClass('highlight');
		press=false;
	}

	function changeURL(){
		var id = menu[0];
		$('.cluster-hover').each(function(){
			if(this.id.indexOf(id)!=-1 && $(this).children('a').length!=0)
				window.location.href = $(this).find('a')[0].href;
		});
	}
	
		/*Menu*/
	function openMenu(){
		$('#toggle button').hide();
		$('.breadcrumb').hide();
		$('#toggle .close').show();
		$("#sub-menu").removeClass('slideIn slideOut').addClass('slideIn');
		menuOpen=true;
	}
	function closeMenu(){
		$('#toggle button').show();
		$('.breadcrumb').show();
		$('#toggle .close').hide();
		$('#sub-menu').removeClass('slideIn slideOut').addClass('slideOut');
		menuOpen=false;	
	}

	/*Search*/
	function openSearch(){
		console.log('df');
		$('#search-box input').css('color', 'black');	
		$('#search-overlay').fadeIn('500', function(){
			$('#search-box input').val('');
			$('#search-box input').css('color', '#92CCFC');
      	});
	    search = true;
	}
	function closeSearch(){
		$('#search-overlay').fadeOut('300');
		search = false;
	}

	/*Sounds*/
	function muteSounds(keyCode){	
	  if(keyCode == 77){	
		if($('#bg-music')[0].muted == false)
			$('#bg-music')[0].muted = true;
		else
			$('#bg-music')[0].muted = false;
	  }
	  else if(keyCode == 69){
        if($('#escape-music')[0].muted == false){
			$('#escape-music')[0].muted = true;
			$('.menu-sound').each(function(){
				$(this)[0].muted = true;
			});
        }
		else{
			$('#escape-music')[0].muted = false;
			$('.menu-sound').each(function(){
				$(this)[0].muted = false;
			});
		}
	  }
	}

	/*Help*/
	function openHelp(){
		$('#controls-guide').css('-webkit-transform', 'translateY(0px)');
		$('#controls-guide').css('-moz-transform', 'translateY(0px)');
		$('#controls-guide').css('-o-transform', 'translateY(0px)');
		$('#controls-guide').css('-ms-transform', 'translateY(0px)');
		$('#controls-guide').css('transform', 'translateY(0px)');
	}
	function closeHelp(){		
        $('#controls-guide').css('-webkit-transform', 'translateY(400px)');
		$('#controls-guide').css('-moz-transform', 'translateY(400px)');
		$('#controls-guide').css('-o-transform', 'translateY(400px)');
		$('#controls-guide').css('-ms-transform', 'translateY(400px)');
		$('#controls-guide').css('transform', 'translateY(400px)');
	}

	function onkeydown(event){
		if(!press){
			if(search==false){
				if(event.keyCode==65)
					openMenu();

				if(event.keyCode==76)
					openLogin();

				if(event.keyCode==37){
					press=true;
					level=false;
					control=true;
					menu=state_define[menu[0]];
					index=index_define[menu[0]];
					toggleleft();
				}
				else if(event.keyCode==40){
					press=true;
					if(!level){
						menu=toggleDown(menu,index,1);
						down(menu);
					}
					else{
						sub_menu=toggleDown(sub_menu,sub_index,1);
						down_sub(sub_menu);
					}
				}
				else if(event.keyCode==39 && control){
					press=true;
					level=true;
					sub_index=[];
					sub_menu=toggleRight(index[0]);
					for(var i=0;i<sub_menu.length;i++){
						sub_index[i]=i;
					}
				}	
				else if(event.keyCode==38){
					press=true;
					if(!level){
						menu=toggleUp(menu,index,1);
						up(menu);
					}
					else{
						sub_menu=toggleUp(sub_menu,sub_index,1);
						down_sub(sub_menu);
					}
				}
				else if(event.keyCode==66 || event.keyCode==27){
					press=true;
					level=false;
				}
				if(event.keyCode == 83)
	        		openSearch();

				if(event.keyCode == 77 || event.keyCode == 69)
					muteSounds(event.keyCode);

				if(event.keyCode == 72)
					openHelp();
		  	}	
		  	else{
		  		if(event.keyCode == 27)
		  			closeSearch();
		  	}
		}
	}
}(window.jQuery);