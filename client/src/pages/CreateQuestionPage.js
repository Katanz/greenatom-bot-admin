import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { useMessage } from '../hooks/message.hook'

export const CreateQuestionPage = () => {
  const history = useHistory()
  const message = useMessage()
  const { request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    title: '',
    trueAnswer: '',
    falseAnswer1: '',
    falseAnswer2: '',
    category: 'default',
  })
  const auth = useContext(AuthContext)

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request(
        '/api/question/add',
        'POST',
        { ...form },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      )

      alert('Вопрос добавлен')
      history.push(`/detailquestion/${data.question._id}`)
    } catch (error) {}
  }

  return (
    <div className='row'>
      <h4>Создать вопрос</h4>
      <div className='col s12' style={{ paddingTop: '2rem' }}>
        <div className='input-field'>
          <input
            placeholder='Вопрос'
            id='title'
            type='text'
            name='title'
            value={form.title}
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <input
            placeholder='Правильный ответ'
            id='trueAnswer'
            type='text'
            name='trueAnswer'
            value={form.trueAnswer}
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <input
            placeholder='Первый неправильный ответ'
            id='falseAnswer1'
            type='text'
            name='falseAnswer1'
            value={form.falseAnswer1}
            onChange={changeHandler}
          />
        </div>
        <div className='input-field'>
          <input
            placeholder='Второй неправильный ответ'
            id='falseAnswer2'
            type='text'
            name='falseAnswer2'
            value={form.falseAnswer2}
            onChange={changeHandler}
          />
          <select
            className='browser-default'
            name='category'
            value={form.category}
            onChange={changeHandler}>
            <option value='default' disabled>
              Выберите категорию
            </option>
            <option value='c#'>C#</option>
            <option value='java'>Java</option>
            <option value='js'>JavaScript</option>
            <option value='koa'>Koa</option>
          </select>
        </div>
        <div>
          <button
            className='btn green accent-3 black-text'
            onClick={registerHandler}>
            Создать
          </button>
        </div>
      </div>
    </div>
  )
}
