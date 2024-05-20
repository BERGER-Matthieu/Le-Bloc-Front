import { useEffect, useState } from "react"

export default function SocketMessageContainer (props) {
    const queryParameters = new URLSearchParams(window.location.search)
    const receiverId = queryParameters.get("receiverId")
    const [messages, setMessages] = useState([])

    if (props.socket) {
        props.socket.on('message', (msg) => {
            setMessages([...messages, msg])
        })
    }


    return (
        <div>
            <h2>SocketMessageContainer</h2>
            {messages.map((msg, index) => {
                return (
                    <div key={index}>
                        <p style={{color: (msg.receiverId == receiverId ? 'red': 'green')}}>{msg.content}</p>
                    </div>
                )
            })}
        </div>
    )
}