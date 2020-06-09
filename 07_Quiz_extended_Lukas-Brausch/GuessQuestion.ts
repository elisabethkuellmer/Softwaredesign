import { Question } from "./Question";

export class GuessQuestion extends Question {
    tollerance: number;
    correctAnswer: number;

    checkAnswer(insertedAnswer: number): void {
        //
    }
}