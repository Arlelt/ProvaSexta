
export function farol(cor) {
    let msg = '';
    let bumbum = cor.toLowerCase();
    if (bumbum == 'verde') {
        msg = 'pode passar'
    }
    else if (bumbum == 'vermelho') {
        msg = 'Aguarde'
    }
    else {
        msg = 'Inválido'
    }

    return msg;
}

export function diaSemana(dia) {
    let msg = '';
    

    if (dia == 0)
        msg = 'Domingo'

    if (dia == 1)
        msg = 'Segunda'

    if (dia == 2)
        msg = 'Terça'

    if (dia == 3)
        msg = 'Quarta'

    if (dia == 4)
        msg = 'Quinta'

    if (dia == 5)
        msg = 'Sexta'

    if (dia == 6)
        msg = 'Sábado'

    return msg;

}

export function fatorial (num) {
    for(let i = num-1; i>=1; i--) {
        num = num*i;
    }
    return num;
}

export function sequenciaPar(num)
{
    let array = [];
    for(let i=0; i<num; i++)
    {
        
        array[i] = i*2;
        
    }
    return array;
}

