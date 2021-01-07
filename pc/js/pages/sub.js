//모듈 호출
startJs();

define(['jquery','jquery-ui','layout'], function($) {
	subFunctions();
});

//subpage Functions
function subFunctions() {
	//서브 전체 탭 액션
	tabAction('.tab-nav-widget', '.basic-tab-contents', 'active');
	//굿팁 카테고리 슬라이드
	bxSliders('.goodtip-widget-inner .visual-cate-wrap ul', 100, 50, 6, 'controls', false, false);
	//아코디언 리스트
	accordionList('.board-list-toggle', 200);
}
