console.log("prova js");

let weightlagguage = Number(prompt("Inseri il peso della tua valgia"));
console.log(pesovaligia(weightlagguage));



function pesovaligia(weightlagguage) {

    if (weightlagguage === 0) {
        return "Errore nella misurazione riprovare"
    } else if (weightlagguage <= 10) {
        return "bagaglio a mano"
    } else if (weightlagguage <= 23) {
        return "bagaglio da stiva"
    } else
        return "collo ingombrante"
}