import { useNavigate } from "react-router-dom";

function LoginButton(){
    const navigate = useNavigate();

    return(
        <button onClick={() => navigate('/')}>Log In</button>
    )

}

export default LoginButton