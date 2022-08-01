function formulaMedia(lista){
  const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento){
          return valorAcumulado + nuevoElemento;}
  )
  const promediolista = sumaLista / lista.length;

  return promediolista;
} 

function formulaMediana(list){
  let listOrder = list;
  listOrder.sort((a, b) => a - b);
  console.log("God is alive " + listOrder);

  let lista = listOrder;
  
  const mitadlista = parseInt(lista.length / 2);
  let mediana;

  function esPar(numerito){
      if(numerito % 2 == 0){
          return true;
      } else {
          return false;
      }   
  }

  if(esPar(lista.length)){
      const elemnto1 = lista[mitadlista - 1];
      const elemnto2 = lista[mitadlista];
      const elemnto1y2 = formulaMedia([
          elemnto1,
          elemnto2,
      ])

    mediana =  elemnto1y2;

  } else{
      mediana = lista[mitadlista];
  }

  console.log(mediana);

  return mediana;
}

function formulaModa(list){
  let lista = list;

  const listaCount = {};

  lista.map(
      function (elemento){
          if(listaCount[elemento]){
              listaCount[elemento] += 1;
          } else{
          listaCount[elemento] = 1;
          }
      }
  );
  console.log(listaCount);
  const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = listaArray[listaArray.length - 1];
  return moda[0];
}


function calcularMedia(){
  
  let inputSelect = document.getElementById("datos");
  let value = inputSelect.value;

  let valueArray = Array.from(value.split(','),Number);
  let promedio = formulaMedia(valueArray);

  const resultSelect = document.getElementById("resultP");
  resultSelect.innerText = "El promedio de los datos ingresados es: " +  promedio.toFixed(2);
}

function calcularMediana(){

  let inputSelect = document.getElementById("datos");
  let value = inputSelect.value;

  let valueArray = Array.from(value.split(','),Number);
  let mediana = formulaMediana(valueArray);

  let resultSelect = document.getElementById("resultP");
  resultSelect.innerText = "La mediana de los datos ingresados es: " +  mediana;
}


function calcularModa(){

  let inputSelect = document.getElementById("datos");
  let value = inputSelect.value;

  let valueArray = Array.from(value.split(','),Number);
  let moda = formulaModa(valueArray);

  let resultSelect = document.getElementById("resultP");
  resultSelect.innerText = "La moda de los datos ingresados es: " +  moda;
}