 $("#cadastro").click(function() {
     $(".formulario").css({
         "position": "absolute"
     });
     $(".formulario").animate({
         left: '100%'
     }, "slow");
     $(".formulario").css({
         "position": "relative",
         "display": "none"
     });
     $(".formulario2").animate({
         right: '0px'
     });

     $(".formulario2").css({
         "position": "relative",
         "display": "block",
     });

     $(".bar").css({
         "display": "block",
     });
     $(".bar2").animate({
         width: '25%'
     }, "slow");
 });
 $("#continuar").click(function() {
     $(".formulario2").css({
         "position": "absolute"
     });
     $(".formulario2").animate({
         left: '100%'
     }, "slow");

     $(".formulario3").css({
         "display": "block"
     });
     $(".formulario3").animate({
         right: '0px'
     });

     $(".formulario3").css({
         "position": "relative",
         "display": "block",
     });
     $(".formulario2").css({
         "position": "relative",
         "display": "none"
     });
     $(".bar").css({
         "display": "block",
     });
     $(".bar2").animate({
         width: '50%'
     });
 });

 $("#pagamento").click(function() {
     $(".formulario3").css({
         "position": "absolute"
     });
     $(".formulario3").animate({
         left: '100%'
     });

     $(".formulario4").css({
         "display": "block"
     });
     $(".formulario4").animate({
         right: '0px'
     });

     $(".formulario4").css({
         "position": "relative",
         "display": "block",
     });
     $(".formulario3").css({
         "position": "relative",
         "display": "none"
     });
     $(".bar").css({
         "display": "block",
     });
     $(".bar2").animate({
         width: '75%'
     }, "slow");
 });

 $("#next").click(function() {
     $(".formulario4").css({
         "position": "absolute"
     });
     $(".formulario4").animate({
         left: '100%'
     });

     $(".formulario5").css({
         "display": "block"
     });
     $(".formulario5").animate({
         right: '0px'
     });

     $(".formulario5").css({
         "position": "relative",
         "display": "block",
     });
     $(".formulario4").css({
         "position": "relative",
         "display": "none"
     });
     $(".bar").css({
         "display": "block",
     });
     $(".bar2").animate({
         width: '100%'
     }, "slow");
 });