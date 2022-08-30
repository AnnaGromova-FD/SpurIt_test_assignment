const button = document.querySelector('.collapsible__button');
button.innerText = 'Скрыть содержимое';

window.addEventListener('load', () => {
  button.addEventListener('click', handleCollapse);
});

const handleCollapse = () => {
  const collapsableElement = document.querySelector('.collapsible__content');
  const zoomIn = [
    {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0},
    {transform: 'none', opacity: '1', offset: 1},
  ];
  const zoomOut = [
    {transform: 'none', opacity: '1', offset: 0},
    {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1},
  ];
  const collapseTiming = {
    duration: 500,
    fill: 'both',
    easing: 'ease-out',
    iterations: 1,
  };

  if (button.innerText === 'Скрыть содержимое') {
    collapsableElement.animate(zoomOut, collapseTiming);
    button.innerText = 'Показать содержимое';
  } else {
    collapsableElement.animate(zoomIn, collapseTiming);
    button.innerText = 'Скрыть содержимое';
  }
};
