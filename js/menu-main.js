$(window).on('scroll' , function(){
	if($(window).scrollTop()){
		$('nav').addClass('small');
	}else {
		$('nav').removeClass('small');
	}
});

$(function(){
	$(".fa-times").hide();
	$(".fa-bars").click(function(){
		$(this).hide();
		$(".fa-times").show();
		$("#mob-menu").css("left","0px");
		$(".back-menu-shadow").addClass("open-back-menu-shadow");
	});

	$(".fa-times").click(function(){
		hideMenuMobile();
	});

	$(".back-menu-shadow").click(function(){
		hideMenuMobile();
	});

	function hideMenuMobile()
	{
		$(".fa-times").hide();
		$(".fa-bars").show();
		$("#mob-menu").css("left","-90%");
		$(".back-menu-shadow").removeClass("open-back-menu-shadow");
	}
	getWidth();
	
	function getWidth(){
		var vpwidth;
		vpwidth 	= window.innerWidth;
		if(vpwidth >= 740)
		{
			hideMenuMobile();
		}
	}

	window.addEventListener('resize',getWidth);

});

