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

    $.fn.accordionList = function(options) {
        var defaults = {
                firstItem: true,
                listItems: 'li',
                itemTitle: '.title',
                itemDescription: '.description'
            },
            settings = $.extend({}, defaults, options);

        this.each(function() {
            var $this = $(this),
                $itemsTitle = $this.find(settings.itemTitle),
                $itemsDescription = $this.find(settings.itemDescription);

                $itemsDescription.hide();
                if (settings.firstItem) {
                    $itemsTitle.first().closest(settings.listItems).addClass('current');
                    $itemsDescription.first().show();
                }

                $itemsTitle.on('click', function() {
                    var $selected = $(this),
                        $selectedDescription = $selected.siblings(settings.itemsDescription),
                        isCurrent = $selected.closest(settings.listItems).hasClass('current');

                    $itemsTitle.closest(settings.listItems).removeClass('current');
                    $itemsDescription.slideUp();

                    if ( !isCurrent ) {
                        $selected.closest(settings.listItems).addClass('current');
                        $selectedDescription.slideDown();
                    }

                    return false;
                });
        });

        return this;
    };

})(jQuery);