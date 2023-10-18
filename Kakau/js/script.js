//Este código mostrar um elemento se ele estiver na viewport
//Esta função tem como base o método "observe". O método observe() em JavaScript é utilizado para observar alterações em um elemento alvo ou em uma coleção de elementos através do uso da API Intersection Observer. O Intersection Observer é uma API que permite ao código ser notificado quando um elemento entra ou sai da área de interseção com o viewport do navegador.
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
            setTimeout(entry.target.querySelector('.midia').play(),1500)
        }else {entry.target.classList.remove('show')
    }
    })
});
//aqui os elementos são guardados na variável hiddeeElements e cada elemento da lista tem seu próprio observer
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));
/*vai tomar no cu piranha*/ 
