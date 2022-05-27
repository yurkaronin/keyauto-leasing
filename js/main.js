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

const mainTable = document.querySelector('.main__table');
if (mainTable) {
  mainTable.on("scroll", function (e) {
    // horizontal = e.currentTarget.scrollLeft;
    // vertical = e.currentTarget.scrollTop;
    console.log('wow');
    });
}

