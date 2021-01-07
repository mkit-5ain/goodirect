//모듈 호출
startJs('');

define(['jquery','jquery-ui','layout'], function($) {
	indexFunctions();
});

//index Functions
function indexFunctions() {
	//배너 슬라이드
	bxSliders('.main-slide-banner .main-banner-slider', 0, 1, 'pager', true, true);
	bxSliders('.main-special-list .special-list-slider', 20, 2, 'controls', true, true);

	tabAction('.tab-nav-widget', '.basic-tab-contents', 'active');
}
