(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector(".modal__close-btn"),
    modal: document.querySelector("[data-modal-body]"),
  };

  refs.openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleModal();
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
