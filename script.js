// exrecice 1
let x = 45;
let y = 40;
 if(x > y){
    console.log(`le nombre le plus grand est ${x}`);
 }
 else{
    console.log(`le nombre le plus petit est ${y}`);
 }

//  Exercice 2 : Chihuahua

let newDog="Chihuahua";
console.log(`${newDog} ${newDog.length}`);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if(newDog == "Chihuahua"){
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée");
    
}else {
    console.log("Je m'en fous, je préfère les chats");

}

// Exercice 3 : Pair Ou Impair

let nombre = prompt(" Entre un nombre ");

 if( nombre %2 == 0){
    console.log(`nombre est un nombre pair ${nombre}`);
 }
 else{
    console.log(`nombre est un nombre impair ${nombre}`);
 }
  
//  exercice 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if(users.length == 0 ){
    console.log("personne n'est connecté");
}
else if  (users.length == 1){
    console.log(`${users[2]}  est en ligne` );
}
else if (users.lenght == 2){
    console.log(`${users[2]} et ${users[1]} sont  en ligne` );

}
else if (users.lenght > 2){
    console.log(`${users[0]} , ${users[1]} et ${users.length -2} sont  en ligne` );
}