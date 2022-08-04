// const bool1=false;
// const bool2= true;
// const bool3=true;
//  if : deve ser sempre verdadeira para o bloco ser 
//  executado
// if (bool1) {
//     alert("entrei no if")
// } else {
//     alert("entrei no else")
// }

// se o primeiro if foi atendido, os outros são ignorados
// if (bool1===bool2){
//     alert("1 e 2 iguais")
// } else if (bool2===bool3){
//     alert("2 e 3 iguais")
// } else if (bool1===bool3){
//     alert("1 e 3 iguais")
// } else {
//     alert("Nenhuma das condições foi atendida")
// }

const media=4;
if(media >= 5){
    console.log("Você foi aprovado!")
} else if(media >=3){
    alert("Recuperação!")
} else if (media < 3){
    alert("Você foi reprovada!")
} else {
    alert("Dado inválido")
}
// para dar invalido, colocar uma string por exemplo
// codigo levir
// const media = +prompt("Qual foi sua nota no exame final?")

// if (media >= 5 && media <= 10) {
//     alert("Você foi aprovado!")
// } else if (3 <= media && media <= 4.9999999999999999999999999999999999999999999999 ) {
//     alert("Você está de recuperação!")
// } else if (media < 3) {
//     alert("Você foi reprovado!")
// } else {
//     alert("Dado invalido")
// }


