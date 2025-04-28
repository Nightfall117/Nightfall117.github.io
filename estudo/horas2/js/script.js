//Horas
function atualizarHorario() {
    var data = new Date();
    var horario = data.toLocaleTimeString( hour12: false);
    document.getElementById("horario").innerHTML = horario;
}

setInterval(atualizarHorario, 500);

// Clima
let lat
let lon
function getCoordinates() {
    // Verifica se o navegador suporta a API Geolocation
    if (!navigator.geolocation) {
        alert("Seu navegador não suporta a API Geolocation.");
        return;
    }

    // Solicita a posição do usuário
    navigator.geolocation.getCurrentPosition(
        function (position) {
            // Exibe as coordenadas do usuário
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=87c5cb74abc012352acb6ea249696796&units=metric&lang=pt_br";
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // Decodificar a resposta JSON
                    var data = JSON.parse(xhr.responseText);

                    // Exibir os dados do clima
                    let icon = data.weather[0].icon;
                    let linkimagem = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
                    document.getElementById("temperature").innerHTML = data.main.temp;
                    document.getElementById("description").innerHTML = data.weather[0].description;
                    document.getElementById("icon").setAttribute('src', linkimagem);

                }
            };
            xhr.send();
        },
        function (error) {
            // Exibe um erro se o usuário não permitir a localização
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.log("O usuário não permitiu a localização.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("A localização do usuário não está disponível.");
                    break;
                case error.TIMEOUT:
                    console.log("O tempo limite para obter a localização expirou.");
                    break;
                default:
                    console.log("Ocorreu um erro desconhecido.");
            }
        }
    );
}

// Chama a função `getCoordinates()`
getCoordinates();
var Hora = document.getElementById('time');
var Clima = document.getElementById('clima');
let lever = document.getElementById('botao');
var i = true;
function ocultar() {


    if (i) {
        i = false;
        Clima.style.display = 'flex';
        Hora.style.display = 'none';
        console.log("clima")
    } else {
        i = true;
        Clima.style.display = 'none';
        Hora.style.display = 'flex';
        console.log("hora");
    }
}
lever.addEventListener("click", ocultar);
