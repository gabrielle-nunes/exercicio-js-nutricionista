var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  console.log(this.value);

  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0){
    console.log("Digitado");

    for(var i = 0; i< pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = paciente.textContent;
      var expressao = new RegExp(this.value, "i"); //expressão regular

      if(!expressao.test(nome)){
        paciente.classList.add("invisivel");
      }else{
        paciente.classList.remove("invisivel");
      }
    }
  } else{
    for(var i=0; i < pacientes.length; i++)
    var paciente = array[i];
    paciente.classList.remove("invisivel");
  }
});
