// Used Trivia api for 50 random questions on Computer Science: https://opentdb.com/api.php?amount=50&category=18&type=multiple
import React from "react";
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QCard.styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer: AnswerObject | undefined;
    questionNo: number;
    totalQuestions: number;
};

const QCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNo, totalQuestions}) => (
    <Wrapper>
        <p className="number">
            Question: {questionNo}/{totalQuestions}
        </p>
        <div dangerouslySetInnerHTML={{__html: question}}>
            <div>
                {answers.map(answer => (
                    <ButtonWrapper key={answer} $correct={userAnswer?.correctAnswer===answer} $userClicked={userAnswer?.answer===answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </div>
    </Wrapper>
);
export default QCard