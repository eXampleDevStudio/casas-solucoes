var linkWhats = "https://api.whatsapp.com/send?phone=556381590358&text=";
var turno = ['bom dia!', 'boa tarde!', 'boa noite!'];

function msg(turno, tema) {
    var textUppercase = tema.toUpperCase();
    return `Olá, ${turno} Poderia me ajudar? Gostaria de falar sobre ${textUppercase}`
}

function enviarMsg(value) {
    var date = new Date()
    var hour = date.getHours();

    if (hour>=6 && hour < 12) {
        var msgpadrao = msg(turno[0], value);
        window.open(linkWhats + msgpadrao);
    } else if (hour > 12 && hour < 18) {
        var msgpadrao = msg(turno[1], value);
        window.open(linkWhats + msgpadrao);
    } else {
        var msgpadrao = msg(turno[2], value);
        window.open(linkWhats + msgpadrao);
    }
    //window.open(linkWhats + value)
}

