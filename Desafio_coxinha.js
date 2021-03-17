//Desafio de Problemas Aritméticos DIO = "Coxinha do Bueno"
var entrada = gets().split(" ");
var H = parseInt(entrada[0]);
var P = parseInt(entrada[1]);
media = 0
if (H>=1 && P<=1000){
    media = (H/P).toFixed(2)
}
console.log(media);

