import styles from "./LoginButton.module.css"

import { useNavigate } from "react-router-dom";

function LoginButton(){
    const navigate = useNavigate();

    return(

        <button className={styles.button} onClick={() => navigate('/home')}>Log In</button>

    )

}

export default LoginButton