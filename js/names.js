$(document).ready(function(){
  var fadetime = 500;
  var delaytime = 1000;
  function carousel(){
    $('.entry:first-child').fadeIn(fadetime).delay(delaytime).queue(function(){
      $(this).fadeOut(fadetime).appendTo('.entries').dequeue();
    });
  }
  carousel();
  setInterval( function(){ carousel() }, fadetime + delaytime);
});
