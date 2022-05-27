document.addEventListener("DOMContentLoaded", () => {
  let filterShow = document.querySelector('.filter-show');
  let filterList = document.querySelector('.filter-list');
  if (filterShow) {
    filterShow.onclick = function () {
      filterList.classList.toggle('show-all');
    };

  }

  if (window.innerWidth <= 670) {
    filterList.classList.add('show-all');
  } else {
    filterList.classList.remove('show-all');
  }

  const customSelects = () => {
    const elements = document.querySelectorAll('.js-choice');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        removeItems: true,
        removeItemButton: true,
        itemSelectText: '',
      });
    });

  };

  customSelects();

  MicroModal.init({
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
  })
});
