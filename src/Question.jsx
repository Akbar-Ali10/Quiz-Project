// import React from 'react'

// function Question({question, option, handleClick, currentanswer}) {
//     return (
//         <>
//          <h2>{question}</h2>
//         <ul>
//             {option.map((option, index)=>{
//                 <li key={index} onClick={()=> handleClick(option)}className={currentanswer === option ? `selected` : ``} >{option}</li>
//             })

//             }
//         </ul>
//         </>
//     )
// }

// export default Question;

import React from 'react';

function Question({ question, options, handleClick, currentanswer }) {
    return (
        <>
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(option)}
                        className={currentanswer === option ? 'selected' : ''}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: currentanswer === option ? 'lightblue' : 'white',
                            padding: '10px',
                            margin: '5px',
                            border: '1px solid #ddd'
                        }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Question;
