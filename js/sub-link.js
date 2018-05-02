$(document).ready(function(){
  $(".parallax").fadeIn(1000);
  $(".parallax2").fadeIn(1000);
  $(".parallax3").fadeIn(1000);
  $("#Header-text").animate({top:"-=50px", opacity:1}, "slow");
});


$(document).ready(function(){
  var i = 1, pos = 0;
  $("#fst").click(function(){
    if(i == 1){
      i = i + 2;
      pos = pos - (1765*2);
    }
    if($("#snd").is(":hidden")){
      $("#snd").show();
      $("#fst").text("ดูชั้นก่อนหน้า");
      $("#snd").text("ดูชั้นต่อไป");
    }
    else if(i == 2){
      $("#fst").text("ดูข้อมูลแต่ละชั้น");
      $("#snd").hide();
    }
    i = i - 1;
    pos = pos + 1765;
    $("#struct").css("transform", "translateX(" + pos + "px)");
  });

  $("#snd").click(function(){
    if(i == 3){
      $("#snd").hide();
      $("#fst").text("ดูชั้นก่อนหน้า");
    }
    i = i + 1;
    pos = pos - 1765;
    $("#struct").css("transform", "translateX(" + pos + "px)");
  });


  $(function () {

    /* SET PARAMETERS */
    var change_img_time     = 3500;
    var transition_speed    = 600;

    var simple_slideshow    = $("#Slider"),
        listItems           = simple_slideshow.children('li'),
        listLen             = listItems.length,
        i                   = 0,

        changeList = function () {

            listItems.eq(i).fadeOut(transition_speed, function () {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transition_speed);
            });

        };

    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
  }); //slide show1

  $(function () {

  /* SET PARAMETERS */
  var change_img_time     = 3500;
  var transition_speed    = 600;

  var simple_slideshow    = $("#Slider2"),
      listItems           = simple_slideshow.children('li'),
      listLen             = listItems.length,
      i                   = 0,

      changeList = function () {

          listItems.eq(i).fadeOut(transition_speed, function () {
              i += 1;
              if (i === listLen) {
                  i = 0;
              }
              listItems.eq(i).fadeIn(transition_speed);
          });

      };

  listItems.not(':first').hide();
  setInterval(changeList, change_img_time);
});
});//slide show2
