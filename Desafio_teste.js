let fatores = "-7 -3";
let line = fatores.split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);
let q = parseInt(a / b);

let r = a - b * q;

if (r < 0) {
    
    r += Math.abs(b);
    q = (a - r) / b;

}

// parseInt - Apenas como redundância.
console.log(parseInt(q) + " " + parseInt(r));