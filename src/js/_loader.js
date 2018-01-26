import $ from 'jquery';
// ========================================================
// ローディング
// ========================================================

const Loader = target => {

  const tar = target;

  $(() => {
    $(window).on('load', () => {
      $(tar).delay(700).fadeOut(500);
    });

    function stopload() {
      $(tar).delay(700).fadeOut(300);
    }
    setTimeout($.proxy(stopload(), this), 5000);
  });

  return tar;

};

export default Loader;
