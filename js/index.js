$(document).ready(function() {
    $("#nav-about-me").on("click", function(event) {
        event.preventDefault();
        var anchor = $(this);
        $("html, body").animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1500);
    });
});
