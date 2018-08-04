"use strict";

const phrases = [
    "A minha primeira vez foi com 10 caras lá em casa. <br>(CINHA, Lingui)",
    "Pô Martinha, bom senso né. <br>(TO, Ben)",
    "Gosto de terminar as coisas numa sentada só. <br>(KRIEGER, Iury)",
    "Ain, que grosseria. <br>(CINHA, Lingui)",
    "Reskin não é pastel. <br>(PUTO, Claudinho)",
    "Nossa, que lindo. <br> (CINHA, Lingui)",
    "Validação em excesso nunca é ruim. <br> (SÂNGELA, Ro)",
    "Pega a régua e levanta o pau! <br>(PEOPLEWARE, Letícia)",
    "Sim, eles são chatos. <br> (JUAN)",
    "Ninguém programa PHP direito. <br> (GABRIEL)",
    "Lógico, não foi feito pra programar direito. <br> (PREUSS)",
    "Má rapaz, passa um caminhão de 9 eixo aí. <br> (MATHEUZINHO)",
    "Não sou agressiva. <br> (LELEK, PPW)",
    "Senta ali que eu te faço um hands on mais tarde. <br> (MARTINS, IURY)",
    "Não quero que eles pensem que foi fácil e que aqui é pastelaria. <br> (AVILES, Marcel)",
    "Como de costume, achei problema... <br> (SUDA)",
    "Breno gosta de baby steps. <br> (SCOFIELD, Karim)",
    "Coisa linda, pode tocar. <br> (QA, Chris)",
    "Ah, não bota no meu! <br> (BENZEMA, 2018)",
    "Nosso time é só fruto da desgraça, não é uns nerd normal. <br> (CINZA, Pato)",
    "Não vai dar, é muito apertadinho o dele! <br>(FLANAR, Artur)",
    "E a cagada que eu to fazendo vai pra outra branch. <br> (REIS, Geraldo)",
    "Godoy, seu bosta! <br> (TODA, Fernando)",
    "RGB é luz. <br> (SCOFIELD, Karim)",
    "Qual problema pode dar em HTTPS? <br> (LINHA, Estre)",
    "Eu sou um reprodutor. <br> (ZUNINO, Breno)",
    "Manda ver, qualquer coisa fazemos rollback. <br> (AVILES, Marcel)",
    "Pode deixar, tá bom. É Natal, chega dessa merda. <br> (GOTTARDO, Mariana)",
    "Paquetá quer ser uma Centauro mas não consegue. <br> (BENZEMA, Karim)",
    "Não é implementação minha, tô nem aí. <br> (AÍ, Alguém)",
    "Esse código tá um monstro. <br> (SUDA, Juliana)",
    "Lorem ipsum dolum sit code review. <br> (REIS, Geraldo)",
    "Não existe Mirror pra DEV. Pra gente é tudo na master. <br> (SILVA, Gabriel)",
    "É um time que não zoa mais. <br> (ZUNINO, Breno)",
    "É muita autoestima. <br> (ZART, Muni)",
    "É um time que faz plágio. <br> (ZART, Muni)",
    "Dedo no c* e gritaria. <br> (PREUSS, Marta)",
    "É um time hostil. <br> (BENZEMA, Karim)",
    "A Busca é um produto hostil. <br> (SILVA, Gabriel)",
    "É um time que reclama. <br>(ZUNINO, Breno)",
    "Se eu visse algum problema em fumar eu não fumaria. <br> (CIGARREIRA, Gustavo)"
];

let setOverlay = () => {
    let overlay = $("#overlay");
    let img = $("#canvas");
    overlay.width(img.css("width"));
    overlay.height(img.css("height"));
    overlay.css("top", img.offset().top + "px");
    overlay.css("left", img.offset().left + "px");
    setText();
};

let setCanvasStyle = () => {
    document.getElementById("canvas").src = "https://unsplash.it/" + window.innerWidth + "/" + window.innerHeight + "?random";
};

let setText = () => {
    let element = document.getElementById("text");
    let phrase = phrases[Math.floor(Math.random() * phrases.length)];
    element.innerHTML = phrase;
};
