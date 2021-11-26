const popUp = (info) => {
  const message = document.querySelector('.confirmText');
  message.innerText = info;

  const modal = document.querySelector('.confirmDelete');
  modal.style.display = 'block';
};

export default popUp;