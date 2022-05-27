 function farol(cor) {
    let msg = ''
    if (cor == 'verde') {
        msg = 'pode passar'
    }
    else if (cor == 'vermelho') {
        msg = 'Aguarde'
    }
    else {
        msg = 'Inválido'
    }

    return msg;
}

console.log(farol('verde'))