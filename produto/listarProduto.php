<?php

include_once('../func/dashboard.php');


$listarProduto = listarGeral('*', 'produto');

if ($listarProduto != 'Vazio') {


?>

    <table class="table">
        <thead>
            <tr>
                <th scope="col" width="5%">#</th>
                <th scope="col" width="30%">Produto</th>
                <th scope="col" width="30%">Descrição</th>
                <th scope="col" width="25%">Valor</th>
                <th scope="col" width="10%">Ação</th>
            </tr>
        </thead>
        <tbody>

            <?php

            foreach ($listarProduto as $listarProdutoItem) {
                $idProduto = $listarProdutoItem->idproduto;
                $produto = $listarProdutoItem->produto;
                $descricao = $listarProdutoItem->descricao;
                $valor = $listarProdutoItem->valor;
                $ativo = $listarProdutoItem->ativo;

            ?>
                <tr>
                    <th scope="row"><?php echo $idProduto ?></th>
                    <td><?php echo $produto ?></td>
                    <td><?php echo $descricao ?></td>
                    <td> R$ <?php echo $valor ?></td>
                    <td>
                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-ligth border-secondary-subtle"> <i class="fa-solid fa-pen-to-square fa-xl" style="color: #000000;"></i></button>

                            <button type="button" class="btn btn-outline-ligth border-secondary-subtle"> <i onclick="excluirProduto(<?php echo $idProduto ?>, 'excluirProduto', 'listarProduto')" class="fa-solid fa-trash fa-xl" style="color: #000000;"></i></button>

                            <button type="button" class="btn btn-outline-danger border-secondary-subtle" data-bs-toggle="modal" data-bs-target="#modalAtivarCliente">Ativado</button>

                        </div>
                    </td>
                </tr>

            <?php

            }

            ?>

        </tbody>
    </table>

<?php
}
?>