// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


const nome = prompt ("Qual è il tuo nome?");
const cognome = prompt ("Qual è il tuo cognome");
const colorePreferito = prompt ("Qual è il tuo colore preferito?")

console.log(nome + cognome + colorePreferito + "21");

// document.getElementById("my_password").innerHTML = nome + cognome + colorePreferito + "21";


document.getElementById("my_password").innerHTML = ` ${nome}${cognome}${colorePreferito}21`;



