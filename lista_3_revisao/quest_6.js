/**Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno
 *  e escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme
 *  o caso. */

import {input, print} from './io.js'

//funç]ao que verifica o turno e informa a mensagem correspondente ao turno
function verificar_turno(turno){

    //se for matutino
    if(turno === 'M'){

        print('--Bom dia!--')
    }
    //se for vespertino
    else if(turno === 'V'){
        print("--Boa Tarde!--")
    }
    //se for noturno
    else if(turno === 'N'){
        print("--Boa Noite!--")
    }
    //se não for nenhum turno 
    else{
        print("--Valor Inválido!--")
    }
}
function main(){

    //receber o turno e informar a qual letra corresponde o turno
    const turno = input(
`   [ TURNOS ]
[M] - matutino
[V] - vespertino
[N] - noturno
Informe o turno que você estuda:`).toUpperCase()

    verificar_turno(turno)
}

main()