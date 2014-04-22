
<div id="carrinho">

  <p id="breadcrumbs">
    <a href="./">Home</a> &raquo 
    <span class="breadcrumb_last">Carrinho</span>
  </p>
  <div class="clearfix"></div>

  <!-- Dialogs -->
  <div id="dialog-remover-carrinho" title="Remover da Cesta ?">
    <p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>Voce tem certeza que deseja remover este item da Cesta ?</p>
  </div>

  <div id="dialog-esvaziar-carrinho" title="Esvaziar Cesta ?">
    <p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>Voce tem certeza que deseja esvaziar a Cesta ?</p>
  </div>
  <!-- e#Dialogs -->

  
  <div class="area-compra">
    <h1>Itens na sua cesta:</h1>
    <a class="esvaziar-carrinho" href="#esvaziar-carrinho">Esvaziar Carrinho</a>
    <div class="clearfix"></div>
    
    <table>
      <thead>
        <tr>
          <td></td>
          <td>Nome</td>
          <td>Quantidade</td>
          <td>Preço Unitário</td>
          <td>Total</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr data-id="1">
          <td><figure> <img src="./img/produtos/bolo-maracuja.jpg" widht="165" height="160" alt="#" title="#" /> </figure></td>
          <td>Bolo de Maracujá</td>
          <td>7</td>
          <td data-valor-unidade="1">R$ 1,00</td>
          <td data-valor-total="7">R$ 7,00</td>
          <td>
            <a class="table-remover" data-id="1" href="#remover-carrinho" title="Remover">remover</a><br>
          </td>
        </tr>

        <tr data-id="2">
          <td><figure> <img src="./img/produtos/bolo-maracuja.jpg" widht="165" height="160" alt="#" title="#" /> </figure></td>
          <td>Bolo de Maracujá</td>
          <td>5</td>
          <td data-valor-unidade="1">R$ 1,00</td>
          <td data-valor-total="5">R$ 5,00</td>
          <td>
            <a class="table-remover" data-id="2" href="#remover-carrinho" title="Remover">remover</a><br>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="valor-total-compra">Valor total: R$ 12.00</div>
    <!-- @@ Tempo para entrega -->
    <!-- @@ Dia para entrega -->
    <a href="#finalizar-carrinho" class="finalizar">Encomendar !</a>
  </div>

  <div class="carrinho-vazio">Cesta Vazia =/</div>
  

</div>
<!-- e#carrinho -->

