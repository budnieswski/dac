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

  // Login Admin
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