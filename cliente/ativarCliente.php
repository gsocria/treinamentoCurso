<?php

include_once('./config/constantes.php');
include_once('./config/conexao.php');
include_once('./func/dashboard.php');



$conn = conectar();

$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_STRING);

?>