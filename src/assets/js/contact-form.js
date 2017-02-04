$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "https://formspree.io/paweltar@gmail.com",
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("input[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $(".thank-you__box").fadeIn();
        $("#contact-form").fadeOut();
        $(".contact__header").fadeOut();
      },
      error: function() {
        $(".submit-errors").fadeIn();
      }
    });
  }
});
