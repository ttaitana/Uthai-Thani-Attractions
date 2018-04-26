//refresh debug navbar
$(document).ready(function(){
    $(this).scrollTop(0);
});


//navbar hiding
$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 700) {
          $(".navbar").css("background-color", "#2A2D34");
          $(".navbar a").css("color", "#E8F1F2");
          $("#Logo").attr('src', 'pic/logo-white.png');
          $(".navbar").css("top", "0");
        } else {
          $(".navbar").css("top", "-100px");
        }
      });

    });


//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function(){
  //1st place
  $("#place1").hover(function(){
    $("#description h1").css("transform", "translateY(6vh)");
    $("#description p").css("transform", "translateY(45vh)");
    $(".att-img img").css("opacity", '.5');
  },
  function(){
    $("#description h1").css("transform", "translateY(-13vh)");
    $("#description p").css("transform", "translateY(80vh)");
    $(".att-img img").css("opacity", '1');
  });

  //2nd place
  $("#place2").hover(function(){
    $("#description2 h1").css("transform", "translateY(-74vh)");
    $("#description2 p").css("transform", "translateY(-35vh)");
    $(".att-img2 img").css("opacity", '.5');
  },
  function(){
    $("#description2 h1").css("transform", "translateY(-100vh)");
    $("#description2 p").css("transform", "translateY(-10vh)");
    $(".att-img2 img").css("opacity", '1');
  });

  //3rd place
  $("#place3").hover(function(){
    $("#description3 h1").css("transform", "translateY(-53vh)");
    $("#description3 p").css("transform", "translateY(-15vh)");
    $(".att-img3 img").css("opacity", '.5');
  },
  function(){
    $("#description3 h1").css("transform", "translateY(-75vh)");
    $("#description3 p").css("transform", "translateY(10vh)");
    $(".att-img3 img").css("opacity", '1');
  });
});
