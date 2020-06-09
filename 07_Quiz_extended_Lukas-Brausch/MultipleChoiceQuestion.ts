import {Question} from "./Question";

export class MultipleChoiceQuestion extends Question {
    answers: string[];
    correctAnswer: string[];

    showAnswers(): void {
        //
    }

    checkAnswers(selectedAnswer: number): void {
        //
    }
}