//모듈 호출
startJs();

define(['jquery','jquery-ui','layout'], function($) {
	subFunctions();
});

//subpage Functions
function subFunctions() {
	//서브 전체 탭 액션
	tabAction('.tab-nav-widget', '.basic-tab-contents', 'active');
	tabAction('.ft_tab_widget', '.ft_tab_contents', 'active');
	//굿팁 카테고리 슬라이드
	bxSliders('.goodtip-widget-inner .visual-cate-wrap ul', 0, 4, 'controls', false, false);
	bxSliders('.search-slider-box', 20, 1, 'controls', false, false);
	//아코디언 리스트
	accordionList('.board-list-toggle', 200);

	$(function () {
		$(".cate-list-wrap li").slice(0, 4).show();
		$(".list_more_btn").on('click', function (e) {
			e.preventDefault();
			$(".cate-list-wrap li:hidden").slice(0, 1).slideDown();
			if ($(".cate-list-wrap li:hidden").length == 0) {
				$("#load").fadeOut('slow');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top
			}, 1000);
		});
	});
}
