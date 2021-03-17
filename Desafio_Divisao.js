var fatores = "7 3";
var Fatores = fatores.split(" ");
var Dividendo = parseInt(Fatores[0]);
var Divisor = parseInt(Fatores[1]);
if(Divisor !== 0){
  if(Divisor<1000 && Dividendo>= -1000){
    var Resto = Dividendo%Divisor;
    var Quociente = (Dividendo-Resto)/Divisor;
    if (Resto<0){
      Resto += Math.abs(Divisor);
      Quociente = (Dividendo-Resto)/Divisor;
      console.log(Quociente, Resto);
    }
    else if(Resto>=0 && Resto<Math.abs(Divisor)){
        var Quociente = (Dividendo-Resto)/Divisor;
        console.log(Quociente, Resto);
    }
  }
}
