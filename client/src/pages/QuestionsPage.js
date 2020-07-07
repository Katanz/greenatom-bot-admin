import React, { useState, useContext, useCallback, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../Components/Loader'
import { QuestionList } from '../Components/QuestionList'

export const QuestionsPage = () => {
  const [questions, setQuestions] = useState([])
  const { loading, request } = useHttp()
  const { token } = useContext(AuthContext)

  const fetchQuestion = useCallback(async () => {
    try {
      const fetched = await request('/api/question', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })
      setQuestions(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchQuestion()
  }, [fetchQuestion])

  if (loading) {
    return <Loader />
  }

  return <>{!loading && <QuestionList questions={questions} />}</>
}
