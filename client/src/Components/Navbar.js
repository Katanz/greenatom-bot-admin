import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className='nav-wrapper green accent-4' style={{ padding: '0 5rem' }}>
        <span className='brand-logo'>Панель администратора</span>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <NavLink to='/addquestion'>Добавить вопрос</NavLink>
          </li>

          <li>
            <NavLink to='/questions'>Все вопросы</NavLink>
          </li>
          <li>
            <a href='/' onClick={logoutHandler}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
