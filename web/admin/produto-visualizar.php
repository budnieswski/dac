
<p id="breadcrumbs">
  <a href="./">Home</a> &raquo 
  <a href="#">Produto</a> &raquo 
  <span class="breadcrumb_last">Produto Visualizar</span>
</p>

<div class="clearfix"></div>

<h1>Visualizar Produtos</h1>
<div class="formulario">
  <form action="#" id="form-cadastro">
    <p> <label for="categoria">Categoria</label> 
      <select name="categoria" id="categoria">
        <option value="">---</option>
        <option value="">A1</option>
        <option value="">B2</option>
        <option value="">C3</option>
      </select>
      <input type="submit" class="botao exibir alignright" name="" id="">
    </p>
  </form>
</div>

<div class="clearfix"></div>
<h2>Produtos categoria: <i>Bolo</i></h2>

<table>
  <thead>
    <tr>
      <td></td>
      <td>Nome</td>
      <!-- <td>Categoria</td> -->
      <td>Quantidade</td>
      <td>Preço</td>
      <td>Tempo Preparo</td>
      <td></td>
    </tr>
  </thead>
  <tbody>
    <tr data-id="1">
      <td><figure><img src="./img/produtos/bolo-maracuja.jpg" alt=""/></figure></td>
      <td>Bolo de Maracujá</td>
      <!-- <td>Bolo</td> -->
      <td>7</td>
      <td data-valor-unidade="1">R$ 1,00</td>
      <td>30 minutos</td>
      <td>
        <a class="table-remover" data-id="1" href="#" title="Remover">remover</a><br>
        <a class="table-editar" data-id="1" href="#" title="Editar">Editar</a><br>
      </td>
    </tr>

    <tr data-id="2">
      <td><figure><img src="./img/produtos/bolo-maracuja.jpg" alt=""/></figure></td>
      <td>Bolo de Maracujá</td>
      <!-- <td>Bolo</td> -->
      <td>7</td>
      <td data-valor-unidade="1">R$ 1,00</td>
      <td>30 minutos</td>
      <td>
        <a class="table-remover" data-id="2" href="#" title="Remover">remover</a><br>
        <a class="table-editar" data-id="2" href="#" title="Editar">Editar</a><br>
      </td>
    </tr>
  </tbody>
</table>
