//UI Functions(공통)
function bxSliders(obj, width, margin, count, controller, auto, loop) {
	var options = {
		mode: 'horizontal',
		speed: 300,
		pause: 4000,
		touchEnabled: true,
		auto: auto,
		responsive: true,
		autoHover: false,
		minSlides: 1,
		slideWidth:width,
		slideMargin:margin,
		maxSlides: count,
		infiniteLoop:loop,
		moveSlides: 1
	};
	options['controls'] = (controller == 'controls') ? true:(controller == 'all') ? true:false;
	options['pager'] = (controller == 'pager') ? true:(controller == 'all') ? true:false;
	var slider = $(obj).bxSlider(options);
}

//quick scroll moving
function scrollMove(obj, speed, delay) {
	setTimeout(function() {
		$(obj).quickScroll({
			'animate': speed,
			'delay':delay
		});
	}, 200);
}

//최대 값 제어
function ieMaxLength() {
	$("input").bind("input", function() {
		var $this = $(this);
		if ( $this.val().length >= parseInt($this.attr("maxlength"),10) ) {
			$this.val($this.val().slice(0, $this.attr("maxlength")));
		}
	});
}

//top moving
function topMove(speed) {
	$('body,html').stop(true, true).animate({
		scrollTop: 0
	}, 100);
}

//placeholder 크로스브라우징
function iePlaceHolder() {
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
}

//select customer
function selectCus() {
	var SelClass = '.customSelect';
	var el = $(SelClass);
	var el2 = $('.customSelect2');
	el.find('select').each(function() {
		var $this = $(this),
		parentBox = $this.parents(SelClass),
		change = function() {
			$this.prev('.txt').text($this.val());
		},
		focusin = function() {
			$this.parents(SelClass).addClass('selected');
		},
		focusout = function() {
			$this.parents(SelClass).removeClass('selected');
		};

		$this.css({
			'height': parentBox.height() + 'px'
		}).on({
			'change': change,
			'focusin': focusin,
			'focusout': focusout
		});
	}).end().find('.txt').each(function() {
		var $this = $(this);
		$this.text($this.next('select').val());
	});
}
//tab Actions
function tabAction(obj, contents, active) {
	$(obj).find("li").click(function() {
		var $this = $(this);
		var activeTab = $this.attr("rel");
		$(obj).find('li').removeClass(active);
		$this.addClass(active);
		$(contents).hide();
		$("#" + activeTab).show();
	});
}

//list Accordion
function accordionList(obj, delay) {

	var actionClass = '.on-btn';

	$(obj).find(actionClass).click(function() {

		var $this = $(this);
		var showEl = '.board-desc-box';
		var activeClass = 'active';
		var hasActive = $this.hasClass(activeClass);

		$(obj).find(actionClass).removeClass(activeClass);
		$(obj).find(showEl).stop().slideUp(delay);

		if(!hasActive) {
			$this.addClass(activeClass);
			$this.parents('li').find(showEl).stop().slideDown(delay);
		}else{
			$this.removeClass(activeClass);
			$this.parents('li').find(showEl).stop().slideUp(delay);
		}

	});

}


//click Actions Functions

//전체 카테고리 온오프
function allCategory(thisEl) {
	var $this = $(thisEl);
	var $showEl = $('.all-sub-category');
	var $dimdEl = $('#cate-dimd-bg');
	$this.toggleClass('active');
	$dimdEl.toggleClass('hide');
	$showEl.toggle();
}
function allCateClose() {
	var $btEl = $('#sub-all-cate');
	var $showEl = $('.all-sub-category');
	var $dimdEl = $('#cate-dimd-bg');
	$btEl.removeClass('active');
	$dimdEl.addClass('hide');
	$showEl.hide();
}

//팝업 액션 전체
function popupActions(obj, layer, type, callLayer) {
	var $this = $(obj);
	var $layer = $('.' + layer);
	if(type == 'toggle') {
		$this.next('.' + layer).toggle();
	}else{
		//팝업 호출
		callLayer = callLayer + '.html';
		layerPop = '.' + layer;
		ajaxAppendCall('body', 'GET', callLayer, 'html', true, layerPopCallBack);
	}
}

//팝업 레이어 콜백
function layerPopCallBack() {
	var obj = $('.layer-pop-widget');
	var widget = $('.popup-widget');
	var closeBtn = $('#close-btn');
	var popMoveEl = $(".popup-title");

	var onOffDelay = 200;

	var appendPop = function() {
		obj.fadeIn(onOffDelay);
	};
	var removePop = function() {
		obj.fadeOut(onOffDelay);
		setTimeout(function() {
			obj.remove();
		},onOffDelay);
		scrollLock(false);
	};
	var popInnerStart = setTimeout(function() {
		popupInnerScroll();
	}, 300);

	//스크롤 고정
	appendPop();
	scrollLock(true);
	//팝업 폼 맥스값제어
	ieMaxLength();


	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			removePop();
		}
	});

	//윈도우창에 따른 스크롤 이벤트
	$(window).resize(function() {
		popupInnerScroll();
	});
	popInnerStart;


	closeBtn.click(function() {
		removePop();
		clearTimeout(popInnerStart);
	});


	widget.draggable({
		handle: popMoveEl
	});
}

//팝업창 스크롤 자동 적용
function popupInnerScroll() {
	var widgetEl = $('.popup-widget');
	var widgetHeight = widgetEl.outerHeight(true);
	var windowHeight = $(window).height();
	var scrollClass = 'pop-scroll';
	if(widgetHeight > windowHeight) {
		widgetEl.addClass(scrollClass);
	}else{
		widgetEl.removeClass(scrollClass);
	}
}

//팝업 닫기 이벤트 제어
function layerClose(thisEl, lock, history) {
	var layerClass = 'layer-pop-widget';
	var obj = $(thisEl).parents('.' + layerClass);

	var onOffDelay = 200;

	var removePop = function() {
		obj.fadeOut(onOffDelay);
		setTimeout(function() {
			obj.remove();
		},onOffDelay);
	};


	removePop();

	if(history == true) {
		window.history.back();
	}
	if(lock == false) {
		scrollLock(lock);
	}
}

//팝업스크롤 락
function scrollLock(close) {
	var scrollPx = $(document).scrollTop();
	if(close === true) {
		$('body').addClass('default');
	}else if(close === false){
		$('body').removeClass('default');
	}
}
