// Desafio Aritméticos DIO : "Quantidade de Litros pela velocidade"
var Tempo_Velocidade = gets().split(" ");//Digite dois valores(Tempo(h) e a Velocidade(V))
var Tempo = parseInt(Tempo_Velocidade[0]);
var Velocidade = parseInt(Tempo_Velocidade[1]);
var Litros = 0
var Litros = ((Tempo*Velocidade)/12).toFixed(3);
console.log(Litros);

