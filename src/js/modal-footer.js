import { refs } from './refs';

refs.footerBtn.addEventListener('click', openModalFooter);
refs.closeModalFooterBtn.addEventListener('click', toggleModalFooter);
refs.backdropFooter.addEventListener('click', onBackdropClickFooter);

function openModalFooter(evt) {
  toggleModalFooter();
}

function toggleModalFooter() {
  window.addEventListener('keydown', onEscPressFooter);
  refs.modalFooter.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
  if (refs.modalFooter.classList.contains('is-hidden')) {
    window.removeEventListener('keydown', onEscPressFooter);
  }
}

function onBackdropClickFooter(evt) {
  if (evt.currentTarget === evt.target) {
    toggleModalFooter();
  }
}

function onEscPressFooter(evt) {
  if (evt.key === 'Escape') {
    toggleModalFooter();
  }
}
