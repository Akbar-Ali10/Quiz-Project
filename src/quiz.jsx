// import React, { useState } from 'react'
// import Question from './Question';

// function Quiz() {

//     const question = [
//         {
//             question: "What is React",
//             option: ["CSS Framwork", "React Library", "React Framwork", "Testing tool"],
//             answer: "React Library"
//         },
//         {
//             question: "What is 2 + 2",
//             option: ["3", "4", "5", "6"],
//             answer: "4"
//         }
//     ]

//     const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);

//     const [currentanswer, setcurrentanswer] = useState(null);

//     const [score, setscore] = useState(0)
//     const handleClick = (option) =>{
//        setcurrentanswer(option)
//        if(option === question[currentQuestionIndex].answer){
//         setscore(score + 1)
//        }
//     }

//     const handlenextquestion = () =>{
//         setcurrentQuestionIndex(currentQuestionIndex + 1);
//     }

//     return (
//         <>
//          {currentQuestionIndex < question.length ? <Question
//                 question={question[currentQuestionIndex].question}
//                 option={question[currentQuestionIndex].option}
//                 handleClick={handleClick} currentanswer={currentanswer}/>
//             <button disabled={currentanswer === null} className={currentanswer === null ? `button disable` : `button`} onClick={handlenextquestion} >   Next Question</button> : <div>your score is {score}</div>}

            
            
//         </>
//     )
// }

// export default Quiz;


import React, { useState } from 'react';
import Question from './Question';

function Quiz() {
    const question = [
        {
            question: "What is React",
            option: ["CSS Framework", "React Library", "React Framework", "Testing Tool"],
            answer: "React Library"
        },
        {
            question: "What is 2 + 2",
            option: ["3", "4", "5", "6"],
            answer: "4"
        }
    ];

    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [currentanswer, setcurrentanswer] = useState(null);
    const [score, setscore] = useState(0);

    const handleClick = (option) => {
        setcurrentanswer(option);
        if (option === question[currentQuestionIndex].answer) {
            setscore(score + 1);
        }
    };

    const handlenextquestion = () => {
        setcurrentanswer(null); // Reset the selected answer
        setcurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <>
            {currentQuestionIndex < question.length ? (
                <>
                    <Question
                        question={question[currentQuestionIndex].question}
                        options={question[currentQuestionIndex].option}
                        handleClick={handleClick}
                        currentanswer={currentanswer}
                    />
                    <button
                        disabled={currentanswer === null}
                        className={currentanswer === null ? 'button disable' : 'button'}
                        onClick={handlenextquestion}
                    >
                        Next Question
                    </button>
                </>
            ) : (
                <div>Your score is {score}.</div>
            )}
        </>
    );
}

export default Quiz;
