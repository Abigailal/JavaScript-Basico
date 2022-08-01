//Cuadrado
// La instrucción let declara una variable de alcance local con ámbito de bloque(block scope), la cual, opcionalmente, puede ser inicializada con algún valor.
function cuadrado2(){
  let ladoInput = document.getElementById("cLado");
  let ladoCuadrado = parseFloat(ladoInput.value);

  let perimetroC = ladoCuadrado * 4;
  let areaC = ladoCuadrado * ladoCuadrado;

  const resultSelect = document.getElementById("resultP");
  resultSelect.innerText = "El perímetro del cuadrado es: " + perimetroC.toFixed(2) + "cm y el área es: " + areaC.toFixed(2) + "cm^2";
}

//Triangulo
function triangulo3(){
  let lado1 = document.getElementById("tLado1");
  let iLado1 = parseFloat(lado1.value);

  let lado2 = document.getElementById("tLado2");
  let iLado2 = parseFloat(lado2.value);

  let base = document.getElementById("tBase");
  let iBase = parseFloat(base.value);
    
  let altura = document.getElementById("tAltura");
  let iAltura = parseFloat(altura.value);

  if(iLado1 === iLado2){
    alert("Los lados del triangulo son iguales, así que se calculara automaticamente la altura");
    document.getElementById("tAltura").style.display = 'none';
    document.getElementById("mostrar1").style.display = "none";
    document.getElementById("calcular2").style.display = "none";
    document.getElementById("calcular1").style.display = "inline";
    triangulo2();
       
   }else{
    let iPerimetro = iLado1 + iLado2 + iBase;
    let iArea = (iBase*iAltura)/2;

  const resultSelect = document.getElementById("resultT");
  resultSelect.innerText = "El perímetro del triangulo es: " + iPerimetro.toFixed(2) + "cm y el área es: " + iArea.toFixed(2) + "cm^2";
  }
}

function triangulo2() {
  let lado1 = document.getElementById("tLado1");
  let iLado1 = parseFloat(lado1.value);
  
  let lado2 = document.getElementById("tLado2");
  let iLado2 = parseFloat(lado2.value);
  
  let base = document.getElementById("tBase");
  let iBase = parseFloat(base.value);
    

  if(iLado1 === iLado2){
        //Altura = sqrt (LadoBase^2 - lado2^2)
        let ladoBase = iBase / 2;
        let lBase = ladoBase * ladoBase;
        let l2 = iLado2 * iLado2;
        let lAltura = Math.sqrt(l2 - lBase);
        let tPerimetro = iLado1 + iLado2 + iBase;
        let tArea = (iBase*lAltura)/2;

        const resultSelect = document.getElementById("resultT");
        resultSelect.innerText = "El perímetro del triangulo es: " + tPerimetro.toFixed(2) + "cm y el área es: " + tArea.toFixed(2) + "cm^2";
  }else{
        alert("Los lados del triangulo no son iguales, así que ingrese la altura");
        document.getElementById("tAltura").style.display = 'inline';
        document.getElementById("mostrar1").style.display = "inline";
        document.getElementById("calcular2").style.display = "inline";
        document.getElementById("calcular1").style.display = "none";
        triangulo3();

  }
}

//Circulo
function circulo2(){
  let radio = document.getElementById("cRadio"); 
  let cRadio = parseFloat(radio.value);
  const PI = Math.PI;

  let diametroCi = 2 * cRadio;
  let perimetroCi = diametroCi * PI;
  let areaCi = PI * (cRadio**2);

  const resultSelect = document.getElementById("resultC");
  resultSelect.innerText = "El perímetro del circulo es: " + perimetroCi.toFixed(2) + "cm y el área es: " + areaCi.toFixed(2) + "cm^2";
}
