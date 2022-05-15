window.addEventListener('DOMContentLoaded', () => {
    const calc = require('./modules/calc'),
          cadrs = require('./modules/cards'),
          forms = require('./modules/forms'),
          modal = require('./modules/modal'),
          slider = require('./modules/slider'),
          tabs = require('./modules/tabs'),
          timer = require('./modules/timer');

          tabs();
          modal();
          timer();
          cadrs();
          calc();
    forms();
    slider();
    
});
