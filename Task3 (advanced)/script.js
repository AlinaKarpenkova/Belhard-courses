(function ($) {
    $(document).ready(function () {

//        Tasks 1 - 4

        $('h2').text('!');
        $('h3').css('color', 'red');
        $('h2').css('color', 'blue');
        $('h2').css('font-size', '30px');

//        Tasks 5 - 9

        $('.test').css('color', 'red');
        $('p + p').css('color', 'red');
        $('li+li.www').css('color', 'red');
        $('h2 i').css('color', 'red');
        $('h2 > i').css('color', 'red');

//        Tasks 10 - 20

        $(':header').css('color', 'red');
        $('h2:not(.test)').css('color', 'red');
        $(':header:not(.test)').css('color', 'red');
        $(':header + :header').css('color', 'red');
        $(':header.test + :header.test').css('color', 'red');
        $(':empty').css('color', 'red');
        $('p:first').css('color', 'red');
        $('p:last').css('color', 'red');
        $('li:contains("Пункт")').css('color', 'red');
        $('h2:has("i")').css('color', 'red');
        $('h2 > i').css('color', 'red');

//        Tasks 21 - 33

        $("ul li:nth-child(3)").css('color', 'red');
        $('li:lt(10)').css('color', 'red');
        $('li:gt(8)').css('color', 'red');
        $('li:first-child').css('color', 'red');
        $('li:last-child').css('color', 'red');
        $('ul li:first-child').css('color', 'red'); //вместо ol использовано ul
        $('ul li:last-child').css('color', 'red');
        $('ul li:eq(10)').css('color', 'red');
        $('li:odd').css('color', 'red');
        $('li:even').css('color', 'red');
        $('ul li:odd').css('color', 'red');
        $('ul li:even').css('color', 'red');

//        Task 34

        $('li.www').parent().css('color', 'red');

//        Tasks 35 - 38

        $('p').each(function () {
            alert($(this).html())
        });
        $(':header').each(function () {
            alert($(this).html())
        });
        $('li').each(function (index) {
            ($(this).html(index))
        });
        $('li').each(function (index) {
            ($(this).append(index))
        });
    });
})(jQuery);
