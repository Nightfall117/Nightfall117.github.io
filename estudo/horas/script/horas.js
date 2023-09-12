function atualizarHorario() {
    var data = new Date();
    var horario = data.toLocaleTimeString();
    document.getElementById("horario").innerHTML = horario;
}

setInterval(atualizarHorario, 1000);