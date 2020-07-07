import React from 'react'

export const QuestionCard = ({ question }) => {
  return (
    <>
      <h5>Вопрос</h5>
      <p>{question.title}</p>

      <h5>Правильный ответ</h5>
      <p>{question.trueAnswer}</p>

      <h5>Первый неправильный ответ</h5>
      <p>{question.falseAnswer1}</p>

      <h5>Второй неправильный ответ</h5>
      <p>{question.falseAnswer2}</p>

      <h5>Категория</h5>
      <p>{question.category}</p>

      <button className='btn yellow' style={{ color: 'black' }} >
        Изменить
      </button>
      <button className='btn red' style={{ marginLeft: '2rem' }}>
        Удалить
      </button>
    </>
  )
}
