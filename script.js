/*- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

//1- STABILISCO IL PREZZO PER CHILOMETRO
const costokm = 0.21
//2- INSERIRE CHILOMETRI DA PERCORRERE
const userkm = Number(prompt('Inserire chilometri da percorrere')) 
//2- CALCOLO IL PREZZO DEL BIGLIETTO
let totalprize = userkm * costokm
console.log(totalprize)
//2- INSERIRE ETA' PASSEGGERO
const userage = Number(prompt("inserire età passeggero"))
//4- SE IL PASSEGGERO HA MENO DI 18 ANNI SCONTO DEL 20%
// - SE IL PASSEGGERO HA 65 ANNI O PIU' SCONTO DEL 40%
let discount = 0
if (userage < 18) {
    discount = totalprize * 0.20
} else if(userage >= 65){
    discount = totalprize * 0.40
}
totalprize -= discount
//6- DICHIARO PREZZO DEL BIGLIETTO
alert(`Il prezzo del biglietto è di: €${totalprize.toFixed(2)}`)
if (discount !== 0){
    alert(`Le è stato applicato un sconto di: €${discount.toFixed(2)} in base alla sua età`)
}
