import MessageContainer from "../../components/messageContainer"
import Form from "../../components/form"

export default function Chat() {
    const queryParameters = new URLSearchParams(window.location.search)
    const receiverId = queryParameters.get("receiverId")


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
            <h1>Chat to {receiverId}</h1>
            <MessageContainer/>
            <Form fields={fields} button="Send" request="SendMessage"/>
        </div>
    )
}