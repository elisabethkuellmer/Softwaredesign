import {Question} from "./Question";

export class SingleQuestion extends Question {
    answers: string[];
    correctAnswer: number;

    showAnswers(): void {
        //
    }

    checkAnswers(selectedAnswers: number): void {
        //
    }
}