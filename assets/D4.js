/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(L1, L2) {
  return L1 * L2;
}

console.log(area(5, 7));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  }
  return num1 + num2;
}

console.log(crazySum(5, 5));
console.log(crazySum(5, 9));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a) {
  if (a > 19) {
    return Math.abs(a - 19) * 3;
  }
  return Math.abs(a - 19);
}

console.log(crazyDiff(21));
console.log(crazyDiff(3));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  }
}

console.log(boundary(45));
console.log(boundary(101));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string) {
  if (string.startsWith("EPICODE")) {
    return string;
  }
  return "EPICODE" + " " + string;
}

console.log(epify("ciao"));
console.log(epify("dice ciao a tutti"));
console.log(epify("EPICODE dice ciao a tutti"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  if (n % 3 === 0 || n % 7 == 0) {
    return console.log("il numero e un multiplo di 3 o di 7");
  }
}

check3and7(21);
check3and7(9);
check3and7(22);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro 
 (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
  //   let a = string.split("");
  //   let b = a.reverse();
  //   let c = b.join("");
  return string.split("").reverse().join("");
}

console.log(reverseString("hello"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
  let a = string.split("");
  a[0] = a[0].toUpperCase();

  for (let i = 0; i < a.length; i++) {
    const e = a[i];
    if (e === " ") {
      a[i + 1] = a[i + 1].toUpperCase();
    }
  }
  let b = a.join("");
  return b;
}

console.log(upperFirst("ciao io sono una stringa"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa 
 senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string) {
  let a = string.split("");
  a.splice(0, 1);
  a.splice(a.length - 1, 1);

  return a.join("");
}

console.log(cutString("hello"));
console.log(cutString("mi chiamo Andrea"));
console.log(cutString("ciao io sono una stringa"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n 
 e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let array = [];
  function random() {
    return Math.floor(Math.random() * 10);
  }
  for (let i = 0; i < n; i++) {
    array.push(random());
  }
  return array;
}

console.log(giveMeRandom(9));
