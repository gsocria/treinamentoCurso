mascaras();
function addCliente() {

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

                    listarGeral('listarCliente');
                    msgGeral();

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


function ativarGeral(e, f, idbtn) {

    if(f == 'ativo'){
        var btn = idbtn
    } else {
        var btn = idbtn
    }

    $('#' + btn).on('click', function () {
        alert(f);
    })

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

function msgGeral() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Inserido com sucesso',
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




