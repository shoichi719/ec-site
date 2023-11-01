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
// ハンバーガーメニュー
$(".navbtn").click(function () {
  $(this).toggleClass('active');
  $("header ul").toggleClass('active-nav');
});