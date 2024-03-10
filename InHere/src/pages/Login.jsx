import styles from "../components/Login/Login.module.css"
import LoginButton from "../components/Login/LoginButton.jsx"


function Login (){
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input">
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className="input">
                    <input type="text" placeholder="Password" required/>
                </div>

                <div className='registerLink'>
                    <p>First time in here? <a href="">Sign Up!</a></p>
                </div>

                <LoginButton/>

            </form>
        </div>
    )
}


export default Login