import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [mail, setMail] = useState('');

    const navigate = useNavigate();

    const tryRegister = async () => {
        axios({
            method: 'put',
            url: 'http://localhost:3001/LBB/createUser',
            data: {
                password: password,
                confirm_password: cPassword,
                username: username,
                mail: mail
            }
        })
        .then((res) => {
            console.log(res)
            document.cookie = `token=${res.data.token}`;
            navigate('/login')
        })
        .catch((res) => {
            console.log(res.response.data.error)
        })
    }

    return (
        <div>
            <h1>Register</h1>
            <form>
                <input type="text" value={username} placeholder="User" onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" value={mail} placeholder="Mail" onChange={(e) => setMail(e.target.value)}/>
                <input type="text" value={password} placeholder="Pass" onChange={(e) => setPassword(e.target.value)}/>
                <input type="text" value={cPassword} placeholder="Cass" onChange={(e) => setCPassword(e.target.value)}/>
                <input type="button" value="register" onClick={tryRegister}/>
            </form>
        </div>
    )
}