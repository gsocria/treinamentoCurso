<?php

$acao = filter_input(INPUT_POST, 'acao', FILTER_SANITIZE_STRING);

switch ($acao) {

    // CLIENTE

    case 'addCliente':
        include_once('cliente/addCliente.php');
        break;
    case 'listarCliente':
        include_once('cliente/listarCliente.php');
        break;
    case 'ativarCliente':
        include_once('cliente/ativarCliente.php');
        break;
    case 'excluirCliente':
        include_once('cliente/excluirCliente.php');
        break;
    case 'verDadosCliente':
        include_once('cliente/verDadosCliente.php');
        break;

        // PRODUTO

    case 'listarProduto':
        include_once('produto/listarProduto.php');
        break;
    case 'excluirProduto':
        include_once('produto/excluirProduto.php');
        break;
}
