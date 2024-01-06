var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function() { //para cada evento de dúvida adiciono um evento de click
        duvida.classList.toggle('ativa')
    }) 
})