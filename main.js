/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const biciclette = [
  { nome: "Corsa 1000", peso: 8.5 },
  { nome: "Speedster X", peso: 7.2 },
  { nome: "Velocità Pro", peso: 6.8 },
  { nome: "Touring Elite", peso: 9.0 },
  { nome: "RaceMaster V3", peso: 7.6 },
  { nome: "AeroFly 200", peso: 6.3 },
  { nome: "SprintCarbon", peso: 6.9 },
  { nome: "Endurance ZX", peso: 7.4 }
];

let pesoMin = biciclette[0].peso;
let nomeBici = "";
for(let i=0; i<biciclette.length; i++){
    if(biciclette[i].peso < pesoMin){
        pesoMin = biciclette[i].peso;
        nomeBici = biciclette[i].nome;
    }
}

console.log(parseFloat(pesoMin) + " il suo nome è:" + (nomeBici));

/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).
*/