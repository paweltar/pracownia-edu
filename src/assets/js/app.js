$(document).foundation();

$(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('.offer-cards__section').offset().top - $(".navigation").height()) {
            $(".navigation").addClass('color--alt');
        } else {
            $(".navigation").removeClass('color--alt');
        }
    });

    $('.show-offer').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('.offer-cards__section').offset().top
      }, 1000);
    });
});
