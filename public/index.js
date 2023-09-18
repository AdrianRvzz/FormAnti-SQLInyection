function validarFormulario() {
    const correoVal = $("#floatingInput").val();
    const passVal = $("#floatingPassword").val();
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let formularioValido = true;
  
    if (correoVal.trim() === '') {
      $("#correoError").show();
      formularioValido = false;
    } else {
      $("#correoError").hide();
    }
  
    if (!correoRegex.test(correoVal)) {
      $("#correoFormatoError").show();
      formularioValido = false;
    } else {
      $("#correoFormatoError").hide();
    }
  
    if (passVal.trim() === '') {
      $("#passError").show();
      formularioValido = false;
    } else {
      $("#passError").hide();
    }
  
    return formularioValido;
  }
  
  $("#loginButton").click(function (e) { 
    $("#loading").show()
    
  });

  $("#loginForm").submit(function (e) { 
      if (!validarFormulario()) {
          e.preventDefault();
      }
      
  });

