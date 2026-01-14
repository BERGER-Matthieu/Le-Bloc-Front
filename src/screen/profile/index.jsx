import { GetUserByToken } from "../../common/requests"
import { useCookies } from "react-cookie"
import { useState, useEffect } from "react"
import SpotList from "../../components/spot/list";
import BlocList from "../../components/bloc/list";

export default function Profile() {
    const [user, setUser] = useState("loading")
    const [cookie, setCookie, removeCookie] = useCookies()

    useEffect(() => {
        GetUserByToken(cookie.token)
        .then((res) => {
            setUser(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>{user === "loading" ? user : user.username}</h1>
            {
                user === "loading" 
                ?
                <div>loading...</div>
                :
                [
                <SpotList filter="userId" data={user.id}/>,
                <BlocList filter="userId" data={user.id}/>
                ]
            }
            
        </div>
    )
}