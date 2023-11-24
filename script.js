// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
// gli elementi della lista individualmente con un ciclo while.

// selezione UL
const listaUl = document.querySelector(".lista_spesa");
// stilo una lista per la spesa
const spesa = ["farina", "uova", "latte"];
// ciclo per scorrere ogni elemento della spesa
i = 0;
while (i < spesa.length - 1) {
  i++;
  //   stampo in console gli elementi della spesa signolarmente
  console.log(spesa[i]);
  //   salvo l'elemento iesimo dentro una variabile
  let spesaI = spesa[i];
  //   creo LI
  const elementLi = document.createElement("li");
  //   assegno gli elementi dell'array a LI
  elementLi.append(spesaI);
  //   inserisco dentro a UL
  listaUl.append(elementLi);
}

//
//
//
//
//
//
//
//
//
//
//
