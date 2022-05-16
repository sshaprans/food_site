function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    // window.removeEventListener('scroll', openModalScroll)
    if(modalTimerId){
        console.log(modalTimerId)
        clearInterval(modalTimerId);
    }

}
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.toggle('hide');
    document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector, modalTimerId) {

    const modalTriger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);
      
    modalTriger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (event) => {
        if(event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (event) =>{
        if(event.code === "Escape" && modal.classList.contains('show')){
            closeModal(modalSelector);
        }
    });

    function openModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', openModalScroll)
        }
    }

    window.addEventListener('scroll', openModalScroll);

}

export default modal;
export {openModal, closeModal};