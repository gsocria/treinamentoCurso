<?php

include_once('./config/constantes.php');
include_once('./config/conexao.php');
include_once('./func/dashboard.php');



$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);
$conn = conectar();


if (!empty($dados) && isset($dados)) {
    $idCliente = $dados['id'];
    $ativar = $dados['status'];

    if ($ativar == 'A') {
        $retorno = upUm('cliente', 'ativo', 'idcliente', 'A', "$idCliente");
    } else {
        $retorno = upUm('cliente', 'ativo', 'idcliente', 'D', "$idCliente");
    }

} else {
    $retorno = json_encode('Nao foi possivel inserir');
}

echo json_encode($retorno);
