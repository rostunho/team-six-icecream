(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open_two]'),
      closeModalBtn: document.querySelector('[data-modal-close_two]'),
      modal: document.querySelector('[data-modal-two]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();