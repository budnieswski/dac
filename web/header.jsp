<%@taglib prefix="c"uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
    <figure class="logo"><a href="./">Vanilla</a></figure>

      <a class="login" href="#login">Fazer Login</a>

    <div class="carrinho">
      <div class="total">0</div>
      <a href="./?t=carrinho"> Visualizar Carrinho </a>
    </div>

    <div class="clearfix"></div>

    <ul class="menu-header">
      <li class="ativo"><a href="./">Home</a></li>
      <li><a href="./?t=produtos">Produtos</a></li>
      <li><a href="./?t=sobre-nos">Sobre nós</a></li>
      <li><a href="./?t=produtos">Encomendas</a></li>
      <li><a href="./?t=localizacao">Localização</a></li>
    </ul>
  </div>
</div> <!-- e#header -->

<div id="content">
  <div class="wrap">