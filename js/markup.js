//refresh debug navbar
$(document).ready(function(){
    $(this).scrollTop(0);
});

// $(document).ready(function(){
//   $(".navbar a").on('click', function(event){
//     if(this.hash !== ""){
//       event.preventDefault();
//       var hash = this.hash;

//       $('html, body').animate({
//         scrollTop:$(hash).offset().top
//       }, 900, function(){
//         window.location.hash = hash;
//       })
//     }
//   })
// })

$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 900) {
          $(".navbar").css("background-color", "#2A2D34");
          $(".navbar a").css("color", "#E8F1F2");
          $("#Logo").attr('src', 'pic/logo-white.png');
        } else {
          //welcome page
          $(".navbar").css("background-color", "transparent");
          $(".navbar a").css("color", "#F8F9FA");
          $("#Logo").attr('src', 'pic/logo.png');
        }
      });
    });

//click to change element
