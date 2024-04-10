import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const tryLogin = async () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/LBB/loginUser',
            data: {
                password: password,
                username: username
            }
        })
        .then((res) => {
            console.log(res.data)
            document.cookie = `token=${res.data.jwt}`;
            navigate('/caca')
        })
        .catch((res) => {
            console.log(res.response.data.error)
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" value={username} placeholder="User" onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" value={password} placeholder="Pass" onChange={(e) => setPassword(e.target.value)}/>
                <input type="button" value="login" onClick={tryLogin}/>
            </form>
        </div>
    )
}