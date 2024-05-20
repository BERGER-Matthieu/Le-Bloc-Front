import SocketMessageContainer from "../socketMessageContainer";

export default function MessageContainer(props) {
    return (
        <div>
            <h2>MessageContainer</h2>
            <SocketMessageContainer socket={props.socket}/>
        </div>
    )
}