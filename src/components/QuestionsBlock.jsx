import { forwardRef } from 'react'
import QuestionBlock from './QuestionBlock'

const QuestionsBlock = ({
                            quizItem,
                            setChosenAnswerItems,
                            chosenAnswerItems,
                            unansweredQuestionIds,
                            setUnansweredQuestionIds
                        }, ref) => {
    return (
        <>
            <h2 ref={ref}  className="question-title">{quizItem.text}</h2>
            <div className="questions-container">
                {quizItem.questions.map((question, _index) => (
                    <QuestionBlock
                        key={_index}
                        quizItemId={quizItem.id}
                        question={question}
                        setChosenAnswerItems={setChosenAnswerItems}
                        chosenAnswerItems={chosenAnswerItems}
                        unansweredQuestionIds={unansweredQuestionIds}
                        setUnansweredQuestionIds={setUnansweredQuestionIds}
                    />
                ))}
            </div>
        </>
    )
}

export default forwardRef(QuestionsBlock)