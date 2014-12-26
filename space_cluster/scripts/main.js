!function($){
	var press =false,menuOpen=false;
	menu=["events","gl","exhibitions","infotainment","outreach","psr","hospitality","sponsorships","contacts"];
	var state_define={
		"events":["events", "gl", "exhibitions", "infotainment", "outreach", "psr", "hospitality", "sponsorships", "contacts"],
		"gl":["gl", "exhibitions", "infotainment", "outreach", "psr", "hospitality", "sponsorships", "contacts", "events"],
		"exhibitions":["exhibitions", "infotainment", "outreach", "psr", "hospitality", "sponsorships", "contacts", "events", "gl"],
		"infotainment":["infotainment", "outreach", "psr", "hospitality", "sponsorships", "contacts", "events", "gl", "exhibitions"],
		"outreach":["outreach", "psr", "hospitality", "sponsorships", "contacts", "events", "gl", "exhibitions", "infotainment"],
		"psr":["psr", "hospitality", "sponsorships", "contacts", "events", "gl", "exhibitions", "infotainment", "outreach"],
		"hospitality":["hospitality", "sponsorships", "contacts", "events", "gl", "exhibitions", "infotainment", "outreach", "psr"],
		"sponsorships":["sponsorships", "contacts", "events", "gl", "exhibitions", "infotainment", "outreach", "psr", "hospitality"],
		"contacts":["contacts", "events", "gl", "exhibitions", "infotainment", "outreach", "psr", "hospitality", "sponsorships"]
	};
	var mapper={
		0:"events",
		1:"gl",
		2:"exhibitions",
		3:"infotainment",
		4:"outreach",
		5:"psr",
		6:"hospitality",
		7:"sponsorships",
		8:"contacts"
	};
	var index_define={
		"events":[0,1,2,3,4,5,6,7,8],
		"gl":[1,2,3,4,5,6,7,8,0],
		"exhibitions":[2,3,4,5,6,7,8,0,1],
		"infotainment":[3,4,5,6,7,8,0,1,2],
		"outreach":[4,5,6,7,8,0,1,2,3],
		"psr":[5,6,7,8,0,1,2,3,4],
		"hospitality":[6,7,8,0,1,2,3,4,5],
		"sponsorships":[7,8,0,1,2,3,4,5,6],
		"contacts":[8,0,1,2,3,4,5,6,7]
	};
	var index=[0,1,2,3,4,5,6,7,8];
	var search=false,mobile=false;

	$(document).ready(function(){
		var	menu=["events","gl","exhibitions","infotainment","outreach","psr","hospitality","sponsorships","contacts"];
		var state_define={
		"events":["events", "gl", "exhibitions", "infotainment", "outreach", "psr", "hospitality", "sponsorships", "contacts"],
		"gl":["gl", "exhibitions", "infotainment", "outreach", "psr", "hospitality", "sponsorships", "contacts", "events"],
		"exhibitions":["exhibitions", "infotainment", "outreach", "psr", "hospitality", "sponsorships", "contacts", "events", "gl"],
		"infotainment":["infotainment", "outreach", "psr", "hospitality", "sponsorships", "contacts", "events", "gl", "exhibitions"],
		"outreach":["outreach", "psr", "hospitality", "sponsorships", "contacts", "events", "gl", "exhibitions", "infotainment"],
		"psr":["psr", "hospitality", "sponsorships", "contacts", "events", "gl", "exhibitions", "infotainment", "outreach"],
		"hospitality":["hospitality", "sponsorships", "contacts", "events", "gl", "exhibitions", "infotainment", "outreach", "psr"],
		"sponsorships":["sponsorships", "contacts", "events", "gl", "exhibitions", "infotainment", "outreach", "psr", "hospitality"],
		"contacts":["contacts", "events", "gl", "exhibitions", "infotainment", "outreach", "psr", "hospitality", "sponsorships"]
	};
	var mapper={
		0:"events",
		1:"gl",
		2:"exhibitions",
		3:"infotainment",
		4:"outreach",
		5:"psr",
		6:"hospitality",
		7:"sponsorships",
		8:"contacts"
	};
	var index_define={
		"events":[0,1,2,3,4,5,6,7,8],
		"gl":[1,2,3,4,5,6,7,8,0],
		"exhibitions":[2,3,4,5,6,7,8,0,1],
		"infotainment":[3,4,5,6,7,8,0,1,2],
		"outreach":[4,5,6,7,8,0,1,2,3],
		"psr":[5,6,7,8,0,1,2,3,4],
		"hospitality":[6,7,8,0,1,2,3,4,5],
		"sponsorships":[7,8,0,1,2,3,4,5,6],
		"contacts":[8,0,1,2,3,4,5,6,7]
	};
	var index=[0,1,2,3,4,5,6,7,8];

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



		$('.cluster-section').hover(function(){
			var item=$(this).parent().attr('id');
			menu=state_define[item];
			index=index_define[item];
			$(this).addClass('highlight');
		},function(){
			$(this).removeClass('highlight');
		});

		$('.cluster-section').bind('click',function(){
			var item=$(this).parent().attr('id');
			menu=state_define[item];
			console.log(menu);
			index=index_define[item];
			$('.cluster-content').css("display","none");
			$(this).siblings('.cluster-content').css("display","block");
			$(this).addClass('highlight');
			$('.icon-glow').css({"display":"none","visibility":"hidden"});
			$(this).siblings('.icon-glow').css({"display":"block","visibility":"visible"});
		});
		
		$('#toggle').click(function(){
			if(menuOpen){
				$('#toggle button').show();
				$('.breadcrumb').show();
				$('#toggle .close').hide();
				$('#sub-menu').removeClass('slideIn slideOut').addClass('slideOut');
				menuOpen=false;
			}
			else{
				$('#toggle button').hide();
				$('.breadcrumb').hide();
				$('#toggle .close').show();
				$("#sub-menu").removeClass('slideIn slideOut').addClass('slideIn');
				menuOpen=true;
			}
		});

		function ticker() {
		    $('#ticker li:first').slideUp(function() {
		        $(this).appendTo($('#ticker')).slideDown();
		    });
		}
		if($('.ticker').css('display') == 'block')
			setInterval(function(){ ticker(); }, 4000);
	

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

	});

	function toggleUp(arr,index,count){
		for(i=0; i<count; i++)
			arr.unshift(arr.pop());
			index.unshift(index.pop());
		return arr;
	}

	function up(arr){
		for(var i=0;i<arr.length;i++){
			$('#'+arr[i]).children('.cluster-section').removeClass('highlight');
			$('#'+arr[i]).children('.cluster-content').css("display","none");
			$('#'+arr[i]).children('.icon-glow').css({"visibility":"hidden","display":"none"});
		}
		$('#'+arr[0]).children().addClass('highlight');
		$('#'+arr[0]).children('.icon-glow').css({"visibility":"visible","display":"block"});
		$('#'+arr[0]).children('.cluster-content').css("display","block");
		$('#'+arr[0]).children('.cluster-content').removeClass('highlight');
		$('#'+arr[0]).children('.icon-glow').removeClass('highlight');
		$('#'+arr[0]).children('.icon-normal').removeClass('highlight');
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
			$('#'+arr[i]).children('.cluster-section').removeClass('highlight');
			$('#'+arr[i]).children('.cluster-content').css("display","none");
			$('#'+arr[i]).children('.icon-glow').css({"visibility":"hidden","display":"none"});
		}
		$('#'+arr[0]).children().addClass('highlight');
		$('#'+arr[0]).children('.icon-glow').css({"visibility":"visible","display":"block"});
		$('#'+arr[0]).children('.cluster-content').css("display","block");
		$('#'+arr[0]).children('.cluster-content').removeClass('highlight');
		$('#'+arr[0]).children('.icon-glow').removeClass('highlight');
		$('#'+arr[0]).children('.icon-normal').removeClass('highlight');
		press=false;
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


	function changeURL(){
		var id = menu[0];
		$('.cluster-hover').each(function(){
			if(this.id.indexOf(id)!=-1 && $(this).children('a').length!=0)
				window.location.href = $(this).find('a')[0].href;
		});
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

	/*Login*/
	function openLogin(){

	}

	function onkeydown(event){
		if(!press){
			if(search==false){
				if(event.keyCode==65)
					openMenu();

				if(event.keyCode==76)
					openLogin();

				if(event.keyCode==40){
					press=true;
					menu=toggleDown(menu,index,1);
					down(menu);
				}
				else if(event.keyCode==38){
					press=true;
					menu=toggleUp(menu,index,1);
					up(menu);
				}
				else if(event.keyCode==66 || event.keyCode==27){
					press=true;
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