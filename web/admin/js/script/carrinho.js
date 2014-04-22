jQuery(function($){
// Carrinho

var headerCarrinho = $('#header .carrinho'),
    headerCarrinhoTotal = headerCarrinho.find('.total');


// Funcoes
{

  // Atualiza a quantidade no Header quando for dado F5
  function car_headerStart () {    
    // Carrinho exite
    if ($.cookie('carrinho')) {
      var carrinho = JSON.parse($.cookie('carrinho'));
      var total = 0;

      for (var key in carrinho) {
        total += carrinho[key];
      }

      car_headerUpdate( total );
    } //endif
  }

  // Adiciona um item ao Cookie->carrinho
  function car_add (id) {    
    if ( $.cookie('carrinho') )
      var carrinho = JSON.parse($.cookie('carrinho'));
    else
      var carrinho = {};

    if (carrinho[id]) {
      carrinho[id] = (carrinho[id]*1)+1;
    } else {
      carrinho[id] = 1;
    }
   
    $.cookie('carrinho', JSON.stringify( carrinho ));

    car_headerUpdate(); // Add +1
  }

  // Esvazia o carrinho
  function car_esvaziar () {
    $.removeCookie('carrinho');
    car_headerUpdate(0);
  }

  // Remover item do carrinho
  function car_remover (id) {
    var carrinho = JSON.parse($.cookie('carrinho'));

    if (carrinho[id]) {
      delete carrinho[id]
    }
   
    $.cookie('carrinho', JSON.stringify( carrinho ));

    car_headerStart(); // Atualiza / Re-conta
  }

  // Finaliza o carrinho
  function car_finalizar () {
    console.log('Finalizando carrinho ...');
  }


  /////////////////////////
  // Funcionais
  /////////////////////////

  // Adiciona uma quantidade no carrinhoHeader
  function car_headerUpdate (quantidade) {
    if (!quantidade && quantidade!==0) {
      headerCarrinhoTotal.html((headerCarrinhoTotal.text() * 1) + 1);
    } else {
      headerCarrinhoTotal.html( quantidade );
    }
  }

  // Remove um item da Table, se nao tiver mais, tira a Table
  function car_removeTable (id) {
    var tbody =  $('#carrinho table tbody');

    // Se o ID for 0, foi REMOVIDO TODO O CARRINHO
    if (tbody.find('tr').length == 1 || id == 0) {
      $('.area-compra').hide();
      $('.carrinho-vazio').fadeIn();
    }

    tbody.find('tr[data-id='+id+']').remove();
  }

  // Apos removido um item, diminui o valor total (design)
  function car_atualizaValorTotalTable (id) {
    var elemValorTotalCompra = $('.valor-total-compra'),
            valorTotalCompra = elemValorTotalCompra.asNumber({parseType: 'float' }),
                        item = $('#carrinho table tbody tr[data-id='+id+']'),
                   itemPrice = item.find('td[data-valor-total]').attr('data-valor-total');
                   itemPrice *= 1;

    elemValorTotalCompra
      .text( valorTotalCompra - itemPrice )
      .formatCurrency({symbol: "Valor total: R$ "});
  }

  // Remove valores nulos
  function cleanArray(actual){
    var newArray = new Array();
    for(var i = 0; i<actual.length; i++){
        if (actual[i]){
          newArray.push(actual[i]);
      }
    }
    return newArray;
  }

}



// Start
{
  car_headerStart();

  // Remover UM item do carrinho
  $("#dialog-remover-carrinho").dialog({
    autoOpen: false,
    resizable: false,
    width: 350,
    modal: true,
    buttons: {
      "Remover Item": function() {
        car_atualizaValorTotalTable($(this).attr('data-id'));
        car_removeTable($(this).attr('data-id'));
       car_remover($(this).attr('data-id'));

        $(this).removeAttr('data-id');
        $(this).dialog("close");
      },
      Fechar: function() {
        $(this).dialog("close");
      }
    }
  });

  // Remover TODOS os itens do carrinho
  $("#dialog-esvaziar-carrinho").dialog({
    autoOpen: false,
    resizable: false,
    width: 350,
    modal: true,
    buttons: {
      "Esvaziar Cesta !": function() {
        car_esvaziar();
        car_removeTable(0);
        $(this).dialog("close");
      },
      Fechar: function() {
        $(this).dialog("close");
      }
    }
  });

}



// Triggers
{
  // Adicionar ao Carrinho
  $('a[href=#adicionar-carrinho]').click(function(event){
    event.preventDefault();

    car_add($(this).attr('data-id'));
  });

  // Esvaziar Carrinho
  $('a[href=#esvaziar-carrinho]').click(function(event){
    event.preventDefault();
    
    $("#dialog-esvaziar-carrinho").dialog('open');
  });

  // Remover Carrinho
  $('a[href=#remover-carrinho]').click(function(event){
    event.preventDefault();
    
    $("#dialog-remover-carrinho").attr('data-id', $(this).attr('data-id') ).dialog('open');
  });

  // Finalizar Carrinho
  $('a[href=#finalizar-carrinho]').click(function(event){
    event.preventDefault();

    car_finalizar();
  });
}

});