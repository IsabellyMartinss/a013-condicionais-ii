let numero = Number(prompt('Digite um número'));

// ifs aninhados

if(numero %2 === 0){
    if(numero %3 === 0){
        console.log('O número é divisível por 2 e por 3')
    }
}else{
   console.log('Não é Divisível por 2 e por 3')
    }

// Utilizando um operador lógico para unir duas operações relacionais    

if(numero %2 === 0 && numero %3 === 0){
    console.log('O número é divisível por 2 e por 3')
}else{
    console.log('O número não é divisível por 2 e por 3')
}

// numero === 30 ? console.log('Ufa, acertei!'): console.log('Não foi dessa vez')