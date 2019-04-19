(function ($) {
    $(document).ready(function () {

        //  Task 1

        $('a').on('click', function (e) {
            e.preventDefault();
            console.log($(this).attr('href'));
        });

        //  Task 2

        $(window).mousemove(function (pos) {
            $("div").css('left', (pos.pageX + 20) + 'px').css('top', (pos.pageY + 20) + 'px');

        });

        //Task 3

        var ul = $('ul');
        ul.find('li a').on('click', function (e) {
            var link = $($(this).attr('href'));
            if (link.length > 0) {
                e.preventDefault();
                var offset = link.offset().top;
                $('body, html').animate({
                    scrollTop: offset - 30
                }, 750);
            }
        });
    });
})(jQuery);
