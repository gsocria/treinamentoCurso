mascaras();
function addCliente(pageRetorno) {

    $('#formAddCliente').on('submit', function (e) {
        e.preventDefault();



        var dados = $(this).serializeArray();

        dados.push({
            name: 'acao',
            value: 'addCliente'
        })

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'controle.php',
            data: dados,
            beforedSend: function (retorno) {

            }, success: function (retorno) {
                if (retorno == 'Gravado') {

                    $('#modalAddCliente').modal('hide');

                    listarGeral(pageRetorno);
                    msgGeral('success', 'Inserido com sucesso');

                } else {
                    alert('Nao foi possivel inserir')
                }
            }
        });

    });
}


function listarGeral(page) {

    var dados = {
        acao: page
    }

    $.ajax({
        type: 'POST',
        dataType: 'HTML',
        url: 'controle.php',
        data: dados,
        beforedSend: function (retorno) {

        }, success: function (retorno) {
            $('#showPage').html(retorno)
        }
    });


}


function ativarGeral(e, f, idbtn,idModal, page, pageRetorno) {

    if(f == 'ativar'){
        var btn = idbtn;
        var ativo = 'A';
    } else {
        var btn = idbtn;
        var ativo = 'D';
    }

    $('#' + btn).on('click', function () {
        var dados = {
            acao: page,
            id: e,
            status: ativo
        }
    
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'controle.php',
            data: dados,
            beforedSend: function (retorno) {
                console.log(retorno);
            }, success: function (retorno) {

                if(retorno == 'Atualizado'){

                    listarGeral(pageRetorno);   

                }else{
                    console.log('chegou aqui');  
                }
            }
        });
    })

 }


 function deletaGeralMsg(idVar, page, pageRetorno ){
    Swal.fire({
        title: 'Deseja excluir esse registro?',
        text: "Você não podera desfazer essa operação!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Deletar'
      }).then((result) => {
        
        if (result.isConfirmed) {
            var dados = {
                acao: page,
                id: idVar
            }
    
            $.ajax({
                type: 'POST',
                dataType: 'HTML',
                url: 'controle.php',
                data: dados,
                beforedSend: function (retorno) {
                }, success: function (retorno) {
                    listarGeral(pageRetorno)
                    console.log(retorno);
                    Swal.fire(
                        'Deletado com sucesso!',
                        'Lista atualizada!',
                        'success'
                )}
            });
        }
    });
}

function dadosCLiente(idVar){
    var dados = {
        acao: 'verDadosCliente',
        id: idVar
    }

    // $('#modalEditarCliente').modal('show');

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'controle.php',
        data: dados,
        beforedSend: function (retorno) {
            
        }, success: function (retorno) {

            console.log(retorno);
        }
    });
}
 

function mascaras() {
    $('.maskCelular').inputmask({
        mask: "(99) 99999-9999",
        showMaskOnHover: false
    })
    $('.maskCEP').inputmask({
        mask: "99.999.999"
    })

    $('.maskCPF').inputmask({
        mask: "999.999.999-99"
    })
}

function msgGeral(icone,titulo) {
    Swal.fire({
        position: 'center',
        icon: icone,
        title: titulo,
        showConfirmButton: false,
        timer: 2000
    })
}
    //     e.preventDefault();

    //     var idForm = $(this).attr(id)
      
    //     var dados = {
    //         acao: 'alterarStatus',
    //         id: idForm
    //     }

    //     $.ajax({
    //         type: 'POST',
    //         dataType: 'HTML',
    //         url: 'controle.php',
    //         data: dados,
    //         beforedSend: function (retorno) {

    //         }, success: function (retorno) {
    //             console.log(id)
    //         }
    //     });
    // });




