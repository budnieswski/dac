jQuery(function($){

// CSS
$(".the_post .thumb .subimages li:last-child").css('margin-right',0);
$("#carrinho table td:last-child").css('border',0);



// Login
$("#dialog-login").dialog({
  autoOpen: false,
  resizable: false,
  width: 350,
  modal: true,
  buttons: {
    "Logar": function() {$('#form-login').submit(); },
    Fechar: function() {$(this).dialog("close"); }
  }
});
$('a[href=#login]').click(function(event){
  event.preventDefault();
  $("#dialog-login").dialog('open');
});




// Banner
if ($('#banner > .wrap ul li').length>1) {
  var unslider = $('#banner > .wrap').unslider({delay: 3000, dots: true});
  $('.unslider-arrow').click(function(event) {
    event.preventDefault();
    var fn = this.className.split(' ')[1];          
    unslider.data('unslider')[fn]();
  });
}

})