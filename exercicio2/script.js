let numero = Number(prompt('Digite um número e tente acertar o número surpresa!'));

switch (numero) {
    case 6:
        console.log('O número escolhido foi o 6, errou')
        break;
    case 12:
        console.log('O número escolhido foi o 12, errou')
        break;
    case 18:
        console.log('O número escolhido foi o 18, errou')
        break;
    case 24:
        console.log('O número escolhido foi o 24, errou')
        break;
    case 30:
        console.log('O número escolhido foi o 30, acertou!')
        break;
    default:
        console.log('Não foi dessa vez! :(')
}