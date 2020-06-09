import {YesNoQuestion} from "./YesNoQuestion";
import {MultipleChoiceQuestion} from "./MultipleChoiceQuestion";
import {SingleQuestion} from "./SingleQuestion";
import {TextQuestion} from "./TextQuestion";
import {GuessQuestion} from "./GuessQuestion";
import { Question } from "./Question";


let score: number = 0;
let amountQuestion: number;
let fragenPool: Question[];

let exampleYesNoQuestion: YesNoQuestion = new YesNoQuestion ("Ist der Himmel blau?", "YesNoQuestion");
exampleYesNoQuestion.correctAnswer = "Yes";

let exampleMultipleChoiceQuestion: MultipleChoiceQuestion = new MultipleChoiceQuestion("Aus welchen Farben kann man alle anderen Farben mischen?", "MultipleChoiceQuestion");
exampleMultipleChoiceQuestion.answers = ["blau", "rot", "cyan", "magenta", "geld", "grün"];
exampleMultipleChoiceQuestion.correctAnswer = ["cyan", "magenta", "gelb"];

let exampleTextQuestion: TextQuestion = new TextQuestion("Wer hat die Glühbirne erfunden?", "Textquestion");
exampleTextQuestion.correctAnswer = "Thomas Edison";

let exampleSingleQuestion: SingleQuestion = new SingleQuestion("Was ist 2+2 ?", "SingleQuestion");
exampleSingleQuestion.correctAnswer = 4;
exampleSingleQuestion.answers = ["3", "2", "4", "0"];

let exampleGuessQuestion: GuessQuestion = new GuessQuestion("Wie viele Studenten gibt es an der Hochschule Furtwangen (Standort Furtwangen)?", "GuessQuestion");
exampleGuessQuestion.correctAnswer = 3183;
exampleGuessQuestion.tollerance = 200;

fragenPool = [ exampleGuessQuestion, exampleMultipleChoiceQuestion, exampleSingleQuestion, exampleTextQuestion, exampleYesNoQuestion];

function main(): void {
    let userInput: string = prompt(
        "Willkommen bei diesem Quiz. Was möchten Sie tun?"
        + "1.Quizfrage beantworten" 
        + "2.Eine neue Quizfrage einbinden"
        + "3.Highscore ansehen, 4.Quiz beenden", 
        "1"
        );
    
    if (userInput == "1") { 
        answerQuestion();
        main();
    }
    if (userInput == "2") {
        newQuestion();
        main();
    }
    if (userInput == "3") {
        let userInput2: string = prompt("Dein aktueller Punktestand beträgt" + score + ". Du hast bislang " 
        + amountQuestion + " Fragen beantwortet.");
        main();
    }
}

main();

function newQuestion(): void {
    let userInput: string = prompt("Bitte geben sie den Typ der Frage an:", "[MultipleChoice,YesNoQuestion,SingleQuestion,TextQuestion oder GuessQuestion]");

    if (userInput == "MultipleChoiceQuestion") {
        multipleQuestionCreator();
    }

    if (userInput == "YesNoQuestion") {
        yesNoQuestionCreator();
    }

    if (userInput == "SingleQuestion") {
        singleQuestionCreator();
    }

    if (userInput == "TextQuest") {
        TextQuestionCreator();
    }

    if (userInput == "GuessQuestion") {
        guessQuestionCreator();
    }

    else {
        prompt("Deine Eingabe war ungültig, versuche es erneut");
        newQuestion();
    }
}

function answerQuestion(): void {
    let randomNumber: number = Math.floor(Math.random() * 10);
    let randomQuestion: Question = fragenPool[randomNumber];

    if (randomQuestion.type == "MultipleChoiceQuestion") {
        //multipleChoiceQuestion();
        prompt("Etwas ist schief gelaufen, eine neue Frage wird ausgewählt");
        answerQuestion();
    }
    if (randomQuestion.type == "YesNoQuestion") {
        yesNoQuestion();
    }
    if (randomQuestion.type == "SingleQuestion") {
        singleQuestion();
    }
    if (randomQuestion.type == "TextQuestion") {
        textQuestion();
    }
    if (randomQuestion.type == "GuessQuestion") {
        guessQuestion();
    }
}

function singleQuestionCreator(): SingleQuestion {
    let questionInserted: SingleQuestion = new SingleQuestion("", "");
    let question: string = prompt("Bitte geben Sie eine Frage ein", "Was ist 2+2?");

    questionInserted.type = "SingleQuestion";

    let tempAmountAnswers: string = prompt("Bitte geben sie die Anzahl der Antworten ein:");
    let amountAnswers: number = parseInt(tempAmountAnswers, 10);

    let input: string = prompt("Bitte geben sie die richtige Antwort ein:" + "4");
    
    questionInserted.answers.push(input);
    questionInserted.correctAnswer = 0;
    let i: number = 0;

    while ( i > amountAnswers - 1 ) {
        input = prompt("Bitte geben sie eine falsche Antwort ein:" + "-3000");
        questionInserted.answers.push(input);
        i += 1;
    }

    return questionInserted;
}

function yesNoQuestionCreator(): YesNoQuestion {
    let questionInserted: YesNoQuestion = new YesNoQuestion("", "");

    let input: string = prompt("Bitte geben Sie eine Frage ein:" + "Ist der Himmel grün?");
    questionInserted.question = input;

    questionInserted.type = "YesNoQuestion";

    input = prompt("Bitte geben sie die richtige Antwort ein", "[Yes, No]");

    if (input !== "Yes" || "No") {
        input = prompt("Bitte geben sie die richtige Antwort ein", "[Yes, No]");
    }

    if (input == "Yes" || "No") {
        questionInserted.answerYes = input;

        input = prompt("Bitte geben sie die falsche Antwort ein:", "[Yes, No]");
        questionInserted.answerNo = input;

        return questionInserted;
    }

}

function TextQuestionCreator(): TextQuestion {
    let questionInserted: TextQuestion = new TextQuestion("", "");

    let input: string = prompt("Bitte geben Sie eine Frage ein:");
    questionInserted.question = input;
    questionInserted.type = "TextQuestion";

    input = prompt("Bitte geben Sie die richtige Antwort ein:");
    questionInserted.correctAnswer = input;

    return questionInserted;
}

function guessQuestionCreator(): GuessQuestion {
    let questionInserted: GuessQuestion = new GuessQuestion("", "");

    let input: string = prompt("Bitte geben sie eine Frage ein:");
    questionInserted.question = input;
    questionInserted.type = "GuessQuestion";

    input = prompt("Bitte geben sie die richtige Antwort ein");
    questionInserted.correctAnswer = parseInt(input, 10);

    input = prompt("Bitte geben sie die Toleranz ein:");
    questionInserted.tollerance = parseInt(input, 10);

    return questionInserted;
}

function multipleQuestionCreator(): MultipleChoiceQuestion {
    let questionInserted: MultipleChoiceQuestion = new MultipleChoiceQuestion("", "");

    let input: string = prompt("Bitte geben Sie eine Frage ein:");
    questionInserted.question = input;
    questionInserted.type = "MultipleChoiceQuestion";

    input = prompt("Bitte geben Sie die Anzahl der Fragen ein:");
    let amountAnswers: number = parseInt(input, 10);

    input = prompt("Bitte geben sie die richtigen Antworten ein:", "Antwort 1, Antwort 2, ...");
    questionInserted.correctAnswer = input.split(",");

    let i: number = 0;
    while (i < amountAnswers - questionInserted.correctAnswer.length) {
        input = prompt("Bitte geben Sie die falschen Antworten ein:", "Antwort 1, Antwort 2,...");
        let inputArray: string[] = input.split(",");
        if (inputArray.length > amountAnswers - questionInserted.correctAnswer.length) {
            prompt("Es wurden zu viele falsche Antwortmöglichkeiten eingegeben");
        }
        else {
            questionInserted.correctAnswer = inputArray;
            i += 1;
        }
    }

    return questionInserted;

}

function singleQuestion(): void {
    let questionCurrent: SingleQuestion;
    let selectedAnswer: number;

    let input: string = prompt(questionCurrent.question);
    selectedAnswer = parseInt(input);

    if (selectedAnswer != questionCurrent.correctAnswer) {
        prompt("Leider falsch");
    }
    if (selectedAnswer == questionCurrent.correctAnswer) {
        prompt("Das ist richtig");
        score += 1;
    }
}

function yesNoQuestion(): void {
    let questionCurrent: YesNoQuestion;
    let selectedAnswer: string;

    selectedAnswer = prompt(questionCurrent.question 
        + questionCurrent.showAnswers() 
        + "Bitte wählrn dir ihre Antwort");
    
    if (selectedAnswer != "Yes" || "No") {
        prompt("Bitte nur mit Ja/Nein antworten");

        selectedAnswer = prompt(questionCurrent.question 
            + questionCurrent.showAnswers() 
            + "Bitte wählrn dir ihre Antwort");
    }

    if ( selectedAnswer == "Yes" || "No") {
        if (selectedAnswer != questionCurrent.correctAnswer) {
            prompt("Leider falsch");
        }
        if (selectedAnswer == questionCurrent.correctAnswer) {
            prompt("Das ist richtig");
            score++;
        }
    }
}

function textQuestion(): void {
    let questionCurrent: TextQuestion;
    let selectedAnswer: string;

    selectedAnswer = prompt(questionCurrent.question + "Bitte wählen Sie Ihre Antwort");

    if (selectedAnswer != questionCurrent.correctAnswer) {
        prompt("Leider falsch");
    }
    if (selectedAnswer == questionCurrent.correctAnswer) {
        prompt("DAs ist richtig");
        score++;
    }
}

function guessQuestion(): void {
    let questionCurrent: GuessQuestion;
    let selectedAnswer: number;

    let input: string = prompt(questionCurrent.question + "Bitte wählen Sie Ihre Antwort");
    selectedAnswer = parseInt(input);

    if ( selectedAnswer > questionCurrent.correctAnswer - questionCurrent.tollerance || selectedAnswer < questionCurrent.correctAnswer - questionCurrent.tollerance) {
        prompt("Das ist richtig");
        score++;
    }
    else {
        prompt("Leider falsch");
    }

}