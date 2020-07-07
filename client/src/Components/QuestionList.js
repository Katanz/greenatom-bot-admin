import React from 'react'
import { Link } from 'react-router-dom'

export const QuestionList = ({ questions }) => {
  if (!questions.length) {
    return <p className='center'>Вопросов нет</p>
  }
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Вопрос</th>
          <th>Категория</th>
        </tr>
      </thead>

      <tbody>
        {questions.map((question, index) => {
          return (
            <tr key={question._id}>
              <td>{index + 1}</td>
              <td>{question.title}</td>
              <td>{question.category}</td>
              <td>
                <Link to={`/questiondetail/${question._id}`}> Открыть</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
