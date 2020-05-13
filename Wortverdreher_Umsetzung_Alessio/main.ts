let input: string = prompt("Gib deinen Namen ein", "Nobody");

//Konzept umsetzten: alessio
let sentence: string = input;



//case 1
let wordArrayA: string[] = substring (sentence , "whitespace") 

let i: number = 0;

while ( i < wordArrayA.length){
    wordArrayA[i] = stringReverse(wordArrayA[i], "char");
    i +=1;
    }


let sentenceA : string = wordArrayA.join(" ");
console.log(sentenceA);

//case 2
let sentenceB = stringReverse(sentence, "whitespace");
console.log(sentenceB);

//Case 3
let sentenceC = stringReverse(sentence, "char");
console.log(sentenceC);




//Top down prinzip beachten -> Funktionsdefinitionen nach den Aufrufen,
//nicht umgekehrt (und funktionen nach funktionsaufruf "chronologisch" ordnen
//erst wird substring aufgerufen -> substring soll vor stringReverse ausgeführt werden

//das liegt jetzt eher am UML aber "substring" wird bereits von javascript verwendet
//diese funktion zu überschreiben ist nicht ratsam
//desweiteren macht das standard js substring() etwas anderes, und die funktion ist allgemein
//unnötig, da sie genau das selbe macht wie string.split nur unnötig verschachtelt ist.

function substring(string: string, attribute: string) {
    if (attribute == "whitespace") {
        /*string.split(" ");
        return string;*/
        return string.split(" ");
    }
    else {
       // string.split("");
        //return string;
        return string.split("");
    }
}


function stringReverse(stringR : string, attribute: string) {
    if (attribute == "whitespace") {
        let stringArray:string[] = stringR.split(" ");
        stringArray = stringArray.reverse();
        stringR = stringArray.join(" ");
        return stringR;
    }
    else {
        //liegt wahrsch. wieder am UML aber der name stringArray ist hier nicht gut gewählt, da es sich hier um chars handelt
        //auch wenn javascript nicht zwischen chars und strings unterscheidet, wäre es in diesem kontext ersichtlicher und logischer
        //(meienr meinung nach) den array charArray zu nennen, was auch das problem der doppelten deklaration von stringArray in beiden
        //abfrage-zweigen lösen würde (wahrsch auch wieder uml spezifisch)
        let stringArray: string[] = stringR.split("");
        stringArray = stringArray.reverse();
        stringR = stringArray.join("");
        return stringR;
    } 
}


