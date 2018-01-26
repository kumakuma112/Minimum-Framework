import $ from 'jquery';
// ========================================================
// アンカーリンク
// ========================================================

const Anchor = target => {

  const tar = target;

  $(() => {
    // console.log(TARGET);
    // console.log($(TARGET));
    $(tar).on('click', function() {
      var link = $(this);
      var speed = 500;
      var href = link.attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });

  return tar;

};
export default Anchor;
