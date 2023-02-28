import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeMessage, successMessage } from '../reducers/notificationReducer'
import { userLogin } from '../reducers/userReducer'
import userService from '../services/users'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleCreateAccount = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      return null
    }
    userService.create({ username, password })

    dispatch(successMessage('Your account has been created successfully '))
    dispatch(removeMessage(2000))
    dispatch(userLogin({ username, password }))
  }

  return (
    <div className='register_container'>
      <div className="register_form">
        <form>
          <h2>Register</h2>
          <div className="register_input">
            <span>User Name</span>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder='User Name'
              required
            />
            <p className={username.length < 5
              ? 'form_invalid'
              : 'form_valid'}
            >
              Username length minimum is 5 character
            </p>
          </div>
          <div className="register_input">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
            <p className={password.length < 6
              ? 'form_invalid'
              : 'form_valid'}
            >
              Password length minimum is 6 character
            </p>
          </div>
          <div className="register_input">
            <span>Confirm password</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder='Confirm password'
              required
            />
            <p className={password !== confirmPassword
              ? 'form_invalid'
              : 'form_valid'}
            >
              Password confirm does not the match
            </p>
          </div>
          <button onClick={handleCreateAccount}>
            Create account
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm