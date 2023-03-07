import { MdError } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { userLogin } from '../reducers/userReducer'
import { removeMessage } from '../reducers/notificationReducer'

function LoginForm() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const error = useSelector((state) => state.notification.error)
  const location = useLocation().pathname

  useEffect(() => {
    if (error === 'Wrong password or id') {
      dispatch(removeMessage())
    }
  }, [location])

  const handleLogin = async (e) => {
    e.preventDefault()

    dispatch(userLogin({ username, password }))
    setUsername('')
    setPassword('')
  }

  return (
    <div className="login_form">
      <form>
        <h2>Login</h2>
        {error && (
        <div className="login_error">
          <MdError size={20} />
          {' '}
          {error}
        </div>
        )}
        <div className="username_login">
          <span>Username</span>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="password_login">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="login_register">
          <div>
            <p>Not a member yet?</p>
            <Link to="/register">
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
