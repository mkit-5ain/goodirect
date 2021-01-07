//모듈 호출
startJs();

define(['jquery','jquery-ui','layout'], function($) {
	indexFunctions();
});

//index Functions
function indexFunctions() {
	//배너 슬라이드
	bxSliders('.main-slide-banner .main-banner-slider', 740, 0, 4, 'pager', true, true);
	bxSliders('.main-special-list .special-list-slider', 225, 20, 3, 'controls', true, true);
}
