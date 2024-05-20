import MessageContainer from "../../components/messageContainer"
import Form from "../../components/form"
import openSocket from 'socket.io-client';
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { GetUserById } from "../../common/requests";
import { useNavigate } from "react-router-dom";

export default function Chat() {
    const queryParameters = new URLSearchParams(window.location.search)
    const receiverId = queryParameters.get("receiverId")
    const [socket, setSocket] = useState(null);
    const [receiverName, setReceiverName] = useState("loading...")
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(async () => {
        const res = await GetUserById({"id": receiverId}, cookies, null)
        if (res.status === 200) {
            setReceiverName(res.data.username)
        } else {
            navigate("/home")
        }

        setSocket(openSocket(`http://localhost:3002?senderToken=${cookies.token}`));
        console.log("socket opened")
    }, [])

    const fields = [
        {
            type: "text",
            value: "",
            placeholder: "Message",
            key: "message"
        },
    ]

    return (
        <div>
            <h1>Chat to {receiverName}</h1>
            <MessageContainer socket={socket}/>
            <Form fields={fields} button="Send" socket={socket} request="SendMessage"/>
        </div>
    )
}