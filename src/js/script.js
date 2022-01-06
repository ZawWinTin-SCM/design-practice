/**
 * Navigation Menu for SP View
 *
 * @return void
 */
 $(function () {
    $(".menu-trigger").on("click", function () {
        var leftVal = 0;
        if ($(this).hasClass("active")) {
            leftVal = -1200;
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        $("#nav-bar").stop().animate(
            {
                left: leftVal,
            },
            700
        );
    });
});