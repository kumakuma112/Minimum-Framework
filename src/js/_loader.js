import $ from 'jquery';
// ========================================================
// ローディング
// ========================================================

const Loader = target => {

  const tar = target;

  $(() => {
    $(window).on('load', () => {
      $(tar).delay(700).fadeOut(500);
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        setTimeout(function(){scrollTo(0,1)}, 1);
      }
    });

    function stopload() {
      $(tar).delay(700).fadeOut(300);
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        setTimeout(function(){scrollTo(0,1)}, 1);
      }
    }
    setTimeout($.proxy(stopload(), this), 5000);
  });

  return tar;

};

export default Loader;
