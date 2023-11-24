// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
// gli elementi della lista individualmente con un ciclo while.

// selezione UL
// const listaUl = document.querySelector(".lista_spesa");
// // stilo una lista per la spesa
// const spesa = ["pasta", "uova", "pane", "passata", "latte"];
// i = 0;
// // ciclo per scorrere ogni elemento della spesa
// while (i < spesa.length) {
//   console.log(spesa[i]);
//   let spesaI = spesa[i];
//   //   creo LI
//   const elementLi = document.createElement("li");
//   //   assegno gli elementi dell'array a LI
//   elementLi.append(spesaI);
//   //   inserisco dentro a UL
//   listaUl.append(elementLi);
//   i++;
// }

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
// BONUS 1 metodo

// const spesa = [];
// // assegno true alla variabile relativa agli elementi della spesa
// let spesaElement = true;
// // avvio il ciclo che continuerà sino a quando gli elementi della spesa sarrano "true"
// while (spesaElement) {
//   spesaElement = prompt("cosa ti serve?");
//   // se l'elemento è "true" viene inserito nell'array
//   // se premo cancel, o invio con il prompt vuoto, si interrompe il ciclo
//   if (spesaElement) {
//     spesa.push(spesaElement);
//   }
// }
// console.log(spesa);

// // selezione UL
// const listaUl = document.querySelector(".lista_spesa");
// // stilo una lista per la spesa
// i = 0;
// // ciclo per scorrere ogni elemento della spesa
// while (i < spesa.length) {
//   console.log(spesa[i]);
//   let spesaI = spesa[i];
//   //   creo LI
//   const elementLi = document.createElement("li");
//   //   assegno gli elementi dell'array a LI
//   elementLi.append(spesaI);
//   //   inserisco dentro a UL
//   listaUl.append(elementLi);
//   i++;
// }
//
//
//
//
//
//
//
//

// BONUS 2 metodo
// // selezione UL
// const listaUl = document.querySelector(".lista_spesa");
// // assegno true alla variabile relativa agli elementi della spesa
// let spesaElement = true;
// // avvio il ciclo che continuerà sino a quando gli elementi della spesa sarrano "true"
// while (spesaElement) {
//   spesaElement = prompt("cosa ti serve?");
//   //  creo LI
//   const elementLi = document.createElement("li");
//   if (spesaElement) {
//     //   assegno gli elementi dell'array a LI
//     elementLi.append(spesaElement);
//     //   inserisco dentro a UL
//     listaUl.append(elementLi);
//   }
// }
