// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
// gli elementi della lista individualmente con un ciclo while.

// selezione UL
const listaUl = document.querySelector(".lista_spesa");
// stilo una lista per la spesa
const spesa = ["pasta", "uova", "pane", "passata", "latte"];
i = 0;
// ciclo per scorrere ogni elemento della spesa
while (i < spesa.length) {
  console.log(spesa[i]);
  let spesaI = spesa[i];
  //   creo LI
  const elementLi = document.createElement("li");
  //   assegno gli elementi dell'array a LI
  elementLi.append(spesaI);
  //   inserisco dentro a UL
  listaUl.append(elementLi);
  i++;
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
