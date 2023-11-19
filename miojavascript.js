// Carrello e sconti particolari

/*
Oggi il tuo compito Ã¨ creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietÃ  "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietÃ  "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione Ã¨ gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50

let utenteCheEffettuaLAcquisto - marco;
let ambassadordList - [];

  if utenteCheEffettuaLAcquisto.isAmbassador{
    ambassadordList.push(utenteCheEffettuaLAcquisto)
    console.log( + ambassadordList[0].name + " " + ambassadordList[0].lastName) // qui stampo il nome congome come richiesto//
    let TotalPrice - ((prices [0]+ prices [1]+prices [2])*0.7);
   /*   in questi paddaggi sopra ho dichiarato la varibile ambassador list con un valore che si popola nella riga 46
    dove dico che ambassadorList fa push su utente che effettua l'acquisto e viene inserito nell'array 
    come visto a lezione mettendo price 0 vuoldire 34, price 1 equivale a 5, e price 2 a 2. (c'è uno scollamento perchè 
    si parte da 0 e non da 1)
    sommando i prezzi negli oggetti e moltiplicando per 0.7 aggiungo lo sconto del 30% */

    if TotalPrice > 100 {
        console.log(+TotalPrice+); 
    }else{
            ambassadordList.push(utenteCheEffettuaLAcquisto);
            console.log(+ambassadordList[0].name + " " + ambassadordList[0].lastName)
            TotalPrices - TotalPrice + shippingCost;
            console.log (+TotalPrice+);
        }

         /*     se non è maggiore di 100 allora stampa  e aggiungi i costi di spedizione sulla variabile total price 

           */   
        if(utenteCheEffettuaLAcquisto.isAmbassador){
            let TotalPrices =(prices [0]+ prices [1]+prices [2]);
            if (TotalPrices > 100){
                console.log(TotalPrice);
            }
            else{
                TotalPrices - TotalPrices + shippingCost;
                console.log(+TotalPrice)
            }
        }


         /*     mi sono chiare delle dinamiche e il costrutto ma sull esecuzione e sullo sviluppo mi perdo. 
         
           */   
