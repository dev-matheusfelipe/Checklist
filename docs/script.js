document.getElementById("seuFormulario").addEventListener("submit", function(event){
    event.preventDefault();
  
    // Limpa todos os campos do formulário
    this.reset();
  
    // Exibe um alerta informando que o formulário foi enviado
    alert("Formulário enviado com sucesso!");
  
    return false;
  });
  