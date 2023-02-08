import './register.css'
export default function Register() {
  return (
    <div className="login">
        <span className="loginTitle">Register</span>
        <form className="loginForm">
            <label>Username</label>
            <input 
                type="text" 
                className="registerInput" 
                placeholder="Enter your username..." 
            />
            <label>Email</label>
            <input 
                type="text" 
                className="registerInput" 
                placeholder="Enter your email..." 
            />
            <label>Password</label>
            <input 
                type="text" 
                className="registerInput" 
                placeholder="Enter your email..." 
            />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
