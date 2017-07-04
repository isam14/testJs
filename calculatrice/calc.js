
/*
var chiffre1 = Number (prompt("Saisir un chiffre"));

var chiffre2 = Number (prompt("saisir un deuxieme chiffre"));


var somme = chiffre1 + chiffre2
var multiplication = chiffre1 * chiffre2

alert("Voici le resultat de la somme " + somme);

alert("Voici le resultat de la multiplication " + multiplication);
*/


 function addition (nombre1,nombre2)
 {
 	var result;
 	result = nombre1 + nombre2;
 	return result;
}
	var nombre1 = Number(prompt("Saisir un chiffre"));
	var nombre2 = Number(prompt("Saisir un chiffre"));
	
	var resultat = addition(nombre1,nombre2);

 	alert("La somme est de " + resultat);


function multiplication (nombre1,nombre2)
 {
 	var result;
 	result = nombre1 * nombre2;
 	return result;
}
	var nombre1 = Number(prompt("Saisir un chiffre"));
	var nombre2 = Number(prompt("Saisir un chiffre"));
	
	var resultat = multiplication(nombre1,nombre2);

 	alert("La multiplication est de " + resultat);


