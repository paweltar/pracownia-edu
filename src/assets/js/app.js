$(document).foundation();

$(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('.offer-cards__section').offset().top - $(".navigation").height()) {
            $(".navigation").addClass('color--alt');
        } else {
            $(".navigation").removeClass('color--alt');
        }
    });

    $('.arrow-down').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.offer-cards__section').offset().top
    }, 1000);
    });
});
