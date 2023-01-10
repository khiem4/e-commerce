const RegisterForm = () => {
  return (
    <div className='register_container'>
      <div className="register_form">
        <form>
          <h2>Register</h2>
          <div className="register_input">
            <span>Your name</span>
            <input
              type="text"
              name="username"
              id="register_username"
              placeholder='Your name'
            />
          </div>
          <div className="register_input">
            <span>Your email</span>
            <input
              type="text"
              name="email"
              id="register_email"
              placeholder='Email'
            />
          </div>
          <div className="register_input">
            <span>Password</span>
            <input
              type="text"
              name="password"
              id="register_password"
              placeholder='Password'
            />
          </div>
          <div className="register_input">
            <span>Confirm password</span>
            <input
              type="text"
              name="password_confirm"
              id="register_password_confirm"
              placeholder='Confirm password'
            />
          </div>
          <button>Create account</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm