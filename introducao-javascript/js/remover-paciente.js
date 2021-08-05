var paciente = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("click", function(event){

  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){ //pedindo pro programa esperar o tempo determinado, neste caso 500 milisegundos
    event.target.parentNode.remove();
  },500);

});
