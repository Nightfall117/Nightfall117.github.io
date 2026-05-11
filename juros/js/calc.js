function calcularMontanteJurosCompostos(valorInicial, taxaJuros, tempo, aporteMensal) {
    // Converte a taxa de juros anual para taxa de juros por período
    const taxaJurosPorPeriodo = taxaJuros / 12;
    
    // Converte o tempo de anos para meses
    const tempoEmMeses = tempo * 12;
    
    // Calcula o montante sem aportes mensais
    const montanteSemAportes = valorInicial * Math.pow((1 + taxaJurosPorPeriodo), tempoEmMeses);
    
    // Calcula os juros acumulados
    const jurosAcumulados = aporteMensal * ((Math.pow((1 + taxaJurosPorPeriodo), tempoEmMeses) - 1) / taxaJurosPorPeriodo);
    
    // Calcula o montante final
    const montanteFinal = montanteSemAportes + jurosAcumulados;
    
    return montanteFinal;
    }
    
    function calcularMontante() {
    // Obtém os valores dos inputs
    const valorInicial = parseFloat(document.getElementById("valorInicial").value);
    const taxaJuros = parseFloat(document.getElementById("taxaJuros").value)/100;
    const tempo = parseFloat(document.getElementById("tempo").value);
    const aporteMensal = parseFloat(document.getElementById("aporteMensal").value);
    
    // Validação de entrada (opcional)
    if (isNaN(valorInicial) || isNaN(taxaJuros) || isNaN(tempo) || isNaN(aporteMensal)) {
    alert("Erro: valores inválidos!");
    return;
    }
    
    // Calcula o montante final
    const montanteFinal = calcularMontanteJurosCompostos(valorInicial, taxaJuros, tempo, aporteMensal);
    
    // Exibe o resultado formatado
    document.getElementById("resultado").innerHTML = `Montante final: R$ ${montanteFinal.toFixed(2)}`;
    }
    //
    document.getElementById("calcular").addEventListener("click", calcularMontante);