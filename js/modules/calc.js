function calc() {
    const result = document.querySelector('.calculating__result span');
    let sex, height, weigth, age, ratio;
    
    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else{
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }
    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    }else{
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }
    
    function initLocalSet(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if(elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
        });
    }
    initLocalSet('#gender div', 'calculating__choose-item_active');
    initLocalSet('.calculating__choose_big div', 'calculating__choose-item_active');


    function calcTotal () {
       if(!sex || !height || !weigth || !age || !ratio){
           result.textContent = '----';
           return;
       } 
    
       if(sex === 'female'){
           result.textContent = Math.round((447.6 + (9.2 * weigth) + (3.1 * height) - (4.3 * age)) * ratio);
       }else{
           result.textContent = Math.round((88.36 + (13.4 * weigth) + (4.8 * height) - (5.7 * age)) * ratio);
       }
    }
    calcTotal(); 

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if(e.target.getAttribute('data-ratio')){
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                }else{
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal(); 
            });
        }); 
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynInf(sel){
        const input = document.querySelector(sel);
        input.addEventListener('input', () => {
            if(input.value.match(/\D/g)) {
                input.style.border = '2px solid red';
            }else{
                 input.style.border = 'none';
            }
            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weigth = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal(); 
        });
    }
    getDynInf('#height');
    getDynInf('#weight');
    getDynInf('#age');

    // function getDynamicInformation(selector){ 
    //     const input = document.querySelector(selector);
        
    //     input.addEventListener('input', () => {
    //         switch(input.getAttribute('id')){
    //             case 'height':
    //                 height = +input.value;
    //                 console.log(height);
    //                 break;
    //             case 'age':
    //                 age = +input.value;
    //                 console.log(age);
    //                 break;
    //             case 'weight':
    //                 weigth = +input.value;
    //                 console.log(weigth)
    //                 break
    //         }
    //         calcTotal(); 
    //     });
    // }
    // getDynamicInformation('#height');
    // getDynamicInformation('#weight');
    // getDynamicInformation('#age');
}

export default calc;
