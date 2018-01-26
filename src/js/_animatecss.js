import $ from 'jquery';
// ========================================================
// パララックス制御 + Animate.css
// ========================================================

const AnimateCss = tar => {

  const TARGET = tar;

  //スクロールでアニメーション実行
  function animateScroll($class, $imgPos, $scroll, $windowHeight) {
    if ($scroll > $imgPos - $windowHeight + $windowHeight / 8) {
    //下にスクロールするとき
    $class.addClass("animated");
    } else if ($scroll <= $imgPos - $windowHeight) {
    //上に戻るとき
    $class.removeClass("animated");
    }
  }

  //アニメーション制御
  function animate(tar) {
    $(tar).each(function() {
    var _tar = $(this);
    var imgPos = _tar.offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    animateScroll(_tar, imgPos, scroll, windowHeight);
    });
  }


  $(window).on('touchstart scroll', function() {
     setTimeout(function() {animate(TARGET);}, 100);
   });

  return TARGET;

};

export default AnimateCss;
