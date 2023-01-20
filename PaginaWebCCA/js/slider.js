/*(function(){
    
    const sliders = [...document.querySelectorAll('.contacto__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentContacto = document.querySelector('.contacto__body--show').dataset.id;
        value = Number(currentContacto);
        value+= add;


        sliders[Number(currentContacto)-1].classList.remove('contacto__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('contacto__body--show');

    }

})();*/

(function(){
    
    const sliders = [...document.querySelectorAll('.contacto__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentContacto = document.querySelector('.contacto__body--show').dataset.id;
        value = Number(currentContacto);
        value+= add;


        sliders[Number(currentContacto)-1].classList.remove('contacto__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('contacto__body--show');

    }

})();