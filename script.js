/* global KeyEvent */
(function (exports) {
'use strict';

function setupSmartButton(smartBtn) {

  smartBtn.handleEvent = function (evt) {
    switch(evt.type) {
      case 'mousedown':
      case 'touchstart':
        this.classList.add('pressed');
        break;
      case 'keydown':
        if (evt.keyCode === KeyEvent.DOM_VK_RETURN) {
          this.classList.add('pressed');
        }
        break;
      case 'mouseup':
      case 'touchend':
        this.classList.remove('pressed');
        this.classList.add('released');
        break;
      case 'keyup':
        if (evt.keyCode === KeyEvent.DOM_VK_RETURN) {
          this.classList.remove('pressed');
          this.classList.add('released');
          this.click();
        }
        break;
      case 'transitionend':
        if (this.classList.contains('released')) {
          this.classList.remove('released');
        }
        break;
      case 'focus':
        this.classList.add('focused');
        break;
      case 'blur':
        this.classList.remove('pressed');
        this.classList.remove('released');
        this.classList.remove('focused');
    }
  };

  smartBtn.addEventListener('mousedown', smartBtn);
  smartBtn.addEventListener('mouseup', smartBtn);
  smartBtn.addEventListener('touchstart', smartBtn);
  smartBtn.addEventListener('touchend', smartBtn);
  smartBtn.addEventListener('keydown', smartBtn);
  smartBtn.addEventListener('keyup', smartBtn);
  smartBtn.addEventListener('focus', smartBtn);
  smartBtn.addEventListener('blur', smartBtn);
  smartBtn.addEventListener('transitionend', smartBtn);

  // Make sure become focusable
  smartBtn.setAttribute('tabIndex', -1);

  return smartBtn;
}

exports.setupSmartButton = setupSmartButton;

})(window);
