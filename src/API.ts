import { shuffleArray } from './utils'
export type Question={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answer: string[];
    question: string;
    type: string;
};
export type QuestionState=Question & {answers: string[]};
export enum Difficulty{
    EASY="easy",
    MEDIUM="medium",
    HARD="hard"
}
export const fetchQuizQuestions=async(amount: number, Difficulty: Difficulty): Promise<QuestionState[]>=>{
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&category=18&type=multiple&difficulty=${Difficulty}`;
    const data=await(await fetch(endpoint)).json();
    return data.results.map((question: Question)=>({
        ...question,
        answer: shuffleArray([...question.incorrect_answer, question.correct_answer])
    }))
};