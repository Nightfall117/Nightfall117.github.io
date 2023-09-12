let isThrottled = false;
section = document.getElementsByTagName('body')[0];
function throttle(func, limit) {
  return function() {
    if (!isThrottled) {
      func.apply(this, arguments);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, limit);
    }
  };
}

section.addEventListener('wheel', throttle(function(event) {
  const deltaY = event.deltaY;

  const hiddenElements = document.getElementsByClassName('hidden');
  
  if (deltaY > 0) {
    // O usuário está fazendo scroll para baixo
    console.log('Scroll para baixo');

    for (let i = 0; i < hiddenElements.length; i++) {
      const element = hiddenElements[i];
      if (!element.classList.contains('show')) {
        element.classList.add('show');
        break; // Adiciona a classe apenas ao próximo elemento 'hidden'
      }
    }
    
  } else if (deltaY < 0) {
    // O usuário está fazendo scroll para cima
    console.log('Scroll para cima');
    
    for (let i = hiddenElements.length - 1; i >= 0; i--) {
      const element = hiddenElements[i];
      if (element.classList.contains('show')) {
        element.classList.remove('show');
        break; // Remove a classe apenas do último elemento 'hidden' com a classe
      }
    }
  }
}, 2000));

