$(document).ready(function(){
   
    $('form').on('submit', function(e){{
        e.preventDefault();

        const novaTarefa = $('#addTarefa').val();
        const tarefa = `<li>${novaTarefa}</li>`;
        $(tarefa).appendTo('ul')

        $('#addTarefa').val('')
    }});



    $('ul').on('click','li', function(){
        $(this).toggleClass('line-through')
        console.log('haha')
    });
});
