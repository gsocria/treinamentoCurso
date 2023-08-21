<?php

$acao = filter_input(INPUT_POST, 'acao', FILTER_SANITIZE_STRING);

switch ($acao) {
    case 'addCliente':
        include_once('cliente/addCliente.php');
        break;
    case 'listarCliente':
        include_once('cliente/listarCliente.php');
        break;
    case 'alterarStatus':
        include_once('alterarStatus.php');
        break;
}
