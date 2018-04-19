//refresh debug navbar
$(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 900) {
          $(".navbar").css("background-color", "#2A2D34");
          $(".navbar a").css("color", "#E8F1F2");
          $("#Logo").attr('src', 'pic/logo-white.png');
          $(".navbar").css("top", "0");
        } else {
          //welcome page
          // $(".navbar").css("background-color", "transparent");
          // $(".navbar a").css("color", "#F8F9FA");
          // $("#Logo").attr('src', 'pic/logo.png');

          $(".navbar").css("top", "-100px");
        }
      });
    });

$('.navbar a').smoothScroll({
  autoFocus: true
});

//click to change element
