//refresh debug navbar
$(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 800) {
          $(".navbar").css("background-color", "#2A2D34");
          $(".navbar a").css("color", "#E8F1F2");
          $("#Logo").attr('src', 'pic/logo-white.png');
          $(".navbar").css("top", "0");
        } else {
          $(".navbar").css("top", "-100px");
        }
      });
    });

$(document).ready(function(){
  $("#place1").hover(function(){
    $("#description h1").css("transform", "translateY(6vh)");
    $("#description p").css("transform", "translateY(45vh)");
    $(".att-img img").css("opacity", '.5');
  },
  function(){
    $("#description h1").css("transform", "translateY(-10vh)");
    $("#description p").css("transform", "translateY(80vh)");
    $(".att-img img").css("opacity", '1');
  });


  $("#place2").hover(function(){
    $("#description2 h1").css("transform", "translateY(-74vh)");
    $("#description2 p").css("transform", "translateY(-35vh)");
    $(".att-img2 img").css("opacity", '.5');
  },
  function(){
    $("#description2 h1").css("transform", "translateY(-90vh)");
    $("#description2 p").css("transform", "translateY(-10vh)");
    $(".att-img2 img").css("opacity", '1');
  });
});

//click to flip


