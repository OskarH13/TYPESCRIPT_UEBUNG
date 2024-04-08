//Variablen
//Aufgabe 1
var meinname = "Oskar";
//Aufgabe 2
console.log(meinname);
//Aufgabe 3
var alter = 10;
//Aufgabe 4
console.log(alter);
//Aufgabe 5
var x = 5;
console.log(x);
//Aufgabe 6
var y = 10;
console.log(y);
//Aufgabe 7
var sum = x + y;
console.log(sum);
//Aufgabe 8
var sum = x - y;
console.log(sum);
// Variablen verarbeiten
var isGreater = x > y;
console.log(isGreater);
if (isGreater == true) {
    console.log("Es stimmt, x>y");
}
else {
    console.log("Es stimmt nicht, x<y");
}
var Wochentag = "Samstag";
if (Wochentag == "Dienstag") {
    console.log("kein Wochenende");
}
else if (Wochentag == "Donnerstag") {
    console.log("kein Montag");
}
else if (Wochentag == "Samstag") {
    console.log("Wochenende");
}
else {
    console.log("Montag");
}
function Wochentag_bestimmen() {
    var Wochentag = "Samstag";
    if (Wochentag == "Dienstag") {
        console.log("kein Wochenende");
    }
    else if (Wochentag == "Donnerstag") {
        console.log("kein Montag");
    }
    else if (Wochentag == "Samstag") {
        console.log("Wochenende");
    }
    else {
        console.log("Montag");
    }
}
Wochentag_bestimmen();
function WochentagmitArgument(Wochentag) {
    if (Wochentag == "Dienstag") {
        console.log("kein Wochenende");
    }
    else if (Wochentag == "Donnerstag") {
        console.log("kein Montag");
    }
    else if (Wochentag == "Samstag") {
        console.log("Wochenende");
    }
    else {
        console.log("Montag");
    }
}
WochentagmitArgument(Wochentag);
var WochentagWochenende;
string = "Samstag";
WochentagmitArgument(WochentagWochenende);
