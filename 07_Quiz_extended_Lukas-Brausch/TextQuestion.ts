import {Question} from "./Question";

export class TextQuestion extends Question {
    correctAnswer: string;

    checkAnswer(insertedAnswer: string): void {
        //
    }
}