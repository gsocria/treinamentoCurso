<?php

include_once('./config/constantes.php');
include_once('./config/conexao.php');
include_once('./func/dashboard.php');

$listaCliente = listarGeral('*', 'cliente');

if ($listaCliente != 'Vazio') {

?>

    <table class="table">
        <thead>
            <tr>
                <th scope="col" width="5%">Cod</th>
                <th scope="col" width="55%">Nome</th>
                <th scope="col" width="30%">Telefone</th>
                <th scope="col" width="10%">Ação</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($listaCliente as $listarClienteItem) {
                $id = $listarClienteItem->idcliente;
                $nome = $listarClienteItem->nome;
                $telefone = $listarClienteItem->telefone;
                $ativo = $listarClienteItem->ativo;
            ?>
                <tr>
                    <th id="id" scope="row"><?php echo $id ?></th>
                    <td> <?php echo $nome ?> </td>
                    <td> <?php echo $telefone ?> </td>
                    <td>
                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-ligth border-secondary-subtle" data-bs-toggle="modal" data-bs-target="#modalEditarCliente"> <i class="fa-solid fa-pen-to-square fa-xl" style="color: #000000;"></i></button>
                            <button type="button" class="btn btn-outline-ligth border-secondary-subtle" data-bs-toggle="modal" data-bs-target="#modalExcluirCliente"> <i class="fa-solid fa-trash fa-xl" style="color: #000000;"></i></button>
                                                                                           
                            <?php

                            if ($ativo == 'A') {

                            ?>
                                <button type="button" onclick="ativarGeral(<?php echo $id ?>, 'desativado', 'btnDesativar')"  class="btn btn-outline-success border-secondary-subtle" data-bs-toggle="modal"  data-bs-target="#modalDesativarCliente">Ativado</button>
                            
                            <?php

                            } else {

                            ?>

                                <button type="button" onclick="ativarGeral(<?php echo $id ?>, 'ativado', 'btnAtivar')"  class="btn btn-outline-danger border-secondary-subtle" data-bs-toggle="modal" data-bs-target="#modalAtivarCliente">Desativado</button>

                        </div>
                    </td>
                </tr>

        <?php
                            }
                        }
        ?>
        </tbody>
    </table>

<?php

}
