//Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.

import { input, print } from "./io.js"

function main(){

    //entrada da letra e converte para caixa alta caso o usuário não tenha entendido...
    const letra = input('Digite o seu sexo[F/M]: ').toUpperCase()

    //verifica se foi F
    if(letra === 'F'){

        print('[F - Feminino]')
    }
    //verifica se foi M
    else if(letra === 'M'){

        print('[M - Masculino]')
    }
    //se não foi nenhum dos dois
    else{
        print('Sexo Inválido.')
    }
}

main()