import {Question} from "./Question";

export class YesNoQuestion extends Question {
    answerYes: string;
    answerNo: string;
    correctAnswer: string;

    showAnswers(): void {
        //
    }

    checkAnswers(selectedAnswer: string): void {
        //
    }

}