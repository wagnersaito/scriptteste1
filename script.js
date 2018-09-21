//let nome = prompt("Digite aqui seu nome");

//console.log( `O nome foi digitado ${nome}`);

//alert(`Olá! Seja bem vindo, ${nome}!`);

let entrada = prompt("Digite seu número:");

if(entrada !== null && entrada !== ""){
    let numero = Number(entrada);
    if(numero > 15){
        console.log("Número maior que 15.");
    }
    else if(numero < 15){
        console.log("Número menor que 15.");
    }
    else if(numero === 15){
        console.log("Número igual a 15.");
    }
    else{
        console.log("Valor inválido.");
    }
}
else{
    console.log("Nenhum valor digitado.");
}




//if(5 > 6){
 //   cosole.log("Seu calculo está certo");
//}
//else{
    //console.log("Seu calculo está errado");
//}