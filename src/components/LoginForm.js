import { useState } from 'react'
import { Link } from 'react-router-dom'

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
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
            />
          </div>
          <div className="password_login">
            <span>Password</span>
            <input
              type="text"
              name="username"
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </div>
          <button>Login</button>
          <div className='login_register'>
            <div>
              <p>Not a member yet?</p>
              <Link to='/register'> Register</Link>
            </div>
          </div>
        </form>
      </div >
    </div >
  )
}


export default LoginForm