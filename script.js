document.addEventListener("DOMContentLoaded", ()=>{
    function calcularDiferencaData(dataFutura) {
        const hoje = new Date();
        const futura = new Date(dataFutura);
        const diferenca = futura - hoje;
    
        if (diferenca <= 0) {
          return "A data já passou!";
        }
    
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
        return `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos para 22/05/2027.`;
      }
    
      function atualizarData() {
        const dataAlvo = "2027-05-22T15:30:00"; // Data futura
        const resultado = calcularDiferencaData(dataAlvo);
    
        const elemento = document.getElementById("dataDinamica");
        elemento.textContent = resultado;
      }
      setInterval(atualizarData, 1000);
})