;(function($){

    $.fn.quickScroll = function(options) {
        options = $.extend({}, $.fn.quickScroll.defaults , options);

        return this.each(function() {
            var aPosition = $(this).position();
            var node = this;

            $(window).scroll(function() {
                var _top = $(document).scrollTop();
                _top = (aPosition.top < _top) ? _top : aPosition.top;

                setTimeout(function () {
                    $(node).stop().animate({top: _top}, options.animate);
                }, options.delay);
            });
        });
    };

    $.fn.quickScroll.defaults = {
        'animate'  : 500,
        'delay'    : 500
    };

})(jQuery);
