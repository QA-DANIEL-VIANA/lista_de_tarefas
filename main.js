$(document).ready(function () {
    // Adiciona um evento de clique aos botões dentro da tabela
    $('.lista-tarefas').on('click', '.btn-remover', function () {
        // Remove a linha da tabela
        $(this).closest('tr').remove();
    });

    $('.lista-tarefas').on('click', '.btn-riscar', function () {
        // Adiciona ou remove a classe 'riscada' na célula da tarefa
        $(this).closest('tr').find('.tarefa').toggleClass('riscada');
    });

    $('form').on('submit', function (e) {
        e.preventDefault();

        // Obtendo o valor da nova tarefa do input com id 'nova-tarefa'
        const novaTarefa = $('#nova-tarefa').val();
        const id = $('.lista-tarefas tr').length + 1; // Obtendo a quantidade de linhas na tabela

        // Criando um novo elemento <tr> com o ID, a nova tarefa e botões de ação
        const novaTarefaElemento = $(`
            <tr>
                <th scope="row">${id}</th>
                <td class="tarefa">${novaTarefa}</td>
                <td><button class="btn btn-danger btn-remover">Remover</button></td>
                <td><button class="btn btn-warning btn-riscar">Riscar</button></td>
            </tr>
        `);

        // Adicionando o novo elemento <tr> à tabela
        $('.lista-tarefas').append(novaTarefaElemento);

        // Limpando o valor do input após adicionar a tarefa
        $('#nova-tarefa').val('');
    });
});
