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
$('[data-custom-open]').click(function() {
  $('.modal [name=form]').val($(this).data('form'))
})
$('[data-custom-close]').click(function() {
  $('.modal [name=form]').val('')
})

$('.home-slider__heading').each(function() {
  let text  = $(this).text().split(' '),
      first = text.shift()
  $(this).html(`${first} <br><span>${text.join(' ')}</span>`)
})
