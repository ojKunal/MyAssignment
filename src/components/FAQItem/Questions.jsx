import React from 'react'

const Questions = () => {
    const Ques = [
        {
          "question": "Are flashcards suitable for all ages?"
        },
        {
          "question": "Explain the functioning of flashcards."
        },
        {
          "question": "Can flashcards aid in preparing for tests?"
        },
        {
          "question": "List some benefits of using flashcards."
        },
      ];
  return (
    <div>
        <div className=' absolute flex flex-col items-start '>
             {Ques.map((item ,i) => (
                <div className='border border-white rounded-lg py-2 bg-gradient-to-r from-blue-500 to-indigo-900 text-white px-3 cursor-pointer' key={i}><h3>{item.question} </h3></div>
             ))}
        </div>
    </div>
  )
}

export default Questions
