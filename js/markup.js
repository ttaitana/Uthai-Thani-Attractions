// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }


$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $(".navbar").css("background-color", "#f8f8f8");
        } else {
          $(".navbar").css("background-color", "transparent");
        }
      });
    });