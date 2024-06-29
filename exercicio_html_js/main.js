const form = document.getElementById('form-verificacao')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroA = document.getElementById('number-a');
    const  numeroB = document.getElementById('number-b')

    const comparacao = numeroA.value < numeroB.value?  window.alert('O número B deve ser maior que número A') : window.alert('Números validos')
    
    numeroA.value = ''
    numeroB.value = ''

    return comparacao
})