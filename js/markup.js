$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});   
});

$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 900) {
          $(".navbar").css("background-color", "#2A2D34");
          $(".navbar a").css("color", "#E8F1F2")
        } else {
          //welcome page
          $(".navbar").css("background-color", "transparent");
          $(".navbar a").css("color", "#F8F9FA")
        }
      });
    });

//click to change element
