import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { CreateQuestionPage } from './pages/CreateQuestionPage'
import { DetailQuestionPage } from './pages/DetailQuestionPage'
import { AuthPage } from './pages/AuthPage'
import { QuestionsPage } from './pages/QuestionsPage'

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <div>
        <Switch>
          <Route path='/' exact>
            <QuestionsPage />
          </Route>

          <Route path='/addquestion' exact>
            <CreateQuestionPage />
          </Route>

          <Route path='/questions' exact>
            <QuestionsPage />
          </Route>

          <Route path='/questiondetail/:id'>
            <DetailQuestionPage />
          </Route>

          <Redirect to='/questions' />
        </Switch>
      </div>
    )
  }
  return (
    <Switch>
      <Route path='/' exact>
        <AuthPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}

export default useRoutes
