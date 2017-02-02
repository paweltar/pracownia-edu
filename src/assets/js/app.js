$(document).foundation();

$(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('.offer-cards__section').offset().top - 50) {
            $(".navigation").addClass('color--alt');
        } else {
            $(".navigation").removeClass('color--alt');
        }
    });
});
