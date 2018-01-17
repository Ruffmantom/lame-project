jQuery(document).ready(function(){

  /*$("#first").click(function(){
    $("#idea").toggle(500).css({display:none});
  });
  $("#second").click(function(){
    $("#resp").toggle(500).css({display:none});
  });
  $("#third").click(function(){
    $("#detail").toggle(500).css({display:none});
  });*/



  $("#first").on('click', function (){
    $("#idea:hidden").show("slide", {directions: "down" }, 1000);
    if $("#idea"){
      $("#detail:visible").hide("slide", { direction: "up" }, 1000);
      $("#resp:visible").hide("slide", { direction: "up" }, 1000);
    } else {
      $("#idea:visible").hide("slide", { direction: "up" }, 1000);
    }
  });


/*  $("#idea:hidden").show("slide", {directions: "down" }, 1000);
  $("#idea:visible").hide("slide", { direction: "up" }, 1000);
  $("#detail:visible").hide("slide", { direction: "up" }, 1000);
  $("#resp:visible").hide("slide", { direction: "up" }, 1000);

$("#second").on('click', function (){
  $("#resp:hidden").show("slide", {directions: "down" }, 1000);
  $("#resp:visible").hide("slide", { direction: "up" }, 1000);
  $("#idea:visible").hide("slide", { direction: "up" }, 1000);
  $("#detail:visible").hide("slide", { direction: "up" }, 1000);
});

$("#third").on('click', function (){
  $("#detail:hidden").show("slide", {directions: "down" }, 1000);
  $("#detail:visible").hide("slide", { direction: "up" }, 1000);
  $("#idea:visible").hide("slide", { direction: "up" }, 1000);
  $("#resp:visible").hide("slide", { direction: "up" }, 1000);
});











});
