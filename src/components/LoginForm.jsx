import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogin } from '../reducers/userReducer'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    dispatch(userLogin({ username, password }))
    setUsername('')
    setPassword('')
  }

  return (
    <div className="login_form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="username_login">
          <span>Username</span>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
          />
        </div>
        <div className="password_login">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </div>
        <button>
          Login
        </button>
        <div className='login_register'>
          <div>
            <p>Not a member yet?</p>
            <Link to='/register'>
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}


export default LoginForm