(function ($) {
    $(document).ready(function () {
        $('div').addClass('main');

        $('.main').append('<ul></ul>');

        for (var i = 1; i <= 10; i++) {
            $('ul').append('<li>Пункт ' + i + '</li>')
        };
        $('li').wrapInner('<span>');

        $('li:even').addClass('second');

        $('li').attr('order', function (index, order) {
            return order + ' ' + index;
        });
        $('li').remove('li:last-child');
        $('div.main').prepend('<h3>Перечень работ</h3>')
    });
})(jQuery);