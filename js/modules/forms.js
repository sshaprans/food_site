import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(forSelector, modalTimerId) {
    const forms = document.querySelectorAll(forSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Thanks, wait for the call!)',
        failure: 'Smething broke'
    };

    forms.forEach(item => {
        bindPostData(item)
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
// request.setRequestHeader('Content-type', 'multipart/form-data');
// в комбі XMLHttpRequest і Data заголовок встановлюється автоматично

// для формата json, треба заголовок FormData треба зробити об'єктом
            const formData = new FormData(form);
            
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success); 
                statusMessage.remove()
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            })

        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
           thanksModal.remove(); 
           prevModalDialog.classList.add('show');
           prevModalDialog.classList.remove('hide');
           closeModal('.modal');
        }, 4500);
    }
    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(data => console.log(data));

}

export default forms;