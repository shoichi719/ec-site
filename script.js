$(function(){
  $(window).scroll(function(){
    $('section').each(function(){
      var top = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > top -height + 100){
        $(this).addClass('scrollin');
      }
    });
  });
});