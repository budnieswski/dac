<!doctype html>
<!--[if lt IE 7]>       <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>          <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>          <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->  <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width">
  <link rel="icon" type="image/vnd.microsoft.icon" href="./favicon.ico"/>
  <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="./favicon.ico"/>
  <meta name="author" content="Guilherme Budnieswski"/>

  <title>Vanilla</title>

  <link rel="stylesheet" href="./css/normalize.min.css">
  <link rel="stylesheet" href="./css/boilerplate.min.css">
  <link rel="stylesheet" href="./css/custom-theme/jquery-ui-1.10.3.custom.min.css">
  <link rel="stylesheet" href="./css/main.css">
  <script src="./js/vendor/modernizr-2.6.2.min.js"></script>

</head>
<body>
<!--[if lt IE 7]>
  <p class="chromeframe">
    You are using an <strong>outdated</strong> browser.
    Please <a href="http://browsehappy.com/">upgrade your browser</a> or
    <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a>
    to improve your experience.
  </p>
<![endif]-->

  
<div id="header">
  <div class="wrap">
    <ul class="menu-header dropdown">
      <li class="ativo"><a href="./">Pedidos</a></li>

      <li>
        <a href="#">Produtos</a>
        <ul>
          <li><a href="./?t=produto-cadastro">Adicionar</a></li>
          <li><a href="./?t=produto-editar">Editar</a></li>
          <li><a href="./?t=produto-visualizar">Visualizar</a></li>
        </ul>
      </li>

      <li>
        <a href="#">Categoria</a>
        <ul>
          <li><a href="./?t=categoria-cadastro">Adicionar</a></li>
          <li><a href="./?t=categoria-editar">Editar</a></li>
          <li><a href="./?t=categoria-visualizar">Visualizar</a></li>
        </ul>
      </li>

      <li>
        <a href="#">Usuario</a>
        <ul>
          <li><a href="./?t=usuario-cadastro">Adicionar</a></li>
          <li><a href="./?t=usuario-editar">Editar</a></li>
          <li><a href="./?t=usuario-visualizar">Visualizar</a></li>
        </ul>
      </li>

      <li><a href="./?t=deslogar">Deslogar</a></li>

    </ul>
  </div>
</div> <!-- e#header -->

<div id="content">
  <div class="wrap">
