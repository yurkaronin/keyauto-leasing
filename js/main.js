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
