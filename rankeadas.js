
function resultado(vitorias, derrotas){
   return vitorias - derrotas
}

const vit = parseInt(gets());
const der = parseInt(gets());

result = resultado(vit, der);

if(result < 10){
    print("O Herói tem de saldo de " + result + "está no nível de ferro");
}

else if(result > 11 && result <= 20){
    print("O Herói tem de saldo de " + result + "está no nível de bronze");
}

else if(result > 21 && result <= 50){
    print("O Herói tem de saldo de " + result + "está no nível de prata");
}

else if(result > 51 && result <= 80){
    print("O Herói tem de saldo de " + result + "está no nível de bronze");
}

else if(result > 81 && result <= 90){
    print("O Herói tem de saldo de " + result + "está no nível de diamante");
}

else if(result > 91 && result <= 100){
    print("O Herói tem de saldo de " + result + "está no nível de lendario");
}

else if(result >= 101){
    print("O Herói tem de saldo de " + result + "está no nível de imortal");
}

