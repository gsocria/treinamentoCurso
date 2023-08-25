function listarProduto(page) {

    var dados = {
        acao: page
    }

    $.ajax({
        type: 'POST',
        dataType: 'html',
        url: '../controle.php',
        data: dados,
        beforedSend: function (retorno) {

        }, success: function (retorno) {
            console.log(retorno);
            $('#listaProduto').html(retorno)
        }
    });

}


function excluirProduto(e, page, pageRetorno){

    console.log(e, page)
    Swal.fire({
        title: 'Deseja apagar esse registro?',
        text: "Essa ação nao podera ser desfeita",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Deletar'
      }).then((result) => {
        if (result.isConfirmed) {

            var dados = {
                acao: page,
                id: e
            }

            $.ajax({
                type: 'POST',
                dataType: 'html',
                url: '../controle.php',
                data: dados,
                beforedSend: function (retorno) {

                    console.log(retorno);
                }, success: function (retorno) {
                    console.log(retorno);
                    listarProduto(pageRetorno);
                    
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            });

        }
      })

}