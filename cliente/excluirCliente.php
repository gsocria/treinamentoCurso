<?php

include_once('./config/constantes.php');
include_once('./config/conexao.php');
include_once('./func/dashboard.php');


$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);
$conn = conectar();

if(!empty($dados) && isset($dados)){
    $id = $dados['id'];

    
    $retorno = deleteRegistro('cliente', 'idcliente', "$id");
} else {

    $retorno = 'nDeletado';
}

echo json_encode($retorno);