(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
})();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-shop-open]'),
      closeModalBtn: document.querySelector('[data-shop-close]'),
      modal: document.querySelector('[data-shop]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-shop-mob-open]'),
            modal: document.querySelector('[data-shop]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
})();





  
