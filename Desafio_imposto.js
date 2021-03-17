var Salario = 2500.00 // var Salario = parseFloat(gets())
var imposto = 0
var segundaFaixa = 0
var terceiraFaixa = 0
var quartaFaixa = 0

if (Salario<=2000.00){
  console.log("Isento")
}
else if (Salario>2000.00 && Salario <=3000.00){
  segundaFaixa = (Salario - 2000.00)*0.08;
  imposto = segundaFaixa.toFixed(2);
  console.log('R$ ', imposto);
}
else if (Salario>3000.00 && Salario<=4500.00){
  terceiraFaixa = 1000*0.08 + (Salario-3000)*0.18;
  imposto = terceiraFaixa.toFixed(2);
  console.log('R$ ', imposto);
}
else{
  quartaFaixa = 1000*0.08 + 1500*0.18 + (Salario - 4500)*0.28;
  imposto = quartaFaixa.toFixed(2);
  console.log('R$ ', imposto);
}

