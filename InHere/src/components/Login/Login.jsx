import styles from "./Login.module.css"

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
            </form>
        </div>
    )
}

{/* Heres is a comment of code*/}

export default Login