function puntos(number){
  number = number.toString();
  number = number.replace(".",",");
  largoNumero = 6;
  while (number.length > largoNumero){
    numberCortado1 = number.substring(0, number.length - largoNumero);
    numberCortado2 = number.substring((number.length - largoNumero), number.length)
    largoNumero += 4;
    number = numberCortado1 + "." + numberCortado2;
  }
  return number;
}

//parseInt("1".concat(porcentajeAnual));
function invertir(inversion, porcentajeAnual, años){
  document.write("<p>Tu inversión inicial es de $" + inversion + " con una ganancia anual del " + porcentajeAnual + "%</p><br>");
  porcentajeAnual = 100 + porcentajeAnual;
  porcentajeAnual = porcentajeAnual/100;
  let inversionInicial = inversion
  for (let i=1; i != años + 1; i++){
    inversion = Math.fround((inversion * porcentajeAnual)+inversionInicial);
    inversion = parseFloat(inversion).toFixed(2)
    inversion = puntos(inversion);
    
    document.write("<p>Tu inversión en el año " + i + " sería de: <b> $" + inversion + "</b></p><br>");
    while (inversion.includes(".")){
      inversion = inversion.replace(".","");
    }
    
    if(inversion.includes(",")){
      inversion = inversion.slice(0,inversion.length-3);
    }
    inversion = parseInt(inversion);
    
  }
}  

parameter1 = parseInt(prompt("Ingrese la inversión anual que hará."));
parameter2 = parseInt(prompt("Ingrese la rentabilidad anual."));
parameter3 = parseInt(prompt("Ingrese la cantidad de años los cuales hará esta inversión."));
invertir(parameter1,parameter2,parameter3);
