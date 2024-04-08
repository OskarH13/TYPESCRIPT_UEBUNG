//Variablen

//Aufgabe 1
let meinname: string = "Oskar";

//Aufgabe 2
console.log(meinname);

//Aufgabe 3
let alter: number = 10;

//Aufgabe 4
console.log(alter);

//Aufgabe 5
let x: number = 5;
console.log(x)

//Aufgabe 6
let y: number = 10;
console.log(y)

//Aufgabe 7
let sum: number = x+y;
console.log (sum);

//Aufgabe 8
let sum: number = x-y;
console.log (sum);

// Variablen verarbeiten
let isGreater:boolean = x>y;
console.log(isGreater)

if (isGreater == true) {
    console.log("Es stimmt, x>y");
} else {
    console.log("Es stimmt nicht, x<y");
}

let Wochentag: string = "Samstag";
if (Wochentag == "Dienstag") {
    console.log("kein Wochenende");

} else if (Wochentag == "Donnerstag") {
    console.log("kein Montag");
} else if (Wochentag == "Samstag") {
    console.log("Wochenende");
} else {
    console.log("Montag");
}

function Wochentag_bestimmen(): void {
    let Wochentag: string = "Samstag";
if (Wochentag == "Dienstag") {
        console.log("kein Wochenende");
    
} else if (Wochentag == "Donnerstag") {
        console.log("kein Montag");
} else if (Wochentag == "Samstag") {
        console.log("Wochenende");
} else {
        console.log("Montag");
} 
}
Wochentag_bestimmen()

function WochentagmitArgument(Wochentag): void {
    if (Wochentag == "Dienstag") {
        console.log("kein Wochenende");
    
    } else if (Wochentag == "Donnerstag") {
        console.log("kein Montag");
    } else if (Wochentag == "Samstag") {
        console.log("Wochenende");
    } else {
        console.log("Montag");
    }
}
WochentagmitArgument(Wochentag)

let WochentagWochenende; string = "Samstag";
WochentagmitArgument(WochentagWochenende)