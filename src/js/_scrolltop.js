// ========================================================
// TOPへ戻る
// ========================================================

const ScrollTop = target => {

  document.addEventListener('DOMContentLoaded', function(){

    const replace = target.slice(1);
    const _tar = document.getElementById(replace);
    const event = ['isActive','isNoActive'];

    function scrollEvent () {
      const value = document.documentElement.scrollTop || document.body.scrollTop;
      const checkActive = _tar.classList.contains(event[0]);
      const checkNoActive = _tar.classList.contains(event[1]);
      if ( value > 400 ) {
        if (checkNoActive){
          _tar.classList.remove(event[1]);
          _tar.classList.add(event[0]);
        } else {
          _tar.classList.add(event[0]);
        }
      } else {
        if (checkActive){
          _tar.classList.remove(event[0]);
          _tar.classList.add(event[1]);
        }
      }
    }

    window.addEventListener('scroll', scrollEvent, false);

  }, false);

};

export default ScrollTop;
