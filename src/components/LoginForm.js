import { useState } from 'react'
import Header from './Header'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='login_container'>
      <div className="login_form">
        <form>
          <h2>Login</h2>
          <div className="username_login">
            <span>Username</span>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="password_login">
            <span>Password</span>
            <input
              type="text"
              name="username"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button>Login</button>
          <div className='login_register'>
            <div>
              <p>Not a member yet?</p>
              <a href='/register'> Register</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


export default LoginForm