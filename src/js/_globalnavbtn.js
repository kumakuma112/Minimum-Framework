// ========================================================
// グローバルナビボタン
// ========================================================
const GlobalNavBtn = (target) => {

  document.addEventListener('DOMContentLoaded', function(){

    const replace = target.slice(1);
    const _tar = document.getElementById(replace);
    const event = ['isOpened','isClosed'];

    function btnEvent () {
      const checkOpened = this.classList.contains(event[0]);
      const checkClosed = this.classList.contains(event[1]);
      if (checkOpened){
        this.classList.remove(event[0]);
        this.classList.add(event[1]);
      } else {
        if (checkClosed){
          this.classList.remove(event[1]);
        }
        this.classList.add(event[0]);
      }
    }

    _tar.addEventListener('click', btnEvent, false);

  }, false);

};
export default GlobalNavBtn;
