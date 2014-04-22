// Mask
$("input[name=numero]").setMask({mask: "99999"});

$("input[name=telefone]").setMask({mask: "(99) 9999-9999"});
$("input[name=telefone]").keyup(function () {
  var t = $(this),
      n = t.val();
  if (n[1] == "1" && n[2] == "1" && n[5] == "9") {
      t.setMask({
          mask: "(99) 99999-9999"
      })
  } else {
      t.setMask({
          mask: "(99) 9999-9999"
      })
  }
});

/*
* Validacoes
*/
{
  // Cadastro Cliente
  $("#form-cadastro").validate({
    rules: {
      nome:     { required: true, minlength: 3 },
      email:    { required: true, email: true, /*remote: 'test.php?type=email'*/ },
      telefone: { required: true, minlength: 6 },
      rua:      { required: true, minlength: 2 },
      numero:   { required: true },        
      senha:    { required: true, minlength: 6},
      senha2:   { required: true, equalTo: '#senha'}
    },
    messages: {
      nome: {
        required: 'Insira um Nome',
        minlength: jQuery.format("Nome com no minimo {0} caracteres")
      },
      email: {
        required: 'Insira um E-mail',
        email: 'Email invalido',
        // remote: "E-mail ja esta cadastrado"
      },
      telefone: {
        required: 'Insira um Telefone',
        minlength: jQuery.format("Telefone com no minimo {0} caracteres")
      },
      rua: {
        required: 'Insira uma Rua',
        minlength: jQuery.format("A Rua deve ter no minimo {0} caracteres")
      },
      numero: {
        required: 'Insira um numero',
      },        
      
      senha: {
        required: 'Digite uma Senha',
        minlength: jQuery.format("Senha com no minimo {0} caracteres")
      },
      senha2: {
        required: 'Repita a senha',
        equalTo: 'As senhas nao sao iguais'
      }
    },
    errorPlacement: function(error, element) {
      // error.appendTo( $('.extra') );
      // $('.extra').append(error);
    },
    submitHandler: function(form) {
      form.submit();
      alert("submitted!");
    },
    // success: function(label) {label.remove()}
  });

  // Login Cliente
  $("#form-login").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      senha: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      email: {
        required: 'Insira um E-mail',
        email: 'E-mail invalido'
      },
      senha: {
        required: 'Insira a senha',
        minlength: jQuery.format("A Senha deve conter no minimo {0} caracteres")
      }
    },
    submitHandler: function(form) {
      form.submit();
      alert("submitted!");
      // $.ajax({
      //   url: 'test.php?type=login',
      //   type: 'POST',
      //   data: form.serialize(),
      //   success: function (data) {
      //     if (data == 'false') {

      //       console.log('login/senha errados');
      //     } else if (data == 'true') {
      //       console.log('OKAY');
      //     }
      //   }
      // });
    },
    // success: function(label) {label.remove()}
  });
} // end Validacoes;