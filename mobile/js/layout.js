//헤더 푸터 퀵매뉴 호출(공통 레이아웃) //추후 삭제
ajaxHtmlCall('#header','GET','../layout/header.html','html', true, headerFunctions);
ajaxHtmlCall('#footer','GET','../layout/footer.html','html', true, footerFunctions);
ajaxHtmlCall('#aside','GET','../layout/aside.html','html', true, asideFunctions);
ajaxHtmlCall('#footerMenu','GET','../layout/footerMenu.html','html', true, footerMenuFunctions);
// 퀵매뉴 호출
ajaxHtmlCall('#quick','GET','../layout/quick.html','html', true, quickFunctions);

$('#container').show();
controlFunctions();

//Layout Html CallBack Functions
function headerFunctions() {
	bxSliders('.slider-widget .header-bx-slider', 0, 5, 'controls', true, false);
	tabAction('.tab-nav-widget', '.basic-tab-contents', 'active');
}

function footerFunctions() {
	bxSliders('.slider-widget .footer-bx-slider', 0, 3, 'controls', true, true);
}
function quickFunctions() {
	scrollMove('#quick', 200, 0);
}

function asideFunctions() {
	tabAction('.tab-nav-widget', '.basic-tab-contents', 'active');
	$('.aside_btn, .aside_close').on('click',function(){
		var _fixLeft = $('.aside_menu').css('left');
		if(_fixLeft == '-300px'){
			$('.aside_menu').animate({
				'left' : 0
			}, 350);
			$(".opacity_wrap").append("<div class='dummybox'></div>");
			$(".dummybox").css({opacity:0.8});
			$('#wrap').addClass("overflow_y");
			$('.dummybox').addClass("aside_dummy");
		}else{
			$('.aside_menu').animate({
				'left' : '-300px'
			}, 350);
			$(".dummybox").remove();
			$('#wrap').removeClass("overflow_y");
			$('.dummybox').removeClass("aside_dummy");
		}
	});
}
function footerMenuFunctions() {
	var toggle = true;
	$('.fixed-input-toggle, .toggle_v_btn').on('click', function(event) {
		event.preventDefault();
		if (!toggle) {
			$('.fixed-input').animate({bottom: '-444px'}, 200);
			toggle = true
			$('#wrap').removeClass("overflow_y");
			$(".dummybox").remove();
			$(".fixed-input-toggle").removeClass('is-close');
		} else {
			$('.fixed-input').animate({bottom: '0'}, 200);
			toggle = false
			$(".opacity_wrap").append("<div class='dummybox'></div>");
			$('#wrap').addClass("overflow_y");
			$(".dummybox").css({opacity:0.8});
			$(".fixed-input-toggle").addClass('is-close');
		}
	});
}


//form element controller
function controlFunctions() {
	selectCus();
	//크로스브라우징용
	iePlaceHolder();
	ieMaxLength();
}
