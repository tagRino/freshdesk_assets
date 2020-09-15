$(document).ready(function () {
  // $("").click(function () {
  //   $(this).toggleClass("open").siblings().removeClass("open")
  // })
  $(".panel a").click(function(){
    $(this).toggleClass("open").siblings().removeClass("open")
  }); 
   

  
  hide = true;
$('body').on("click", function () {
    if (hide) $('.dropdown-toggle').removeClass('open');
    hide = true;
});

// add and remove .active
$('body').on('click', '.dropdown-toggle', function () {

    var self = $(this);

    if (self.hasClass('open')) {
        $('.dropdown-toggle').removeClass('open');
        return false;
    }

    $('.dropdown-toggle').removeClass('open');

    self.toggleClass('open');
    hide = false;
});
   


  
});
