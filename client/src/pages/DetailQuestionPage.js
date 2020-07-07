import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { QuestionCard } from '../Components/QuestionCard'
import { Loader } from '../Components/Loader'

export const DetailQuestionPage = () => {
  const { token } = useContext(AuthContext)
  const { request, loading } = useHttp()
  const [question, setQuestions] = useState(null)
  const questionId = useParams().id

  const getQuestion = useCallback(async () => {
    try {
      const fetched = await request(
        `/api/question/${questionId}`,
        'GET',
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      )
      setQuestions(fetched)
    } catch (e) {}
  }, [token, questionId, request])

  useEffect(() => {
    getQuestion()
  }, [getQuestion])

  if (loading) {
    return <Loader />
  }

  return <>{!loading && question && <QuestionCard question={question} />}</>
}
