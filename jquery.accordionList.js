/*
 * name: accordionList - jQuery Plugin
 * version: 0.5
 * @requires jQuery v1.10 or later
 *
 * contributing author: John Nguyen
 * source: https://github.com/nguyenj/accordion-list
 * Copyright 2013 John Nguyen
 * 
 */
 
(function($) {
$.fn.accordionList = function (options) {
    var defaults;

    defaults = {
        title: '.title',
        description: '.description',
        currentClass: 'current',
        slideSpeed: 400,
        onAfter: function (el) {}
    };

    options = $.extend({}, defaults, options);

    return this.each(function () {
        var $container = $(this);
        if ($container.length) {

            var $title = $container.find(options.title);
            var $descriptions = $container.find(options.description);

            $descriptions.not(':first').hide().end()
                .first().parent().addClass(options.currentClass);
            $title.on('click', function () {
                var $this = $(this);
                var isCurrent = $this.parent().hasClass(options.currentClass);
                var $description = $(this).siblings(options.description);

                $title.parent().removeClass(options.currentClass);
                $descriptions.slideUp(options.slideSpeed);

                if (!isCurrent) {
                    $this.parent().addClass(options.currentClass);
                    $description.slideDown(options.slideSpeed);
                }

                options.onAfter($this);

                return false;
            });
        }
    });
};
})(jQuery);