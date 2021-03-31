var linkWhats = "https://api.whatsapp.com/send?phone=556381590358&text=";

function msg(tema) {
    var textUppercase = tema.toUpperCase();
    return `Olá, poderia me ajudar? Gostaria de falar sobre ${textUppercase}`
}

function enviarMsg(value) {
    var msgpadrao = msg(value);
    window.open(linkWhats + msgpadrao);

}

